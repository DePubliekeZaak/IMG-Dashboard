var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as d3 from "d3";
import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxesV2 } from './index';
import { getParameter } from '@local/d3-services';
import { HtmlHeader, HtmlPopupV2, HtmlSegment } from '@local/elements';
export default class GraphControllerV2 {
    constructor(main, data, element, mapping, segment, size) {
        this.main = main;
        this.data = data;
        this.element = element;
        this.mapping = mapping;
        this.segment = segment;
        this.size = size;
        this.element = d3.select(element).node();
        this.firstMapping = this.mapping.parameters[0] && this.mapping.parameters[0][0] ? getParameter(this.mapping, 0) : false;
        this.parameters = {};
        this.scales = {};
        this.axes = {};
        this.config = { margin: { top: 0, bottom: 0, left: 0, right: 0 }, padding: { top: 0, bottom: 0, left: 0, right: 0 }, scales: [], axes: [], extra: {} };
        this.dimensions = { svgWidth: 0, width: 0, svgHeight: 0, height: 0 };
    }
    _init() {
        let self = this;
        // get parameters from mapping
        for (let p of this.mapping.parameters) {
            for (let m of p.filter((p) => p.scale !== null)) {
                if (m.scale != undefined) {
                    this.parameters[m.scale] = m.column;
                }
            }
        }
        // add .. overrule from config.scales
        for (let s of this.config.scales.filter((s) => s.parameter && s.parameter != null)) {
            this.parameters[s.slug] = s.parameter;
        }
        if (this.mapping.description && this.mapping.description !== '') {
            this.popup = new HtmlPopupV2(this.element, this.mapping.description);
        }
        this.htmlSegment = new HtmlSegment(this.element);
        if (this.mapping.header) {
            this.htmlHeader = new HtmlHeader(this.element, this.mapping.header != undefined ? this.mapping.header : this.firstMapping['label']);
            this.htmlHeader.draw();
        }
        let chartObjects = ChartObjects();
        this.config = Object.assign(chartObjects.config(), this.config);
        this.dimensions = chartObjects.dimensions();
        this.svg = chartObjects.svg();
    }
    _svg(svgWrapper) {
        // with elementID we can create a child element as svg container with a fixed height. 
        this.element = d3.select(svgWrapper ? svgWrapper : this.element).node();
        this.chartDimensions = new ChartDimensions(this.element, this.config);
        this.dimensions = this.chartDimensions.measure(this.dimensions);
        this.chartSVG = new ChartSVG(this.element, this.config, this.dimensions, this.svg);
        for (let c of this.config.scales) {
            this.scales[c.slug] = new ChartScale(this, c);
        }
        for (let c of this.config.axes) {
            this.axes[c.slug] = new ChartAxesV2(this, c);
        }
    }
    redraw(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.svg && this.svg.body == undefined)
                return;
            this.dimensions = this.chartDimensions.measure(this.dimensions);
            if (this.dimensions.width === 0) {
                this.dimensions = this.chartDimensions.fix(this.size);
            }
            // this.dimensions = {
            //     svgHeight: 400,
            //     svgWidth: 400,
            //     width: 400,
            //     height: 400
            // }
            this.chartSVG.redraw(this.dimensions);
            if (this.config.scales) {
                for (let c of this.config.scales) {
                    this.scales[c.slug].reset();
                }
            }
            for (let a of this.config.axes) {
                this.axes[a.slug].redraw(this.dimensions, this.scales[a.scale].scale, data.slice);
            }
            return;
        });
    }
    draw(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return;
        });
    }
    prepareData(data) {
    }
    _update(newData, segment, update) {
        return __awaiter(this, void 0, void 0, function* () {
            let self = this;
            if (update && this.config.extra.noUpdate) {
                return;
            }
            if (this.mapping.description) {
                this.popup.attachData(newData);
            }
            let data = self.prepareData(newData);
            yield self.draw(data);
            yield self.redraw(data);
            this.main.window.addEventListener("resize", () => self.redraw(data), false);
            if (this.mapping.segmentIndicator) {
                this.htmlSegment.draw(segment);
            }
            return;
        });
    }
    _addScale(slug, type, direction, parameter) {
        this.config.scales.push({
            slug,
            type,
            direction,
            parameter
        });
    }
    _addAxis(slug, scale, position, format, extra, label) {
        this.config.axes.push({
            slug,
            scale,
            position,
            format,
            extra,
            label
        });
    }
    _addMargin(top, bottom, left, right) {
        this.config.margin = {
            top,
            bottom,
            left,
            right
        };
    }
    _addPadding(top, bottom, left, right) {
        this.config.padding = {
            top,
            bottom,
            left,
            right
        };
    }
}

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const d3 = __importStar(require("d3"));
const index_1 = require("./index");
const d3_services_1 = require("@local/d3-services");
const elements_1 = require("@local/elements");
class GraphControllerV2 {
    constructor(main, data, element, mapping, segment) {
        this.main = main;
        this.data = data;
        this.element = element;
        this.mapping = mapping;
        this.segment = segment;
        this.element = d3.select(element).node();
        this.firstMapping = this.mapping.parameters[0] && this.mapping.parameters[0][0] ? (0, d3_services_1.getParameter)(this.mapping, 0) : false;
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
            this.popup = new elements_1.HtmlPopupV2(this.element, this.mapping.description);
        }
        this.htmlSegment = new elements_1.HtmlSegment(this.element);
        if (this.mapping.header) {
            this.htmlHeader = new elements_1.HtmlHeader(this.element, this.mapping.header != undefined ? this.mapping.header : this.firstMapping['label']);
            this.htmlHeader.draw();
        }
        let chartObjects = (0, index_1.ChartObjects)();
        this.config = Object.assign(chartObjects.config(), this.config);
        this.dimensions = chartObjects.dimensions();
        this.svg = chartObjects.svg();
    }
    _svg(svgWrapper) {
        // with elementID we can create a child element as svg container with a fixed height. 
        this.element = d3.select(svgWrapper ? svgWrapper : this.element).node();
        this.chartDimensions = new index_1.ChartDimensions(this.element, this.config);
        this.dimensions = this.chartDimensions.measure(this.dimensions);
        this.chartSVG = new index_1.ChartSVG(this.element, this.config, this.dimensions, this.svg);
        for (let c of this.config.scales) {
            this.scales[c.slug] = new index_1.ChartScale(this, c);
        }
        for (let c of this.config.axes) {
            this.axes[c.slug] = new index_1.ChartAxesV2(this, c);
        }
    }
    redraw(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.svg && this.svg.body == undefined)
                return;
            this.dimensions = this.chartDimensions.measure(this.dimensions);
            console.log(this.dimensions);
            this.dimensions = {
                svgHeight: 400,
                svgWidth: 400,
                width: 400,
                height: 400
            };
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
exports.default = GraphControllerV2;

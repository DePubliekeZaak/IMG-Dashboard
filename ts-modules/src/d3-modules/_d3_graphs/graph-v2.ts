import * as d3 from "d3";
import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxesV2 } from './index';
import { Dimensions } from '@local/d3_types';
import { IGraphMapping, IMappingOption, Mapping, IGraphControllerV2, IGraphConfigV2 } from '@local/d3_types';
import { getParameter } from '@local/d3-services';
import { HtmlHeader, HtmlPopupV2, HtmlSegment } from '@local/elements';

export default class GraphControllerV2 implements IGraphControllerV2  {

    config : IGraphConfigV2;
    dimensions: Dimensions;
    firstMapping: IMappingOption;
    svg;
    yScale;
    xScale;

    chartDimensions;
    chartSVG;

    scales: any;
    axes: any;
    parameters: any;

    htmlHeader;
    htmlSegment;

    popup;

    constructor(
        public main: any,
        public data : any,
        public element : HTMLElement,
        public mapping: IGraphMapping,
        public segment: string,
        public size?: number[]
    ) {
        this.element = d3.select(element).node()!;
        this.firstMapping = this.mapping.parameters[0] && this.mapping.parameters[0][0] ? getParameter(this.mapping,0) : false;
        this.parameters = {};
        this.scales = {};
        this.axes = {};
        this.config = { margin: { top: 0, bottom: 0, left: 0, right: 0 }, padding: { top: 0, bottom: 0, left: 0, right: 0 }, scales: [], axes: [], extra: {} }
        this.dimensions = { svgWidth : 0, width: 0, svgHeight: 0, height: 0 }
    }

    _init() {

        let self = this;

        // get parameters from mapping
        for (let p of this.mapping.parameters) {
            for (let m of p.filter( (p: Mapping) => p.scale !== null) ) {
                if(m.scale != undefined) {
                    this.parameters[m.scale] = m.column;
                }
            }
        }
        // add .. overrule from config.scales
        for (let s of this.config.scales.filter( (s) => s.parameter && s.parameter != null)) {
            this.parameters[s.slug] = s.parameter;
        }

        if (this.mapping.description && this.mapping.description !== '' ) {
            this.popup = new HtmlPopupV2(this.element,this.mapping.description);
        }

        this.htmlSegment = new HtmlSegment(this.element);
       
        if (this.mapping.header) {
            this.htmlHeader = new HtmlHeader(this.element, this.mapping.header != undefined ? this.mapping.header : this.firstMapping['label']);
            this.htmlHeader.draw(); 
        }

        let chartObjects = ChartObjects();
        this.config = Object.assign(chartObjects.config(),this.config);
        this.dimensions = chartObjects.dimensions();
        this.svg = chartObjects.svg();
 
    }

    _svg(svgWrapper?: HTMLElement) {
        // with elementID we can create a child element as svg container with a fixed height. 
        this.element = d3.select(svgWrapper ? svgWrapper : this.element).node()!;
        this.chartDimensions = new ChartDimensions(this.element, this.config);
        this.dimensions = this.chartDimensions.measure(this.dimensions);

        this.chartSVG = new ChartSVG(this.element, this.config, this.dimensions, this.svg);

        for (let c of this.config.scales) {
            this.scales[c.slug] = new ChartScale(this,c)
        }

        for (let c of this.config.axes) {
            this.axes[c.slug] = new ChartAxesV2(this, c);

        }
    }

    async redraw(data: any): Promise<void> {

        if (this.svg && this.svg.body == undefined) return;

        this.dimensions = this.chartDimensions.measure(this.dimensions);

        if (this.dimensions.width === 0) {
            this.dimensions = this.chartDimensions.fix(this.size)
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
                this.scales[c.slug].reset()
            }
        }

        for (let a of this.config.axes) {
            this.axes[a.slug].redraw(this.dimensions,this.scales[a.scale].scale, data.slice)
        }

        return;
    }

    async draw(data: any): Promise<void> {

        return;
    }


    prepareData(data: any) {

    }

    async _update(newData: any,segment: string, update: boolean): Promise<void>{

        let self = this;

        if (update && this.config.extra.noUpdate) { return; }

        if (this.mapping.description) {
            this.popup.attachData(newData);
        }

        let data = self.prepareData(newData);
        await self.draw(data);
        await self.redraw(data);
        this.main.window.addEventListener("resize", () => self.redraw(data), false);

        if(this.mapping.segmentIndicator) {
            this.htmlSegment.draw(segment);
        }

        return;
    }

    _addScale(slug: string, type: string, direction: string, parameter?: string) {

        this.config.scales.push({
            slug,
            type,
            direction,
            parameter
        })
    }

    _addAxis(slug: string, scale: string, position: string, format?: string, extra?: string, label?: string) {

        this.config.axes.push({
            slug,
            scale,
            position,
            format,
            extra,
            label
        })
    }

    _addMargin(top: number,bottom: number,left: number,right: number) {

        this.config.margin = {
            top,
            bottom,
            left,
            right
        }
    }

    _addPadding(top: number,bottom: number,left: number,right: number) {

        this.config.padding = {
            top,
            bottom,
            left,
            right
        }
    }
}
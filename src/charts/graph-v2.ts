import * as d3 from "d3";
import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxesV2 } from '../chart-basics/module';
import { Dimensions } from '../types/dimensions';

import { GraphObject } from '../types/graphObject';
import { IGraphMapping, Mapping } from '../types/mapping';
import { getFirstMapping, getParameter } from '../d3-services/_helpers';
import { HtmlHeader, HtmlPopup, HtmlSegment } from '../html-elements/module';
import { DataPart } from "../types/data";
import { IChartDimensions } from "../chart-basics/chart-dimensions";
import { IGraphConfigV2 } from "../types/graphConfig";

export interface IGraphControllerV2 {

    main: any, // main controller 
    data: DataPart[],
    element: HTMLElement,
    svgWrapper?: HTMLElement,
    mapping: IGraphMapping,
    config: IGraphConfigV2,
    segment: string,

    // yParameter: string,
    // xParameter : string,
    dimensions: Dimensions,
    firstMapping: any;
    svg;
    // yScale;
    // xScale;

    // classes 
    chartDimensions : IChartDimensions,
    chartSVG? : any,
    // chartXScale? : any,
    // chartYScale? : any,
    htmlHeader? : any,
    htmlSegment? : any,
    popup? : any,
}


export class GraphControllerV2 implements IGraphControllerV2  {

    config : IGraphConfigV2;
    // yParameter: string;
    // xParameter : string;
    dimensions: Dimensions;
    firstMapping: any;
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
        public segment: string
    ) {
        this.element = d3.select(element).node();
        this.firstMapping = getParameter(this.mapping,0);
        this.parameters = {};
        this.scales = {};
        this.axes = {};
        this.config = { margin: { top: 0, bottom: 0, left: 0, right: 0 }, padding: { top: 0, bottom: 0, left: 0, right: 0 }, scales: [], axes: [], extra: {} }
    }

    _init() {

        let self = this;

        // get parameters from mapping
        for (let p of this.mapping.parameters) {
            for (let m of p.filter( (p: Mapping) => p.scale !== null) ) {
                this.parameters[m.scale] = m.column;
            }
        }
        // add .. overrule from config.scales
        for (let s of this.config.scales.filter( (s) => s.parameter && s.parameter != null)) {
            this.parameters[s.slug] = s.parameter;
        }

        if (this.mapping.description) {
            this.popup = new HtmlPopup(this.element,this.mapping.description);
        }

        this.htmlSegment = new HtmlSegment(this.element);
       
        if (this.mapping.header) {
            this.htmlHeader = new HtmlHeader(this.element, this.mapping.header != undefined ? this.mapping.header : this.firstMapping.label);
            this.htmlHeader.draw(); 
        }

        let chartObjects = ChartObjects();
        this.config = Object.assign(chartObjects.config(),this.config);
        this.dimensions = chartObjects.dimensions();
        this.svg = chartObjects.svg();
 
    }

    _svg(svgWrapper?: HTMLElement) {
        // with elementID we can create a child element as svg container with a fixed height. 
        this.element = d3.select(svgWrapper ? svgWrapper : this.element).node();
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

    redraw(data: any) {

        if(this.svg && this.svg.body == undefined) return;

        this.dimensions = this.chartDimensions.measure(this.dimensions);
 
        this.chartSVG.redraw(this.dimensions);

        if (this.config.scales) {
            for (let c of this.config.scales) {    
                this.scales[c.slug].reset()
            }
        }

        for (let a of this.config.axes) {
            this.axes[a.slug].redraw(this.dimensions,this.scales[a.scale].scale, data.slice)
        }
    }

    draw(data: any) {

    }


    prepareData(data: any) {

    }

    _update(newData: any,segment: string, update: boolean) {

        let self = this;

        if(update && this.config.extra.noUpdate) { return; }

        if (this.mapping.description) {
            this.popup.attachData(newData);
        }

        let data = self.prepareData(newData);
        self.draw(data);
        self.redraw(data);
        window.addEventListener("resize", () => self.redraw(data), false);

        if(this.mapping.segmentIndicator) {
            this.htmlSegment.draw(segment);
        }
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
// import * as d3 from "d3";
// import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxes } from '../chart-basics/module';
// import { Dimensions } from '../types/dimensions';

// import { GraphObject } from '../types/graphObject';
// import { Mapping } from '../types/mapping';
// import { getFirstMapping } from '../d3-services/_helpers';
// import { HtmlHeader, HtmlPopup, HtmlSegment } from '../html-elements/module';
// import { DataPart } from "../types/data";
// import { IChartDimensions } from "../chart-basics/chart-dimensions";

// export interface IGraphController {

//     main: any, // main controller 
//     data: DataPart[],
//     element: HTMLElement,
//     svgWrapper?: HTMLElement,
//     graphObject: GraphObject,
//     segment: string,

//     yParameter: string,
//     xParameter : string,
//     dimensions: Dimensions,
//     firstMapping: any;
//     svg;
//     yScale;
//     xScale;

//     // classes 
//     chartDimensions : IChartDimensions,
//     chartSVG? : any,
//     chartXScale? : any,
//     chartYScale? : any,
//     htmlHeader? : any,
//     htmlSegment? : any,
//     popup? : any,
// }


// export class GraphController implements IGraphController  {

//     config;
//     yParameter: string;
//     xParameter : string;
//     dimensions: Dimensions;
//     firstMapping: any;
//     svg;
//     yScale;
//     xScale;

//     chartDimensions;
//     chartSVG;
//     chartXScale;
//     chartYScale;
//     scales: any;
//     axes: any;

//     htmlHeader;
//     htmlSegment;

//     popup;

//     constructor(
//         public main: any,
//         public data : any,
//         public element : HTMLElement,
//         public graphObject: GraphObject,
//         public segment: string
//     ) {
//         this.element = d3.select(element).node();
//         this.firstMapping = getFirstMapping(this.graphObject);
//         this.yParameter =  this.graphObject.config.yParameter || this.firstMapping.column;
//         this.xParameter = typeof this.graphObject.config.xParameter != "boolean" ? this.graphObject.config.xParameter : "_date";
//         this.scales = {};
//         this.axes = {};
//     }

//     _init() {

//         let self = this;

//         if (this.graphObject.description) {
//             this.popup = new HtmlPopup(this.element,this.graphObject.description);
//         }


//         this.htmlSegment = new HtmlSegment(this.element);
       
//         if (this.graphObject.config.extra.header) {
//             this.htmlHeader = new HtmlHeader(this.element, this.graphObject.config.extra.header != undefined ? this.graphObject.config.extra.header : this.firstMapping.label);
//             this.htmlHeader.draw(); 
//         }

//         let chartObjects = ChartObjects();
//         this.graphObject.config = Object.assign(chartObjects.config(),this.graphObject.config);
//         this.dimensions = chartObjects.dimensions();
//         this.svg = chartObjects.svg();
 
//     }

//     _svg(svgWrapper?: HTMLElement) {
//         // with elementID we can create a child element as svg container with a fixed height. 
//         this.element = d3.select(svgWrapper ? svgWrapper : this.element).node();
//         this.chartDimensions = new ChartDimensions(this.element, this.graphObject.config);
//         this.dimensions = this.chartDimensions.measure(this.dimensions);

//         this.chartSVG = new ChartSVG(this.element, this.graphObject.config, this.dimensions, this.svg);
        
//         this.chartXScale = new ChartScale(this.graphObject.config.xScaleType, this.graphObject.config, this.dimensions);
//         this.chartYScale = new ChartScale(this.graphObject.config.yScaleType, this.graphObject.config, this.dimensions);  
        
//     }

//     redraw(data: any) {

//         if(this.svg && this.svg.body == undefined) return;

//         this.dimensions = this.chartDimensions.measure(this.dimensions);
 
//         this.chartSVG.redraw(this.dimensions);

    
//         this.xScale = this.chartXScale.reset('horizontal', this.dimensions, this.xScale);
//         this.yScale = this.chartYScale.reset('vertical', this.dimensions, this.yScale);
        
//     }

//     draw(data: any) {

//     }


//     prepareData(data: any) {

//     }

//     _update(newData: any,segment: string, update: boolean) {

//         let self = this;

//         if(update && this.graphObject.config.extra.noUpdate) { return; }

//         if (this.graphObject.description) {
//             this.popup.attachData(newData);
//         }

//         let data = self.prepareData(newData);
//         self.draw(data);

//         // onverklaarbaar ding met breedte van element
//         self.redraw(data);

//         window.addEventListener("resize", () => self.redraw(data), false);

//         if(this.graphObject.config.extra.segmentIndicator) {
//             this.htmlSegment.draw(segment);
//         }
//     }
// }
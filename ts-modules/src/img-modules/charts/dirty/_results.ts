// import * as d3 from "d3";

// import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxes } from '../chart-basics/module';
// import {ChartAxisGrid, ChartBarStackedHorizontal } from "../svg-elements/module";
// import { HtmlHeader, HtmlPopup} from "@local/elements";

// export class Results  {

//     htmlHeader;
//     popup;

//     element;
//     yParameter;
//     dimensions;
//     svg;

//     chartDimensions;
//     chartSVG;
//     chartXScale;
//     chartYScale;
//     chartAxis;

//     yScale;
//     xScale;
//     bottomAxis;
//     leftAxis;

//     chartBars;
//     chartAxisGrid;

//     stack;


//     constructor(
//         private data,
//         private elementID,
//         private config,
//         private dataMapping,
//         private description : string
//     ) {
//         this.element = d3.select(elementID).node();
//         this.yParameter = this.dataMapping[0]['column'];
//     }


//     init() {

//         let self = this;
//         let chartObjects = ChartObjects();
//         this.config = Object.assign(chartObjects.config(),this.config);
//         this.dimensions = chartObjects.dimensions();
//         this.svg = chartObjects.svg();

//         this.config.paddingInner = 0;
//         this.config.paddingOuter = 0;

//         // get dimensions from parent element
//         this.chartDimensions = new ChartDimensions(this.elementID, this.config);
//         this.dimensions = this.chartDimensions.get(this.dimensions);

//         // create svg elements without data
//         this.chartSVG = new ChartSVG(this.elementID, this.config, this.dimensions, this.svg);
//         this.chartXScale = new ChartScale(this.config.xScaleType, this.config, this.dimensions);
//         this.chartYScale = new ChartScale(this.config.yScaleType, this.config, this.dimensions);
//         this.bottomAxis = new ChartAxes(this.config, this.svg, 'bottom',this.chartXScale);
//         this.leftAxis = new ChartAxes(this.config, this.svg,'left',this.chartYScale);

//         this.chartBars = new ChartBarStackedHorizontal(this.config, this.svg);
//         this.chartAxisGrid =  new ChartAxisGrid(this.config, this.dataMapping, this.svg);
//         this.chartAxisGrid.draw();

//         // get dimensions from parent element
//         this.chartDimensions = new ChartDimensions(this.elementID, this.config);
//         this.dimensions = this.chartDimensions.get(this.dimensions);

//         this.htmlHeader = new HtmlHeader(this.element,this.config.extra.header);
//         this.htmlHeader.draw();

//         this.popup = new HtmlPopup(this.element,this.description);

//         self.update(this.data);
//         //  this.legend();


//     }

//     prepareData(json)  {

//         let data = [];
//         let lastWeek = json[0];


//         // neededColumns = neededColumns.reduce((acc, val) => acc.concat(val), []);
//       //  console.log(lastWeek);



//         for (let mapping of this.dataMapping.reverse()) {

//             let neededColumns = ['_date','schademeldingen'];
//             let o = {
//                 colour : mapping[0].colour,
//                 group : mapping[0].group
//             };
//             for (let p of Object.entries(lastWeek))  {
//                 if (neededColumns.indexOf(p[0]) > -1 ) {
//                     o[p[0]] = p[1];
//                 }
//             }

//             for (let m of mapping) {
//                 o[m.label] = lastWeek[m.column]
//             //    o["label"] = m.label
//             }

//             data.push(o);
//         }


//     //    console.log(data);

//         this.stack = d3.stack()
//             .keys(Object.keys(data[0]).filter(key => {
//                 return ['_date','gemeente','label','colour','group','schademeldingen'].indexOf(key) < 0
//             } ));

//         let stackedData = this.stack(data);

//         // let minBarWidth = 60;
//         //
//         // let elWidth = d3.select(this.elementID).node().getBoundingClientRect().width;
//         //
//         // data = data.slice(data.length - Math.floor(elWidth / minBarWidth),data.length);

//         return { data, stackedData };
//     }


//     redraw(data, stackedData) {

//         //   let colour = this.dataMapping.find((m) => m.column === property)['colour'];

//         this.yScale = this.chartYScale.set(data.map ( d => d[this.config.yParameter]));

//         // on redraw chart gets new dimensions
//         this.dimensions = this.chartDimensions.get(this.dimensions);
//         this.chartSVG.redraw(this.dimensions);
//         // new dimensions mean new scales

//         this.xScale = this.chartXScale.reset('horizontal', this.dimensions,this.xScale);

//         this.yScale = this.chartYScale.reset('vertical', this.dimensions,this.yScale);

//         this.bottomAxis.redraw(this.config.xScaleType, this.dimensions, this.xScale);
//     //    this.leftAxis.redraw(this.config.yScaleType, this.dimensions, this.yScale);
//         // // redraw data
//      //   this.chartAxisGrid.redraw(this.dimensions,this.xScale,this.yScale,'horizontal', data);

//         this.chartBars.redraw(this.dimensions,this.xScale,this.yScale,this.config.yParameter);
//     }

//     draw(data, stackedData) {

//         this.xScale = this.chartXScale.set(data.map(d => d[this.config.xParameter]));

//         this.chartBars.draw(data, stackedData);
//     }

//     update(newData) {

//         let self = this;
//         let { data, stackedData } = this.prepareData(newData);
//         this.draw(data, stackedData);
//         this.redraw(data, stackedData);
//         window.addEventListener("resize", () => self.redraw(data,stackedData), false);

//     }
// }

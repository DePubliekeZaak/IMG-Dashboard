// import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxes } from '../chart-basics/module';

// import {HtmlCircle, HtmlFormule, HtmlHeader, HtmlPopup, HtmlSegment} from '../html-elements/module';
// import * as d3 from "d3";

// export class TevredenheidFormule  {

//     element;

//     dimensions;

//     htmlHeader;
//     htmlFormule

//     link;
//     popup;

//     constructor(

//         private data : any,
//         private elementID : string,
//         private config : any,
//         private dataMapping : [any],
//         private description,
//         private segment
//     ){

//         this.element = d3.select(this.elementID).node();
//     }

//     init() {

//         let self = this;

//         this.htmlHeader = new HtmlHeader(this.element,this.dataMapping[0].label);
//         this.htmlFormule = new HtmlFormule(this.config,this.dataMapping,this.element,'');


//         // this.link = new HtmlLink(this.element,this.config.extra.link,'');
//         this.htmlFormule.draw();

//       //  this.popup = new HtmlPopup(this.element,this.description);
//         this.htmlHeader.draw();


//         self.update(this.data,this.segment,false);

//     }

//     prepareData(newData)  {

//         // console.log(newData[0]);

//         let neededColumns = ['_date','fysieke_schade_besluiten','waardedaling_besluiten','waardedaling_doorlopend_cijfer','fysieke_schade_doorlopend_cijfer'];
//         let hasEnoughData = true;

//         let data = {};

//         for (let column of neededColumns) {

//             if (newData[0][column] !== null) {
//                 data[column] = newData[0][column]
//             } else {
//                 console.log(column);
//                 hasEnoughData = false;
//             }
//         }

//         console.log(data);

//         return (hasEnoughData) ? data : false;

//     }

//     redraw(data) {

//     //         this.htmlCircle.redraw(data,this.yParameter);
//         this.htmlFormule.redraw(data,'');


//    }


//     update(newData,segment,update) {

//         if(update && this.config.extra.noUpdate) { return; }

//         let self = this;

//         let data = self.prepareData(newData);

//         self.redraw(data);

//         window.addEventListener("resize", () => self.redraw(data), false);
//     }

// }

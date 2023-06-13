// import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxes } from '../chart-basics/module';

// import { ChartMultiBars, ChartAxisGrid } from '../svg-elements/module';

// import * as d3 from 'd3';

// export class MultiBarProgression  {

//     element;
//     radios;
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

//     chartMultiBars;
//     chartAxisGrid;


//     constructor(
//         private data,
//         private elementID,
//         private config,
//         private dataMapping
//     ) {
//         this.element = d3.select(elementID).node();

//     }

//     init() {



//         let self = this;

//       //  this.radios = [].slice.call(document.querySelectorAll('.selector li input[type=radio]'));

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

//         this.chartMultiBars = new ChartMultiBars(this.config, this.svg);
//         this.chartAxisGrid =  new ChartAxisGrid(this.config, this.dataMapping, this.svg);
//         this.chartAxisGrid.draw();

//         self.update(this.data);
//         this.legend();
//     }

//     legend() {

//         let legendEl = this.element.parentNode.querySelector('.legend').remove();

//         if (legendEl) {
//             legendEl.parentNode.removeChild(legendEl)
//         }

//         let legendContainer = document.createElement('ul');
//         legendContainer.classList.add('legend');
//         legendContainer.classList.add('horizontal');

//         this.dataMapping.forEach( (parameter) => {

//             let parameterContainer = document.createElement('li');

//             let blokje = document.createElement('span');
//             blokje.classList.add('rect');
//             blokje.classList.add(parameter[0].colour);
//             let text = document.createElement('span');
//             text.classList.add('small-label');
//             text.innerText = parameter[0].label;

//             parameterContainer.appendChild(blokje);
//             parameterContainer.appendChild(text);

//             legendContainer.appendChild(parameterContainer);

//         })

//         this.element.parentNode.insertBefore(legendContainer, this.element.nextSibling);
//     }

//     prepareData(newData)  {

//         let data = [];

//         for (let week of newData) {

//             let o = {};
//             o['properties'] = [];
//             o['_date'] = week['_date'];

//             for (let mapping of this.dataMapping) {

//                 o['properties'].push({
//                     label : mapping[0].label,
//                     value : week[mapping[0].column],
//                     colour : mapping[0].colour
//                 })
//             }
//             data.push(o);
//         }

//         data.sort(function(a, b) {
//             return new Date(a._date).getTime() - new Date(b._date).getTime();
//         });

//         let elWidth = d3.select(this.elementID).node().getBoundingClientRect().width;

//         let minBarWidth = 36;

//         // eerst kijken of weekarray langer is dan ruimte in graph
//         if ((elWidth / data.length) < minBarWidth) {
//             // hoe veel weken passen er wel?
//             let arrayLength = 2 * Math.floor(elWidth / (2 * minBarWidth));
//             // dan slicen
//             data = data.slice(data.length - arrayLength,data.length);
//         }

//         return data;
//     }


//     redraw(data) {

//         let minValue = d3.min(data.map(d => ((d.properties[1].value) * .75)));
//         this.yScale = this.chartYScale.set(data.map(d => d.properties[1].value), minValue);

//         // on redraw chart gets new dimensions
//         this.dimensions = this.chartDimensions.get(this.dimensions);
//         this.chartSVG.redraw(this.dimensions);
//         // new dimensions mean new scales
//         this.xScale = this.chartXScale.reset('horizontal', this.dimensions,this.xScale);
//         this.yScale = this.chartYScale.reset('vertical', this.dimensions,this.yScale);
//         // new scales mean new axis

//         this.bottomAxis.redraw(this.config.xScaleType, this.dimensions, this.xScale);
//         this.leftAxis.redraw(this.config.yScaleType, this.dimensions, this.yScale);
//         // redraw data
//         this.chartAxisGrid.redraw(this.dimensions,this.xScale,this.yScale,'horizontal', data);
//         this.chartMultiBars.redraw(this.dimensions,this.xScale,this.yScale);

//     }


//     draw(data) {

//         this.xScale = this.chartXScale.set(data.map(d => d[this.config.xParameter]));

//         this.chartMultiBars.draw(data,this.dimensions);


//     }

//     update(newData) {

//         let self = this;
//         let data = this.prepareData(newData);
//         this.draw(data);
//         this.redraw(data);
//         window.addEventListener("resize", () => self.redraw(data), false);

//     }
// }
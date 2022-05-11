import * as d3 from "d3";

import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxes } from '../chart-basics/module';
import {ChartAxisGrid, ChartBarsIncrease} from "../chart-elements/module";

export class BarProgression  {


    element;
    yParameter;
    dimensions;
    svg;

    chartDimensions;
    chartSVG;
    chartXScale;
    chartYScale;
    chartAxis;

    yScale;
    xScale;
    bottomAxis;
    leftAxis;

    chartBarsIncrease;
    chartAxisGrid;


    constructor(
        private data,
        private elementID,
        private config,
        private dataMapping
    ) {
        this.element = d3.select(elementID).node();
        this.yParameter = this.dataMapping[0]['column'];
    }


    init() {

        let self = this;
        let chartObjects = ChartObjects();
        this.config = Object.assign(chartObjects.config(),this.config);
        this.dimensions = chartObjects.dimensions();
        this.svg = chartObjects.svg();

        this.config.paddingInner = 0;
        this.config.paddingOuter = 0;

        // get dimensions from parent element
        this.chartDimensions = new ChartDimensions(this.elementID, this.config);
        this.dimensions = this.chartDimensions.get(this.dimensions);

        // create svg elements without data
        this.chartSVG = new ChartSVG(this.elementID, this.config, this.dimensions, this.svg);
        this.chartXScale = new ChartScale(this.config.xScaleType, this.config, this.dimensions);
        this.chartYScale = new ChartScale(this.config.yScaleType, this.config, this.dimensions);
        this.bottomAxis = new ChartAxes(this.config, this.svg, 'bottom',this.chartXScale);
        this.leftAxis = new ChartAxes(this.config, this.svg,'left',this.chartYScale);

        this.chartBarsIncrease = new ChartBarsIncrease(this.config, this.svg);
        this.chartAxisGrid =  new ChartAxisGrid(this.config, this.dataMapping, this.svg);
        this.chartAxisGrid.draw();

        // get dimensions from parent element
        this.chartDimensions = new ChartDimensions(this.elementID, this.config);
        this.dimensions = this.chartDimensions.get(this.dimensions);

        self.update(this.data);
      //  this.legend();


    }

    prepareData(json)  {

        let neededColumns = ['_date'].concat(this.dataMapping.map( (c) => c.column ));

        let data = [];

        for (let week of json) {
            let o = {
                colour : this.dataMapping[0].colour
            };
            for (let p of Object.entries(week))  {
                if (neededColumns.indexOf(p[0]) > -1 ) {
                      o[p[0]] = p[1];

                }
            }
            data.push(o);
        }

        data.sort(function(a, b) {
            return new Date(a._date).getTime() - new Date(b._date).getTime();
        });

        let minBarWidth = 60;

        let elWidth = d3.select(this.elementID).node().getBoundingClientRect().width;

        data = data.slice(data.length - Math.floor(elWidth / minBarWidth),data.length);

        return data;
    }


    redraw(data) {

     //   let colour = this.dataMapping.find((m) => m.column === property)['colour'];

        let minValue = d3.min(data.map(d => ((d[this.yParameter]) * .85)));

        this.yScale = this.chartYScale.set(data.map( d => d[this.yParameter]),minValue);

        // on redraw chart gets new dimensions
        this.dimensions = this.chartDimensions.get(this.dimensions);
        this.chartSVG.redraw(this.dimensions);
        // new dimensions mean new scales
        this.xScale = this.chartXScale.reset('horizontal', this.dimensions,this.xScale);
        this.yScale = this.chartYScale.reset('vertical', this.dimensions,this.yScale);

        this.bottomAxis.redraw(this.config.xScaleType, this.dimensions, this.xScale);
        this.leftAxis.redraw(this.config.yScaleType, this.dimensions, this.yScale);
        // // redraw data
        this.chartAxisGrid.redraw(this.dimensions,this.xScale,this.yScale,'horizontal', data);
        this.chartBarsIncrease.redraw(this.dimensions,this.xScale,this.yScale,this.yParameter);
    }

    draw(data) {

        this.xScale = this.chartXScale.set(data.map(d => d[this.config.xParameter]));

        this.chartBarsIncrease.draw(data);
    }

    update(newData) {

        let self = this;
        let data = this.prepareData(newData);
        this.draw(data);
        this.redraw(data);
        window.addEventListener("resize", () => self.redraw(data), false);

    }
}
import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxes } from '../chart-basics/module';

import { ChartAvgLine, ChartBackgroundArea, ChartRaggedLine, ChartWeekGrid, HtmlCircle, HtmlHeader } from '../chart-elements/module';
import * as d3 from "d3";

export class CijfersLineWithoutData  {

    element;
    yParameter;
    dimensions;
    svg;
    yScale;
    xScale;
    bottomAxis;
    leftAxis;

    chartDimensions;
    chartSVG;
    chartXScale;
    chartYScale;
    chartAxes;

    chartLine;
    chartBackgroundArea;
    chartWeekGrid;
    chartAvgLine;
    htmlHeader;
    htmlCircle;




    constructor(

        private elementID,
        private config,
        private dataMapping,
        private segment,
        private  data
    ){
        this.element = d3.select(elementID).node();
        this.yParameter = dataMapping[0].column;
        this.config.yParameter = dataMapping[0].column;
    }

    init() {

        let self = this;

    //    this.radios = [].slice.call(document.querySelectorAll('.selector li input[type=radio]'));

        let chartObjects = ChartObjects();
        this.config = Object.assign(this.config,chartObjects.config());
        this.dimensions = chartObjects.dimensions();
        this.svg = chartObjects.svg();


        this.config.margin.top = 90;
        this.config.padding.top = 20;
        this.config.padding.bottom = 60;
        this.config.padding.left = 40;
        this.config.padding.right = 40;
        this.config.paddingInner = 0;
        this.config.paddingOuter = 0;


        // get dimensions from parent element
        this.chartDimensions = new ChartDimensions(this.element, this.config);
        this.dimensions = this.chartDimensions.get(this.dimensions);

        // create svg elements without data
        this.chartSVG = new ChartSVG(this.elementID, this.config, this.dimensions, this.svg);
        this.chartXScale = new ChartScale(this.config.xScaleType, this.config, this.dimensions);
        this.chartYScale = new ChartScale(this.config.yScaleType, this.config, this.dimensions);
        this.bottomAxis = new ChartAxes(this.config, this.svg, 'bottom',this.chartXScale);
        this.leftAxis = new ChartAxes(this.config, this.svg,'left',this.chartYScale);
        this.chartLine = new ChartRaggedLine(this.config, this.svg);
        this.chartBackgroundArea = new ChartBackgroundArea(this.config, this.svg);
        this.chartWeekGrid = new ChartWeekGrid(this.config, this.svg);
        this.chartAvgLine = new ChartAvgLine(this.config, this.svg);
        this.htmlHeader = new HtmlHeader(this.element,this.dataMapping[0].label);
        this.htmlCircle = new HtmlCircle(this.config,this.dataMapping,this.element,this.dataMapping[0].label);

        this.chartAxes.drawXAxis();
        this.chartAxes.drawYAxis();

        self.run(self.segment);
    }

    prepareData()  {

        let neededColumns = ['_date','_category'].concat(this.dataMapping.map( (c) => c.column ));

        let data = [];
        let hasEnoughData;

        for (let week of this.data.slice(0,8)) {

            hasEnoughData = true;

            let clearWeek = {};

            for (let column of neededColumns) {

                if (week[column] !== null) {
                    clearWeek[column] = week[column]
                } else {
                    hasEnoughData = false;
                }
            }

            if (hasEnoughData) {
                data.push(clearWeek);
            }
        }

        return data;
    }

    redraw(data) {

        this.yScale = this.chartYScale.set(data.map( d => d[this.yParameter]));

        // on redraw chart gets new dimensions
        this.dimensions = this.chartDimensions.get(this.dimensions);

        this.chartSVG.redraw(this.dimensions);
        // new dimensions mean new scales
        this.xScale = this.chartXScale.reset('horizontal', this.dimensions, this.xScale);
        this.yScale = this.chartYScale.reset('vertical', this.dimensions, this.yScale);

        this.htmlCircle.redraw(data,this.yParameter);
        this.chartBackgroundArea.redraw(this.xScale, this.yScale, this.dimensions, data, this.dataMapping[0].colour, this.config.xParameter, this.yParameter);
        this.chartWeekGrid.redraw(this.xScale, this.yScale, this.dimensions, data, this.dataMapping[0].colour, this.yParameter);
        this.chartLine.redraw(this.xScale,this.yScale,this.dimensions,data,this.dataMapping[0].colour,this.config.xParameter, this.yParameter);
        this.chartAvgLine.redraw(this.xScale,this.yScale,this.dimensions,data,this.dataMapping[0].colour,this.yParameter);
    }

    draw(data) {

        this.xScale = this.chartXScale.set(data.map(d => d[this.config.xParameter]));

        this.htmlCircle.draw(data);
        this.htmlHeader.draw();

        this.chartBackgroundArea.draw(data);
        this.chartLine.draw(data);
        this.chartWeekGrid.draw(data);
        this.chartAvgLine.draw(data);
    }

    average(data) {

        return (data.reduce((a,b) => { return a + parseInt(b[this.yParameter]); },0)) / (data.length);
    }

    run(newSegment) {

        let self = this;

        let data = self.prepareData();
        self.draw(data);
        self.redraw(data);
        window.addEventListener("resize", () => self.redraw(data), false);
    }
}
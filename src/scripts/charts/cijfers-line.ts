import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxes } from '../chart-basics/module';

import { ChartAvgLine, ChartBackgroundArea, ChartRaggedLine, ChartWeekGrid, HtmlCircle, HtmlHeader, HtmlLink, HtmlPopup, HtmlSegment } from '../chart-elements/module';
import * as d3 from "d3";

export class CijfersLine  {

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
    htmlSegment;

    link;
    popup;

    constructor(

        private data : any,
        private elementID : string,
        private config : any,
        private dataMapping : [any],
        private description,
        private segment
    ){

        this.element = d3.select(this.elementID).node();
        this.yParameter =  this.config.yParameter || this.dataMapping[0].column;
        // this.config.yParameter = this.dataMapping[0].column;
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
        this.chartDimensions = new ChartDimensions(this.element, this.config);
        this.dimensions = this.chartDimensions.get(this.dimensions);

        // create svg elements without data
        this.chartSVG = new ChartSVG(this.elementID, this.config, this.dimensions, this.svg);
        this.chartXScale = new ChartScale(this.config.xScaleType, this.config, this.dimensions);
        this.chartYScale = new ChartScale(this.config.yScaleType, this.config, this.dimensions);
        this.bottomAxis = new ChartAxes(this.config, this.svg, 'bottom',this.chartXScale);
        this.leftAxis = new ChartAxes(this.config, this.svg,'left',this.chartYScale);
        this.chartLine = new ChartRaggedLine(this.config, this.svg);
        this.chartBackgroundArea = new ChartBackgroundArea(this.config, this.svg, false, false);
        this.chartWeekGrid = new ChartWeekGrid(this.config, this.svg);
        this.chartAvgLine = new ChartAvgLine(this.config, this.svg);
        this.htmlHeader = new HtmlHeader(this.element,this.dataMapping[0].label);
        this.htmlCircle = new HtmlCircle(this.config,this.dataMapping,this.element,this.dataMapping[0].label);
        this.htmlSegment = new HtmlSegment(this.element);




        this.bottomAxis.draw();
        this.leftAxis.draw();
        this.htmlCircle.draw();
        this.htmlHeader.draw();

        if(this.data.map( (i) => i[this.dataMapping[0].column]).filter( (i) => i !== null && i !== undefined).length > 2) {
            this.chartAvgLine.draw();
        }
        // this.link = new HtmlLink(this.element,this.config.extra.link,'');




        self.update(this.data,this.segment,false);

    }

    prepareData(newData)  {

        let neededColumns = ['_date','_category'].concat(this.dataMapping.map( (c) => c.column ));

        let data = [];
        let hasEnoughData;

        if (this.config.extra.period === 'monthly') {

            // return only first week of month
           newData = newData.filter( (w) => {

              let weeksInMonth = newData.filter( (x) => x._month === w._month && x._year === w._year);
              weeksInMonth.sort( (b: any, a: any) => (a._year.toString() + a._week.toString()) - (a._year.toString() + b._week.toString()));
              // console.log(weeksInMonth.map( (y) => y._year.toString() + y._week.toString()));

              // we retourneren de laatste in de maand
                if(weeksInMonth.map( (y) => y._week).indexOf(w._week) === 0) {
                    // alleen in eerste zeven dagen van de maand
                    if(new Date(w._date).getDate() <= 7 ) {
                        return w;
                    }
                }
           })

        }

        for (let week of newData.slice(0,7)) {

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
            } else {
                console.log('lacking data');
            }
        }

        return data;
    }

    redraw(data) {

        let minValue = (this.config.extra.period === 'monthly') ? 7 : 0

        this.yScale = this.chartYScale.set(data.map( d => d[this.yParameter]),minValue);

        // on redraw chart gets new dimensions
        this.dimensions = this.chartDimensions.get(this.dimensions);

        this.chartSVG.redraw(this.dimensions);
        // new dimensions mean new scales
        this.xScale = this.chartXScale.reset('horizontal', this.dimensions, this.xScale);
        this.yScale = this.chartYScale.reset('vertical', this.dimensions, this.yScale);

        this.htmlCircle.redraw(data,this.dataMapping[0].column);

        if(this.data.map( (i) => i[this.dataMapping[0].column]).filter( (i) => i !== null && i !== undefined).length > 2) {
            this.chartBackgroundArea.redraw(this.xScale, this.yScale, this.dimensions, data, this.dataMapping[0].colour, this.config.xParameter, this.yParameter);
            this.chartWeekGrid.redraw(this.xScale, this.yScale, this.dimensions, data, this.dataMapping[0].colour, this.yParameter);
            this.chartLine.redraw(this.xScale, this.yScale, this.dimensions, data, this.dataMapping[0].colour, this.config.xParameter, this.yParameter);
            this.chartAvgLine.redraw(this.xScale, this.yScale, this.dimensions, data, this.dataMapping[0].colour, this.yParameter);
        }
    }

    draw(data) {

        this.xScale = this.chartXScale.set(data.map(d => d[this.config.xParameter]));

        if(this.data.map( (i) => i[this.dataMapping[0].column]).filter( (i) => i !== null && i !== undefined).length > 2) {
            this.chartBackgroundArea.draw(data);
            this.chartLine.draw(data);
            this.chartWeekGrid.draw(data);
        }

        this.popup = new HtmlPopup(this.element,this.description,data);

    }

    average(data) {

        return (data.reduce((a,b) => { return a + parseInt(b[this.yParameter]); },0)) / (data.length);
    }

    update(newData,segment,update) {

        if(update && this.config.extra.noUpdate) { return; }

        let self = this;

        let data = self.prepareData(newData);
        self.draw(data);

        // onverklaarbaar ding met breedte van element
        setTimeout( () => {
            self.redraw(data);
        }, 500);

        window.addEventListener("resize", () => self.redraw(data), false);

        if(this.config.extra.segmentIndicator) {
            this.htmlSegment.draw(segment);
        }
    }


    createLink(label) {



    }
}

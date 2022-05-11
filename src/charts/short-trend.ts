import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxes } from '../chart-basics/module';
import * as _ from "lodash";
import {
    ChartAvgLine,
    ChartBackgroundArea,
    ChartBarHorizontal,
    ChartBlockedLine,
    ChartMonthGrid,
    ChartBlockTrend,
    HtmlCircle,
    HtmlHeader,
    HtmlLink,
    HtmlPopup,
    HtmlSegment
} from '../chart-elements/module';
import * as d3 from "d3";

export class ShortTrend{

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

    chartBlockTrend;
    chartLine;
    chartBackgroundArea;
    chartGrid;
    chartAvgLine;
    htmlHeader;
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
        // this.chartLine = new ChartBlockedLine(this.config, this.svg);
        // this.chartBackgroundArea = new ChartBackgroundArea(this.config, this.svg, false, false);
        // this.chartGrid = new ChartMonthGrid(this.config, this.svg);
        // this.chartAvgLine = new ChartAvgLine(this.config, this.svg);
        this.chartBlockTrend = new ChartBlockTrend(this.config, this.svg.layers);

        this.htmlHeader = new HtmlHeader(this.element,this.dataMapping[0].label);
        this.htmlSegment = new HtmlSegment(this.element);

        this.bottomAxis.draw();
        this.leftAxis.draw();
        this.htmlHeader.draw();

        // if(this.data.map( (i) => i[this.dataMapping[0].column]).filter( (i) => i !== null && i !== undefined).length > 2) {
        //     this.chartAvgLine.draw();
        // }

        this.popup = new HtmlPopup(this.element,this.description);

        self.update(this.data,this.segment,false);



    }

    prepareData(newData)  {

        let neededColumns = ['_date','_month'].concat(this.dataMapping.map( (c) => c.column ));

        let completeMonths = []; // newData.filter( (w) => {

        const groupedData = _.groupBy(newData,(w) => w._month.toString() + w._year.toString());

        const groupedArray = Object.values(groupedData).sort( (a,b) => +new Date(b[0]._date) - +new Date(a[0]._date))

        for (let group of groupedArray) {

                group.sort((a: any, b: any) => (a._year.toString() + a._week.toString()) - (b._year.toString() + b._week.toString()));
                // if last has day <= 7
                if (new Date(group.reverse()[0]._date).getDate() <= 7) {

                    let o = {};


                    for (let column of neededColumns) {

                        if (group[0][column] !== null) {
                            o[column] = group[0][column]
                        }
                    }

                    completeMonths.push(o);
                }
        }

        completeMonths = completeMonths.slice(0,7).reverse();

        let week = newData[0];
        let latestData = {};

        for (let column of neededColumns) {

            if (week[column] !== null) {
                latestData[column] = week[column]
            }
        }

        return { latestData, completeMonths };
    }

    redraw(latestData, completeMonths) {

        let minValue = (this.config.extra.period === 'monthly') ? 7 : 0

        this.yScale = this.chartYScale.set(completeMonths.map( d => d[this.yParameter]),minValue);

        // on redraw chart gets new dimensions
        this.dimensions = this.chartDimensions.get(this.dimensions);
        // if height not fixed .. area gets samller on each resize
        // perhaps create html el before . and send this.element.querySelector('something') into chartDimensions
        // this.dimensions.svgHeight = 140;
        this.chartSVG.redraw(this.dimensions);
        // new dimensions mean new scales
        this.xScale = this.chartXScale.reset('horizontal', this.dimensions, this.xScale);
        this.yScale = this.chartYScale.reset('vertical', this.dimensions, this.yScale);

        this.bottomAxis.redraw(this.config.xScaleType,this.dimensions,this.xScale);

        if(this.data.map( (i) => i[this.dataMapping[0].column]).filter( (i) => i !== null && i !== undefined).length > 2) {

            this.chartBlockTrend.redraw(this.dimensions,this.xScale,this.yScale);
            // this.chartBackgroundArea.redraw(this.xScale, this.yScale, this.dimensions, completeMonths, this.dataMapping[0].colour, this.config.xParameter, this.yParameter);
            // this.chartGrid.redraw(this.xScale, this.yScale, this.dimensions, completeMonths, this.dataMapping[0].colour, this.yParameter);
            // this.chartLine.redraw(this.xScale, this.yScale, this.dimensions, completeMonths, this.dataMapping[0].colour, this.config.xParameter, this.yParameter);
            // this.chartAvgLine.redraw(this.xScale, this.yScale, this.dimensions, completeMonths, this.dataMapping[0].colour, this.yParameter);
        }
    }

    draw(latestData, completeMonths) {

        this.xScale = this.chartXScale.set(completeMonths.map(d => d[this.config.xParameter]));

        if(this.data.map( (i) => i[this.dataMapping[0].column]).filter( (i) => i !== null && i !== undefined).length > 2) {
            // this.chartBackgroundArea.draw(completeMonths);
            // this.chartLine.draw(completeMonths);
            // this.chartGrid.draw(completeMonths);
            this.chartBlockTrend.draw(completeMonths);
        }

        this.popup.attachData([latestData])

    }

    // average(data) {
    //
    //     return (data.reduce((a,b) => { return a + parseInt(b[this.yParameter]); },0)) / (data.length);
    // }

    update(newData,segment,update) {

        if(update && this.config.extra.noUpdate) { return; }

        let self = this;

        let { latestData, completeMonths } = self.prepareData(newData);
        self.draw(latestData, completeMonths);

        // onverklaarbaar ding met breedte van element
        setTimeout( () => {
            self.redraw(latestData, completeMonths);
        }, 500);

        window.addEventListener("resize", () => self.redraw(latestData, completeMonths), false);

        if(this.config.extra.segmentIndicator) {
            this.htmlSegment.draw(segment);
        }
    }


    createLink(label) {

    }
}

import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxes } from '../chart-basics/module';

import { HtmlCircle, HtmlHeader, HtmlPopup, HtmlSegment } from '../chart-elements/module';
import * as d3 from "d3";

export class Cijfer  {

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
        this.yParameter = this.dataMapping[0].column;
        this.config.yParameter = this.dataMapping[0].column;
    }

    init() {

        let self = this;

        this.htmlHeader = new HtmlHeader(this.element,this.dataMapping[0].label);
        this.htmlCircle = new HtmlCircle(this.config,this.dataMapping,this.element,this.dataMapping[0].label);
        this.htmlSegment = new HtmlSegment(this.element);

        // this.link = new HtmlLink(this.element,this.config.extra.link,'');


      //  this.popup = new HtmlPopup(this.element,this.description,false);
        this.htmlCircle.draw();
        this.htmlHeader.draw();


        self.update(this.data,this.segment,false);

    }

    prepareData(newData)  {

        let neededColumns = ['_date','_category'].concat(this.dataMapping.map( (c) => c.column ));

        let data = [];
        let hasEnoughData;

        for (let week of newData.slice(0,8)) {

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

            this.htmlCircle.redraw(data,this.yParameter);
    }


    update(newData,segment,update) {

        if(update && this.config.extra.noUpdate) { return; }

        let self = this;

        // let data = self.prepareData(newData);

        self.redraw(newData);

        window.addEventListener("resize", () => self.redraw(newData), false);
    }

}

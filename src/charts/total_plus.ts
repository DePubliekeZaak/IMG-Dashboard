import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxes } from '../chart-basics/module';

import { ChartAvgLine, ChartBackgroundArea, ChartRaggedLine, ChartWeekGrid } from '../svg-elements/module';
import { HtmlCircle, HtmlTriangle, HtmlTotals, HtmlNumber, HtmlNumberNew, HtmlHeader, HtmlLink, HtmlPopup, HtmlSegment } from '../html-elements/module';

import * as d3 from "d3";
import { GraphController } from './graph';
import { GraphObject } from '../types/graphObject';
import { filterWeeks, getNeededColumnsForHistory } from '../d3-services/data-with-history.functions';
import { DataPart, GraphData } from '../types/data';

export class TotalPlus extends GraphController  {

    bottomAxis;
    leftAxis;

    chartLine;
    chartBackgroundArea;
    chartWeekGrid;
    chartAvgLine;

    htmlCircle;
    htmlTotals;
    htmlNumber;
    htmlTriangle
    htmlSegment;

    constructor(
        public main: any,
        public data : any,
        public element : HTMLElement,
        public graphObject: GraphObject,
        public segment: string  
    ){

        super(main,data,element,graphObject,segment) 
    }


    init() {

        this._init();

        this.graphObject.config.paddingInner = 0;
        this.graphObject.config.paddingOuter = 0;

        this.htmlTotals = new HtmlTotals(this.graphObject.config,this.graphObject.mapping,this.element,'');
        this.htmlNumber = new HtmlNumberNew(this);
        this.htmlSegment = new HtmlSegment(this.element);

        this.htmlNumber.draw();

        this.update(this.data,this.segment,false);

    }

    prepareData(data: DataPart[]) : GraphData  {

        const neededColumns = getNeededColumnsForHistory(data,this.graphObject);
        const history = filterWeeks(data, neededColumns);
        
        return { 
            "history" : history,
            "latest" : data[0], 
            "slice" : history.slice(0,8), 
        };
        
    }

    redraw(data: GraphData) {

        this.htmlNumber.redraw(data); 
    }

    draw(data: GraphData) {

    }

    // average(data) {

    //     return (data.reduce((a,b) => { return a + parseInt(b[this.yParameter]); },0)) / (data.length);
    // }

    update(data: GraphData, segment: string, update: boolean) {
        super._update(data,segment,update);
    }

}

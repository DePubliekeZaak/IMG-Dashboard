import { GraphController } from "./graph";

import { ChartAvgLine, ChartBackgroundAreas, ChartRaggedLine, ChartWeekGrid  } from '../svg-elements/module';
import { HtmlCircle } from '../html-elements/module';

import { GraphObject } from '../types/graphObject';
import { DataPart, GraphData } from "../types/data";
import { filterWeeks, getNeededColumnsForHistory } from "../d3-services/data-with-history.functions";

export default class CijfersLine extends GraphController  {

    chartLine;
    chartBackgroundAreas;
    chartWeekGrid;
    chartAvgLine;

    htmlCircle;

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

        super._init();

        this.chartLine = new ChartRaggedLine(this.graphObject.config, this.svg);
        this.chartBackgroundAreas = new ChartBackgroundAreas(this.graphObject.config, this.svg, false, false);
        this.chartWeekGrid = new ChartWeekGrid(this.graphObject.config, this.svg);
        this.chartAvgLine = new ChartAvgLine(this);

        this.htmlCircle = new HtmlCircle(this.graphObject.config,this.graphObject.mapping,this.element,this.firstMapping);
        this.htmlCircle.draw();

        super._svg();

        if(this.data.map( (i) => i[this.firstMapping.column]).filter( (i) => i !== null && i !== undefined).length > 2) {
            this.chartAvgLine.draw();
        }

        this.update(this.data,this.segment,false);

    }

    prepareData(data: DataPart[]) : GraphData  {

        const neededColumns = getNeededColumnsForHistory(data, this.graphObject);
        const history = filterWeeks(data,neededColumns);

        this.main.dataStore.setGraph(this.graphObject.slug, history);

        return { 
            "history" : history,
            "latest" : data[0], 
            "slice" : history.slice(0,8), 
        };
    }

    redraw(data: GraphData) {

        super.redraw(data);

        this.htmlCircle.redraw([data.latest],this.firstMapping.column);

        if(this.data.map( (i) => i[this.firstMapping.column]).filter( (i) => i !== null && i !== undefined).length > 2) {
            this.chartBackgroundAreas.redraw(this.xScale, this.yScale, this.dimensions, data.slice, this.firstMapping.colour, this.graphObject.config.xParameter, this.yParameter);
            this.chartWeekGrid.redraw(this.xScale, this.yScale, this.dimensions, data.slice, this.firstMapping.colour, this.yParameter);
            this.chartLine.redraw(this.xScale, this.yScale, this.dimensions, data.slice, this.firstMapping.colour, this.graphObject.config.xParameter, this.yParameter);
            this.chartAvgLine.redraw(data);
        }
    }

    draw(data: GraphData) {

        this.xScale = this.chartXScale.set(data.slice.map(d => d[this.xParameter]));
        let minValue = (this.graphObject.config.extra.period === 'monthly') ? 7 : 0
        this.yScale = this.chartYScale.set(data.history.map( d => d[this.yParameter]),minValue);

        if(data.slice.map( (i) => i[this.firstMapping.column]).filter( (i) => i !== null && i !== undefined).length > 2) {
            this.chartBackgroundAreas.draw(data.slice);
            this.chartLine.draw(data.slice);
            this.chartWeekGrid.draw(data.slice);
        }

        this.popup.attachData(data.latest)

    }


    update(data: GraphData, segment: string, update: boolean) {

        super._update(data,segment,update);

    }
}

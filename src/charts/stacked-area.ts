import { ChartStackedArea} from "../svg-elements/module";

import {colours} from "../_styleguide/_colours";
import {breakpoints} from "../_styleguide/_breakpoints";
import { GraphController } from "./graph";
import { GraphObject } from "../types/graphObject";
import { ChartAxes } from "../chart-basics/chart-axes";
import { DataPart, GraphData } from "../types/data";
import { parseHistoryForStackedArea } from "../d3-services/data-with-history.functions";
import * as d3 from "d3";
import HtmlLegendDots from "../html-elements/html-legend-dots";

export default class StackedArea extends GraphController  {

    keys;
    labels;

    bottomAxis;
    leftAxis;

    chartStackedArea;

    stack;
    legend;

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

        this.graphObject.config.paddingInner = 0;
        this.graphObject.config.paddingOuter = 0;

        super._init();
        super._svg();

        this.bottomAxis = new ChartAxes(this.graphObject.config, this.svg, 'bottom',this.chartXScale);
        this.leftAxis = new ChartAxes(this.graphObject.config, this.svg,'left',this.chartYScale);

        this.chartStackedArea = new ChartStackedArea(this);
        this.legend = new HtmlLegendDots(this);

        this.bottomAxis.draw();
        this.leftAxis.draw();

        this.update(this.data,"all",false);
    }

    prepareData(data: DataPart[]) : GraphData  {

        let history = parseHistoryForStackedArea(this.graphObject, data);
        history = history.slice(1,history.length);

        this.keys = Object.keys(history[0]).filter(key => {
            return ['_date','gemeente','label','colour'].indexOf(key) < 0
        })

        this.stack = d3.stack()
            .keys(this.keys);

        return { 
            "history" : history,
            "latest" : null, 
            "slice" : history,
            "stacked": this.stack(history) // add keys and labels here ? 
        };

    }

    draw(data: GraphData) {

        this.xScale = this.chartXScale.set(data.slice.map(d => d[this.xParameter]));
        this.chartStackedArea.draw(data.stacked);
    }


    redraw(data: GraphData) {
        
        this.yScale = this.chartYScale.set(Object.values(data.stacked[data.stacked.length - 1]).map( d => d[1]));

        super.redraw(data);

        this.bottomAxis.redraw('time',this.dimensions,this.xScale);
        this.leftAxis.redraw('linear',this.dimensions,this.yScale);

        this.chartStackedArea.redraw();
    }

    update(data: GraphData, segment: string, update: boolean) {
        super._update(data,segment,update);
    } 
}

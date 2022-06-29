import { ChartStackedBars, ChartLineV2} from "../svg-elements/module";

import {colours} from "../_styleguide/_colours";
import {breakpoints} from "../_styleguide/_breakpoints";
import { GraphController } from "./graph";
import { GraphObject } from "../types/graphObject";
import { ChartAxes } from "../chart-basics/chart-axes";
import { DataPart, GraphData } from "../types/data";
import { filterWeeks, getNeededColumnsForHistory, parseHistoryForStackedArea } from "../d3-services/data-with-history.functions";
import * as d3 from "d3";
import HtmlLegendDots from "../html-elements/html-legend-dots";
import { flattenColumn } from "../d3-services/_helpers";

export default class StackedBars extends GraphController  {

    keys;
    labels;
    y2Scale;
    
    bottomAxis;
    leftAxis;
    rightAxis;

    chartStackedBars;
    chartLine;

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

        if (this.graphObject.config.axes) {
            for (let c of this.graphObject.config.axes) {
                this.axes[c.slug] = new ChartAxes(this.graphObject.config, this.svg, c.position,this.scales[c.scale])
            }
        } 

        // this.bottomAxis = new ChartAxes(this.graphObject.config, this.svg, 'bottom',this.chartXScale);
        // this.leftAxis = new ChartAxes(this.graphObject.config, this.svg,'left',this.chartYScale);
        // this.rightAxis = new ChartAxes(this.graphObject.config, this.svg,'right',this.chartYScale);

        this.chartStackedBars = new ChartStackedBars(this);
        this.chartLine = new ChartLineV2(this,'percentage','black');

        this.legend = new HtmlLegendDots(this);

        for (let a of this.axes) {
            a.draw();
        }
        // this.bottomAxis.draw();
        // this.leftAxis.draw();

        this.update(this.data,"all",false);
    }

    prepareData(data: DataPart[]) : GraphData  {

        const neededColumns = getNeededColumnsForHistory(data,this.graphObject).concat(['immateriele_schade_toegewezen','immateriele_schade_besluiten']);
        let history = filterWeeks(data,neededColumns).reverse();

        history = history.filter( (w) => w[this.yParameter] > 0);

        history.forEach( (week, i) => { 
            week['_index'] = i;     
            week['percentage'] = (week['immateriele_schade_toegewezen'] / week['immateriele_schade_besluiten']) * 100       
        });


        this.keys = Object.keys(history[0]).filter(key => {
            return [this.graphObject.mapping[0][0].column,this.graphObject.mapping[0][1].column].indexOf(key) > -1
        })

        this.stack = d3.stack()
            .keys(this.keys);

        return { 
            "history" : history,
            "latest" : null, 
            "slice" : history,
            "stacked": this.stack(history) 
        };

    }

    draw(data: GraphData) {

        const xValues = data.slice.map(d => d[this.xParameter]);
        this.scales['x'].set([xValues[xValues.length - 1] + 1], xValues[0]);
        this.chartStackedBars.draw(data.stacked);
        this.chartLine.draw(data);

    }


    redraw(data: GraphData) {
        
        this.scales['y'].set(Object.values(data.stacked[data.stacked.length - 1]).map( d => d[1]));
        this.scales['y2'].set(data.slice.map( (w) => w['percentage']));

        super.redraw(data);

        for (let a of this.graphObject.config.axes) {
            this.axes[a.slug].redraw(this.scales[a.scale].type,this.dimensions,this.scales[a.scale].scale)
        }

        this.chartStackedBars.redraw(data.stacked);
        this.chartLine.redraw();
    }

    update(data: GraphData, segment: string, update: boolean) {
        super._update(data,segment,update);
    } 
}

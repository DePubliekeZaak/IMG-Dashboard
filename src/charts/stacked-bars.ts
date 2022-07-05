import { ChartStackedBars, ChartLineIndependent} from "../svg-elements/module";

import {colours} from "../_styleguide/_colours";
import {breakpoints} from "../_styleguide/_breakpoints";
import { GraphControllerV2 } from "./graph-v2";
import { ChartAxesV2 } from "../chart-basics/chart-axes-v2";
import { DataPart, GraphData } from "../types/data";
import { filterWeeks, getNeededColumnsForHistoryV2 } from "../d3-services/data-with-history.functions";
import * as d3 from "d3";
import HtmlLegendDotsLines from "../html-elements/html-legend-dots-lines";
import { IGraphMapping } from "../types/mapping";

const config =  {

    "scales": [
   
  
        {
            "slug": "y2",
            "type": "linear",
            "direction": "vertical",
            "parameter": "percentage"
        }
    ],
    "axes" : [
        {
            "slug": "x",
            "scale": "x",
            "position": "bottom",
            "format": "weekLabels"
        },
        {
            "slug": "y",
            "scale": "y",
            "position": "left"
        },
        {
            "slug": "y2",
            "scale": "y2",
            "position": "right",
            "format": "percentage"
        }
    ],
    "padding": {
        "top": 30,
        "bottom": 60,
        "left": 30,
        "right": 0
    },
    "margin": {
        "top": 0,
        "bottom": 160,
        "left": 0,
        "right": 30
    }
}

export default class StackedBars extends GraphControllerV2  {

    keys;
    labels;

    chartStackedBars;
    chartLine;

    stack;
    legend;

    constructor(
        public main: any,
        public data : any,
        public element : HTMLElement,
        public mapping: IGraphMapping,
        public segment: string  
    ){
        super(main,data,element,mapping,segment) 
        this.pre();
    }

    pre() {

        this._addScale('x','linear','horizontal','_index');
        this._addScale('y','linear','vertical','immateriele_schade_nieuw_besluiten');
        this._addScale('y2','linear','vertical','percentage');

        this._addAxis('x','x','bottom','weekLabels');
        this._addAxis('y','y','left');
        this._addAxis('y2','y2','right');

        this._addMargin(0,160,0,30);
        this._addPadding(30,60,30,0);
    }

    init() {

        super._init();
        super._svg();

        this.chartStackedBars = new ChartStackedBars(this);
        this.chartLine = new ChartLineIndependent(this,'y2','black');

        this.legend = new HtmlLegendDotsLines(this);

        this.update(this.data,"all",false);
    }

    prepareData(data: DataPart[]) : GraphData  {

        const neededColumns = getNeededColumnsForHistoryV2(data,this.mapping).concat(['immateriele_schade_toegewezen','immateriele_schade_besluiten']);
        let history = filterWeeks(data,neededColumns).reverse();

        history = history.filter( (w) => w[this.parameters['y']] > 0);

        history.forEach( (week, i) => { 
            week['_index'] = i;     
            week['percentage'] = (week['immateriele_schade_toegewezen'] / week['immateriele_schade_besluiten']) * 100       
        });


        this.keys = Object.keys(history[0]).filter(key => {
            return [this.mapping.parameters[0][0].column,this.mapping.parameters[0][1].column].indexOf(key) > -1
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

        const xValues = data.slice.map(d => d[this.parameters['x']]);
        this.scales['x'].set([xValues[xValues.length - 1] + 1], xValues[0]);
        this.chartStackedBars.draw(data.stacked);
        this.chartLine.draw(data);

    }


    redraw(data: GraphData) {
        
        this.scales['y'].set(Object.values(data.stacked[data.stacked.length - 1]).map( d => d[1] * 1.2));
        this.scales['y2'].set(data.slice.map( (w) => w['percentage']));

        super.redraw(data);

        this.chartStackedBars.redraw(data.stacked);
        this.chartLine.redraw();

    }

    update(data: GraphData, segment: string, update: boolean) {
        super._update(data,segment,update);
    } 
}

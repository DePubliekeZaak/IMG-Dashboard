import { ChartStackedBars, ChartLineIndependent} from "@local/elements";

import { GraphControllerV2, ChartAxesV2 } from "@local/d3_graphs";
import { DataPart, GraphData } from "@local/d3_types";
import { filterWeeks, getNeededColumnsForHistoryV2 } from "@local/img-services";
import * as d3 from "d3";
import { HtmlLegendDotsLines } from "@local/elements";
import { IGraphMapping } from "@local/d3_types";



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

        this._addAxis('x','x','bottom','weekly');
        this._addAxis('y','y','left');
        this._addAxis('y2','y2','right');

        this._addMargin(0,0,0,30);
        this._addPadding(30,30,30,0);
    }

    init() {

        super._init();

        const svgId = "svg-wrapper-" + this.mapping.slug
        const container = document.createElement('section');
        container.style.height = "320px";
        container.style.width = "100%";
        container.id = svgId;
        this.element.appendChild(container);

        super._svg(container);

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

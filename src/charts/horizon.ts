import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxes } from '../chart-basics/module';

import { ChartBarHorizonWaardedaling, ChartFocus } from '../svg-elements/module';

import { breakpoints } from "../_styleguide/_breakpoints";
import { GraphController } from './graph';
import { GraphObject } from '../types/graphObject';
import { flattenColumn, thousands } from '../d3-services/_helpers';
import { filterWeeks, getNeededColumnsForHistory, groupByMonths } from '../d3-services/data-with-history.functions';
import { DataPart, GraphData } from '../types/data';
import { isSafeInteger } from 'lodash';
import * as d3 from 'd3';
import HtmlLegendDots from '../html-elements/html-legend-dots';

export default class Horizon extends GraphController   {

    y2Parameter;
    y3Parameter;
    chartBars;
    chartFocus;

    bottomAxis;
    leftAxis;
    legend;

    constructor(
        public main: any,
        public data : any,
        public element : HTMLElement,
        public graphObject: GraphObject,
        public segment: string  
    ) {
        super(main,data,element,graphObject,segment);
        this.y2Parameter = this.graphObject.mapping[0][1].column;
        this.y3Parameter = this.graphObject.mapping[1][0].column;
    }

    init() {

        let self = this;

        this._init();
        this._svg(this.element)

        this.chartBars = new ChartBarHorizonWaardedaling(this);

        this.bottomAxis = new ChartAxes(this.graphObject.config, this.svg, 'belowBottom', this.chartXScale);
        this.leftAxis = new ChartAxes(this.graphObject.config, this.svg, 'left', this.chartYScale);

        if( this.graphObject.config.extra.legend) {
            this.legend = new HtmlLegendDots(this);
        }

        if (this.graphObject.config.extra.hasFocus) {
            this.chartFocus = new ChartFocus(this);
        }

        this.update(this.data,this.segment, false);
    }

    prepareData(data: DataPart[]) : GraphData  {

        const neededColumns = getNeededColumnsForHistory(data,this.graphObject)
        let history = filterWeeks(data,neededColumns);

        history = history.filter( (w) => w[this.yParameter] > 0);

        let voorraad_bij_eind = history[0][flattenColumn(this.graphObject.mapping[1][0].column)];

        history.forEach( (week, i) => { 

            week['_index'] = i;
            
            week['diff'] = week[this.yParameter] - week[this.y2Parameter]
            week['relative_diff'] = voorraad_bij_eind - week[flattenColumn(this.graphObject.mapping[1][0].column)]
            
        });

        return {
            "history" : history.slice(0, history.length),
            "latest" : data[0], 
            "slice" :  history.slice(0, history.length).reverse(),
            "average" : this.average(history)
        } 
    }

    redraw(data: GraphData) {

        const yValues = data.slice.map( d => d[this.y3Parameter] * 1.2);

        this.yScale = this.chartYScale.set(yValues,0);

        super.redraw(data);

        this.yScale = this.chartYScale.reset('vertical', this.dimensions, this.yScale);
        this.chartBars.redraw(data);

        this.bottomAxis.redraw(this.graphObject.config.xScaleType, this.dimensions, this.xScale, data.slice);
        this.leftAxis.redraw(this.graphObject.config.yScaleType, this.dimensions, this.yScale);

        if (this.graphObject.config.extra.hasFocus) {
            this.chartFocus.redraw(data);
        }

    }

    draw(data: GraphData) {

        const xValues = data.slice.map(d => d[this.xParameter]);

        this.xScale = this.chartXScale.set([xValues[xValues.length - 1]], xValues[0]);
        this.chartBars.draw(data);

        if (this.graphObject.config.extra.hasFocus) {
            this.chartFocus.draw(data);
        }
    }

    update(data: GraphData, segment: string, update: boolean) {
        super._update(data,segment,update);
    }

    average(data: any[]) : number {

        data = data.filter( (d) => d[this.yParameter] > 0)

        return (data.reduce((a,b) => { return a + parseInt(b[this.yParameter]); },0)) / (data.length);
    }
}

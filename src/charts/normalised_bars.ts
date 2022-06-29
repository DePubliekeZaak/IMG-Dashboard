
import { ChartStackedBarsNormalized } from '../svg-elements/module';


import { slugify } from '../utils/slugify.utils';

import * as d3 from 'd3';
import {colours} from "../_styleguide/_colours";
import { GraphController } from './graph';
import { GraphObject } from '../types/graphObject';
import { ChartAxes } from '../chart-basics/chart-axes';
import { DataPart, GraphData, IKeyValueObject } from '../types/data';
import _ from 'lodash';
import { HtmlLegendDots } from "../html-elements/module";
import { parseGroups } from '../d3-services/data.functions';

export default class NormalisedBars extends GraphController  {

    keys : string[];
    labels : string[];
    legend;
   
    yScale;
    bScale;
    xScale;
    topAxis;
    bottomAxis;
    leftAxis;

    chartMultiBars;
    chartAxisGrid;
    chartStackedBarsNormalized;

    normalizedStack;
    stack;


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

        let self = this;

        super._init();
        super._svg();
     
        this.topAxis = new ChartAxes(this.graphObject.config, this.svg,'top',this.chartXScale);
        this.bottomAxis = new ChartAxes(this.graphObject.config, this.svg,'bottom',this.chartXScale);

        this.topAxis.draw();
        this.bottomAxis.draw();

        this.chartStackedBarsNormalized = new ChartStackedBarsNormalized(this);

        if( this.graphObject.config.extra.legend) {
            this.legend = new HtmlLegendDots(this);
        }

        this.update(this.data, this.segment, false);
    }

    prepareData(data: DataPart[]) : GraphData {

        const grouped = parseGroups(this.graphObject, data)

        // voor y-axis ... we groeperen op tijdsduur (=group .. duh) 
        this.labels = grouped.map( g => g.label);
       //  keys for stacking dit zijn de procedurestappen 
        this.keys = Object.keys(grouped[0]).filter( k => k != 'label');

        this.normalizedStack = d3.stack()
            .offset(d3.stackOffsetExpand)
            .keys(this.keys);

        return { 
            "history" : null,
            "latest":  null, 
            "slice" : null,
            "grouped": grouped,
            "stacked": this.normalizedStack(grouped)
        };

        // serie is grouping for stacked --> ontvangst, opname, etc -- niet de data groepering
        // rijen corresponderen met data groupings 

    }

    draw(data: GraphData) {

        // with data we can init scales
        this.xScale = this.chartXScale.set(data.stacked.map(d => Object.values(d)[0]));
        // we need one system for yscale ..
        this.yScale = this.chartYScale.set(this.labels);
        // width data we can draw items
        this.chartStackedBarsNormalized.draw(data);

    }

    redraw(data: GraphData) {

       super.redraw(data);

       this.topAxis.redraw('stackedNormalized', this.dimensions, this.xScale);
       this.bottomAxis.redraw('stackedNormalized', this.dimensions, this.xScale);


        // redraw data
        this.chartStackedBarsNormalized.redraw(this.dimensions,this.xScale,this.yScale,'serie');

    }

    update(data: GraphData, segment: string, update: boolean) {
        super._update(data,segment,update);
    } 
}

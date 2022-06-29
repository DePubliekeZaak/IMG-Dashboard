import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxes } from '../chart-basics/module';
import { colours} from "../_styleguide/_colours";
import BallenbakSimulation from "../d3-services/ballenbak.simulation"

import {
    ChartCircleGroups,
} from '../svg-elements/module';

import {
    HtmlHeader,
    HtmlPopup
} from '../html-elements/module';


import * as d3 from "d3";
import * as _ from "lodash";
import {breakpoints} from "../_styleguide/_breakpoints";
import { GraphController } from './graph';
import { GraphObject } from '../types/graphObject';
import { DataPart, GraphData, IKeyValueObject } from '../types/data';

export default class Ballenbak extends GraphController {

    rScale;
    xScale;
    yScale;
    bottomAxis;
    leftAxis;

    chartRScale;
    chartAxes;
    chartCircleGroups;

    simulation = {};
    groupCount;

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

        this.chartRScale = new ChartScale('radius', this.graphObject.config, this.dimensions);
        this.bottomAxis = new ChartAxes(this.graphObject.config, this.svg, 'bottom',this.chartXScale);
        this.leftAxis = new ChartAxes(this.graphObject.config, this.svg,'left',this.chartRScale);

        this.chartCircleGroups = new ChartCircleGroups(this);
      

        this.bottomAxis.draw();
        this.leftAxis.draw();

        this.update(this.data,this.segment,false);
    }

    prepareData(data: DataPart[]) : GraphData  {

        let mapped  = [];
  
        // add value from most recent week to mapping .. use mapping object in vis

        for (let entry of this.graphObject.mapping[0]) {

            let column = Array.isArray(entry.column) ? entry.column[0] : entry.column;
            let value = data[0][column];
        
            if (Number.isInteger(value)) {
                entry['value'] = value
               // flattenedData.push(value);
            }
            mapped.push(entry);
        }

        return { 
            "history" : null,
            "latest":  null, 
            "slice" : mapped,
            "grouped": Object.values(_.groupBy(mapped, d => d.group))
        };

    }


    draw(data: GraphData) {

        let self = this;

        // with data we can init scales
        this.xScale = this.chartXScale.set(_.uniq(data.slice.map( (d) => d['group'])));
        this.yScale = this.chartYScale.set(_.uniq(data.slice.map( (d) => d['group'])));
        this.rScale = this.chartRScale.set(_.uniq(data.slice.map( (d) => d['value']))); // = radius !!
        
        this.chartCircleGroups.draw(data.grouped);

        for (let group of data.grouped) {

            this.simulation[group[0].group] = new BallenbakSimulation(this);

            this.simulation[group[0].group].supply(group.filter( (prop) => { return prop.value > 0 } ),data.grouped.length)
            // this.simulation[group[0].group] = d3.forceSimulation()
            //     .nodes(group.filter( (prop) => { return prop.value > 0 } ));

            // this.initializeForces(group);

            // this.simulation[group[0].group].on('tick', () => {

            //     self.chartCircleGroups.forceDirect();

            // });
        }
    }

    redraw(data: GraphData) {

        super.redraw(data);

        // this.xScale = this.chartXScale.reset('horizontal',this.dimensions,this.xScale);
        // this.yScale = this.chartYScale.reset('vertical-reverse',this.dimensions,this.yScale);
        this.rScale = this.chartRScale.reset('radius',this.dimensions,this.rScale);

        this.chartCircleGroups.redraw(data.grouped);

        data.grouped.forEach( (group,i) => {
            this.simulation[group[0].group].redraw(data.grouped.length)
        });
    }

    // initializeForces(group) {

    //     this.simulation[group[0].group]
    //         .force("collide", d3.forceCollide())
    //         .force("center", d3.forceCenter())
    //         .force("forceX", d3.forceX());

    //     // this.updateForces(group)
    // }

    updateForces(group) {

        let self = this;
        let forceStrength = 0.125;
        let groupWidth = this.dimensions.width / this.groupCount;
        let center = {x: (groupWidth / 2) , y: ((this.dimensions.height / 2) + 20) };

        this.simulation[group[0].group].force("collide")
            .strength(forceStrength)
            .radius(function(d : any) {
                return self.rScale(d.value)
            });

        this.simulation[group[0].group].force("center")
            .x(center.x)
            .y(center.y);

        this.simulation[group[0].group].force("forceX")
            .strength(forceStrength)
            .x(center.x);

        this.simulation[group[0].group].alpha(1).restart();

    }

    update(data: GraphData, segment: string, update: boolean) {
        super._update(data,segment,update);
    } 
}


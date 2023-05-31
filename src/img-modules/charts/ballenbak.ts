import { BallenbakSimulation } from "@local/img-services"

import {
    ChartCircleGroups,
} from '@local/elements';

import * as _ from "lodash";

import { GraphControllerV2 } from '@local/d3_graphs';
import { IGraphMapping, DataPart, GraphData } from '@local/d3_types';
import { breakpoints } from '@local/styleguide';

export default class Ballenbak extends GraphControllerV2 {

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
        public mapping: IGraphMapping,
        public segment: string  
    ){

        super(main,data,element,mapping,segment);
        this.pre();
    }

    pre() {
     
        if (window.innerWidth < breakpoints.sm) {
            this._addScale('x','band','vertical-reverse','group')
        } else {
            this._addScale('x','band','horizontal','group')
        }
        
        this._addScale('y','band','vertical-reverse', 'group');
        this._addScale('r','linear','radius', 'value');
        this._addMargin(20,0,0,0);
        this._addPadding(10,0,0,0);
    }

    init() {

        this.config.paddingInner = 1;
        this.config.paddingOuter = 1;

        super._init();

        const svgId = "svg-wrapper-" + this.mapping.slug
        const container = document.createElement('section');
        container.style.height = (window.innerWidth < breakpoints.sm) ? "600px" : "360px";
        container.style.width = "100%";
        container.id = svgId;
        this.element.appendChild(container);

        super._svg(container);

        this.config.extra.minRadius = 4;
        this.config.extra.radiusOffset = 1.8;
        this.config.extra.radiusFactor = 1.25;

        if (window.innerWidth < breakpoints.sm) {
            this.config.margin.top = 121;
            this.config.margin.bottom = 30;
            this.config.padding.right = 0;   
            this.config.paddingInner = 1;
            this.config.paddingOuter = 0;
            this.config.extra.minRadius = 8;
            this.config.extra.radiusOffset = 1.5;
            this.config.extra.radiusFactor = 1;
        }

        

        this.chartCircleGroups = new ChartCircleGroups(this);

        this.update(this.data,this.segment,false);
    }

    prepareData(data: DataPart[]) : GraphData  {

        let mapped  = [];
  
        // add value from most recent week to mapping .. use mapping object in vis

        for (let entry of this.mapping.parameters[0]) {

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
        this.xScale = this.scales.x.set(_.uniq(data.slice.map( (d) => d['group'])));
        this.yScale = this.scales.y.set(_.uniq(data.slice.map( (d) => d['group'])));
        this.rScale = this.scales.r.set(_.uniq(data.slice.map( (d) => d['value']))); // = radius !!
        
        this.chartCircleGroups.draw(data.grouped);

        for (let group of data.grouped) {

            this.simulation[group[0].group] = new BallenbakSimulation(this);
            this.simulation[group[0].group].supply(group.filter( (prop) => { return prop.value > 0 } ),data.grouped.length)
        }
    }

    redraw(data: GraphData) {

        super.redraw(data);

        this.scales.r.reset();

        this.chartCircleGroups.redraw(data.grouped);

        data.grouped.forEach( (group,i) => {
            this.simulation[group[0].group].redraw(data.grouped.length)
        });
    }

    updateForces(group) {

        let self = this;
        let forceStrength = 0.125;
        let groupWidth = this.dimensions.width / this.groupCount;
        let center = {x: (groupWidth / 2) , y: ((this.dimensions.height / 2) + 20) };

        this.simulation[group[0].group].force("collide")
            .strength(forceStrength)
            .radius((d : any) => {
                return self.scales.r.scale(d.value)
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


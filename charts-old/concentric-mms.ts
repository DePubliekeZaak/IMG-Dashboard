
import { ChartBullsEye } from '@local/elements';
import * as d3 from 'd3';
import { DataPart, GraphData } from '@local/d3_types';
import _ from 'lodash';
import { HtmlLegendDots } from "@local/elements";
import { GraphControllerV2 } from '@local/d3_graphs';
import { IGraphMapping } from '@local/d3_types';
import { slugify } from '@local/d3-services';

const pgvLabels = ["> 40 mm/s","20-40 mm/s","16-20 mm/s","8.5-16 mm/s","5-8.5 mm/s","2-5 mm/s"];

export default class ConcentricMms extends GraphControllerV2  {

    keys : string[];
    labels : string[];
    legend;
    chartMultiBars;
    chartAxisGrid;
    chartConcentrics;
    normalizedStack;
    stack;
    yearGroups = [];

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

    pre(){
        this._addScale('x','linear','horizontal', 'group');
        this._addScale('r','band','radius', 'group');
        this._addMargin(0,60,90,0);
        this._addPadding(0,0,0,0);
    }

    init() {

        let self = this;

        this.config.paddingInner = 0;
        this.config.paddingOuter = .1;
        this.config.extra.minRadius = 20;

        this.config.extra.radiusFactor = (window.innerWidth < 700) ? 2.4 : 3.6;
  
        super._init();

        const svgId = "svg-wrapper-" + this.mapping.slug
        const container = document.createElement('section');

        container.style.height = (this.mapping.args[0] === "def") ? "30px" : "200px";
        container.style.width = "100%";
        container.id = svgId;
        this.element.appendChild(container);

        super._svg(container);

        this.chartConcentrics = new ChartBullsEye(this,pgvLabels);

        if (this.mapping.args[0] === "def") {
            this.legend = new HtmlLegendDots(this);
        } else {
            this.update(this.data, this.segment, false);
        }
    }

    prepareData(data: DataPart[]) : GraphData {

        /*
        [ (years)
            [ (pgvs)
                { 
                    label : (prop key)
                    colour: 
                    value: (prop value)
                }
            ]
        ]
        */

        let grouped = [];
      
        let props: string[] =  this.mapping.parameters[0].map( m => !Array.isArray(m.column) ? m.column : "");

        if (this.mapping.args[0] == "years") {

            let yearData = data.filter (w => w._year === parseInt(this.mapping.args[1]));

            // group by pgv ... 
            for (let i = 0; i < 6; i++) {

                let group:any = [];
                
                for (let p of this.mapping.parameters[0]) { 
                    let prop = !Array.isArray(p.column) ? p.column : ""
                    let part: any = {
                        label: prop, 
                        pgv: pgvLabels[i],
                        pgvIndex: i,
                        colour: p.colour,
                        value: yearData.map( m => m[(6 - i) + '-' + prop]).reduce((total: number, item: number) => total + item)
                    };

                    group.push(part);
                }
                // stack voor pgv
                grouped.push(group);
            }

        } 

     //   this.labels = grouped.map( g => g.label);
       //  keys for stacking dit zijn de procedurestappen 
        // this.keys = Object.keys(grouped[0]).filter( k => k != 'label');

        // this.normalizedStack = d3.stack()
        //     .offset(d3.stackOffsetExpand)
        //     .keys(this.keys);

        return { 
            "history" : null,
            "latest":  null, 
            "slice" : null,
            "grouped": grouped,
            "stacked": null //this.normalizedStack(grouped)
        }

    }

    draw(data: GraphData) {

        this.scales.x.set([0,1]);
        // we need one system for yscale ..

        this.scales.r.set(pgvLabels.map((l) => slugify(l)));
        // width data we can draw items
        // this.chartBullsEye.draw(data);

        this.chartConcentrics.draw(data.grouped);
    
    }

    redraw(data: GraphData)  {

        super.redraw(data.grouped);
        this.chartConcentrics.redraw();
    
    }

    update(data: GraphData, segment: string, update: boolean) {
        super._update(data,segment,update);
    } 
}

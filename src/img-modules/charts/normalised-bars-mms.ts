
import { ChartStackedGroupMms } from '../svg-elements/module';
import * as d3 from 'd3';
import { DataPart, GraphData } from '../d3-modules/_d3_types';
import _ from 'lodash';
import { HtmlLegendDots } from "../html-elements/module";
import { GraphControllerV2 } from '@local/d3_graphs';
import { IGraphMapping } from '../d3-modules/_d3_types';

const pgvLabels = ["2-5 mm/s","5-8.5 mm/s","8.5-16 mm/s","16-20 mm/s","20-40 mm/s","> 40 mm/s"];

export default class NormalisedBarsMms extends GraphControllerV2  {

    keys : string[];
    labels : string[];
    legend;
    chartMultiBars;
    chartAxisGrid;
    chartStackedBarsNormalized;
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
        this._addScale('y','band','vertical', 'group');
        
        this._addMargin(0,0,90,0);
        this._addPadding(0,0,0,0);
    }

    init() {

        let self = this;

        this.config.paddingInner = .1;
        this.config.paddingOuter = .1;

        super._init();

        const svgId = "svg-wrapper-" + this.mapping.slug
        const container = document.createElement('section');

        container.style.height = (this.mapping.args[0] === "def") ? "30px" : "200px";
        container.style.width = "100%";
        container.id = svgId;
        this.element.appendChild(container);

        super._svg(container);

        this.chartStackedBarsNormalized = new ChartStackedGroupMms(this);
        
        if (this.mapping.args[0] === "def") {
            this.legend = new HtmlLegendDots(this);
        } else {
        
            this.update(this.data, this.segment, false);
        }
    }

    prepareData(data: DataPart[]) : GraphData {
       
        let grouped = [];
      
        let props: string[] =  this.mapping.parameters[0].map( m => !Array.isArray(m.column) ? m.column : "");

        if (this.mapping.args[0] == "years") {

            let yearData = data.filter (w => w._year === parseInt(this.mapping.args[1]));

            // group by pgv ... 
            for (let i = 1; i < 7; i++) {

                let group:any = {};
                group.label = pgvLabels[i - 1];
                for (let prop of props) {       
                    group[prop] = yearData.map( m => m[i + '-' + prop]).reduce((total: number, item: number) => total + item); 
                }

                // stack voor pgv
                grouped.push(group);
            }

        } else if (this.mapping.args[0] == "pgv") {

            let index = parseInt(this.mapping.args[1]);
            let years = [... Array.from(new Set(data.map( (o) => o._year)))];

            for (let year of years) {

                let yearData = data.filter (w => w._year === year);
                let group: any = {};
                group.label = year;
                for (let prop of props) { 
                    group[prop] = yearData.map( m => m[index + '-' + prop]).reduce((total: number, item: number) => total + item); 
                }

                grouped.push(group);
            }

            

            // how to group everything by pgv 

            // let yearData = data.filter (w => w["pgv"] === parseInt(this.mapping.args[1]));

            // console.log(yearData);
            // group by pgv ... 
            // for (let i = 1; i < 7; i++) {

            //     let group:any = {};
            //     group.label = pgvLabels[i - 1];
            //     for (let prop of props) {       
            //         group[prop] = yearData.map( m => m[i + '-' + prop]).reduce((total: number, item: number) => total + item); 
            //     }

            //     // stack voor pgv
            //     grouped.push(group);
            // }


        }

        // console.log(grouped);
        // group by 


        this.labels = grouped.map( g => g.label);
       //  keys for stacking dit zijn de procedurestappen 
        this.keys = Object.keys(grouped[0]).filter( k => k != 'label');

        // console.log(this.keys);

        this.normalizedStack = d3.stack()
            .offset(d3.stackOffsetExpand)
            .keys(this.keys);

        // console.log(grouped);

        return { 
            "history" : null,
            "latest":  null, 
            "slice" : null,
            "grouped": grouped,
            "stacked": this.normalizedStack(grouped)
        }

    }

    draw(data: GraphData) {

        // with data we can init scales
       //  scale voor yearGroups
       // scale voor bars


        this.scales.x.set([0,1]);
        // we need one system for yscale ..
        this.scales.y.set(data.grouped.map( g => g.label));
        // width data we can draw items
        this.chartStackedBarsNormalized.draw(data);

    }

    redraw(data: GraphData)  {

       super.redraw(data.grouped);

        this.chartStackedBarsNormalized.redraw();
    }

    update(data: GraphData, segment: string, update: boolean) {
        super._update(data,segment,update);
    } 
}

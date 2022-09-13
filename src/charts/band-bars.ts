import { ChartAxes } from '../chart-basics/module';

import { ChartBar } from '../svg-elements/module';

import { GraphObject } from '../types/graphObject';
import { D3DataTypeLatest, DataPart, GraphData } from '../types/data';
import { GraphControllerV2 } from './graph-v2';
import { IGraphMapping } from '../types/mapping';
import { breakpoints } from '../_styleguide/_breakpoints';

export default class BandBars extends GraphControllerV2 {

    chartAxis;
    chartBar;

    yScale;
    xScale;
    bottomAxis;
    leftAxis;

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

        this._addMargin(20,40,0,0);
        this._addPadding(0,0,30,0);

        this._addScale('x','band','horizontal','label');
        this._addScale('y','linear','vertical','value');

        this._addAxis('x','x','bottom');
        this._addAxis('y','y','left')
    }

    init() {

        super._init();

        if(window.innerWidth < breakpoints.sm && this.mapping.args && this.mapping.args[0] === 'alternateTicks') {
            this._addMargin(20,140,0,0);
        }

        const svgId = "svg-wrapper-" + this.mapping.slug
        const container = document.createElement('section');
        container.style.height = (window.innerWidth < breakpoints.sm) ? "320px" : "320px";
        container.style.width = "100%";
        container.id = svgId;
        this.element.appendChild(container);

        super._svg(container);

        

        this.config.paddingInner = .25;
        this.config.paddingOuter = 0.25;

        this.chartBar = new ChartBar(this);

        if(this.data[0][this.firstMapping['column']] != null && this.data[0][this.firstMapping['column']] != 0 ) {
            this.update(this.data,"all", false);
        }
    }

    prepareData(data: DataPart[]) : GraphData {

        let slice: D3DataTypeLatest[] = [];

        let d = data.find( j => j['gemeente'] === this.segment);

        for (let mapping of this.mapping.parameters[0]) {

            let column = Array.isArray(mapping) ? mapping[0].column : mapping.column;

            slice.push({
                    label: mapping.label,
                    colour: mapping.colour,
                    value: d[column],
                    gemeente: d['gemeente'],
                    _date: d['_date']

                }
            )
        }

        return { 
            "history" : null,
            "latest":  null, 
            "slice" : slice,
        };
    }

    draw(data: GraphData) {

        this.scales.x.set(data.slice.map(d => d[this.parameters.x]));
        this.chartBar.draw(data.slice);
    }


    redraw(data: GraphData) {

        this.yScale = this.scales.y.set(data.slice.map ( d => d[this.parameters.y]));

        super.redraw(data);
        // redraw data
        this.chartBar.redraw(data.slice);
    }

    
    update(data: GraphData, segment: string, update: boolean) {
        super._update(data,segment,update);
    } 
}

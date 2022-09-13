import { ChartBarTicker  } from '../svg-elements/module';

import { breakpoints } from "../_styleguide/_breakpoints";
import { GraphObject } from '../types/graphObject';
import { flattenColumn } from '../d3-services/_helpers';
import { filterWeeks, getNeededColumnsForHistory, getNeededColumnsForHistoryV2, groupByMonths } from '../d3-services/data-with-history.functions';
import { DataPart, GraphData } from '../types/data';
import { isSafeInteger } from 'lodash';
import * as d3 from 'd3';
import { GraphControllerV2 } from './graph-v2';
import { IGraphMapping } from '../types/mapping';

export default class TickerBars extends GraphControllerV2   {

    chartBars;

    constructor(
        public main: any,
        public data : any,
        public element : HTMLElement,
        public mapping: IGraphMapping,
        public segment: string  
    ) {
        super(main,data,element,mapping,segment);
        this.pre();
    }

    pre() {
        this._addScale("x","linear","horizontal","_week");
        this._addScale("y","linear","vertical",flattenColumn(this.firstMapping['column']));

        this._addMargin(0,0,0,0);
        this._addPadding(0,4,0,0);

        this.parameters.y2 = flattenColumn(this.firstMapping['column']);
    }


    init() {

        let self = this;

        this._init();

        this.config.extra.smartColours = this.mapping.args[0];

        this.styleMainElement();

        let graphWidth; //  = '142px';
        if (window.innerWidth < breakpoints.sm ) { 
            graphWidth = '162px' 
        } else if (window.innerWidth < breakpoints.sm ) { 
            graphWidth = '142px' 
        } else if (window.innerWidth < breakpoints.md) { 
                graphWidth = '162px'  
        } else if (window.innerWidth < breakpoints.bax) { 
            graphWidth = '112px' 
        } else { 
            graphWidth = '142px'  
        }

        const labelContainer = document.createElement('div');
        labelContainer.style.width = '100%';

        labelContainer.style.textAlign = 'left';
        labelContainer.style.marginLeft = '.5rem';
        labelContainer.style.marginBottom = '.5rem';
        labelContainer.innerText = this.mapping.parameters[0][0].label + ":";
        this.element.appendChild(labelContainer);

        if (window.innerWidth < breakpoints.sm) {
            labelContainer.style.height = '2rem';
        } else if (window.innerWidth < breakpoints.md) {
            labelContainer.style.height = '1.5rem';
        } else {
            labelContainer.style.height = '1.5rem';
        }

        const numberContainer = document.createElement('div');
        
        numberContainer.style.height = '3.75rem';
        numberContainer.style.display = 'flex';
        numberContainer.style.flexDirection = 'column';
        numberContainer.style.alignItems = 'flex-start';
        numberContainer.style.width = 'calc(100% - ' +  graphWidth + ' - 1rem)';
     
        const number = document.createElement('div');
        number.innerText = this.data[0][flattenColumn(this.mapping.parameters[0][0].column)];
        number.style.fontSize = '2.5rem';
        number.style.lineHeight = "1";
        number.style.fontFamily = "Replica";
        numberContainer.appendChild(number);

        const units = document.createElement('div');
        units.innerText = this.mapping.parameters[0][0].units
        numberContainer.appendChild(units);

        this.element.appendChild(numberContainer);

        const graphContainer = document.createElement('div');
        graphContainer.style.width = graphWidth;
        graphContainer.style.height = '4rem';
        graphContainer.style.marginRight= '1rem';
        this.element.appendChild(graphContainer);

        this._svg(graphContainer)

        this.chartBars = new ChartBarTicker(this)

        this.update(this.data,this.segment, false);
    }

    styleMainElement() {

        this.element.style.position = 'relative';
        this.element.style.display = 'flex';
        this.element.style.flexDirection = 'row-reverse';
        this.element.style.flexWrap = 'wrap';
        this.element.style.justifyContent = 'center';
       

        if (window.innerWidth < breakpoints.sm) {
            
            this.element.style.width = '100%';
            this.element.style.margin = '1.5rem auto';

        } else if  (window.innerWidth < breakpoints.md){

            this.element.style.flex = '0 0 50%';
            this.element.style.margin = '2rem auto 0 auto';
            this.element.style.height = '100%';

        } else {
            this.element.style.flex = 'auto';
            this.element.style.height = '100%';
            this.element.style.width = '298px';
            this.element.style.padding = '1rem 0 0 2rem';
        }
    }

    prepareData(data: DataPart[]) : GraphData  {

        const neededColumns = getNeededColumnsForHistoryV2(data,this.mapping);
        const history = filterWeeks(data,neededColumns);

        history.forEach( (week) => week['colour'] = "moss");

        return {
            "history" : history.slice(0, history.length),
            "latest" : data[0], 
            "slice" : history.slice(0, 20).reverse(),
            "average" : this.average(history)
        }
    }

    redraw(data: GraphData) {

        this.yScale = this.scales.y.set(data.slice.map( d => d[this.parameters.y]));

        super.redraw(data);
        this.chartBars.redraw(data);
    }

    draw(data: GraphData) {

        const xValues = data.slice.map(d => d[this.parameters.x]);
        this.xScale = this.scales.x.set([xValues[xValues.length - 1]], xValues[0]);
        this.chartBars.draw(data);
    }

    update(data: GraphData, segment: string, update: boolean) {
        super._update(data,segment,update);
    }

    average(data: any[]) : number {

        data = data.filter( (d) => d[this.parameters.y] > 0)

        return (data.reduce((a,b) => { return a + parseInt(b[this.parameters.y]); },0)) / (data.length);
    }
}

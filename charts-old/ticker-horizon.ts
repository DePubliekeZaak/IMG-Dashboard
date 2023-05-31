import { ChartBarHorizon } from '@local/elements';

import { breakpoints } from "@local/styleguide";
import { flattenColumn, thousands } from '@local/d3-services';
import { filterWeeks, getNeededColumnsForHistory, getNeededColumnsForHistoryV2, groupByMonths } from '../../d3-services/data-with-history.functions';
import { DataPart, GraphData } from '@local/d3_types';
import { GraphControllerV2 } from '@local/d3_graphs';
import { IGraphMapping } from '@local/d3_types';

export default class TickerHorizon extends GraphControllerV2 {

    y2Parameter;
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
        this._addScale("y","linear","vertical-reverse",flattenColumn(this.firstMapping['column']));

        this._addMargin(0,0,0,0);
        this._addPadding(0,4,0,0);

        this.parameters.y2 = flattenColumn(this.mapping.parameters[0][1].column);
    }

    init() {

        let self = this;

        this._init();

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

        const numberContainer = document.createElement('div');
        
        numberContainer.style.display = 'flex';
        numberContainer.style.flexDirection = 'column';
        numberContainer.style.alignItems = 'flex-start';
        numberContainer.style.width = 'calc(100% - ' +  graphWidth + ' - 1.25rem)';
        numberContainer.style.marginTop = '-1.25rem';

        const label = document.createElement('div');
        label.innerText = this.mapping.parameters[1][0].label;
        numberContainer.appendChild(label);

        const number = document.createElement('div');
        number.innerText = thousands(this.data[0][flattenColumn(this.mapping.parameters[1][0].column)]);
        number.style.fontSize = '2.5rem';
        number.style.lineHeight = "1.05";
        number.style.fontFamily = "Replica";
        numberContainer.appendChild(number);

        const units = document.createElement('div');
        units.innerText = this.mapping.parameters[1][0].units;
        numberContainer.appendChild(units);

        this.element.appendChild(numberContainer);

        const graphContainer = document.createElement('div');
        graphContainer.style.width = graphWidth;
        graphContainer.style.height = '5rem';
        graphContainer.style.marginRight= '1.25rem';
        graphContainer.style.paddingTop= '.25rem';
        this.element.appendChild(graphContainer);

        this._svg(graphContainer)

        this.chartBars = new ChartBarHorizon(this)

        this.update(this.data,this.segment, false);
    }

    styleMainElement() {

        this.element.style.position = 'relative';
        this.element.style.display = 'flex';
        this.element.style.flexDirection = 'row-reverse';
        this.element.style.flexWrap = 'wrap';
        this.element.style.justifyContent = 'center';
        this.element.style.padding = '1rem 0';
        this.element.style.margin = 'auto'

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
        }
    }

    prepareData(data: DataPart[]) : GraphData  {

        const neededColumns = getNeededColumnsForHistoryV2(data,this.mapping).concat(this.mapping.parameters[1][0].column)
        const history = filterWeeks(data,neededColumns);

        let voorraad_bij_eind = history[0][flattenColumn(this.mapping.parameters[1][0].column)];

        history.forEach( (week) => { 
            week['diff'] = week[this.parameters.y] - week[this.parameters.y2]
            week['relative_diff'] = voorraad_bij_eind - week[flattenColumn(this.mapping.parameters[1][0].column)]
        });

        return {
            "history" : history.slice(0, history.length),
            "latest" : data[0], 
            "slice" : history.slice(0, 20).reverse(),
            "average" : this.average(history)
        } 
    }

    redraw(data: GraphData) {

        const yValues = data.slice.map( d => d[this.parameters.y]).concat(data.slice.map( d => d[this.y2Parameter]))

        this.yScale = this.scales.y.set(yValues);

        super.redraw(data);

        this.yScale = this.scales.y.reset('vertical-reverse', this.dimensions, this.yScale);
        this.chartBars.redraw(data);
    }

    draw(data: GraphData) {

        const xValues = data.slice.map(d => d[this.parameters.x]);
        this.scales.x.set([xValues[xValues.length - 1]], xValues[0]);
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

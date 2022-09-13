import { ChartBarHorizonWaardedaling, ChartFocus } from '../svg-elements/module';
import { flattenColumn } from '../d3-services/_helpers';
import { filterWeeks, getNeededColumnsForHistoryV2  } from '../d3-services/data-with-history.functions';
import { DataPart, GraphData } from '../types/data';

import HtmlLegendDotsLines from '../html-elements/html-legend-dots-lines';
import { GraphControllerV2 } from './graph-v2';
import { IGraphMapping } from '../types/mapping';

export default class Horizon extends GraphControllerV2   {

    y2Parameter;
    y3Parameter;
    chartBars;
    chartFocus;
    legend;

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

        this._addScale('x','linear','horizontal','_index');
        this._addScale('y','linear','vertical', flattenColumn(this.firstMapping['column']));
        this._addAxis('x','x','belowBottom','quarterly');
        this._addAxis('y','y','left');
        this._addMargin(0,0,0,0);
        this._addPadding(30,120,40,0);
    }

    init() {

        let self = this;

        this._init();

        const svgId = "svg-wrapper-" + this.mapping.slug
        const container = document.createElement('section');
        container.style.height = "400px";
        container.style.width = "100%";
        container.id = svgId;
        this.element.appendChild(container);

        this._svg(container)

        this.parameters.y2 = this.mapping.parameters[0][1].column;
        this.parameters.y3 = this.mapping.parameters[1][0].column;

        this.chartBars = new ChartBarHorizonWaardedaling(this);

        this.legend = new HtmlLegendDotsLines(this);
        this.chartFocus = new ChartFocus(this);
    
        this.update(this.data,this.segment, false);
    }

    prepareData(data: DataPart[]) : GraphData  {

        const neededColumns = getNeededColumnsForHistoryV2(data,this.mapping)
        let history = filterWeeks(data,neededColumns);

        history = history.filter( (w) => {
            return w[this.parameters.y] > 0 || w[this.parameters.y2] > 0;
        });

        let voorraad_bij_eind = history[0][flattenColumn(this.mapping.parameters[1][0].column)];

        history.forEach( (week, i) => { 

            week['_index'] = i;
            
            week['diff'] = week[this.parameters.y] - week[this.y2Parameter]
            week['relative_diff'] = voorraad_bij_eind - week[flattenColumn(this.mapping.parameters[1][0].column)]
            
        });

        return {
            "history" : history.slice(0, history.length),
            "latest" : data[0], 
            "slice" :  history.slice(0, history.length).reverse(),
            "average" : this.average(history)
        } 
    }

    redraw(data: GraphData) {

        const yValues = data.slice.map( d => d[this.parameters.y3] * 1.2);

        this.scales.y.set(yValues,0);

        super.redraw(data);

        this.scales.y.reset('vertical', this.dimensions);
        this.chartBars.redraw(data);

        this.chartFocus.redraw(data);

    }

    draw(data: GraphData) {

        const xValues = data.slice.map(d => d[this.parameters.x]);

        this.scales.x.set([xValues[xValues.length - 1] - 1], xValues[0]);
        this.chartBars.draw(data);
        this.chartFocus.draw(data);

    }

    update(data: GraphData, segment: string, update: boolean) {
        super._update(data,segment,update);
    }

    average(data: any[]) : number {

        data = data.filter( (d) => d[this.parameters.y] > 0)

        return (data.reduce((a,b) => { return a + parseInt(b[this.parameters.y]); },0)) / (data.length);
    }
}

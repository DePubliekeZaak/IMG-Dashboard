import { GraphController } from './graph';
import * as _ from "lodash";
import {
    ChartBlockTrend
} from '../svg-elements/module';
import { GraphObject } from '../types/graphObject';
import { ChartAxes } from '../chart-basics/chart-axes';
import { DataPart, GraphData } from '../types/data';
import { getNeededColumnsForHistory, groupByMonths } from '../d3-services/data-with-history.functions';

export default class ShortTrend extends GraphController {

    bottomAxis;
    chartBlockTrend;

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

        this.bottomAxis = new ChartAxes(this.graphObject.config, this.svg, 'bottom',this.chartXScale);
        this.bottomAxis.draw();

        this.chartBlockTrend = new ChartBlockTrend(this);

        this.update(this.data,this.segment,false);
    }

    prepareData(data: DataPart[]) : GraphData  {

        const neededColumns = getNeededColumnsForHistory(data, this.graphObject);
        const history = groupByMonths(data,neededColumns);

        this.main.dataStore.setGraph(this.graphObject.slug, history)

        return { 
            "history" : history,
            "latest" : data[0], 
            "slice" : history.slice(0,12).reverse(), 
        };

    }

    redraw(data: GraphData) {

        super.redraw(data);
 
        this.bottomAxis.redraw(this.graphObject.config.xScaleType,this.dimensions,this.xScale);

        this.chartBlockTrend.redraw();
    }

    draw(data: GraphData) {

        this.xScale = this.chartXScale.set(data.slice.map(d => d[this.xParameter]));
        this.yScale = this.chartYScale.set(data.history.map( d => d[this.yParameter]), 0);

        this.chartBlockTrend.draw(data.slice);

        this.popup.attachData([data.latest])

    }

    update(data: GraphData, segment: string, update: boolean) {

        super._update(data,segment,update);

    }
}

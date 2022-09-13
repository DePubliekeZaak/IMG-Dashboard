import * as _ from "lodash";
import { ChartBlockTrend } from '../svg-elements/module';
import { DataPart, GraphData } from '../types/data';
import { getNeededColumnsForHistoryV2, groupByMonths } from '../d3-services/data-with-history.functions';
import { GraphControllerV2 } from './graph-v2';
import { IGraphMapping } from '../types/mapping';
import { flattenColumn } from '../d3-services/_helpers';

export default class ShortTrend extends GraphControllerV2 {

    bottomAxis;
    chartBlockTrend;

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

        this.parameters.x = flattenColumn(this.mapping.parameters[0][0].column);

        this._addScale("x","band","horizontal",this.mapping.args[0]); // week en maand 
        this._addScale("y","linear","vertical",this.parameters.x);
        this._addAxis("x","x","bottom");
        this._addMargin(0,0,0,0);
        this._addPadding(10,0,10,10);
    }

    init() {

        super._init();

        const svgId = "svg-wrapper-" + this.mapping.slug
        const container = document.createElement('section');
        container.style.height = "160px";
        container.style.width = "100%";
        container.id = svgId;
        this.element.appendChild(container);

        super._svg(container);

        this.config.paddingInner = 0.1;
        this.config.paddingOuter = 0;
        this.config.extra.decimal = true;

        if(this.mapping.args[0] === "_month") {
            this.config.extra.axisInMonths = true;
        }

        this.chartBlockTrend = new ChartBlockTrend(this);

        this.update(this.data,this.segment,false);
    }

    prepareData(data: DataPart[]) : GraphData  {

        const neededColumns = getNeededColumnsForHistoryV2(data, this.mapping);
        const history = groupByMonths(data,neededColumns);

        this.main.dataStore.setGraph(this.mapping.slug, history)

        return { 
            "history" : history,
            "latest" : data[0], 
            "slice" : history.slice(0,12).reverse(), 
        };

    }

    redraw(data: GraphData) {

        super.redraw(data);
        this.chartBlockTrend.redraw();
    }

    draw(data: GraphData) {

        this.scales.x.set(data.slice.map( m => m[this.parameters.x]))
        this.scales.y.set(data.slice.map( m => m[this.parameters.y]),0)

        this.chartBlockTrend.draw(data.slice);

        this.popup.attachData([data.latest])

    }

    update(data: GraphData, segment: string, update: boolean) {

        super._update(data,segment,update);

    }
}


import { HtmlAverage } from '@local/elements';
import { filterWeeks, getNeededColumnsForHistory, getNeededColumnsForHistoryV2 } from '@local/img-services';
import { DataPart, GraphData, IGraphMapping } from '@local/d3_types';
import { GraphControllerV2 } from '@local/d3_graphs';
import { flattenColumn } from '@local/d3-services';

export default class Average extends GraphControllerV2  {

    htmlAverage;

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
        this.parameters.y = flattenColumn(this.firstMapping['column']);
    }

    init() {

        this._init();

        this.htmlAverage = new HtmlAverage(this);
      //  this.htmlSegment = new HtmlSegment(this.element);

        this.htmlAverage.draw();
    
        this.update(this.data,this.segment,false);

    }

    prepareData(data: DataPart[]) : GraphData  {

        const neededColumns = getNeededColumnsForHistoryV2(data, this.mapping);

        const history = filterWeeks(data,neededColumns);

        this.main.dataStore.setGraph(this.mapping.slug, history);

        return { 
            "history" : history,
            "latest" : data[0], 
            "slice" : history.slice(0,8), 
        };
    }

    redraw(data: GraphData) {
        this.htmlAverage.redraw(data,this.parameters.y);
    }

    update(data: GraphData, segment: string, update: boolean) {
        super._update(data,segment,update);
    }
}

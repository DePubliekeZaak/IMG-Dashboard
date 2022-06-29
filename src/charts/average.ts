
import { HtmlAverage } from '../html-elements/module';
import { GraphController } from './graph';
import { GraphObject } from '../types/graphObject';
import { filterWeeks, getNeededColumnsForHistory } from '../d3-services/data-with-history.functions';
import { DataPart, GraphData } from '../types/data';

export default class Average extends GraphController  {

    htmlAverage;

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

        this._init();

        this.htmlAverage = new HtmlAverage(this);
      //  this.htmlSegment = new HtmlSegment(this.element);

        this.htmlAverage.draw();
    
        this.update(this.data,this.segment,false);

    }

    prepareData(data: DataPart[]) : GraphData  {

        const neededColumns = getNeededColumnsForHistory(data, this.graphObject);
        const history = filterWeeks(data,neededColumns);

        this.main.dataStore.setGraph(this.graphObject.slug, history);

        return { 
            "history" : history,
            "latest" : data[0], 
            "slice" : history.slice(0,8), 
        };
    }

    redraw(data: GraphData) {
        this.htmlAverage.redraw(data,this.yParameter);
    }

    update(data: GraphData, segment: string, update: boolean) {
        super._update(data,segment,update);
    }
}

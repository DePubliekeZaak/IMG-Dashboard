import { HtmlCircle } from '../html-elements/module';
import { GraphController } from './graph';
import { GraphObject } from '../types/graphObject';
import { DataPart, GraphData } from '../types/data';
import { filterWeeks, getNeededColumnsForHistory } from '../d3-services/data-with-history.functions';
import { ChartDimensions } from '../chart-basics/chart-dimensions';

export default class Cijfer extends GraphController   {

    htmlCircle;

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

        super._init();
        // super._svg(this.elementID);
        
        this.htmlCircle = new HtmlCircle(this.graphObject.config,this.graphObject.mapping,this.element,this.firstMapping);
        this.htmlCircle.draw();

        this.update(this.data,this.segment,false);

    }

    prepareData(data: DataPart[])  {

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

        super.redraw(data);

        let noRespondents = (this.graphObject.mapping[0][2]) ? this.graphObject.mapping[0][2]['column'] : '';
        this.htmlCircle.redraw([data.latest],this.firstMapping.column,noRespondents);
    }


    update(data: GraphData, segment: string, update: boolean) {

        super._update(data,segment,update);

    }

}

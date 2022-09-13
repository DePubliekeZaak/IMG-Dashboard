import { HtmlTotals, HtmlNumberNew, HtmlSegment } from '../html-elements/module';

import { GraphControllerV2 } from './graph-v2';
import { GraphObject } from '../types/graphObject';
import { filterWeeks, getNeededColumnsForHistory } from '../d3-services/data-with-history.functions';
import { DataPart, GraphData } from '../types/data';
import { IGraphMapping } from '../types/mapping';

export class TotalPlus extends GraphControllerV2  {

    htmlTotals;
    htmlNumber;
    htmlSegment;

    constructor(
        public main: any,
        public data : any,
        public element : HTMLElement,
        public mapping: IGraphMapping,
        public segment: string  
    ){
        super(main,data,element,mapping,segment) 
    }

    pre() {

        this._addMargin(200,0,10,0);
        this._addPadding(0,20,0,0);

        
    }


    init() {

        this._init();

        this.config.paddingInner = 0;
        this.config.paddingOuter = 0;


    //    this.config.extra.currency = true;

        this.htmlNumber = new HtmlNumberNew(this);
        this.htmlNumber.draw();

        this.update(this.data,this.segment,false);

    }

    prepareData(data: DataPart[]) : GraphData  {

        return { 
            "history" : null,
            "latest" : data[0], 
            "slice" : null, 
        };
    }

    redraw(data: GraphData) {

        this.htmlNumber.redraw(data); 
    }

    draw(data: GraphData) {}

    update(data: GraphData, segment: string, update: boolean) {
        super._update(data,segment,update);
    }

}

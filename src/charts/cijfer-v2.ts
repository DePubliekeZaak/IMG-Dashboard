import { HtmlAccented, HtmlMulti } from '../html-elements/module';
import { DataPart, GraphData } from '../types/data';
import { filterWeeks, getNeededColumnsForHistory, getNeededColumnsForHistoryV2 } from '../d3-services/data-with-history.functions';
import { IGraphMapping } from '../types/mapping';
import { GraphControllerV2 } from './graph-v2';

export default class CijferV2 extends GraphControllerV2   {

    html;

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

        this._addPadding(0,60,0,0);
        this._addMargin(200,0,10,10);

    }

    init() {

        super._init();

        if(this.mapping.parameters[0].length < 2)  {
            this.html = new HtmlAccented(this);
        } else {
            this.html = new HtmlMulti(this);
        }

        this.html.draw();

        this.update(this.data,this.segment,false);

        if(this.mapping.parameters[0] && this.mapping.parameters[0][0].format == "decimal") {
            this.config.extra.decimal = true;
        }

    }

    prepareData(data: DataPart[])  {

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

        super.redraw(data);

        let noRespondents = (this.mapping.parameters[0][2]) ? this.mapping.parameters[0][2]['column'] : '';
        this.html.redraw([data.latest],noRespondents);
    }


    update(data: GraphData, segment: string, update: boolean) {

        super._update(data,segment,update);

    }

}

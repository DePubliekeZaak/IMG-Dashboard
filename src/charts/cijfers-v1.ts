import { HtmlAccented, HtmlMulti } from '../html-elements/module';
import { DataPart, GraphData } from '../types/data';
import { filterWeeks, getNeededColumnsForHistory, getNeededColumnsForHistoryV2 } from '../d3-services/data-with-history.functions';
import { IGraphMapping } from '../types/mapping';
import { GraphControllerV2 } from './graph-v2';

export default class CijfersV1 extends GraphControllerV2   {

    prop_1;
    prop_2;

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

        // let headerText = this.mapping.header;
        // this.mapping.header = "";

        super._init();

        this.element.classList.add("flow-block");


     
        this.prop_1 = new HtmlAccented(this);
        this.prop_2 = new HtmlAccented(this);

        this.element.id = this.mapping.slug;
    
        this.prop_1.draw(0);
        this.prop_2.draw(1);

    
        if(this.mapping.parameters[0] && this.mapping.parameters[0][0].format == "decimal") {
            this.config.extra.decimal = true;
        }

        this.update(this.data,this.segment,false);

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

      //  let noRespondents = (this.mapping.parameters[0][2]) ? this.mapping.parameters[0][2]['column'] : '';
        this.prop_1.redraw([data.latest],0);
        this.prop_2.redraw([data.latest], 1);
    }


    update(data: GraphData, segment: string, update: boolean) {

        super._update(data,segment,update);

    }

}

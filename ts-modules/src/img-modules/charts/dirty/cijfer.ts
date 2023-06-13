import { HtmlCircle } from '@local/elements';
import { DataPart, GraphData } from '@local/d3_types';
import { filterWeeks, getNeededColumnsForHistory, getNeededColumnsForHistoryV2 } from '@local/img-services';
import { IGraphMapping } from '@local/d3_types';
import { GraphControllerV2 } from '@local/d3_graphs';

export default class Cijfer extends GraphControllerV2   {

    htmlCircle;

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

        this.htmlCircle = new HtmlCircle(this);
        this.htmlCircle.draw();

        if(this.mapping.parameters[0][0].format == "decimal") {
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

        let noRespondents = (this.mapping.parameters[0][2]) ? this.mapping.parameters[0][2]['column'] : '';
        this.htmlCircle.redraw([data.latest],this.firstMapping['column'],noRespondents);
    }


    update(data: GraphData, segment: string, update: boolean) {

        super._update(data,segment,update);

    }

}

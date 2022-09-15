import { HtmlCircle } from '../html-elements/module';
import { DataPart, GraphData } from '../types/data';
import { filterWeeks, getNeededColumnsForHistory, getNeededColumnsForHistoryV2 } from '../d3-services/data-with-history.functions';
import { IGraphMapping } from '../types/mapping';
import { GraphControllerV2 } from './graph-v2';
import { flattenColumn } from '../d3-services/_helpers';

export default class SectionHeader extends GraphControllerV2   {

    htmlHeader;

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


    }

    init() {

        super._init();

        this.element.style.height = "3rem";
        this.element.style.alignItems = "flex-start";
        this.element.style.margin = "0";

        // let h = document.createElement('h3');
        // h.innerText = this.mapping.parameters[0][0].label;
        // h.style.fontFamily = 'Replica';
        // h.style.textAlign = 'left';
        // h.style.fontSize = '1rem';
        // h.style.lineHeight = '1.44';
        // h.style.margin = '0';

        // this.element.appendChild(h);
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
    }


    update(data: GraphData, segment: string, update: boolean) {
        super._update(data,segment,update);
    }

}

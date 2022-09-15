import { DataPart, GraphData } from '../types/data';
import { IGraphMapping } from '../types/mapping';

import DashboardGraph from "../dashboard/dashboard.graph.service";

import { HtmlHeader } from '../html-elements/module';


export default class Grid   {

    graphService;
    htmlHeader;

    constructor(
        public main: any,
        public data : any,
        public element : HTMLElement,
        public mapping: IGraphMapping,
        public segment: string,

    ){


       

        this.graphService = new DashboardGraph(this.main)
    }

    pre() {

       

    }

    init() {

        // create 

        if (this.mapping.header) {
            this.htmlHeader = new HtmlHeader(this.element, this.mapping.header);
            this.htmlHeader.draw(); 
        }

        let section = document.createElement('section');
        section.style.display = "grid";
        section.style.width = "100%";
        section.style.gridTemplateColumns = "repeat(12, 1fr)";
        this.element.appendChild(section);
        // console.log(section);
        this.graphService.call(this.mapping.children, this.segment, false, section)
    }

    prepareData(data: DataPart[])  {

     
    }

    redraw(data: GraphData) {

     
    }


    update(data: GraphData, segment: string, update: boolean) {


    }

}

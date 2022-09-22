import { DataPart, GraphData } from '../types/data';
import { IGraphMapping } from '../types/mapping';

import DashboardGraph from "../dashboard/dashboard.graph.service";

import { HtmlHeader, HtmlLink } from '../html-elements/module';


export default class Grid   {

    graphService;
    htmlHeader;
    htmlLink;

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
            this.htmlHeader.hide();
        }

        let section = document.createElement('section');
        section.classList.add("img-graph-grid-container");
        this.element.appendChild(section);
        // console.log(section);
        this.graphService.call('',this.mapping.children, this.segment, false, section);

        if (this.mapping.linkTopic) {
            this.htmlLink = new HtmlLink(this.main, this.element, this.mapping.linkLabel, this.mapping.linkTopic);
            this.htmlLink.draw(); 
            this.htmlLink.hide();
        }

        setTimeout( () => {

            this.htmlHeader.show(); 
            if (this.mapping.linkTopic) {
                this.htmlLink.show(); 
            }
        }, 1000)

    }

    prepareData(data: DataPart[])  {

     
    }

    redraw(data: GraphData) {

     
        
    }


    update(data: GraphData, segment: string, update: boolean) {


    }

}

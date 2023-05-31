import { DataPart, GraphData } from '@local/d3_types';
import { IGraphMapping } from '@local/d3_types';

import DashboardGraph from "@local/browser/dashboard";

import { HtmlHeader, HtmlLink } from '@local/elements';


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

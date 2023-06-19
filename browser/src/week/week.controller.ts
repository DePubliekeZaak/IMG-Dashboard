import {GraphObject} from "@local/d3_types";
import DataService from "../services/data.service";
import { default as GraphService } from "../services/graph.service"
import {weekFs} from '@local/configs'
import { styleParentElement } from '../services/html.factory'


export class InitWeek {

    graphObjectArray : GraphObject[]  = [];
    

    dataService;
    graphService;
    window;

    htmlContainer;
    html;

    constructor(){
        
        this.dataService = new DataService();
        this.graphService = new GraphService(this);
    }

    init() {

        let self = this;
        this.window = window;
        this.reloadHtml();

        const segment = 'all';

        this.call("fs", weekFs, segment, false);

    }

    reloadHtml() {

        this.htmlContainer = styleParentElement(this.window.document);

    }

    call(topic, dashboardArray, segment: string, update: boolean) {

     //   this.html.pageHeader(topic, this.htmlContainer);

        this.graphService.call(topic, dashboardArray, segment, update, this.htmlContainer)
    }
}

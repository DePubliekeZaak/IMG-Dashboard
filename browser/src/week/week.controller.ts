import {GraphObject} from "../../../ts-modules/src/d3-modules/_d3_types";
import DataService from "../services/data.service";
import { default as GraphService } from "../services/graph.service"

import {weekFs, weekFs2} from '../../../ts-modules/src/configs'
import { styleParentElement } from '../services/html.factory'

        // container.style.marginBottom = '3rem';

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

        const size = [800,300]

        this.call("fs", weekFs2, segment, false, size);

    }

    reloadHtml() {

        this.htmlContainer = styleParentElement(this.window.document);

    }

    call(topic, dashboardArray, segment: string, update: boolean, size: number[]) {

     //   this.html.pageHeader(topic, this.htmlContainer);

        this.graphService.call(topic, dashboardArray, segment, update, this.htmlContainer, size)
    }
}

import {GraphObject} from "../types/graphObject";
import { breakpoints} from "../_styleguide/_breakpoints";
import DashboardParams from "./dashboard.params";
import DashboardHTMLV2 from "./dashboard.html.v2";
import DashboardInteractions from "./dashboard.interactions";
import DashboardData from "./dashboard.data.service";
import DashboardGraph from "./dashboard.graph.service";
import DataStore from '../data.store';

import { screenType } from './dashboard.resize'


export class InitDashboard {

    graphObjectArray : GraphObject[]  = [];
    
    // dashBoardMap;
    htmlContainer;
    html;
    interactions;
    dataService;
    graphService;
    params;
    dataStore;

    constructor(){

        this.params = new DashboardParams();
        this.interactions = new DashboardInteractions(this,this.params);
        this.dataStore = new DataStore()
        this.dataService = new DashboardData();
        this.graphService = new DashboardGraph(this);
        this.html = new DashboardHTMLV2(this,this.interactions,this.dataService);
    }

    init() {

        let self = this;

        this.reloadHtml();
        
        const { params, segment } = this.params.read();
        const dashboardArray = this.params.matchConfig(params.topic);

        this.call(params.topic, dashboardArray, segment, false);

        let screen = screenType(window.innerWidth);

        window.addEventListener("resize", () =>  {

            let newScreen = screenType(window.innerWidth);

            if ( screen != newScreen) {

                setTimeout(() => {
                    self.reloadHtml();
                }, 100);
                
            }

        }, false);

        // setTimeout( () => {
        //     window.dispatchEvent(new Event('resize'));
        // }, 1000);
    }

    reloadHtml() {

        this.htmlContainer = this.html.styleParentElement();

        [].slice.call(document.getElementsByTagName("aside")).forEach( (a) => a.remove());
        [].slice.call(document.getElementsByTagName("nav")).forEach( (a) => a.remove());

        if (window.innerWidth >= breakpoints.lg) {

            let aside = this.html.createSideBar(this.htmlContainer);
            aside.insertBefore(this.html.createMenu(this.htmlContainer), aside.childNodes[0]);
      
        } else {
            let mobileNavTop = this.html.createMobileNav(this.htmlContainer);
            // let mobileNavBottom = this.html.createMobileNav(this.htmlContainer);
        }

        this.html.createPopupElement();

    }

    call(topic, dashboardArray, segment: string, update: boolean) {

        this.html.pageHeader(topic, this.htmlContainer);

        this.graphService.call(topic, dashboardArray, segment, update, this.htmlContainer)
    }
}

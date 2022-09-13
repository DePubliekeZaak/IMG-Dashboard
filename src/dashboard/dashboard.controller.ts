import { graphs } from '../charts/module';
import { munis } from '../d3-services/municipalities';
import * as d3 from 'd3';
import {GraphObject} from "../types/graphObject";
import {ResponseData} from "../types/data";
// import {DashboardMap} from "./dashboard_map";
import {dashboardMain, dashboardMeldingen, dashboardVergoedingen, dashboardVoortgang, dashboardSpecials, dashboardReacties, dashboardOpnames, dashboardWaardedalingsRegeling } from "../chart-configs/module";
import { breakpoints} from "../_styleguide/_breakpoints";
import { menuItems } from "./dashboard.menu";
import DashboardParams from "./dashboard.params";
import DashboardHTML from "./dashboard.html";
import DashboardInteractions from "./dashboard.interactions";
import DashboardData from "./dashboard.data.service";
import DataStore from '../data.store';

import { screenType } from './dashboard.resize'


export class InitDashboard {

    graphObjectArray : GraphObject[]  = [];
    graphMethods = {};
    // dashBoardMap;
    htmlContainer;
    html;
    interactions;
    dataService;
    params;
    dataStore;

    constructor(){

        this.params = new DashboardParams();
        this.interactions = new DashboardInteractions(this,this.params);
        this.dataStore = new DataStore()
        this.dataService = new DashboardData();
        this.html = new DashboardHTML(this,this.interactions,this.dataService);
    }

    init() {

        let self = this;

        this.reloadHtml();
        
        const { params, segment } = this.params.read();
        const dashboardArray = this.params.matchConfig(params.topic);

        this.call(dashboardArray, segment, false);

        let screen = screenType(window.innerWidth);

        window.addEventListener("resize", () =>  {

            let newScreen = screenType(window.innerWidth);

            if ( screen != newScreen) {

                setTimeout(() => {
                    self.reloadHtml();
                }, 500);
                
            }

        }, false);

        setTimeout( () => {
            window.dispatchEvent(new Event('resize'));
        }, 1000);
    }

    reloadHtml() {

        this.htmlContainer = this.html.styleParentElement();

        [].slice.call(document.getElementsByTagName("aside")).forEach( (a) => a.remove());
        [].slice.call(document.getElementsByTagName("nav")).forEach( (a) => a.remove());

        if (window.innerWidth >= breakpoints.md) {

            let aside = this.html.createSideBar(this.htmlContainer);
            aside.insertBefore(this.html.createMenu(this.htmlContainer), aside.childNodes[0]);
      
        } else {
            let mobileNavTop = this.html.createMobileNav(this.htmlContainer);
            let mobileNavBottom = this.html.createMobileNav(this.htmlContainer);
        }

        this.html.createPopupElement();

    }

    call(dashboardArray, segment: string, update: boolean) {

        const promises = this.dataService.createDashboardCalls(dashboardArray, segment,false);

        Promise.all(promises).then((values) => {

            let data = this.dataService.discardEmpty(values);
            let { weekData, muniData } = this.dataService.mergeArrayObjects(data);

            if (segment === 'eemsdelta') {
                weekData = this.dataService.createHistoryForEemsdelta(weekData);
                weekData = this.dataService.correctionForEemsdelta(weekData);
            }

            if (segment === 'het-hogeland') {
                weekData = this.dataService.correctionForHetHogeland(weekData);
            }

            if (update) {

                this.interactions.updateMuniList(segment);
                //  highlight path in map
                // if (window.innerWidth > breakpoints.sm) {
                //     this.dashBoardMap.highlight(segment);
                // }
            }
         

            for (let graphObject of dashboardArray) {

                let data = graphObject.segment ? weekData : muniData;

                if (graphObject.config && graphObject.config.multiples) {

                    data = data.filter( (muni) => munis.map((m) => m.value).indexOf(muni.gemeente) > -1 && muni.gemeente !== "all");

                    data.sort((a: any, b: any) => a.schademeldingen_totaal > b.schademeldingen_totaal ? -1 : 1)

                    data = data.filter( m => m.schademeldingen_totaal > 100 );

                    for (let m of data) {
                        const element = this.html.createGraphGroupElement(graphObject, this.htmlContainer);
                        if (update) {
                            this.graphMethods[graphObject.slug].update(data, segment, true);
                        } else {
                            element.innerHTML = '';
                            this.graphMethods[graphObject.slug] = new graphs[graphObject.config.graphType](data, element, graphObject.config, graphObject.mapping[0], graphObject.description, m.gemeente);
                            this.graphMethods[graphObject.slug].init();
                        }
                    }

                } else {

                    const graphType = graphObject.config ? graphObject.config.graphType : graphObject.graph;

                    const element = this.html.createGraphGroupElement(graphObject, this.htmlContainer);

                    if (update) {
                        this.graphMethods[graphObject.slug].update(data, segment, true);
                    } else {
                        element.innerHTML = '';
                    
                        this.graphMethods[graphObject.slug] = new graphs[graphType](this, data, element, graphObject, segment);
                        this.graphMethods[graphObject.slug].init();
                    }
                }
            }
        });
    }
}

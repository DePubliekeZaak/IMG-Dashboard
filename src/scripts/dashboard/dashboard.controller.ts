import { graphs } from '../charts/module';
import { munis } from '../helpers/municipalities';
import * as d3 from 'd3';
import {GraphObject} from "../types/graphObject";
import {ResponseData} from "../types/responseData";
import {DashboardMap} from "./dashboard_map";
import {dashboardMain, dashboardMeldingen, dashboardVergoedingen, dashboardVoortgang, dashboardSpecials, dashboardReacties, dashboardOpnames, dashboardWaardedalingsRegeling } from "../chart-configs/module";
import { breakpoints} from "../_styleguide/_breakpoints";
import { menuItems } from "./dashboard.menu";
import DashboardParams from "./dashboard.params";
import DashboardHTML from "./dashboard.html";
import DashboardInteractions from "./dashboard.interactions";
import DashboardData from "./dashboard.data";


export class InitDashboard {

    graphObjectArray : GraphObject[]  = [];
    graphMethods = {};
    dashBoardMap;
    htmlContainer;
    html;
    interactions;
    data;
    params;

    constructor(){

        this.params = new DashboardParams();
        this.interactions = new DashboardInteractions(this,this.params);
        this.data = new DashboardData();
        this.html = new DashboardHTML(this,this.interactions,this.data);
    }

    init() {

        this.htmlContainer = this.html.styleParentElement();
        const { params, segment } = this.params.read();
        const dashboardArray = this.params.matchConfig(params.topic);

        if (window.innerWidth > breakpoints.md) {

            let aside = this.html.createSideBar(this.htmlContainer);
            aside.insertBefore(this.html.createMenu(this.htmlContainer), aside.childNodes[0]);
            this.html.createList(segment);
            this.dashBoardMap = new DashboardMap(munis);
            // this.dashBoardMap.update(false, "orange");

        } else {
            let mobileNav = this.html.createMobileNav();
        }

        this.html.createPopupElement();

        this.call(dashboardArray, segment,false);

        if (window.innerWidth > breakpoints.md && params.topic !== "") {
            this.interactions.showHideSidebarElements(params.topic)
        }
    }

    call(dashboardArray, segment: string, update: boolean) {

        const promises = this.data.createDashboardCalls(dashboardArray, segment,false);

        Promise.all(promises).then((values) => {

            let data = this.data.discardEmpty(values);
            let { weeks, munis } = this.data.mergeArrayObjects(data);

            if(segment === 'eemsdelta') {
                weeks = this.data.createHistoryForEemsdelta(weeks);
            }

            if (update) {

                this.interactions.updateMuniList(segment);
                //  highlight path in map
                if (window.innerWidth > breakpoints.sm) {
                    this.dashBoardMap.highlight(segment);
                }
            }

            for (let graphObject of dashboardArray) {

                const element = this.html.createGraphGroupElement(graphObject, this.htmlContainer);
                let data = graphObject.segment ? weeks : munis;

                if (update) {
                    this.graphMethods[graphObject.slug].update(data, segment, true);
                } else {
                    element.innerHTML = '';
                    this.graphMethods[graphObject.slug] = new graphs[graphObject.config.graphType](data, element, graphObject.config, graphObject.mapping[0], graphObject.description, segment);
                    this.graphMethods[graphObject.slug].init();
                }
            }
        });
    }
}

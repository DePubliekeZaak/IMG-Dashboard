import { graphs } from './charts/module';
import { munis } from './helpers/municipalities';
import * as d3 from 'd3';
import {GraphObject} from "./types/graphObject";
import {ResponseData} from "./types/responseData";
import {DashboardMap} from "./dashboard/dashboard_map";
import {dashboardMain, dashboardMeldingen, dashboardSpecials } from "./chart-configs/module";
import { breakpoints} from "./_styleguide/_breakpoints";

export class InitDashboard {

    graphObjectArray : GraphObject[]  = [];
    graphMethods = {};
    dashBoardMap;
    dashBoardInfo;
    htmlContainer;

    constructor(){
    }

    init() {

        let segment = 'all';
        let dashboardArray = dashboardMain;
        this.htmlContainer = document.querySelector("[data-img-graph-preset='dashboard']");
        const params : any = this.getParams(window.location.href);

        // segment
        if (params.gemeente && params.gemeente !== undefined) {
            // check if is known gemeente

            if ( munis.map ( m => m.value ).indexOf(params.gemeente) > -1 ) {
                segment = params.gemeente;
            } else {
                console.log('gemeente onbekend');
            }
        }

        if (params.topic && params.topic === 'meldingen') {
            dashboardArray = dashboardMeldingen;

        } else if(params.topic && params.topic === 'specials') {

            dashboardArray = dashboardSpecials;
        }

        if (!params.topic) {
            this.createSideBar();
            this.htmlContainer.classList.add('has_sidebar');
            this.createList(segment);

            if(window.innerWidth > breakpoints.sm ) {
                this.dashBoardMap = new DashboardMap(munis);
                this.dashBoardMap.update(false, "red")
            }
        }

        this.createPopupElement();
        this.makeDashboardCall(dashboardArray, segment,false);


    }

    createSideBar() {

            let aside = document.createElement('aside');
            aside.classList.add('selectors');

            let mapContainer = document.createElement('div');
            mapContainer.id = "img-graph-dashboard-map";
            aside.appendChild(mapContainer);

            this.htmlContainer.appendChild(aside);

    }

    createPopupElement() {

        let popup = document.createElement('div');
        popup.id = 'img-dashboard_popup';
        document.getElementsByTagName('body')[0].appendChild(popup);
    }

    createList(segment) {

        let container = document.querySelector('aside.selectors');

        let ul = document.createElement('ul');
        ul.classList.add('municipalities');

        for ( let muni of munis) {

            let li = document.createElement('li');
            li.innerText = muni.label;
            li.setAttribute('data-slug', muni.value);
            li.onclick = () => this.makeDashboardCall(dashboardMain,muni.value,true);
            li.style.padding = '.125rem .25rem';
            li.style.cursor = 'pointer';

            if (muni.value === segment) {
                li.classList.add('active');
            }

            ul.appendChild(li);
        }

        container.appendChild(ul);
    }

    updateList(segment) {

        for (let option of [].slice.call(document.querySelectorAll('aside.selectors ul li'))) {

            if (option.classList.contains('active')) { option.classList.remove('active') }
            if (option.getAttribute('data-slug') === segment) { option.classList.add('active');}
        }
    }

    mergeArrayObjects(arrays){

        let weeks = [];
        let munis = [];

        // hoe herken ik arrays met alle gemeentes

        const arraysWithWeeks = arrays.filter( a => a.length < 2 || a[0].gemeente === a[1].gemeente);
        const arraysWithMunis = arrays.filter( a => a.length > 1 && a[0]._week === a[1]._week);

        arraysWithWeeks[0].map((item,i)=>{

            let o = {};

            if (arraysWithWeeks.length > 1) {

                for (let i = 1; i < arraysWithWeeks.length; i++) {

                    let objectToMerge = arraysWithWeeks[i].find(object => object.gemeente === item.gemeente && object._date === item._date);
                    o = Object.assign(o, item, objectToMerge)
                }

            } else {

                o = item;
            }

            weeks.push(o);
        });

        if(arraysWithMunis && arraysWithMunis.length > 0) {

            let recentWeeksOnly = arraysWithMunis[0].filter(o => o['_week'] === arraysWithMunis[0][0]['_week']);

            if (recentWeeksOnly && recentWeeksOnly.length > 0) {

                recentWeeksOnly.map((item, i) => {

                    let o = {};

                    if (arraysWithMunis.length > 1) {

                        for (let i = 1; i < arraysWithMunis.length; i++) {

                            let objectToMerge = arraysWithMunis[i].find(object => object._date === item._date);
                            o = Object.assign(o, item, objectToMerge)
                        }

                    } else {
                        o = item;
                    }

                    munis.push(o);
                });
            }

        }

        return { weeks, munis };
    }

    makeDashboardCall(dashboardArray, segment, update) {

        let self = this;
        let promises = [];
        let uniqueEndpoints : any = [... Array.from(new Set(dashboardArray.map( (o) => o.endpoint)))];

        for (let endpoint of uniqueEndpoints) {

            let url = (endpoint.indexOf('limit=') < 0) ? endpoint  + '?gemeente=eq.' + segment + '&_date=gte.2018-11-01' : endpoint;

            promises.push(
                new Promise((resolve, reject) => {
                    d3.json<ResponseData>(url)
                        .then((data) => {
                            resolve(data)
                        });
                })
            )
        }

        Promise.all(promises).then((values) => {

            let haveData = values.filter( v => v.length > 0);

            if (haveData.length < 1) {

                // foutmelding invoegen
                // this.dashBoardInfo = new DashboardInfo();
                // this.dashBoardInfo.update(dashboardArray[0].mapping[0]);
                document.getElementsByTagName('main')[0].innerHTML = 'Een van de parameters in de url is onbekend';
                return;
            }

            let { weeks, munis } = this.mergeArrayObjects(haveData);

            if (update) {

                this.updateList(segment);
                //  highlight path in map
                if (window.innerWidth > breakpoints.sm ) {
                    this.dashBoardMap.highlight(segment);
                }
            }

            for (let graphObject of dashboardArray ) {

                let element = document.createElement('article');

                if (graphObject.config.extra.largeHeader) {

                    let header = document.createElement('h2');
                    header.innerText = graphObject.label;
                    header.style.fontFamily = 'Replica';
                    header.style.fontSize = '2.4rem';
                    header.style.fontWeight = '500';
                    header.style.width = '100%';
                    header.style.margin = '3rem 0 1rem 0';

                    this.htmlContainer.appendChild(header);
                }

                if(graphObject.elementClasslist) {

                    for (let className of graphObject.elementClasslist) {
                        element.classList.add(className);
                    }
                }

                this.htmlContainer.appendChild(element);

                let data = graphObject.segment ? weeks : munis;


                if (update) {

                    this.graphMethods[graphObject.slug].update(data,segment);

                } else {

                    element.innerHTML = '';
                    this.graphMethods[graphObject.slug] = new graphs[graphObject.config.graphType](data, element, graphObject.config, graphObject.mapping[0],graphObject.description, segment);
                    this.graphMethods[graphObject.slug].init();
                }
            }

        });
    }

    getParams(url) {
        let params = {};
        const parser = document.createElement('a');
        parser.href = url;
        const query = parser.search.substring(1);
        const vars = query.split('&');
        for (let i = 0; i < vars.length; i++) {
            const pair = vars[i].split('=');
            params[pair[0]] = decodeURIComponent(pair[1]);
        }
        return params;
    };
}

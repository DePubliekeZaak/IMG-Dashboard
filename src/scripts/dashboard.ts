import { graphs } from './charts/module';
import { munis } from './helpers/municipalities';
import * as d3 from 'd3';
import {GraphObject} from "./types/graphObject";
import {ResponseData} from "./types/responseData";
import {DashboardMap} from "./dashboard/dashboard_map";
import {dashboardMain, dashboardMeldingen, dashboardVergoedingen, dashboardVoortgang, dashboardSpecials } from "./chart-configs/module";
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

        this.htmlContainer = document.querySelector("[data-img-graph-preset='dashboard']");
        this.htmlContainer.parentNode.classList.add('container');
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

        let dashboardArray = this.matchConfig(params.topic);

        let aside = this.createSideBar();
        this.htmlContainer.classList.add('has_sidebar');

        // if (!params.topic) {

        this.createList(segment);

        if (window.innerWidth > breakpoints.md ) {
            this.dashBoardMap = new DashboardMap(munis);
            this.dashBoardMap.update(false, "orange")
        }
        // }

        this.createPopupElement();
        aside.insertBefore(this.createMenu(),aside.childNodes[0]);
        this.makeDashboardCall(dashboardArray, segment,false);
    }

    createSideBar() {

            let aside = document.createElement('aside');
            aside.classList.add('selectors');

            let mapContainer = document.createElement('div');
            mapContainer.id = "img-graph-dashboard-map";
            aside.appendChild(mapContainer);

            this.htmlContainer.appendChild(aside);

            return aside;
    }

    createMenu() {

        let div = document.createElement('div');

        let header = document.createElement('h3');

        header.style.fontSize = '1rem';
        header.style.lineHeight = '1.5';
        header.style.fontWeight = '700';
        // header.style.fontFamily = 'Noto Sans';

        header.innerText = "Meer grafieken";

        div.appendChild(header);

        let c = [
            {
                topic: 'meldingen',
                label: 'Meldingen en opnames'
            },
            {
                topic: 'voortgang',
                label: 'Voortgang'
            },
            {
                topic: 'vergoedingen',
                label: 'Vergoedingen'
            },
            {
                topic: 'specials',
                label: 'Specials'
            }
        ]

        let ul = document.createElement('ul');
        ul.classList.add('dashboard_nav');

        let li = document.createElement('li');
        li.innerText = 'Actueel';
        li.style.padding = '.125rem 0';
        li.style.lineHeight = '1.5';
        li.style.cursor = 'pointer';
        li.classList.add('active');
        li.setAttribute('data-slug', '');
        li.onclick = () =>  this.switchTopic('','all');
        ul.appendChild(li);

        for (let i of c) {

            let li = document.createElement('li');
            li.innerText = i.label;
            li.style.padding = '.125rem 0';
            li.style.lineHeight = '1.5';
            li.style.cursor = 'pointer';
            li.setAttribute('data-slug', i.topic);
            li.onclick = () =>  this.switchTopic(i.topic,'all');
            ul.appendChild(li);
        }

        div.appendChild(ul);

        return div;
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
            li.style.padding = '.125rem 0';
            li.style.lineHeight = '1.5';
            li.style.cursor = 'pointer';

            if (muni.value === segment) {
                li.classList.add('active');
            }

            ul.appendChild(li);
        }

        container.appendChild(ul);
    }

    updateMenuList(topic) {

        for (let option of [].slice.call(document.querySelectorAll('aside.selectors ul.dashboard_nav li'))) {

            if (option.classList.contains('active')) { option.classList.remove('active') }
            if (option.getAttribute('data-slug') === topic) { option.classList.add('active');}
        }
    }

    updateMuniList(segment) {

        for (let option of [].slice.call(document.querySelectorAll('aside.selectors ul.municipalities li'))) {

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

    switchTopic(topic,segment) {


        let newConfig = this.matchConfig(topic);

        let graphEls = [].slice.call(document.querySelectorAll('.img-graph-container, h2'));

        for (let el of graphEls) {
            el.parentNode.removeChild(el);
        }

        this.makeDashboardCall(newConfig, segment,false);

        this.updateMenuList(topic);

        if(!topic || topic === undefined || topic === '') {
            let menuList : any = document.querySelector('ul.municipalities');
            menuList.style.display = 'block';
            let map : any = document.getElementById('img-graph-dashboard-map');
            map.style.display = 'block';
        } else {
            let menuList : any = document.querySelector('ul.municipalities');
            menuList.style.display = 'none';
            let map : any = document.getElementById('img-graph-dashboard-map');
            map.style.display = 'none';
        }

        if (history.pushState) {
            const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?topic=' + topic;
            window.history.pushState({path:newurl},'',newurl);
        }
    }

    matchConfig(topic) {

        switch (topic) {

            case 'meldingen' :

                return dashboardMeldingen;

            case 'voortgang' :

                return dashboardVoortgang;

            case 'vergoedingen' :

                return dashboardVergoedingen;

            case 'specials' :

                return dashboardSpecials;

            default :

                return dashboardMain;
        }
    }

    makeDashboardCall(dashboardArray, segment, update) {

        console.log(dashboardArray);

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
                        })
                        .catch( (err)=> {
                            console.log('api call failed');
                            console.log(err);
                        })
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

                this.updateMuniList(segment);
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
                    header.style.fontSize = '1.8rem';
                    header.style.fontWeight = '500';
                    header.style.width = '100%';
                    header.style.margin = '0'; // '3rem 0 1rem 0';

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

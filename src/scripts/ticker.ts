import { graphs } from './charts/module';
import { munis } from './helpers/municipalities';
import * as d3 from 'd3';
import {GraphObject} from "./types/graphObject";
import {ResponseData} from "./types/responseData";
import { ticker } from "./chart-configs/module";
import { breakpoints} from "./_styleguide/_breakpoints";

export class InitTicker {

    graphObjectArray : GraphObject[]  = [];
    graphMethods = {};
    htmlContainer;

    constructor(){
    }

    init() {

        let segment = 'all';
        let array = ticker;
        this.htmlContainer = document.querySelector("[data-img-graph-preset='ticker']");
        this.htmlContainer.classList.add('container');
        this.htmlContainer.style.flexDirection = 'column';

        if (window.innerWidth < breakpoints.sm) {

            this.htmlContainer.style.marginBottom = '2rem';
        }

        // const firstColumn = document.createElement('div');
        // firstColumn.classList.add('column');
        // firstColumn.classList.add('is-2');
        // firstColumn.innerText = 'Vorige week in cijfers';
        // this.htmlContainer.appendChild(firstColumn);

        this.makeTickerCall(array, segment,false);


        // overrule min-height on parent el

        this.htmlContainer.parentNode.style.minHeight = '0';


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

    makeTickerCall(dashboardArray, segment, update) {

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

                document.getElementsByTagName('main')[0].innerHTML = 'Een van de parameters in de url is onbekend';
                return;
            }

            let { weeks, munis } = this.mergeArrayObjects(haveData);

            const row = document.createElement('div');
            row.classList.add('columns');
            row.style.position = 'relative';



            if(window.innerWidth < breakpoints.sm) {

                row.style.display = 'flex';
                row.style.flexDirection = 'column';
                row.style.justifyContent = 'space-between';
                row.style.flexWrap = 'wrap';
                row.style.height = '36rem';

            } else if (window.innerWidth < breakpoints.md) {

                row.style.display = 'flex';
                row.style.flexDirection = 'row';
                row.style.flexWrap = 'wrap';
            }

            this.htmlContainer.appendChild(row);

            for (let graphObject of dashboardArray ) {

                let element = document.createElement('div');

                for (let className of graphObject.elementClasslist) {
                    element.classList.add(className);
                }

                row.appendChild(element);

                let data = graphObject.segment ? weeks : munis;

                element.innerHTML = '';
                this.graphMethods[graphObject.slug] = new graphs[graphObject.config.graphType](data, element, graphObject.config, graphObject.mapping[0],graphObject.description, segment);
                this.graphMethods[graphObject.slug].init();

            }

            const link = document.createElement('a');
            link.href = '/dashboard';
            link.innerHTML = `<span style="padding-right:.5rem;line-height: 1.25;">Meer cijfers en grafieken</span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30"><path d="M20.4 7H1v15.9h19.4l9.6-8L20.4 7z" fill="#000"></path></svg>`;
            link.style.justifyContent = 'flex-end';
            link.style.color = 'black';
            link.style.textDecoration = 'none';
            link.style.display = 'flex';
            link.style.flexDirection = 'row';
            link.style.padding = '2rem 0 0 0';



            this.htmlContainer.appendChild(link);


        });
    }
}

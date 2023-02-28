import { graphs } from '../charts/module';
import * as d3 from 'd3';
import {ResponseData} from "../types/data";
import { tickerFysiekeSchade, tickerWaardedaling, tickerTevredenheid, tickerImmaterieel } from "../chart-configs/module";
import { breakpoints} from "../_styleguide/_breakpoints";
import { IGraphMapping } from '../types/mapping';

export class InitTicker {

    graphObjectArray : IGraphMapping[]  = [];
    graphMethods = {};
    htmlContainer;

    constructor(){
    }

    init() {
        this.styleMainElement();

        this.row(tickerFysiekeSchade,'Fysieke schade',4,'full-width')
        this.row(tickerWaardedaling,'Waardedaling',2,'img-graph-container-ipad-6');
        this.row(tickerImmaterieel,'Immateriele schade',2,'img-graph-container-ipad-6');
        this.addLink();
    }

    styleMainElement() {

        this.htmlContainer = document.querySelector("[data-img-graph-preset='ticker']");
        this.htmlContainer.classList.add('container');
        this.htmlContainer.style.display = 'flex';
        this.htmlContainer.style.flexDirection = 'row';
        this.htmlContainer.style.flexWrap = 'wrap';
        this.htmlContainer.style.justifyContent = 'space-between';

        if (window.innerWidth < breakpoints.sm) {
            this.htmlContainer.style.marginBottom = '2rem';
        }
        // overrule min-height on parent el
        this.htmlContainer.parentNode.style.minHeight = '0';
    }

    row(graphObjectArray: IGraphMapping[], rowName: string, count: number, className: string) {

        let row = this.rowContainer(rowName,count,className);

        let promises = this._createPromises(graphObjectArray,'all');

        Promise.all(promises).then((values) => {

            let haveData = values.filter( v => v.length > 0);

            if (haveData.length < 1) {
                document.getElementsByTagName('main')[0].innerHTML = 'Een van de parameters in de url is onbekend';
                return;
            }

            let { weeks, munis } = this._mergeArrayObjects(haveData);

            for (let graphObject of graphObjectArray) {

                let element = document.createElement('div');

                element.classList.add('img-graph-container');
                element.classList.add('column');
                element.style.padding = '0';
                row.querySelector('.columns').appendChild(element);

                let data = graphObject.segment ? weeks : munis;

                element.innerHTML = '';

                let graphClass = new graphs[graphObject.graph](this, data, element, graphObject, 'all');
                graphClass.init();
            }
        });
    }

    addHeader(name,count,className) {

        let headerDiv = document.createElement('div');
        let header = document.createElement('h2');
        header.style.fontWeight = '700';
        header.style.lineHeight = '2';
        headerDiv.style.borderBottom = '1px solid #000';
        headerDiv.style.marginTop = (count > 0) ?  '1.5rem' : '1.5rem';
        headerDiv.style.marginBottom = '1rem';
        header.innerText = name;
        headerDiv.appendChild(header);
        return headerDiv;
    }

    addLink() {

        const link = document.createElement('a');
        link.href = '/dashboard';
        link.innerHTML = `<span style="padding-right:.5rem;line-height: 1.25;">Meer cijfers en grafieken</span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30"><path d="M20.4 7H1v15.9h19.4l9.6-8L20.4 7z" fill="#000"></path></svg>`;
        link.style.justifyContent = 'flex-end';
        link.style.alignSelf = 'flex-end';
        link.style.color = 'black';
        link.style.textDecoration = 'none';
        link.style.display = 'flex';
        link.style.flexDirection = 'row';
        link.style.padding = '2rem 0 0 0';

        this.htmlContainer.appendChild(link);
    }

    rowContainer(rowName: string, count: number ,className: string) {

        const row = document.createElement('div');
        row.classList.add('img-graph-ticker-block');
        row.classList.add(className);
        row.style.position = 'relative';
        row.style.fontSize = '.875rem';

        const columns = document.createElement('div');
        columns.classList.add('columns');
        columns.style.position = 'relative';
        columns.style.minHeight = '9rem';
        columns.style.margin = '0';

        if(window.innerWidth < breakpoints.sm) {

            columns.style.display = 'flex';
            columns.style.flexDirection = 'column';
            columns.style.justifyContent = 'flex-start';
            columns.style.flexWrap = 'nowrap';

        } else if (window.innerWidth < breakpoints.md) {

            columns.style.display = 'flex';
            columns.style.flexDirection = 'row';
            columns.style.flexWrap = 'wrap';

        }  

        row.append(this.addHeader(rowName,'1',''))
        row.appendChild(columns);
        this.htmlContainer.appendChild(row);

        return row;
    }

    _mergeArrayObjects(arrays){

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

    _createPromises(configArray,segment) {

        let promises = [];
        let uniqueEndpoints : any = [... Array.from(new Set(configArray.map( (o) => o.endpoint)))];

        for (let endpoint of uniqueEndpoints) {

            let url = (endpoint.indexOf('limit=') < 0) ? process.env.DOMAIN + process.env.API_BASE + endpoint  + '?gemeente=eq.' + segment + '&_date=gte.2018-11-01' : process.env.DOMAIN + process.env.API_BASE +  endpoint;

            promises.push(
                new Promise((resolve, reject) => {
                    d3.json<ResponseData>(url)
                        .then((data) => {
                            resolve(data)
                        });
                })
            )
        }

        return promises;
    }
}

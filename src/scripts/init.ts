import { graphs } from './charts/module';
import { munis } from './helpers/municipalities';
import * as d3 from 'd3';
import {GraphObject} from "./types/graphObject";
import {ResponseData} from "./types/responseData";
import {DashboardMap} from "./dashboard/dashboard_map";
import {DashboardInfo} from "./dashboard/dashboard_info";
import {configs, dashboardArray } from "./chart-configs/module";

export class InitGraph {

    graphObjectArray : GraphObject[]  = [];
    graphMethods = {};
    dashBoardMap;
    dashBoardInfo;
    className : string = "img-custom-graph";

    constructor(
        // private graphSlug : string,
        // private className : string,
        // private publishDate: string,

    ){
        (document.getElementsByTagName('main')[0].id === 'dashboard') ? this.dashboard() : this.single();
    }

    single() {

        let self = this;

        let elements = document.getElementsByClassName(this.className);

        for (let el of elements) {

            this.graphObjectArray.push(configs.find( c => c.slug === el.getAttribute("data-img-graph-preset")));
        }

        this.htmlContainers();

        this.makeSingleCall('all',false);
    }

    dashboard() {

       this.graphObjectArray = dashboardArray;
       this.makeDashboardCall('all',false);
    }



    htmlContainers() {

        document.getElementsByClassName(this.className)[0].innerHTML = '';

        for (var i = 0; i < this.graphObjectArray.length; i++) {

            for (let graph of this.graphObjectArray[i].mapping) {
                let container = document.createElement('div');
                container.classList.add('img_graph_container');
                container.style.flex = '1';
                document.querySelector('.' + this.className + ':nth-of-type(' + (i + 1) + ')').appendChild(container);
            }
        }
    }

    createDropdown(containerElement) {

        // let container = document.getElementsByClassName(this.className)[0];
        let dropdown = document.createElement('select');
        dropdown.classList.add('municipality_select');

        for ( let muni of munis) {

            let option = document.createElement('option');
            option.label = muni.label;
            option.value = muni.value;
            dropdown.appendChild(option);
        }

        containerElement.appendChild(dropdown);
    }

    createList(segment) {


        let container = document.querySelector('aside.selectors');

        let ul = document.createElement('ul');
        ul.classList.add('municipalities');

        for ( let muni of munis) {

            let li = document.createElement('li');
            li.innerText = muni.label;
            li.setAttribute('data-slug', muni.value);
            li.onclick = () => this.makeSingleCall(muni.value,true);
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

    makeSingleCall(segment,update) {

        let self = this;

        let uniqueEndpoints = [... Array.from(new Set(this.graphObjectArray.map( (o) => o.endpoint)))];

        for (let endpoint of uniqueEndpoints) {

            const graphObjectArray = this.graphObjectArray.filter( o => o.endpoint === endpoint);

            let url = (endpoint === '/api/gemeenten') ? 'https://tcmg-hub.publikaan.nl/api/gemeenten' : 'https://tcmg-hub.publikaan.nl' + (endpoint || '/api/data') + '?gemeente=' + segment;

            d3.json<ResponseData>(url)
                .then((data) => {

                    for (let graphObject of graphObjectArray) {

                        let containerElement = document.querySelector('.' + this.className + '[data-img-graph-preset="' + graphObject.slug + '"]');

                        for (var j = 0; j < Object.values(graphObject.mapping).length; j++) {

                            console.log('3');

                            let map = {};
                            map[Object.entries(graphObject.mapping)[j][0]] = Object.entries(graphObject.mapping)[j][1];

                            // dit of met data
                            let element = containerElement.querySelector('.img_graph_container:nth-of-type(' + (j + 1) + ')');

                            if (update && endpoint === '/api/data') {

                                this.graphMethods[j].update(data);

                            } else if(!update) {

                                element.innerHTML = '';
                                this.graphMethods[j] = new graphs[graphObject.config.graphType](data, element, graphObject.config, Object.values(map)[0], 'all');
                                this.graphMethods[j].init();
                            }
                        }

                        if (graphObject.config.extra && graphObject.config.extra.muniSelect) {

                            this.createDropdown(containerElement);
                            const municipalitySelect = document.querySelector('.municipality_select') as HTMLSelectElement;

                            municipalitySelect.addEventListener("change", function () {
                                self.makeSingleCall(municipalitySelect.options[municipalitySelect.selectedIndex].value, true);
                            });
                        }
                    }
                })
                .catch((error) => {
                    console.log(error);
                });

            }
    }

    makeDashboardCall(segment,update) {


        let url = 'https://tcmg-hub.publikaan.nl' + (this.graphObjectArray[0].endpoint || '/api/data') + '?gemeente=' + segment;

        d3.json<ResponseData>(url)
            .then((data) => {

            if (!update) {

                this.createList(segment);
                this.dashBoardMap = new DashboardMap();
                this.dashBoardInfo = new DashboardInfo();
                this.dashBoardInfo.update(this.graphObjectArray[0].mapping[0]);
            } else {

                this.updateList(segment);
            }

            for (let graphObject of this.graphObjectArray ) {

                let element = document.querySelector('[data-graph-slug=' + graphObject.slug + ']');

                if (update) {

                    this.graphMethods[graphObject.slug].update(data);

                } else {

                    element.innerHTML = '';
                    this.graphMethods[graphObject.slug] = new graphs[graphObject.config.graphType](data, element, graphObject.config, graphObject.mapping[0], 'all');
                    this.graphMethods[graphObject.slug].init();

                    element.addEventListener('mouseenter', e => {

                        this.dashBoardMap.update(graphObject.mapping[0][2].column, graphObject.mapping[0][2].colour)
                        this.dashBoardInfo.update(graphObject.mapping[0]);

                    }, false)
                }
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }
}

new InitGraph();
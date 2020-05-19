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

    constructor(
        private graphSlug : string,
        private className : string,
        private publishDate: string,

    ){
        (this.graphSlug === 'dashboard') ? this.dashboard() : this.single();
    }

    single() {

        let self = this;

        this.graphObjectArray = [configs.find( c => c.slug === this.graphSlug)];

        // straks objects mergen want className
        //  this.graphObjectArray.push(Object.assign(config,dashboardArray.find( c => c.slug === config.slug)));

        this.htmlContainers();

        if (document.querySelector('main').classList.contains('has-muni-select')) {

            this.createDropdown();
            const municipalitySelect = document.querySelector('.municipality_select') as HTMLSelectElement;

            municipalitySelect.addEventListener("change", function () {
                self.makeCall(municipalitySelect.options[municipalitySelect.selectedIndex].value, true);
            });
        }

        this.makeCall('all',false);
    }

    dashboard() {

       this.graphObjectArray = dashboardArray;
       this.makeCall('all',false);
    }



    htmlContainers() {

        document.getElementsByClassName(this.className)[0].innerHTML = '';

        for (let graphObject of this.graphObjectArray) {

            for (let graph of graphObject.mapping) {
                let container = document.createElement('div');
                container.classList.add('graph_container');
                document.querySelector('.graph_row').appendChild(container);
            }
        }
    }

    createDropdown() {

        let container = document.getElementsByClassName(this.className)[0];
        let dropdown = document.createElement('select');
        dropdown.classList.add('municipality_select');

        for ( let muni of munis) {

            let option = document.createElement('option');
            option.label = muni.label;
            option.value = muni.value;
            dropdown.appendChild(option);
        }

        container.appendChild(dropdown);
    }

    createList() {

        let container = document.querySelector('aside.selectors');

        let ul = document.createElement('ul');
        ul.classList.add('municipalities');

        for ( let muni of munis) {

            let li = document.createElement('li');
            li.innerText = muni.label;
            li.onclick = () => this.makeCall(muni.value,true);
            li.style.padding = '.125rem .25rem';
            li.style.cursor = 'pointer';
            ul.appendChild(li);
        }

        container.appendChild(ul);
    }

    makeCall(segment,update) {

        let url = 'https://tcmg-hub.publikaan.nl' + (this.graphObjectArray[0].endpoint || '/api/data') + '?gemeente=' + segment;

        d3.json<ResponseData>(url)
            .then((data) => {

                switch (this.graphSlug) {

                    case 'dashboard' :

                        if (!update) {
                            this.createList();
                            this.dashBoardMap = new DashboardMap();
                            this.dashBoardInfo = new DashboardInfo();
                            this.dashBoardInfo.update(this.graphObjectArray[0].mapping[0]);

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

                        break;

                    default :

                        let graphObject = this.graphObjectArray[0];

                        for (var i = 0; i < Object.values(graphObject.mapping).length; i++) {

                            let map = {};
                            map[Object.entries(graphObject.mapping)[i][0]] = Object.entries(graphObject.mapping)[i][1];

                            // dit of met data
                            let element = document.querySelector('.graph_container:nth-of-type(' + (i + 1) + ')');

                            if (update) {

                                this.graphMethods[i].update(data);

                            } else {

                                element.innerHTML = '';
                                this.graphMethods[i] = new graphs[graphObject.config.graphType](data, element, graphObject.config, Object.values(map)[0], 'all');
                                this.graphMethods[i].init();
                            }
                        }
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

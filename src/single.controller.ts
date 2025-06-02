import { graphs } from './charts/module';
import { munis } from './d3-services/municipalities';
import * as d3 from 'd3';
import {GraphObject} from "./types/graphObject";
import {ResponseData} from "./types/data";
import { configs } from "./chart-configs/module";

export class InitSingle {

    elements;
    graphObjectArray : GraphObject[]  = [];
    graphMethods = {};
    className : string = "img-custom-graph";

    constructor(){
    }

    init() {

        let self = this;

        this.elements = [].slice.call(document.querySelectorAll("[data-img-graph-preset]"));

        for (let el of this.elements) {

            el.innerHTML = '';
            this.graphObjectArray.push(configs.find( c => c.slug === el.getAttribute("data-img-graph-preset")));
        }

        this.htmlContainers();
        this.makeSingleCall('all',false);
    }

    htmlContainers() {

        for (let i = 0; i < this.graphObjectArray.length; i++) {

            for (let graph of this.graphObjectArray[i].mapping) {
                this.elements[i].parentNode.classList.add('container');
                this.elements[i].classList.add('columns');
                let container = document.createElement('div');
                container.classList.add('img_graph_container');
                container.classList.add('column');

                if(this.graphObjectArray[i].elementClasslist) {

                    for (let className of this.graphObjectArray[i].elementClasslist) {
                        container.classList.add(className);
                    }

                }

                // container.style.flex = '1';
                container.style.height = '400px';
                this.elements[i].appendChild(container);

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

    makeSingleCall(segment,update) {


        let self = this;

        let uniqueEndpoints = [... Array.from(new Set(this.graphObjectArray.map( (o) => o.endpoint)))];

        for (let endpoint of uniqueEndpoints) {

            // console.log(endpoint);

            const graphObjectArray = this.graphObjectArray.filter( o => o.endpoint === endpoint);

            let url = (endpoint === '/api/gemeenten') ? 'https://tcmg-hub.publikaan.nl/api/gemeenten' : (endpoint || '/api/data') + '?gemeente=eq.' + segment;

            d3.json<ResponseData>(url)
                .then((data) => {

                    for (let graphObject of graphObjectArray) {

                        let containerElement = document.querySelector('[data-img-graph-preset="' + graphObject.slug + '"]');

                        for (var j = 0; j < Object.values(graphObject.mapping).length; j++) {

                            let map = {};
                            map[Object.entries(graphObject.mapping)[j][0]] = Object.entries(graphObject.mapping)[j][1];

                            // dit of met data
                            let element = containerElement.querySelector('.img_graph_container:nth-of-type(' + (j + 1) + ')');

                            if (update && endpoint === '/api/data') {

                                this.graphMethods[j].update(data);

                            } else if(!update) {

                                element.innerHTML = '';
                                this.graphMethods[j] = new graphs[graphObject.config.graphType](data, element, graphObject.config, Object.values(map)[0], graphObject.description, 'all');
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
}

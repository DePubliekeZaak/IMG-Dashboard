import { graphs } from './charts/module';
import { munis } from './helpers/municipalities';
import * as d3 from 'd3';


export class imgGraph {

    graphMethods = {};


    constructor(
        private graphObject
    ){
        this.init();
    }

    init() {

        let self = this;

        this.createDropdown();
        this.makeCall(this.graphObject.segment,false);

        const municipalitySelect = document.querySelector('.municipality_select') as HTMLSelectElement;

        municipalitySelect.addEventListener("change", function () {
            self.makeCall(municipalitySelect.options[municipalitySelect.selectedIndex].value,true);
        });
    }

    createDropdown() {

        let container = document.querySelector('.graph_container').parentNode;
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

    makeCall(segment,update) {

        let url = 'https://tcmg-hub.publikaan.nl' + this.graphObject.endpoint + '?gemeente=' + segment;

        interface ResponseData {
            features: any[];
        }

        d3.json<ResponseData>(url)
            .then((data) => {

                for (var i = 0; i < Object.values(this.graphObject.mapping).length; i++) {

                    let map = {};
                    map[Object.entries(this.graphObject.mapping)[i][0]] = Object.entries(this.graphObject.mapping)[i][1];

                    let element = document.querySelector('.graph_container:nth-of-type(' + (i + 1) + ')');

                    if (update) {

                        this.graphMethods[i].update(data);

                    } else {

                        element.innerHTML = '';
                        this.graphMethods[i] = new graphs[this.graphObject.config.graphType](data, element, this.graphObject.config, Object.values(map)[0], 'all');

                        this.graphMethods[i].init();
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

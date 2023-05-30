import { IGraphMapping, GraphData } from "@local/d3_types";
import { HtmlMuniSelector } from "../html-elements/module"
import { ChartMap } from "../svg-elements/module";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import { slugify } from "../d3-services/_helpers";
import { GraphControllerV2 } from "@local/d3_graphs";

export default class MuniSelector extends GraphControllerV2 {

    map;
    topojsonObject;

    constructor(
        public main: any,
        public data : any,
        public element : HTMLElement,
        public mapping: IGraphMapping,
        public segment: string  
    ) {
        super(main,data,element,mapping,segment);
        this.pre();
    }

    pre() {

        this._addMargin(0,0,0,0);
        this._addPadding(0,0,0,0);
    }

    init() {

        let self = this;

        super._init();

        const orig_el = this.element;

        let map_container = document.createElement('div');
        map_container.style.height = '240px';
        map_container.style.width = '240px';
        map_container.style.position = 'absolute';
        map_container.style.left = '-50px';
        map_container.style.top = '70px';
        this.element.appendChild(map_container)
        super._svg(map_container);

        this.map = new ChartMap(this);

        let dropdown_container = document.createElement('div');
        dropdown_container.style.position = "relative";
        dropdown_container.style.marginTop = "160px";
        const muniSelector = new HtmlMuniSelector(dropdown_container,'gemeente_pagina');
        muniSelector.draw(this.segment) 
        orig_el.appendChild(dropdown_container);

        const municipalitySelect = document.querySelector('.municipality_select_' + 'gemeente_pagina' ) as HTMLSelectElement;
        municipalitySelect.addEventListener("change",  () => {
            const new_muni = municipalitySelect.options[municipalitySelect.selectedIndex].value;
            window.location.href = window.location.origin + window.location.pathname + '?topic=gemeente&gemeente=' + new_muni
        });

        d3.json('./geojson/gemeenten2021.topojson').then( (topojsonObject) => {
            self.topojsonObject = topojsonObject; 
            this.update(this.data,this.segment, false);
     });
    }

    prepareData(data) {

        let geojson: any = topojson.feature(this.topojsonObject, this.topojsonObject.objects.gemeenten);
        let features = geojson.features;

        for (let feature of features) {

            let muni = data.filter( (m) => {
                return m.gemeente === slugify(feature.properties.gemeentenaam).toLowerCase();
            })[0];
        }

        return features;
    }

    draw(data: GraphData) {

        this.map.draw(data);
    }

    redraw(data: GraphData) {

        super.redraw(data);

        this.map.redraw(false,'orange');
        this.map.highlight(this.segment)
    }

    update(data: GraphData, segment: string, update: boolean) {
        super._update(data,segment,update);
    }
}
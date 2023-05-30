import * as d3 from "d3";

import * as topojson from "topojson-client";

import { ChartMap, MapLegend } from "../svg-elements/module";
import { slugify } from "../utils/slugify.utils";
import { DataPart, GraphData } from "../d3-modules/_d3_types";
import { GraphControllerV2 } from "@local/d3_graphs";
import { IGraphMapping } from "../d3-modules/_d3_types";
import { flattenColumn } from "../d3-services/_helpers";


export default class Map extends GraphControllerV2 {

    topojsonObject

    scale;
    xScale: any;
    chartScale; 
    features;
    chartMap;
    legend;

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
        this._addScale('y','linear','opacity', flattenColumn(this.firstMapping['column']));
        this._addMargin(0,0,0,0);
        this._addPadding(20,40,40,0);
    }

    init() {

        this.config.margin.right = 25;
        super._init();

        const svgId = "svg-wrapper-" + this.mapping.slug
        const container = document.createElement('section');
        container.style.display = 'flex';
        container.style.flexDirection = 'row';
        container.style.justifyContent = 'center';
        container.style.alignItems = 'center';
        container.style.width = "100%";
        container.style.maxWidth = "400px"
        container.style.height = "320px";
        container.style.marginTop = "-5%";
        container.id = svgId;
        this.element.appendChild(container);

        super._svg(container);
     
        this.chartMap = new ChartMap(this);
        this.chartMap.init();

        this.legend = new MapLegend(this);

        const domain = 'https://graphs.publikaan.nl';

        // get geodata.js
        d3.json(domain + '/geojson/gemeenten2021.topojson').then( (topojsonObject) => {
            this.topojsonObject = topojsonObject;
            this.update(this.data,this.segment,false);
        });
    }

    prepareData(data: DataPart[]) : GraphData  {

        let geojson: any = topojson.feature(this.topojsonObject, this.topojsonObject.objects.gemeenten);
        let features = geojson.features;

        for (let feature of features) {

            let muni = data.filter( (m) => {
                return m.gemeente === slugify(feature.properties.gemeentenaam).toLowerCase();
            })[0];

            if(muni && Object.entries(muni).length > 0) {
                for (let prop of Object.entries(muni)) {
                    feature.properties[prop[0]] = prop[1];
                }
            }

            feature.properties.colour = this.firstMapping['colour'];
        }

        return {
            latest: null,
            slice: null,
            history: null,
            features
        }
    }

    draw(data: GraphData) {

        this.chartMap.draw(data.features);    //   if (window.innerWidth < breakpoints.sm) {
        this.element.appendChild(this.legend.draw(data));
    }

    redraw(data: GraphData) {

        this.scales.y.set(data.features.map( f => (f['properties'][this.parameters.y] !== undefined) ? f['properties'][this.parameters.y] : 0));
        super.redraw(data);
        this.chartMap.redraw(this.parameters.y,this.mapping.parameters[0][0]['colour']);
    }

    update(data: GraphData, segment: string, update: boolean) {

        super._update(data,segment,update);
    }
}




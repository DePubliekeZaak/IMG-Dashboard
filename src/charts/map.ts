import * as d3 from "d3";
import { GraphController } from "./graph";
import * as topojson from "topojson-client";

import { ChartObjects, ChartSVG, ChartDimensions, ChartScale } from "../chart-basics/module";
import { ChartMap, MapLegend } from "../svg-elements/module";
import { HtmlHeader, HtmlPopup } from "../html-elements/module";

import { slugify } from "../utils/slugify.utils";
import { breakpoints } from "../_styleguide/_breakpoints";

import { GraphObject } from "../types/graphObject";
import { DataPart, GraphData } from "../types/data";


export default class Map extends GraphController {

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
        public graphObject: GraphObject,
        public segment: string  
    ) {
        super(main,data,element,graphObject,segment);
    }

    init() {

        // if (window.innerWidth < breakpoints.sm) {
            this.graphObject.config.margin.right = 25;
        // }

        super._init();

        const svgId = "svg-wrapper-" + this.graphObject.slug
        const container = document.createElement('section');
        container.style.height = "320px";
        container.style.marginTop = "-5%";
        container.id = svgId;
        this.element.appendChild(container);

        super._svg(container);
     
        this.chartScale = new ChartScale("linear", this.graphObject.config, this.dimensions)

        this.chartMap = new ChartMap(this);
        this.chartMap.init();

        this.legend = new MapLegend(this);

        // get geodata.js
        d3.json('https://graphs.publikaan.nl/graphs/geojson/gemeenten2021.topojson').then( (topojsonObject) => {
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

            feature.properties.colour = this.graphObject.mapping[0][0].colour;
        }

        return {
            latest: null,
            slice: null,
            history: null,
            features
        }
    }

    draw(data: GraphData) {

        this.chartMap.draw(data.features);
    //   if (window.innerWidth < breakpoints.sm) {
        this.element.appendChild(this.legend.draw(data));
        //   }
    }

    redraw(data: GraphData) {

        super.redraw(data);

        // if (newProperty && newProperty != undefined) { this.property = newProperty };
        this.scale = this.chartScale.set(data.features.map( f => (f['properties'][this.yParameter] !== undefined) ? f['properties'][this.yParameter] : 0));
        this.scale = this.chartScale.reset('opacity',this.dimensions,this.scale);
     
        this.chartMap.redraw(this.yParameter,this.graphObject.mapping[0][0]['colour']);
    }

    update(data: GraphData, segment: string, update: boolean) {

        super._update(data,segment,update);

 
    }
}




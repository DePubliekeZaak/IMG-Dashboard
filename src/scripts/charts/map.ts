import * as d3 from "d3";
import * as topojson from "topojson-client";

import { ChartObjects, ChartSVG, ChartDimensions, ChartScale} from "../chart-basics/module";
import {ChartMap, HtmlHeader, HtmlPopup} from "../chart-elements/module";

import { geodata } from "../helpers/geodata.js";
import { slugify} from "../utils/slugify.utils";

export class Map {


    element;
    parameter;
    dimensions;
    svg;

    chartDimensions;
    chartSVG;
    chartScale;
    scale;

    features;
    chartMap;

    popup;
    htmlHeader;

    constructor(
        private data,
        private elementID,
        private config,
        private dataMapping,
        private description
    ) {
        this.element = d3.select(elementID).node();
        this.parameter = this.dataMapping[0]['column'];
    }



    init() {

        const container = document.createElement('section');
        this.element.appendChild(container);

        let self = this;
        let chartObjects = ChartObjects();
        this.config = Object.assign(chartObjects.config(),this.config);
        this.dimensions = new ChartDimensions(container,this.config);
        this.svg = chartObjects.svg();

        this.chartDimensions = new ChartDimensions(this.element,this.config);
        this.dimensions = this.chartDimensions.get(this.dimensions);
        this.chartSVG = new ChartSVG(container,this.config,this.dimensions,this.svg);
        this.chartScale = new ChartScale('linear',this.config,this.dimensions);

        this.chartSVG.redraw(this.dimensions);

        this.chartMap = new ChartMap(this.config,this.svg,this.dimensions);
        this.chartMap.init();
        this.update(this.data);


        if (this.config.extra.header) {
            this.htmlHeader = new HtmlHeader(this.element,this.config.extra.header);
            this.htmlHeader.draw();
        }

        this.popup = new HtmlPopup(this.element,this.description);

    }

    prepareData(data)  {

        let features = topojson.feature(geodata, geodata.objects.gemeenten).features;

        for (let feature of features) {

            let muni = data.filter( (m) => {
                return m.gemeente === slugify(feature.properties.gemeentenaam).toLowerCase();
            })[0];

            if(muni && Object.entries(muni).length > 0) {

                for (let prop of Object.entries(muni)) {

                    feature.properties[prop[0]] = prop[1];
                }
            }

            feature.properties.colour = this.dataMapping[0].colour;
        }

        return features;
    }

    draw(features) {

        this.chartMap.draw(features);
    }

    redraw(features) {

        // if (newProperty && newProperty != undefined) { this.property = newProperty };

        this.scale = this.chartScale.set(features.map( f => f.properties[this.parameter]));
        this.scale = this.chartScale.reset('opacity',this.dimensions,this.scale);
        // on redraw chart gets new dimensions
        this.dimensions = this.chartDimensions.get(this.dimensions);
        this.chartSVG.redraw(this.dimensions);
        // redraw data
        this.chartMap.redraw(this.dimensions,this.parameter,this.scale);
    }

    update(data) {

        let features = this.prepareData(data);
        this.draw(features);
        this.redraw(features);
    }
}




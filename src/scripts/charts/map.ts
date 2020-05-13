import * as d3 from "d3";
import * as topojson from "topojson-client";

import { ChartObjects, ChartSVG, ChartDimensions, ChartScale} from "../chart-basics/module";
import { ChartMap } from "../chart-elements/module";

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

    constructor(
        private data,
        private elementID,
        private config,
        private dataMapping
    ) {
        this.element = d3.select(elementID).node();
        this.parameter = this.dataMapping[0]['column'];
    }



    init() {

        let self = this;
        let chartObjects = ChartObjects();
        this.config = Object.assign(chartObjects.config(),this.config);
        this.dimensions = new ChartDimensions(this.element,this.config);
        this.svg = chartObjects.svg();

        this.chartDimensions = new ChartDimensions(this.element,this.config);
        this.dimensions = this.chartDimensions.get(this.dimensions);
        this.chartSVG = new ChartSVG(this.element,this.config,this.dimensions,this.svg);
        this.chartScale = new ChartScale('linear',this.config,this.dimensions);

        this.chartSVG.redraw(this.dimensions);

        this.chartMap = new ChartMap(this.config,this.svg,this.dimensions);
        this.chartMap.init();
        this.update(this.data);

    }

    prepareData(json)  {

        let features = topojson.feature(json, json.objects.gemeenten).features;

        for (let feature of features) {

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

    update(geoData) {

        let features = this.prepareData(geoData);
        this.draw(features);
        this.redraw(features);
    }
}




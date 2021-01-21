import * as d3 from "d3";
import {ResponseData} from "../types/responseData";
import * as topojson from "topojson-client";

import { ChartObjects, ChartSVG, ChartDimensions, ChartScale} from "../chart-basics/module";
import { ChartMap } from "../chart-elements/module";
import {slugify} from "../utils/slugify.utils";


export class DashboardMap {


    chartMap;

    element;
    svg;
    dimensions;
    scale;

    chartDimensions;
    chartSVG;
    chartScale;

    features;

    config = {
        graphType: "Map",
        xScaleType : false,
        yScaleType : false,
        xParameter : false,
        yParameter : false,
        padding: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        },
        margin: {
            top: 0,
            bottom: 0,
            left: -30,
            right: -30
        },
        extra: {
            currencyLabels : false
        },
    };

    constructor(
        private data
    ) {
            this.init();
    }

    init() {

        let self = this;
        let chartObjects = ChartObjects();
        this.config = Object.assign(chartObjects.config(),this.config);

        this.element = d3.select('#img-graph-dashboard-map').node();
        this.element.style.width = '180px';
        this.element.style.height = '180px';
        this.dimensions = new ChartDimensions(this.element,this.config);
        // console.log(this.dimensions);
        this.svg = chartObjects.svg();

        this.chartDimensions = new ChartDimensions(this.element,this.config);
        this.dimensions = this.chartDimensions.get(this.dimensions);
        this.chartSVG = new ChartSVG(this.element,this.config,this.dimensions,this.svg);
        this.chartScale = new ChartScale('linear',this.config,this.dimensions);

        this.chartSVG.redraw(this.dimensions);

        this.chartMap = new ChartMap(this.config,this.svg,this.dimensions);
        this.chartMap.init();

        d3.json('/geojson/gemeenten2021.topojson').then( (topojsonObject) => {
            const features = this.prepareData(this.data, topojsonObject);
            self.draw(features);
        });
    }

    prepareData(data, topojsonObject)  {

        let geojson = topojson.feature(topojsonObject, topojsonObject.objects.gemeenten);
        let features = geojson.features;

        for (let feature of features) {

            let muni = data.filter( (m) => {
                return m.gemeente === slugify(feature.properties.gemeentenaam).toLowerCase();
            })[0];
        }

        return features;
    }

    draw(features) {

        this.chartMap.draw(features);
        this.update(false,'orange');
    }

    redraw(parameter,colour) {

        // if (newProperty && newProperty != undefined) { this.property = newProperty };
      //  this.scale = this.chartScale.set(this.features.map( f => f.properties[parameter]));
      //      this.scale = this.chartScale.reset('opacity',this.dimensions,this.scale);
        // on redraw chart gets new dimensions
        this.dimensions = this.chartDimensions.get(this.dimensions);
        this.chartSVG.redraw(this.dimensions);
        // redraw data
        this.chartMap.redraw(this.dimensions,parameter,this.scale,colour);
    }

    update(parameter,colour) {

        this.redraw(parameter,colour);
    }

    highlight(segment) {

        this.chartMap.highlight(segment)
    }
}

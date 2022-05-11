import * as d3 from "d3";
import * as topojson from "topojson-client";

import { ChartObjects, ChartSVG, ChartDimensions, ChartScale} from "../chart-basics/module";
import {ChartMap, HtmlHeader, HtmlPopup} from "../chart-elements/module";

import { slugify} from "../utils/slugify.utils";
import {breakpoints} from "../_styleguide/_breakpoints";
import {colours} from "../_styleguide/_colours";

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

        if (window.innerWidth < breakpoints.sm) {
            this.config.margin.right = 60;
        }

        this.dimensions = new ChartDimensions(container,this.config);
        this.svg = chartObjects.svg();

        this.chartDimensions = new ChartDimensions(this.element,this.config);
        this.dimensions = this.chartDimensions.get(this.dimensions);
        this.chartSVG = new ChartSVG(container,this.config,this.dimensions,this.svg);
        this.chartScale = new ChartScale('linear',this.config,this.dimensions);

        this.chartSVG.redraw(this.dimensions);

        this.chartMap = new ChartMap(this.config,this.svg,this.dimensions);
        this.chartMap.init();

        if (this.config.extra.header) {
            this.htmlHeader = new HtmlHeader(this.element,this.config.extra.header);
            this.htmlHeader.draw();
        }

        this.popup = new HtmlPopup(this.element,this.description);

        // get geodata.js
        d3.json('https://graphs.publikaan.nl/graphs/geojson/gemeenten2021.topojson').then( (topojsonObject) => {
            this.update(this.data, topojsonObject);
        });
    }

    prepareData(data, topojsonObject)  {


        let geojson: any = topojson.feature(topojsonObject, topojsonObject.objects.gemeenten);
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

            feature.properties.colour = this.dataMapping[0].colour;
        }


        return features;
    }

    legend(features) {

        let bar =  document.createElement('div');
        bar.style.display = 'flex';
        bar.style.flexDirection = 'column';
        bar.style.position ='relative';
        bar.style.height = '200px';
        bar.style.width = '1.5rem';
        bar.style.background = '#eee';
        bar.style.borderTop = '1px solid black';
        bar.style.borderBottom = '1px solid black';
        bar.style.marginTop = '1.5rem';

        let max = d3.max(features.map( f => f.properties[this.parameter]));
        let topSpan = document.createElement('span');
        topSpan.innerText = max;
        topSpan.style.fontSize = '0.7rem';
        topSpan.style.height = '0';
        topSpan.style.alignSelf ='flex-end';
        topSpan.style.marginRight = '1.75rem';
        topSpan.style.marginTop = '-.3rem';
        topSpan.style.marginBottom = '.3rem';
        bar.appendChild(topSpan);

        let bottomSpan = document.createElement('span');
        bottomSpan.innerText = '0';
        bottomSpan.style.fontSize = '0.7rem';
        bottomSpan.style.height = '0';
        bottomSpan.style.alignSelf ='flex-end';
        bottomSpan.style.marginRight = '1.75rem';
        bottomSpan.style.marginTop= '-.3rem';

        let inner =  document.createElement('div');
        inner.style.height = '100%';

      //  inner.style.background =

        let gradient = 'linear-gradient(0deg, ' + colours.lightBlue[3] + ' 0%,' + colours.lightBlue[0] + ' 100%)';
        inner.style.background = gradient + ' no-repeat';

        bar.appendChild(inner);
        bar.appendChild(bottomSpan);

        return bar;

    }

    draw(features) {

        this.chartMap.draw(features);
    }

    redraw(features) {

        // if (newProperty && newProperty != undefined) { this.property = newProperty };
        this.scale = this.chartScale.set(features.map( f => (f.properties[this.parameter] !== undefined) ? f.properties[this.parameter] : 0));
        this.scale = this.chartScale.reset('opacity',this.dimensions,this.scale);
        // on redraw chart gets new dimensions
        this.dimensions = this.chartDimensions.get(this.dimensions);
        this.chartSVG.redraw(this.dimensions);
        // redraw data
        this.chartMap.redraw(this.dimensions,this.parameter,this.scale);
    }

    update(data,geodata) {

        let features = this.prepareData(data, geodata);
        if (window.innerWidth < breakpoints.sm) {
            this.element.querySelector('section').appendChild(this.legend(features));
        }
        this.draw(features);
        this.redraw(features);
    }
}




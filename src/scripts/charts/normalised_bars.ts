import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxes } from '../chart-basics/module';

import { ChartStackedBarsNormalized, HtmlHeader, HtmlPopup  } from '../chart-elements/module';

import { slugify } from '../utils/slugify.utils';

import * as d3 from 'd3';
import {colours} from "../_styleguide/_colours";

export class NormalisedBars  {

    keys;
    element;
    dimensions;
    svg;

    chartDimensions;
    chartSVG;
    chartXScale;
    chartYScale;

    yScale;
    bScale;
    xScale;
    topAxis;
    bottomAxis;
    leftAxis;

    chartMultiBars;
    chartAxisGrid;
    chartStackedBarsNormalized;

    popup;
    htmlHeader;

    normalizedStack;
    stack;


    constructor(
        private data,
        private elementID,
        private config,
        private dataMapping,
        private description
    ) {
        this.element = d3.select(elementID).node();

    }

    init() {

        let self = this;

        let chartObjects = ChartObjects();

        this.config = Object.assign(chartObjects.config(), this.config);

        this.dimensions = chartObjects.dimensions();
        this.svg = chartObjects.svg();

        this.chartDimensions = new ChartDimensions(this.element,this.config);
        this.dimensions = this.chartDimensions.get(this.dimensions);

        this.chartSVG = new ChartSVG(this.element,this.config,this.dimensions,this.svg);

        this.chartXScale = new ChartScale(this.config.xScaleType,this.config,this.dimensions);
        this.chartYScale = new ChartScale(this.config.yScaleType,this.config,this.dimensions);

        this.topAxis = new ChartAxes(this.config, this.svg,'top',this.chartXScale);
        this.bottomAxis = new ChartAxes(this.config, this.svg,'bottom',this.chartXScale);

        this.topAxis.draw();
        this.bottomAxis.draw();

        this.chartStackedBarsNormalized = new ChartStackedBarsNormalized(this.config, this.svg.layers);

        if (this.config.extra.header) {
            this.htmlHeader = new HtmlHeader(this.element,this.config.extra.header);
            this.htmlHeader.draw();
        }

        this.popup = new HtmlPopup(this.element,this.description);



        this.update(this.data);
    }

    legend(data) {

        let colourRange = [

            'rgb(119,124,0)', // moss
            'rgb(143,202,231)', // lightBlue
            'rgb(1,104,155)', // blue
            'rgb(169,0,97)', // violet
            'rgb(66,20,95)', // purple
            'rgb(148,113,0)', //brown
            'rgb(225,112,0)', // orange

        ]

        let legend = document.createElement('div');
        legend.classList.add('legend');
        legend.style.display = 'flex';
        legend.style.flexDirection = 'row';
        legend.style.justifyContent = 'center';
        legend.style.width = '100%';

        let entries = Object.entries(data[0]);

        entries.slice(1,entries.length).forEach( (d,i) => {

            let item = document.createElement('div');
            item.style.display = 'flex';
            item.style.flexDirection = 'row';
            item.style.alignItems = 'center';
            item.style.marginRight = (window.innerWidth > 700) ? '2rem' : '.5rem';

            let circle = document.createElement('span');
            circle.style.width = (window.innerWidth > 700) ? '.75rem' : '.5rem';
            circle.style.height = (window.innerWidth > 700) ? '.75rem' : '.5rem';
            circle.style.borderRadius = '50%';
            circle.style.marginRight = (window.innerWidth > 700) ? '.5rem' : '.25rem';
            circle.style.display = 'inline-block';
             circle.style.background = colourRange[i];
            item.appendChild(circle);

            let label = document.createElement('span');
            label.style.fontFamily = "NotoSans Regular";
            label.style.fontSize = (window.innerWidth > 700) ? '.8rem' : '.71em';
            label.innerText = d[0];
            item.appendChild(label);

            legend.appendChild(item);

        });

        this.element.insertBefore(legend,this.element.querySelector('svg'))
        // this.element.appendChild(legend);
    }

    prepareData(newData) {


        let data = [];


        data.push({
            "serie": "Langer dan twee jaar",
            // colour: "orange",
            "Ontvangst": newData[0]['langer_dan_twee_jaar_in_fase_ontvangst'],
            "Planning opname": newData[0]['langer_dan_twee_jaar_in_fase_planning_opname'],
            "Opleveren schaderapport": newData[0]['langer_dan_twee_jaar_in_fase_opleveren_schaderapport'],
            "Voorbereiden commissie": newData[0]['langer_dan_twee_jaar_in_fase_voorbereiding_besluit']
        });

        data.push({
            "serie": "Tussen een en twee jaar",
            // colour: "moss",
            "Ontvangst": newData[0]['tussen_jaar_en_twee_jaar_in_fase_ontvangst'],
            "Planning opname": newData[0]['tussen_jaar_en_twee_jaar_in_fase_planning_opname'],
            "Opleveren schaderapport": newData[0]['tussen_jaar_en_twee_jaar_in_fase_opleveren_schaderapport'],
            "Voorbereiden commissie": newData[0]['tussen_jaar_en_twee_jaar_in_fase_voorbereiding_besluit']
        });


        data.push({
            "serie": "Tussen half jaar en een jaar",
            // colour: "lightBlue",
            "Ontvangst": newData[0]['tussen_half_jaar_en_jaar_in_fase_ontvangst'],
            "Planning opname": newData[0]['tussen_half_jaar_in_fase_planning_opname'],
            "Opleveren schaderapport": newData[0]['tussen_half_jaar_en_jaar_in_fase_opleveren_schaderapport'],
            "Voorbereiden commissie": newData[0]['tussen_half_jaar_en_jaar_in_fase_voorbereiding_besluit']
        });


        data.push({
            "serie": "Minder dan een half jaar",
            // colour: "blue",
            "Ontvangst": newData[0]['minder_dan_half_jaar_in_fase_ontvangst'],
            "Planning opname": newData[0]['minder_dan_half_jaar_in_fase_planning_opname'],
            "Opleveren schaderapport": newData[0]['minder_dan_half_jaar_in_fase_opleveren_schaderapport'],
            "Voorbereiden commissie": newData[0]['minder_dan_half_jaar_in_fase_voorbereiding_besluit']
        });

        this.keys = Object.keys(data[0]).filter(key => {
            return ['serie'].indexOf(key) < 0
        });

        this.normalizedStack = d3.stack()
            .offset(d3.stackOffsetExpand)
            .keys(this.keys);

        this.stack = d3.stack()
            .keys(this.keys);

        let stackedData = this.normalizedStack(data);
        let notNormalizedData = this.stack(data);
        return { data, stackedData, notNormalizedData }
    }

    draw(data, stackedData, notNormalizedData) {

        // with data we can init scales
        this.xScale = this.chartXScale.set(stackedData.map(d => Object.values(d)[0]));
        this.yScale = this.chartYScale.set(data.map( d => d.serie));
        // width data we can draw items
        this.chartStackedBarsNormalized.draw(data,stackedData,notNormalizedData);

    }

    redraw(data, stackedData, notNormalizedData) {

        // on redraw chart gets new dimensions
        this.dimensions = this.chartDimensions.get(this.dimensions);
        this.chartSVG.redraw(this.dimensions);
        // new dimensions mean new scales
        this.xScale = this.chartXScale.reset('horizontal',this.dimensions,this.xScale);
      //  console.log(this.dimensions);
        this.yScale = this.chartYScale.reset('vertical',this.dimensions,this.yScale);
        // new scales mean new axis
       this.topAxis.redraw('stackedNormalized', this.dimensions, this.xScale);
       this.bottomAxis.redraw('stackedNormalized', this.dimensions, this.xScale);


        // redraw data
        this.chartStackedBarsNormalized.redraw(this.dimensions,this.xScale,this.yScale,'serie');

    }

    update(newData) {

        let self = this;
        let { data, stackedData, notNormalizedData } = this.prepareData(newData);
        if( this.config.extra.legend) {
            this.legend(data);
        }
        this.draw(data, stackedData, notNormalizedData);
        this.redraw(data, stackedData, notNormalizedData);
        window.addEventListener("resize", () => self.redraw(data, stackedData, notNormalizedData), false);
    }


}

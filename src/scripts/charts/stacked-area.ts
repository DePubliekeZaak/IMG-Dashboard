import * as d3 from "d3";

import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxes } from '../chart-basics/module';
import {ChartAxisGrid, ChartCircleGroups, HtmlHeader, HtmlPopup} from "../chart-elements/module";
import {ChartStackedArea} from "../chart-elements/chart-stacked-area";
import {colours} from "../_styleguide/_colours";
import {breakpoints} from "../_styleguide/_breakpoints";

export class StackedArea  {


    element;
    yParameter;
    dimensions;
    svg;
    yScale;
    xScale;
    bottomAxis;
    leftAxis;

    chartDimensions;
    chartSVG;
    chartXScale;
    chartYScale;
    chartStackedArea;

    htmlHeader;
    stack;
    columnArray;

    popup;


    constructor(
        private data : any,
        private elementID : string,
        private config : any,
        private dataMapping : [any],
        private description
    ) {
        this.element = d3.select(this.elementID).node();
        this.yParameter = this.dataMapping[0].column;
        this.config.yParameter = this.dataMapping[0].column;
    }



    init() {

        let self = this;

        this.columnArray = this.dataMapping.map( (map) => map.column );

        let chartObjects = ChartObjects();
        this.config = Object.assign(chartObjects.config(),this.config);
        this.dimensions = chartObjects.dimensions();
        this.svg = chartObjects.svg();

        this.config.paddingInner = 0;
        this.config.paddingOuter = 0;

        // get dimensions from parent element
        this.chartDimensions = new ChartDimensions(this.element, this.config);
        this.dimensions = this.chartDimensions.get(this.dimensions);

        // create svg elements without data
        this.chartSVG = new ChartSVG(this.elementID, this.config, this.dimensions, this.svg);
        this.chartXScale = new ChartScale(this.config.xScaleType, this.config, this.dimensions);
        this.chartYScale = new ChartScale('linear', this.config, this.dimensions);
        this.bottomAxis = new ChartAxes(this.config, this.svg, 'bottom',this.chartXScale);
        this.leftAxis = new ChartAxes(this.config, this.svg,'left',this.chartYScale);
        this.htmlHeader = new HtmlHeader(this.element,this.config.extra.header);

        this.chartStackedArea = new ChartStackedArea(this.config, this.svg.layers);

        this.bottomAxis.draw();
        this.leftAxis.draw();
        this.htmlHeader.draw();



        self.update(this.data);
    }

    legend(data) {

        let legend = document.createElement('div');
        legend.classList.add('legend');
        legend.style.display = 'flex';
        legend.style.flexDirection = (window.innerWidth > breakpoints.sm) ? 'row-reverse' : 'column-reverse';
        legend.style.justifyContent = 'center';
        legend.style.width = '100%';
        legend.style.marginBottom = (window.innerWidth > breakpoints.sm) ? '2rem' : '1rem';


        this.dataMapping.forEach( (d,i) => {

            let item = document.createElement('div');
            item.style.display = 'flex';
            item.style.flexDirection = 'row';
            item.style.alignItems = 'center';
            item.style.marginRight = '2rem';

            let circle = document.createElement('span');
            circle.style.width = '.75rem';
            circle.style.height = '.75rem';
            circle.style.borderRadius = '50%';
            circle.style.marginRight = '.5rem';
            circle.style.display = 'inline-block';
            circle.style.background = colours[d['colour']][0];
            item.appendChild(circle);

            let label = document.createElement('span');
            label.style.fontFamily = "NotoSans Regular";
            label.style.fontSize = '.8rem';
            label.innerText = d['label'];
            item.appendChild(label);

            legend.appendChild(item);

        });

        this.element.appendChild(legend);
    }

    prepareData(json)  {

        let data = [];
        let mapping;

        for (let week of json) {
            let o = {};
            let legit = true;

            for (let column of this.columnArray)  {

                mapping = this.dataMapping.find( (map) => map.column === column);

                o[column] = week[column];
                o['_date'] = week['_date'];
                o['gemeente'] = week['gemeente'];
                o['label'] = mapping.label;
                o['colour'] = mapping.colour;

                if (o[column] === null) {
                    legit = false;
                }
            }

            if(legit) {
                data.push(o);
            }
        }

        data.sort(function(a, b) {
            return new Date(a._date).getTime() - new Date(b._date).getTime();
        });

        data = data.slice(1,data.length);

        this.stack = d3.stack()
            .keys(Object.keys(data[0]).filter(key => {
                return ['_date','gemeente','label','colour'].indexOf(key) < 0
            } ));

        let stackedData = this.stack(data);

        return {data, stackedData }

    }


    redraw(stackedData) {

        this.yScale = this.chartYScale.set(stackedData[stackedData.length - 1].map( d => d[1]));

        // on redraw chart gets new dimensions
        this.dimensions = this.chartDimensions.get(this.dimensions);
        this.chartSVG.redraw(this.dimensions);
        // new dimensions mean new scales
        this.xScale = this.chartXScale.reset('horizontal',this.dimensions,this.xScale);
        this.yScale = this.chartYScale.reset('vertical',this.dimensions,this.yScale);
        // new scales mean new axis

        this.bottomAxis.redraw('time',this.dimensions,this.xScale);
        this.leftAxis.redraw('linear',this.dimensions,this.yScale);

        this.chartStackedArea.redraw(this.dimensions,this.xScale,this.yScale,this.dataMapping);
    }

    draw(data,stackedData) {
        this.xScale = this.chartXScale.set(data.map(d => d[this.config.xParameter]));
        this.chartStackedArea.draw(data,stackedData);
    }

    update(newData) {

        let self = this;
        let { data, stackedData } = self.prepareData(newData);
        self.draw(data, stackedData);
        self.redraw(stackedData);
        self.legend(data);
        this.popup = new HtmlPopup(this.element,this.description);
        window.addEventListener("resize", () => self.redraw(stackedData), false);
    }
}
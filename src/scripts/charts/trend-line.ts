import * as d3 from "d3";

import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxes } from '../chart-basics/module';
import {ChartAxisGrid, ChartBackgroundArea, ChartFocus, ChartEndLabel, HtmlHeader, HtmlLink, HtmlPopup, HtmlSegment } from "../chart-elements/module";
import {ChartLine} from "../chart-elements/chart-line";
import {colours} from "../_styleguide/_colours";

export class TrendLine {

    element;
    yParameter;
    dimensions;
    svg;

    chartDimensions;
    chartSVG;
    chartXScale;
    chartYScale;
    chartAxis;
    chartLines = [];
    chartBackgroundAreas = [];
    chartEndLabels = [];
    chartFocus;

    htmlHeader;
    link;
    popup;
    htmlSegment;

    yScale;
    xScale;
    bottomAxis;
    leftAxis;

    chartAxisGrid;

    constructor(
        private data,
        private elementID,
        private config,
        private dataMapping,
        private description,
        private segment
    ) {
        this.element = d3.select(elementID).node();
        this.yParameter = this.dataMapping[0]['column'];
    }

    init() {

        let self = this;
        let chartObjects = ChartObjects();
        this.config = Object.assign(chartObjects.config(), this.config);
        this.dimensions = chartObjects.dimensions();
        this.svg = chartObjects.svg();

        this.chartDimensions = new ChartDimensions(this.elementID, this.config);
        this.dimensions = this.chartDimensions.get(this.dimensions);

        // create svg elements without data
        this.chartSVG = new ChartSVG(this.elementID, this.config, this.dimensions, this.svg);
        this.chartXScale = new ChartScale(this.config.xScaleType, this.config, this.dimensions);
        this.chartYScale = new ChartScale(this.config.yScaleType, this.config, this.dimensions);
        this.bottomAxis = new ChartAxes(this.config, this.svg, 'bottom', this.chartXScale);
        this.leftAxis = new ChartAxes(this.config, this.svg, 'left', this.chartYScale);

        this.chartDimensions = new ChartDimensions(this.elementID, this.config);
        this.dimensions = this.chartDimensions.get(this.dimensions);

        for (let i = 0;  i < this.dataMapping.length; i++) {

            if (this.config.extra.label) {
                this.chartEndLabels.push(new ChartEndLabel(this.config, this.svg.layers, this.dataMapping[i].column, this.dataMapping[i].colour))
            }

            this.chartLines.push(new ChartLine(this.config,this.svg.layers, this.dataMapping[i].column, this.dataMapping[i].colour));
            this.chartBackgroundAreas.push(new ChartBackgroundArea(this.config, this.svg, this.dataMapping[i].column, this.dataMapping[i].colour))
        }

        if (this.config.extra.header) {
            this.htmlHeader = new HtmlHeader(this.element,this.config.extra.header);
            this.htmlHeader.draw();
        }

        if (this.config.extra.hasFocus) {
            this.chartFocus = new ChartFocus(this.config,this.svg.layers,this.element);
        }

        this.popup = new HtmlPopup(this.element,this.description);
        this.htmlSegment = new HtmlSegment(this.element);

        if( this.config.extra.legend) {

            this.legend();
        }

        self.update(this.data,this.segment);

    }

    legend() {

        let legend = document.createElement('div');
        legend.classList.add('legend');
        legend.style.display = 'flex';
        legend.style.flexDirection = 'row';
        legend.style.justifyContent = 'center';
        legend.style.width = '100%';


        this.dataMapping.forEach( (d,i) => {

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
            circle.style.background = colours[d['colour']][0];
            item.appendChild(circle);

            let label = document.createElement('span');
            label.style.fontFamily = "NotoSans Regular";
            label.style.fontSize = (window.innerWidth > 700) ? '.8rem' : '.71em';
            label.innerText = d['label'];
            item.appendChild(label);

            legend.appendChild(item);

        });

        this.element.insertBefore(legend,this.element.querySelector('svg'))
        // this.element.appendChild(legend);
    }

    prepareData(json) {

        // console.log(json);

        let neededColumns = ['_date'].concat(this.dataMapping.map( (c) => c.column ));

        let data = [];

        for (let week of json) {

            let o = {
                colour : this.dataMapping[0].colour
            };
            for (let p of Object.entries(week))  {
                if (neededColumns.indexOf(p[0]) > -1 ) {
                    o[p[0]] = p[1];
                }
            }
            data.push(o);
        }

        data.sort(function(a, b) {
            return new Date(a._date).getTime() - new Date(b._date).getTime();
        });


        data = data.filter( (week) => {

            let hasNeededColumns = true;

            for (let column of neededColumns) {
                if (!(column in week)) {
                    hasNeededColumns = false ;
                }
            }
            return hasNeededColumns;
        })


        if(this.config.extra.startDate) {
            data = data.filter( (week) =>
                new Date(week._date) > new Date(this.config.extra.startDate)
            );
        }

        return data.slice(1,data.length);
    }

    redraw(data) {

        let minValue = 0; // d3.min(data.map(d => ((d[this.yParameter]) * .85)));
        let valueArray = [];

        for (let map of this.dataMapping) {
            valueArray = valueArray.concat(data.map( d => d[map.column]))
        }

        this.yScale = this.chartYScale.set(valueArray,minValue);

        // on redraw chart gets new dimensions
        this.dimensions = this.chartDimensions.get(this.dimensions);
        this.chartSVG.redraw(this.dimensions);
        // new dimensions mean new scales
        this.xScale = this.chartXScale.reset('horizontal', this.dimensions,this.xScale);
        this.yScale = this.chartYScale.reset('vertical', this.dimensions,this.yScale);

        this.bottomAxis.redraw(this.config.xScaleType, this.dimensions, this.xScale);
        this.leftAxis.redraw(this.config.yScaleType, this.dimensions, this.yScale);

        for (let area of this.chartBackgroundAreas) {
            area.redraw(this.xScale, this.yScale, this.dimensions, data, this.dataMapping[0].colour, this.config.xParameter, this.yParameter);
        }

        for (let line of this.chartLines) {
            line.redraw(this.xScale, this.yScale, this.dimensions, data, this.yParameter)
        }

        for (let label of this.chartEndLabels) {
            label.redraw(this.xScale, this.yScale, this.dimensions, data, this.yParameter)
        }

        if (this.config.extra.hasFocus) {
            this.chartFocus.redraw(this.xScale, this.yScale, this.dimensions, data, this.dataMapping);
        }
    }

    draw(data) {

        this.xScale = this.chartXScale.set(data.map(d => d[this.config.xParameter]));

        for (let area of this.chartBackgroundAreas) {
            area.draw(data);
        }

        for (let line of this.chartLines) {
            line.draw(data)
        }

        this.chartEndLabels.forEach( (l,i) => {
            const text = (this.config.extra.label === 'value') ? data[data.length - 1][this.yParameter].toString() : this.dataMapping[i].label;
            l.draw(this.dataMapping[i].label,text);
        });

        if (this.config.extra.hasFocus) {
            this.chartFocus.draw();
        }
    }

    update(newData,segment) {

        let self = this;
        let data = this.prepareData(newData);
        this.draw(data);
        this.redraw(data);
        window.addEventListener("resize", () => self.redraw(data), false);
        if (this.config.extra.segmentIndicator) {
            this.htmlSegment.draw(segment);
        }
    }
}

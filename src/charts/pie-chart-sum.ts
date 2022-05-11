import * as d3 from "d3";

import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxes } from '../chart-basics/module';

import {ChartPie, HtmlHeader, HtmlLink, HtmlMuniSelector, HtmlPopup, HtmlSegment} from '../chart-elements/module';

import { convertToCurrency } from '../helpers/_helpers';
import { colours } from '../_styleguide/_colours';

export class PieChartSum  {


    element;
    graphEl;
    yParameter;
    dimensions;
    svg;

    chartDimensions;
    chartSVG;

    chartPie;
    htmlHeader;
    legend;
    link;
    popup;
    htmlSegment;
    htmlMuniSelector;

    rowHeight = 22;

    constructor(
        private data,
        private elementID,
        private config,
        private dataMapping,
        private description,
        private segment
    ) {
        this.element = d3.select(elementID).node();
    }

    init() {

        let self = this;

        // create extra div to house graph -- so that legend does not influence height of graphContainer
        this.graphEl = document.createElement('div');
        this.graphEl.classList.add('graph_element');
        this.graphEl.style.height = '260px';
        this.element.appendChild(this.graphEl);

        let chartObjects = ChartObjects();
        this.config = Object.assign(chartObjects.config(),this.config);
        this.dimensions = chartObjects.dimensions();
        this.svg = chartObjects.svg();

        this.config.colours = d3.scaleOrdinal()
            .range(this.dataMapping[0].map( d => d.colours));

        this.chartDimensions = new ChartDimensions(this.graphEl,this.config);
        this.dimensions = this.chartDimensions.get(this.dimensions);

        // create svg elements without data
        this.chartSVG = new ChartSVG(this.graphEl,this.config,this.dimensions,this.svg);

        this.chartPie = new ChartPie(this.config,this.svg,this.dimensions);

        let data = this.prepareData(this.data,'all');
        this.drawLegend(data);
        
        if (this.config.extra.header) {
            this.htmlHeader = new HtmlHeader(this.element,this.config.extra.header);
            this.htmlHeader.draw();
           // this.link = new HtmlLink(this.element,this.config.extra.header,'');
        }


        this.htmlMuniSelector = new HtmlMuniSelector(this.element,'vergoedingen_taart_afgewezen'); // later koppelen aan GraphObject.slug

        if(this.config.extra.municipalitySelect) {
            this.htmlMuniSelector.draw();

            const municipalitySelect = document.querySelector('.municipality_select_' + 'vergoedingen_taart_afgewezen' ) as HTMLSelectElement;

            municipalitySelect.addEventListener("change", function () {
                self.update(self.data,municipalitySelect.options[municipalitySelect.selectedIndex].value);
            });
        }

        this.popup = new HtmlPopup(this.element,this.description);
        this.htmlSegment = new HtmlSegment(this.element);

        this.update(this.data,this.segment);

    }

    prepareData(data,segment) {

        let d = (this.config.extra.municipalitySelect) ? this.data.find( j => j['gemeente'] === segment) : data[0];

        let preparedData = [];
        let sum = 0;

        this.dataMapping.forEach( (array,i) => {

            let dataArray = [];

            for (let mapping of array) {

                let value = 0;

                if (i === 1) {
                    value = sum;

                } else if (Array.isArray(mapping.column)) {

                    let mathType = mapping.column[mapping.column.length - 1];

                    switch (mathType) {

                        case '+' :

                            for (let prop of mapping.column.slice(0, mapping.column.length - 1)) {

                                value += d[prop];
                                sum += d[prop];
                            }

                            break;

                        case '-' :

                            let diff = d[mapping.column[0]] - d[mapping.column[1]];

                            value += diff;
                            sum += diff;

                            break;

                    }

                } else {
                    value = d[mapping.column]
                }

                sum = (d[mapping.column] !== undefined) ? sum + d[mapping.column] : sum;

                if (value > 0) {
                    dataArray.push({
                        label: mapping.label,
                        value: value,
                        colour: mapping.colour,
                        accented: (i > 1) ? true : false
                    });
                }
            }

            preparedData.push(dataArray);
        });

        return preparedData;
    }

     drawLegend(data) {

        let legendEl = this.element.querySelector('.legend');

         if (legendEl) {
             legendEl.parentNode.removeChild(legendEl)
         }

        let legendContainer = document.createElement('div');
        legendContainer.classList.add('legend');
         legendContainer.style.display = 'flex';
         legendContainer.style.flexDirection = "column";
         legendContainer.style.alignItems = "center";

        this.element.appendChild(legendContainer);

        let chartObjects = ChartObjects();
        let newSVGObject= chartObjects.svg();

        let dataLength = data[0].length;

        if(data[1]) {  dataLength = dataLength + data[1].length }
        if(data[2]) {  dataLength = dataLength + data[2].length }


         let legendDimensions = {

             width : this.config.extra.legendWidth,
             height : this.rowHeight * dataLength,
             svgWidth : this.config.extra.legendWidth,
             svgHeight : this.rowHeight * dataLength,
         }

        this.legend = new ChartSVG(legendContainer,this.config,legendDimensions,newSVGObject);

    }

    redrawLegend(data) {


        let dataLength = data[0].length;

        if(data[1]) {  dataLength = dataLength + ( data[1].length * 2) }
        if(data[2]) {  dataLength = dataLength + (data[2].length *  2) }

        let legendDimensions = {

            width : this.config.extra.legendWidth,
            height : this.rowHeight * dataLength,
            svgWidth : this.config.extra.legendWidth,
            svgHeight : this.rowHeight * dataLength,
        }

        this.legend.redraw(legendDimensions);

        this.legend.svg.layers.legend.selectAll('*')
            .remove();
        //
        data[0].forEach( (d,i) => {

            this.legend.svg.layers.legend.append("rect")
                .attr("y", (i * this.rowHeight) - 2)
                .attr("height",12)
                .attr("width",12)
                .attr("fill", colours[d.colour][0] )
                .style("opacity", 1);

            this.legend.svg.layers.legend.append("text")
                .attr("class", "small-label")
                .attr("dy", (i * this.rowHeight) + 8)
                .attr("dx", 16)
                .text(d['label'] + ':')
                .attr("width", this.dimensions.svgWidth)
                .style("opacity", 1);

            this.legend.svg.layers.legend.append("text")
                .attr("class", "small-label")
                .attr("dx", this.config.extra.legendWidth)
                .attr("dy", (i * this.rowHeight) + 8)
                .text( (this.config.extra.currencyLabels) ? convertToCurrency(d['value']) : d['value'])
                .attr("width", this.dimensions.svgWidth)
                .style("opacity", 1)
                .style("text-anchor", "end");

        });
        //
        // // som van totaal
        if(data[1]) {

            console.log(data[1][0]);

            this.legend.svg.layers.legend.append("rect")
                .attr("class", "small-label")
                .attr("y", ((data[0].length) * this.rowHeight)  - 3)
                .attr("height", .5)
                .attr("width", this.config.extra.legendWidth)
                .style("opacity", 1)
                .style("fill", 'black');

            this.legend.svg.layers.legend.append("text")
                .attr("class", "small-label")
                .attr("dy", (data[0].length * this.rowHeight) + 16)
                .text(data[1][0]["label"] + ':')
                .attr("width", this.dimensions.svgWidth)
                .style("opacity", 1);

            this.legend.svg.layers.legend.append("text")
                .attr("class", "small-label")
                .attr("dx", this.config.extra.legendWidth)
                .attr("dy", ((data[0].length) * this.rowHeight) + 16)
                .text( (this.config.extra.currencyLabels) ? convertToCurrency(data[1][0]['value']) : data[1][0]['value'])
                .attr("width", this.dimensions.svgWidth)
                .style("opacity", 1)
                .style("text-anchor", "end");

        }
        //
        if(data[2]) {

            this.legend.svg.layers.legend.append("rect")
                .attr("y", ((data[0].length + 1.5) * this.rowHeight) + 6)
                .attr("height",12)
                .attr("width",12)
                .attr("fill", colours[data[2][0].colour][0])
                .style("opacity", 1);

            this.legend.svg.layers.legend.append("text")
                .attr("class", "small-label")
                .attr("dy", ((data[0].length + 1.5) * this.rowHeight) + 16)
                .attr("dx", this.rowHeight - 4)
                .text(data[2][0].label)
                .attr("width",this.dimensions.svgWidth)
                .style("opacity", 1);

            this.legend.svg.layers.legend.append("text")
                .attr("class", "small-label")
                .attr("dx", this.config.extra.legendWidth)
                .attr("dy", ((data[0].length + 1.5) * this.rowHeight) + 16)
                .text( (this.config.extra.currencyLabels) ? convertToCurrency(data[2][0]['value']) : data[2][0]['value'])
                .attr("width",this.dimensions.svgWidth)
                .style("opacity", 1)
                .style("text-anchor", "end");
        }
    }

    draw(data) {

        if(data[2] && data[2][0]) {

            let clonedData = JSON.parse(JSON.stringify(data));
            clonedData[0].unshift(clonedData[2][0]);
            this.chartPie.draw(clonedData[0]);

        } else {

            this.chartPie.draw(data[0])
        }
    }

     redraw() {

         this.dimensions = this.chartDimensions.get(this.dimensions);
         this.chartSVG.redraw(this.dimensions);
         this.chartPie.redraw(this.dimensions);
    }

    update(newData,segment) {

        let self = this;

        let data = this.prepareData(newData,segment);
        this.draw(data);

        this.redrawLegend(data);
        this.redraw();

        if(this.config.extra.segmentIndicator) {
            this.htmlSegment.draw(segment);
        }

        window.addEventListener("resize", function() { self.redraw() }, false);
    }
}

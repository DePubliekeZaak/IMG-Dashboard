import * as d3 from "d3";

import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxes } from '../chart-basics/module';

import { ChartPie } from '../chart-elements/module';

import { convertToCurrency } from '../helpers/_helpers';
import { colours } from '../_styleguide/_colours.js';

export class PieChartSum  {


    element;
    yParameter;
    dimensions;
    svg;

    chartDimensions;
    chartSVG;

    chartPie;
    legend;

    constructor(
        private data,
        private elementID,
        private config,
        private dataMapping
    ) {
        this.element = d3.select(elementID).node();
    }

    init() {

        let self = this;

        let chartObjects = ChartObjects();
        this.config = Object.assign(this.config,chartObjects.config());
        this.dimensions = chartObjects.dimensions();
        this.svg = chartObjects.svg();

        this.config.colours = d3.scaleOrdinal()
            .range(this.dataMapping[0].map( d => d.colours));

        this.chartDimensions = new ChartDimensions(this.element,this.config);
        this.dimensions = this.chartDimensions.get(this.dimensions);

        // create svg elements without data
        this.chartSVG = new ChartSVG(this.element,this.config,this.dimensions,this.svg);

        this.chartPie = new ChartPie(this.config,this.svg,this.dimensions);

        this.update(this.data);

    }

    prepareData(data) {
        
    //    let segmented = json.find( j => j['_category'] === segment);

        let preparedData = [];

        // when total column = false --> add sum of previous columns

        let sum = 0;

        this.dataMapping.forEach( (array,i) => {

            let dataArray = [];

            for (let mapping of array) {

                let value = 0;

                if (i === 1) {
                    value = sum;

                } else if (Array.isArray(mapping.column)) {

                    for (let prop of mapping.column) {
                        value += data[prop];
                        sum += data[prop];
                    }

                } else {
                    value = data[0][mapping.column]
                }

                sum = (data[0][mapping.column] !== undefined) ? sum + data[0][mapping.column] : sum;

                dataArray.push({
                    label: mapping.label,
                    value: value,
                    colour: mapping.colour,
                    accented: (i > 1) ? true : false
                });
            }

            preparedData.push(dataArray);
        });

        console.log(preparedData);
        return preparedData;
    }

     drawLegend(data) {

        this.element.parentNode.querySelector('.legend').remove();

        let legendContainer = document.createElement('div');
        legendContainer.classList.add('legend');

        this.element.parentNode.appendChild(legendContainer);

        let chartObjects = ChartObjects();
        let newSVGObject= chartObjects.svg();

        let dataLength = data[0].length;

        if(data[1]) {  dataLength = dataLength + data[1].length }

        if(data[2]) {  dataLength = dataLength + data[2].length }

        let rowHeight = 22;

         let legendDimensions = {

             width : this.config.legendWidth,
             height : rowHeight * dataLength,
             svgWidth : this.config.legendWidth,
             svgHeight : rowHeight * dataLength,

         }

        this.legend = new ChartSVG(legendContainer,this.config,legendDimensions,newSVGObject);

         this.legend.redraw(legendDimensions);

        this.legend.svg.layers.legend.selectAll('*')
            .remove();
        //
        data[0].forEach( (d,i) => {

            this.legend.svg.layers.legend.append("rect")
                .attr("y", (i * rowHeight) - 2)
                .attr("height",12)
                .attr("width",12)
                .attr("fill", colours[d.colour][0] )
                .style("opacity", 1);

            this.legend.svg.layers.legend.append("text")
                .attr("class", "small-label")
                .attr("dy", (i * rowHeight) + 8)
                .attr("dx", 16)
                .text(d['label'] + ':')
                .attr("width", this.dimensions.svgWidth)
                .style("opacity", 1);

            this.legend.svg.layers.legend.append("text")
                .attr("class", "small-label")
                .attr("dx", this.config.legendWidth)
                .attr("dy", (i * rowHeight) + 8)
                .text( (this.config.currencyLabels) ? convertToCurrency(d['value']) : d['value'])
                .attr("width", this.dimensions.svgWidth)
                .style("opacity", 1)
                .style("text-anchor", "end");

        });
        //
        // // som van totaal
         if(data[1]) {

             this.legend.svg.layers.legend.append("rect")
                 .attr("class", "small-label")
                 .attr("y", ((data[0].length) * rowHeight)  - 3)
                 .attr("height", .5)
                 .attr("width", this.config.legendWidth)
                 .style("opacity", 1)
                 .style("fill", 'black');

             this.legend.svg.layers.legend.append("text")
                 .attr("class", "small-label")
                 .attr("dy", (data[0].length * rowHeight) + 16)
                 .text('Totaal:')
                 .attr("width", this.dimensions.svgWidth)
                 .style("opacity", 1);

             this.legend.svg.layers.legend.append("text")
                 .attr("class", "small-label")
                 .attr("dx", this.config.legendWidth)
                 .attr("dy", ((data[0].length) * rowHeight) + 16)
                 .text( (this.config.currencyLabels) ? convertToCurrency(data[1][0]['value']) : data[1][0]['value'])
                 .attr("width", this.dimensions.svgWidth)
                 .style("opacity", 1)
                 .style("text-anchor", "end");

         }
        //
         if(data[2]) {

             this.legend.svg.layers.legend.append("rect")
                 .attr("y", ((data[0].length + 1.5) * rowHeight) + 6)
                 .attr("height",12)
                 .attr("width",12)
                 .attr("fill", colours[data[2][0].colour][0])
                 .style("opacity", 1);

             this.legend.svg.layers.legend.append("text")
                 .attr("class", "small-label")
                 .attr("dy", ((data[0].length + 1.5) * rowHeight) + 16)
                 .attr("dx", rowHeight - 4)
                 .text(data[2][0].label)
                 .attr("width",this.dimensions.svgWidth)
                 .style("opacity", 1);

             this.legend.svg.layers.legend.append("text")
                 .attr("class", "small-label")
                 .attr("dx", this.config.legendWidth)
                 .attr("dy", ((data[0].length + 1.5) * rowHeight) + 16)
                 .text( (this.config.currencyLabels) ? convertToCurrency(data[2][0]['value']) : data[2][0]['value'])
                 .attr("width",this.dimensions.svgWidth)
                 .style("opacity", 1)
                 .style("text-anchor", "end");
         }
    }

    redrawLegend() {



     //  this.legend.redraw(this.dimensions);

        // this.legendSVG.layers.legend
        //     .attr('transform', 'translate(' + legendX + ',' + legendY + ')');
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
      //   this.redrawLegend(this.dimensions,this.smallMultiple);
    }

    update(newData) {

        let self = this;

        let data = this.prepareData(newData);
        this.draw(data);
        this.drawLegend(data);
        this.redraw();


        window.addEventListener("resize", function() { self.redraw() }, false);
    }
}
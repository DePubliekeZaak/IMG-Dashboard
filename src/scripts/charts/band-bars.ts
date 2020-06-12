import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxes } from '../chart-basics/module';

import { ChartBar, HtmlHeader } from '../chart-elements/module';
import * as d3 from 'd3';



export class BandBars {

    element;
    yParameter;
    dimensions;
    svg;

    chartDimensions;
    chartSVG;
    chartXScale;
    chartYScale;
    chartAxis;
    chartBar;

    yScale;
    xScale;
    bottomAxis;
    leftAxis;

    htmlHeader;

    constructor(

        private data : any,
        private elementID : string,
        private config : any,
        private dataMapping : [any]

    ){
        this.element = d3.select(this.elementID).node();
        this.yParameter = this.dataMapping[0].column;
        // this.config.yParameter = this.dataMapping[0].column;
    }

    init() {

        let self = this;

        // this.radios = [].slice.call(document.querySelectorAll('.selector li input[type=radio]'));
    //    this.municipalitySelect = document.querySelector('select.municipalities');

        // dit kan als je de api van de kaart pakt ..

        let chartObjects = ChartObjects();
        this.config = Object.assign(chartObjects.config(),this.config);
        this.dimensions = chartObjects.dimensions();
        this.svg = chartObjects.svg();

        // get dimensions from parent element
        this.chartDimensions = new ChartDimensions(this.elementID, this.config);
        this.dimensions = this.chartDimensions.get(this.dimensions);

        // create svg elements without data
        this.chartSVG = new ChartSVG(this.elementID, this.config, this.dimensions, this.svg);
        this.chartXScale = new ChartScale(this.config.xScaleType, this.config, this.dimensions);
        this.chartYScale = new ChartScale(this.config.yScaleType, this.config, this.dimensions);
        this.bottomAxis = new ChartAxes(this.config, this.svg, 'bottom',this.chartXScale);
        this.leftAxis = new ChartAxes(this.config, this.svg,'left',this.chartYScale);
        this.chartBar = new ChartBar(this.config, this.svg.layers);

        this.htmlHeader = new HtmlHeader(this.element,this.config.extra.header);
        this.htmlHeader.draw();

        self.update(this.data);
    }

    prepareData(newData)  {

        let data = [];

        // dit kan als je de api van de kaart pakt ..



        // let segmented = newData.find( j => j['_category'] === this.segment);

        for (let mapping of this.dataMapping) {

            data.push(
                {
                    label:  mapping.label,
                    colour: mapping.colour,
                    value: newData[0][mapping.column]
                }
            )
        }


        return data;
    }

    redraw(data) {

        this.yScale = this.chartYScale.set(data.map ( d => d[this.config.yParameter]));

        // on redraw chart gets new dimensions
        this.dimensions = this.chartDimensions.get(this.dimensions);
        this.chartSVG.redraw(this.dimensions);
        // new dimensions mean new scales
        this.xScale = this.chartXScale.reset('horizontal',this.dimensions,this.xScale);
        this.yScale = this.chartYScale.reset('vertical',this.dimensions,this.yScale);
        // new scales mean new axis
        this.bottomAxis.redraw(this.config.xScaleType, this.dimensions, this.xScale);
        this.leftAxis.redraw(this.config.yScaleType, this.dimensions, this.yScale);
        // redraw data
        this.chartBar.redraw(this.dimensions,this.xScale,this.yScale);
    }

    draw(data) {

        this.xScale = this.chartXScale.set(data.map(d => d[this.config.xParameter]));

        this.chartBar.draw(data);
    }

    update(newData) {

        let self = this;

        let data = this.prepareData(newData);
        this.draw(data);
        this.redraw(data);

        window.addEventListener("resize", () => self.redraw(data), false);
    }
}
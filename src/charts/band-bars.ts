import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxes } from '../chart-basics/module';
import { munis } from '../helpers/municipalities';
import { ChartBar, HtmlHeader, HtmlPopup, HtmlMuniSelector } from '../chart-elements/module';
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

    popup;
    htmlHeader;
    htmlMuniSelector;

    constructor(

        private data : any,
        private elementID : string,
        private config : any,
        private dataMapping : [any],
        private description : string,
        private segment : string

    ){
        this.element = d3.select(this.elementID).node();
        this.yParameter = this.dataMapping[0].column;


        // this.config.yParameter = this.dataMapping[0].column;
    }

    init() {


        let self = this;
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

        this.htmlHeader = new HtmlHeader(this.element,this.config.multiples ? munis.find( m => m.value === this.segment).label : this.config.extra.header);
        this.htmlHeader.draw();

        this.htmlMuniSelector = new HtmlMuniSelector(this.element,'specials_band_bars'); // later koppelen aan GraphObject.slug

        if (this.config.extra.municipalitySelect) {

            this.htmlMuniSelector.draw();
            const municipalitySelect = document.querySelector('.municipality_select_' + 'specials_band_bars' ) as HTMLSelectElement;
            municipalitySelect.addEventListener("change", function () {
                self.update(self.data,municipalitySelect.options[municipalitySelect.selectedIndex].value);
            });
        }

        this.popup = new HtmlPopup(this.element,this.description);

        this.update(this.data,(this.segment !== undefined) ? this.segment : "all");
    }

    prepareData(newData,segment)  {

        let data = [];

        let d = (this.config.extra.municipalitySelect || this.config.multiples) ? this.data.find( j => j['gemeente'] === segment) : newData[0];

        for (let mapping of this.dataMapping) {

            let value = d[mapping.column];

            data.push({
                    label: mapping.label,
                    colour: mapping.colour,
                    value
                }
            )
        }

        return data;
    }

    redraw(data) {

        this.popup.attachData([data]);

        this.yScale = this.chartYScale.set(this.config.extra.yMax ? [this.config.extra.yMax] : data.map ( d => d[this.config.yParameter]));

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

        let self = this;

        let inputData = this.config.extra.removeFirstColumn ? data.slice(1, data.length) : data;

        this.xScale = this.chartXScale.set(inputData.map(d => d[this.config.xParameter]));

        this.chartBar.draw(inputData);
    }

    update(newData,segment) {


        let self = this;

        let data = this.prepareData(newData,segment);
        this.draw(data);
        this.redraw(data);

        window.addEventListener("resize", () => self.redraw(data), false);
    }
}

import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxes } from '../chart-basics/module';

import { ChartBar } from '../chart-elements/module';
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

    constructor(

        private elementID,
        private config,
        private dataMapping,
        private segment,
        private  data
    ){
        this.element = d3.select(elementID).node();
        this.yParameter = dataMapping[0].column;
        this.config.yParameter = dataMapping[0].column;
    }

    init() {

        let self = this;

        // this.radios = [].slice.call(document.querySelectorAll('.selector li input[type=radio]'));
    //    this.municipalitySelect = document.querySelector('select.municipalities');

        let chartObjects = ChartObjects();
        this.config = Object.assign(this.config,chartObjects.config());
        this.dimensions = chartObjects.dimensions();
        this.svg = chartObjects.svg();

        // this.config.margin.bottom = (window.innerWidth < 640 || this.smallMultiple) ? 125 : 50;
        // this.config.margin.top = this.smallMultiple? 30 : 45;
        // this.config.padding.top = 30;
        //
        // this.config.padding.left = 40;
        //
        // this.config.xParameter = 'label';
        // this.config.yParameter = 'value';

        this.config.paddingInner = 0.1;
        this.config.paddingOuter = 0.1;

        // get dimensions from parent element
        this.chartDimensions = new ChartDimensions(this.elementID, this.config);
        this.dimensions = this.chartDimensions.get(this.dimensions);

        // create svg elements without data
        this.chartSVG = new ChartSVG(this.elementID, this.config, this.dimensions, this.svg);
        this.chartXScale = new ChartScale(this.config.xScaleType, this.config, this.dimensions);
        this.chartYScale = new ChartScale(this.config.yScaleType, this.config, this.dimensions);
        this.bottomAxis = new ChartAxes(this.config, this.svg, 'bottom',this.chartXScale);
        this.leftAxis = new ChartAxes(this.config, this.svg,'left',this.chartYScale);
        this.chartBar = new ChartBar(this.config, this.svg);
        // this.chartLegend = ChartLegend(this.config, this.svg);

        // this.chartAxis.drawXAxis();
        // this.chartAxis.drawYAxis();


        self.run();
    }

    prepareData()  {

        let data = [];

        // let segmented = this.data.find( j => j['_category'] === this.segment);

        for (let week of this.data) {

            for (let mapping of this.dataMapping) {

                data.push(
                    {
                        label:  mapping[0].label,
                        colour: mapping[0].colour,
                        value: week[mapping[0].column]
                    }
                )
            }
        }

        return data;
    }

    redraw(data) {

        this.yScale = this.chartYScale.set(data,this.config.yParameter);

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

    run() {

        let self = this;

        let data = this.prepareData();
        this.draw(data);
        this.redraw(data);
        // legend(data);

        window.addEventListener("resize", () => self.redraw(data), false);
    }
}
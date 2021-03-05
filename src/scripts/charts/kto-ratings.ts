import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxes } from '../chart-basics/module';

import {ChartBarHorizontal, HtmlHeader, HtmlPopup, HtmlPeriodSelector, HtmlCircle} from '../chart-elements/module';
import * as d3 from 'd3';
import {getCompleteMonths} from "../utils/date-object.utils";



export class KTORatings {

    element;
    yParameter;
    dimensions;
    svgWrapper;
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
    htmlCircle;
    htmlPeriodSelector;

    constructor(

        private data : any,
        private elementID : string,
        private config : any,
        private dataMapping : [[any],[any]],
        private description : string

    ){
        this.element = d3.select(this.elementID).node();
        this.yParameter = this.dataMapping[0][0].column;
        // this.config.yParameter = this.dataMapping[0].column;
    }

    init() {

        let self = this;
        let chartObjects = ChartObjects();
        this.config = Object.assign(chartObjects.config(),this.config);
        this.dimensions = chartObjects.dimensions();
        this.svg = chartObjects.svg();

        this.svgWrapper = document.createElement('div');
        this.svgWrapper.classList.add('svg-wrapper');
        this.element.appendChild(this.svgWrapper);

        // get dimensions from parent element
        this.chartDimensions = new ChartDimensions(this.svgWrapper, this.config);
        this.dimensions = this.chartDimensions.get(this.dimensions);

        // create svg elements without data
        this.chartSVG = new ChartSVG(this.svgWrapper, this.config, this.dimensions, this.svg);
        this.chartXScale = new ChartScale(this.config.xScaleType, this.config, this.dimensions);
        this.chartYScale = new ChartScale(this.config.yScaleType, this.config, this.dimensions);
        // this.bottomAxis = new ChartAxes(this.config, this.svg, 'bottom',this.chartXScale);
        // this.leftAxis = new ChartAxes(this.config, this.svg,'left',this.chartYScale);


        this.chartBar = new ChartBarHorizontal(this.config, this.svg.layers);

        // let noRespondents = document.createElement('div');
        // noRespondents.innerHTML =

        this.htmlCircle = new HtmlCircle(this.config,this.dataMapping[0],this.element,this.dataMapping[0][0].label);
        this.htmlCircle.draw();

        this.htmlHeader = new HtmlHeader(this.element,this.config.extra.header);
        this.htmlHeader.draw();

        this.htmlPeriodSelector = new HtmlPeriodSelector(this.element,this.config.extra.slug); // later koppelen aan GraphObject.slug

        // filteren op maandtotalen
        const completeMonths = getCompleteMonths(this.data).filter( (m) => m['fysieke_schade_doorlopend_rapportcijfer_1'] !== undefined && m['fysieke_schade_doorlopend_rapportcijfer_1'] !== null);

        this.htmlPeriodSelector.draw(completeMonths.slice(0,6));
        const periodSelect = document.querySelector('.period_select_' + this.config.extra.slug ) as HTMLSelectElement;

        periodSelect.addEventListener("change", function () {
            self.update(self.data,periodSelect.options[periodSelect.selectedIndex].value);
        });

        this.popup = new HtmlPopup(this.element,this.description);

        self.update(completeMonths,'all');
    }

    prepareData(newData,segment)  {

        const dataIndex = (segment === 'all') ? 1 : 2;
        const monthIndex = (segment === 'all') ? 0 : segment;

        let rapportcijfers = [];
        let neededColumns = ['_date','_category'].concat(this.dataMapping[0].map( (c) => c.column ));
        let data = [];
        let hasEnoughData = true;
        let clearWeek = {};
        for (let column of neededColumns) {
            if (newData[monthIndex][column] !== null) {
                clearWeek[column] = newData[monthIndex][column]
            } else {
                hasEnoughData = false;
            }
        }

        if (hasEnoughData) {
            data.push(clearWeek);
        }


        if (this.dataMapping[1]) {

            // @ts-ignore
            for (let mapping of this.dataMapping[dataIndex]) {
                rapportcijfers.push({
                        label: mapping.label,
                        colour: mapping.colour,
                        value: newData[monthIndex][mapping.column]
                    }
                )
            }
        }

        return { data, rapportcijfers }
    }

    redraw(data, rapportcijfers, segment) {

        // @ts-ignore
        let parameter = (segment === 'all') ? this.dataMapping[0][0].column : this.dataMapping[0][1].column;
        // @ts-ignore
        let extraParameter = (segment === 'all') ? this.dataMapping[0][2].column : this.dataMapping[0][3].column;
        this.htmlCircle.redraw(data, parameter, extraParameter);

        this.yScale = this.chartYScale.set(rapportcijfers.map ( d => d[this.config.yParameter]));

        // on redraw chart gets new dimensions
        this.dimensions = this.chartDimensions.get(this.dimensions);
        this.chartSVG.redraw(this.dimensions);
        // new dimensions mean new scales
        this.xScale = this.chartXScale.reset('horizontal',this.dimensions,this.xScale);
        this.yScale = this.chartYScale.reset('vertical',this.dimensions,this.yScale);
        // new scales mean new axis
        // this.bottomAxis.redraw(this.config.xScaleType, this.dimensions, this.xScale);
        // this.leftAxis.redraw(this.config.yScaleType, this.dimensions, this.yScale);
        // redraw data


        this.chartBar.redraw(this.dimensions,this.xScale,this.yScale,this.data[0][this.config.extra.columnForAverage]);
    }

    draw(data, rapportcijfers) {

        let self = this;
        this.xScale = this.chartXScale.set(rapportcijfers.map(d => d[this.config.xParameter]));
        this.chartBar.draw(rapportcijfers);
    }

    update(newData,segment) {

        let self = this;
        let { data, rapportcijfers } = this.prepareData(newData,segment);
        this.draw(data, rapportcijfers);
        this.redraw(data, rapportcijfers,segment);

        window.addEventListener("resize", () => self.redraw(data, rapportcijfers,segment), false);
    }
}

import { GraphController } from "./graph";

import { ChartAxes } from '../chart-basics/module';
import { ChartBackgroundArea, ChartFocus, ChartEndLabel, ChartLine } from "../svg-elements/module";
import { HtmlLegendDots } from "../html-elements/module";

import { GraphObject } from "../types/graphObject";
import { DataPart, GraphData } from "../types/data";
import { getMappingKey } from "../d3-services/_helpers";
import { filterWeeks, getNeededColumnsForHistory } from "../d3-services/data-with-history.functions";

export default class TrendLine extends GraphController {

    chartAxis;
    chartLines = [];
    chartBackgroundAreas = [];
    // chartEndLabels = [];
    chartFocus;
    bottomAxis;
    leftAxis;

    chartAxisGrid;

    legend;

    constructor(
        public main: any,
        public data : any,
        public element : HTMLElement,
        public graphObject: GraphObject,
        public segment: string  
    ) {
        super(main,data,element,graphObject,segment);
    }

    init() {

        super._init();
        super._svg(this.element);

        this.bottomAxis = new ChartAxes(this.graphObject.config, this.svg, 'bottom', this.chartXScale);
        this.leftAxis = new ChartAxes(this.graphObject.config, this.svg, 'left', this.chartYScale);

        for (let i = 0;  i < this.graphObject.mapping[0].length; i++) {

            // if (this.graphObject.config.extra.label) {
            //     this.chartEndLabels.push(new ChartEndLabel(this.graphObject.config, this.svg.layers, getMappingKey(this.graphObject.mapping[0][i],"column"), getMappingKey(this.graphObject.mapping[0][i],"colour")))
            // }

            this.chartLines.push(new ChartLine(this, getMappingKey(this.graphObject.mapping[0][i],"column"), getMappingKey(this.graphObject.mapping[0][i],"colour")));
            this.chartBackgroundAreas.push(new ChartBackgroundArea(this, getMappingKey(this.graphObject.mapping[0][i],"column"), getMappingKey(this.graphObject.mapping[0][i],"colour")))
        }

        if (this.graphObject.config.extra.hasFocus) {
            this.chartFocus = new ChartFocus(this);
        }

        if( this.graphObject.config.extra.legend) {
            this.legend = new HtmlLegendDots(this);
        }

        this.update(this.data,this.segment, false);
    }



    prepareData(data: DataPart[]) : GraphData  {

        const neededColumns = getNeededColumnsForHistory(data, this.graphObject);
        let history = filterWeeks(data,neededColumns);

        history.forEach( (w) => w['colour'] = getMappingKey(this.firstMapping,"colour"))

        if(this.graphObject.config.extra.startDate) {
            history = history.filter( (week) =>
                new Date(week._date) > new Date(this.graphObject.config.extra.startDate)
            );
        }

        return {
            "history" : history.slice(1, history.length),
            "latest" : data[0], 
            "slice" : history.slice(1, history.length) 
        }
    }

    redraw(data: GraphData) {

        super.redraw(data);

        this.bottomAxis.redraw(this.graphObject.config.xScaleType, this.dimensions, this.xScale);
        this.leftAxis.redraw(this.graphObject.config.yScaleType, this.dimensions, this.yScale);

        for (let area of this.chartBackgroundAreas) {
            area.redraw(data);
        }

        for (let line of this.chartLines) {
            line.redraw()
        }

        // for (let label of this.chartEndLabels) {
        //     label.redraw(this.xScale, this.yScale, this.dimensions, data.slice, this.yParameter)
        // }

        if (this.graphObject.config.extra.hasFocus) {
            this.chartFocus.redraw(data);
        }
    }

    draw(data: GraphData) {

        this.xScale = this.chartXScale.set(data.slice.map(d => d[this.xParameter]));
        let minValue = this.graphObject.config.extra.minValue || 0; // d3.min(data.map(d => ((d[this.yParameter]) * .85)));
        let valueArray = []
        for (let map of this.graphObject.mapping[0]) {
            valueArray = valueArray.concat(data.slice.map( d => d[getMappingKey(map,"column")]))
        }
        this.yScale = this.chartYScale.set(valueArray,minValue);

        for (let area of this.chartBackgroundAreas) {
            area.draw(data);
        }

        for (let line of this.chartLines) {
            line.draw(data)
        }

        // this.chartEndLabels.forEach( (l,i) => {
        //     const text = (this.graphObject.config.extra.label === 'value') ? data.slice[data.slice.length - 1][this.yParameter].toString() : getMappingKey(this.graphObject.mapping[0][i],"label");
        //     l.draw(getMappingKey(this.graphObject.mapping[0][i],"label"),text);
        // });

        if (this.graphObject.config.extra.hasFocus) {
            this.chartFocus.draw();
        }
    }

    update(data: GraphData, segment: string, update: boolean) {

        super._update(data,segment,update);

    }
}

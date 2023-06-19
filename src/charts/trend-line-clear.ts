
import { ChartBackgroundArea, ChartFocusTime, ChartLineAccentTime } from "../svg-elements/module";
import { HtmlLegendDots } from "../html-elements/module";

import { DataPart, GraphData } from "../types/data";
import { flattenColumn, getMappingKey } from "../d3-services/_helpers";
import { filterWeeks, getNeededColumnsForHistoryV2 } from "../d3-services/data-with-history.functions";
import { GraphControllerV2 } from "./graph-v2";
import { IGraphMapping } from "../types/mapping";

export default class TrendLineClear extends GraphControllerV2 {

    chartAxis;
    chartLines = [];
    // chartBackgroundAreas = [];
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
        public mapping: IGraphMapping,
        public segment: string  
    ) {
        super(main,data,element,mapping,segment);
        this.pre();
    }

    pre() {

        this._addScale('x','time','horizontal','_date');
        this._addScale('y','linear','vertical',flattenColumn(this.firstMapping['column']));

        this._addAxis('x','x','bottom');
        this._addAxis('y','y','left',this.firstMapping['format']);

        this._addMargin(20,60,0,0);
        this._addPadding(0,0,30,0);
    }

    init() {

        super._init();

        this.config.extra.xScaleTicks = "quarterly";

        const svgId = "svg-wrapper-" + this.mapping.slug
        const container = document.createElement('section');
        container.style.height = "240px";
        container.style.width = "100%";
        container.id = svgId;
        this.element.appendChild(container);

        super._svg(container);

        for (let i = 0;  i < this.mapping.parameters[0].length; i++) {

            this.chartLines.push(new ChartLineAccentTime(this, getMappingKey(this.mapping.parameters[0][i],"column"), getMappingKey(this.mapping.parameters[0][i],"colour")));
            // this.chartBackgroundAreas.push(new ChartBackgroundArea(this, getMappingKey(this.mapping.parameters[0][i],"column"), getMappingKey(this.mapping.parameters[0][i],"colour")))
        }

        this.chartFocus = new ChartFocusTime(this);
        this.legend = new HtmlLegendDots(this);

        this.update(this.data,this.segment, false);
    }

    prepareData(data: DataPart[]) : GraphData  {

        const neededColumns = getNeededColumnsForHistoryV2(data, this.mapping);
        let history = filterWeeks(data,neededColumns);

        history.forEach( (w) => w['colour'] = getMappingKey(this.firstMapping,"colour")) 

        if(this.mapping.args && this.mapping.args[0]) {
            history = history.filter( (week) =>
                new Date(week._date) > new Date(this.mapping.args[0])
            );
        }


        return {
            "history" : history.slice(2, history.length),
            "latest" : data[0], 
            "slice" : history.slice(2, history.length) 
        }
    }

    redraw(data: GraphData) {

        super.redraw(data);

        // for (let area of this.chartBackgroundAreas) {
        //     area.redraw(data);
        // }

        for (let line of this.chartLines) {
            line.redraw()
        }

        this.chartFocus.redraw(data);
    }

    draw(data: GraphData) {

        console.log(data.slice);

        this.scales.x.set(data.slice.map(d => new Date(d[this.parameters.x])));

        let minValue = this.config.extra.minValue || 0; // d3.min(data.map(d => ((d[this.yParameter]) * .85)));
        let valueArray = []
        for (let map of this.mapping.parameters[0]) {
            valueArray = valueArray.concat(data.slice.map( d => d[getMappingKey(map,"column")]))
        }
        this.scales.y.set(valueArray,minValue);

        // for (let area of this.chartBackgroundAreas) {
        //     area.draw(data);
        // }

        for (let line of this.chartLines) {
            line.draw(data)
        }

        this.chartFocus.draw();
    }

    update(data: GraphData, segment: string, update: boolean) {

        super._update(data,segment,update);

    }
}

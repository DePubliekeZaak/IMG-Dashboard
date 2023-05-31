
import { ChartBackgroundArea, ChartFocusV2, ChartLineMiddled, ChartLine, ChartLineAccentTime, ChartLineVV, ChartEndLabel } from "@local/elements";
import { HtmlLegendDots } from "@local/elements";

import { DataPart, GraphData } from "@local/d3_types";
import { flattenColumn, getMappingKey } from "@local/d3-services";
import { filterWeeks, getNeededColumnsForHistoryV2 } from "../../d3-services/data-with-history.functions";
import { GraphControllerV2 } from "@local/d3_graphs";
import { IGraphMapping } from "@local/d3_types";

export default class TrendLineSmooth extends GraphControllerV2 {

    chartAxis;
    chartLines = [];
    chartBackgroundAreas = [];
    vvLine;
    chartLabels = [];
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

        this._addScale('x','linear','horizontal','_index');
        this._addScale('y','linear','vertical',flattenColumn(this.firstMapping['column']));

        this._addAxis('x','x','bottom','weekly');
        this._addAxis('y','y','left',this.firstMapping['format']);

        this._addMargin(20,60,0,0);
        this._addPadding(0,0,30,0);
    }

    init() {

        super._init();

        this.config.extra.xScaleTicks = "quarterly";

        const svgId = "svg-wrapper-" + this.mapping.slug
        const container = document.createElement('section');
        container.style.height = "480px";
        container.style.width = "100%";
        container.id = svgId;
        this.element.appendChild(container);

        super._svg(container);

        for (let i = 0;  i < this.mapping.parameters[0].length; i++) {

            this.chartLines.push(new ChartLine(this, '_4weekavg_' + getMappingKey(this.mapping.parameters[0][i],"column"), getMappingKey(this.mapping.parameters[0][i],"colour")));
            this.chartLabels.push(new ChartEndLabel(this, '_4weekavg_' + getMappingKey(this.mapping.parameters[0][i],"column"),getMappingKey(this.mapping.parameters[0][i],"label"), getMappingKey(this.mapping.parameters[0][i],"colour")));
        //    this.chartBackgroundAreas.push(new ChartBackgroundArea(this, getMappingKey(this.mapping.parameters[0][i],"column"), getMappingKey(this.mapping.parameters[0][i],"colour")))
        }

        this.vvLine = new ChartLineVV(this,"","black")

        this.chartFocus = new ChartFocusV2(this);
        this.legend = new HtmlLegendDots(this);

        this.update(this.data,this.segment, false);
    }

    

    prepareData(data: DataPart[]) : GraphData  {

       // console.log(data);

        const middle = (d,i,data,yParameter) => {

            if (i > 3 && i < data.length) {

                let v = (data[i - 3][yParameter] + data[i - 2][yParameter] + data[i - 1][yParameter] + data[i][yParameter]) / 4;
                return v;

            } else {
                return data[i][yParameter];
            }
        }

        const neededColumns = getNeededColumnsForHistoryV2(data, this.mapping);
        let history = filterWeeks(data,neededColumns);

        if(this.mapping.args && this.mapping.args[0]) {
            history = history.filter( (week) =>
                new Date(week._date) > new Date(this.mapping.args[0])
            ).sort((a: any, b: any) => {
                return new Date(a._date) > new Date(b._date) ? 1 : -1;
            });
        }

        history.forEach( (week, i) => { 
            
            week['_index'] = i;
             
            for (let c of neededColumns.filter( (c) => ["_date","_week","_month","_year"].indexOf(c) < 0)) {
                week['_4weekavg_' + c] = middle(week,i,history,c);
            }

            week['colour'] = getMappingKey(this.firstMapping,"colour") 
        });

        

        return {
            "history" : history.slice(1, history.length),
            "latest" : history[history.length - 1], 
            "slice" : history.slice(1, history.length) 
        }
    }

    redraw(data: GraphData) {

        super.redraw(data);

        for (let line of this.chartLines) {
            line.redraw()
        }

        for (let label of this.chartLabels) {
            label.redraw(data.latest)
        } 

        this.vvLine.redraw();

        this.chartFocus.redraw(data);
    }

    draw(data: GraphData) {

        this.scales.x.set(data.slice.map(d => d[this.parameters.x]));

        let minValue = this.config.extra.minValue || 0; // d3.min(data.map(d => ((d[this.yParameter]) * .85)));
        let valueArray = []
        for (let map of this.mapping.parameters[0]) {
            valueArray = valueArray.concat(data.slice.map( d => d[getMappingKey(map,"column")]))
        }
        this.scales.y.set([this.mapping.args[1]],minValue);

        for (let label of this.chartLabels) {
            label.draw(data);
        }

        for (let line of this.chartLines) {
            line.draw(data)
        }

        this.vvLine.draw(data);

        this.chartFocus.draw();
    }

    update(data: GraphData, segment: string, update: boolean) {

        super._update(data,segment,update);

    }
}

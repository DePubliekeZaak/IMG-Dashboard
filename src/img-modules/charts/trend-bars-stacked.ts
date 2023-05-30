
import { ChartBarTrend, ChartFocusTime, ChartLineDashArray, ChartLineMiddled, ChartStackedBars } from "../svg-elements/module";
import { HtmlLegendDots } from "../html-elements/module";
import { flattenColumn, getMappingKey } from "../d3-services/_helpers";
import { filterWeeks, getNeededColumnsForHistoryV2 } from "../d3-services/data-with-history.functions";
import { GraphControllerV2 } from "@local/d3_graphs";
import { IGraphMapping, DataPart, GraphData} from "../d3-modules/_d3_types";
import { breakpoints } from "../img-modules/_styleguide";
import * as d3 from "d3";

export default class TrendBarsStacked extends GraphControllerV2 {

    chartAxis;
    keys: string[];
    stack: any;  //import("@types/d3-shape/index").Stack<any, { [key: string]: number; }, string>;
;
    chartBars = [];
    chartLines = [];
    chartStackedBars;
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

        this._addScale('x','linear','horizontal-reverse','_index');
        this._addScale('y','linear','vertical',flattenColumn(this.firstMapping['column']));

        this._addAxis('x','x','bottom','yearly');
        this._addAxis('y','y','left',this.firstMapping['format']);

        this._addMargin(20,60,0,0);
        this._addPadding(0,0,30,0);
    }

    init() {

        super._init();

        this.config.extra.xScaleTicks = "quarterly";

        const svgId = "svg-wrapper-" + this.mapping.slug
        const container = document.createElement('section');
        container.style.height = window.innerWidth < breakpoints.sm ? "200px" : "300px";
        container.style.width = "100%";
        container.id = svgId;
        this.element.appendChild(container);

        super._svg(container);

     
        this.chartStackedBars = new ChartStackedBars(this);
              //  this.chartLines.push(new ChartLineMiddled(this, getMappingKey(this.mapping.parameters[0][i],"column"), getMappingKey(this.mapping.parameters[0][i],"colour")));
        
        this.chartFocus = new ChartFocusTime(this);
        this.legend = new HtmlLegendDots(this);

        this.update(this.data,this.segment, false);
    }

    prepareData(data: DataPart[]) : GraphData  {

        const neededColumns = getNeededColumnsForHistoryV2(data, this.mapping);
        let history = filterWeeks(data,neededColumns);

        history.forEach( (week, i) => { 
            week['_index'] = i;
            week['colour'] = getMappingKey(this.firstMapping,"colour") 
        });

        
        let columnArray = this.mapping.parameters[0].map( m => (flattenColumn(m.column)));

        this.keys = Object.keys(history[0]).filter(key => {
            return columnArray.indexOf(key) > -1
        })

        this.stack = d3.stack()
            .keys(this.keys);

        return {
            "history" : history.slice(1, history.length),
            "latest" : data[0], 
            "slice" : history.slice(0, history.length).reverse(),
            "stacked": this.stack(history.reverse()) 
        }
    }

    redraw(data: GraphData) {

        super.redraw(data);
        this.chartStackedBars.redraw(data.stacked);
        this.chartFocus.redraw(data);
    }

    draw(data: GraphData) {

      

        this.scales.x.set(data.slice.map(d => d[this.parameters.x]));

        let minValue = 0; // d3.min(data.map(d => ((d[this.yParameter]) * .85)));
        let valueArray = []
        for (let week of data.slice) {

            let v = 0; 
            for (let map of this.mapping.parameters[0]) {

                 v = v + week[flattenColumn(map.column)]
             //   valueArray = valueArray.push(data.slice.map( d => d[getMappingKey(map,"column")]))
            }

            valueArray.push(v);
        }
        this.scales.y.set(valueArray,minValue);

        this.chartStackedBars.draw(data.stacked);

        this.chartFocus.draw();
    }

    update(data: GraphData, segment: string, update: boolean) {

        super._update(data,segment,update);

    }
}

import {ChartPie, SumLegend } from '../svg-elements/module';
import { DataPart, GraphData } from "../types/data";
import { parseForPieV2 } from "../d3-services/data.functions";
import { IGraphMapping } from "../types/mapping";
import { GraphControllerV2 } from "./graph-v2";

// const config : IGraphConfigV2=   {


//     "extra" :{
//         "currencyLabels" : false,
//         "legendWidth" : 220,
//         "maxRadius" : 100,
//         "innerRadius" : 20,
        
//     }
// };

export default class PieChartV2 extends GraphControllerV2  {

    graphEl;
    chartPie;
    colours;
    htmlMuniSelector;
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

        this._addMargin(0,15,0,0);
        this._addPadding(0,0,0,0);

        this.config.extra.municipalitySelect = false;
        
        this.config.extra.maxRadius = 100;
        this.config.extra.innerRadius = 20;
    }


    init() {

        let self = this;

        // create extra div to house graph -- so that legend does not influence height of graphContainer

        super._init();

        let svgId = "pie-element-" + this.mapping.slug
        let flowEl = document.createElement('div');
        flowEl.id = svgId;
        flowEl.style.width = '100%';
        flowEl.style.height = "260px"; // radius = 90 
        this.element.appendChild(flowEl);

        super._svg(flowEl);

        this.config.extra.legendWidth = this.dimensions.width > 240 ? 240 : this.dimensions.width;

        this.chartPie = new ChartPie(this);
        this.legend = new SumLegend(this)
        

        if(this.data[0][this.firstMapping['column']] != null) {

            this.update(this.data,this.segment, false);

        }
    }

    prepareData(data: DataPart[]) : GraphData {

        

        const slice = parseForPieV2(this.config,this.mapping,"all",data);

        return {
            latest: null,
            slice,
            history: null
        }   

        
    }

    draw(data: GraphData) {

        this.legend.draw(data);

        if(data[2] && data[2][0]) {

            let clonedData = JSON.parse(JSON.stringify(data));
            clonedData[0].unshift(clonedData[2][0]);
            this.chartPie.draw(clonedData[0]);

        } else {
            this.chartPie.draw(data.slice)
        }
    }

    redraw(data: GraphData) {

        super.redraw(data)
        this.legend.redraw(data.slice);
         
        this.chartPie.redraw();
    }

    update(data: GraphData, segment: string, update: boolean) {

        super._update(data,segment,update);
    }
}
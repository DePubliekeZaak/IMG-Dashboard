import { GraphController } from "./graph";

import {ChartPie, SumLegend } from '../svg-elements/module';
import { HtmlMuniSelector } from '../html-elements/module';

import { convertToCurrency } from '../d3-services/_helpers';
import { colours } from '../_styleguide/_colours';
import { GraphObject } from "../types/graphObject";
import { DataPart, GraphData } from "../types/data";
import { parseForPie } from "../d3-services/data.functions";



export default class PieChartSum extends GraphController  {

    graphEl;
    chartPie;
    colours;
    htmlMuniSelector;
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

        let self = this;

        // create extra div to house graph -- so that legend does not influence height of graphContainer

        super._init();

        let svgId = "pie-element-" + this.graphObject.slug
        let flowEl = document.createElement('div');
        flowEl.id = svgId;
        flowEl.style.width = '100%';
        flowEl.style.height = "260px"; // radius = 90 
        this.element.appendChild(flowEl);

        super._svg(flowEl);

        this.chartPie = new ChartPie(this);
        this.legend = new SumLegend(this)

        // let data = this.prepareData(this.data,'all');
    

        // this.htmlMuniSelector = new HtmlMuniSelector(this.element,'vergoedingen_taart_afgewezen'); // later koppelen aan GraphObject.slug

        // if(this.graphObject.config.extra.municipalitySelect) {
        //     this.htmlMuniSelector.draw();

        //     const municipalitySelect = document.querySelector('.municipality_select_' + 'vergoedingen_taart_afgewezen' ) as HTMLSelectElement;

        //     municipalitySelect.addEventListener("change", function () {
        //         self.update(self.data,municipalitySelect.options[municipalitySelect.selectedIndex].value, true);
        //     });
        // }

        this.update(this.data,this.segment, false);

    }

    prepareData(data: DataPart[]) : GraphData {

        const slice = parseForPie(this.graphObject,"all",data)

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
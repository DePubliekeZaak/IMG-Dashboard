import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxes } from '../chart-basics/module';

import { ChartAvgLine, ChartBackgroundArea, ChartRaggedLine, ChartWeekGrid } from '../svg-elements/module';
import {  HtmlCircle, HtmlHeader, HtmlLink, HtmlPopup, HtmlSegment } from '../html-elements/module';

import * as d3 from "d3";
import { breakpoints } from "../_styleguide/_breakpoints";
import {colours} from "../_styleguide/_colours";
import {convertToCurrency, flattenColumn, thousands} from "../d3-services/_helpers";
import { GraphController } from './graph';
import { GraphObject } from '../types/graphObject';
import { filterLatest, getNeededColumns } from '../d3-services/data.functions';
import { DataPart, GraphData } from '../types/data';

export default class TickerNumbers extends GraphController {

    htmlCircle;

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

        this.element.style.display = 'flex';
        this.element.style.flexDirection = 'row';
        this.element.style.flexWrap = 'wrap';
        this.element.style.flexDirection = 'column-reverse';
        this.element.style.justifyContent = 'space-between';
        this.element.style.alignItems = 'flex-start';
        this.element.style.lineHeight = '1.33';
        this.element.style.margin = 'auto';

        if (window.innerWidth < breakpoints.sm) {

            this.element.style.width = '100%';
            this.element.style.margin = '1.5rem auto';

        } else if  (window.innerWidth < breakpoints.md){

            this.element.style.flex = '0 0 50%';
            this.element.style.margin = '2rem auto 0 auto';
            this.element.style.height = '100%';

        } else {

            this.element.style.flexWrap = 'nowrap';
            this.element.style.flex = '0 0 25%';
            this.element.style.height = '100%';
        }

        if ([].slice.call(this.element.parentElement.parentElement.classList).indexOf('img-graph-container-ipad-6') > -1 ) {
            this.element.style.flex = '0 0 50%';
        }

        self.update(this.data,this.segment);
    }

    prepareData(data: DataPart[]) : GraphData  {

        let neededColumns = getNeededColumns(data,this.graphObject);

        return {
            "history" : null,
            "latest" : filterLatest(data,neededColumns), 
            "slice" : null
        }
    }

    redraw(data: GraphData) {

        // let value =  (this.graphObject.config.extra.decimal) ? data.latest[this.yParameter ] : convertToCurrency(Math.round(data.latest[this.yParameter ]));
        // let el = this.element.querySelector('.number') as HTMLElement;
        // el.innerText = (value > 9999) ? thousands(value) : value;
   }

    draw(data: GraphData) {

        let table = document.createElement('table');
        table.style.lineHeight = '1.55';
     
        for (let mapping of this.graphObject.mapping[0]) {

            let row = document.createElement('tr');

            let key = document.createElement('td'); 
            key.innerText = mapping['label'];
            key.setAttribute('width','120');
            row.appendChild(key);

            let value = document.createElement('td');
            
            let v: string = data.latest[flattenColumn(mapping.column)];

            switch (mapping.format) {

                case "currency": 
                    v = convertToCurrency(parseInt(v));
                    break;
                case "thousands":
                    v = thousands(v) + ' dossiers';
                    break;
                case "decimal" : 
                    console.log(v);
                    v = (Math.round(parseFloat(v) * 10) / 10).toString();

            }

            value.innerText = v;
            row.appendChild(value);
            table.appendChild(row);
        }

        this.element.appendChild(table)

    }

    update(newData,segment) {

        let self = this;

        let data = self.prepareData(newData);
        self.draw(data);
        self.redraw(data);
        window.addEventListener("resize", () => self.redraw(data), false);

    }

}

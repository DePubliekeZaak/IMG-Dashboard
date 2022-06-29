
import {ChartBarHorizontal } from '../svg-elements/module';
import { HtmlPeriodSelector, HtmlCircle} from '../html-elements/module';

import {getCompleteMonths} from "../utils/date-object.utils";
import { GraphController } from './graph';
import { GraphObject } from '../types/graphObject';
import { DataPart, GraphData } from '../types/data';
import { getNeededColumnsForHistory, groupByMonths } from '../d3-services/data-with-history.functions';

export default class KTORatings extends GraphController {

    chartBar;
    htmlCircle;
    htmlPeriodSelector;

    constructor(
        public main: any,
        public data : any,
        public element : HTMLElement,
        public graphObject: GraphObject,
        public segment: string  
    ){
        super(main,data,element,graphObject,segment) 
    }

    init() {

        super._init();

        this.htmlCircle = new HtmlCircle(this.graphObject.config,this.graphObject.mapping,this.element,this.firstMapping);
        this.htmlCircle.draw();

        const svgId = "svg-wrapper-" + this.graphObject.slug
        const svgWrapper = document.createElement('div');
        svgWrapper.id = svgId;
        svgWrapper.classList.add('svg-wrapper');
        svgWrapper.style.height = "240px";
        this.element.appendChild(svgWrapper);

        this.htmlPeriodSelector = new HtmlPeriodSelector(this.element,this.graphObject.config.extra.slug); // later koppelen aan GraphObject.slug
        let column = Array.isArray(this.graphObject.mapping[1][1].column) ? this.graphObject.mapping[1][1].column[0] : this.graphObject.mapping[1][1].column;
        const completeMonths = getCompleteMonths(this.data).filter( (m) => m[column] !== undefined && m[column] !== null);
        this.htmlPeriodSelector.draw(completeMonths);

        super._svg(svgWrapper);
    
        this.chartBar = new ChartBarHorizontal(this);

        this.update(this.data, 'all', false);
    }

    prepareData(data: DataPart[]) :GraphData  {

        const neededColumns = getNeededColumnsForHistory(data, this.graphObject);
        const history = groupByMonths(data,neededColumns);

        const dataIndex = (this.segment === 'all') ? 1 : 2;
        const monthIndex = (this.segment === 'all') ? false : this.segment;

        let rapportcijfers = [];
     
        let hasEnoughData = true;
        let clearWeek = {};
        
        let selectedMonth = monthIndex ? history.find( (m) => m['_month'] === parseInt(monthIndex)) : history[0];

        ;
        if (this.graphObject.mapping[1]) {

            // @ts-ignore
            for (let mapping of this.graphObject.mapping[dataIndex]) {

                let column = Array.isArray(mapping.column) ? mapping.column[0] : mapping.column;

                let cijfer = {
                    label: mapping.label,
                    colour: mapping.colour,
                    value: selectedMonth[column]
                }

                if (this.graphObject.config.extra.columnForAverage) {
                    cijfer['no_respondents'] = (dataIndex == 1) ? selectedMonth[this.graphObject.config.extra.columnForAverage[0]] : selectedMonth[this.graphObject.config.extra.columnForAverage[1]]
                }
                
                rapportcijfers.push(cijfer);
            }
        }

        return { 
            "history" : history,
            "latest" : data[0], 
            "slice" : rapportcijfers
        };
    }

    redraw(data: GraphData) {

        

        // @ts-ignore
        let parameter = (this.segment === 'all') ? this.graphObject.mapping[0][0].column : this.graphObject.mapping[0][1].column;
        // @ts-ignore
        let extraParameter = (this.segment === 'all') ? this.graphObject.mapping[0][2].column : this.graphObject.mapping[0][3].column;
        this.htmlCircle.redraw([data.latest], parameter, extraParameter);

        super.redraw(data);
        
        this.chartBar.redraw(data);
    }

    draw(data : GraphData) {

        let self = this;
        this.xScale = this.chartXScale.set(data.slice.map(d => d['value']));
        this.yScale = this.chartYScale.set(data.slice.map(d => d['label']));

        this.chartBar.draw(data.slice);
        
        const periodSelect = document.querySelector('.period_select_' + this.graphObject.config.extra.slug ) as HTMLSelectElement;

        periodSelect.addEventListener("change", function () {
            self.update(self.data,periodSelect.options[periodSelect.selectedIndex].value,true);
        });

    }

    update(data: GraphData, segment: string, update: boolean) {

        this.segment = segment; 

        super._update(data,segment,update);

    }
}

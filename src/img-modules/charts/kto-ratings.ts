
import {ChartBarHorizontal } from '@local/elements';
import { HtmlPeriodSelector, HtmlCircle} from '@local/elements';

import {getCompleteMonths} from "../../utils/date-object.utils";
import { DataPart, GraphData } from '@local/d3_types';
import { getNeededColumnsForHistory, getNeededColumnsForHistoryV2, groupByMonths } from '@local/img-services';
import { GraphControllerV2 } from '@local/d3_graphs';
import { IGraphMapping } from '@local/d3_types';

export default class KTORatings extends GraphControllerV2 {

    chartBar;
    htmlCircle;
    htmlPeriodSelector;

    constructor(
        public main: any,
        public data : any,
        public element : HTMLElement,
        public mapping: IGraphMapping,
        public segment: string  
    ){
        super(main,data,element,mapping,segment);
        this.pre();
    }

    pre() {

        this._addScale("x","linear","horizontal","value");
        this._addScale("y","band","vertical","label");

        this._addPadding(20,0,20,80);
        this._addMargin(20,40,0,0);
    }

    init() {

        super._init();

        this.config.extra.decimal = true;
        this.config.extra.noRespondents = true;
        this.config.paddingInner = .25;
        this.config.paddingOuter = .25;

        this.htmlCircle = new HtmlCircle(this,this.element);
        this.htmlCircle.draw();

        const svgId = "svg-wrapper-" + this.mapping.slug
        const svgWrapper = document.createElement('div');
        svgWrapper.id = svgId;
        svgWrapper.classList.add('svg-wrapper');
        svgWrapper.style.height = "480px";
        svgWrapper.style.width = "100%";
        this.element.appendChild(svgWrapper);

        this.htmlPeriodSelector = new HtmlPeriodSelector(this.element,this.mapping.slug); // later koppelen aan GraphObject.slug
        let column = Array.isArray(this.mapping.parameters[1][1].column) ? this.mapping.parameters[1][1].column[0] : this.mapping.parameters[1][1].column;
        const completeMonths = getCompleteMonths(this.data).filter( (m) => m[column] !== undefined && m[column] !== null);
        this.htmlPeriodSelector.draw(completeMonths);

        super._svg(svgWrapper);

        this.chartBar = new ChartBarHorizontal(this);

        this.update(this.data, 'all', false);
    }

    prepareData(data: DataPart[]) :GraphData  {

        const neededColumns = getNeededColumnsForHistoryV2(data, this.mapping);
        const history = groupByMonths(data,neededColumns);

        const dataIndex = (this.segment === 'all') ? 1 : 2;
        const monthIndex = (this.segment === 'all') ? false : this.segment;

        let rapportcijfers = [];
     
        let hasEnoughData = true;
        let clearWeek = {};
        
        let selectedMonth = monthIndex ? history.find( (m) => m['_month'] === parseInt(monthIndex)) : history[0];

        if (this.mapping.parameters[1]) {

            // @ts-ignore
            for (let mapping of this.mapping.parameters[dataIndex]) {

                let column = Array.isArray(mapping.column) ? mapping.column[0] : mapping.column;

                let cijfer = {
                    label: mapping.label,
                    colour: mapping.colour,
                    value: selectedMonth[column]
                }

                if (this.mapping.args[0]) {
                    cijfer['no_respondents'] = (dataIndex == 1) ? selectedMonth[this.mapping.args[0]] : selectedMonth[this.mapping.args[1]]
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
        let parameter = (this.segment === 'all') ? this.mapping.parameters[0][0].column : this.mapping.parameters[0][1].column;
        // @ts-ignore
        let extraParameter = (this.segment === 'all') ? this.mapping.parameters[0][2].column : this.mapping.parameters[0][3].column;
        this.htmlCircle.redraw([data.latest], parameter, extraParameter);

        super.redraw(data);
        
        this.chartBar.redraw(data);
    }

    draw(data : GraphData) {

        let self = this;
        this.xScale = this.scales.x.set(data.slice.map(d => d['value']));
        this.yScale = this.scales.y.set(data.slice.map(d => d['label']));

        this.chartBar.draw(data.slice);
        
        const periodSelect = document.querySelector('.period_select_' + this.mapping.slug ) as HTMLSelectElement;

        periodSelect.addEventListener("change", function () {
            self.update(self.data,periodSelect.options[periodSelect.selectedIndex].value,true);
        });

    }

    update(data: GraphData, segment: string, update: boolean) {

        this.segment = segment; 

        super._update(data,segment,update);

    }
}

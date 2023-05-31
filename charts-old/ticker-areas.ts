import { ChartBackgroundAreas, ChartRaggedLine  } from '@local/elements';

import { breakpoints } from "@local/styleguide";
import { flattenColumn } from '@local/d3-services';
import { filterWeeks, getNeededColumnsForHistory, getNeededColumnsForHistoryV2 } from '../../d3-services/data-with-history.functions';
import { DataPart, GraphData } from '@local/d3_types';
import { GraphControllerV2 } from '@local/d3_graphs';
import { IGraphMapping } from '@local/d3_types';

export default class TickerAreas extends GraphControllerV2   {

    chartLine;
    chartBackgroundAreas;
    chartWeekGrid;

    constructor(
        public main: any,
        public data : any,
        public element : HTMLElement,
        public mapping: IGraphMapping,
        public segment: string  
    ) {
        super(main,data,element,mapping,segment);
    }

    init() {

        let self = this;

        this._init()

        this.styleMainElement();

        const labelContainer = document.createElement('div');
        labelContainer.style.width = '100%';
        labelContainer.style.textAlign = 'center';
        labelContainer.innerText = this.mapping.parameters[0][0].label;
        this.element.appendChild(labelContainer);

        if (window.innerWidth < breakpoints.sm) {

            labelContainer.style.height = '2rem';

        } else if (window.innerWidth < breakpoints.md) {

            labelContainer.style.height = '1.5rem';

        } else {

            labelContainer.style.height = '2.5rem';
        }

        const numberContainer = document.createElement('div');
        numberContainer.style.width = 'calc(50% - .5rem)';
        numberContainer.style.height = '3.75rem';
        numberContainer.style.display = 'flex';
        numberContainer.style.flexDirection = 'column';
        numberContainer.style.alignItems = 'flex-start';

        const number = document.createElement('div');
        number.innerText = this.data[0][flattenColumn(this.mapping.parameters[0][0].column)];
        number.style.fontSize = '3rem';
        number.style.lineHeight = ".9";
        number.style.fontFamily = "Replica";
        numberContainer.appendChild(number);

        const units = document.createElement('div');
        units.innerText = this.config.extra.units
        numberContainer.appendChild(units);

        this.element.appendChild(numberContainer);

        let graphWith;
        if (window.innerWidth < breakpoints.md ) { graphWith = 'calc(50% - 1rem)' } else
        if (window.innerWidth < breakpoints.lg ) { graphWith = '100px' } else
        { graphWith = '130px'  }

        const graphContainer = document.createElement('div');
        graphContainer.style.width = graphWith;
        graphContainer.style.height = '4rem';
        this.element.appendChild(graphContainer);

        this.config.paddingInner = 0;
        this.config.paddingOuter = 0;

        this._svg(graphContainer)

        this.chartLine = new ChartRaggedLine(this);
        this.chartBackgroundAreas = new ChartBackgroundAreas(this);

        this.update(this.data,this.segment, false);

    }

    styleMainElement() {

        this.element.style.position = 'relative';
        this.element.style.display = 'flex';
        this.element.style.flexDirection = 'row-reverse';
        this.element.style.flexWrap = 'wrap';

        this.element.style.justifyContent = 'space-between';

        if (window.innerWidth < breakpoints.sm) {

            this.element.style.width = '100%';
            this.element.style.margin = '1.5rem auto';
            //    this.element.style.height = '9.5rem';

        } else if  (window.innerWidth < breakpoints.md){

            this.element.style.flex = '0 0 50%';
            this.element.style.margin = '2rem auto 0 auto';
            this.element.style.height = '100%';

        } else {

            this.element.style.flex = 'auto';
            this.element.style.height = '100%';
        }
    }

    prepareData(data: DataPart[]) : GraphData  {

        const neededColumns = getNeededColumnsForHistoryV2(data,this.mapping);
        const history = filterWeeks(data,neededColumns);

        return {
            "history" : history.slice(1, history.length),
            "latest" : data[0], 
            "slice" : history.slice(0, 16) 
        }
    }

    redraw(data: GraphData) {

        this.yScale = this.scales.y.set(data.slice.map( d => d[this.parameters.y]));
        super.redraw(data);
        this.chartBackgroundAreas.redraw(data.slice, this.firstMapping['colour']);
    }

    draw(data: GraphData) {

        this.xScale = this.scales.x.set(data.slice.map(d => d[this.parameters.x]));
        this.chartBackgroundAreas.draw(data.slice);
    }

    update(data: GraphData, segment: string, update: boolean) {
        super._update(data,segment,update);
    }
}

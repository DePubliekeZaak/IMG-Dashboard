import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxes } from '../chart-basics/module';

import { ChartBackgroundArea, ChartRaggedLine  } from '../svg-elements/module';

import { breakpoints } from "../_styleguide/_breakpoints";
import { GraphController } from './graph';
import { GraphObject } from '../types/graphObject';
import { flattenColumn } from '../d3-services/_helpers';
import { filterWeeks, getNeededColumnsForHistory } from '../d3-services/data-with-history.functions';
import { DataPart, GraphData } from '../types/data';



export default class Ticker extends GraphController   {

    chartLine;
    chartBackgroundArea;
    chartWeekGrid;
    // chartAvgLine;

    // htmlCircle;


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

        this._init()

        this.styleMainElement();

        const labelContainer = document.createElement('div');
        // labelContainer.classList.add('label_container');
        labelContainer.style.width = '100%';

        labelContainer.style.textAlign = 'center';
        labelContainer.innerText = this.graphObject.mapping[0][0].label;
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
        number.innerText = this.data[0][flattenColumn(this.graphObject.mapping[0][0].column)];
        number.style.fontSize = '3rem';
        number.style.lineHeight = ".9";
        number.style.fontFamily = "Replica";
        numberContainer.appendChild(number);

        const units = document.createElement('div');
        units.innerText = this.graphObject.config.extra.units
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


        this.graphObject.config.paddingInner = 0;
        this.graphObject.config.paddingOuter = 0;

        this._svg(graphContainer)

        this.chartLine = new ChartRaggedLine(this.graphObject.config, this.svg);
        this.chartBackgroundArea = new ChartBackgroundArea(this,this.yParameter,"moss");

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

        const neededColumns = getNeededColumnsForHistory(data,this.graphObject);
        const history = filterWeeks(data,neededColumns);

        return {
            "history" : history.slice(1, history.length),
            "latest" : data[0], 
            "slice" : history.slice(0, 16) 
        }
      
    }

    redraw(data: GraphData) {

        this.yScale = this.chartYScale.set(data.slice.map( d => d[this.yParameter]));

        super.redraw(data);

        this.chartBackgroundArea.redraw(data);
        // this.chartWeekGrid.redraw(this.xScale, this.yScale, this.dimensions, data, this.dataMapping[0].colour, this.yParameter);
   //     this.chartLine.redraw(this.xScale,this.yScale,this.dimensions,data,this.graphObject.mapping[0][0].colour,this.graphObject.config.xParameter, this.yParameter);
      //  this.chartAvgLine.redraw(this.xScale,this.yScale,this.dimensions,data,this.dataMapping[0].colour,this.yParameter);
    }

    draw(data: GraphData) {

        this.xScale = this.chartXScale.set(data.slice.map(d => d[this.xParameter]));
        this.chartBackgroundArea.draw(data);
      //  this.chartLine.draw(data.slice);
    }

    update(data: GraphData, segment: string, update: boolean) {
        super._update(data,segment,update);
    }
}

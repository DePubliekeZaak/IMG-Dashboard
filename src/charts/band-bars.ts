import { ChartAxes } from '../chart-basics/module';

import { ChartBar } from '../svg-elements/module';

import { GraphController } from './graph';
import { GraphObject } from '../types/graphObject';
import { D3DataTypeLatest, DataPart, GraphData } from '../types/data';

export default class BandBars extends GraphController {

    chartAxis;
    chartBar;

    yScale;
    xScale;
    bottomAxis;
    leftAxis;

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
        super._svg();

        this.graphObject.config.extra.paddingInner = .25;
      //  this.graphObject.config.extra.paddingOuter = .5;


        this.bottomAxis = new ChartAxes(this.graphObject.config, this.svg, 'bottom',this.chartXScale);
        this.leftAxis = new ChartAxes(this.graphObject.config, this.svg,'left',this.chartYScale);
        
        this.chartBar = new ChartBar(this);



        // this.htmlMuniSelector = new HtmlMuniSelector(this.element,'specials_band_bars'); // later koppelen aan GraphObject.slug

        // if (this.graphObject.config.extra.municipalitySelect) {

        //     this.htmlMuniSelector.draw();
        //     const municipalitySelect = document.querySelector('.municipality_select_' + 'specials_band_bars' ) as HTMLSelectElement;
        //     municipalitySelect.addEventListener("change", function () {
        //         self.update(self.data,municipalitySelect.options[municipalitySelect.selectedIndex].value);
        //     });
        // }

        this.update(this.data,(this.segment !== undefined) ? this.segment : "all", false);
    }

    prepareData(data: DataPart[]) : GraphData {

        let slice: D3DataTypeLatest[] = [];

        let d = (this.graphObject.config.extra.municipalitySelect || this.graphObject.config.multiples) ? data.find( j => j['gemeente'] === this.segment) : data[0];

        for (let mapping of this.graphObject.mapping[0]) {

            let column = Array.isArray(mapping) ? mapping[0].column : mapping.column;

            slice.push({
                    label: mapping.label,
                    colour: mapping.colour,
                    value: d[column],
                    gemeente: d['gemeente'],
                    _date: d['_date']

                }
            )
        }

        return { 
            "history" : null,
            "latest":  null, 
            "slice" : slice,
        };
    }

    draw(data: GraphData) {
    
        this.xScale = this.chartXScale.set(data.slice.map(d => d[this.xParameter]));
        this.chartBar.draw(data.slice);
    }


    redraw(data: GraphData) {

        this.yScale = this.chartYScale.set(this.graphObject.config.extra.yMax ? [this.graphObject.config.extra.yMax] : data.slice.map ( d => d[this.yParameter]));

        super.redraw(data);
        
        this.bottomAxis.redraw(this.graphObject.config.xScaleType, this.dimensions, this.xScale);
        this.leftAxis.redraw(this.graphObject.config.yScaleType, this.dimensions, this.yScale);
        // redraw data
        this.chartBar.redraw(data.slice);
    }

    
    update(data: GraphData, segment: string, update: boolean) {
        super._update(data,segment,update);
    } 
}

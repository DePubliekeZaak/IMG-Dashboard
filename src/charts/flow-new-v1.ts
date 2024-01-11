
import { breakpoints } from '../_styleguide/_breakpoints';
import { flattenColumn } from '../d3-services/_helpers';
import { filterLatest, getNeededColumns } from '../d3-services/data.functions';
import { ChartFlowFsV1 } from '../svg-elements/module';
import { DataPart, GraphData } from '../types/data';
import { IGraphMapping } from '../types/mapping';
import { GraphControllerV2 } from './graph-v2';


export default class FlowNewV1 extends GraphControllerV2   {

    parentEl;
    flow;

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


        this._addPadding(0,0,0,0);
        this._addMargin(0, 0,0,0);
    }

    init() {

        this.parentEl = this.element;

        super._init();

        console.log(window.innerWidth);
        const svgId = "svg-wrapper-" + this.mapping.slug
        const container = document.createElement('section');
        container.style.height = window.innerWidth < breakpoints.lg ? "0px" : "0px";
        container.style.width = "100%";
        container.id = svgId;
        this.element.appendChild(container);

        super._svg(container);

    }


    prepareData(data: DataPart[]) : any  { 

    

    }

    draw(data: GraphData) {

    //     const sum =  parseInt(Object.values(data.latest).reduce((sum, value) => sum + value, 0));

    //     this.scales.x.set([0,sum]); // + d['duration']).concat(0));

    //     this.flow.draw(data.latest);

    }

    redraw(data: GraphData) {


//         super.redraw(data);

//         setTimeout( () =>  {
//             this.flow.redraw(data);
//         }, 1);

    }

    update(data: GraphData, segment: string, update: boolean) {



        super._update(data,segment,update);

    }



}
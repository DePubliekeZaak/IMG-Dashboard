
import { flattenColumn } from '../d3-services/_helpers';
import { filterLatest, getNeededColumns } from '../d3-services/data.functions';
import { ChartFlowFsV1 } from '../svg-elements/module';
import { DataPart, GraphData } from '../types/data';
import { IGraphMapping } from '../types/mapping';
import { GraphControllerV2 } from './graph-v2';


export default class FlowFsV1 extends GraphControllerV2   {

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

        this._addScale("w","linear","horizontal");
        this._addPadding(0,0,0,0);
        this._addMargin(0, 0,0,0);
    }

    init() {

        this.parentEl = this.element;

        super._init();

        const svgId = "svg-wrapper-" + this.mapping.slug
        const container = document.createElement('section');
        container.style.height = "100%";
        container.style.width = "100%";
        // container.style.marginBottom = '3rem';
        container.id = svgId;
        this.element.appendChild(container);

        super._svg(container);

        this.flow = new ChartFlowFsV1(this);

        this.update(this.data,this.segment,false);

    }


    prepareData(data: DataPart[]) : GraphData  { 

        const columns = getNeededColumns(data, this.mapping);

        const d = filterLatest(data,columns);

        delete d._date; 

        return {
            slice : [d],
            history : [d],
            latest: d
        }
        

    }

    draw(data: GraphData) {

        const sum =  parseInt(Object.values(data.latest).reduce((sum, value) => sum + value, 0));

      
        this.scales.w.set([0,sum]); // + d['duration']).concat(0));

        this.flow.draw(data.latest);

    }

    redraw(data: GraphData) {


        super.redraw(data);

        console.log(this.dimensions);
        // set x and y scales 1:1 with screen pixels 
        // this.scales.x.set([0,this.dimensions.width]); // + d['duration']).concat(0));
        // this.scales.y.set([0,this.dimensions.height]); 

        setTimeout( () =>  {
            this.flow.redraw(data);
        }, 1);

    }

    update(data: GraphData, segment: string, update: boolean) {



        super._update(data,segment,update);

    }



}
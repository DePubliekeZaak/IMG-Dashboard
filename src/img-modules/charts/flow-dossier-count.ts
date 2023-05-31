import * as d3 from "d3";

import { ChartCircles, ChartFlowBetweenCircles } from "@local/elements";
import { breakpoints} from "@local/styleguide";
import { DataPart, GraphData } from "@local/d3_types";
import { filterWeeks, getNeededColumnsForHistoryV2 } from "@local/img-services";
import { parseOutflowData } from "@local/d3-services";
import { GraphControllerV2 } from "@local/d3_graphs";
import { IGraphMapping } from "@local/d3_types";

export default class FlowDossierCount extends GraphControllerV2 {


    rScale;
    oScale;

    chartDimensions;

    chartOScale;
    chartRScale;
    chartCircles;
    
    chartFlowBetweenCircles;

    simulation;



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

        this._addMargin(0,0,0,0);
        this._addPadding(30,0,0,0);

        this._addScale('r','radius','radius','value')
        this._addScale('o','radius','radius','outflow')
        if (window.innerWidth < breakpoints.sm) {
            this._addScale('x','band','vertical-reverse','label')
        } else {
            this._addScale('x','band','horizontal','label')
        }
    }

    init(){

        
        super._init();

        if (window.innerWidth < breakpoints.sm) {
            this.config.padding.left = 201;
            this.config.padding.right = 50;   
        }

        this.config.extra.radiusFactor = .4;
        this.config.extra.minRadius = 20;
        this.config.paddingInner = .5;
        this.config.paddingOuter = .5;

        let svgId = "flow-element"
        let flowEl = document.createElement('div');
        flowEl.id = svgId;
        flowEl.style.width = '100%';
        flowEl.style.minHeight = (window.innerWidth < breakpoints.sm) ? '80vh' : '400px';
        this.element.appendChild(flowEl);

        super._svg(flowEl);

        this.chartCircles = new ChartCircles(this);
        this.chartFlowBetweenCircles = new ChartFlowBetweenCircles(this);

        this.update(this.data,this.segment, false);

    }

    prepareData(data: DataPart[]) : GraphData {

        const neededColumns = getNeededColumnsForHistoryV2(data, this.mapping);
        const history = filterWeeks(data,neededColumns);
        
        const { flowData, outflowData } = parseOutflowData(data, this.mapping);

        return { 
            latest : null,
            slice:  null, 
            history,
            flowData,
            outflowData
        };
    }


    draw(data: GraphData) {

        let self = this;

        // eerst x as tekenen x scale = linear
        this.scales.x.set(data.flowData.map( (d) => d['label'])); // + d['duration']).concat(0));
        this.scales.r.set(data.flowData.map( (d) => d['value']));
        this.scales.o.set(data.flowData.map( (d) => d['outflow']));

        this.chartFlowBetweenCircles.draw(data.flowData);
        this.chartCircles.draw(data.flowData);

    }

    redraw(data: GraphData) {

        let self = this;

        let direction = window.innerWidth > breakpoints.sm ? 'horizontal' : 'vertical-reverse';

        super.redraw(data);

        this.chartCircles.redraw();

        let center = {x: (this.dimensions.width / 2) , y: (self.dimensions.height / 2) };
        let forceStrength = 0.025;

        this.simulation = d3.forceSimulation()
            .nodes(data.flowData);

        this.simulation
            .velocityDecay(0.5)
            .force('center', d3.forceCenter(center.x,center.y))
            .force('collide', d3.forceCollide().radius((d : any) => this.scales.r.scale(d.value)))
            .on('tick', () => {

                self.chartCircles.forceDirect();
                self.chartFlowBetweenCircles.forceDirect(data.flowData);
            });

        if (direction === 'horizontal') {
            this.simulation.force('y', d3.forceY().strength(forceStrength).y(center.y ))
        } else {
            this.simulation.force('x', d3.forceX().strength(forceStrength).x(center.x ))
        }

    }

    legend() {

            let self = this;

            let legendContainer = document.createElement("ul");
            legendContainer.classList.add("legend");
            legendContainer.style.display = 'flex';
            legendContainer.style.flexDirection = 'column';
            legendContainer.style.justifyContent = 'center';
            legendContainer.style.flexWrap =  'wrap';
            legendContainer.style.maxWidth = 'none';
            legendContainer.style.marginTop = '2rem';

            let li = document.createElement("li");
            li.classList.add("small-label");
            li.classList.add("large");
            li.innerText = "Het actuele aantal schademeldingen in de zes stappen in de procedure";

            let circle = document.createElement("span");
            circle.classList.add("circle");
            circle.classList.add("orange");
            li.insertBefore(circle,li.childNodes[0])

            legendContainer.appendChild(li);

            li = document.createElement("li");
            li.classList.add("small-label");
            li.innerHTML = "Het aantal dossiers dat in de afgelopen week naar de volgende stap is gegaan. <a onclick='toggleDurations(this)'> Klik hier voor de absolute getallen</a>.";
            li.classList.add("large");

            let tween = document.createElement("span");
            tween.classList.add("tween");
            tween.classList.add("light-grey");

            li.insertBefore(tween,li.childNodes[0])
            legendContainer.appendChild(li);

            this.element.appendChild(legendContainer);
    }

    update(data: GraphData, segment: string, update: boolean) {

        super._update(data,segment,update);

    }
}

function toggleDurations(el) {

    el.parentNode.parentNode.parentNode.querySelector('.data').classList.toggle('showturnover')
}

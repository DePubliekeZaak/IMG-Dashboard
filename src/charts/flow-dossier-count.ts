import * as d3 from "d3";
import { GraphController } from "./graph";
import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxes} from "../chart-basics/module";

import {
    ChartCircles,
    ChartBrackets,
    ChartFlowBetweenCircles,
    ChartStackedBarsNormalized
} from "../svg-elements/module";

import {
    HtmlHeader,
    HtmlLink,
    HtmlPopup,
} from "../html-elements/module";

import { breakpoints} from "../_styleguide/_breakpoints";
import { GraphObject } from "../types/graphObject";
import { DataPart, GraphData } from "../types/data";
import { filterWeeks, getNeededColumnsForHistory } from "../d3-services/data-with-history.functions";
import { parseOutflowData } from "../d3-services/data.functions";



export default class FlowDossierCount extends GraphController {


    rScale;
    oScale;

    // xAxis;

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
        public graphObject: GraphObject,
        public segment: string  
    ) {
        super(main,data,element,graphObject,segment);
    }

    init(){

       

        if (window.innerWidth < breakpoints.sm) {
            this.graphObject.config.padding.left = 201;
            this.graphObject.config.padding.right = 50;
            // this.config.extra.radiusFactor = 1;
        }

        super._init();

        let svgId = "flow-element"
        let flowEl = document.createElement('div');
        flowEl.id = svgId;
        flowEl.style.width = '100%';
        flowEl.style.minHeight = '400px';
        this.element.appendChild(flowEl);

        super._svg(flowEl);

        this.chartRScale = new ChartScale('radius', this.graphObject.config, this.dimensions);
        this.chartOScale = new ChartScale('radius', this.graphObject.config, this.dimensions);

        // this.xAxis = new ChartAxes(this.graphObject.config, this.svg,'bottom',this.chartXScale);
        // this.xAxis.draw();

        // kan ik circles hergebruiken?
        this.chartCircles = new ChartCircles(this);
        this.chartFlowBetweenCircles = new ChartFlowBetweenCircles(this);

        this.update(this.data,this.segment, false);

    }

    // initBars() {

    //     let barsEl = document.createElement('div');
    //     barsEl.style.width = '100%';
    //     barsEl.style.height = '160px';
    //     this.element.appendChild(barsEl);

    //     let barConfig = {

    //         "graphType" : "ChartStackedBarsNormalized",
    //         "xScaleType": "normalised",
    //         "yScaleType": "band",
    //         "xParameter": "",
    //         "yParameter": "",
    //         "padding": {
    //             "top": -10,
    //             "bottom": 0, // = ruimte onder ballen
    //             "left": 0,
    //             "right": 0
    //         },
    //         "margin": {
    //             "top": 0,
    //             "bottom": 80,
    //             "left": 0,
    //             "right": (window.innerWidth > breakpoints.bax) ?  100 : 80
    //         },
    //         "extra": {
    //             "paddingInner" : .5,
    //             "paddingOuter" : .5
    //         }
    //     }
    //     this.chartBarsSVG = new ChartSVG(barsEl,barConfig,this.dimensions,this.barsSVG);
    //     this.barChartDimensions = new ChartDimensions(barsEl,barConfig);
    //     this.barDimensions = this.chartDimensions.get(this.barDimensions);
    //     this.chartBarsXScale = new ChartScale('normalised',barConfig,this.barDimensions);
    //     this.chartBarsYScale = new ChartScale('band', barConfig,this.barDimensions);
    //     this.chartStackedBarsNormalized = new ChartStackedBarsNormalized(barConfig, this.barsSVG.layers);
    // }

    prepareData(data: DataPart[]) : GraphData {

        const neededColumns = getNeededColumnsForHistory(data, this.graphObject);
        const history = filterWeeks(data,neededColumns);
        
        const { flowData, outflowData } = parseOutflowData(data, this.graphObject);

        // this.keys = Object.keys(outflowData[0]).filter(key => {
        //     return ['serie'].indexOf(key) < 0
        // });

        // let stackNormalised = d3.stack()
        //     .offset(d3.stackOffsetExpand)
        //     .keys(self.keys);


        // let outflowDataNormalised = stackNormalised(outflowData);

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
        this.xScale = this.chartXScale.set(data.flowData.map( (d) => d[self.xParameter] + d['duration']).concat(0));
        this.rScale = this.chartRScale.set(data.flowData.map( (d) => d['value']));
        this.oScale = this.chartOScale.set(data.flowData.map( (d) => d['outflow']));

        this.chartFlowBetweenCircles.draw(data.flowData);
        this.chartCircles.draw(data.flowData);

        // if(this.chartStackedBarsNormalized) {
        //     this.barsXScale = this.chartBarsXScale.set([]);
        //     this.barsYScale = this.chartBarsYScale.set(this.props);
        //     this.chartStackedBarsNormalized.draw(flowData, outflowDataNormalised, []);
        // }
    }

    redraw(data: GraphData) {

        let self = this;

        let direction = window.innerWidth > breakpoints.sm ? 'horizontal' : 'vertical-reverse';

        super.redraw(data);

        this.rScale = this.chartRScale.reset('radius',this.dimensions,this.rScale);
        this.oScale = this.chartOScale.reset('flow',this.dimensions,this.oScale);

        this.chartCircles.redraw(this.rScale, direction);
     //   this.chartFlowBetweenCircles.redraw(data.flowData, direction);

        let center = {x: (this.dimensions.width / 2) , y: (self.dimensions.height / 2) };
        let forceStrength = 0.025;

        this.simulation = d3.forceSimulation()
            .nodes(data.flowData);

        this.simulation
            .velocityDecay(0.5)
            .force('center', d3.forceCenter(center.x,center.y))
            .force('collide', d3.forceCollide().radius((d : any) => this.rScale(d.value)))
            .on('tick', () => {

                self.chartCircles.forceDirect(self.rScale, direction);
                self.chartFlowBetweenCircles.forceDirect(data.flowData, self.rScale, self.oScale, direction);
            });

        if (direction === 'horizontal') {
            this.simulation.force('y', d3.forceY().strength(forceStrength).y(center.y ))
        } else {
            this.simulation.force('x', d3.forceX().strength(forceStrength).x(center.x ))
        }

        // if (this.chartStackedBarsNormalized) {
        //     this.barDimensions = this.barChartDimensions.get(this.barDimensions);
        //     this.chartBarsSVG.redraw(this.barDimensions);
        //     this.barsXScale = this.chartBarsXScale.reset('horizontal',this.barDimensions,this.barsXScale);
        //     this.barsYScale = this.chartBarsYScale.reset('vertical-reverse',this.barDimensions,this.barsYScale);
        //     this.chartStackedBarsNormalized.redraw(this.barDimensions, this.barsXScale, this.barsYScale, 'outflow');
        // }

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

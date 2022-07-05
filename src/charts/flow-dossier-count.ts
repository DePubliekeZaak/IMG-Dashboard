import * as d3 from "d3";
import { ChartScale } from "../chart-basics/module";

import { ChartCircles, ChartFlowBetweenCircles } from "../svg-elements/module";
import { breakpoints} from "../_styleguide/_breakpoints";
import { GraphObject } from "../types/graphObject";
import { DataPart, GraphData } from "../types/data";
import { filterWeeks, getNeededColumnsForHistory, getNeededColumnsForHistoryV2 } from "../d3-services/data-with-history.functions";
import { parseOutflowData } from "../d3-services/data.functions";
import { GraphControllerV2 } from "./graph-v2";
import { IGraphMapping } from "../types/mapping";

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
        this._addScale('x','band','horizontal','label')

            // "config": {

    //     "xScaleType": "linear",
    //     "yScaleType": false,
    //     "xParameter": "cumulativeDuration",
    //     "yParameter": "label",
 
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
        flowEl.style.minHeight = '400px';
        this.element.appendChild(flowEl);

        super._svg(flowEl);

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

        const neededColumns = getNeededColumnsForHistoryV2(data, this.mapping);
        const history = filterWeeks(data,neededColumns);
        
        const { flowData, outflowData } = parseOutflowData(data, this.mapping);

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
        this.scales.x.set(data.flowData.map( (d) => d['label'])); // + d['duration']).concat(0));
        this.scales.r.set(data.flowData.map( (d) => d['value']));
        this.scales.o.set(data.flowData.map( (d) => d['outflow']));

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

        this.chartCircles.redraw();
     //   this.chartFlowBetweenCircles.redraw(data.flowData, direction);

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

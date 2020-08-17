import * as d3 from "d3";
import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxes} from "../chart-basics/module";

import {
    ChartCircles,
    ChartBrackets,
    ChartFlowBetweenCircles,
    HtmlHeader,
    HtmlLink,
    HtmlPopup,
    ChartStackedBarsNormalized
} from "../chart-elements/module";

import { breakpoints} from "../_styleguide/_breakpoints";

export class FlowDossierCount {


    keys;
    props;
    element;
    dimensions;
    barDimensions;
    flowSVG;
    barsSVG;
    xScale;
    yScale;
    rScale;
    barsXScale;
    barsYScale;

    xAxis;

    chartDimensions;
    barChartDimensions;
    chartXScale;
    chartRScale;
    chartBarsXScale;
    chartBarsYScale;
    chartFlowSVG;
    chartBarsSVG;

    chartCircles;
    chartBrackets;
    chartFlowBetweenCircles;

    link;
    popup;
    htmlHeader;
    simulation;

    chartStackedBarsNormalized : any = false;
    normalizedStack;



    constructor(
        private data,
        private elementID,
        private config,
        private dataMapping,
        private description
    ) {
        this.element = d3.select(elementID).node();
        this.props = ['outflow'];
    }

    init(){


        let flowEl = document.createElement('div');
        flowEl.style.width = '100%';
        flowEl.style.minHeight = '400px';
        this.element.appendChild(flowEl);

        let self = this;

        let chartObjects = ChartObjects();

        this.config = Object.assign(chartObjects.config(), this.config);

        this.dimensions = chartObjects.dimensions();
        this.barDimensions = chartObjects.dimensions();
        this.flowSVG = chartObjects.svg();
        this.barsSVG = chartObjects.svg();

        // for mobile


        if (window.innerWidth < breakpoints.sm) {
            this.config.padding.left = 201;
            this.config.padding.right = 50;
            // this.config.extra.radiusFactor = 1;
        }


        this.chartDimensions = new ChartDimensions(flowEl,this.config);
        this.dimensions = this.chartDimensions.get(this.dimensions);
        this.chartFlowSVG = new ChartSVG(flowEl,this.config,this.dimensions,this.flowSVG);
        this.chartXScale = new ChartScale(this.config.xScaleType,this.config,this.dimensions);
        this.chartRScale = new ChartScale('radius', this.config, this.dimensions);

        // let chartYScale = ChartYScale(config,dimensions,yScale);
        this.xAxis = new ChartAxes(this.config, this.flowSVG,'bottom',this.chartXScale);

        // kan ik circles hergebruiken?
        this.chartCircles = new ChartCircles(this.config,this.flowSVG.layers);
      //  this.chartBrackets = new ChartBrackets(this.config,this.svg);flowSVG
        this.chartFlowBetweenCircles = new ChartFlowBetweenCircles(this.config,this.flowSVG.layers);

        if(window.innerWidth > breakpoints.md) {
            this.initBars();
        }

        this.xAxis.draw();

        if (this.config.extra.header) {
            this.htmlHeader = new HtmlHeader(this.element,this.config.extra.header);
            this.htmlHeader.draw();
        }

        this.popup = new HtmlPopup(this.element,this.description);

        this.update(this.data)

    }

    initBars() {

        let barsEl = document.createElement('div');
        barsEl.style.width = '100%';
        barsEl.style.height = '160px';
        this.element.appendChild(barsEl);

        let barConfig = {

            "graphType" : "ChartStackedBarsNormalized",
            "xScaleType": "normalised",
            "yScaleType": "band",
            "xParameter": "",
            "yParameter": "",
            "padding": {
                "top": -10,
                "bottom": 0, // = ruimte onder ballen
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 0,
                "bottom": 80,
                "left": 0,
                "right": (window.innerWidth > breakpoints.bax) ?  100 : 80
            },
            "extra": {
                "paddingInner" : .5,
                "paddingOuter" : .5
            }
        }
        this.chartBarsSVG = new ChartSVG(barsEl,barConfig,this.dimensions,this.barsSVG);
        this.barChartDimensions = new ChartDimensions(barsEl,barConfig);
        this.barDimensions = this.chartDimensions.get(this.barDimensions);
        this.chartBarsXScale = new ChartScale('normalised',barConfig,this.barDimensions);
        this.chartBarsYScale = new ChartScale('band', barConfig,this.barDimensions);
        this.chartStackedBarsNormalized = new ChartStackedBarsNormalized(barConfig, this.barsSVG.layers);
    }

    prepareData(newData) {

        let self = this;
        let flowData = [];
        let outflowData = [];

        for (let mapping of this.dataMapping) {

            flowData.push({

                label: mapping.label,
                colour: mapping.colour,  // de in between flows corresponderen met duration .. dus evt een kleur
                value: this.data[0][mapping.column] || 0,
                duration: 30,
                turnover: 0,
                outflow: this.data[0][mapping.outflow],
                cumulativeDuration: 0
            })
        }

        let sum = 0;

        for (let phase of flowData) {

            phase.cumulativeDuration = sum;
            sum += phase.duration;
        }

        for (let prop of this.props) {

            let obj = { 'serie' : prop };

            for (let mapping of this.dataMapping.slice(0,this.dataMapping.length - 1)) {
                obj[mapping.column] = this.data[0][mapping.outflow]
            }

            outflowData.push(obj)
        }

        this.keys = Object.keys(outflowData[0]).filter(key => {
            return ['serie'].indexOf(key) < 0
        });

        let stackNormalised = d3.stack()
            .offset(d3.stackOffsetExpand)
            .keys(self.keys);


        let outflowDataNormalised = stackNormalised(outflowData);

        return { flowData, outflowDataNormalised };
    }


    draw(flowData, outflowDataNormalised) {

        let self = this;

        // eerst x as tekenen x scale = linear
        this.xScale = this.chartXScale.set(flowData.map( (d) => d[self.config.xParameter] + d['duration']).concat(0));
        this.rScale = this.chartRScale.set(flowData.map( (d) => d.value));

        this.chartFlowBetweenCircles.draw(flowData);
        this.chartCircles.draw(flowData);

        if(this.chartStackedBarsNormalized) {
            this.barsXScale = this.chartBarsXScale.set([]);
            this.barsYScale = this.chartBarsYScale.set(this.props);
            this.chartStackedBarsNormalized.draw(flowData, outflowDataNormalised, []);
        }

     //   this.chartBrackets.draw(data);

    }

    redraw(flowData, outflowDataNormalised) {

        let self = this;

        let direction = window.innerWidth > breakpoints.sm ? 'horizontal' : 'vertical-reverse';

        this.dimensions = this.chartDimensions.get(this.dimensions);
        this.chartFlowSVG.redraw(this.dimensions);

        this.xScale = this.chartXScale.reset(direction,this.dimensions,this.xScale);
        this.rScale = this.chartRScale.reset('radius',this.dimensions,this.rScale);

      //  this.xAxis.redrawXLinearAxisBottom(this.xScale,this.dimensions);

        this.chartCircles.redraw(flowData,this.dimensions,this.rScale,this.xScale, direction);
    //    this.chartBrackets.redraw(data,this.dimensions,this.rScale,this.xScale)
        this.chartFlowBetweenCircles.redraw(flowData,this.dimensions,this.rScale,this.xScale, direction);

        let center = {x: (this.dimensions.width / 2) , y: (self.dimensions.height / 2) };
        let forceStrength = 0.025;

        this.simulation = d3.forceSimulation()
            .nodes(flowData);

        this.simulation
            .velocityDecay(0.5)
            .force('center', d3.forceCenter(center.x,center.y))
            .force('collide', d3.forceCollide().radius((d : any) => this.rScale(d.value)))
            .on('tick', () => {

                self.chartCircles.forceDirect(self.xScale, self.rScale, flowData, direction);
                self.chartFlowBetweenCircles.forceDirect(self.xScale, self.rScale, flowData, direction);
            });

        if (direction === 'horizontal') {
            this.simulation.force('y', d3.forceY().strength(forceStrength).y(center.y ))
        } else {
            this.simulation.force('x', d3.forceX().strength(forceStrength).x(center.x ))
        }

        if (this.chartStackedBarsNormalized) {
            this.barDimensions = this.barChartDimensions.get(this.barDimensions);
            this.chartBarsSVG.redraw(this.barDimensions);
            this.barsXScale = this.chartBarsXScale.reset('horizontal',this.barDimensions,this.barsXScale);
            this.barsYScale = this.chartBarsYScale.reset('vertical-reverse',this.barDimensions,this.barsYScale);
            this.chartStackedBarsNormalized.redraw(this.barDimensions, this.barsXScale, this.barsYScale, 'outflow');
        }

    }

    legend(data,elementID) {

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

    update(newData) {

        let self = this;
        let { flowData, outflowDataNormalised } = this.prepareData(newData);

        this.draw(flowData, outflowDataNormalised);
        this.redraw(flowData, outflowDataNormalised);
        window.addEventListener("resize", () => self.redraw(flowData, outflowDataNormalised), false);
    }
}

function toggleDurations(el) {

    el.parentNode.parentNode.parentNode.querySelector('.data').classList.toggle('showturnover')
}
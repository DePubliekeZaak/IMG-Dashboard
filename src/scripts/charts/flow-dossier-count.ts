import * as d3 from "d3";
import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxes} from "../chart-basics/module";

import { ChartCircles, ChartBrackets, ChartFlowBetweenCircles, HtmlHeader, HtmlLink, HtmlPopup } from "../chart-elements/module";

import { breakpoints} from "../_styleguide/_breakpoints";

export class FlowDossierCount {


    element;
    dimensions;
    svg;
    xScale;
    yScale;
    rScale;

    xAxis;

    chartDimensions;
    chartXScale;
    chartRScale;
    chartSVG;

    chartCircles;
    chartBrackets;
    chartFlowBetweenCircles;

    link;
    popup;
    htmlHeader;
    simulation;

    constructor(
        private data,
        private elementID,
        private config,
        private dataMapping,
        private description
    ) {
        this.element = d3.select(elementID).node();
    }

    init(){

        let self = this;

        let chartObjects = ChartObjects();

        this.config = Object.assign(chartObjects.config(), this.config);

        this.dimensions = chartObjects.dimensions();
        this.svg = chartObjects.svg();

        // for mobile


        if (window.innerWidth < breakpoints.sm) {
            this.config.padding.left = 200;
            this.config.padding.right = 50;
            // this.config.extra.radiusFactor = 1;
        }


        this.chartDimensions = new ChartDimensions(this.element,this.config);
        this.dimensions = this.chartDimensions.get(this.dimensions);

        this.chartSVG = new ChartSVG(this.element,this.config,this.dimensions,this.svg);

        this.chartXScale = new ChartScale(this.config.xScaleType,this.config,this.dimensions);
        this.chartRScale = new ChartScale('radius', this.config, this.dimensions);


        // let chartYScale = ChartYScale(config,dimensions,yScale);
        this.xAxis = new ChartAxes(this.config, this.svg,'bottom',this.chartXScale);


        // kan ik circles hergebruiken?
        this.chartCircles = new ChartCircles(this.config,this.svg.layers);
      //  this.chartBrackets = new ChartBrackets(this.config,this.svg);
        this.chartFlowBetweenCircles = new ChartFlowBetweenCircles(this.config,this.svg.layers);

        this.xAxis.draw();

        // let { data } = this.prepareData();
        //
        // this.draw(data);
        // this.redraw(data);
        // this.legend(data,this.elementID);


        if (this.config.extra.header) {
            this.htmlHeader = new HtmlHeader(this.element,this.config.extra.header);
            this.htmlHeader.draw();
        }

        this.popup = new HtmlPopup(this.element,this.description);

        this.update(this.data)

     //   this.link = new HtmlLink(this.element,'doorlooptijden','');
    }

    prepareData(newData) {

        let data = [];

        for (let mapping of this.dataMapping) {

            data.push({

                label: mapping.label,
                colour: 'blue',  // de in between flows corresponderen met duration .. dus evt een kleur
                value: this.data[0][mapping.column],
                duration: 30,
                turnover: 0,
                inflow: 0,
                cumulativeDuration: 0
            })

        }

        let sum = 0;

        for (let phase of data) {

            phase.cumulativeDuration = sum;
            sum += phase.duration;
        }

        return data;
    }


    draw(data) {

        let self = this;

        // eerst x as tekenen x scale = linear
        this.xScale = this.chartXScale.set(data.map( (d) => d[self.config.xParameter] + d['duration']).concat(0));
        this.rScale = this.chartRScale.set(data.map( (d) => d.value));



        this.chartFlowBetweenCircles.draw(data)
        this.chartCircles.draw(data);
     //   this.chartBrackets.draw(data);

    }

    redraw(data) {

        let self = this;

        let direction = window.innerWidth > breakpoints.sm ? 'horizontal' : 'vertical-reverse';

        this.dimensions = this.chartDimensions.get(this.dimensions);
        this.chartSVG.redraw(this.dimensions);

        this.xScale = this.chartXScale.reset(direction,this.dimensions,this.xScale);
        this.rScale = this.chartRScale.reset('radius',this.dimensions,this.rScale)

      //  this.xAxis.redrawXLinearAxisBottom(this.xScale,this.dimensions);

        this.chartCircles.redraw(data,this.dimensions,this.rScale,this.xScale, direction);
    //    this.chartBrackets.redraw(data,this.dimensions,this.rScale,this.xScale)
        this.chartFlowBetweenCircles.redraw(data,this.dimensions,this.rScale,this.xScale, direction);

        let center = {x: (this.dimensions.width / 2) , y: ((this.dimensions.height / 2) + 0) };
        let forceStrength = 0.025;

        this.simulation = d3.forceSimulation()
            .nodes(data);

        this.simulation
            .velocityDecay(0.5)
            .force('center', d3.forceCenter(center.x,center.y))
            .force('collide', d3.forceCollide().radius((d : any) => this.rScale(d.value)))
            .on('tick', () => {

                self.chartCircles.forceDirect(self.xScale, self.rScale, data, direction);
                self.chartFlowBetweenCircles.forceDirect(self.xScale, self.rScale, data, direction);
            });

        if (direction === 'horizontal') {

            this.simulation.force('y', d3.forceY().strength(forceStrength).y(center.y ))
        } else {
            this.simulation.force('x', d3.forceX().strength(forceStrength).x(center.x ))
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
            li.prepend(circle);

            legendContainer.appendChild(li);

            li = document.createElement("li");
            li.classList.add("small-label");
            li.innerHTML = "Het aantal dossiers dat in de afgelopen week naar de volgende stap is gegaan. <a onclick='toggleDurations(this)'> Klik hier voor de absolute getallen</a>.";
            li.classList.add("large");

            let tween = document.createElement("span");
            tween.classList.add("tween");
            tween.classList.add("light-grey");

            li.prepend(tween);
            legendContainer.appendChild(li);

            this.element.appendChild(legendContainer);
    }

    update(newData) {

        let self = this;
        let data = this.prepareData(newData);
        this.draw(data);
        this.redraw(data);
        window.addEventListener("resize", () => self.redraw(data), false);
    }
}

function toggleDurations(el) {

    el.parentNode.parentNode.parentNode.querySelector('.data').classList.toggle('showturnover')
}
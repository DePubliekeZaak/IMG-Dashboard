import { ChartObjects, ChartSVG, ChartDimensions, ChartScale, ChartAxes } from '../chart-basics/module';
import { colours} from "../_styleguide/_colours";

import {
    ChartCircleGroups,
    HtmlHeader,
    HtmlPopup
} from '../chart-elements/module';


import * as d3 from "d3";
import * as _ from "lodash";
import {breakpoints} from "../_styleguide/_breakpoints";

export class Ballenbak {

    element;
    yParameter;
    dimensions;
    svg;
    rScale;
    xScale;
    yScale;
    bottomAxis;
    leftAxis;

    chartDimensions;
    chartSVG;
    chartXScale;
    chartYScale;
    chartRScale;
    chartAxes;
    chartCircleGroups;
    htmlHeader;

    link;
    simulation = {};
    groupCount;
    popup;

    constructor(
        private data : any,
        private elementID : string,
        private config : any,
        private dataMapping : [any],
        private description : string
    ) {
        this.element = d3.select(this.elementID).node();
        this.yParameter = this.dataMapping[0].column;
        this.config.yParameter = this.dataMapping[0].column;
    }


    init() {

        let self = this;

        let chartObjects = ChartObjects();
        this.config = Object.assign(chartObjects.config(),this.config);
        this.dimensions = chartObjects.dimensions();
        this.svg = chartObjects.svg();

        this.config.paddingInner = 0;
        this.config.paddingOuter = 0;

        // get dimensions from parent element
        this.chartDimensions = new ChartDimensions(this.element, this.config);
        this.dimensions = this.chartDimensions.get(this.dimensions);

        // create svg elements without data
        this.chartSVG = new ChartSVG(this.elementID, this.config, this.dimensions, this.svg);
        this.chartXScale = new ChartScale(this.config.xScaleType, this.config, this.dimensions);
        this.chartYScale = new ChartScale(this.config.xScaleType, this.config, this.dimensions);
        this.chartRScale = new ChartScale('radius', this.config, this.dimensions);
        this.bottomAxis = new ChartAxes(this.config, this.svg, 'bottom',this.chartXScale);
        this.leftAxis = new ChartAxes(this.config, this.svg,'left',this.chartRScale);
        this.htmlHeader = new HtmlHeader(this.element,this.config.extra.header);

        this.chartCircleGroups = new ChartCircleGroups(this.config, this.svg.layers);

        this.bottomAxis.draw();
        this.leftAxis.draw();
        this.htmlHeader.draw();

        self.update(this.data);
    }

    prepareData(newData)  {

        let data = [];
        let flattenedData = [];

        for (let entry of this.dataMapping) {


            // for (let p of group) {

            if (entry.column && Number.isInteger(newData[0][entry.column] )) {

                entry.value = newData[0][entry.column];

                flattenedData.push(newData[0][entry.column]);
            }

            data.push(entry);
        }

        let groupedData = Object.values(_.groupBy(data, d => d.group));

        this.groupCount = groupedData.length;

        return { data, groupedData, flattenedData };

    }

    legend(data) {

        // if (window.innerWidth < 640 || this.config.smallMultiple) {

            let legend = document.createElement('div');
            legend.classList.add('legend');
            legend.style.display = 'flex';
            legend.style.flexDirection = (window.innerWidth > breakpoints.sm) ? 'row' : 'column';
            legend.style.justifyContent = 'center';
            legend.style.width = '100%';
            legend.style.marginBottom = (window.innerWidth > breakpoints.sm) ? '2rem' : '1rem';
            legend.style.marginLeft = (window.innerWidth > breakpoints.sm) ? '0' : '60px';
            legend.style.marginRight = (window.innerWidth > breakpoints.sm) ? '0' : 'auto';

        data[0].forEach( (d,i) => {

                let item = document.createElement('div');
                item.style.display = 'flex';
                item.style.flexDirection = 'row';
                item.style.alignItems = 'center';
                item.style.marginRight = '2rem';

                let circle = document.createElement('span');
                circle.style.width = '.75rem';
                circle.style.height = '.75rem';
                circle.style.borderRadius = '50%';
                circle.style.marginRight = '.5rem';
                circle.style.display = 'inline-block';
                circle.style.background = colours[d['colour']][0];
                item.appendChild(circle);

                let label = document.createElement('span');
                label.style.fontFamily = "NotoSans Regular";
                label.style.fontSize = '.8rem';
                label.innerText = d['label'];
                item.appendChild(label);

                legend.appendChild(item);

            });

            this.element.appendChild(legend);
    }

    draw(data,groupedData,flattenedData) {

        let self = this;

        // with data we can init scales
        this.xScale = this.chartXScale.set(_.uniq(data.map( (d) => d.group)));
        this.yScale = this.chartYScale.set(_.uniq(data.map( (d) => d.group)));
        this.rScale = this.chartRScale.set(flattenedData) // = radius !!
        this.chartCircleGroups.draw(groupedData);

        for (let group of groupedData) {

            this.simulation[group[0].group] = d3.forceSimulation()
                .nodes(group.filter( (prop) => { return prop.value > 0 } ));

            this.initializeForces(group);

            this.simulation[group[0].group].on('tick', () => {

                self.chartCircleGroups.forceDirect(self.xScale, self.yScale, self.rScale);

            });
        }
    }

    redraw(groupedData) {

        let self = this;

        // on redraw chart gets new dimensions
        this.dimensions = this.chartDimensions.get(this.dimensions);
        this.chartSVG.redraw(this.dimensions);

        this.xScale = this.chartXScale.reset('horizontal',this.dimensions,this.xScale);
        this.yScale = this.chartYScale.reset('vertical-reverse',this.dimensions,this.yScale);
        this.rScale = this.chartRScale.reset('radius',this.dimensions,this.rScale);

        this.chartCircleGroups.redraw(groupedData,this.dimensions,this.rScale,this.xScale);

        groupedData.forEach( (group,i) => {

            self.updateForces(group)
        //
        //     this.simulation[group[0].group]
        //         .velocityDecay(0.5)
        //         .force('center', d3.forceCenter(center.x,center.y))
        //         .force('collide', d3.forceCollide().radius(function(d : any) {
        //             return self.rScale(d.value)
        //         }))
        //         .force('x', d3.forceX().strength(forceStrength).x(center.x))
        });


    }

    initializeForces(group) {

        this.simulation[group[0].group]
            .force("collide", d3.forceCollide())
            .force("center", d3.forceCenter())
            .force("forceX", d3.forceX());

        // this.updateForces(group)
    }

    updateForces(group) {

        let self = this;
        let forceStrength = 0.125;
        let groupWidth = this.dimensions.width / this.groupCount;
        let center = {x: (groupWidth / 2) , y: ((this.dimensions.height / 2) + 20) };

        this.simulation[group[0].group].force("collide")
            .strength(forceStrength)
            .radius(function(d : any) {
                return self.rScale(d.value)
            });

        this.simulation[group[0].group].force("center")
            .x(center.x)
            .y(center.y);

        this.simulation[group[0].group].force("forceX")
            .strength(forceStrength)
            .x(center.x);

        this.simulation[group[0].group].alpha(1).restart();

    }

    update(newData) {

        let self = this;
        let {data, groupedData, flattenedData} = self.prepareData(newData);
        self.draw(data, groupedData, flattenedData);
        self.redraw(groupedData);
        self.legend(groupedData);
        this.popup = new HtmlPopup(this.element,this.description);
        window.addEventListener("resize", () => self.redraw(groupedData), false);
    }
}


import { colours } from '../_styleguide/_colours.js';
import * as d3 from 'd3';


export class ChartStackedArea {

    prevArea : any = false;
    series;
    seriesEnter;
    areas;
    areasEnter;



    constructor(
        private config,
        private svgLayers
    ){}


    draw(data,stackedData) {

        this.series = this.svgLayers.data.selectAll(".stackedGroup")
            .data(stackedData);

        this.series.exit().remove();

        this.seriesEnter = this.series
            .enter().append("g")
            .attr("class", (d) => {
                return "stackedGroup";
            });

        this.areas = this.series.merge(this.seriesEnter).selectAll(".flow")
            .data(function(d) { return stackedData; });

        this.areas.exit().remove();

        this.areasEnter = this.areas
            .enter()
            .append("path")
            .attr('class', (d,i) => {
                return 'flow ';
            })
        ;
    }

    redraw(dimensions,xScale,yScale,dataMapping) {

        let self = this;

        let newArea = d3.area()
            .x(function(d : any) { return xScale(new Date(d.data._date)); })
            .y0(d => yScale(d[0]))
            .y1(d => yScale(d[0]))
            .curve(d3.curveCatmullRom);

        let area = d3.area()
            .x(function(d : any ) { return xScale(new Date(d.data._date)); })
            .y0(d => yScale(d[0]))
            .y1(d => yScale(d[1]))
            .curve(d3.curveCatmullRom);

        this.prevArea = area;

        // new areas
        this.areasEnter
            .merge(this.areas)
            .attr('d', newArea)
            .transition()
            .delay(200)
            .duration(200)
            .attr('d', area)
            .style('fill', (d) => {
                return colours[dataMapping.find( (map) => { return map.column === d.key})['colour']][0];
            });
    }
}

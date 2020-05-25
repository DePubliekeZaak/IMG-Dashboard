import { colours } from '../_styleguide/_colours.js';
import { displayDate } from '../helpers/_helpers.js';
import * as d3 from 'd3';
import {Config} from "../types/graphConfig";
import {Dimensions} from "../types/dimensions";
import * as Scale from "../../../node_modules/@types/d3-scale"

export class ChartLine {

    line;
    lineEnter;

    constructor(
        private config : Config,
        private svgLayers : any,
        private yParameter: string,
        private colour: string
    ){
    }

    draw(data) {

        this.line = this.svgLayers.data.selectAll('.' + this.yParameter)
            .data([data]);

        this.line.exit().remove();

        this.lineEnter = this.line.enter()
            .append("path")
            .attr("class", this.yParameter);



        // this.svgLayers.underData.selectAll('path.line_fill')
        //     .style('opacity',0);
    }

    redraw(xScale : any, yScale : any, dimensions : Dimensions, data : any, yParameter : string) {

        let self = this;

            let line = d3.line()
                .x(d =>  (this.config.xScaleType === 'time') ? xScale(new Date(d['_date'])) : xScale(d['_date'] ))
                .y(d => (this.config.yScaleType === 'time') ? yScale(new Date (d[this.yParameter])) : yScale(d[this.yParameter]) )
                .curve(d3.curveCatmullRom);

            this.line.merge(this.lineEnter)
                .transition()
                .duration(250)
                .attr("d", line)
                .attr("fill", 'transparent')
                .attr("stroke", d => colours[this.colour][0] )
                .attr("stroke-width", 4)
            ;
    }
}

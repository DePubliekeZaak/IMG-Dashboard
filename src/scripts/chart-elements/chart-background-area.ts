import { colours } from '../_styleguide/_colours.js';
import * as d3 from 'd3';

export class ChartBackgroundArea {

    constructor(
        private config,
        private svg
    ){}

    draw(data) {

        if(config.useLineFill) {

            this.svg.lineFill = this.svg.layers.underData.selectAll('path.line_fill')
                .data((config.xScaleType === 'time') ? [data] : [data.slice(1,data.length)]);

            this.svg.lineFill.exit().remove();

            this.svg.lineFillEnter = this.svg.lineFill
                .enter()
                .append("path")
                .attr("class", "line_fill");
        }
    }

    redraw(xScale,yScale,dimensions,data,colour,xParameter, yParameter) {

        let area = d3.area();

        if(this.config.xScaleType === 'time') {

            area
                .x(d => xScale(new Date(d[xParameter])))
                .y0(dimensions.height - 45)
                .y1(d => yScale(d[yParameter]))
                .curve(d3.curveCardinal);
        }

        if(this.config.yScaleType === 'time') {

            area
                .x0(0)
                .x1(d => xScale(d[xParameter]))
                // .y0(dimensions.height)
                .y(d => yScale(new Date(d[yParameter])))
                .curve(d3.curveCardinal);
        }

        if(this.config.useLineFill) {

            this.svg.lineFill
                .merge(this.svg.lineFillEnter)
                .attr("d", area)
                .attr("fill", colours[colour][1])
                .attr("stroke", "none")
                .attr("transform", function () {
                    return (this.config.yScaleType === 'time') ? "translate(" + -(xScale(data[0][xParameter]) - (dimensions.width / 2)) + ",0)" : "translate(0,0)"
                });
            ;
        }
    }
}

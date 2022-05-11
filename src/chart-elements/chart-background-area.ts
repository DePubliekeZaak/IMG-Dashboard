import { colours } from '../_styleguide/_colours';
import * as d3 from 'd3';

export class ChartBackgroundArea {

    constructor(
        private config,
        private svg,
        private yParameter,
        private colour
    ){}

    draw(data) {

        if(this.config.extra.useLineFill) {

            this.svg.lineFill = this.svg.layers.underData.selectAll('path.line_fill.' + this.yParameter)
                .data((this.config.xScaleType === 'time') ? [data] : [data.slice(1,data.length)]);

            this.svg.lineFill.exit().remove();

            this.svg.lineFillEnter = this.svg.lineFill
                .enter()
                .append("path")
                .attr("class", "line_fill " + this.yParameter);
        }
    }

    redraw(xScale,yScale,dimensions,data,colour,xParameter, yParameter) {

        let self = this;
        let area = d3.area();

        if(this.config.xScaleType === 'time') {

            area
                .x(d => xScale(new Date(d[xParameter])))
                .y0(dimensions.height)
                .y1(d => yScale(d[yParameter]))
                .curve(d3.curveLinear);
        }

        if(this.config.yScaleType === 'time') {

            area
                .x0(0)
                .x1(d => xScale(d[xParameter]))
                // .y0(dimensions.height)
                .y(d => yScale(new Date(d[yParameter])))
                .curve(d3.curveLinear);
        }

        if(this.config.extra.useLineFill) {

            this.svg.lineFill
                .merge(this.svg.lineFillEnter)
                .attr("d", area)
                // .attr("fill", colours[colour][1])
                .attr("fill", () => {

                    if (this.config.extra.smartColours === 'up') {

                        if (data[0][yParameter] > data[1][yParameter]) {
                            return colours['moss'][1];
                        } else {
                            return colours['orange'][1];
                        }

                    } else if (this.config.extra.smartColours === 'down') {

                        if(data[0][yParameter] < data[1][yParameter]) {
                            return colours['moss'][1];
                        } else {
                            return colours['orange'][1];
                        }

                    } else {
                        return colours[colour][1];
                    }
                })
                .attr("stroke", "none")
                .attr("transform", function () {
                    return (self.config.yScaleType === 'time') ? "translate(" + -(xScale(data[0][xParameter]) - (dimensions.width / 2)) + ",0)" : "translate(0,0)"
                });
            ;
        }
    }
}

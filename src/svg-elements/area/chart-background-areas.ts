import { colours } from '../../_styleguide/_colours';
import * as d3 from 'd3';
import { displayDate } from '../../d3-services/_helpers';

export class ChartBackgroundAreas {

    constructor(
        private config,
        private svg,
        private yParameter,
        private colour
    ){}

    draw(data) {

        if(this.config.extra.useLineFill) {

            this.svg.lineFill = this.svg.layers.underData.selectAll('path.line_fill.' + this.yParameter)
                .data((this.config.xScaleType === 'time') ? data : [data.slice(1,data.length)])
                .join("path")
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
                .attr("d", (d, i) => {

                    if (i < data.length - 1) return area([data[i],data[i + 1]])
                    
                })
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
                })
                .on("mouseover", function (event: any, d: any) {

                    d3.select(this).attr("fill", () => {
                        return colours[colour][2];
                    });
                     

                    let date = new Date(d[xParameter]);

                    d3.select('.tooltip')
                        .html(() => {

                            if (self.config.xScaleType === 'time') {

                                return 'Gerapporteerd op ' + displayDate(date) + '<br/><b>'
                                    + Math.round(d[yParameter] * 10) / 10  + '</b><br/>'

                            } else {

                                return 'Aantal voor week ' + displayDate(date) + '<br/><span style="font-size:1.6rem;font-family:Replica,sans-serif;">' + d[xParameter] + '</span><br/>' + 'gerapporteerd op ' + displayDate(date);
                            }
                        })
                        .style("left", (event.pageX) + "px")
                        .style("top", (event.pageY) + "px")
                        .transition()
                        .duration(250)
                        .style("opacity", 1);
                })
                .on("mouseout", function (d) {

                    d3.select(this).attr("fill", () => {
                        return colours[colour][1];
                    });

                    d3.select('.tooltip')
                        .transition()
                        .duration(250)
                        .style("opacity", 0);
                });
            ;
        }
    }
}

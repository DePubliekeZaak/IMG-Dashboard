import { colours } from '../../_styleguide/_colours';
import { displayDate } from '../../d3-services/_helpers';
import * as d3 from 'd3';

export class ChartRaggedLine {


    constructor(
        private config,
        private svg
    ){

        // this.svg.allGroups = this.svg.layers.data
        //     .append('g')
        //     .attr("class", "all_groups");
    }

    draw(data) {

        if(!this.config.suspended) {

            this.svg.line = this.svg.layers.data.selectAll('.line')
                .data([data])
                .join("path")
                .attr("class", "line");

            if(!this.config.extra.noDots) {

                this.svg.circles = this.svg.layers.data.selectAll('circle')
                    .data(data)
                    .join("circle");
            }

            if(this.config.dateLabels) {

                this.svg.dateLabels = this.svg.groupEnter.merge(this.svg.group).selectAll('text')
                    .data(data)
                    .join("text")
                    .attr("font-family", "NotoSans Regular")
                    .attr("font-size", ".75rem")
                    .attr("class", "dateLabel small-label smallest-label");

            }

            if (this.config.showValues) {

                this.svg.values = this.svg.groupEnter.merge(this.svg.group).selectAll('text.value_label')
                    .data(data)
                    .join("text")
                    .attr("font-family","NotoSans Regular")
                    .attr("font-size",".75rem")
                    .attr("class", "value_label");
            }
        }
    }

    redraw(xScale : any, yScale : any, dimensions : any, data : any, colour : string, xParameter : string, yParameter : string) {

        let self = this;

        if(!this.config.suspended) {

            // this.svg.allGroups
            //     .attr("transform", function () {
            //         return (self.config.yScaleType === 'time') ? "translate(" + -(xScale(data[0][xParameter]) - (dimensions.width / 2)) + ",0)" : "translate(0,0)"
            //     });



            let line = d3.line()
                .x(d =>  (this.config.xScaleType === 'time') ?  xScale(new Date(d[this.config.xParameter])) : xScale(d[xParameter]))
                .y(d => (this.config.yScaleType === 'time') ? yScale(new Date (d[yParameter])) : yScale(d[yParameter]) )
                .curve(d3.curveLinear);

            this.svg.line
                .transition()
                .duration(250)
                .attr("d", line)
                .attr("fill", 'transparent')
                .attr("stroke", () => {

                    if (this.config.extra.smartColours === 'up') {

                        if (data[0][yParameter] > data[1][yParameter]) {
                            return colours['moss'][0];
                        } else {
                            return colours['orange'][0];
                        }

                    } else if (this.config.extra.smartColours === 'down') {

                        if(data[0][yParameter] < data[1][yParameter]) {

                            return colours['moss'][0];
                        } else {
                            return colours['orange'][0];
                        }

                    } else {
                        return colours[colour][0];
                    }
                })
                .attr("stroke-width", (this.config.extra.thinLines) ? 1 : 2)
            ;

            if(this.svg.circles) {

                this.svg.circles
                    .attr("cx", function (d, i) {
                        return (self.config.xScaleType === 'time') ?  xScale(new Date(d[xParameter])) : xScale(d[xParameter])
                    })
                    .attr("cy", function (d) {
                        return (self.config.yScaleType === 'time') ? yScale(new Date (d[yParameter])) : yScale(d[yParameter])
                    })
                    .attr("r", 1)
                    .attr("fill", 'white')
                    .attr("stroke", () => {

                        if (this.config.extra.smartColours === 'up') {

                            if (data[0][xParameter] > data[1][xParameter]) {
                                return colours['green'][0];
                            } else {
                                return colours['orange'][0];
                            }

                        } else if (this.config.extra.smartColours === 'down') {

                                if(data[0][xParameter] > data[1][xParameter]) {
                                    return colours['orange'][0];
                                } else {
                                    return colours['green'][0];
                                }

                        } else {
                            return colours[colour][0];
                        }
                    })
                    .attr("stroke-width", 2)
                    .transition()
                    .duration(250)
                    .attr("r", 4);

            this.svg.circles
                .on("mouseover", function (event: any, d: any) {

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

                    d3.select('.tooltip')
                        .transition()
                        .duration(250)
                        .style("opacity", 0);
                });

            }

            let av = (data.reduce((a, b) => a + parseInt(b[yParameter]), 0)) / data.length;

            if(this.config.extra.dateLabels) {

                this.svg.dateLabels
                    .attr("x", function (d, i) {
                        return (self.config.xScaleType === 'time') ? xScale(new Date(d[xParameter])) : xScale(d[xParameter])
                    })
                    .attr("y", function (d) {
                        return (self.config.yScaleType === 'time') ? yScale(new Date(d[yParameter])) : yScale(d[yParameter])
                    })
                    .attr("dx", -12)
                    .attr("dy", function (d) {

                        return (yScale(Math.round(av)) - yScale(d[yParameter]) < -4) ? 20 : -12;
                    })
                    .attr("fill", colours[colour][0])
                    .text(function (d, i) {

                        if (self.config.xScaleType === 'time' && (i === 0 || i === 7)) {

                            let date = new Date(d[xParameter])
                            return date.getDate() + ' ' + date.getMonth();
                        }
                    });
            }

            if (this.svg.values) {

                this.svg.values
                    .attr("text-anchor", (d) => {
                        return (xScale(d[xParameter]) < 30) ? "end" : "start";
                    })
                    .attr("x", function (d, i) {
                        return  (xScale(d[xParameter]) < 30) ? dimensions.width  : 0;
                    })
                    .attr("y", function (d) {
                        return (self.config.yScaleType === 'time') ? yScale(new Date (d[yParameter])) : yScale(d[yParameter])
                    })
                    .attr("dx", (d) => {
                        return  (xScale(d[xParameter]) < 30) ? -6 : 6;
                    })
                    .attr("dy", function (d) {
                        return 25;
                    })
                    .style("fill", colours[colour][0])
                    .text(function (d, i) {

                            return (i > 0 && i < data.length - 1 && d[xParameter] > 0) ? d[xParameter] : '';
                    });
            }
        }
    }
}

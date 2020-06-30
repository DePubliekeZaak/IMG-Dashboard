import { colours } from '../_styleguide/_colours.js';
import { displayDate } from '../helpers/_helpers.js';
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

            // this.svg.group = this.svg.allGroups.selectAll('g')
            //     .data([data]);
            //
            // this.svg.group.exit().remove();
            //
            // this.svg.groupEnter = this.svg.group.enter()
            //     .append('g');

            this.svg.line = this.svg.layers.data.selectAll('.line')
                .data([data]);

            this.svg.line.exit().remove();

            this.svg.lineEnter = this.svg.line.enter()
                .append("path")
                .attr("class", "line");


            if(!this.config.extra.noDots) {

                this.svg.circles = this.svg.layers.data.selectAll('circle')
                    .data(data);

                this.svg.circles.exit().remove();

                this.svg.circlesEnter = this.svg.circles.enter()
                    .append("circle");
            }

            if(this.config.dateLabels) {

                this.svg.dateLabels = this.svg.groupEnter.merge(this.svg.group).selectAll('text')
                    .data(data);

                this.svg.dateLabels.exit().remove();

                this.svg.dateLabelsEnter = this.svg.dateLabels.enter()
                    .append("text")
                    .attr("font-family", "NotoSans Regular")
                    .attr("font-size", ".75rem")
                    .attr("class", "dateLabel small-label smallest-label");

            }


            if (this.config.showValues) {

                this.svg.values = this.svg.groupEnter.merge(this.svg.group).selectAll('text.value_label')
                    .data(data);

                this.svg.values.exit().remove();

                this.svg.valuesEnter = this.svg.values.enter()
                    .append("text")
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
                .curve(d3.curveCatmullRom);

            this.svg.line.merge(this.svg.lineEnter)
                .transition()
                .duration(250)
                .attr("d", line)
                .attr("fill", 'transparent')
                .attr("stroke", () => {

                    if (this.config.extra.smartColours === 'up') {

                        if (data[0][xParameter] > data[1][xParameter]) {
                            return colours['orange'][0];
                        } else {
                            return colours['moss'][0];
                        }

                    } else if (this.config.extra.smartColours === 'down') {

                        if(data[0][xParameter] < data[1][xParameter]) {

                            return colours['moss'][0];
                        } else {
                            return colours['orange'][0];
                        }

                    } else {
                        return colours[colour][0];
                    }
                })
                .attr("stroke-width", (this.config.extra.thinLines) ? 1 : 4)
            ;

            if(this.svg.circles) {

            this.svg.circles.merge(this.svg.circlesEnter)
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
                .attr("stroke-width", 4)
                .transition()
                .duration(250)
                .attr("r", 4);

            this.svg.circles
                .merge(this.svg.circlesEnter)
                .on("mouseover", function (d) {

                    let date = new Date(d[xParameter]);

                    d3.select('.tooltip')
                        .html(() => {

                            if (self.config.xScaleType === 'time') {

                                return 'Gerapporteerd op ' + displayDate(date) + '<br/><b>'
                                    + d[yParameter] + '</b><br/>'

                            } else {

                                return 'Aantal voor week ' + displayDate(date) + '<br/><span style="font-size:1.6rem;font-family:Replica,sans-serif;">' + d[xParameter] + '</span><br/>' + 'gerapporteerd op ' + displayDate(date);
                            }
                        })
                        .style("left", (d3.event.pageX) + "px")
                        .style("top", (d3.event.pageY) + "px")
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
                    .merge(this.svg.dateLabelsEnter)
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
                    .merge(this.svg.valuesEnter)
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

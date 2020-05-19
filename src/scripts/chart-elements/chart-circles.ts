import * as d3 from 'd3';
import { colours } from  '../_styleguide/_colours'

export class ChartCircles {

    start = {};
    simulation;
    durationText;

    constructor(
        private config,
        private svg
    ) {
    }

    draw(data) {

        let self = this;

        this.simulation = d3.forceSimulation()
            .velocityDecay(0.25)
            .nodes(data);

        this.svg.flows = this.svg.layers.data.selectAll('.flow')
            .data(data);

        this.svg.flows.exit().remove();

        this.svg.flowsEnter = this.svg.flows
            .enter()
            .append("path")
            .attr("class","flow")
            .style("fill","hsla(0,0%,80%,.5)")
            .on("mouseover", function(d) {

                self.svg.layers.data
                    .attr("class","showturnover");
            })
            .on("mouseout", function(d) {

                self.svg.layers.data
                    .attr("class","");
            })

        ;

        this.svg.startPoint = this.svg.layers.data
            .append("path")
            .style("fill", (d) => {
                return "#ccc";
            });
            // .style("opacity", (d) => {
            //     return .75;
            // });

        this.svg.endPoint = this.svg.layers.data
            .append("path")
            .style("fill", (d) => {
                return "#ccc";
            });
            // .style("opacity", (d) => {
            //     return .75;
            // })

        this.svg.durationLabel = this.svg.layers.data
            .append('text')
            .attr("class","small-label")
            .text('Gem. tijd per stap:');


        this.svg.headerGroup = this.svg.layers.data.selectAll('.headerGroup')
            .data(data.slice(1,data.length));

        this.svg.headerGroup.exit().remove();

        this.svg.headerGroupEnter = this.svg.headerGroup.enter()
            .append("g")
            .attr("class","headerGroup");

        this.svg.headerLabels = this.svg.headerGroupEnter.merge(this.svg.headerGroup)
            .append('text')
            .attr("text-anchor","middle")
            .style("font-size",".8rem")
            .attr('dy', (d,i) => (i % 2 == 0) ? 0 : 24)
            .text( (d) => {
                return d.label;
            })

        this.svg.group = this.svg.layers.data.selectAll('.group')
            .data(data.slice(1,data.length - 1));

        this.svg.group.exit().remove();

        this.svg.groupEnter = this.svg.group.enter()
            .append("g")
            .attr("class","group");

        this.svg.durationGroup = this.svg.layers.data.selectAll('.duration_group')
            .data(data);

        this.svg.durationGroup.exit().remove();

        this.svg.durationGroupEnter = this.svg.durationGroup.enter()
            .append("g")
            .attr("class","duration_group");

        this.svg.headers_lines = this.svg.headerGroupEnter.merge(this.svg.headerGroup)
            .append("rect")
            .attr('width',1)
            .attr("fill","transparent")
            // .attr("stroke-width", 1)
            .style("stroke-dasharray", "4 8")
            .style('stroke', '#ccc');

        this.svg.circles = this.svg.groupEnter.merge(this.svg.group)
            .append("circle")
            .attr("class","circle")
            .style("fill", function(d) {
                console.log(d.colour);
                return colours[d.colour][0];
            });

        this.svg.circlesText = this.svg.groupEnter.merge(this.svg.group)
            .append("text")
            .attr("class","small-label in-circle")
            .attr("text-anchor","middle")
            .style("fill","black")
            .attr("dy", ".4rem")
            .style("fill","white")
            .style("font-size","1rem");

        this.svg.turnover = this.svg.layers.data.selectAll('.turnover')
            .data(data.slice(0,data.length - 1));

        this.svg.turnover.exit().remove();

        this.svg.turnoverEnter = this.svg.turnover
            .enter()
            .append("text")
            .attr("class","turnover")
            .style("font-size",".8rem")
            .attr("text-anchor","middle")
            .text( (d,i) => {

                if (i < data.length - 1) {
                    return d.turnover;
                }
            })
            .on("mouseover", function(d) {

                self.svg.layers.data
                    .attr("class","showturnover");
            })
            .on("mouseout", function(d) {

                self.svg.layers.data
                    .attr("class","");
            })

        ;

        this.durationText = this.svg.durationGroupEnter.merge(this.svg.durationGroup)
            .append("text")
            .html( (d,i) => {

                if (i > 0 && i < data.length - 1) {
                    return d.duration + ' dagen';
                }
            })
            .style("font-size", ".8rem")
            .style("text-anchor", "middle");

    }

    redraw(data,dimensions,rScale,xScale) {

        let self = this;
        let center = {x: (dimensions.width / 2) , y: ((dimensions.height / 2) + 0) };
        let forceStrength = 0.025;

        this.svg.headerGroupEnter.merge(this.svg.headerGroup)
            .attr("transform", (d) => {
                return "translate(" + xScale(d.cumulativeDuration) + "," + this.config.padding.top + ")"
            });

        this.svg.durationGroupEnter.merge(this.svg.durationGroup)
            .attr("transform", (d,i) => {

                let halfway = data[i].cumulativeDuration + (data[i].duration / 2);
                return "translate(" + xScale(halfway) + ", " +  (dimensions.height - 65) + ")"
            });

        this.svg.durationLabel
            .attr("transform", (d,i) => {
                return "translate(" + xScale(0) + ", " +  (dimensions.height - 65) + ")"
            });



        this.svg.circles
            .attr("r", (d) => { return rScale(d.value);  })  //
            // .on("mouseover", function(d) {
            //
            //     svg.tooltip
            //         .html(popup(d))
            //         .style("left", (d3.event.pageX) + "px")
            //         .style("top", (d3.event.pageY) + "px")
            //         .transition()
            //         .duration(250)
            //         .style("opacity", 1);
            // })
            // .on("mouseout", function(d) {
            //     svg.tooltip.transition()
            //         .duration(250)
            //         .style("opacity", 0);
            // })
        ;

        this.svg.circlesText
            .text( (d) => d.value);

        this.svg.headers_lines
            .attr('height', (d,i) => {
                return (i % 2 == 0) ? dimensions.height - 120 : dimensions.height - 154;
            })
            .attr('y', (d,i) => {
                return (i % 2 == 0) ? 10 : 34;  // - (rScale(d.value) + 50);
            });
            // .attr('x', groupWidth / 2)
        ;

        function cluster(d) {
            return -forceStrength * Math.pow(rScale(d.value), config.radiusOffset);
        }

        function ticked() {

            let triangleSize = 40;

            self.svg.groupEnter.merge(self.svg.group)
                .attr("transform", (d) => { if(d.x !== undefined) { return "translate(" + xScale(d.cumulativeDuration) + "," + d.y + ")" } })
            ;

            self.svg.flowsEnter.merge(self.svg.flows)
                .attr('d', (d,i) => {

                    if (i < 1) {

                        let schuineZijde2 = rScale(data[i].value);

                        let start1 = {
                            x : xScale(data[i].cumulativeDuration),
                            y : data[1].y + (triangleSize / 2)
                        }

                        let start2 = {
                            x : xScale(data[i].cumulativeDuration),
                            y : data[1].y - (triangleSize / 2)
                        }

                        let end1 = {
                            x : xScale(data[i + 1].cumulativeDuration),
                            y : data[1].y - rScale(data[1].value)
                        }

                        let end2 = {
                            x : xScale(data[i + 1].cumulativeDuration),
                            y : data[1].y + rScale(data[1].value)
                        }

                        let knijp = 15; // (rScale(data[i].turnover) / rScale(data[i].value)) * 150;

                        let halfWay1 = {
                            x: start2.x + ((end1.x - start2.x) / 2),
                            y: start2.y + ((end1.y - start2.y) / 2) + knijp
                        }

                        let halfWay2 = {
                            x: start1.x + ((end2.x - start1.x) / 2),
                            y: start1.y + ((end2.y - start1.y) / 2) - knijp
                        }

                        return 'M' + start1.x + ' ' + start1.y +
                            ' L' + start2.x + ' ' + start2.y +
                            ' Q' + halfWay1.x + ' ' + halfWay1.y + ','
                            + end1.x + ' ' + end1.y +
                            ' L' + end2.x + ' ' + end2.y +
                            ' Q' + halfWay2.x + ' ' + halfWay2.y  + ',' +
                            + start1.x + ' ' + start1.y +
                            ' Z';


                    } else if (i < data.length - 2) {

                        let xDistance = xScale(data[i + 1].cumulativeDuration) - xScale(data[i].cumulativeDuration);
                        let yDistance = data[i + 1].y - data[i].y;
                        let lineAngle = Math.atan(xDistance / yDistance);

                        let schuineZijde1 = rScale(data[i].value);

                        let xOffset1 = schuineZijde1 * Math.cos(lineAngle);
                        let yOffset1 = schuineZijde1 * Math.sin(lineAngle);

                        let schuineZijde2 = rScale(data[i + 1].value);

                        let xOffset2 = schuineZijde2 * Math.cos(lineAngle);
                        let yOffset2 = schuineZijde2 * Math.sin(lineAngle);

                        let start1 = {
                            x : xScale(data[i].cumulativeDuration) - xOffset1,
                            y : d.y + yOffset1
                        }

                        let start2 = {
                            x : xScale(data[i].cumulativeDuration) + xOffset1,
                            y : d.y - yOffset1
                        }

                        let end1 = {
                            x : xScale(data[i + 1].cumulativeDuration) + xOffset2,
                            y : data[i + 1].y - yOffset2
                        }

                        let end2 = {
                            x : xScale(data[i + 1].cumulativeDuration) - xOffset2,
                            y : data[i + 1].y + yOffset2
                        }

                        let knijp = 45; // (rScale(data[i].turnover) / rScale(data[i].value)) * 150;

                        let halfWay1 = {
                            x: start2.x + ((end1.x - start2.x) / 2) - ( knijp * Math.cos(lineAngle)),
                            y: start2.y + ((end1.y - start2.y) / 2) + ( knijp * Math.sin(lineAngle))
                        }

                        let halfWay2 = {
                            x: start1.x + ((end2.x - start1.x) / 2) + ( knijp * Math.cos(lineAngle)),
                            y: start1.y + ((end2.y - start1.y) / 2) - ( knijp * Math.sin(lineAngle))
                        }

                        return 'M' + start1.x + ' ' + start1.y +
                            ' L' + start2.x + ' ' + start2.y +
                            ' Q' + halfWay1.x + ' ' + halfWay1.y + ',' +
                            end1.x + ' ' + end1.y +
                            ' L' + end2.x + ' ' + end2.y +
                            ' Q' + halfWay2.x + ' ' + halfWay2.y  + ',' +
                            start1.x + ' ' + start1.y +
                           ' Z';

                    } else if (i === data.length - 2) {

                        let schuineZijde2 = rScale(data[i + 1].value);

                        let start1 = {
                            x : xScale(data[i].cumulativeDuration),
                            y : d.y - rScale(data[i].value)
                        }

                        let start2 = {
                            x : xScale(data[i].cumulativeDuration),
                            y : d.y + rScale(data[i].value)
                        }

                        let end1 = {
                            x : xScale(data[i + 1].cumulativeDuration),
                            y : d.y + (triangleSize / 2)
                        }

                        let end2 = {
                            x : xScale(data[i + 1].cumulativeDuration),
                            y : d.y - (triangleSize / 2)
                        }

                        let knijp = 15; // (rScale(data[i].turnover) / rScale(data[i].value)) * 150;

                        let halfWay1 = {
                            x: start2.x + ((end1.x - start2.x) / 2),
                            y: start2.y + ((end1.y - start2.y) / 2) - knijp
                        }

                        let halfWay2 = {
                            x: start1.x + ((end2.x - start1.x) / 2),
                            y: start1.y + ((end2.y - start1.y) / 2) + knijp
                        }

                        return 'M' + start1.x + ' ' + start1.y +
                            ' L' + start2.x + ' ' + start2.y +
                            ' Q' + halfWay1.x + ' ' + halfWay1.y + ','
                              + end1.x + ' ' + end1.y +
                            ' L' + end2.x + ' ' + end2.y +
                            ' Q' + halfWay2.x + ' ' + halfWay2.y  + ',' +
                             + start1.x + ' ' + start1.y +
                            ' Z';
                    }
                });

            let xPosStart = xScale(data[0].cumulativeDuration);

            let startPoint = 'M' + xPosStart + ' ' + (data[1].y - triangleSize) +
                ' L' + (xPosStart + triangleSize) + ' ' + data[1].y +
                ' L' + xPosStart + ' ' + (data[1].y + triangleSize) +
                ' Z';

            self.svg.startPoint
                .attr("d", startPoint);

            let xPosEnd = xScale(data[data.length - 1].cumulativeDuration);

            let endPoint = 'M' + xPosEnd + ' ' + (data[data.length - 2].y - triangleSize) +
                ' L' + (xPosEnd + triangleSize) + ' ' + data[data.length - 2].y +
                ' L' + xPosEnd + ' ' + (data[data.length - 2].y + triangleSize) +
                ' Z';

            self.svg.endPoint
                .attr("d", endPoint);

            self.svg.turnoverEnter.merge(self.svg.turnover)
                .attr('x', (d,i) => {

                    // if prev circle is big

                    if (i < 1) {

                        return 10 + xScale(data[i].cumulativeDuration) + (((xScale(data[i + 1].cumulativeDuration) - rScale(data[i + 1].value)) - (xScale(data[i].cumulativeDuration)) + rScale(data[i].value)) / 2);

                    } else if (i < data.length - 2) {
                        return xScale(data[i].cumulativeDuration) + (((xScale(data[i + 1].cumulativeDuration) - rScale(data[i + 1].value)) - (xScale(data[i].cumulativeDuration)) + rScale(data[i].value)) / 2);

                    } else if (i < data.length - 1) {

                        return xScale(data[i].cumulativeDuration) + ((xScale(data[i + 1].cumulativeDuration) - xScale(data[i].cumulativeDuration)) / 1.5);
                    }
                })
                .attr('y', (d,i) => {

                    if (i < 1) {

                        return 5 + data[1].y;

                    } else if (i < data.length - 2) {

                        return 5 + (data[i + 1].y + data[i].y) / 2;

                    } else if (i < data.length - 1) {

                        return 5 + data[i].y;
                    }
                })
        }


        this.simulation
            .velocityDecay(0.5)
            // .force('y', d3.forceY().strength(forceStrength).y(center.y))
           .force('center', d3.forceCenter(center.x,center.y))
        //   .force('charge', d3.forceManyBody().strength(cluster))
            .force('collide', d3.forceCollide().radius((d : any) => rScale(d.value)))
            .force('y', d3.forceY().strength(forceStrength).y(center.y))
            .on('tick', ticked);
    }
}

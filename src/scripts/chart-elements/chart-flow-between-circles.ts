import * as d3 from 'd3';
import { colours } from  '../_styleguide/_colours'

export class ChartFlowBetweenCircles {

    start = {};
    durationText;

    startPoint;
    endPoint;

    flows;
    flowsEnter;

    turnover;
    turnoverEnter;

    durationGroup;
    durationGroupEnter;

    durationLabel;

    constructor(
        private config,
        private svgLayers
    ) {

        this.init();
    }

    init() {


        this.startPoint = this.svgLayers.data
            .append("path")
            .style("fill", (d) => {
                return colours.blue[0];
            });
        // .style("opacity", (d) => {
        //     return .75;
        // });

        this.endPoint = this.svgLayers.data
            .append("path")
            .style("fill", (d) => {
                return colours.blue[0];
            });

    }

    draw(data) {

        let self = this;

        this.flows = this.svgLayers.data.selectAll('.flow')
            .data(data);

        this.flows.exit().remove();

        this.flowsEnter = this.flows
            .enter()
            .append("path")
            .attr("class","flow")
            .style("fill", colours.lightBlue[0]) // "hsla(0,0%,80%,.5)")
            .on("mouseover", function(d) {

                self.svgLayers.data
                    .attr("class","showturnover");
            })
            .on("mouseout", function(d) {

                self.svgLayers.data
                    .attr("class","");
            })

        ;


        this.turnover = this.svgLayers.data.selectAll('.turnover')
            .data(data.slice(0,data.length - 1));

        this.turnover.exit().remove();

        this.turnoverEnter = this.turnover
            .enter()
            .append("text")
            .attr("class","turnover")
            .style("font-size",".8rem")
            .attr("text-anchor","middle")
            .text( (d,i) => {

                if (i < data.length - 1 && d.turnover > 0) {
                    return d.turnover;
                }
            })
            .on("mouseover", function(d) {

                self.svgLayers.data
                    .attr("class","showturnover");
            })
            .on("mouseout", function(d) {

                self.svgLayers.data
                    .attr("class","");
            })

        ;

    }

    redraw(data,dimensions,rScale,xScale) {

        let self = this;
    }

    forceDirect(xScale,rScale,data,direction) {

        let self = this;
        let triangleSize = (direction === 'horizontal') ? 40 : 30;

        if (direction === 'horizontal') {

            self.flowsEnter.merge(self.flows)
                .attr('d', (d, i) => {

                    if (i < 1) {

                        let schuineZijde2 = rScale(data[i].value);

                        let start1 = {
                            x: xScale(data[i].cumulativeDuration),
                            y: data[1].y + (triangleSize / 2)
                        }

                        let start2 = {
                            x: xScale(data[i].cumulativeDuration),
                            y: data[1].y - (triangleSize / 2)
                        }

                        let end1 = {
                            x: xScale(data[i + 1].cumulativeDuration),
                            y: data[1].y - rScale(data[1].value)
                        }

                        let end2 = {
                            x: xScale(data[i + 1].cumulativeDuration),
                            y: data[1].y + rScale(data[1].value)
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
                            x: xScale(data[i].cumulativeDuration) - xOffset1,
                            y: d.y + yOffset1
                        }

                        let start2 = {
                            x: xScale(data[i].cumulativeDuration) + xOffset1,
                            y: d.y - yOffset1
                        }

                        let end1 = {
                            x: xScale(data[i + 1].cumulativeDuration) + xOffset2,
                            y: data[i + 1].y - yOffset2
                        }

                        let end2 = {
                            x: xScale(data[i + 1].cumulativeDuration) - xOffset2,
                            y: data[i + 1].y + yOffset2
                        }

                        let knijp = 45; // (rScale(data[i].turnover) / rScale(data[i].value)) * 150;

                        let halfWay1 = {
                            x: start2.x + ((end1.x - start2.x) / 2) - (knijp * Math.cos(lineAngle)),
                            y: start2.y + ((end1.y - start2.y) / 2) + (knijp * Math.sin(lineAngle))
                        }

                        let halfWay2 = {
                            x: start1.x + ((end2.x - start1.x) / 2) + (knijp * Math.cos(lineAngle)),
                            y: start1.y + ((end2.y - start1.y) / 2) - (knijp * Math.sin(lineAngle))
                        }

                        return 'M' + start1.x + ' ' + start1.y +
                            ' L' + start2.x + ' ' + start2.y +
                            ' Q' + halfWay1.x + ' ' + halfWay1.y + ',' +
                            end1.x + ' ' + end1.y +
                            ' L' + end2.x + ' ' + end2.y +
                            ' Q' + halfWay2.x + ' ' + halfWay2.y + ',' +
                            start1.x + ' ' + start1.y +
                            ' Z';

                    } else if (i === data.length - 2) {

                        let schuineZijde2 = rScale(data[i + 1].value);

                        let start1 = {
                            x: xScale(data[i].cumulativeDuration),
                            y: d.y - rScale(data[i].value)
                        }

                        let start2 = {
                            x: xScale(data[i].cumulativeDuration),
                            y: d.y + rScale(data[i].value)
                        }

                        let end1 = {
                            x: xScale(data[i + 1].cumulativeDuration),
                            y: d.y + (triangleSize / 2)
                        }

                        let end2 = {
                            x: xScale(data[i + 1].cumulativeDuration),
                            y: d.y - (triangleSize / 2)
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
                            ' Q' + halfWay2.x + ' ' + halfWay2.y + ',' +
                            +start1.x + ' ' + start1.y +
                            ' Z';

                    }
                });

        } else {


            self.flowsEnter.merge(self.flows)
                .attr('d', (d, i) => {

                    if ( i === 0) {

                        let schuineZijde2 = rScale(data[i].value);

                        let start1 = {
                            x: data[1].x + (triangleSize / 2),
                            y: xScale(data[i].cumulativeDuration)
                        }

                        let start2 = {
                            x: data[1].x - (triangleSize / 2),
                            y: xScale(data[i].cumulativeDuration)
                        }

                        let end1 = {
                            x: data[1].x - (rScale(data[1].value / 8)),
                            y: xScale(data[i + 1].cumulativeDuration)
                        }

                        let end2 = {
                            x: data[1].x + (rScale(data[1].value / 8)),
                            y: xScale(data[i + 1].cumulativeDuration)
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


                    } else if ( i < data.length - 2 ) {

                        let yDistance = xScale(data[i + 1].cumulativeDuration) - xScale(data[i].cumulativeDuration);
                        let xDistance = data[i + 1].x - data[i].x;
                        let lineAngle = Math.atan(xDistance / yDistance);

                        let schuineZijde1 = rScale(data[i].value);

                        let xOffset1 = schuineZijde1 * Math.cos(lineAngle);
                        let yOffset1 = schuineZijde1 * Math.sin(lineAngle);

                        let schuineZijde2 = rScale(data[i + 1].value);

                        let xOffset2 = schuineZijde2 * Math.cos(lineAngle);
                        let yOffset2 = schuineZijde2 * Math.sin(lineAngle);

                        let start1 = {
                            x: d.x + xOffset1,
                            y: xScale(data[i].cumulativeDuration) - yOffset1,
                        }

                        let start2 = {
                            x: d.x - xOffset1,
                            y: xScale(data[i].cumulativeDuration) + yOffset1
                        }

                        let end1 = {
                            x: data[i + 1].x - xOffset2,
                            y: xScale(data[i + 1].cumulativeDuration) + yOffset2,
                        }

                        let end2 = {
                            x: data[i + 1].x + xOffset2,
                            y: xScale(data[i + 1].cumulativeDuration) - yOffset2
                        }

                        let knijp = 45; // (rScale(data[i].turnover) / rScale(data[i].value)) * 150;

                        let halfWay1 = {
                            x: start2.x + ((end1.x - start2.x) / 2) + (knijp * Math.cos(lineAngle)),
                            y: start2.y + ((end1.y - start2.y) / 2) - (knijp * Math.sin(lineAngle))
                        }

                        let halfWay2 = {
                            x: start1.x + ((end2.x - start1.x) / 2) - (knijp * Math.cos(lineAngle)),
                            y: start1.y + ((end2.y - start1.y) / 2) + (knijp * Math.sin(lineAngle))
                        }

                        return 'M' + start1.x + ' ' + start1.y +
                            ' L' + start2.x + ' ' + start2.y +
                            ' Q' + halfWay1.x + ' ' + halfWay1.y + ',' +
                                end1.x + ' ' + end1.y +
                            ' L' + end2.x + ' ' + end2.y +
                            ' Q' + halfWay2.x + ' ' + halfWay2.y + ',' +
                                start1.x + ' ' + start1.y +
                            ' Z';
                    } else if (i === data.length - 2) {

                        let schuineZijde2 = rScale(data[i + 1].value);

                        let start1 = {
                            x: d.x - (rScale(data[i].value / 8)),
                            y: xScale(data[i].cumulativeDuration)
                        }

                        let start2 = {
                            x: d.x + (rScale(data[i].value / 8)),
                            y: xScale(data[i].cumulativeDuration)
                        }

                        let end1 = {
                            x: d.x + (triangleSize / 2),
                            y: xScale(data[i + 1].cumulativeDuration)
                        }

                        let end2 = {
                            x: d.x - (triangleSize / 2),
                            y: xScale(data[i + 1].cumulativeDuration)
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
                            ' Q' + halfWay2.x + ' ' + halfWay2.y + ',' +
                            +start1.x + ' ' + start1.y +
                            ' Z';

                    }

                });

        }

        let xPosStart = xScale(data[0].cumulativeDuration);
        let startPoint;

        if (direction === 'horizontal') {

            startPoint = 'M' + xPosStart + ' ' + (data[1].y - triangleSize) +
                ' L' + (xPosStart + triangleSize) + ' ' + data[1].y +
                ' L' + xPosStart + ' ' + (data[1].y + triangleSize) +
                ' Z';

        } else {

            startPoint = 'M' + (data[1].x - triangleSize) + ' ' + xPosStart +
                ' L' + data[1].x + ' ' + (xPosStart + triangleSize) +
                ' L' + (data[1].x + triangleSize) + ' ' + xPosStart +
                ' Z';

        }

        self.startPoint
            .attr("d", startPoint);

        let xPosEnd = xScale(data[data.length - 1].cumulativeDuration);
        let endPoint;

        if (direction === 'horizontal') {

            endPoint = 'M' + xPosEnd + ' ' + (data[data.length - 2].y - triangleSize) +
                ' L' + (xPosEnd + triangleSize) + ' ' + data[data.length - 2].y +
                ' L' + xPosEnd + ' ' + (data[data.length - 2].y + triangleSize) +
                ' Z';

        } else {

            endPoint = 'M' + (data[data.length - 2].x - triangleSize) + ' ' + xPosEnd +
                ' L' + data[data.length - 2].x + ' ' + (xPosEnd + triangleSize) +
                ' L' + (data[data.length - 2].x + triangleSize) + ' ' + xPosEnd +
                ' Z';
        }

        self.endPoint
            .attr("d", endPoint);

        if (direction !== 'horizontal') {

            // self.startPoint
            //     .style("opacity",0)
            //
            // self.endPoint
            //     .style("opacity",0)

        }

        self.turnoverEnter.merge(self.turnover)
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
}

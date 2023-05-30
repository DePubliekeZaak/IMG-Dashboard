import * as d3 from 'd3';
import { breakpoints, colours } from  '../../img-modules/_styleguide'
import { DataPart } from '../../d3-modules/_d3_types';

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
        private ctrlr
    ) {

        this.init();
    }

    init() {


        this.startPoint = this.ctrlr.svg.layers.data
            .append("path")
            .style("stroke", (d) => {
                return colours.moss[0]
            })
            .style("fill", (d) => {
                return colours.moss[1];
            })
            .raise();
        // .style("opacity", (d) => {
        //     return .75;
        // });

        this.endPoint = this.ctrlr.svg.layers.data
            .append("path")
            .style("stroke", (d) => {
                return colours.orange[0];
            })
            .style("fill", (d) => {
                return colours.orange[1];
            });

    }

    draw(data: DataPart[]) {

        let self = this;

        this.flows = this.ctrlr.svg.layers.data.selectAll('.flow')
            .data(data)
            .join("path")
            .attr("class","flow")
            .style("stroke", (d) => { return colours[d.colour][0] })
            .style("fill", (d) => { return colours[d.colour][1] })
            .on("mouseover", function(event: any, dd: any) {

                // self.ctrlr.svg.layers.data
                //     .attr("class","showturnover");

                d3.select(event.target)
                .style("fill", (d: any) => { return colours[d.colour][0] })

                let i = data.indexOf(dd);
        

                let html = `
                
                    Begin deze week kwamen ` + dd.outflow + ` dossiers in de fase ` + data[i + 1]['label'].toLowerCase() + `
                
                `;
                
                d3.select('.tooltip')
                    .html(html)
                    .style("left", (event.pageX + 5) + "px")
                    .style("top", (event.pageY - 5) + "px")
               
                    .style("opacity", 1);
            })
            .on("mouseout", function(d) {

                d3.select('.tooltip').style("opacity", 0);

                self.flows.style("fill", (d: any) => { return colours[d.colour][1] })

                self.ctrlr.svg.layers.data
                    .attr("class","");
            })

        ;


        this.turnover = this.ctrlr.svg.layers.data.selectAll('.turnover')
            .data(data.slice(0,data.length - 1));


        // this.turnoverEnter = this.turnover
        //     .enter()
        //     .append("text")
        //     // .attr("class","turnover")
        //     .style("font-size",".8rem")
        //     .attr("text-anchor","middle")
        //     .text( (d,i) => {
        //
        //         if (i < data.length - 1 && d.outflow > 0 && window.innerWidth > 600) {
        //             return d.outflow;
        //         }
        //     })
        //     .on("mouseover", function(d) {
        //
        //         self.svgLayers.data
        //             .attr("class","showturnover");
        //     })
        //     .on("mouseout", function(d) {
        //
        //         self.svgLayers.data
        //             .attr("class","");
        //     })
        //
        // ;

    }

    redraw() {

        let self = this;
    }

    forceDirect(data: any[]) {

        let self = this;
        let triangleSize = (this.ctrlr.scales.x.config.direction === 'horizontal') ? 40 : 20;

        // maak nog een scale for the outflows

        if (this.ctrlr.scales.x.config.direction === 'horizontal') {

            self.flows
                .attr('d', (d, i) => {

                    if (i < 1) {

                        let schuineZijde2 = self.ctrlr.scales.r.scale(data[i].value);

                        let start1 = {
                            x: self.ctrlr.scales.x.scale(data[i].label),
                            y: data[1].y + (triangleSize / 2)
                        }

                        let start2 = {
                            x: self.ctrlr.scales.x.scale(data[i].label),
                            y: data[1].y - (triangleSize / 2)
                        }

                        let end1 = {
                            x: self.ctrlr.scales.x.scale(data[i + 1].label),
                            y: data[1].y - self.ctrlr.scales.r.scale(data[1].value)
                        }

                        let end2 = {
                            x: self.ctrlr.scales.x.scale(data[i + 1].label),
                            y: data[1].y +self.ctrlr.scales.r.scale(data[1].value)
                        }

                        let knijp = 15; // (self.ctrlr.scales.r.scale(data[i].turnover) / self.ctrlr.scales.r.scale(data[i].value)) * 150;

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

                        let xDistance = self.ctrlr.scales.x.scale(data[i + 1].label) - self.ctrlr.scales.x.scale(data[i].label);
                        let yDistance = data[i + 1].y - data[i].y;
                        let lineAngle = Math.atan(xDistance / yDistance);

                        let schuineZijde1 = self.ctrlr.scales.r.scale(data[i].value);

                        let xOffset1 = schuineZijde1 * Math.cos(lineAngle);
                        let yOffset1 = schuineZijde1 * Math.sin(lineAngle);

                        let schuineZijde2 = self.ctrlr.scales.r.scale(data[i + 1].value);

                        let xOffset2 = schuineZijde2 * Math.cos(lineAngle);
                        let yOffset2 = schuineZijde2 * Math.sin(lineAngle);

                        let start1 = {
                            x: self.ctrlr.scales.x.scale(data[i].label) - xOffset1,
                            y: d.y + yOffset1
                        }

                        let start2 = {
                            x: self.ctrlr.scales.x.scale(data[i].label) + xOffset1,
                            y: d.y - yOffset1
                        }

                        let end1 = {
                            x: self.ctrlr.scales.x.scale(data[i + 1].label) + xOffset2,
                            y: data[i + 1].y - yOffset2
                        }

                        let end2 = {
                            x: self.ctrlr.scales.x.scale(data[i + 1].label) - xOffset2,
                            y: data[i + 1].y + yOffset2
                        }

                        let knijp = (window.innerWidth < breakpoints.md) ? 20 : self.ctrlr.scales.o.scale(data[i].outflow); // (self.ctrlr.scales.r.scale(data[i].turnover) / self.ctrlr.scales.r.scale(data[i].value)) * 150;

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

                        let schuineZijde2 = self.ctrlr.scales.r.scale(data[i + 1].value);

                        let start1 = {
                            x: this.ctrlr.scales.x.scale(data[i].label),
                            y: d.y - self.ctrlr.scales.r.scale(data[i].value)
                        }

                        let start2 = {
                            x: this.ctrlr.scales.x.scale(data[i].label),
                            y: d.y + self.ctrlr.scales.r.scale(data[i].value)
                        }

                        let end1 = {
                            x: this.ctrlr.scales.x.scale(data[i + 1].label),
                            y: d.y + (triangleSize / 2)
                        }

                        let end2 = {
                            x: this.ctrlr.scales.x.scale(data[i + 1].label),
                            y: d.y - (triangleSize / 2)
                        }

                        let knijp = 15; // (self.ctrlr.scales.r.scale(data[i].turnover) / self.ctrlr.scales.r.scale(data[i].value)) * 150;

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


            self.flows
                .attr('d', (d, i) => {

                    if ( i === 0) {

                        let schuineZijde2 = self.ctrlr.scales.r.scale(data[i].value);

                        let start1 = {
                            x: data[1].x + (triangleSize / 4),
                            y: self.ctrlr.scales.x.scale(data[i].label)
                        }

                        let start2 = {
                            x: data[1].x - (triangleSize / 4),
                            y: self.ctrlr.scales.x.scale(data[i].label)
                        }

                        let end1 = {
                            x: data[1].x - (self.ctrlr.scales.r.scale(data[1].value / 16)),
                            y: self.ctrlr.scales.x.scale(data[i + 1].label)
                        }

                        let end2 = {
                            x: data[1].x + (self.ctrlr.scales.r.scale(data[1].value / 16)),
                            y: self.ctrlr.scales.x.scale(data[i + 1].label)
                        }

                        let knijp = 15; // (self.ctrlr.scales.r.scale(data[i].turnover) / self.ctrlr.scales.r.scale(data[i].value)) * 150;

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

                        let yDistance = self.ctrlr.scales.x.scale(data[i + 1].label) - self.ctrlr.scales.x.scale(data[i].label);
                        let xDistance = data[i + 1].x - data[i].x;
                        let lineAngle = Math.atan(xDistance / yDistance);

                        let schuineZijde1 = self.ctrlr.scales.r.scale(data[i].value);

                        let xOffset1 = schuineZijde1 * Math.cos(lineAngle);
                        let yOffset1 = schuineZijde1 * Math.sin(lineAngle);

                        let schuineZijde2 = self.ctrlr.scales.r.scale(data[i + 1].value);

                        let xOffset2 = schuineZijde2 * Math.cos(lineAngle);
                        let yOffset2 = schuineZijde2 * Math.sin(lineAngle);

                        let start1 = {
                            x: d.x + xOffset1,
                            y: self.ctrlr.scales.x.scale(data[i].label) - yOffset1,
                        }

                        let start2 = {
                            x: d.x - xOffset1,
                            y: self.ctrlr.scales.x.scale(data[i].label) + yOffset1
                        }

                        let end1 = {
                            x: data[i + 1].x - xOffset2,
                            y: self.ctrlr.scales.x.scale(data[i + 1].label) + yOffset2,
                        }

                        let end2 = {
                            x: data[i + 1].x + xOffset2,
                            y: self.ctrlr.scales.x.scale(data[i + 1].label) - yOffset2
                        }

                        let knijp = 15; // (self.ctrlr.scales.r.scale(data[i].turnover) / self.ctrlr.scales.r.scale(data[i].value)) * 150;

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

                        let schuineZijde2 = self.ctrlr.scales.r.scale(data[i + 1].value);

                        let start1 = {
                            x: d.x - (self.ctrlr.scales.r.scale(data[i].value / 8)),
                            y: self.ctrlr.scales.x.scale(data[i].label)
                        }

                        let start2 = {
                            x: d.x + (self.ctrlr.scales.r.scale(data[i].value / 8)),
                            y: self.ctrlr.scales.x.scale(data[i].label)
                        }

                        let end1 = {
                            x: d.x + (triangleSize / 2),
                            y: self.ctrlr.scales.x.scale(data[i + 1].label)
                        }

                        let end2 = {
                            x: d.x - (triangleSize / 2),
                            y: self.ctrlr.scales.x.scale(data[i + 1].label)
                        }

                        let knijp = 15; // (self.ctrlr.scales.r.scale(data[i].turnover) / self.ctrlr.scales.r.scale(data[i].value)) * 150;

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

        let xPosStart = self.ctrlr.scales.x.scale(data[0].label);
        let startPoint;

        if (this.ctrlr.scales.x.config.direction === 'horizontal') {

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

        let xPosEnd = self.ctrlr.scales.x.scale(data[data.length - 1].label);
        let endPoint;

        if (this.ctrlr.scales.x.config.direction === 'horizontal') {

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

        if (this.ctrlr.scales.x.config.direction !== 'horizontal') {

            // self.startPoint
            //     .style("opacity",0)
            //
            // self.endPoint
            //     .style("opacity",0)

        }

        // self.turnoverEnter.merge(self.turnover)
        //     .attr('x', (d,i) => {
        //
        //         // if prev circle is big
        //
        //         if (i < 1) {
        //
        //             return 10 + scales.x.scale(data[i].label) + (((scales.x.scale(data[i + 1].label) - self.ctrlr.scales.r.scale(data[i + 1].value)) - (scales.x.scale(data[i].label)) + self.ctrlr.scales.r.scale(data[i].value)) / 2);
        //
        //         } else if (i < data.length - 2) {
        //             return scales.x.scale(data[i].label) + (((scales.x.scale(data[i + 1].label) - self.ctrlr.scales.r.scale(data[i + 1].value)) - (scales.x.scale(data[i].label)) + self.ctrlr.scales.r.scale(data[i].value)) / 2);
        //
        //         } else if (i < data.length - 1) {
        //            // return 0;
        //             return scales.x.scale(data[i].label) + ((scales.x.scale(data[i + 1].label) - scales.x.scale(data[i].label)) / 1.5);
        //         } else {
        //             return 0;
        //         }
        //     })
        //     .attr('y', (d,i) => {
        //
        //         if (i < 1) {
        //
        //             return 5 + data[1].y;
        //
        //         } else if (i < data.length - 2) {
        //
        //             return 5 + (data[i + 1].y + data[i].y) / 2;
        //
        //         } else if (i < data.length - 1) {
        //
        //             return 5 + data[i].y;
        //         }
        //     })

    }
}

import * as d3 from 'd3';
import * as _ from "lodash";
import { colours } from  '../../_styleguide/_colours'
import {breakpoints} from "../../_styleguide/_breakpoints";

export default class ChartCircleGroups {

    start = {};

    headerGroup;
    headerGroupEnter;
    headerLabels;

    group;
    groupEnter;

    headers_lines;

    circleGroups;
    circleGroupsEnter;
    circles;
    circlesText;

    center;
    tooltip;

    constructor(
        private ctrlr
    ) {
    }

    draw(groupedData) {

        let self = this;

        const direction = this.ctrlr.scales.x.config.direction;

        this.headerGroup = this.ctrlr.svg.layers.data.selectAll('.headerGroup')
            .data(groupedData)
            .join("g")
            .attr("class","headerGroup");

        this.group = this.ctrlr.svg.layers.data.selectAll('.group')
            .data(groupedData)
            .join("g")
            .attr("class","group");

        this.headerLabels = this.headerGroup
            .append('text')
            .attr("text-anchor", (direction === 'horizontal') ? "middle" : "middle")
            .style("font-family", "NotoSans Regular")
            .style("font-size",".8rem")
            .attr('dy', (d,i) => {

                if (direction === 'horizontal') {
                    return (i % 2 == 0) ? 0 : 32
                } else {
                    return 0;
                }
                
            })

            .text( (d) => d[0].group)

        this.headers_lines = this.headerGroup
            .append("rect")
            .attr('width',1)
            .attr("fill","transparent")
            .attr("stroke-width", 1)
            .style("stroke-dasharray", "2 4")
            .style('stroke', '#ccc');
        //
        this.circleGroups = this.group
            .selectAll(".circleGroup")
            .data( d => d, d => d.column)
            .join("g")
            .attr("class","circleGroup");

        this.circles = this.circleGroups
            .append("circle")
            .attr("class","circle")
            .style("fill", (d) => colours[d.colour][0]);

        this.circlesText = this.circleGroups
            .append("text")
            .attr("class","small-label")
            .attr("text-anchor","middle")
            .style("font-family", "NotoSans Regular")
            .style("fill","black")
            .style("font-size",".8rem");

        let groupWidth = this.ctrlr.dimensions.width / groupedData.length;
        this.center = {x: (groupWidth / 2) , y: ((this.ctrlr.dimensions.height * .85) + 48) };

    }

    redraw(groupedData) {

        let self = this;

        const direction = this.ctrlr.scales.x.config.direction;

        let groupWidth = this.ctrlr.dimensions.width / groupedData.length;
        this.center = {x: (groupWidth / 2) , y: ((this.ctrlr.dimensions.height / 2) + 48) };
        this.tooltip = d3.select('.tooltip');

        let popup = function popup(d) {
            return d.label + '<br/>' + d.value;
        }

        this.headerGroup
            .attr("transform", (d) => {

                if(direction === 'horizontal') {
                    return "translate(" + self.ctrlr.scales.x.scale(d[0].group) + "," + self.ctrlr.config.padding.top + ")"
                } else {
                    return "translate(" + (this.ctrlr.dimensions.width / 2) + "," + (self.ctrlr.scales.x.scale(d[0].group) - 100) + ")"
                }
            });

        this.headers_lines
            .attr('height', (d,i) => {

                if(direction === 'horizontal') {
                    return (i % 2 == 0) ? self.ctrlr.dimensions.height - 120 : self.ctrlr.dimensions.height - 154;
                } else {
                    return 0;
                }
            })
            .attr('y', (d,i) => {
                return (i % 2 == 0) ? 10 : 34;  // - (rScale(d.value) + 50);
            });

            this.circles
                .attr("r", (d) => this.ctrlr.scales.r.fn(d.value))
                .on("mouseover", function(event: any, d: any) {

                    self.circles
                        .style("fill", (dd: any) => colours[dd.colour][1]);

                    d3.select(event.target)
                        .style("fill", (dd: any) => colours[dd.colour][0]);

                    self.tooltip
                        .html(popup(d))
                        .style("left", (event.pageX) + "px")
                        .style("top", (event.pageY) + "px")
                        .transition()
                        .duration(250)
                        .style("opacity", 1);
                })
                .on("mouseout", function(d) {

                    self.circles
                        .style("fill", (dd: any) => colours[dd.colour][0]);

                    self.tooltip
                        .transition()
                        .duration(250)
                        .style("opacity", 0);
                })
            ;

        this.circlesText
            .text( d => (this.ctrlr.scales.r.fn(d.value) > 30) ? d.value : '');
    }

    forceDirect() {

        let self = this;

        const direction = this.ctrlr.scales.x.config.direction;
  
        this.circleGroups
            .attr("transform", (d,i) => {
                if(!isNaN(d.x)) { 
                    if (direction === 'horizontal') {
                        return "translate(" + (self.ctrlr.scales.x.fn(d.group) + d.x - this.center.x) + "," + (d.y ) + ")" 
                    } else {
                        return "translate(" + (self.ctrlr.dimensions.width / 2 + d.x - self.center.x) + "," + (self.ctrlr.scales.x.fn(d.group) + d.y - self.center.y) + ")"
                    }
                }
            })
        ;
    }
}

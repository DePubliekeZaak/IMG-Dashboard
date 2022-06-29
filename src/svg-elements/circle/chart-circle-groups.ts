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
            .attr("text-anchor","middle")
            .style("font-family", "NotoSans Regular")
            .style("font-size",".8rem")
            .attr('dy', (d,i) => (i % 2 == 0) ? 0 : 32)
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
        this.center = {x: (groupWidth / 2) , y: ((this.ctrlr.dimensions.height / 2) + 48) };

    }

    redraw(groupedData) {

        let self = this;

        let groupWidth = this.ctrlr.dimensions.width / groupedData.length;
        this.center = {x: (groupWidth / 2) , y: ((this.ctrlr.dimensions.height / 2) + 48) };
        this.tooltip = d3.select('.tooltip');

        let popup = function popup(d) {
            return d.label + '<br/>' + d.value;
        }

        this.headerGroup
            .attr("transform", (d) => {
                return "translate(" + self.ctrlr.xScale(d[0].group) + "," + self.ctrlr.graphObject.config.padding.top + ")"
            });

        this.headers_lines
            .attr('height', (d,i) => {
                return (i % 2 == 0) ? self.ctrlr.dimensions.height - 120 : self.ctrlr.dimensions.height - 154;
            })
            .attr('y', (d,i) => {
                return (i % 2 == 0) ? 10 : 34;  // - (rScale(d.value) + 50);
            });

            // this.circleGroupsEnter.merge(this.circleGroups)
            //     .attr("transform", (d) => {  return "translate(" + this.center.x + "," + this.center.y + ")" })
            // ;

        this.circles
            .attr("r", d => this.ctrlr.rScale(d.value))
            .on("mouseover", function(event: any, d: any) {

                self.tooltip
                    .html(popup(d))
                    .style("left", (event.pageX) + "px")
                    .style("top", (event.pageY) + "px")
                    .transition()
                    .duration(250)
                    .style("opacity", 1);
            })
            .on("mouseout", function(d) {

                self.tooltip
                    .transition()
                    .duration(250)
                    .style("opacity", 0);
            })
        ;

        this.circlesText
            .text( d => (this.ctrlr.rScale(d.value) > 30) ? d.value : '');
    }

    forceDirect() {

        let self = this;
               
        this.circleGroups
            .attr("transform", (d,i) => {
                if(!isNaN(d.x)) { // && !isNaN(d.x)
                    // console.log(d);
                // } else {
                    return (window.innerWidth > breakpoints.sm) ? 
                    "translate(" + (self.ctrlr.xScale(d.group) + d.x - this.center.x) + "," + (d.y ) + ")" 
                    : 
                    "translate(" + ((window.innerWidth / 2) - self.center.x) + "," + (self.ctrlr.yScale(d.group)) + ")"
                }
            })
        ;
    }
}

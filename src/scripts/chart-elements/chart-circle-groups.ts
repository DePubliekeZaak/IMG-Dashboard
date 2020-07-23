import * as d3 from 'd3';
import * as _ from "lodash";
import { colours } from  '../_styleguide/_colours'

export class ChartCircleGroups {

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
        private config,
        private svgLayers
    ) {
    }

    draw(groupedData) {

        let self = this;

        this.headerGroup = this.svgLayers.data.selectAll('.headerGroup')
            .data(groupedData);

        this.headerGroup.exit().remove();

        this.headerGroupEnter = this.headerGroup.enter()
            .append("g")
            .attr("class","headerGroup");


        this.group = this.svgLayers.data.selectAll('.group')
            .data(groupedData);

        this.group.exit().remove();

        this.groupEnter = this.group.enter()
            .append("g")
            .attr("class","group");
        //
        this.headerLabels = this.headerGroupEnter.merge(this.headerGroup)
            .append('text')
            .attr("text-anchor","middle")
            .style("font-family", "NotoSans Regular")
            .style("font-size",".8rem")
            .attr('dy', (d,i) => (i % 2 == 0) ? 0 : 32)
            .text( (d) => {
                return d[0].group;
            })


        this.headers_lines = this.headerGroupEnter.merge(this.headerGroup)
            .append("rect")
            .attr('width',1)
            .attr("fill","transparent")
            .attr("stroke-width", 1)
            .style("stroke-dasharray", "2 4")
            .style('stroke', '#ccc');
        //
        this.circleGroups = this.groupEnter.merge(this.group)
            .selectAll(".circleGroup")
            .data( d => d);

        this.circleGroups.exit().remove();

        this.circleGroupsEnter = this.circleGroups.enter()
            .append("g")
            .attr("class","circleGroup");

        this.circles = this.circleGroupsEnter.merge(this.circleGroups)
            .append("circle")
            .attr("class","circle")
            .style("fill", function(d) {
                return colours[d.colour][0];
            });

        this.circlesText = this.circleGroupsEnter.merge(this.circleGroups)
            .append("text")
            .attr("class","small-label")
            .attr("text-anchor","middle")
            .style("font-family", "NotoSans Regular")
            .style("fill","black")
            .style("font-size",".8rem");
    }

    redraw(groupedData,dimensions,rScale,xScale) {

        let self = this;

        let groupWidth = dimensions.width / groupedData.length;
        this.center = {x: (groupWidth / 2) , y: ((dimensions.height / 2) + 48) };
        this.tooltip = d3.select('.tooltip');

        let popup = function popup(d) {
            return d.label + '<br/>' + d.value;
        }

        this.headerGroupEnter.merge(this.headerGroup)
            .attr("transform", (d) => {
                return "translate(" + xScale(d[0].group) + "," + this.config.padding.top + ")"
            });

        this.headers_lines
            .attr('height', (d,i) => {
                return (i % 2 == 0) ? dimensions.height - 120 : dimensions.height - 154;
            })
            .attr('y', (d,i) => {
                return (i % 2 == 0) ? 10 : 34;  // - (rScale(d.value) + 50);
            });

            // this.circleGroupsEnter.merge(this.circleGroups)
            //     .attr("transform", (d) => {  return "translate(" + this.center.x + "," + this.center.y + ")" })
            // ;

        this.circles
            .attr("r", d => rScale(d.value))
            .on("mouseover", function(d) {

                self.tooltip
                    .html(popup(d))
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY) + "px")
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
            .text( d => (rScale(d.value) > 30) ? d.value : '');
    }

    forceDirect(xScale,rScale) {

        let self = this;

        self.circleGroupsEnter.merge(self.circleGroups)
         //   .attr("transform", (d) => { if(d.x !== undefined) { return "translate(" + (xScale(d.group) + d.x - this.center.x) + "," + (d.y + 32) + ")" } })
            .attr("transform", (d) => { if(d.x !== undefined) { return "translate(" + (xScale(d.group) + d.x - this.center.x) + "," + (d.y ) + ")" } })
        ;
    }
}

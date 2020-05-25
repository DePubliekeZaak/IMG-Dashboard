import * as d3 from 'd3';
import { colours } from  '../_styleguide/_colours'

export class ChartCircles {

    start = {};

    headerGroup;
    headerGroupEnter;
    headerLabels;

    group;
    groupEnter;

    headers_lines;

    circles;
    circlesText;

    constructor(
        private config,
        private svgLayers
    ) {
    }

    draw(data) {

        let self = this;

        this.headerGroup = this.svgLayers.data.selectAll('.headerGroup')
            .data(data.slice(1,data.length));

        this.headerGroup.exit().remove();

        this.headerGroupEnter = this.headerGroup.enter()
            .append("g")
            .attr("class","headerGroup");


        this.group = this.svgLayers.data.selectAll('.group')
            .data(data.slice(1,data.length - 1));

        this.group.exit().remove();

        this.groupEnter = this.group.enter()
            .append("g")
            .attr("class","group");

        this.headerLabels = this.headerGroupEnter.merge(this.headerGroup)
            .append('text')
            .attr("text-anchor","middle")
            .style("font-size",".8rem")
            .attr('dy', (d,i) => (i % 2 == 0) ? 0 : 24)
            .text( (d) => {
                return d.label;
            })


        this.headers_lines = this.headerGroupEnter.merge(this.headerGroup)
            .append("rect")
            .attr('width',1)
            .attr("fill","transparent")
            // .attr("stroke-width", 1)
            .style("stroke-dasharray", "4 8")
            .style('stroke', '#ccc');

        this.circles = this.groupEnter.merge(this.group)
            .append("circle")
            .attr("class","circle")
            .style("fill", d => colours[d.colour][0]);

        this.circlesText = this.groupEnter.merge(this.group)
            .append("text")
            .attr("class","small-label in-circle")
            .attr("text-anchor","middle")
            .style("fill","black")
            .attr("dy", ".4rem")
            .style("fill","white")
            .style("font-size","1rem");
    }

    redraw(data,dimensions,rScale,xScale) {

        let self = this;

        this.headerGroupEnter.merge(this.headerGroup)
            .attr("transform", (d) => {
                return "translate(" + xScale(d.cumulativeDuration) + "," + this.config.padding.top + ")"
            });

        this.circles
            .attr("r", (d) => { return rScale(d.value);  });

        this.circlesText
            .text( (d) => d.value);

        this.headers_lines
            .attr('height', (d,i) => {
                return (i % 2 == 0) ? dimensions.height - 120 : dimensions.height - 154;
            })
            .attr('y', (d,i) => {
                return (i % 2 == 0) ? 10 : 34;  // - (rScale(d.value) + 50);
            });
    }

    forceDirect(xScale,rScale,data) {

        let self = this;
        let triangleSize = 40;

        self.groupEnter.merge(self.group)
            .attr("transform", (d) => { if(d.x !== undefined) { return "translate(" + xScale(d.cumulativeDuration) + "," + d.y + ")" } })
        ;
    }
}

import * as d3 from 'd3';
import { colours } from  '../_styleguide/_colours'
import {breakpoints} from "../_styleguide/_breakpoints";

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

        this.headerLabels = this.headerGroupEnter
            .append('text')
            .style("font-size",".8rem")
            .text( d => d.label);


        this.headers_lines = this.headerGroupEnter
            .append("rect")
            .attr('width',1)
            .attr("fill","transparent")
            // .attr("stroke-width", 1)
            .style("stroke-dasharray", "4 8")
            .style('stroke', '#ccc');

        this.circles = this.groupEnter
            .append("circle")
            .attr("class","circle")
            .style("fill", d => { return colours[d.colour][0] });

        this.circlesText = this.groupEnter
            .append("text")
            .attr("class","small-label in-circle")
            .attr("text-anchor","middle")
            .style("fill","black")
            .attr("dy", ".4rem")
            .style("fill","white")
            .style("font-size","1rem");
    }

    redraw(data,dimensions,rScale,xScale, direction) {

        let self = this;

        this.headerGroupEnter.merge(this.headerGroup)
            .attr("transform", (d) => {

                if(direction === 'horizontal'){

                    return "translate(" + xScale(d[this.config.xParameter]) + "," + this.config.padding.top + ")"

                } else {
                    return "translate(" + -(this.config.padding.left) + "," + xScale(d[this.config.xParameter]) + ")"
                }
            });

        this.headerLabels
            .attr("text-anchor",(direction === 'horizontal') ? "middle" : "start")
            .attr('dy', (d,i) => {

                if (direction === 'vertical-reverse') { return 5; }

                return (i % 2 == 0 ) ? 0 : 24
            })

        this.circles
            .attr("r", (d) => {  return rScale(d.value);  });

        this.circlesText
            .text( (d) => d.value);

        this.headers_lines
            .attr('height', (d,i) => {

                if (direction === 'vertical-reverse') { return 0;}

                return (i % 2 == 0) ? dimensions.height - 120 : dimensions.height - 154;
            })
            .attr('y', (d,i) => {
                return (i % 2 == 0) ? 10 : 34;  // - (rScale(d.value) + 50);
            });
    }

    forceDirect(xScale,rScale,data, direction) {

        let self = this;
        let triangleSize = 40;

        console.log('yo');

        self.groupEnter.merge(self.group)
            .attr("transform", (d) => {

                if(d.x !== undefined) {

                    if (direction === 'horizontal') {

                        return "translate(" + xScale(d.cumulativeDuration) + "," + (d.y + 0) + ")"
                    } else {

                        return "translate(" + (d.x + 0) + "," + xScale(d.cumulativeDuration) + ")"
                    }
                }
            })
        ;
    }
}

import * as d3 from 'd3';
import { colours } from  '../../_styleguide/_colours'
import {breakpoints} from "../../_styleguide/_breakpoints";
import { thousands } from "../../d3-services/_helpers";

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
        private ctrlr
    ) {
    }

    draw(data) {

        let self = this;

        this.headerGroup = this.ctrlr.svg.layers.data.selectAll('.headerGroup')
            .data(data.slice(1,data.length))
            .join("g")
            .attr("class","headerGroup");


        this.group = this.ctrlr.svg.layers.data.selectAll('.group')
            .data(data.slice(1,data.length - 1))
            .join("g")
            .attr("class","group");

        this.headerLabels = this.headerGroup
            .append('text')
            .style("font-size",".825rem")
            .text( d => d.label);


        this.headers_lines = this.headerGroup
            .append("rect")
            .attr('width',1)
            .attr("fill","transparent")
            // .attr("stroke-width", 1)
            .style("stroke-dasharray", "4 8")
            .style('stroke', '#ccc');

        this.circles = this.group
            .append("circle")
            .attr("class","circle")
            .style("stroke", d => { return 'black' })
            .style("fill", d => { return 'white' }); // colours['gray'][0] });

        this.circlesText = this.group
            .append("text")
            .attr("class","small-label in-circle")
            .attr("text-anchor","middle")
            .style("font-size",".825rem")
            .style("fill","black");
          //  .style("fill","white");
    }

    redraw() {

        let self = this;

        this.headerGroup
            .attr("transform", (d) => {

                if(this.ctrlr.scales.x.config.direction === 'horizontal'){
                    return "translate(" + this.ctrlr.scales.x.scale(d[this.ctrlr.parameters.x]) + "," + this.ctrlr.config.padding.top + ")"

                } else {
                    return "translate(" + -(this.ctrlr.config.padding.left) + "," + this.ctrlr.scales.x.scale(d[this.ctrlr.parameters.x]) + ")"
                }
            });

        this.headerLabels
            .attr("text-anchor",(this.ctrlr.scales.x.config.direction === 'horizontal') ? "middle" : "start")
            .attr('dy', (d,i) => {

                if (this.ctrlr.scales.x.config.direction === 'vertical-reverse') { return 5; }

                return (i % 2 == 0 ) ? 0 : 24
            });

        this.circles
            .attr("r", (d) => {  return this.ctrlr.scales.r.scale(d.value);  })
            .on("mouseover", function (event: any, d: any) {

                // d3.select(event.target)
                //     .style("fill", d => { return 'black' });

                let html = `
                
                    Begin deze week bevinden zich ` + d.value + ` dossiers in de fase ` + d.label.toLowerCase() + `
                
                `;
                
                d3.select('.tooltip')
                    .html(html)
                    .style("left", (event.pageX + 5) + "px")
                    .style("top", (event.pageY - 5) + "px")
                    .transition()
                    .duration(250)
                    .style("opacity", 1);
                
            })
            .on("mouseout", function (event, d) {

                this.circles    
                    .style("fill", d => { return 'white' });

                d3.select('.tooltip')
                    .transition()
                    .duration(250)
                    .style("opacity", 0);
            });

        this.circlesText
            .attr("dy", (d) => { return (this.ctrlr.scales.x.config.direction === 'vertical-reverse') ? ".3rem" : ".4rem" })
            .attr("pointer-events","none")
            .text( (d) => { return thousands(d.value)});

        this.headers_lines
            .attr('height', (d,i) => {

                if (this.ctrlr.scales.x.config.direction === 'vertical-reverse') { return 0;}

                return (i % 2 == 0) ? this.ctrlr.dimensions.height - 120 : this.ctrlr.dimensions.height - 154;
            })
            .attr('y', (d,i) => {
                return (i % 2 == 0) ? 10 : 34;  // - (rScale(d.value) + 50);
            });
    }

    forceDirect() {

        let self = this;
        let triangleSize = 40;

        self.group.merge(self.group)
            .attr("transform", (d) => {

                if(d.x !== undefined) {

                    if (this.ctrlr.scales.x.config.direction === 'horizontal') {

                        return "translate(" + self.ctrlr.scales.x.scale(d[self.ctrlr.parameters.x]) + "," + (d.y + 0) + ")"
                    } else {

                        return "translate(" + (d.x + 0) + "," + self.ctrlr.scales.x.scale(d[self.ctrlr.parameters.x]) + ")"
                    }
                }
            })
        ;
    }
}

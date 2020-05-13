import * as d3 from 'd3';
import { colours } from '../_styleguide/_colours.js';
import {event as currentEvent} from 'd3-selection';


export class ChartMultiBars {

    constructor(
        private config,
        private svg
    ){}


    draw(data,dimensions) {

        this.svg.group = this.svg.layers.data.selectAll(".bar_group")
            .data(data);

        this.svg.group.exit().remove();

        this.svg.groupEnter = this.svg.group
            .enter()
            .append('g')
            .attr('class','bar_group');

        this.svg.bar = this.svg.groupEnter.merge(this.svg.group).selectAll(".bar")
            .data( (d) => d.properties);

        this.svg.bar.exit().remove();

        this.svg.barEnter = this.svg.bar
            .enter()
            .append("rect")
            .attr("class", "bar")
            .style("fill", d => colours[d.colour][0])
            .attr("y", dimensions.height)
            .attr("height", 0);
    }


    redraw(dimensions,xScale,yScale) {

        let self = this;

        let offset, date;

        let tooltip = function popup(d) {


          //  date = new Date(d['_date']);
            // return date.getDate(); + '/' + date.getMonth() + 1; + '<br/>' + d.label + '<br/>' + d['properties'];
            return d.value;
        }

        this.svg.groupEnter.merge(this.svg.group)
            .attr("transform", (d) => "translate(" + xScale(d[this.config.xParameter]) + "," + 0 + ")");


        this.svg.bar
            .merge(this.svg.barEnter)
            .attr("x", (d,i) => (i % 2) ? xScale.bandwidth() / 2 : 0 )
            .attr("width",  d => (xScale.bandwidth() / 2))
            .transition()
            .duration(500)
            .attr("y", (d) => yScale(d['value']))
            .attr("height", function(d) { return dimensions.height - yScale(d['value']); });

        this.svg.bar
            .merge(this.svg.barEnter)
            .on("mouseover", function(d) {

                self.svg.layers.data.selectAll(".bar")
                    .style("fill", b => (b !== d) ? colours[b.colour][1] : colours[b.colour][0]);

                d3.select('.tooltip')
                    .html(tooltip(d))
                    .style("left", (currentEvent.pageX - 20) + "px")
                    .style("top", (currentEvent.pageY - 0) + "px")
                    .transition()
                    .duration(250)
                    .style("opacity", 1);
            })
            .on("mouseout", function(d) {

                self.svg.layers.data.selectAll(".bar")
                    .style("fill", b => colours[b.colour][0]);

                d3.select('.tooltip')
                    .transition()
                    .duration(250)
                    .style("opacity", 0);
            })// add

        ;
    }
}



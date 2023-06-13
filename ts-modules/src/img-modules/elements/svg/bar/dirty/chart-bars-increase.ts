import * as d3 from "d3";
import { colours } from '@local/styleguide';
import { thousands } from '@local/d3-services';

export class ChartBarsIncrease {

    dataArray;

    constructor(
        private config,
        private svg
    ){}

    draw(data) {

        this.dataArray = data;

        this.svg.barGroup = this.svg.layers.data.selectAll(".bar_group")
            .data(data, (d) => d._date);

        this.svg.barGroup.exit().remove();

        this.svg.barGroupEnter = this.svg.barGroup
            .enter()
            .append("g")
            .attr("class","bar_group");

        this.svg.bar = this.svg.barGroupEnter
            .append("rect")
            .attr("class", "bar")
            .style("fill", d => colours[d.colour][0])

        this.svg.barLabels = this.svg.barGroupEnter
            .append('text')
            .attr('class','barLabel small-label white')
            .attr('x', 0)
            .attr('dx', '0px')
            .attr('dy', '-6px')
            .style("text-anchor", "middle")
            .style("font-size", ".6rem")
        ;

        this.svg.differenceCircle = this.svg.barGroupEnter
            .append("circle")
            .attr("class", "diffCircle white")
        ;

        this.svg.diffLabels = this.svg.barGroupEnter
            .append('text')
            .attr('class','diffLabel small-label') // blue
            .attr('x', 0)
            .attr('dx', '0px')
            .attr('dy', '0px')
            .style("text-anchor", "middle")
            .style("font-size", ".6rem")
        ;

    }

    redraw(dimensions,xScale,yScale, yParameter) {

        let self = this;

        const groups = this.svg.barGroupEnter.merge(this.svg.barGroup)
            .attr("transform", d => "translate(" + xScale(d[self.config.xParameter]) + ",0)");

        this.svg.barGroupEnter.select('.bar')
            .attr("y", dimensions.height);

        groups.select(".bar")
            .attr("width", xScale.bandwidth())
            .transition()
            .duration(250)
            .attr("y", function(d) {return yScale(d[yParameter]); })
            .attr("height", function(d) {
                return dimensions.height - yScale(d[yParameter]);
            });


        groups.select(".barLabel")
            .text( d => thousands(d[yParameter]))
            .attr('fill-opacity', 0)
            .attr('x', xScale.bandwidth() / 2)
            .attr('y', dimensions.height)
            .transition()
                .delay(500)
                .duration(500)
            .attr('fill-opacity', 1);

        this.svg.barGroupEnter.select('.diffCircle')
            .attr('fill-opacity', 0)

        groups.select(".diffCircle")
            .attr("cy", function(d) { return yScale(d[yParameter]) + (xScale.bandwidth() / 2); })
            .attr("cx", xScale.bandwidth() / 2)
            .attr("r", (xScale.bandwidth() / 2) - 8)
            .style('fill','white')
            .transition()
            .delay(250)
            .duration(250)
            .attr('fill-opacity', 1);


        groups.select(".diffLabel")
            .text(d => '+' + thousands(d['nieuw_' + yParameter]))
            .attr('transform', function(d) {

                return 'translate(' + (xScale.bandwidth() / 2) + ',' +
                    (yScale(d[yParameter]) + (xScale.bandwidth() / 2) + 4)
                    + ')';
            })
            .attr('fill-opacity', 0)
            .transition()
            .delay(500)
            .duration(500)
            .attr('fill-opacity', 1);

    }
}



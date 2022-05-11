
import { colours} from "../_styleguide/_colours";
import {breakpoints} from "../_styleguide/_breakpoints";

export class ChartBarHorizontal {

    series;
    seriesEnter;

    bars;
    barsEnter;

    barLabels;
    barLabelsEnter

    barValues;
    barValuesEnter;

    constructor(
        private config,
        private svgLayers
    ){}

    draw(data) {

        this.bars = this.svgLayers.data.selectAll(".bar")
            .data(data.filter((d) => d.colour));

        this.bars.exit().remove();

        this.barsEnter = this.bars
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("fill", (d) => colours[d.colour][0])
        ;

        this.barLabels = this.svgLayers.data.selectAll(".barLabel")
            .data(data.filter((d) => d.label));

        this.barLabels.exit().remove();

        this.barLabelsEnter = this.barLabels
            .enter()
            .append('text')
            .attr('class','barLabel small-label')
            .attr('x', 0)
            .attr('dx', '12px')
            .attr('dy', '-6px')
            .style("text-anchor", "end")

            ;

        this.barValues = this.svgLayers.data.selectAll(".barValue")
            .data(data);

        this.barValues.exit().remove();

        this.barValuesEnter = this.barValues
            .enter()
            .append('text')
            .attr('class','barValue small-label')
            .attr('x', 0)
            .attr('dx', '0px')
            .attr('dy', '-6px')
            .style("text-anchor", "start")

        ;
    }

    redraw(dimensions,xScale,yScale,no_respondents) {

        let self = this;

        this.bars
            .merge(this.barsEnter)
            .attr("x", 0)
            .attr("y", function(d) { return yScale(d[self.config.yParameter]) })
            .attr("height", yScale.bandwidth())
            .transition()
            .duration(500)
            .attr("width", function(d) { return xScale(d[self.config.xParameter]) });

        ;

        this.barLabels
            .merge(this.barLabelsEnter)
            .text(function(d) {

                let text = d[self.config.yParameter];

                return text ;
            })
            .attr('transform', function(d) {
                    let offset = (window.innerWidth > breakpoints.bax) ? -(yScale.bandwidth() * .15) : 0;
                    return 'translate(' + -self.config.padding.left + ',' +  (yScale(d[self.config.yParameter]) + (yScale.bandwidth() + offset)) + ')';
            })
            ;

        this.barValues
            .merge(this.barValuesEnter)
            .text(function(d) {

                let text = d[self.config.xParameter];

                if (no_respondents) {
                    let avg = (Math.round((10 * 100) * (d[self.config.xParameter] / no_respondents)) / 10).toString() + '%';
                    text = text + ' (' + avg + ')';
                }

                return text ;
            })
            .attr('transform', function(d) {

                let offset = (window.innerWidth > breakpoints.bax) ? -(yScale.bandwidth() * .15) : 0;
                return 'translate(' + (xScale(d[self.config.xParameter]) + 6) + ',' +  (yScale(d[self.config.yParameter]) + (yScale.bandwidth() + offset)) + ')';
            })
            .attr('fill-opacity', 0)
            .transition()
            .delay(500)
            .duration(500)
            .attr('fill-opacity', 1);
            // .attr('fill-opacity', 0)
            // .transition()
            // .delay(500)
            // .duration(500)
            // .attr('fill-opacity', 1)
    }
}



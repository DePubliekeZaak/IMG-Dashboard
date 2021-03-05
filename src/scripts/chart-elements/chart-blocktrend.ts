import {convertToCurrency, displayDate} from '../helpers/_helpers';
import { colours} from "../_styleguide/_colours";
import * as d3 from "d3";
import {getLongMonthFromNumber, getMonthFromNumber} from "../utils/date-object.utils";

export class ChartBlockTrend {

    bars;
    barsEnter;

    barLabels;
    barLabelsEnter


    constructor(
        private config,
        private svgLayers
    ){}

    draw(data) {

        this.bars = this.svgLayers.data.selectAll(".bar")
            .data(data);

        this.bars.exit().remove();

        this.barsEnter = this.bars
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("fill", (d) => colours['moss'][1])
        ;

        this.barLabels = this.svgLayers.data.selectAll(".barLabel")
            .data(data);

        this.barLabels.exit().remove();

        this.barLabelsEnter = this.barLabels
            .enter()
            .append('text')
            .attr('class','barLabel small-label')
            .attr('x', 0)
            .attr('dx', '0px')
            .attr('dy', '-6px')
            .style("text-anchor", "middle")

            ;
    }

    redraw(dimensions,xScale,yScale) {

        let self = this;

        this.bars
            .merge(this.barsEnter)
            .attr("x", function(d) {

                if (self.config.xParameter === '_date') {

                    return xScale(d[self.config.xParameter]);

                } else {

                    return xScale(d[self.config.xParameter]);
                }
            })
            .attr("y", function(d) { return dimensions.height; })
            .attr("height", 0)
            .attr("width", function(d) {

                if (self.config.xParameter === '_date') {

                    return 60;
                } else {

                    return xScale.bandwidth()
                }

            })
            .transition()
            .duration(500)
            .attr("y", (d) => (this.config.extra.privacySensitive && d[self.config.yParameter] < 25) ? dimensions.height : yScale(d[self.config.yParameter]))
            .attr("height", (d) => (this.config.extra.privacySensitive && d[self.config.yParameter] < 25) ? 0 : dimensions.height - yScale(d[self.config.yParameter]))


        this.bars
            .merge(this.barsEnter)
            .on("mouseover", function (d) {

                d3.select('.tooltip')
                    .html(() => {

                            console.log(d);

                            return 'Maand: ' + getLongMonthFromNumber(d._month)+ '<br/>' +
                                'Rapportcijfer: ' + Math.round(d[self.config.yParameter] * 10) / 10  + '</b><br/>' +
                                'Respondenten: ' + d['aantal_respondenten'];


                    })
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY) + "px")
                    .transition()
                    .duration(250)
                    .style("opacity", 1);
            })
            .on("mouseout", function (d) {

                d3.select('.tooltip')
                    .transition()
                    .duration(250)
                    .style("opacity", 0);
            });
        ;

        this.barLabels
            .merge(this.barLabelsEnter)
            .text((d) => Math.round(d[self.config.yParameter] * 10) / 10)
            .attr('transform', function(d) {

                    return 'translate(' + (xScale(d[self.config.xParameter]) + (xScale.bandwidth() / 2)) + ',' +
                        ((self.config.extra.privacySensitive && d[self.config.yParameter] < 25) ? dimensions.height : yScale(d[self.config.yParameter]))
                        + ')';
            })
            .attr('fill-opacity', 0)
            .transition()
            .delay(500)
            .duration(500)
            .attr('fill-opacity', 1)
    }
}



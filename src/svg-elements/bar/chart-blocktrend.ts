import { colours} from "../../_styleguide/_colours";
import * as d3 from "d3";
import {getLongMonthFromNumber} from "../../utils/date-object.utils";
import { DataPart } from '../../types/data';

export default class ChartBlockTrend {

    bars;
    barsEnter;

    barLabels;
    barLabelsEnter


    constructor(
        private ctrlr,
    ){}

    draw(data: DataPart[]) {

        this.bars = this.ctrlr.svg.layers.data.selectAll(".bar")
            .data(data)
            .join("rect")
            .attr("class", "bar")
            .attr("fill", (d) => colours['moss'][1])
        ;

        this.barLabels = this.ctrlr.svg.layers.data.selectAll(".barLabel")
            .data(data)
            .join('text')
            .attr('class','barLabel small-label')
            .attr('x', 0)
            .attr('dx', '0px')
            .attr('dy', '-6px')
            .style("text-anchor", "middle")

            ;
    }

    redraw() {

        let self = this;

        this.bars
            .attr("x", (d: any) => {
                    return self.ctrlr.xScale(d[self.ctrlr.xParameter]);
            })
            .attr("y", this.ctrlr.dimensions.height)
            .attr("height", 0)
            .attr("width", (d: any) => {

                if (self.ctrlr.xParameter === '_date') {

                    return 60;
                } else {

                    return self.ctrlr.xScale.bandwidth()
                }

            })
            .transition()
            .duration(500)
            .attr("y", (d) => (this.ctrlr.graphObject.config.extra.privacySensitive && d[self.ctrlr.graphObject.config.yParameter] < 25) ? this.ctrlr.dimensions.height : this.ctrlr.yScale(d[self.ctrlr.graphObject.config.yParameter]))
            .attr("height", (d) => (this.ctrlr.graphObject.config.extra.privacySensitive && d[self.ctrlr.graphObject.config.yParameter] < 25) ? 0 : this.ctrlr.dimensions.height - this.ctrlr.yScale(d[self.ctrlr.graphObject.config.yParameter]))


        this.bars
            .on("mouseover", function (event:  any, d: any) {

                d3.select(event.target)
                    .attr("fill", colours['moss'][0])

                d3.select('.tooltip')
                    .html(() => {

                            return 'Maand: ' + getLongMonthFromNumber(d._month)+ '<br/>' +
                                'Rapportcijfer: ' + Math.round(d[self.ctrlr.graphObject.config.yParameter] * 10) / 10  + '</b><br/>' +
                                'Respondenten: ' + d['aantal_respondenten'];


                    })
                    .style("left", (event.pageX) + "px")
                    .style("top", (event.pageY) + "px")
                    .transition()
                    .duration(250)
                    .style("opacity", 1);
            })
            .on("mouseout", function (event: any, d: any) {

                d3.select(event.target)
                    .attr("fill", colours['moss'][1])

                d3.select('.tooltip')
                    .transition()
                    .duration(250)
                    .style("opacity", 0);
            });
        ;

        this.barLabels
            .text((d: any) => Math.round(d[self.ctrlr.graphObject.config.yParameter] * 10) / 10)
            .attr('transform', (d: any) => {

                    return 'translate(' + (this.ctrlr.xScale(d[self.ctrlr.graphObject.config.xParameter]) + (this.ctrlr.xScale.bandwidth() / 2)) + ',' +
                        ((self.ctrlr.graphObject.config.extra.privacySensitive && d[self.ctrlr.graphObject.config.yParameter] < 25) ? this.ctrlr.dimensions.height : this.ctrlr.yScale(d[self.ctrlr.yParameter]))
                        + ')';
            })
            .attr('fill-opacity', 0)
            .transition()
            .delay(500)
            .duration(500)
            .attr('fill-opacity', 1)
    }
}



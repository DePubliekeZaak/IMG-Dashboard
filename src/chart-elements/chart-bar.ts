import { convertToCurrency } from '../helpers/_helpers';
import { colours} from "../_styleguide/_colours";

export class ChartBar {

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
            .attr("fill", (d) => colours[d.colour][0])
        ;

        this.barLabels = this.svgLayers.data.selectAll(".barLabel")
            .data(data);

        this.barLabels.exit().remove();

        this.barLabelsEnter = this.barLabels
            .enter()
            .append('text')
            .attr('class','barLabel smallest-label')
            .attr('x', 0)
            .attr('dx', '0px')
            .attr('dy', '-4px')
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

        ;

        this.barLabels
            .merge(this.barLabelsEnter)
            .text(function(d) {

                if(self.config.extra.currencyLabels) {
                    return convertToCurrency(d[self.config.yParameter]);

                } else if(self.config.extra.percentage) {

                    return d[self.config.yParameter] + "%";

                } else {
                    return (self.config.extra.privacySensitive && d[self.config.yParameter] < 25) ? '< 25' : d[self.config.yParameter] ;
                }
            })
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



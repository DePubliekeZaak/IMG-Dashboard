import { convertToCurrency } from '../helpers/_helpers';

export class ChartBar {

    constructor(
        private config,
        private svg
    ){}

    draw(data) {

        this.svg.bar = this.svg.layers.data.selectAll(".bar")
            .data(data);

        this.svg.bar.exit().remove();

        this.svg.barEnter = this.svg.bar
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("fill", (d) => d.colour)
        ;

        this.svg.barLabels = this.svg.layers.data.selectAll(".barLabel")
            .data(data);

        this.svg.barLabels.exit().remove();

        this.svg.barLabelsEnter = this.svg.barLabels
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

        this.svg.bar
            .merge(this.svg.barEnter)
            .attr("x", function(d) {

                if (this.config.xParameter === '_date') {

                    return xScale(new Date(d[this.config.xParameter]));

                } else {

                    return xScale(d[this.config.xParameter]);
                }
            })
            .attr("y", function(d) { return dimensions.height; })
            .attr("height", 0)
            .attr("width", function(d) {

                if (this.config.xParameter === '_date') {

                    return 60;
                } else {

                    return xScale.bandwidth()
                }

            })
            .transition()
            .duration(500)
            .attr("y", (d) => yScale(d[this.config.yParameter]) + this.config.padding.top)
            .attr("height", (d) => { dimensions.height - yScale(d[this.config.yParameter]) } )

        ;

        this.svg.barLabels
            .merge(this.svg.barLabelsEnter)
            .text(function(d) {

                if(this.config.currencyLabels) {

                    return convertToCurrency(d[this.config.yParameter]);

                } else {

                    return d[this.config.yParameter] ? d[this.config.yParameter] : '< 25';
                }


            })
            .attr('transform', function(d) {

                if (this.config.xParameter === '_date') {

                    return 'translate(' + (xScale(new Date(d[this.config.xParameter]))) + 60 + ',' +
                        (yScale(d[this.config.yParameter]) + this.config.padding.top)

                } else {

                    return 'translate(' + (xScale(d[this.config.xParameter]) + (xScale.bandwidth() / 2)) + ',' +
                        (yScale(d[this.config.yParameter]) + this.config.padding.top)
                        + ')';
                }
            })
            .attr('fill-opacity', 0)
            .transition()
            .delay(500)
            .duration(500)
            .attr('fill-opacity', 1)
    }
}



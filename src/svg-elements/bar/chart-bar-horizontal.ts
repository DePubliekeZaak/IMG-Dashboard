
import { breakpoints, colours} from "../../img-modules/_styleguide";

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
        private ctrlr
    ){}

    draw(data) {

        this.bars = this.ctrlr.svg.layers.data.selectAll(".bar")
            .data(data.filter((d) => d.colour))
            .join("rect")
            .attr("class", "bar")
            .attr("fill", (d) => colours[d.colour][1])
            .attr("stroke", (d) => colours[d.colour][0])
        ;

        this.barLabels = this.ctrlr.svg.layers.data.selectAll(".barLabel")
            .data(data.filter((d) => d.label))
            .join('text')
            .attr('class','barLabel small-label')
            .attr('x', 0)
            .attr('dx', '12px')
            .attr('dy', '-6px')
            .style("text-anchor", "end")

            ;

        this.barValues = this.ctrlr.svg.layers.data.selectAll(".barValue")
            .data(data)
            .join('text')
            .attr('class','barValue small-label')
            .attr('x', 0)
            .attr('dx', '0px')
            .attr('dy', '-6px')
            .style("text-anchor", "start")

        ;
    }

    redraw() {

        let self = this;

     //   let no_respondents = data.slice[0][this.ctrlr.graphObject.config.extra.columnForAverage]

        this.bars
            .attr("x", 0)
            .attr("y", (d) =>  this.ctrlr.scales.y.scale(d[this.ctrlr.parameters.y]))
            .attr("height", this.ctrlr.yScale.bandwidth())
            .transition()
            .duration(500)
            .attr("width", (d) => self.ctrlr.scales.x.scale(d[self.ctrlr.parameters.x]));

        ;

        this.barLabels
            .text((d: any) => {

                let text = d[self.ctrlr.parameters.y];

                return text ;
            })
            .attr('transform', function(d) {
                    let offset = (window.innerWidth > breakpoints.bax) ? -(self.ctrlr.scales.y.scale.bandwidth() * .15) : 0;
                    return 'translate(' + -self.ctrlr.config.padding.left + ',' +  (self.ctrlr.scales.y.scale(d[self.ctrlr.parameters.y]) + (self.ctrlr.scales.y.scale.bandwidth() + offset)) + ')';
            })
            ;

        this.barValues
            .text(function(d) {

                let text = d[self.ctrlr.parameters.x];
             
                if (d.no_respondents) {
                    let avg = (Math.round((10 * 100) * (d[self.ctrlr.parameters.x] / d.no_respondents)) / 10).toString() + '%';
                    text = text + ' (' + avg + ')';
                }

                return text ;
            })
            .attr('transform', function(d) {

                let offset = (window.innerWidth > breakpoints.bax) ? -(self.ctrlr.scales.y.scale.bandwidth() * .15) : 0;
                return 'translate(' + (self.ctrlr.scales.x.scale(d[self.ctrlr.parameters.x]) + 6) + ',' +  (self.ctrlr.scales.y.scale(d[self.ctrlr.parameters.y]) + (self.ctrlr.scales.y.scale.bandwidth() + offset)) + ')';
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



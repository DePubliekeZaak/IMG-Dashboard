import { convertToCurrency } from '../../d3-services/_helpers';
import { D3DataTypeHistorical, D3DataTypeLatest } from '../../types/data';
import { colours} from "../../_styleguide/_colours";
import { DataPart } from "../../types/data";

export class ChartBar {

    bars;
    barsEnter;

    barLabels;
    barLabelsEnter

    constructor(
        private ctrlr
    ){}

    draw(data) {

        this.bars = this.ctrlr.svg.layers.data.selectAll(".bar")
            .data(data)
            .join("rect")
            .attr("class", "bar")
            .attr("fill", (d) => colours[d.colour][0])
        ;

        this.barLabels = this.ctrlr.svg.layers.data.selectAll(".barLabel")
            .data(data)
            .join('text')
            .attr('class','barLabel smallest-label')
            .attr('x', 0)
            .attr('dx', '0px')
            .attr('dy', '-4px')
            .style("text-anchor", "middle")
            ;
    }

    redraw(data: D3DataTypeHistorical[]) {

        let self = this;

        this.bars
            .attr("x", (d: DataPart)  => {
                return self.ctrlr.xScale(d[self.ctrlr.xParameter]);
            })
            .attr("y", self.ctrlr.dimensions.height)
            .attr("height", 0)
            .attr("width",  (self.ctrlr.graphObject.config.xScaleType === 'band') ? self.ctrlr.xScale.bandwidth() : self.ctrlr.dimensions.width / data.length - 1)
            .transition()
            .duration(500)
            .attr("y", (d) => (this.ctrlr.graphObject.config.extra.privacySensitive && d[self.ctrlr.yParameter] < 25) ? self.ctrlr.dimensions.height : self.ctrlr.yScale(d[self.ctrlr.yParameter]))
            .attr("height", (d) => (this.ctrlr.graphObject.config.extra.privacySensitive && d[self.ctrlr.yParameter] < 25) ? 0 : self.ctrlr.dimensions.height - self.ctrlr.yScale(d[self.ctrlr.yParameter]))

        ;

        this.barLabels
            .text( (d) => {

                if(self.ctrlr.graphObject.config.extra.currencyLabels) {
                    return convertToCurrency(d[self.ctrlr.yParameter]);

                } else if(self.ctrlr.graphObject.config.extra.percentage) {

                    return d[self.ctrlr.yParameter] + "%";

                } else {
                    return (self.ctrlr.graphObject.config.extra.privacySensitive && d[self.ctrlr.yParameter] < 25) ? '< 25' : d[self.ctrlr.yParameter] ;
                }
            })
            .attr('transform', (d) => {

                    if (this.ctrlr.graphObject.config.xScaleType === "band") {

                        return 'translate(' + (self.ctrlr.xScale(d[self.ctrlr.xParameter]) + (self.ctrlr.xScale.bandwidth() / 2)) + ',' +
                            ((self.ctrlr.graphObject.config.extra.privacySensitive && d[self.ctrlr.yParameter] < 25) ? self.ctrlr.dimensions.height : self.ctrlr.yScale(d[self.ctrlr.yParameter]))
                            + ')';

                    } else {
                        
                        return 'translate(' + (self.ctrlr.dimensions.width / 2) + ',' +
                            ((self.ctrlr.graphObject.config.extra.privacySensitive && d[self.ctrlr.yParameter] < 25) ? self.ctrlr.dimensions.height : self.ctrlr.yScale(d[self.ctrlr.yParameter]))
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



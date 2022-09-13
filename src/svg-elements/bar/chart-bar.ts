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
            .attr("fill", (d) => colours[d.colour][1])
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
                return self.ctrlr.scales.x.fn(d[self.ctrlr.parameters.x]);
            })
            .attr("y", self.ctrlr.dimensions.height)
            .attr("height", 0)
            .attr("width",  (self.ctrlr.scales.x.config.type === 'band') ? self.ctrlr.scales.x.scale.bandwidth() : self.ctrlr.dimensions.width / data.length - 1)
            .transition()
            .duration(500)
            .attr("y", (d) => (this.ctrlr.config.extra.privacySensitive && d[self.ctrlr.parameters.y] < 25) ? self.ctrlr.dimensions.height : self.ctrlr.scales.y.fn(d[self.ctrlr.parameters.y]))
            .attr("height", (d) => (this.ctrlr.config.extra.privacySensitive && d[self.ctrlr.parameters.y] < 25) ? 0 : self.ctrlr.dimensions.height - self.ctrlr.scales.y.fn(d[self.ctrlr.parameters.y]))

        ;

        this.barLabels
            .text( (d) => {

                if(self.ctrlr.firstMapping.format === 'currency') {
                    return convertToCurrency(d[self.ctrlr.parameters.y]);

                } else if(self.ctrlr.firstMapping.format === 'percentage') {

                    return d[self.ctrlr.parameters.y] + "%";

                } else {
                    return (self.ctrlr.config.extra.privacySensitive && d[self.ctrlr.parameters.y] < 25) ? '< 25' : d[self.ctrlr.parameters.y] ;
                }
            })
            .attr('transform', (d) => {

                    if (this.ctrlr.scales.x.config.type === "band") {

                        return 'translate(' + (self.ctrlr.scales.x.fn(d[self.ctrlr.parameters.x]) + (self.ctrlr.scales.x.scale.bandwidth() / 2)) + ',' +
                            ((self.ctrlr.config.extra.privacySensitive && d[self.ctrlr.parameters.y] < 25) ? self.ctrlr.dimensions.height : self.ctrlr.scales.y.fn(d[self.ctrlr.parameters.y]))
                            + ')';

                    } else {
                        
                        return 'translate(' + (self.ctrlr.dimensions.width / 2) + ',' +
                            ((self.ctrlr.config.extra.privacySensitive && d[self.ctrlr.parameters.y] < 25) ? self.ctrlr.dimensions.height : self.ctrlr.scales.y.fn(d[self.ctrlr.parameters.y]))
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



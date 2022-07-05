import { convertToCurrency, displayDate } from '../../d3-services/_helpers';
import { D3DataTypeHistorical, D3DataTypeLatest, GraphData } from '../../types/data';
import { colours} from "../../_styleguide/_colours";
import { DataPart } from "../../types/data";
import * as d3 from 'd3';

export class ChartBarTicker {

    bars;
    barsEnter;

    barLabels;
    barLabelsEnter

    constructor(
        private ctrlr
    ){}

    draw(data: GraphData) {

        this.bars = this.ctrlr.svg.layers.data.selectAll(".bar")
            .data(data.slice.slice(1, data.slice.length - 1))
            .join("rect")
            .attr("class", "bar")
            .attr("fill", (d) => colours[this.smartColour(d,data)][1])
        ;
    }

    smartColour(d,data:  GraphData) : string {

        if(this.ctrlr.config.extra.smartColours === 'up') {
                
            return d[this.ctrlr.parameters.y] > data.average ? 'moss' : 'orange'

        } else {

            return d[this.ctrlr.parameters.y] > data.average ? 'orange' : 'moss'
        }
    }

    redraw(data: GraphData) {

        let self = this;

        this.bars
            .attr("x", (d: DataPart)  => {
                return self.ctrlr.scales.x.scale(d[self.ctrlr.parameters.x]);
            })
            .attr("y", self.ctrlr.dimensions.height)
            .attr("height", 0)
            .attr("width", self.ctrlr.dimensions.width / data.slice.length - 2)
            .transition()
            .duration(500)
            .attr("y", (d) => (this.ctrlr.config.extra.privacySensitive && d[self.ctrlr.parameters.y] < 25) ? self.ctrlr.dimensions.height : self.ctrlr.scales.y.scale(d[self.ctrlr.parameters.y]))
            .attr("height", (d) => (this.ctrlr.config.extra.privacySensitive && d[self.ctrlr.parameters.y] < 25) ? 0 : self.ctrlr.dimensions.height - self.ctrlr.scales.y.scale(d[self.ctrlr.parameters.y]))
            
        this.bars
            .on("mouseover", function (event: any, d: any) {

                d3.select(this).attr("fill", () => colours[self.smartColour(d,data)][0]);
            
                let date = new Date(d[self.ctrlr.parameters.x]);

                d3.select('.tooltip')
                    .html(() => {

                        if (self.ctrlr.scales.x.config.type === 'time') {

                            return 'Gerapporteerd op ' + displayDate(date) + '<br/><b>'
                                + Math.round(d[self.ctrlr.parameters.y] * 10) / 10  + '</b><br/>'

                        } else {

                            return 'Week: ' + d._week + '<br/>Aantal: ' + d[self.ctrlr.parameters.y] + '<br/>Gem. sinds 2019: ' + Math.round(data.average);  
                        }
                    })
                    .style("left", (event.pageX) + "px")
                    .style("top", (event.pageY) + "px")
                    .transition()
                    .duration(250)
                    .style("opacity", 1);
            })
            .on("mouseout", function (event, d) {

                d3.select(this).attr("fill", () => colours[self.smartColour(d,data)][1]);

                d3.select('.tooltip')
                    .transition()
                    .duration(250)
                    .style("opacity", 0);
            });
        ;
    }
}



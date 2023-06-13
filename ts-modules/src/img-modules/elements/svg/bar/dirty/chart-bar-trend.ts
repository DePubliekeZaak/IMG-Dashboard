import { convertToCurrency } from '@local/d3-services';
import { colours} from "@local/styleguide";
import { DataPart, D3DataTypeHistorical, D3DataTypeLatest } from "@local/d3_types";

export default class ChartBarTrend {

    bars;

    constructor(
        private ctrlr,
        private yParameter : string,
        private colour:  string
    ){
    }

    draw(data) {

        this.bars = this.ctrlr.svg.layers.data.selectAll(".bar_" + this.yParameter)
            .data(data.slice)
            .join("rect")
            .attr("class", "bar_" + this.yParameter)
            .attr("fill", (d) => colours[this.colour][1])
        ;

    }

    redraw(data: D3DataTypeHistorical[]) {

        let self = this;

        let barWidth = this.ctrlr.dimensions.width / data.slice.length - 1;

        this.bars
            .attr("x", (d: DataPart, i: number)  => {
                return i > 0 ? self.ctrlr.scales.x.fn(d[self.ctrlr.parameters.x]) - barWidth : 0;
            })
            .attr("y", self.ctrlr.dimensions.height)
            .attr("height", 0)
            .attr("width", barWidth)
            .transition()
            .duration(500)
            .attr("y", (d) => (this.ctrlr.config.extra.privacySensitive && d[self.yParameter] < 25) ? self.ctrlr.dimensions.height : self.ctrlr.scales.y.fn(d[self.yParameter]))
            .attr("height", (d) => { 

                let h = self.ctrlr.dimensions.height - self.ctrlr.scales.y.fn(d[self.yParameter]);

                if (h < 0) {
                //   console.log(d)
                    h = 0;
                }
                
               return (this.ctrlr.config.extra.privacySensitive && d[self.yParameter] < 25) ? 0 : h;
            })

        ;

    }
}



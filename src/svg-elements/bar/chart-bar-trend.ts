import { convertToCurrency } from '../../d3-services/_helpers';
import { D3DataTypeHistorical, D3DataTypeLatest } from '../../types/data';
import { colours} from "../../_styleguide/_colours";
import { DataPart } from "../../types/data";

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

        this.bars
            .attr("x", (d: DataPart)  => {
                return self.ctrlr.scales.x.fn(d[self.ctrlr.parameters.x]);
            })
            .attr("y", self.ctrlr.dimensions.height)
            .attr("height", 0)
            .attr("width",  self.ctrlr.dimensions.width / data.slice.length - 1)
            .transition()
            .duration(500)
            .attr("y", (d) => (this.ctrlr.config.extra.privacySensitive && d[self.yParameter] < 25) ? self.ctrlr.dimensions.height : self.ctrlr.scales.y.fn(d[self.yParameter]))
            .attr("height", (d) => (this.ctrlr.config.extra.privacySensitive && d[self.yParameter] < 25) ? 0 : self.ctrlr.dimensions.height - self.ctrlr.scales.y.fn(d[self.yParameter]))

        ;

    }
}



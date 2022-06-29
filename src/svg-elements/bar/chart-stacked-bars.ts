import { convertToCurrency } from '../../d3-services/_helpers';
import { D3DataTypeHistorical, D3DataTypeLatest } from '../../types/data';
import { colours} from "../../_styleguide/_colours";
import { DataPart } from "../../types/data";

export default class ChartStackedBars {

    bars;
    barsEnter;

    barLabels;
    barLabelsEnter;

    group;
    series;

    constructor(
        private ctrlr
    ){}

    draw(data) {

        this.series = this.ctrlr.svg.layers.data.selectAll("g.serie")
            .data(data)
            .join("g")
            .attr("class", "serie")
            .attr("fill", (d,i) => colours[this.ctrlr.graphObject.mapping[0][i]['colour']][0])



        this.bars = this.series.selectAll(".bar")
            .data(d => d)
            .join("rect")
            .attr("class", "bar")
            
        ;

    }

    redraw(data: any[][]) {

        let self = this;

        this.bars
            .attr("x", (d: any)  => self.ctrlr.scales.x.scale(d.data[self.ctrlr.xParameter]))
            .attr("y", self.ctrlr.dimensions.height)
            .attr("height", 0)
            .attr("width", self.ctrlr.dimensions.width / data[0].length - 1)
            .transition()
            .duration(500)
            .attr("y", (d) => self.ctrlr.scales.y.scale(d[1]))
            .attr("height", (d) => self.ctrlr.scales.y.scale(d[0]) - self.ctrlr.scales.y.scale(d[1]))

        ;

    }
}



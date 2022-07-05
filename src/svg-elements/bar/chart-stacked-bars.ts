import { convertToCurrency } from '../../d3-services/_helpers';
import { D3DataTypeHistorical, D3DataTypeLatest } from '../../types/data';
import { colours} from "../../_styleguide/_colours";
import { DataPart } from "../../types/data";
import * as d3 from 'd3';

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

        const mapping = this.ctrlr.mapping ? this.ctrlr.mapping.parameters : this.ctrlr.graphObject.mapping;

        this.series = this.ctrlr.svg.layers.data.selectAll("g.serie")
            .data(data)
            .join("g")
            .attr("class", (d,i) => "serie " + mapping[0][i]['colour'])
            .attr("fill", (d,i) => colours[mapping[0][i]['colour']][0])

        this.bars = this.series.selectAll(".bar")
            .data(d => d)
            .join("rect")
            .attr("class", "bar")
        ;
    }

    redraw(data: any[][]) {

        let self = this;

        const mapping = this.ctrlr.mapping ? this.ctrlr.mapping.parameters : this.ctrlr.graphObject.mapping;

        this.bars
            .attr("x", (d: any)  => self.ctrlr.scales.x.scale(d.data[self.ctrlr.parameters.x]))
            .attr("y", self.ctrlr.dimensions.height)
            .attr("height", 0)
            .attr("width", self.ctrlr.dimensions.width / data[0].length - 1)
            .transition()
            .duration(500)
            .attr("y", (d) => self.ctrlr.scales.y.scale(d[1]))
            .attr("height", (d) => self.ctrlr.scales.y.scale(d[0]) - self.ctrlr.scales.y.scale(d[1]))
        ;

        this.bars
        .on("mouseover", function (event:  any, d: any) {

            let colour = event.target.parentNode.classList[1];
       

            d3.select(event.target)
                .attr("fill", colours[colour][1])

            d3.select('.tooltip')
                .html(() => {

                        let html =  'Week ' + d.data._week + '<br/>'; 

                        for (let p of self.ctrlr.mapping.parameters[0]) {
                                html += p.short + ': ' + d.data[p.column] + '<br/>';
                        }

                        html += 'cummulatief' + ': ' + Math.round(d.data['percentage'] * 10) / 10 + '%<br/>';

                        return html;

                })
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY) + "px")
                .transition()
                .duration(250)
                .style("opacity", 1);
        })
        .on("mouseout", function (event: any, d: any, i: number) {

            d3.select(event.target)
                .attr("fill", "inherit")

            d3.select('.tooltip')
                .transition()
                .duration(250)
                .style("opacity", 0);
        });
    ;

    }
}



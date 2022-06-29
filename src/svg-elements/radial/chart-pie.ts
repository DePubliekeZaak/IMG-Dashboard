import * as d3 from "d3";
import { convertToCurrency, displayDate } from "../../d3-services/_helpers";
import { DataPart } from "../../types/data";
import { colours } from '../../_styleguide/_colours';

export class ChartPie {

    constructor(
        private ctrlr
    ){}

    draw(data: any[][]) {

        let self = this;

        let pie = d3.pie()
            .sort(null)
            .value((d) => d['value']);


        this.ctrlr.svg.arcs = this.ctrlr.svg.layers.data.selectAll(".arc")
            .data(pie(data[0]), (d => d.data.label))
            .join("path")
            .attr("class", "arc")
            .attr("fill", (d: any) => colours[d.data.colour][0])
            .attr("stroke", "#fff")
            .attr("stroke-width", "2px")
            .on("mouseover", function (event: any, d: any, array: any[]) {

                self.ctrlr.svg.arcs
                    .attr("fill", (dd: any) => colours[dd.data.colour][1]);

                d3.select(event.target)
                    .attr("fill", (dd: any) => colours[dd.data.colour][0]);
                 
                let date = new Date(d[self.ctrlr.xParameter]);

                d3.select('.tooltip')
                    .html((dd: any) => {

                        let value = self.ctrlr.graphObject.config.extra.currencyLabels ? convertToCurrency(d['value']) : d['value'];

                        return '<b>' + d['data']['label'] + '</b><br/>' + value;
                    })
                    .style("left", (event.pageX) + "px")
                    .style("top", (event.pageY) + "px")
                    .transition()
                    .duration(250)
                    .style("opacity", 1);
            })
            .on("mouseout", function (event: any, d: any) {

                self.ctrlr.svg.arcs
                    .attr("fill", (dd:any) => colours[dd.data.colour][0]);

                d3.select('.tooltip')
                    .transition()
                    .duration(250)
                    .style("opacity", 0);
            });
    }

    redraw() {

        let radius, arc, labelArc, innerRadius;


        if(window.innerWidth < 700) {

            radius = 90;
            innerRadius = 20;

            this.ctrlr.svg.layers.data
                .attr("transform", "translate(" + (this.ctrlr.dimensions.width / 2) + "," + 100 + ")");

            labelArc = d3.arc()
                .outerRadius(radius - 0)
                .innerRadius(radius - 0);

            arc = d3.arc()
                .outerRadius(radius - 0)
                .innerRadius(innerRadius);

        } else {

            innerRadius = (this.ctrlr.graphObject.config.extra.innerRadius !== undefined) ? this.ctrlr.graphObject.config.extra.innerRadius : 30;

            let offset = ( this.ctrlr.graphObject.config.extra.maxRadius / 2)  + (this.ctrlr.dimensions.width - this.ctrlr.graphObject.config.extra.maxRadius) / 2;

            this.ctrlr.svg.layers.data
                .attr("transform", "translate(" + offset + "," + ((this.ctrlr.graphObject.config.extra.maxRadius) + 20) + ")");

            radius = this.ctrlr.dimensions.svgWidth / 3;

            if(radius > (this.ctrlr.graphObject.config.extra.maxRadius)) {
                radius = this.ctrlr.graphObject.config.extra.maxRadius;
            }

            labelArc = d3.arc()
                .outerRadius(this.ctrlr.graphObject.config.extra.maxRadius)
                .innerRadius(this.ctrlr.graphObject.config.extra.maxRadius);

            arc = d3.arc()
                .outerRadius(this.ctrlr.graphObject.config.extra.maxRadius)
                .innerRadius(this.ctrlr.graphObject.config.extra.innerRadius);
        }

        function arcTween(a) {

            var i = d3.interpolate(this._current, a);
            this._current = i(0);
            return function(t) {
                return arc(i(t));
            };
        }

        this.ctrlr.svg.arcs
            .transition()
            .duration(500)
            .attrTween("d", arcTween);


        this.ctrlr.svg.arcs.select('.arc')
            .attr("d", arc)
            .each(function(d) { this._current = d; });
    }
}

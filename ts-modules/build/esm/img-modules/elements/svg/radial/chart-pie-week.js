import colours from "@local/styleguide/_colours";
import * as d3 from "d3";
export class ChartPieWeek {
    constructor(ctrlr) {
        this.ctrlr = ctrlr;
    }
    draw(data) {
        const config = this.ctrlr.config ? this.ctrlr.config : this.ctrlr.graphObject.config;
        let self = this;
        let pie = d3.pie()
            .sort(null)
            .value((d) => d['value']);
        //   console.log(data[0]);
        this.ctrlr.svg.arcs = this.ctrlr.svg.layers.data.selectAll(".arc")
            .data(pie(data), (d => d.data.label))
            .join("path")
            .attr("class", "arc")
            .attr("fill", (d) => colours[d.data.colour][1])
            .attr("stroke", (d) => colours[d.data.colour][0])
            .attr("stroke-width", "1px")
            .on("mouseover", function (event, d, array) {
            self.ctrlr.svg.arcs
                .attr("fill", (dd) => colours[dd.data.colour][1]);
            d3.select(event.target)
                .attr("fill", (dd) => colours[dd.data.colour][0]);
            d3.select('.tooltip')
                .html((dd) => {
                let value = d['value'];
                return '<b>' + d['data']['label'] + '</b><br/>' + value;
            })
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY) + "px")
                .transition()
                .duration(250)
                .style("opacity", 1);
        })
            .on("mouseout", function (event, d) {
            self.ctrlr.svg.arcs
                .attr("fill", (dd) => colours[dd.data.colour][1]);
            d3.select('.tooltip')
                .transition()
                .duration(250)
                .style("opacity", 0);
        });
    }
    redraw(data) {
        let radius, arc, labelArc, innerRadius;
        const config = this.ctrlr.config ? this.ctrlr.config : this.ctrlr.graphObject.config;
        if (window.innerWidth < 700) {
            radius = 90;
            innerRadius = 20;
            this.ctrlr.svg.layers.data
                .attr("transform", "translate(" + (this.ctrlr.dimensions.width / 2) + "," + 100 + ")");
            labelArc = d3.arc()
                .outerRadius(radius - 0)
                .innerRadius(radius - 0);
            arc = d3.arc()
                .outerRadius(radius - 0)
                .innerRadius(innerRadius)
                .padAngle(4)
                .padRadius(4);
        }
        else {
            innerRadius = (config.extra.innerRadius !== undefined) ? config.extra.innerRadius : 30;
            let offset = (config.extra.maxRadius / 2) + (this.ctrlr.dimensions.width - config.extra.maxRadius) / 2;
            this.ctrlr.svg.layers.data
                .attr("transform", "translate(" + offset + "," + ((config.extra.maxRadius) + 20) + ")");
            radius = this.ctrlr.dimensions.svgWidth / 3;
            if (radius > (config.extra.maxRadius)) {
                radius = config.extra.maxRadius;
            }
            labelArc = d3.arc()
                .outerRadius(config.extra.maxRadius)
                .innerRadius(config.extra.maxRadius);
            arc = d3.arc()
                .outerRadius(config.extra.maxRadius)
                .innerRadius(config.extra.innerRadius)
                .padAngle(4)
                .padRadius(4);
        }
        function arcTween(a) {
            var i = d3.interpolate(this._current, a);
            this._current = i(0);
            return function (t) {
                return arc(i(t));
            };
        }
        this.ctrlr.svg.arcs
            .transition()
            .duration(500)
            .attrTween("d", arcTween);
        this.ctrlr.svg.arcs.select('.arc')
            .attr("d", arc)
            .each(function (d) { this._current = d; });
    }
}

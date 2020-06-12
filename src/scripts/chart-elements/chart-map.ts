import * as d3 from "d3";
import { colours } from '../_styleguide/_colours.js';
import { convertToCurrency, shortenCurrency, slugify } from '../helpers/_helpers';

export class ChartMap {


    projection;
    path;

    constructor(
        private config,
        private svg,
        private dimensions
    ) {}


    init() {

        this.projection = d3.geoMercator();

        this.path = d3.geoPath()
            .projection(this.projection);

        var b = [
                [0.114, -1.101],
                [0.12022108488117365, -1.105]
            ],
            s = .125 / Math.max((b[1][0] - b[0][0]) / this.dimensions.svgWidth, (b[1][1] - b[0][1]) / this.dimensions.height),
            t = [((this.dimensions.svgWidth - s * (b[1][0] + b[0][0])) / 2) + 60, ((this.dimensions.height - s * (b[1][1] + b[0][1])) / 2)  - 60];

        this.projection
            .scale(s)
            .translate(t)
        ;
    }


    draw(features) {
        let self = this;

        this.svg.map = this.svg.layers.data.selectAll("path")
            .data(features)
            .enter()
            .append("path")
            .attr("class", function (d, i) {
                return slugify(d.properties.gemeentenaam);
            })
            .attr("d", this.path)
            .attr("stroke", "#fff")
            ;

        this.svg.values = this.svg.layers.data.selectAll(".value")
            .data(features)
            .enter()
            .append("text")
            .attr("class", "value small-label")
            .attr("x", function (d) {

                if (slugify(d.properties.gemeentenaam) === 'delfzijl') {
                    return self.path.centroid(d)[0] + 20;
                } else {
                    return self.path.centroid(d)[0];
                }
            })
            .attr("y", function (d) {

                if (slugify(d.properties.gemeentenaam) === 'delfzijl') {
                    return self.path.centroid(d)[1] + 20;
                } else {
                    return self.path.centroid(d)[1];
                }
            })
            .attr("text-anchor", "middle")
            .style("font-size",".66rem");
    }

    redraw(dimensions,property,scale,colour) {

        let self = this;

        this.svg.map
            .merge(this.svg.map)
            .attr("fill", d => {
                const c = (colour) ? colour : d.properties.colour;

                return (property !== undefined && d.properties[property] > 0) ? (colours[c][0] || colours[c][0] ): '#eee'
            } )
            .attr("fill-opacity", d => (d.properties[property] > 0) ? scale(d.properties[property]) : 1)
            .on("mouseover", function (d) {

                let html = "<div class='uppercase'>" + d.properties.gemeentenaam + "</div><div>" + d.properties[property] + "</div>";

                if (property === 'TOTAAL_VERLEEND') {
                    html = "<div class='uppercase'>" + d.properties.gemeentenaam + "</div><div>" + convertToCurrency(d.properties[property]) + "</div>";
                }

                if(d.properties[property] && d.properties[property] > 0) {

                    // self.svg.layers.data.selectAll("path")
                    //     .style("stroke", b => (b === d) ? colours[b.properties.colour][0] : "#fff");

                    d3.select('.tooltip')
                        .html(html)
                        .style("left", (d3.event.pageX + 5) + "px")
                        .style("top", (d3.event.pageY - 5) + "px")
                        .transition()
                        .duration(250)
                        .style("opacity", 1);
                }
            })
            .on("mouseout", function (d) {

                // self.svg.layers.data.selectAll("path")
                    // .style("stroke", "#fff");
                //     .attr("fill", d => (d.properties[property] > 0) ? colours[d.properties.colour][0] : '#eee')
                //     .attr("fill-opacity", d => (d.properties[property] > 0) ? scale(d.properties[property]) : 1);

                d3.select('.tooltip')
                    .transition()
                    .duration(250)
                    .style("opacity", 0);
            });


            this.svg.values
                .text(function (d) {

                    if (d.properties[property] > 0) {

                        if (property === 'TOTAAL_VERLEEND' || property === 'bedrag_stuwmeer') {
                            return shortenCurrency(convertToCurrency(d.properties[property]));

                        } else if (property === 'percentage_stuwmeer') {

                            return parseInt(d.properties[property]).toString() + '%';
                        } else {

                            return d.properties[property];
                        }
                    }
                });

    }

    highlight(segment) {

        let self = this;

        this.svg.map
            .merge(this.svg.map)
            .attr("fill", d => {
                return (segment === d.properties.gemeenteSlug) ? '#595959' : '#eee'
            } )

    }
}

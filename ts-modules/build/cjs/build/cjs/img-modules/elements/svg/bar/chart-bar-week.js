"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartBarWeekV1 = void 0;
const styleguide_1 = require("@local/styleguide");
class ChartBarWeekV1 {
    constructor(ctrlr) {
        this.ctrlr = ctrlr;
    }
    draw(data) {
        this.bars = this.ctrlr.svg.layers.data.selectAll(".bar")
            .data(data)
            .join("rect")
            .attr("class", "bar")
            .attr("fill", (d, i) => styleguide_1.colours[d.colour][1])
            .attr("stroke", (d, i) => styleguide_1.colours[d.colour][0]);
        this.barLabels = this.ctrlr.svg.layers.data.selectAll(".barLabel")
            .data(data)
            .join('text')
            .attr('class', 'barLabel')
            // .attr('x', 0)
            .attr('dx', '10px')
            .attr('dy', '16px')
            .style("text-anchor", "start");
    }
    redraw(data) {
        let self = this;
        this.bars
            .attr("y", (d, i) => self.ctrlr.scales.y.fn(d.label))
            .attr("height", (d) => self.ctrlr.scales.y.scale.bandwidth()) // (this.ctrlr.config.extra.privacySensitive && d[self.ctrlr.parameters.y] < 25) ? 0 : self.ctrlr.dimensions.height - self.ctrlr.scales.y.fn(d[self.ctrlr.parameters.y]))
            // .attr("width", 0)
            .transition()
            .duration(500)
            .attr("x", (d) => {
            if (d.value >= 0) {
                return self.ctrlr.scales.x.fn(0);
            }
            else {
                return self.ctrlr.scales.x.fn(d.value);
            }
        })
            .attr("width", (d, i) => {
            if (d.value >= 0) {
                return self.ctrlr.scales.x.fn(d.value) - self.ctrlr.scales.x.fn(0);
            }
            else {
                return self.ctrlr.scales.x.fn(-(d.value)) - self.ctrlr.scales.x.fn(0);
            }
        });
        this.barLabels
            .html((d, i) => {
            if (d.format == 'revenue') {
                return d.value < 0 ? '-&#x20AC;' + (Math.round(100 * -d.value) / 100) + 'M' : '&#x20AC;' + (Math.round(100 * d.value) / 100) + 'M';
            }
            else if (d.format == 'percentage') {
                return (Math.round(100 * d.value) / 100) + '%';
            }
            else if (d.value != 0) {
                return Math.round(100 * d.value) / 100;
            }
        })
            .attr('transform', (d, i) => {
            const x = d.value > 0 ? self.ctrlr.scales.x.fn(d.value) : self.ctrlr.scales.x.fn(0);
            return 'translate(' + (0 + x) + ',' +
                ((self.ctrlr.scales.y.fn(d.label)))
                + ')';
        })
            .attr('fill-opacity', 1);
    }
}
exports.ChartBarWeekV1 = ChartBarWeekV1;

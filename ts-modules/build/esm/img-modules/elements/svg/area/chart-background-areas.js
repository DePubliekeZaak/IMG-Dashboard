import { colours } from '@local/styleguide';
import * as d3 from 'd3';
import { displayDate } from '@local/d3-services';
export class ChartBackgroundAreas {
    constructor(ctrlr) {
        this.ctrlr = ctrlr;
    }
    draw(data) {
        this.ctrlr.svg.lineFill = this.ctrlr.svg.layers.underData.selectAll('path.line_fill.' + this.ctrlr.parameters.x)
            .data(data)
            .join("path")
            .attr("class", "line_fill " + this.ctrlr.parameters.y);
    }
    redraw(data, colour) {
        const self = this;
        let area = d3.area()
            .x(d => this.ctrlr.scales.x.scale(new Date(d[this.ctrlr.parameters.x])))
            .y0(this.ctrlr.dimensions.height)
            .y1(d => this.ctrlr.scales.y.scale(d[this.ctrlr.parameters.y]))
            .curve(d3.curveLinear);
        this.ctrlr.svg.lineFill
            .attr("d", (d, i) => {
            if (i < data.length - 1)
                return area([data[i], data[i + 1]]);
        })
            .attr("fill", () => {
            // if (this.config.extra.smartColours === 'up') {
            //     if (data[0][yParameter] > data[1][yParameter]) {
            //         return colours['moss'][1];
            //     } else {
            //         return colours['orange'][1];
            //     }
            // } else if (this.config.extra.smartColours === 'down') {
            //     if(data[0][yParameter] < data[1][yParameter]) {
            //         return colours['moss'][1];
            //     } else {
            //         return colours['orange'][1];
            //     }
            // } else {
            return colours[colour][1];
            // }
        })
            .attr("stroke", "none")
            .attr("transform", function () {
            return (self.ctrlr.config.yScaleType === 'time') ? "translate(" + -(this.ctrlr.scales.x.scale(data[0][this.parameters.x]) - (this.ctrlr.dimensions.width / 2)) + ",0)" : "translate(0,0)";
        })
            .on("mouseover", function (event, d) {
            d3.select(this).attr("fill", () => {
                return colours[colour][2];
            });
            let date = new Date(d[self.ctrlr.parameters.x]);
            d3.select('.tooltip')
                .html(() => {
                return 'Gerapporteerd op ' + displayDate(date) + '<br/><b>'
                    + Math.round(d[self.ctrlr.parameters.y] * 10) / 10 + '</b><br/>';
            })
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY) + "px")
                // .transition()
                // .duration(250)
                .style("opacity", 1);
        })
            .on("mouseout", function (d) {
            d3.select(this).attr("fill", () => {
                return colours[colour][1];
            });
            d3.select('.tooltip')
                // .transition()
                // .duration(250)
                .style("opacity", 0);
        });
        ;
        console.log('redrawn areas');
    }
}

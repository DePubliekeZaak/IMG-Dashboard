import { colours } from '../_styleguide/_colours';
import { getWeek, getMonth } from '../utils/date-object.utils';

export class ChartMonthGrid {


    constructor(
        private config,
        private svg
    ) {

    }

    draw(data) {

            this.svg.monthLines = this.svg.layers.underData.selectAll(".monthLine")
                .data(data);

            this.svg.monthLines.exit().remove();

            this.svg.monthLinesEnter = this.svg.monthLines.enter()
                .append("line")
                .attr("class", "monthLine");

            this.svg.monthNumbers = this.svg.layers.underData.selectAll(".monthNumber")
                    .data(data.slice(0,data.length - 1));

            this.svg.monthNumbers.exit().remove();

            this.svg.monthNumbersEnter = this.svg.monthNumbers.enter()
                .append("text")
                .attr("class", "monthNumber smallest-label")
                .attr("text-anchor","middle")
                .attr("font-size",".75rem")
                .attr("font-family","NotoSans Regular");
    }

    redraw(xScale,yScale,dimensions,data,colour,yParameter) {

            let self = this;

            this.svg.monthLines
                .merge(this.svg.monthLinesEnter)
                .attr("x1", function (d) {
                    return (self.config.xScaleType === 'time') ? xScale(new Date(d[self.config.xParameter])) : -40
                })
                .attr("x2", function (d) {
                    return (self.config.xScaleType === 'time') ? xScale(new Date(d[self.config.xParameter])) : dimensions.width + 40
                })
                .attr("y1", function (d,i) {

                    if(self.config.yScaleType === 'time' && i === 0) {
                        return yScale(new Date(d[yParameter])) - 35;
                    } else {
                        return (self.config.yScaleType === 'time') ? yScale(new Date(d[yParameter])) : yScale(d[yParameter]) + 6;
                    }
                })
                .attr("y2", (d,i) => {

                    if(self.config.yScaleType === 'time' && i === 0) {

                        return yScale(new Date(d[yParameter])) - 35;
                    } else {
                        return (self.config.yScaleType === 'time') ? yScale(new Date(d[yParameter])) : dimensions.height;
                    }
                })
                .attr("fill", "none")
                .style("stroke", (this.config.extra.useLineFill) ? colours[colour][2] : colours.lightGrey)
                .style("stroke-width", (d,i) => (self.config.yScaleType === 'time' && i === 0) ? 0 : 1)
            // .style("stroke-dasharray", "2 4")
            ;

        this.svg.monthNumbers
                .merge(this.svg.monthNumbersEnter)

                .attr("x", function (d, i) {
                    return (self.config.xScaleType === 'time') ? xScale(new Date(d[self.config.xParameter])) : -35;
                })
                .attr("y", function (d,i) {

                    if (self.config.yScaleType === 'time' && i === 0) {
                        return yScale(new Date(d[yParameter])) - 66;
                    } else {
                        return (self.config.yScaleType === 'time') ? yScale(new Date(d[yParameter])) : dimensions.height  + 4; // - self.config.padding.bottom
                    }

                })
                .attr("dx", (this.config.extra.period === 'monthly') ? -22 : -16)
                .attr("dy", (this.config.xScaleType === 'time') ? 12 :  25)
                .attr("fill", colours.grey)
                .text(function (d, i) {

                    let date = new Date(d[self.config.xParameter]);
                    // we rapporteren over de month ervoor
                    date.setDate(date.getDate() - 7);

                    if (i === data.length - 1) {

                        return '';

                    } else {

                        return getMonth(date)
                    }
                })
                .style("text-anchor", (self.config.xScaleType === 'time') ? "middle" : "end");

            if(this.svg.monthLabel) {

                this.svg.monthLabel
                    .attr("y", function (d) {
                        return dimensions.height + 16;  // http://192.168.1.7:9966
                    })
                    .attr("x", -40)
                ;
            }
    }
}

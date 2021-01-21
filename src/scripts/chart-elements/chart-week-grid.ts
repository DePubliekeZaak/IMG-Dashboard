import { colours } from '../_styleguide/_colours.js';
import { getWeek, getMonth } from '../utils/date-object.utils';

export class ChartWeekGrid {


    constructor(
        private config,
        private svg
    ) {

        if(this.config.extra.firstInLine) {

            this.svg.weekLabel = this.svg.layers.data
                .append("text")
                .attr("class", "weekLabel")
                .attr("font-family", "NotoSans Regular")
                .attr("font-size", ".8rem")
                .attr("text-anchor", "end")
                .text("laatste 8 weken:")
            ;
        }
    }

    //
    // let popup = function popup(d) {
    //
    //     let date = new Date(d[config.xParameter]);
    //
    //     return moment(d[config.xParameter]).subtract(1, 'week').format('D/MM') + ' - '
    //         + moment(d[config.xParameter]).format('D/MM') + '<br/>'
    //         + d[config.yParameter] + '<br/>'
    //
    // }

    draw(data) {

            this.svg.weekLines = this.svg.layers.underData.selectAll(".weekLine")
                .data(data);

            this.svg.weekLines.exit().remove();

            this.svg.weekLinesEnter = this.svg.weekLines.enter()
                .append("line")
                .attr("class", "weekLine");

            this.svg.weekNumbers = this.svg.layers.underData.selectAll(".weekNumber")
                    .data(data.slice(0,data.length - 1));

            this.svg.weekNumbers.exit().remove();

            this.svg.weekNumbersEnter = this.svg.weekNumbers.enter()
                .append("text")
                .attr("class", "weekNumber smallest-label")
                .attr("text-anchor","middle")
                .attr("font-size",".75rem")
                .attr("font-family","NotoSans Regular");
    }

    redraw(xScale,yScale,dimensions,data,colour,yParameter) {

            let self = this;


            this.svg.weekLines
                .merge(this.svg.weekLinesEnter)
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

        this.svg.weekNumbers
                .merge(this.svg.weekNumbersEnter)

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
                    // we rapporteren over de week ervoor
                    date.setDate(date.getDate() - 7);

                    if (self.config.extra.period === 'monthly') {

                        return getMonth(date)

                    } else if (self.config.xScaleType === 'time') {

                        return getWeek(date) // (i < (data.length - 1)) ? getWeek(date) : '';

                    } else if (i === data.length - 1) {

                        return '';

                    } else {

                        return 'week ' + getWeek(date);
                    }
                })
                .style("text-anchor", (self.config.xScaleType === 'time') ? "middle" : "end");

            if(this.svg.weekLabel) {

                this.svg.weekLabel
                    .attr("y", function (d) {
                        return dimensions.height + 16;  // http://192.168.1.7:9966
                    })
                    .attr("x", -40)
                ;
            }
    }
}

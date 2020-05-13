import { colours } from '../_styleguide/_colours.js';
import { getWeek } from '../utils/date-object.utils';

export class ChartWeekGrid {


    constructor(
        private config,
        private svg
    ) {}

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

            if(this.config.xScaleType === 'time') {

                this.svg.weekLabel = this.svg.layers.data
                    .append("text")
                    .attr("class", "weekLabel small-label")
                    .attr("font-family", "NotoSans Regular")
                    .attr("font-size", ".75rem")
                    .text("week:")
                ;
            }

            this.svg.weekNumbers = this.svg.layers.underData.selectAll(".weekNumber")
                    .data(data);

            this.svg.weekNumbers.exit().remove();

            this.svg.weekNumbersEnter = this.svg.weekNumbers.enter()
                .append("text")
                .attr("class", "weekNumber smallest-label")
                .attr("text-anchor","middle")
                .attr("font-size",".75rem")
                .attr("font-family","NotoSans Regular");
    }

    redraw(xScale,yScale,dimensions,data,colour,yParameter) {


            this.svg.weekLines
                .merge(this.svg.weekLinesEnter)
                .attr("x1", function (d) {
                    return (this.config.xScaleType === 'time') ? xScale(new Date(d[this.config.xParameter])) : -40
                })
                .attr("x2", function (d) {
                    return (this.config.xScaleType === 'time') ? xScale(new Date(d[this.config.xParameter])) + 2 : dimensions.width + 40
                })
                .attr("y1", function (d,i) {

                    if(config.yScaleType === 'time' && i === 0) {
                        return yScale(new Date(d[yParameter])) - 35;
                    } else {
                        return (this.config.yScaleType === 'time') ? yScale(new Date(d[yParameter])) : yScale(d[yParameter]) + 6;
                    }
                })
                .attr("y2", (d,i) => {

                    if(this.config.yScaleType === 'time' && i === 0) {

                        return yScale(new Date(d[yParameter])) - 35;
                    } else {
                        return (this.config.yScaleType === 'time') ? yScale(new Date(d[yParameter])) : dimensions.height - this.config.padding.bottom + 20;
                    }
                })
                .attr("fill", "none")
                .style("stroke", (this.config.useLineFill) ? colours[colour][2] : colours.lightGrey)
                .style("stroke-width", (d,i) => (this.config.yScaleType === 'time' && i === 0) ? 0 : 1)
            // .style("stroke-dasharray", "2 4")
            ;

        this.svg.weekNumbers
                .merge(this.svg.weekNumbersEnter)

                .attr("x", function (d, i) {
                    return (this.config.xScaleType === 'time') ? xScale(new Date(d[this.config.xParameter])) : -35;
                })
                .attr("y", function (d,i) {

                    if (this.config.yScaleType === 'time' && i === 0) {
                        return yScale(new Date(d[yParameter])) - 66;
                    } else {
                        return (this.config.yScaleType === 'time') ? yScale(new Date(d[yParameter])) : dimensions.height - this.config.padding.bottom + 20;
                    }

                })
                .attr("dx", (this.config.xScaleType === 'time') ? 0 : -16)
                .attr("dy", (this.config.xScaleType === 'time') ? 12 :  25)
                .attr("fill", colours.grey)
                .text(function (d, i) {

                    let date = new Date(d[this.config.xParameter]);

                    if (this.config.xScaleType === 'time') {

                        return (i < (data.length - 1)) ? getWeek(date) : '';

                    } else if (i === data.length - 1) {

                        return '';

                    } else {

                        return 'week ' + getWeek(date);
                    }
                })
                .style("text-anchor", (this.config.xScaleType === 'time') ? "middle" : "end");

            if(this.svg.weekLabel) {

                this.svg.weekLabel
                    .attr("y", function (d) {
                        return dimensions.height - this.config.padding.bottom + 31;
                    })
                    .attr("x", -10)
                ;
            }
    }
}

import { colours } from '../../_styleguide/_colours';
import * as d3 from 'd3';
import { displayDate } from '../../d3-services/_helpers';
import { GraphData } from '../../types/data';

export default class ChartBackgroundArea {

    lineFill;

    constructor(
        private ctrlr,
        private parameter,
        private colour
    ){}

    draw(data: GraphData) {

        if(this.ctrlr.graphObject.config.extra.useLineFill) {

            this.lineFill = this.ctrlr.svg.layers.underData.selectAll('path.line_fill.' + this.parameter)
                .data([data.slice])
                .join("path")
                .attr("class", "line_fill " + this.parameter);
        }
    }

    redraw(data: GraphData) {

        let self = this;
        let area = d3.area();

        if (this.ctrlr.graphObject.config.xScaleType === 'time') {

            area
                .x(d => this.ctrlr.xScale(new Date(d[this.ctrlr.xParameter])))
                .y0(this.ctrlr.dimensions.height)
                .y1(d => this.ctrlr.yScale(d[this.parameter]))
                .curve(d3.curveLinear);
        }

        if(this.ctrlr.graphObject.config.yScaleType === 'time') {

            area
                .x0(0)
                .x1(d => this.ctrlr.xScale(d[this.ctrlr.xParameter]))
                // .y0(dimensions.height)
                .y(d => this.ctrlr.yScale(new Date(d[this.ctrlr.yParameter])))
                .curve(d3.curveLinear);
        }

        if (this.ctrlr.graphObject.config.extra.useLineFill) {

        
            this.lineFill
                .attr("d", area)
                .attr("fill", () => {

                    if (this.ctrlr.graphObject.config.extra.smartColours === 'up') {

                        if (data.slice[0][this.ctrlr.yParameter] > data.slice[1][this.ctrlr.yParameter]) {
                            return colours['moss'][1];
                        } else {
                            return colours['orange'][1];
                        }

                    } else if (this.ctrlr.graphObject.config.extra.smartColours === 'down') {

                        if(data.slice[0][this.ctrlr.yParameter] < data.slice[1][this.ctrlr.yParameter]) {
                            return colours['moss'][1];
                        } else {
                            return colours['orange'][1];
                        }

                    } else {
                        return colours[this.colour][1];
                    }
                })
                .attr("stroke", "none")
                .attr("transform", function () {
                    return (self.ctrlr.graphObject.config.yScaleType === 'time') ? "translate(" + -(this.ctrlr.xScale(data[0][this.ctrlr.xParameter]) - (this.ctrlr.dimensions.width / 2)) + ",0)" : "translate(0,0)"
                })
            ;
        }
    }
}

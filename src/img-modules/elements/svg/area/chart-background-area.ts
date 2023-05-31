import { colours } from '@local/styleguide';
import * as d3 from 'd3';
import { displayDate } from '@local/d3-services';
import { GraphData } from "@local/d3_types";

export default class ChartBackgroundArea {

    lineFill;

    constructor(
        private ctrlr,
        private parameter,
        private colour
    ){}

    draw(data: GraphData) {

        this.lineFill = this.ctrlr.svg.layers.underData.selectAll('path.line_fill.' + this.parameter)
            .data([data.slice])
            .join("path")
            .attr("class", "line_fill " + this.parameter);
    
    }

    redraw(data: GraphData) {

        let self = this;
        let area = d3.area();

        if (this.ctrlr.scales.x.config.type === 'time') {
      
            area
                .x(d => this.ctrlr.scales.x.scale(new Date(d[this.ctrlr.parameters.x])))
                .y0(this.ctrlr.dimensions.height)
                .y1(d => this.ctrlr.scales.y.scale(d[this.parameter]))
                .curve(d3.curveLinear);
        }

        if(this.ctrlr.scales.y.config.type === 'time') {

            area
                .x0(0)
                .x1(d => this.ctrlr.scales.x.scale(d[this.ctrlr.parameters.x]))
                .y(d => this.ctrlr.scales.y.scale(new Date(d[this.ctrlr.parameters.y])))
                .curve(d3.curveLinear);
        }

        this.lineFill
            .attr("d", area)
            .attr("fill", () => {

                if (this.ctrlr.config.extra.smartColours === 'up') {

                    if (data.slice[0][this.ctrlr.parameters.y] > data.slice[1][this.ctrlr.parameters.y]) {
                        return colours['moss'][1];
                    } else {
                        return colours['orange'][1];
                    }

                } else if (this.ctrlr.config.extra.smartColours === 'down') {

                    if(data.slice[0][this.ctrlr.parameters.y] < data.slice[1][this.ctrlr.parameters.y]) {
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
                return (self.ctrlr.scales.y.config.type === 'time') ? "translate(" + -(this.ctrlr.scales.x.scale(data[0][this.ctrlr.parameters.x]) - (this.ctrlr.dimensions.width / 2)) + ",0)" : "translate(0,0)"
            })
        ;
        
    }
}

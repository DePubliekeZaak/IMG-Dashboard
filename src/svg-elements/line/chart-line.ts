import { colours } from '../../_styleguide/_colours';
import * as d3 from 'd3';
import { GraphConfig} from "../../types/graphConfig";
import {Dimensions} from "../../types/dimensions";
import { DataPart } from '../../types/data';

export class ChartLine {

    line;
    lineEnter;

    constructor(
        private ctrlr : any,
        private yParameter: string,
        private colour: string
    ){
    }

    draw(data: DataPart[]) {

        this.line = this.ctrlr.svg.layers.data.selectAll('.' + this.yParameter)
            // mmm waarom niet array  met twee lijnen? 
            .data([data.slice])
            .join("path")
            .attr("class", this.yParameter);
    }

    redraw() {

        let self = this;

        let line = d3.line()
            .x(d => {
                return (this.ctrlr.graphObject.config.xScaleType === 'time') ? this.ctrlr.xScale(new Date(d['_date'])) : this.ctrlr.xScale(d[this.ctrlr.xParameter] )
            })
            .y(d => (this.ctrlr.graphObject.config.yScaleType === 'time') ? this.ctrlr.yScale(new Date (d[this.yParameter])) : this.ctrlr.yScale(d[this.yParameter]) )
            .curve(d3.curveLinear);

        this.line
            .transition()
            .duration(250)
            .attr("d", line)
            .attr("fill", 'transparent')
            .attr("stroke", d => colours[this.colour][0] )
            .attr("stroke-width", 1)
            // .attr("stroke-dasharray","2 4")
        ;
    }
}

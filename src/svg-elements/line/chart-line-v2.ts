import { colours } from '../../_styleguide/_colours';
import * as d3 from 'd3';
import { GraphConfig} from "../../types/graphConfig";
import {Dimensions} from "../../types/dimensions";
import { DataPart } from '../../types/data';

export class ChartLineV2 {

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
            .x(d => this.ctrlr.scales.x.scale(d[this.ctrlr.xParameter] + .5 ))
            .y(d => this.ctrlr.scales.y2.scale(d[this.yParameter]) )
            .curve(d3.curveLinear);

        this.line
            .transition()
            .duration(250)
            .attr("d", line)
            .attr("fill", 'transparent')
            .attr("stroke", d => colours[this.colour][0] )
            .attr("stroke-width", 1)
            .attr("stroke-dasharray","2 4")
        ;
    }
}

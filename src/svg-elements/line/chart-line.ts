import { colours } from '../../_styleguide/_colours';
import * as d3 from 'd3';
import { GraphConfig} from "../../types/graphConfig";
import {Dimensions} from "../../types/dimensions";
import { DataPart } from '../../types/data';

export class ChartLine {

    line;
    lineEnter;

    constructor(
        public ctrlr : any,
        public yParameter: string,
        public colour: string
    ){
    }

    draw(data: DataPart[]) {

        const yParameter = this.ctrlr.parameters[this.yParameter] != undefined ? this.ctrlr.parameters[this.yParameter] : this.yParameter;

        this.line = this.ctrlr.svg.layers.data.selectAll('.line-' + yParameter)
            .data([data.slice])
            .join("path")
            .attr("class", "line-" + yParameter);
    }

    lineMaker() : d3.Line<[number, number]> {

        const yParameter = this.ctrlr.parameters[this.yParameter] != undefined ? this.ctrlr.parameters[this.yParameter] : this.yParameter;

        // console.log(yParameter)

        return d3.line()
            .x(d => this.ctrlr.scales.x.scale(d[this.ctrlr.parameters.x]  ))
            .y(d => { 
                return this.ctrlr.scales.y.scale(d[yParameter]) })
            .curve(d3.curveBasis);
    }

    redraw() {

        let self = this;

        this.line
            .transition()
            .duration(250)
            .attr("d", this.lineMaker())
            .attr("fill", 'transparent')
            .attr("stroke", d => colours[this.colour][0] )
            .attr("stroke-width", 1)
            // .attr("stroke-dasharray","2 4")
        ;
    }
}

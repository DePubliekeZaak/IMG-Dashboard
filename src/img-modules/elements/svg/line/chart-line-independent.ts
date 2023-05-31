import * as d3 from 'd3';
import { DataPart } from '@local/d3_types';
import { ChartLine } from './chart-line';

export class ChartLineIndependent extends ChartLine {

    line;
    lineEnter;

    constructor(
        ctrlr : any,
        yParameter: string,
        colour: string
    ){
        super(ctrlr,yParameter,colour)
    }

    draw(data: DataPart[]) {

        super.draw(data);
    }

    lineMaker(): d3.Line<[number, number]> {
        
        return d3.line()
            .x(d => this.ctrlr.scales.x.scale(d[this.ctrlr.parameters.x] + .5 ))
            .y(d => this.ctrlr.scales.y2.scale(d[this.ctrlr.parameters[this.yParameter]]) )
            .curve(d3.curveBasis);
    }

    redraw() {

        super.redraw()

        this.line
            .attr("stroke-dasharray","2 4")
        ;
    }
}

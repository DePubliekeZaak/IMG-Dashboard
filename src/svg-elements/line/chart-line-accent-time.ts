import { colours } from '../../_styleguide/_colours';
import * as d3 from 'd3';
import { GraphConfig} from "../../types/graphConfig";
import {Dimensions} from "../../types/dimensions";
import { DataPart } from '../../types/data';
import { ChartLine } from './chart-line';

export class ChartLineAccentTime extends ChartLine {

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

    lineMaker() {

        return d3.line()
            .x(d => this.ctrlr.scales.x.scale(new Date(d[this.ctrlr.parameters.x])))
            .y(d => this.ctrlr.scales.y.scale(d[this.yParameter]) )
            .curve(d3.curveLinear);
    }

    redraw() {

        let self = this;

        super.redraw();

    }
}

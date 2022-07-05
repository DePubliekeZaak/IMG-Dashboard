import { ChartLine } from './chart-line';

export default class ChartLineDashArray extends ChartLine {

    constructor(
         ctrlr : any,
         yParameter: string,
         colour: string
    ){
        super(ctrlr,yParameter,colour)
    }

   
    redraw() {

        super.redraw()

        this.line
            .attr("stroke-dasharray","2 4")
        ;
    }
}

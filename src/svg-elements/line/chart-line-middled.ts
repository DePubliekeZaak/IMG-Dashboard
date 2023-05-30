import * as d3 from 'd3';
import { DataPart, GraphData } from '../../d3-modules/_d3_types';
import { ChartLine } from './chart-line';

export default class ChartLineMiddled extends ChartLine {

    data: DataPart[]

    constructor(
         ctrlr : any,
         yParameter: string,
         colour: string,
         
    ){
        super(ctrlr,yParameter,colour)
    }

    draw(data: DataPart[]) {

        this.data = data;
        super.draw(data);
    }

    lineMaker() : d3.Line<[number, number]> {

        const yParameter = this.ctrlr.parameters[this.yParameter] != undefined ? this.ctrlr.parameters[this.yParameter] : this.yParameter;

        const middle = (d,i) => {

            if (i > 3 && i < this.data.slice.length) {

                let v = (this.data.slice[i - 3][yParameter] + this.data.slice[i - 2][yParameter] + this.data.slice[i - 1][yParameter] + this.data.slice[i][yParameter]) / 4;
                return this.ctrlr.scales.y.scale(v)

            } else {
                return this.ctrlr.scales.y.scale(d[yParameter]);
            }
        }

        return d3.line()
            .x(d => {
                
                let k = this.ctrlr.scales.x.scale(d[this.ctrlr.parameters.x] + .5 );
                return k;
                
            })
            .y( (d,i) => {
               let m =  middle(d,i) 
               return m;
                
            })
            .curve(d3.curveBasis);
    }
   
    redraw() {

        super.redraw()

        this.line
            .attr("stroke", (d) => "black")
            // .attr("stroke-dasharray","2 4")
        ;
    }
}

import { convertToCurrency, displayDate } from '../../d3-services/_helpers';
import { D3DataTypeHistorical, D3DataTypeLatest, GraphData } from '../../types/data';
import { colours} from "../../_styleguide/_colours";
import { DataPart } from "../../types/data";
import * as d3 from 'd3';


export default class ChartBarHorizonWaardedaling {

    barsUp;
    barsDown;
    barsBalance;
    line;

    constructor(
        private ctrlr
    ){}

    draw(data: GraphData) {


        this.barsUp = this.ctrlr.svg.layers.data.selectAll(".bar_up")
            .data(data.slice)
            .join("rect")
            .attr("class", "bar_up")
            .attr("fill", (d) => colours["orange"][1])
        ;

        this.barsDown = this.ctrlr.svg.layers.data.selectAll(".bar_down")
            .data(data.slice)
            .join("rect")
            .attr("class", "bar_down")
            .attr("fill", (d) => colours["lightBlue"][1])
        ;

        this.line= this.ctrlr.svg.layers.data.selectAll("path")
            .data([data.slice])
            .join("path")
            .attr("fill", 'transparent')
            .attr("stroke", "#000")
            .attr("stroke-width",1)
            .attr("stroke-dasharray","4 2");
    }  


    redraw(data: GraphData) {

        let self = this;

        let middle = this.ctrlr.dimensions.height / 2;

        let line = d3.line()
                .x(d =>  this.ctrlr.scales.x.scale(d[this.ctrlr.parameters.x] - .5))
                .y( (d,i) =>  { 

                  //  let prevValue = i > 0 ? data.slice[i - 1][this.ctrlr.parameters.y3] : 0;
                    return this.ctrlr.scales.y.scale(d[this.ctrlr.parameters.y3]);
                })
                .curve(d3.curveBasis);

        this.line
            .attr("d", line)
            .attr("pointer-events","none")


        this.barsUp
            .attr("x", (d: DataPart)  => {
                return self.ctrlr.scales.x.scale(d[self.ctrlr.parameters.x]);
            })
            .attr("width", self.ctrlr.dimensions.width / data.slice.length - 2)
            .attr("y", (d) => this.ctrlr.scales.y.scale(d[self.ctrlr.parameters.y])) 
            .attr("height", (d) => {
               return  self.ctrlr.dimensions.height - self.ctrlr.scales.y.scale(d[self.ctrlr.parameters.y])
            })

        this.barsDown
            .attr("x", (d: DataPart)  => {
                return self.ctrlr.scales.x.scale(d[self.ctrlr.parameters.x]);
            })
            .attr("y", self.ctrlr.dimensions.height)
            .attr("width", self.ctrlr.dimensions.width / data.slice.length - 2)
            .attr("y", (d) => self.ctrlr.dimensions.height) 

            .attr("height", (d) => self.ctrlr.scales.y.scale(-d[self.ctrlr.parameters.y2]) - self.ctrlr.dimensions.height )

    }
}



import { colours } from '../../_styleguide/_colours';
import * as d3 from 'd3';
import { GraphConfig} from "../../types/graphConfig";
import {Dimensions} from "../../types/dimensions";
import { DataPart } from '../../types/data';

export class ChartLineVV {

    line;
    lineEnter;
    label;

    constructor(
        public ctrlr : any,
        public yParameter: string,
        public colour: string
    ){
    }

    draw(data: DataPart[]) {

        const yParameter = this.ctrlr.parameters[this.yParameter] != undefined ? this.ctrlr.parameters[this.yParameter] : this.yParameter;

        this.line = this.ctrlr.svg.layers.data.selectAll('.vastevergoeding')
            .data([data.slice])
            .join("path")
            .attr("class", 'vastevergoeding')
            .attr("stroke-dasharray","2 4");

        this.label = this.ctrlr.svg.layers.data
            .append("text")
            .text("vv")
            .attr("text-anchor","start")
     

    }

    lineMaker() : d3.Line<[number, number]> {

        const yParameter = this.ctrlr.parameters[this.yParameter] != undefined ? this.ctrlr.parameters[this.yParameter] : this.yParameter;

        return d3.line()
            .x(d => this.ctrlr.scales.x.scale(d[this.ctrlr.parameters.x]))
            .y(d => this.ctrlr.scales.y.scale(5000) )
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

        this.label
            .attr("dx",4)
            .attr("dy",4)
            .style('font-size','.66rem')
            .attr('fill', colours[this.colour][0])
            .style('text-transform','lowercase')
            .attr("transform","translate(" + this.ctrlr.dimensions.width + "," + this.ctrlr.scales.y.scale(5000)+ ")");
             
    }
}

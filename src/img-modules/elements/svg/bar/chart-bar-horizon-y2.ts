import { convertToCurrency, displayDate } from '@local/d3-services';
import { D3DataTypeHistorical, D3DataTypeLatest, GraphData } from '@local/d3_types';
import { colours, breakpoints } from "@local/styleguide";
import { DataPart } from "@local/d3_types";
import * as d3 from 'd3';

export default class ChartBarHorizonY2 {

    barsUp;
    barsUpVes;
    barsDown;
    barsDownVes;
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
            .attr("fill", (d) => colours["yellow"][0]);

    
        this.barsUpVes = this.ctrlr.svg.layers.data.selectAll(".bar_up_ves")
            .data(data.slice)
            .join("rect")
            .attr("class", "bar_up_ves")
            .attr("fill", (d) => colours["orange"][0]);


        this.barsDown = this.ctrlr.svg.layers.data.selectAll(".bar_down")
            .data(data.slice)
            .join("rect")
            .attr("class", "bar_down")
            .attr("fill", (d) => colours["lightBlue"][0])
        ;

        this.barsDownVes = this.ctrlr.svg.layers.data.selectAll(".bar_down_ves")
            .data(data.slice)
            .join("rect")
            .attr("class", "bar_down_ves")
            .attr("fill", (d) => colours["blue"][0])
        ;

        this.line = this.ctrlr.svg.layers.data.selectAll("path")
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
                    return this.ctrlr.scales.y.scale(d[this.ctrlr.parameters.y]);
                })
                .curve(d3.curveBasis);

        this.line
            .attr("d", line)
            .attr("pointer-events","none")


        this.barsUp
            .attr("x", (d: DataPart)  => {
                return self.ctrlr.scales.x.scale(d[self.ctrlr.parameters.x]);
            })
            .attr("width", (window.innerWidth > breakpoints.sm ) ? (self.ctrlr.dimensions.width / (data.slice.length - 2)) - 2 : 1)
            .attr("y", (d) => this.ctrlr.scales.y2.scale(d[self.ctrlr.parameters.y2])) 
            .attr("height", (d) => {
               return  self.ctrlr.scales.y2.scale(0) - self.ctrlr.scales.y2.scale(d[self.ctrlr.parameters.y2])
            });

        this.barsUpVes
            .attr("x", (d: DataPart)  => {
                return self.ctrlr.scales.x.scale(d[self.ctrlr.parameters.x]);
            })
            .attr("width", (window.innerWidth > breakpoints.sm ) ? (self.ctrlr.dimensions.width / (data.slice.length - 2)) - 2 : 1)
            .attr("y", (d) => this.ctrlr.scales.y2.scale(d[self.ctrlr.parameters.y4])) 
            .attr("height", (d) => {
            return  self.ctrlr.scales.y2.scale(0) - self.ctrlr.scales.y2.scale(d[self.ctrlr.parameters.y4])
            });

        this.barsDown
            .attr("x", (d: DataPart)  => {
                return self.ctrlr.scales.x.scale(d[self.ctrlr.parameters.x]);
            })
            .attr("y", self.ctrlr.dimensions.height)
            .attr("width", (window.innerWidth > breakpoints.sm ) ? (self.ctrlr.dimensions.width / (data.slice.length - 2)) - 2 : 1)
            .attr("y", (d) => self.ctrlr.scales.y2.scale(0)) 

            .attr("height", (d) => self.ctrlr.scales.y2.scale(0) - self.ctrlr.scales.y2.scale(d[self.ctrlr.parameters.y3])   )
        

        this.barsDownVes
            .attr("x", (d: DataPart)  => {
                return self.ctrlr.scales.x.scale(d[self.ctrlr.parameters.x]);
            })
            .attr("y", self.ctrlr.dimensions.height)
            .attr("width", (window.innerWidth > breakpoints.sm ) ? (self.ctrlr.dimensions.width / (data.slice.length - 2)) - 2 : 1)
            .attr("y", (d) => self.ctrlr.scales.y2.scale(0)) 

            .attr("height", (d) => self.ctrlr.scales.y2.scale(0) - self.ctrlr.scales.y2.scale(d[self.ctrlr.parameters.y5])   )

    }
}



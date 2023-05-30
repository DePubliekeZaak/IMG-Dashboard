import * as d3 from 'd3';
import { GraphData, DataPart } from '../../d3-modules/_d3_types';
import { colours} from "../../img-modules/_styleguide";

export default class ChartBarHorizon {

    barsUp;
    barsDown;
    barsBalance;
    line;

    constructor(
        private ctrlr
    ){}

    draw(data: GraphData) {

        let slice = data.slice.slice(2, data.slice.length - 1);

        this.barsUp = this.ctrlr.svg.layers.data.selectAll(".bar_up")
            .data(slice)
            .join("rect")
            .attr("class", "bar_up")
            .attr("fill", (d) => colours["orange"][1])
        ;

        this.barsDown = this.ctrlr.svg.layers.data.selectAll(".bar_down")
            .data(slice)
            .join("rect")
            .attr("class", "bar_down")
            .attr("fill", (d) => colours["lightBlue"][1])
        ;

        this.barsBalance = this.ctrlr.svg.layers.data.selectAll(".bar_balance")
            .data(slice)
            .join("rect")
            .attr("class", "bar_balance");
        ;

        this.line = this.ctrlr.svg.layers.data.selectAll("path")
            .data([slice])
            .join("path")
            .attr("fill", 'transparent')
            .attr("stroke", "#000")
            .attr("stroke-width",1);
    }  


    redraw(data: GraphData) {

        // console.log(this.ctrlr.scales.x.scale.domain());
        // console.log(this.ctrlr.scales.x.scale.range());
        // console.log(this.ctrlr.scales.y.scale.domain());
        // console.log(this.ctrlr.scales.y.scale.range());

        let self = this;

        let middle = this.ctrlr.dimensions.height / 2;

        let line = d3.line()
                .x(d =>  this.ctrlr.scales.x.scale(d[this.ctrlr.parameters.x]))
                .y(d =>  this.ctrlr.scales.y.scale(-d['diff']) + middle)
                .curve(d3.curveLinear);

        this.line
            .attr("d", line)


        this.barsUp
            .attr("x", (d: DataPart)  => {
                return self.ctrlr.scales.x.scale(d[self.ctrlr.parameters.x]);
            })
            .attr("width", self.ctrlr.dimensions.width / data.slice.length - 2)
            .attr("y", (d) => { 

                return  /* this.ctrlr.yScale(-d['diff']) +  */ middle - self.ctrlr.scales.y.scale(d[self.ctrlr.parameters.y])
                
            }) 
            .attr("height", (d) => self.ctrlr.scales.y.scale(d[self.ctrlr.parameters.y]))

        this.barsDown
            .attr("x", (d: DataPart)  => {
                return self.ctrlr.scales.x.scale(d[self.ctrlr.parameters.x]);
            })
            .attr("y", self.ctrlr.dimensions.height)
            .attr("width", self.ctrlr.dimensions.width / data.slice.length - 2)
            .attr("y", (d) => {
                
                return /* this.ctrlr.yScale(-d['diff'])  +  */ middle
                
            })
            .attr("height", (d) => self.ctrlr.scales.y.scale(d[self.ctrlr.parameters.y2]))
            
        this.barsUp
            .on("mouseover", function (event: any, d: any) {

                d3.select(this).attr("fill", () => colours['orange'][0]);
            
                let date = new Date(d[self.ctrlr.parameters.x]);

                d3.select('.tooltip')
                    .html(() => {
                            return `Week: ` + d._week 
                            + `<br/>Meldingen: ` + d[self.ctrlr.parameters.y2] 
                            + `<br/>Afgehandeld: ` + d[self.ctrlr.parameters.y2]
                            + `<br/>Verschil: ` + d.diff;  
                    })
                    .style("left", (event.pageX) + "px")
                    .style("top", (event.pageY) + "px")
                 //   .transition()
  //                  .duration(250)
                    .style("opacity", 1);
            })
            .on("mouseout", function (event, d) {

                d3.select(this).attr("fill", () => colours['orange'][1]);

                d3.select('.tooltip')
                 //   .transition()
  //                  .duration(250)
                    .style("opacity", 0);
            });

        ;

        this.barsDown
            .on("mouseover", function (event: any, d: any) {

                d3.select(this).attr("fill", () => colours['lightBlue'][0]);
            
                let date = new Date(d[self.ctrlr.parameters.x]);

                d3.select('.tooltip')
                    .html(() => {
                            return `Week: ` + d._week 
                            + `<br/>Meldingen: ` + d[self.ctrlr.parameters.y] 
                            + `<br/>Afgehandeld: ` + d[self.ctrlr.parameters.y2]
                            + `<br/>Verschil: ` + d.diff;  
                    })
                    .style("left", (event.pageX) + "px")
                    .style("top", (event.pageY) + "px")
                 //   .transition()
  //                  .duration(250)
                    .style("opacity", 1);
            })
            .on("mouseout", function (event, d) {

                d3.select(this).attr("fill", () => colours['lightBlue'][1]);

                d3.select('.tooltip')
                 //   .transition()
  //                  .duration(250)
                    .style("opacity", 0);
            });

        ;
    }
}



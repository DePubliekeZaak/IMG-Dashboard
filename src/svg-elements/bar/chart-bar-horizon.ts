import { convertToCurrency, displayDate } from '../../d3-services/_helpers';
import { D3DataTypeHistorical, D3DataTypeLatest, GraphData } from '../../types/data';
import { colours} from "../../_styleguide/_colours";
import { DataPart } from "../../types/data";
import * as d3 from 'd3';

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

        this.line= this.ctrlr.svg.layers.data.selectAll("path")
            .data([slice])
            .join("path")
            .attr("fill", 'transparent')
            .attr("stroke", "#000")
            .attr("stroke-width",1);
    }  


    redraw(data: GraphData) {

        let self = this;

        let middle = this.ctrlr.dimensions.height / 2;

        let line = d3.line()
                .x(d =>  this.ctrlr.xScale(d[this.ctrlr.xParameter]))
                .y(d =>  this.ctrlr.yScale(-d['diff']) + middle)
                .curve(d3.curveLinear);

        this.line
            .attr("d", line)


        this.barsUp
            .attr("x", (d: DataPart)  => {
                return self.ctrlr.xScale(d[self.ctrlr.xParameter]);
            })
            .attr("width", self.ctrlr.dimensions.width / data.slice.length - 2)
            .attr("y", (d) => { 

                return  /* this.ctrlr.yScale(-d['diff']) +  */ middle - self.ctrlr.yScale(d[self.ctrlr.yParameter])
                
            }) 
            .attr("height", (d) => self.ctrlr.yScale(d[self.ctrlr.yParameter]))

        this.barsDown
            .attr("x", (d: DataPart)  => {
                return self.ctrlr.xScale(d[self.ctrlr.xParameter]);
            })
            .attr("y", self.ctrlr.dimensions.height)
            .attr("width", self.ctrlr.dimensions.width / data.slice.length - 2)
            .attr("y", (d) => {
                
                return /* this.ctrlr.yScale(-d['diff'])  +  */ middle
                
            })
            .attr("height", (d) => self.ctrlr.yScale(d[self.ctrlr.y2Parameter]))
            
        this.barsUp
            .on("mouseover", function (event: any, d: any) {

                d3.select(this).attr("fill", () => colours['orange'][0]);
            
                let date = new Date(d[self.ctrlr.xParameter]);

                d3.select('.tooltip')
                    .html(() => {
                            return `Week: ` + d._week 
                            + `<br/>Meldingen: ` + d[self.ctrlr.yParameter] 
                            + `<br/>Afgehandeld: ` + d[self.ctrlr.y2Parameter]
                            + `<br/>Verschil: ` + d.diff;  
                    })
                    .style("left", (event.pageX) + "px")
                    .style("top", (event.pageY) + "px")
                    .transition()
                    .duration(250)
                    .style("opacity", 1);
            })
            .on("mouseout", function (event, d) {

                d3.select(this).attr("fill", () => colours['orange'][1]);

                d3.select('.tooltip')
                    .transition()
                    .duration(250)
                    .style("opacity", 0);
            });

        ;

        this.barsDown
            .on("mouseover", function (event: any, d: any) {

                d3.select(this).attr("fill", () => colours['lightBlue'][0]);
            
                let date = new Date(d[self.ctrlr.xParameter]);

                d3.select('.tooltip')
                    .html(() => {
                            return `Week: ` + d._week 
                            + `<br/>Meldingen: ` + d[self.ctrlr.yParameter] 
                            + `<br/>Afgehandeld: ` + d[self.ctrlr.y2Parameter]
                            + `<br/>Verschil: ` + d.diff;  
                    })
                    .style("left", (event.pageX) + "px")
                    .style("top", (event.pageY) + "px")
                    .transition()
                    .duration(250)
                    .style("opacity", 1);
            })
            .on("mouseout", function (event, d) {

                d3.select(this).attr("fill", () => colours['lightBlue'][1]);

                d3.select('.tooltip')
                    .transition()
                    .duration(250)
                    .style("opacity", 0);
            });

        ;
    }
}



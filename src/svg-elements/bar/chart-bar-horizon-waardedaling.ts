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
            .attr("fill", (d) => colours["orange"][0])
        ;

        this.barsDown = this.ctrlr.svg.layers.data.selectAll(".bar_down")
            .data(data.slice)
            .join("rect")
            .attr("class", "bar_down")
            .attr("fill", (d) => colours["lightBlue"][0])
        ;

        // this.barsBalance = this.ctrlr.svg.layers.data.selectAll(".bar_balance")
        //     .data(slice)
        //     .join("rect")
        //     .attr("class", "bar_balance");
        // ;

        this.line= this.ctrlr.svg.layers.data.selectAll("path")
            .data([data.slice])
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
                .y( (d,i) =>  { 

                    let prevValue = i > 0 ? data.slice[i - 1][this.ctrlr.y3Parameter] : 0;

                    return this.ctrlr.yScale(prevValue);
                })
                .curve(d3.curveLinear);

        this.line
            .attr("d", line)
            .attr("pointer-events","none")


        this.barsUp
            .attr("x", (d: DataPart)  => {
                return self.ctrlr.xScale(d[self.ctrlr.xParameter]);
            })
            .attr("width", self.ctrlr.dimensions.width / data.slice.length - 2)
            .attr("y", (d) => this.ctrlr.yScale(d[self.ctrlr.yParameter])) 
            .attr("height", (d) => self.ctrlr.dimensions.height - self.ctrlr.yScale(d[self.ctrlr.yParameter]))

        this.barsDown
            .attr("x", (d: DataPart)  => {
                return self.ctrlr.xScale(d[self.ctrlr.xParameter]);
            })
            .attr("y", self.ctrlr.dimensions.height)
            .attr("width", self.ctrlr.dimensions.width / data.slice.length - 2)
            .attr("y", (d) => self.ctrlr.dimensions.height) 

            .attr("height", (d) => self.ctrlr.yScale(-d[self.ctrlr.y2Parameter]) - self.ctrlr.dimensions.height )
            
        // this.barsUp
        //     .on("mouseover", function (event: any, d: any) {

        //         d3.select(this).attr("fill", () => colours['orange'][1]);
            
        //         let date = new Date(d[self.ctrlr.xParameter]);

        //         d3.select('.tooltip')
        //             .html(() => {
        //                     return `Week: ` + d._week + ` (` + d._year + `)` + d._date
        //                     + `<br/>Meldingen: ` + d[self.ctrlr.yParameter] 
        //                     + `<br/>Afgehandeld: ` + d[self.ctrlr.y2Parameter]
        //                     + `<br/>In behandeling: ` + d[self.ctrlr.y3Parameter];  
        //             })
        //             .style("left", (event.pageX) + "px")
        //             .style("top", (event.pageY) + "px")
        //             .transition()
        //             .duration(250)
        //             .style("opacity", 1);
        //     })
        //     .on("mouseout", function (event, d) {

        //         d3.select(this).attr("fill", () => colours['orange'][0]);

        //         d3.select('.tooltip')
        //             .transition()
        //             .duration(250)
        //             .style("opacity", 0);
        //     });

        // ;

        // this.barsDown
        //     .on("mouseover", function (event: any, d: any) {

        //         d3.select(this).attr("fill", () => colours['lightBlue'][0]);
            
        //         let date = new Date(d[self.ctrlr.xParameter]);

        //         d3.select('.tooltip')
        //             .html(() => {
        //                     return `Week: ` + d._week 
        //                     + `<br/>Meldingen: ` + d[self.ctrlr.yParameter] 
        //                     + `<br/>Afgehandeld: ` + d[self.ctrlr.y2Parameter]
        //                     + `<br/>Verschil: ` + d.diff;  
        //             })
        //             .style("left", (event.pageX) + "px")
        //             .style("top", (event.pageY) + "px")
        //             .transition()
        //             .duration(250)
        //             .style("opacity", 1);
        //     })
        //     .on("mouseout", function (event, d) {

        //         d3.select(this).attr("fill", () => colours['lightBlue'][1]);

        //         d3.select('.tooltip')
        //             .transition()
        //             .duration(250)
        //             .style("opacity", 0);
        //     });

        // ;
    }
}



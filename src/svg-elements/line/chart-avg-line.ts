import { DataPart, GraphData } from "../../types/data";

export class ChartAvgLine {


    constructor(
        private ctrlr: any
    ){
     
    }

    draw() {

            this.ctrlr.svg.layers.data.selectAll('g.average').remove();

            this.ctrlr.svg.averageGroup = this.ctrlr.svg.layers.underData.append("g")
                .attr("class", "average");

            this.ctrlr.svg.averageLine = this.ctrlr.svg.averageGroup.append("line");

            this.ctrlr.svg.averageNumber = this.ctrlr.svg.averageGroup.append("text")
                .attr("class", "small-label smallest-label")
                .attr("text-anchor", "start")
                .attr("font-family", "NotoSans Regular")
                .attr("font-size", ".75rem")
                .style("fill", "black");

            if(this.ctrlr.graphObject.config.extra.firstInLine) {

                this.ctrlr.svg.averageLabel = this.ctrlr.svg.averageGroup.append("text")
                    // .attr("class", "small-label smallest-label")
                    .attr("text-anchor", "end")
                    .attr("font-family", "NotoSans Regular")
                    .attr("font-size", ".8rem")
                    .style("fill", "black");
            }
    }

    redraw(data: GraphData) {

            let av = (data.history.filter( (d) => d[this.ctrlr.yParameter] != undefined).reduce((a, b) => a + parseInt(b[this.ctrlr.yParameter]), 0)) / data.history.length;

                this.ctrlr.svg.averageGroup
                    .attr("transform", (d) => {
                        return "translate(" + 0 + ", " + this.ctrlr.yScale(av) + ")"
                    });

                this.ctrlr.svg.averageLine
                    .attr("x1", this.ctrlr.xScale(new Date(data.slice[data.slice.length - 1][this.ctrlr.graphObject.config.xParameter])) - 0)
                    .attr("x2", this.ctrlr.xScale(new Date(data.slice[0][this.ctrlr.graphObject.config.xParameter])) + 10)
                    .attr("y1", 0)
                    .attr("y2", 0)
                    .attr("fill", "none")
                    .style("stroke", "gray")
                    .style("stroke-width", 2)
                    .style("stroke-dasharray", "2 4")
                    
                ;

                this.ctrlr.svg.averageNumber
                    .attr("dx", this.ctrlr.dimensions.width + 12)
                    .attr("dy", 3)

                    //     return (this.ctrlr.yScale(Math.round(av)) - this.ctrlr.yScale(data.slice[0][this.ctrlr.yParameter]) < 0) ? 3 : 3;
                    // })
                    .text( d => this.ctrlr.graphObject.config.extra.decimal ? Math.round(av *10) / 10 : Math.round(av));

            if(this.ctrlr.svg.averageLabel) {

                this.ctrlr.svg.averageLabel
                    .attr("dx", -40)
                    .attr("dy", function (d) {

                        return (this.ctrlr.yScale(Math.round(av)) - this.ctrlr.yScale(data.slice[0][this.ctrlr.yParameter]) < 0) ? 3 : 3;
                    })
                    .text('gemiddeld:');

            }
    }
}

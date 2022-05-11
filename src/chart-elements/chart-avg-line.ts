export class ChartAvgLine {


    constructor(
        private config,
        private svg
    ){}

    draw() {

            this.svg.layers.data.selectAll('g.average').remove();

                this.svg.averageGroup = this.svg.layers.underData.append("g")
                    .attr("class", "average");

                this.svg.averageLine = this.svg.averageGroup.append("line");

                this.svg.averageNumber = this.svg.averageGroup.append("text")
                    .attr("class", "small-label smallest-label")
                    .attr("text-anchor", "start")
                    .attr("font-family", "NotoSans Regular")
                    .attr("font-size", ".75rem")
                    .style("fill", "black");

            if(this.config.extra.firstInLine) {

                this.svg.averageLabel = this.svg.averageGroup.append("text")
                    // .attr("class", "small-label smallest-label")
                    .attr("text-anchor", "end")
                    .attr("font-family", "NotoSans Regular")
                    .attr("font-size", ".8rem")
                    .style("fill", "black");
            }
    }

    redraw(xScale,yScale,dimensions,data,colour,yParameter) {


            let av = (data.reduce((a, b) => a + parseInt(b[yParameter]), 0)) / data.length;



                this.svg.averageGroup
                    .attr("transform", (d) => {
                        return "translate(" + 0 + ", " + yScale(av) + ")"
                    });

                this.svg.averageLine
                    .attr("x1", xScale(new Date(data[data.length - 1][this.config.xParameter])) - 0)
                    .attr("x2", xScale(new Date(data[0][this.config.xParameter])) + 10)
                    .attr("y1", 0)
                    .attr("y2", 0)
                    .attr("fill", "none")
                    .style("stroke", "gray")
                    .style("stroke-width", 2)
                    .style("stroke-dasharray", "2 4")
                ;

                this.svg.averageNumber
                    .attr("dx", dimensions.width + 12)
                    .attr("dy", function (d) {

                        return (yScale(Math.round(av)) - yScale(data[0][yParameter]) < 0) ? 3 : 3;
                    })
                    .text(Math.round(av));

            if(this.svg.averageLabel) {

                this.svg.averageLabel
                    .attr("dx", -40)
                    .attr("dy", function (d) {

                        return (yScale(Math.round(av)) - yScale(data[0][yParameter]) < 0) ? 3 : 3;
                    })
                    .text('gemiddeld:');

            }
    }
}

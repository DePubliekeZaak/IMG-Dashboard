import { colours } from '@local/styleguide';
import { displayDate } from '@local/d3-services';
import * as d3 from 'd3';

export class ChartRaggedLine {


    constructor(
        private ctrlr,
    ){
    }

    draw(data) {

        if(!this.ctrlr.config.suspended) {

            this.ctrlr.svg.line = this.ctrlr.svg.layers.data.selectAll('.line')
                .data([data])
                .join("path")
                .attr("class", "line");

            this.ctrlr.svg.circles = this.ctrlr.svg.layers.data.selectAll('circle')
                .data(data)
                .join("circle");
        }
    }

    redraw(data : any, colour : string) {

        let self = this;


            let line = d3.line()
                .x(d =>  self.ctrlr.scales.x.scale(new Date(d[this.ctrlr.parameters.x])))
                .y(d => self.ctrlr.scales.y.scale(d[this.ctrlr.parameters.y]))
                .curve(d3.curveLinear);

            this.ctrlr.svg.line
                .transition()
                .duration(250)
                .attr("d", line)
                .attr("fill", 'transparent')
                .attr("stroke", () => {

                    // if (this.ctrlr.config.extra.smartColours === 'up') {

                    //     if (data[0][yParameter] > data[1][yParameter]) {
                    //         return colours['moss'][0];
                    //     } else {
                    //         return colours['orange'][0];
                    //     }

                    // } else if (this.ctrlr.config.extra.smartColours === 'down') {

                    //     if(data[0][yParameter] < data[1][yParameter]) {

                    //         return colours['moss'][0];
                    //     } else {
                    //         return colours['orange'][0];
                    //     }

                    // } else {
                        return colours[colour][0];
                  //  }
                })
                .attr("stroke-width", 2)
            ;

            if(this.ctrlr.svg.circles) {

                this.ctrlr.svg.circles
                    .attr("cx", (d, i) => {
                        return self.ctrlr.scales.x.scale(new Date(d[this.ctrlr.parameters.x])) 
                    })
                    .attr("cy", (d) =>  {
                        return self.ctrlr.scales.y.scale(d[this.ctrlr.parameters.y])
                    })
                    .attr("r", 1)
                    .attr("fill", 'white')
                    .attr("stroke", () => {

                        // if (this.ctrlr.config.extra.smartColours === 'up') {

                        //     if (data[0][xParameter] > data[1][xParameter]) {
                        //         return colours['green'][0];
                        //     } else {
                        //         return colours['orange'][0];
                        //     }

                        // } else if (this.ctrlr.config.extra.smartColours === 'down') {

                        //         if(data[0][xParameter] > data[1][xParameter]) {
                        //             return colours['orange'][0];
                        //         } else {
                        //             return colours['green'][0];
                        //         }

                        // } else {
                            return colours[colour][0];
                        // }
                    })
                    .attr("stroke-width", 2)
                 //   .transition()
  //                  .duration(250)
                    .attr("r", 4);

            this.ctrlr.svg.circles
                .on("mouseover", function (event: any, d: any) {

                    let date = new Date(d[this.ctrlr.parameters.x]);

                    d3.select('.tooltip')
                        .html(() => {

                            return 'Gerapporteerd op ' + displayDate(date) + '<br/><b>'
                                + Math.round(d[this.ctrlr.parameters.y] * 10) / 10  + '</b><br/>'

                        })
                        .style("left", (event.pageX) + "px")
                        .style("top", (event.pageY) + "px")
                        // .transition()
                        // .duration(250)
                        .style("opacity", 1);
                })
                .on("mouseout", function (d) {

                    d3.select('.tooltip')
                        // .transition()
                        // .duration(250)
                        .style("opacity", 0);
                });

            }

            let av = (data.reduce((a, b) => a + parseInt(b[this.ctrlr.parameters.y]), 0)) / data.length;

      
       
        
    }
}

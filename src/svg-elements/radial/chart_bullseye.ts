import * as d3 from "d3";
import { convertToCurrency, displayDate, slugify } from "../../d3-services/_helpers";
import { DataPart, GraphData } from "../../d3-modules/_d3_types";
import { colours } from '../../img-modules/_styleguide';

export class ChartBullsEye {

    group;

    constructor(
        private ctrlr,
        private pgvLabels
    ){}

    draw(data: any[][]) {

        // console.log(data);

        const config = this.ctrlr.config ? this.ctrlr.config : this.ctrlr.graphObject.config;

        let self = this;

        let pie = d3.pie()
            .sort(null)
            .value((d) => d['value']);

        // create group

        this.ctrlr.svg.groups = this.ctrlr.svg.layers.data.selectAll('.group')
            .data(data)
            .join("g")
            // .attr("class","group")
            .attr("class", (d,i) => {
                return "group pgv" + slugify(this.pgvLabels[i])
            });


        this.ctrlr.svg.labelGroups = this.ctrlr.svg.layers.data.selectAll('.labelgroup')
            .data(data)
            .join("g")
            // .attr("class","group")
            .attr("class", (d,i) => {
                return "labelgroup pgv" + slugify(this.pgvLabels[i])
            });

        this.ctrlr.svg.arcs = this.ctrlr.svg.groups
            .selectAll('.arc')
            .data((d) => pie(d))
            .join("path")
            .attr("class", "arc")
            .attr("fill", (d: any) => colours[d.data.colour][1])
            .attr("stroke", (d: any) => colours[d.data.colour][0])
            .attr("stroke-width", "1px")
            // .on("mouseover", function (event: any, d: any, array: any[]) {

            //     self.ctrlr.svg.arcs
            //         .attr("fill", (dd: any) => colours[dd.data.colour][1]);

            //     d3.select(event.target)
            //         .attr("fill", (dd: any) => colours[dd.data.colour][0]);
                 
            //     d3.select('.tooltip')
            //         .html((dd: any) => {
        
            //             let value = (self.ctrlr.mapping.parameters[0][0].format === 'currency') ? convertToCurrency(d['value']) : d['value'];

            //             return '<b>' + d['data']['label'] + '</b><br/>' + value;
            //         })
            //         .style("left", (event.pageX) + "px")
            //         .style("top", (event.pageY) + "px")
            //         // .transition()
            //         // .duration(250)
            //         .style("opacity", 1);
            // })
            // .on("mouseout", function (event: any, d: any) {

            //     self.ctrlr.svg.arcs
            //         .attr("fill", (dd:any) => colours[dd.data.colour][1]);

            //     d3.select('.tooltip')
            //         // .transition()
            //         // .duration(250)
            //         .style("opacity", 0);
            // });

        this.ctrlr.svg.labels = this.ctrlr.svg.labelGroups
            .selectAll('.small-label')
            .data((d: any, i) => {
                return [{
                 label : d[0].pgv,
                 index: d[0].pgvIndex
                }];                
            })
            .join("text")
            .attr("class","small-label")
            .attr("text-anchor","start")
            .style("font-family", "NotoSans Regular")
            .style("fill","black")
            .style("font-size",".7rem")
            .text((d: any, i: number) => { 
                
                return (d.index == 0 || d.index == 5) ?  d.label : "";
            });

    }

    redraw() {

        let radius, arc, labelArc, innerRadius;

        const config = this.ctrlr.config ? this.ctrlr.config : this.ctrlr.graphObject.config;

        arc = d3.arc()
            .innerRadius( (d: any) => {
                return this.ctrlr.scales.r.fn(slugify(this.pgvLabels[d.data.pgvIndex]))
            })
            .outerRadius((d: any) => {
                return this.ctrlr.scales.r.fn(slugify(this.pgvLabels[d.data.pgvIndex])) + this.ctrlr.scales.r.bandwidth() - 4
            })
            .padAngle(1)
            .padRadius(4);

        function arcTween(a) {

            var i = d3.interpolate(this._current, a);
            this._current = i(0);
            return (t) => {
             
                return arc(i(t));
            };
        }

        this.ctrlr.svg.arcs
            .transition()
            .duration(500)
            .attrTween("d", arcTween);

        this.ctrlr.svg.labels
            .attr("y", 0)
            .attr("dx", (d,i) => {
                // console.log(d.index);

                return d.index == 0 ? 0 : (this.ctrlr.scales.r.fn(slugify(d.label)) + (this.ctrlr.scales.r.bandwidth()) + 10);
              //  return 
            })
            .attr("x", (d: any,i) => {
                // console.log(d);
                return 0; //this.ctrlr.scales.r.fn(slugify(d.label)) / 2
            })


        // this.ctrlr.svg.arcs.select('.arc')
        //     .attr("d", arc)
        //     .each(function(d) { this._current = d; });

        this.ctrlr.svg.layers.data
            .attr("transform", "translate(" + (45 + this.ctrlr.dimensions.svgWidth / 2) + "," + ((this.ctrlr.dimensions.svgHeight / 2  ) + 20) + ")");
    }
}

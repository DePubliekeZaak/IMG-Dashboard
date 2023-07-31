import { slugify, thousands } from "@local/d3-services";
import { Circles } from "@local/d3_types/data";
import colours from "@local/styleguide/_colours";
import * as d3 from "d3";

interface ChartElement {

    draw: ( data: Circles) => void,
    redraw: ( data: Circles) => void
}

export class ChartPieWeek  {
    
    constructor(
        public ctrlr,
    ){}

    draw(data: any) {

        const config = this.ctrlr.config ? this.ctrlr.config : this.ctrlr.graphObject.config;

        let self = this;

        let pie = d3.pie()
            .sort(null)
            .value((d) => d['value']);

        this.ctrlr.svg.pie_wrapper = this.ctrlr.svg.layers.data
            .append('g')
            .attr('class','pie_wrapper');

        this.ctrlr.svg.arcs = this.ctrlr.svg.pie_wrapper.selectAll(".arc")
            .data(pie(data), (d => d.data.label))
            .join("path")
            .attr("class", "arc")
            .attr("fill", (d: any) => colours[d.data.colour][1])
            .attr("stroke", (d: any) => colours[d.data.colour][0])
            .attr("stroke-width", "1px")

        this.ctrlr.svg.textWrapper = this.ctrlr.svg.pie_wrapper.selectAll("g.text-wrapper")
            .data(data)
            .join("g")
            .attr("class", (d) => "text-wrapper " + slugify(d.label));
            
        this.ctrlr.svg.total = this.ctrlr.svg.textWrapper
            .append("text")
            .attr("class","total")
            .attr("text-anchor", "end")
            .attr("y", -24)
            .style("font-family","Replica")
            .style("font-size","2rem")
            .text((d) => thousands(d.value));

        this.ctrlr.svg.descriptor = this.ctrlr.svg.textWrapper
            .append("text")
            .attr("class","descriptor")
            .attr("text-anchor", "end")
            .style("font-family","NotoSans Regular")
            .style("font-size","1rem")
            .attr("y", 0)
            .text((d) => d.units);

        this.ctrlr.svg.delta = this.ctrlr.svg.textWrapper
            .append("text")
            .attr("class","delta")
            .attr("text-anchor", "end")
            .style("font-family","NotoSans Regular")
            .style("font-size","1rem")
            .attr("y", 24)
            .text((d) => d.delta > 0 ? "+ " + d.delta: d.delta);
    }

    redraw(data: Circles) {

        let radius, arc, labelArc;

     

        const sum = data.map( d => d.value).reduce( (s,v) => s + v, 0);

        radius = this.ctrlr.scales.r.scale(sum)

        this.ctrlr.svg.arcs
            .attr("d", d3.arc()
                .outerRadius(radius)
                .innerRadius(0)
                .padAngle(0)
            )
            .filter( (d,i) => i == 1) 
            .attr("transform", (d) => {
                const x =  -6;
                const y = -5;
                return "translate(" + x + "," + y + ")"
            });

     
        
    }
}
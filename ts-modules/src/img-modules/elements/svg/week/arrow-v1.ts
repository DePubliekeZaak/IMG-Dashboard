import { thousands } from "@local/d3-services";
import { Circle, Circles } from "@local/d3_types/data";
import colours from "@local/styleguide/_colours";

interface ChartElement {

    draw: ( data: Circles) => void,
    redraw: ( data: Circles) => void
}

export class ArrowV1 {

    local;

    constructor(
        public ctrlr,
        public slug
    ){

        this.ctrlr.svg[this.slug] = {}
        this.local = this.ctrlr.svg[this.slug];
    }

    draw(data: Circles) {

        console.log(this.ctrlr)

        this.ctrlr.svg.defs
            .append("marker")
            .attr("id","arrow")
            .attr("viewBox","0 -5 10 10")
            .attr("refX",5)
            .attr("refY",0)
            .attr("markerWidth",4)
            .attr("markerHeight",4)
            .attr("orient","auto")
            .append("path")
            .attr("d", "M 0 -5 L 10 0 L 0 5")
            .attr("class", "arrowHead");

        this.local.wrapper = this.ctrlr.svg.layers.data.selectAll('arrow_wrapper')
            .data(data)
            .join("g")
            .attr("class","arrow_wrapper");

        this.local.path = this.local.wrapper
            .append("line") 
            .style("stroke", "black")
            .style("stroke-width", 2)
            .attr("marker-end","url(#arrow)"); 
    }

    redraw() {

       
        
    }
} 
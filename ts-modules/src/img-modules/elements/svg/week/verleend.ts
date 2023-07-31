import { convertToCurrency, thousands } from "@local/d3-services";
import { Circle, Circles } from "@local/d3_types/data";
import colours from "@local/styleguide/_colours";
import { appendFile } from "fs";

interface ChartElement {

    draw: ( data: any) => void,
    redraw: ( data: any) => void
}

export class WeekVerleendV1 {

    // wrapper;
    // circle;
    // textWrapper
    // total;
    // descriptor;
    // delta;
    local;

    constructor(
        public ctrlr,
    ){
        this.ctrlr.svg.amount = {}
        this.local = this.ctrlr.svg.amount;
    }

    draw(data: any) {

        
        this.local.wrapper = this.ctrlr.svg.textWrapper
             .append("g")
            .data(data)
            .join("g")
            .attr("class","amount_wrapper");

        let yOffset = 0;

        this.local.descriptor = this.local.wrapper
            .append("text")
            .attr("class","descriptor")
            .attr("text-anchor", "end")
            .style("font-family","NotoSans Regular")
            .style("font-size","1rem")
            .attr("y", yOffset)
            .text((d) => d.label + ":");

            yOffset = yOffset + 36
            
        this.local.total = this.local.wrapper
            .append("text")
            .attr("class","total")
            .attr("text-anchor", "end")
            .attr("y", yOffset)
            .style("font-family","Replica")
            .style("font-size","2rem")
            .text((d) => convertToCurrency(d.value));

            yOffset = yOffset + 28

        this.local.delta = this.local.wrapper
            .append("text")
            .attr("class","delta")
            .attr("text-anchor", "end")
            .style("font-family","NotoSans Regular")
            .style("font-size","1rem")
            .attr("y", yOffset)
            .text((d) => "+ " + convertToCurrency(d.delta));
            

    }

    redraw(data: any) {

        this.local.wrapper
            .attr("transform", (d,i) => {

                // minus radius
                const x = 0; // -this.ctrlr.scales.r.scale(d.value);
                // plus radius
                const y = 80;
                return "translate(" + x + "," + y + ")"
            })

        // this.textWrapper
        //     .attr("transform", (d,i) => {

        //         // plus radius - somthng
        //         const x = this.ctrlr.scales.r.scale(d.value) + 80;
        //         const y = 0 // + radius? 
        //         return "translate(" + x + "," + y + ")"
        //     })
    }
} 
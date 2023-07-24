import { Circles } from "@local/d3_types/data";
import colours from "@local/styleguide/_colours";

interface ChartElement {

    draw: ( data: Circles) => void,
    redraw: ( data: Circles) => void

}

export class ChartPieWeek {
    
    constructor(
        public ctrlr,
    ){}

    draw(data: Circles) {

    }

    redraw(data: Circles) {
        
    }
}
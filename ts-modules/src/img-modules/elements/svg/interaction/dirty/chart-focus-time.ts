import * as d3 from 'd3';
import { GraphData } from '@local/d3_types';
import ChartFocus from './chart-focus';

export default class ChartFocusTime extends ChartFocus {

    constructor(
        ctrlr : any
    ){
        super(ctrlr);
    }

    draw() {

        super.draw();
    }

    bisect(data,x0) {

        let self = this;

        let arr = data.slice
            .map( (d) => new Date(d[self.ctrlr.parameters.x]))
            .sort( (a:any,b: any) => { return a - b});

        return data.slice.length - 1 - d3.bisect(arr,x0);
    }

    redraw(data : GraphData) {

        super.redraw(data);
    }

    html(d, data) {

        return super.html(d, data);
    }
}

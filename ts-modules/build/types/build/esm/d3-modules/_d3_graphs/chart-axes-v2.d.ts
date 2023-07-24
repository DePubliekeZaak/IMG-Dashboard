export default class ChartAxesV2 {
    constructor(ctrlr: any, config: any);
    ctrlr: any;
    config: any;
    draw(): boolean;
    axisGroup: any;
    axis: d3.Axis<d3.AxisDomain>;
    redraw(dimensions: any, scale: any, data: any): void;
}
import * as d3 from "d3";

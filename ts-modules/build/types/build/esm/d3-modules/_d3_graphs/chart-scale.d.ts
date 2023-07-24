export default class ChartScale {
    constructor(ctrlr: any, config: any);
    ctrlr: any;
    config: any;
    dataLength: number;
    set(data: any, minValue: any): d3.ScaleLinear<number, number, never> | d3.ScaleTime<number, number, never> | d3.ScaleBand<string> | (number[] & d3.ScalePower<number, number, never>);
    scale: d3.ScaleLinear<number, number, never> | d3.ScaleTime<number, number, never> | d3.ScaleBand<string> | (number[] & d3.ScalePower<number, number, never>);
    reset(range: any): d3.ScaleLinear<number, number, never> | d3.ScaleTime<number, number, never> | d3.ScaleBand<string> | (number[] & d3.ScalePower<number, number, never>);
    fn(x: any): number;
    domain(): string[] | number[] | Date[];
    range(): number[];
    bandwidth(): any;
}
import * as d3 from 'd3';

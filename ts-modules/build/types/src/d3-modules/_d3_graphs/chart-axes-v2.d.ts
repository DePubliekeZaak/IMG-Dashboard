import { Dimensions } from '@local/d3_types';
import { DataPart } from '@local/d3_types';
export default class ChartAxesV2 {
    private ctrlr;
    private config;
    axis: any;
    axisGroup: any;
    constructor(ctrlr: any, config: any);
    draw(): boolean;
    redraw(dimensions: Dimensions, scale: any, data: DataPart[]): void;
}

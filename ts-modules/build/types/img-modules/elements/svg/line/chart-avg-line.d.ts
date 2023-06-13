import { GraphData } from "@local/d3_types";
export declare class ChartAvgLine {
    private ctrlr;
    constructor(ctrlr: any);
    draw(): void;
    redraw(data: GraphData): void;
}

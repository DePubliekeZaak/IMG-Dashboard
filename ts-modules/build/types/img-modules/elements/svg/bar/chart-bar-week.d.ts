import { Bars } from '@local/d3_types/data';
interface ChartElement {
    draw: (data: Bars) => void;
    redraw: (data: Bars) => void;
}
export declare class ChartBarWeekV1 implements ChartElement {
    ctrlr: any;
    bars: any;
    barLabels: any;
    constructor(ctrlr: any);
    draw(data: Bars): void;
    redraw(data: Bars): void;
}
export {};

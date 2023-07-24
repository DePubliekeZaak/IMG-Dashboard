export const __esModule: boolean;
export default WeekV1;
declare class WeekV1 extends d3_graphs_1.GraphControllerV2 {
    constructor(main: any, data: any, element: any, mapping: any, segment: any, size: any);
    element: any;
    mapping: any;
    segment: any;
    size: any;
    pre(): void;
    init(size: any): any;
    prepareData(data: any): {
        history: {
            time: any;
            label: any;
            value: any;
            colour: string;
        }[];
        latest: any;
        slice: {
            time: any;
            label: any;
            value: any;
            colour: string;
        }[];
        pie: {
            label: string;
            value: any;
            new: any;
            units: string;
            colour: string;
        }[];
    };
    draw(data: any): any;
    redraw(data: any): any;
    update(data: any, segment: any, update: any): any;
}
import d3_graphs_1 = require("@local/d3_graphs");

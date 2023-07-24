export const __esModule: boolean;
export default ChartScale;
declare class ChartScale {
    constructor(ctrlr: any, config: any);
    ctrlr: any;
    config: any;
    dataLength: number;
    set(data: any, minValue: any): any;
    scale: any;
    reset(range: any): any;
    fn(x: any): any;
    domain(): any;
    range(): any;
    bandwidth(): any;
}

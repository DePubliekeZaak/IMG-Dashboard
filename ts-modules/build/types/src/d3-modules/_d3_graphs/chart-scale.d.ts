import { IGraphControllerV2, IScale } from '@local/d3_types';
export default class ChartScale {
    private ctrlr;
    private config;
    dataLength: any;
    scale: any;
    constructor(ctrlr: IGraphControllerV2, config: IScale);
    set(data: (string | number | any)[], minValue: any): any;
    reset(range?: number[]): any;
    fn(x: any): any;
    domain(): any;
    range(): any;
    bandwidth(): any;
}

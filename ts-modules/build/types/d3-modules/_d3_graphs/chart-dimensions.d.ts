import { GraphConfig, IGraphConfigV2, Dimensions } from "@local/d3_types";
export interface IChartDimensions {
    element: HTMLElement;
    config: GraphConfig | IGraphConfigV2;
    measure: (Dimensions: any) => Dimensions;
}
export default class ChartDimensions implements IChartDimensions {
    element: HTMLElement;
    config: IGraphConfigV2;
    dimensions: Dimensions;
    constructor(element: HTMLElement, config: IGraphConfigV2);
    measure(dimensions: Dimensions): Dimensions;
}

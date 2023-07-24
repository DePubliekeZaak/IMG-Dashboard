import { GraphConfig, IGraphConfigV2, Dimensions } from "@local/d3_types";
export interface IChartDimensions {
    element: HTMLElement;
    config: GraphConfig | IGraphConfigV2;
    fix: (size: number[]) => void;
    measure: (Dimensions: any) => Dimensions;
}
export default class ChartDimensions implements IChartDimensions {
    element: HTMLElement;
    config: IGraphConfigV2;
    dimensions: Dimensions;
    constructor(element: HTMLElement, config: IGraphConfigV2);
    fix(size: number[]): Dimensions;
    measure(dimensions: Dimensions): Dimensions;
}

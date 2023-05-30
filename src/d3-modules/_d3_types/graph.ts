import { IChartDimensions } from "@local/d3_graphs/chart-dimensions";
import { DataPart } from "./data";
import { Dimensions } from "./dimensions";
import { IGraphConfigV2 } from "./graphConfig";
import { IGraphMapping, IMappingOption } from "./mapping";

export interface IGraphControllerV2 {

    main: any, // main controller 
    data: DataPart[],
    element: HTMLElement,
    svgWrapper?: HTMLElement,
    mapping: IGraphMapping,
    config: IGraphConfigV2,
    segment: string,

    dimensions: Dimensions,
    firstMapping: IMappingOption;
    svg;

    // classes 
    chartDimensions : IChartDimensions,
    chartSVG? : any,
    htmlHeader? : any,
    htmlSegment? : any,
    popup? : any,
}
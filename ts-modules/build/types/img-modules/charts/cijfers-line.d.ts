import { DataPart, GraphData } from "@local/d3_types";
import { GraphControllerV2 } from "@local/d3_graphs";
import { IGraphMapping } from '@local/d3_types';
export default class CijfersLine extends GraphControllerV2 {
    main: any;
    data: any;
    element: HTMLElement;
    mapping: IGraphMapping;
    segment: string;
    parentEl: any;
    chartLine: any;
    chartBackgroundAreas: any;
    chartWeekGrid: any;
    chartAvgLine: any;
    htmlCircle: any;
    constructor(main: any, data: any, element: HTMLElement, mapping: IGraphMapping, segment: string);
    pre(): void;
    init(): void;
    prepareData(data: DataPart[]): GraphData;
    redraw(data: GraphData): void;
    draw(data: GraphData): void;
    update(data: GraphData, segment: string, update: boolean): void;
}

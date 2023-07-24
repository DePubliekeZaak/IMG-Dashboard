import { GraphControllerV2 } from "@local/d3_graphs";
import { IGraphMapping } from '@local/d3_types';
export default class WeekV1 extends GraphControllerV2 {
    main: any;
    data: any;
    element: HTMLElement;
    mapping: IGraphMapping;
    segment: string;
    size?: number[];
    parentEl: any;
    meldingen: any;
    pie: any;
    trend: any;
    constructor(main: any, data: any, element: HTMLElement, mapping: IGraphMapping, segment: string, size?: number[]);
    pre(): void;
    init(size?: number[]): Promise<void>;
    prepareData(data: any[]): any;
    draw(data: any): Promise<void>;
    redraw(data: any): Promise<void>;
    update(data: any, segment: string, update: boolean): Promise<void>;
}

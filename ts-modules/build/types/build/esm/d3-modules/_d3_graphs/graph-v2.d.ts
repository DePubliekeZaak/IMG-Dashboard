export default class GraphControllerV2 {
    constructor(main: any, data: any, element: any, mapping: any, segment: any, size: any);
    main: any;
    data: any;
    element: any;
    mapping: any;
    segment: any;
    size: any;
    firstMapping: boolean | {
        column: any;
        label: any;
        colour: any;
        units: any;
        format: any;
    };
    parameters: {};
    scales: {};
    axes: {};
    config: {
        margin: {
            top: number;
            bottom: number;
            left: number;
            right: number;
        };
        padding: {
            top: number;
            bottom: number;
            left: number;
            right: number;
        };
        scales: any[];
        axes: any[];
        extra: {};
    };
    dimensions: {
        svgWidth: number;
        width: number;
        svgHeight: number;
        height: number;
    };
    _init(): void;
    popup: HtmlPopupV2;
    htmlSegment: HtmlSegment;
    htmlHeader: HtmlHeader;
    svg: {
        body: any;
        layers: {};
        tooltip: HTMLSpanElement | d3.Selection<d3.BaseType, any, HTMLElement, any>;
        yAxis: any;
        xAxis: any;
    };
    _svg(svgWrapper: any): void;
    chartDimensions: ChartDimensions;
    chartSVG: ChartSVG;
    redraw(data: any): any;
    draw(data: any): any;
    prepareData(data: any): void;
    _update(newData: any, segment: any, update: any): any;
    _addScale(slug: any, type: any, direction: any, parameter: any): void;
    _addAxis(slug: any, scale: any, position: any, format: any, extra: any, label: any): void;
    _addMargin(top: any, bottom: any, left: any, right: any): void;
    _addPadding(top: any, bottom: any, left: any, right: any): void;
}
import { HtmlPopupV2 } from '@local/elements';
import { HtmlSegment } from '@local/elements';
import { HtmlHeader } from '@local/elements';
import * as d3 from "d3";
import { ChartDimensions } from './index';
import { ChartSVG } from './index';

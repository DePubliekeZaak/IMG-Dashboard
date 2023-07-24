export const __esModule: boolean;
export default GraphControllerV2;
declare class GraphControllerV2 {
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
    popup: elements_1.HtmlPopupV2;
    htmlSegment: elements_1.HtmlSegment;
    htmlHeader: elements_1.HtmlHeader;
    svg: any;
    _svg(svgWrapper: any): void;
    chartDimensions: any;
    chartSVG: any;
    redraw(data: any): any;
    draw(data: any): any;
    prepareData(data: any): void;
    _update(newData: any, segment: any, update: any): any;
    _addScale(slug: any, type: any, direction: any, parameter: any): void;
    _addAxis(slug: any, scale: any, position: any, format: any, extra: any, label: any): void;
    _addMargin(top: any, bottom: any, left: any, right: any): void;
    _addPadding(top: any, bottom: any, left: any, right: any): void;
}
import elements_1 = require("@local/elements");

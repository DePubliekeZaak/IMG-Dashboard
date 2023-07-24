export default class ChartDimensions {
    constructor(element: any, config: any);
    config: any;
    element: any;
    dimensions: {
        svgHeight: number;
        svgWidth: number;
        width: number;
        height: number;
    };
    fix(size: any): {
        svgHeight: number;
        svgWidth: number;
        width: number;
        height: number;
    };
    measure(dimensions: any): {
        svgHeight: number;
        svgWidth: number;
        width: number;
        height: number;
    };
}

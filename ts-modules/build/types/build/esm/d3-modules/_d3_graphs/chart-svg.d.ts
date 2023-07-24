export default class ChartSVG {
    constructor(element: any, config: any, dimensions: any, svg: any);
    element: any;
    config: any;
    dimensions: any;
    svg: any;
    render(): void;
    redraw(dimensions: any): void;
    layers(): void;
}

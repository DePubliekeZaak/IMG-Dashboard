export default class ChartSVG {
    element: any;
    config: any;
    dimensions: any;
    svg: any;
    constructor(element: any, config: any, dimensions: any, svg: any);
    render(): void;
    redraw(dimensions: any): void;
    layers(): void;
}

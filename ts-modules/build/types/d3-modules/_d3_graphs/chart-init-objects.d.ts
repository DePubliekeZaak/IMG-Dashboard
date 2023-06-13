import * as d3 from 'd3';
declare let ChartObjects: () => {
    config: () => {
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
    };
    dimensions: () => {
        svgWidth: number;
        width: number;
        svgHeight: number;
        height: number;
    };
    svg: () => {
        body: any;
        layers: {};
        tooltip: HTMLSpanElement | d3.Selection<d3.BaseType, unknown, HTMLElement, any>;
        yAxis: any;
        xAxis: any;
    };
};
export default ChartObjects;

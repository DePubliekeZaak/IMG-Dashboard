export default ChartObjects;
declare function ChartObjects(): {
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
        tooltip: HTMLSpanElement | d3.Selection<d3.BaseType, any, HTMLElement, any>;
        yAxis: any;
        xAxis: any;
    };
};
import * as d3 from 'd3';

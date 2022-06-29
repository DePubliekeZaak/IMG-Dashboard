import { Dimensions } from "../types/dimensions";
import { GraphConfig } from "../types/graphConfig";

export interface IChartDimensions {
    element: HTMLElement,
    config: GraphConfig,
    measure: (Dimensions) =>  Dimensions
}


export class ChartDimensions implements IChartDimensions {

    element: HTMLElement;
    config: GraphConfig;
    dimensions: Dimensions;

    constructor(
        
        element : HTMLElement,
        config : GraphConfig
    ) {
        this.config = config;
        this.element = element
    }

    measure(dimensions: Dimensions) {

        this.dimensions = dimensions;

        // svgWidth enn svgHeight includes the padding for axes 
     
        this.dimensions.svgWidth = this.element.getBoundingClientRect().width - this.config.margin.left - this.config.margin.right;
        this.dimensions.width = dimensions.svgWidth - this.config.padding.left - this.config.padding.right;

        this.dimensions.svgHeight = this.element.getBoundingClientRect().height - this.config.margin.top - this.config.margin.bottom;
        this.dimensions.height = this.dimensions.svgHeight - this.config.padding.top - this.config.padding.bottom;

        return this.dimensions;
    }
}
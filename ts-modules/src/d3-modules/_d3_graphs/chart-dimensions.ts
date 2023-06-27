import { GraphConfig, IGraphConfigV2, Dimensions } from "@local/d3_types";

export interface IChartDimensions {
    element: HTMLElement,
    config: GraphConfig|IGraphConfigV2,
    fix: (size: number[]) => void
    measure: (Dimensions) =>  Dimensions
}

export default class ChartDimensions implements IChartDimensions {

    element: HTMLElement;
    config: IGraphConfigV2;
    dimensions: Dimensions;

    constructor(
        
        element : HTMLElement,
        config : IGraphConfigV2
    ) {
        this.config = config;
        this.element = element
        this.dimensions = { svgHeight: 0,  svgWidth: 0, width: 0, height: 0}
    }

    fix(size: number[]) {

        if(size && size[0]) {

            this.dimensions.svgWidth = size[0] ;
            this.dimensions.width =  size[0] - this.config.padding.left - this.config.padding.right;

            this.dimensions.svgHeight = size[1]- this.config.margin.top - this.config.margin.bottom;
            this.dimensions.height =  size[1]- this.config.padding.top - this.config.padding.bottom;

        }

        return this.dimensions;
    }

    measure(dimensions: Dimensions) {

        this.dimensions = dimensions;


        // svgWidth enn svgHeight includes the padding for axes 

        console.log(this.element.getAttribute("id"))
     
        this.dimensions.svgWidth = this.element.getBoundingClientRect().width - this.config.margin.left - this.config.margin.right;
        this.dimensions.width = dimensions.svgWidth - this.config.padding.left - this.config.padding.right;

        this.dimensions.svgHeight = this.element.getBoundingClientRect().height - this.config.margin.top - this.config.margin.bottom;
        this.dimensions.height = this.dimensions.svgHeight - this.config.padding.top - this.config.padding.bottom;

        return this.dimensions;
    }
}
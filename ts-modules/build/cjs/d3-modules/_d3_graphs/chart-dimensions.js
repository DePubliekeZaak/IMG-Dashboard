"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChartDimensions {
    constructor(element, config) {
        this.config = config;
        this.element = element;
        this.dimensions = { svgHeight: 0, svgWidth: 0, width: 0, height: 0 };
    }
    fix(size) {
        if (size && size[0]) {
            this.dimensions.svgWidth = size[0];
            this.dimensions.width = size[0] - this.config.padding.left - this.config.padding.right;
            this.dimensions.svgHeight = size[1] - this.config.margin.top - this.config.margin.bottom;
            this.dimensions.height = size[1] - this.config.padding.top - this.config.padding.bottom;
        }
        return this.dimensions;
    }
    measure(dimensions) {
        this.dimensions = dimensions;
        // svgWidth enn svgHeight includes the padding for axes 
        console.log(this.element.getAttribute("id"));
        this.dimensions.svgWidth = this.element.getBoundingClientRect().width - this.config.margin.left - this.config.margin.right;
        this.dimensions.width = dimensions.svgWidth - this.config.padding.left - this.config.padding.right;
        this.dimensions.svgHeight = this.element.getBoundingClientRect().height - this.config.margin.top - this.config.margin.bottom;
        this.dimensions.height = this.dimensions.svgHeight - this.config.padding.top - this.config.padding.bottom;
        return this.dimensions;
    }
}
exports.default = ChartDimensions;

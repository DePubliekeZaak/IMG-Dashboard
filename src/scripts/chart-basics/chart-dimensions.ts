export class ChartDimensions {

    dimensions

    constructor(
        private element,
        private config
    ) {}

    get(dimensions) {

        this.dimensions = dimensions;

        this.element = (typeof this.element === 'string') ? document.querySelector(this.element) : this.element;

        this.dimensions.svgWidth = this.element.getBoundingClientRect().width - this.config.margin.left - this.config.margin.right;
        this.dimensions.width = dimensions.svgWidth - this.config.padding.left - this.config.padding.right;

        this.dimensions.svgHeight = this.element.getBoundingClientRect().height - this.config.margin.top - this.config.margin.bottom;
        this.dimensions.height = this.dimensions.svgHeight - this.config.padding.top - this.config.padding.bottom;

        return this.dimensions;
    }
}
import {Config} from "../types/graphConfig";
import {Dimensions} from "../types/dimensions";
import { colours } from "../_styleguide/_colours"
import { slugify} from "../utils/slugify.utils";

export class ChartEndLabel {

    htmlLabel;
    labelGroup;

    constructor(
        private config : Config,
        private svgLayers : any,
        private yParameter: string,
        private colour: string
    ) {


    }

    draw(parameter,label) {

        this.svgLayers.data.selectAll('.label_group.' + slugify(parameter)).remove();

        this.labelGroup = this.svgLayers.data
            .append('g')
            .attr('class','label_group ' + slugify(parameter));

        this.labelGroup
            .append('rect')
            .attr('y',-8)
            .attr('width',((label.length + 3) * 5))
            .attr('height',16)
            .style('fill',colours[this.colour][0])


        this.labelGroup
            .append('text')
            .text(label)
            .attr('dx',4)
            .attr('dy',4)
            .style('font-size','.66rem')
            .attr('fill','white')
            .style('text-transform','lowercase');
    }

    redraw(xScale: any, yScale : any, dimensions : Dimensions, data : any) {

        this.labelGroup
            .attr("transform","translate(" + dimensions.width + "," + yScale(data[data.length - 1][this.yParameter])+ ")");

    }

}
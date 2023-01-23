import { GraphConfig} from "../../types/graphConfig";
import {Dimensions} from "../../types/dimensions";
import { colours } from "../../_styleguide/_colours"
import { slugify} from "../../utils/slugify.utils";

export class ChartEndLabel {

    htmlLabel;
    labelGroup;

    constructor(
        public ctrlr : any,
        public yParameter: string,
        public label: string,
        public colour: string
    ) {


    }

    draw() {

        this.ctrlr.svg.layers.data.selectAll('.label_group.' + this.yParameter).remove();

        this.labelGroup = this.ctrlr.svg.layers.data
            .append('g')
            .attr('class','label_group ' + this.yParameter);

        // this.labelGroup
        //     .append('rect')
        //     .attr('y',-8)
        //     .attr('width',((this.label.length + 3) * 5))
        //     .attr('height',16)
        //     .style('fill',colours[this.colour][0])


        this.labelGroup
            .append('text')
            .text(this.label)
            .attr('dx',4)
            .attr('dy',4)
            .style('font-size','.66rem')
            .attr('fill', colours[this.colour][0])
            .style('text-transform','lowercase');
    }

    redraw(data : any) {

        this.labelGroup
            .attr("transform","translate(" + this.ctrlr.dimensions.width + "," + this.ctrlr.scales.y.scale(data[this.yParameter])+ ")");

    }

}
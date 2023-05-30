import * as d3 from 'd3';
import { colours } from  '../../img-modules/_styleguide'

export class ChartFlowDuration {

    start = {};
    durationText;

    startPoint;
    endPoint;

    flows;
    flowsEnter;

    turnover;
    turnoverEnter;

    durationGroup;
    durationGroupEnter;

    durationLabel;

    constructor(
        private config,
        private svgLayers
    ) {
    }

    draw(data) {

        let self = this;

        this.durationGroup = this.svgLayers.data.selectAll('.duration_group')
            .data(data);

        this.durationGroup.exit().remove();

        this.durationGroupEnter = this.durationGroup.enter()
            .append("g")
            .attr("class","duration_group");

        this.durationText = this.durationGroupEnter.merge(this.durationGroup)
            .append("text")
            .html( (d,i) => {

                if (i > 0 && i < data.length - 1) {
                    return d.duration + ' dagen';
                }
            })
            .style("font-size", ".8rem")
            .style("text-anchor", "middle");

        this.durationLabel = this.svgLayers.data
            .append('text')
            .attr("class","small-label")
            .text('Gem. tijd per stap:');
    }

    redraw(data,dimensions,rScale,xScale) {

        let self = this;

        this.durationGroupEnter.merge(this.durationGroup)
            .attr("transform", (d,i) => {

                let halfway = data[i].cumulativeDuration + (data[i].duration / 2);
                return "translate(" + xScale(halfway) + ", " +  (dimensions.height - 85) + ")"
            });

        this.durationLabel
            .attr("transform", (d,i) => {
                return "translate(" + xScale(0) + ", " +  (dimensions.height - 85) + ")"
            });
    }

    forceDirect(xScale,rScale,data) {

        let self = this;
        let triangleSize = 40;

    }
}

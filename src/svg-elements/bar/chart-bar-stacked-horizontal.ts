
import { colours, breakpoints } from "../../img-modules/_styleguide";
import * as d3 from "d3";
import {slugify} from "../../d3-services/_helpers";

export class ChartBarStackedHorizontal {

    series;
    seriesEnter;

    barGroup;
    barGroupEnter;

    bar;
    barLabel;
    barValue;

    constructor(
        private config,
        private svg
    ){}

    draw(data, stackedData) {

        this.series = this.svg.layers.data.selectAll(".stackedGroup")
            .data(stackedData);

        this.series.exit().remove();

        this.seriesEnter = this.series
            .enter().append("g")
            .attr("class", (d) => {

                return "stackedGroup " + d.key;
            });


        this.barGroup = this.seriesEnter.merge(this.series)
            .selectAll("g")
            .data(function(d) {
                return d;
            });

        this.barGroup.exit().remove();

        this.barGroupEnter = this.barGroup
            .enter()
            .append("g")
            ;

        // dit moet beter kunnen!
        d3.selectAll(".bar").remove();
        d3.selectAll(".barLabel").remove();

        this.bar = this.barGroup.merge(this.barGroupEnter)
            .append("rect")
            .attr("class", (d) => {

                return "bar " + slugify(d.data.group)
            })

        ;

        this.bar.exit().remove();

        // this.bars = this.svgLayers.data.selectAll(".bar")
        //     .data(data.filter((d) => d.colour));
        //
        // this.bars.exit().remove();
        //
        // this.barsEnter = this.bars
        //     .enter()
        //     .append("rect")
        //     .attr("class", "bar")
        //     .attr("fill", (d) => colours[d.colour][0])
        // ;
        //

        this.barLabel = this.barGroup.merge(this.barGroupEnter)
            .append('text')
            .attr('class','barLabel small-label')
            .attr('x', 0)
            .attr('dx', '0px')
            .attr('dy', '-10px')
            .style("text-anchor", "start")

        ;

        this.barLabel.exit().remove();


        this.barValue = this.barGroup.merge(this.barGroupEnter)
            .append('text')
            .attr('class','barValue small-label')
            .attr('dx', '0px')
            .attr('dy', '-6px')
            .style("text-anchor", "start")

        ;
    }

    redraw(dimensions,xScale,yScale,no_respondents) {

        let self = this;

   //     console.log(yScale.bandwidth());

        this.bar
            .attr("x", (d) => xScale(d[0]))
            .attr("y", function(d) {
                return yScale(d.data[self.config.yParameter])
            })
            .attr("height", yScale.bandwidth())
            .transition()
            .duration(500)
            .attr("width", function(d) {
                return xScale(d[1]) - xScale(d[0])
            });

        ;

        this.barLabel
            .text(function(d,i) {

                let text = d.data[self.config.yParameter];

                return text ;
            })
            .attr('transform', function(d) {

                let offset = (window.innerWidth > breakpoints.bax) ? -(yScale.bandwidth() * 1): 0;

                return 'translate(' + 0 + ',' +  (yScale(d.data[self.config.yParameter]) + (yScale.bandwidth() + offset)) + ')';
            })
            ;
        //
        this.barValue
            .text(function(d, i ) {

                // console.log(d);

                let label = (i === 0) ? "Afgehandeld" : "In behandeling";

                let text = label + ": " + (d[1] - d[0]);

                // if (no_respondents) {
                //     let avg = (Math.round((10 * 100) * (d[self.config.xParameter] / no_respondents)) / 10).toString() + '%';
                //     text = text + ' (' + avg + ')';
                // }

                return text ;
            })
            .attr('transform', function(d) {

                let offset = (window.innerWidth > breakpoints.bax) ? -(yScale.bandwidth() * .33) : 0;
                return 'translate(' + (xScale(d[0]) + 30) + ',' +  (yScale(d.data[self.config.yParameter]) + (yScale.bandwidth() + offset)) + ')';
            });
        //     .attr('fill-opacity', 0)
        //     .transition()
        //     .delay(500)
        //     .duration(500)
        //     .attr('fill-opacity', 1);
        //     // .attr('fill-opacity', 0)
        //     // .transition()
        //     // .delay(500)
        //     // .duration(500)
        //     // .attr('fill-opacity', 1)
    }
}



import { colours } from '../_styleguide/_colours';
import { slugify } from '../utils/slugify.utils';
import * as d3 from 'd3';

export class ChartStackedBarsNormalized {

    dataArray;
    series;
    seriesEnter;
    barGroup;
    barGroupEnter;
    barGroupMerged;
    bar;
    barEnter;
    barLabels;
    serieLabels;
    serieLabelsEnter



    constructor(
        private config,
        private svgLayers
    ){}

    draw(data,stackedData,notNormalizedData) {

        // this.defs = this.svgLayers.data.append("defs").append("clipPath")
        //     .attr("id", "clip")
        //     .append("rect");

        this.dataArray = data;

        // series corresponds to provenance - the columns in the csv table//
        this.series = this.svgLayers.data.selectAll(".stackGroup")
            .data(stackedData);

        this.series.exit().remove();

        this.seriesEnter = this.series
            .enter()
            .append("g");


        this.barGroup = this.seriesEnter.merge(this.series)
            .selectAll("g")
            .data(function(d) {
                return d;
            });

        this.barGroup.exit().remove();

        this.barGroupEnter = this.barGroup
            .enter()
            .append("g");


        // dit moet beter kunnen!
        d3.selectAll(".bar").remove();
        d3.selectAll(".barLabel").remove();

        this.bar = this.barGroup.merge(this.barGroupEnter)
            .append("rect")
            .attr("class", "bar")
            ;

        this.bar.exit().remove();

        this.barLabels = this.barGroupEnter.merge(this.barGroup)
            .append('text')
            .attr('class','barLabel small-label white')
            .attr('x', 0)
            .attr('dx', '0px')
            .attr('dy', '-6px')
            .style("text-anchor", "middle")
        ;

        this.serieLabels = this.svgLayers.axes.selectAll(".serieLabel")
            .data(stackedData);

        this.serieLabelsEnter = this.serieLabels
            .enter()
            .append('text')
            .attr('class', 'serieLabel')
            .attr('x', 0)
            .attr('dx', this.config.padding.left)
            .attr('dy', '2px')
            .style("text-anchor", "start")
            .style("font-size",".8rem")
            .attr('fill-opacity', 0)
            .transition()
            .delay(500)
            .duration(500)
            .attr('fill-opacity', 1);
    }

    redraw(dimensions,xScale,yScale,parameter) {

        let yOffset;
        let xOffset;

        let self = this;

        // this.defs
        //     .attr("width", dimensions.width)
        //     .attr("height", dimensions.height);

        let colourRange = [

            'rgb(119,124,0)', // moss
            'rgb(143,202,231)', // lightBlue
            'rgb(1,104,155)', // blue
            'rgb(169,0,97)', // violet
            'rgb(66,20,95)', // purple
            'rgb(148,113,0)', //brown
            'rgb(225,112,0)', // orange

        ]

        this.seriesEnter.merge(this.series)
            .attr("class", (d,i) => {
                return "stackGroup " + d.key;
            })
            .attr('fill', (d,i)  => colourRange[i])
            // .attr("transform", function(d,i) {
            //
            //     console.log(d);
            //
            //     return "translate(0," + (yScale(d[i].data.serie) + self.config.padding.top) + ")";
            // })



        this.bar

            .attr("height", function(d) {
                    return yScale.bandwidth();
            })
            .transition()
            .duration(500)
            .attr("x", function(d) {return xScale(d[0]); })
            .attr("y", function(d) { return yScale(d.data.serie); })
            .attr("width", function(d) {
                return xScale(d[1]) - xScale(d[0]);
            })
           ;

        this.barLabels
            .text(function(d,i,e) {

                for (let key of Object.keys(d.data)) {

                    if (this.parentNode.parentNode.classList.contains(key)) {
                        return d.data[key];
                    }
                }
            })
            .attr('transform', function(d) {

              //  yOffset = dimensions.height / (2 * dataArray.length);
             //   let start = (d[1] < self.config.extra.minValue) ? self.config.extra.minValue : d[1];
                xOffset = ((xScale(d[0]) - xScale(d[1])) / 2);

                return 'translate(' + (xScale(d[0]) - xOffset) + ',' + ((yScale(d.data.serie) + ( yScale.bandwidth() / 2)) + 11) +')';

            })
            .attr('fill-opacity', 0)
            .transition()
            .delay(500)
            .duration(500)
            .attr('fill-opacity', 1);


        this.serieLabels.merge(this.serieLabelsEnter)
            .text(function (d,i) {

                if(d[i]) {

                    let serieName = d[i].data['serie'];
                    return (serieName === 'outflow') ? 'Aantal dossiers dat afgelopen week een stap in procedure heeft gemaakt' : serieName;
                }
            })
            .attr('transform', function (d,i) {

                if(d[i] && d[i].data && i < 4) {
                    return 'translate(' + self.config.margin.left + ',' + (yScale(d[i].data['serie']) - 10  ) + ')';
                }
            })
        ;

    }

}



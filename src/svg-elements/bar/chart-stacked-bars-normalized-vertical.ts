import { colours } from '../../_styleguide/_colours';
import { slugify } from '../../utils/slugify.utils';

import { GraphData, ID3DataStackedSerie, ID3DataStackedItem, IKeyValueObject } from '../../types/data';

const colourArray = ['moss','orange','blue','purple','green','yellow','orange'];

export class ChartStackedBarsNormalizedVertical {

    dataArray;
    series;
    seriesEnter;
    barGroup;
    barGroupEnter;
    barGroupMerged;
    bar;
    barEnter;
    barLabels;
    groupLabels;
    serieLabelsEnter

    constructor(
        private ctrlr 
    ){}

    draw(data : GraphData) {

        this.series = this.ctrlr.svg.layers.data.selectAll(".stackGroup")
            .data(data.stacked)
            .join("g");

        this.barGroup = this.series
            .selectAll("g")
            .data((d: ID3DataStackedItem) => d) // descends one level
            .join("g");

        this.bar = this.barGroup
            .append("rect")
            .attr("class", "bar");

        this.barLabels = this.barGroup
            .append('text')
            .attr('class','barLabel small-label')
            .attr('x', 0)
            .attr('dx', '0px')
            .attr('dy', '-6px')
            .style("fill", "black")
            .style("text-anchor", "middle")
        ;

        this.groupLabels = this.ctrlr.svg.layers.axes.selectAll('.serieLabel')
            .data(data.grouped)
            .join('text')
            .attr('class', 'serieLabel')
            .attr('x', 0)
            .attr('dx', this.ctrlr.config.padding.left)
            .attr('dy', '2px')
            .style("text-anchor", "middle")
            .style("font-size",".8rem")
            .attr('fill-opacity', 1);
    }

    redraw() {

        let yOffset;

        let self = this;

        this.series
            .attr("class", (d: ID3DataStackedSerie, i: number) => "stackGroup " + slugify(d.key))
            .attr('stroke', (d: ID3DataStackedSerie, i: number)  => colours[colourArray[i]][0])
            .attr('fill', (d: ID3DataStackedSerie, i: number)  => colours[colourArray[i]][1])
            .attr("transform", "translate(0," + (self.ctrlr.config.padding.top) + ")");

        this.bar
            .attr("width", self.ctrlr.scales.x.scale.bandwidth())
            .attr("x", (d: ID3DataStackedItem) =>  this.ctrlr.scales.x.fn(d.data['label']))
            .attr("y", (d: ID3DataStackedItem)  => this.ctrlr.scales.y.fn(d[0]))

            .attr("height", (d: ID3DataStackedItem) => this.ctrlr.scales.y.fn(d[1]) - this.ctrlr.scales.y.fn(d[0]) - 5)
           ;

        this.barLabels
            .text((d: ID3DataStackedItem,i,e) => {

                for (let key of Object.keys(d.data)) {
                    if (e[i].parentNode.parentNode.classList.contains(slugify(key))) {
                        return d.data[key];
                    }
                }
            })
            .attr('transform', (d: ID3DataStackedItem) => {

                yOffset = ((this.ctrlr.scales.y.fn(d[0]) - this.ctrlr.scales.y.fn(d[1])) / 2);

                const x = ((this.ctrlr.scales.x.fn(d.data['label']) + ( this.ctrlr.scales.x.scale.bandwidth() / 2)));
                const y = (this.ctrlr.scales.y.fn(d[0]) - yOffset) + 11;

                return `translate(${x},${y})`;
            })
            .attr('fill-opacity', 0)
            .attr('stroke', (d: ID3DataStackedSerie, i: number)  => "transparent")
            .attr('fill', (d: ID3DataStackedSerie, i: number)  => "black")
            .transition()
            .delay(500)
            .duration(500)
            .attr('fill-opacity', 1);

        this.groupLabels
            .text( (d: IKeyValueObject,i: number) => d.label)
            .attr('transform', (d: IKeyValueObject,i: number) => 'translate(' + (self.ctrlr.scales.x.fn(d.label) + ( this.ctrlr.scales.x.scale.bandwidth() / 2 - 0)  ) + ',' + self.ctrlr.config.margin.left + ')')
        ;
    }
}
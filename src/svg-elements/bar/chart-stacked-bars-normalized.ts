import { colours } from '../../_styleguide/_colours';
import { slugify } from '../../utils/slugify.utils';
import { IGraphController } from '../../charts/graph';
import { GraphData, ID3DataStackedSerie, ID3DataStackedItem, IKeyValueObject } from '../../types/data';

const colourArray = ['moss','lightBlue','blue','purple'];

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
    groupLabels;
    serieLabelsEnter

    constructor(
        private ctrlr : IGraphController
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
            .attr('class','barLabel small-label white')
            .attr('x', 0)
            .attr('dx', '0px')
            .attr('dy', '-6px')
            .style("text-anchor", "middle")
        ;

        this.groupLabels = this.ctrlr.svg.layers.axes.selectAll('.serieLabel')
            .data(data.grouped)
            .join('text')
            .attr('class', 'serieLabel')
            .attr('x', 0)
            .attr('dx', this.ctrlr.graphObject.config.padding.left)
            .attr('dy', '2px')
            .style("text-anchor", "start")
            .style("font-size",".8rem")
            // .attr('fill-opacity', 0)
            // .transition()
            // .delay(500)
            // .duration(500)
            .attr('fill-opacity', 1);
    }

    redraw() {

        let xOffset;

        let self = this;

        this.series
            .attr("class", (d: ID3DataStackedSerie, i: number) => "stackGroup " + slugify(d.key))
            .attr('fill', (d: ID3DataStackedSerie, i: number)  => colours[colourArray[i]][0])
            .attr("transform", "translate(0," + (self.ctrlr.graphObject.config.padding.top) + ")");

        this.bar
            .attr("height", self.ctrlr.yScale.bandwidth())
            .transition()
            .duration(500)
            .attr("x", (d: ID3DataStackedItem)  => this.ctrlr.xScale(d[0]))
            .attr("y", (d: ID3DataStackedItem) =>  this.ctrlr.yScale(d.data['label']))
            .attr("width", (d: ID3DataStackedItem) => this.ctrlr.xScale(d[1]) - this.ctrlr.xScale(d[0]))
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

                xOffset = ((this.ctrlr.xScale(d[0]) - this.ctrlr.xScale(d[1])) / 2);
                return 'translate(' + (this.ctrlr.xScale(d[0]) - xOffset) + ',' + ((this.ctrlr.yScale(d.data['label']) + ( this.ctrlr.yScale.bandwidth() / 2)) + 11) +')';
            })
            .attr('fill-opacity', 0)
            .transition()
            .delay(500)
            .duration(500)
            .attr('fill-opacity', 1);

        this.groupLabels
            .text( (d: IKeyValueObject,i: number) => (d.label === 'outflow') ? 'Aantal dossiers dat afgelopen week een stap in procedure heeft gemaakt' : d.label)
            .attr('transform', (d: IKeyValueObject,i: number) => 'translate(' + self.ctrlr.graphObject.config.margin.left + ',' + (self.ctrlr.yScale(d.label) - 10  ) + ')')
        ;
    }
}
import { colours } from '@local/styleguide';
import * as d3 from 'd3';


export default class ChartStackedArea {

    prevArea : any = false;
    series;
    seriesEnter;
    areas;
    areasEnter;



    constructor(
        private ctrlr
    ){}


    draw(data: any) {

        this.series = this.ctrlr.svg.layers.data.selectAll(".stackedGroup")
            .data(data)
            .join("g")
            .attr("class", "stackedGroup");

        this.areas = this.series.selectAll(".flow")
            .data(data)
            .join("path")
            .attr('class', 'flow');
    }

    redraw() {

        let self = this;

        let newArea = d3.area()
            .x((d : any)  => self.ctrlr.scales.x.scale(new Date(d.data._date)))
            .y0(d => self.ctrlr.scales.y.scale(d[0]))
            .y1(d => self.ctrlr.scales.y.scale(d[0]))
            .curve(d3.curveCardinal);

        let area = d3.area()
            .x(function(d : any ) { return self.ctrlr.scales.x.scale(new Date(d.data._date)); })
            .y0(d => self.ctrlr.scales.y.scale(d[0]))
            .y1(d => self.ctrlr.scales.y.scale(d[1]))
            .curve(d3.curveCardinal);

        this.prevArea = area;

        // new areas
        this.areas
            .attr('d', newArea)
            .transition()
            .delay(200)
            .duration(200)
            .attr('d', area)
            .style('fill', (d) => {
                return colours[this.ctrlr.mapping.parameters[0].find( (map) => { return map.column === d.key})['colour']][1];
            })
            .style('stroke', (d) => {
                return colours[this.ctrlr.mapping.parameters[0].find( (map) => { return map.column === d.key})['colour']][0];
            })
            ;
    }
}

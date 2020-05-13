import * as d3 from "d3";
import { colours } from '../_styleguide/_colours.js';

export class ChartPie {

    constructor(
        private config,
        private svg,
        private dimensions
    ){}

    // let popup = function popup(d) {
    //
    //     return moment(d[config.xParameter]).subtract(1, 'week').format('D/MM') + ' - '
    //         + moment(d[config.xParameter]).format('D/MM') + '<br/>'
    //         + d['nieuwe_schademeldingen'] + ' Nieuwe schademeldingen' + '<br/>'
    //         + d['nieuwe_afgehandeld'] + ' Deze week afgehandeld';
    // }

    draw(data) {

        let pie = d3.pie()
            .sort(null)
            .value(function(d) { return d['value']; });

        this.svg.arcs = this.svg.layers.data.selectAll(".arc")
            .data(pie(data), function(d){ return d.data.label; });

        this.svg.arcs.exit().remove();

        this.svg.arcsEnter = this.svg.arcs
            .enter()
            .append("path")
            .attr("class", "arc")
            .attr("fill", function(d, i) { return colours[d.data.colour][0] });

    }

    redraw(dimensions) {

        let radius, arc, labelArc, innerRadius;


        if(window.innerWidth < 480) {

            radius = 66;
            innerRadius = 20;

            this.svg.layers.data
                .attr("transform", "translate(" + radius + ",66)");

            labelArc = d3.arc()
                .outerRadius(radius - 0)
                .innerRadius(radius - 0);

            arc = d3.arc()
                .outerRadius(radius - 0)
                .innerRadius(innerRadius);

        } else {

            innerRadius = (this.config.innerRadius !== undefined) ? this.config.innerRadius : 30;

            this.svg.layers.data
                .attr("transform", "translate(" + (dimensions.svgWidth / 3)+ "," + (dimensions.svgHeight / 2) + ")");

            radius = dimensions.svgWidth / 3;

            if(radius > (this.config.maxHeight / 2)) {
                radius = this.config.maxHeight / 2;
            }

            labelArc = d3.arc()
                .outerRadius(radius - 40)
                .innerRadius(radius - 40);

            arc = d3.arc()
                .outerRadius(radius - 10)
                .innerRadius(innerRadius);
        }

        function arcTween(a) {

            var i = d3.interpolate(this._current, a);
            this._current = i(0);
            return function(t) {
                return arc(i(t));
            };
        }

        this.svg.arcsEnter.merge(this.svg.arcs)
            .transition()
            .duration(500)
            .attrTween("d", arcTween);

        // svg.arcGroup
        //     .merge(svg.arcGroupEnter);
        //
        // svg.arcPath = svg.arcGroupEnter
        //     .append("path")
        //     .attr("class","arc")
        //     .style("fill", function(d,i) { return config.colours(i); })
        //     .attr("d", arc);

        this.svg.arcsEnter.merge(this.svg.arcs).select('.arc')
            .attr("d", arc)
            .each(function(d) { this._current = d; });
    }
}

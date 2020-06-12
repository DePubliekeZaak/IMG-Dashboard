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
            .style("fill", function(d, i) { return colours[d.data.colour][0] })
            .style("stroke", "#fff")
            .style("stroke-width", "2px");
    }

    redraw(dimensions) {

        let radius, arc, labelArc, innerRadius;


        if(window.innerWidth < 700) {

            radius = 90;
            innerRadius = 20;

            this.svg.layers.data
                .attr("transform", "translate(" + (dimensions.width / 2) + "," + 100 + ")");

            labelArc = d3.arc()
                .outerRadius(radius - 0)
                .innerRadius(radius - 0);

            arc = d3.arc()
                .outerRadius(radius - 0)
                .innerRadius(innerRadius);

        } else {

            innerRadius = (this.config.extra.innerRadius !== undefined) ? this.config.extra.innerRadius : 30;

            let offset = ( this.config.extra.maxRadius / 2)  + (this.dimensions.width - this.config.extra.maxRadius) / 2;

            this.svg.layers.data
                .attr("transform", "translate(" + offset + "," + ((this.config.extra.maxRadius) + 20) + ")");

            radius = dimensions.svgWidth / 3;

            if(radius > (this.config.extra.maxRadius)) {
                radius = this.config.extra.maxRadius;
            }

            labelArc = d3.arc()
                .outerRadius(this.config.extra.maxRadius)
                .innerRadius(this.config.extra.maxRadius);

            arc = d3.arc()
                .outerRadius(this.config.extra.maxRadius)
                .innerRadius(this.config.extra.innerRadius);
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

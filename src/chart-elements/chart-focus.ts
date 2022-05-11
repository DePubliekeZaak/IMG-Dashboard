import { displayDate } from '../helpers/_helpers';
import * as d3 from 'd3';
import {Config} from "../types/graphConfig";
import {Dimensions} from "../types/dimensions";

export class ChartFocus {

    sensePad;
    xLine;
    popup;
    data;

    constructor(
        private config : Config,
        private svgLayers : any,
        private element: HTMLElement
    ){

        const div = document.createElement('div')
        div.classList.add("focus-tooltip");
        this.element.append(div);
    }

    draw() {

        this.sensePad = this.svgLayers.data.append('rect')
            .style("fill", "none")
            .style("pointer-events", "all")

        this.xLine = this.svgLayers.underData
            .append('g')
            .append('rect')
            .style("fill", "#fff")
            // .attr("stroke", "none")
            // .style("stroke-width", 2)
            .style("opacity", 0);

        this.popup = d3.select(this.element).select( ' .focus-tooltip')
            .style("opacity", 0)
            .attr("text-anchor", "left");
    }

    redraw(xScale : any, yScale : any, dimensions : Dimensions, data : any, dataMapping) {

        const self = this;
        const bisect = d3.bisector((d : any) => new Date(d['_date'])).left;

        function popup(d) {

            let html = '<div class="datum"><b>' + displayDate(d._date) + '</b></div>';

            for (let prop of dataMapping) {

                switch (prop.column) {

                    case 'maandcijfer':

                        const gem = Math.round(d.maandcijfer * 10) / 10;
                        html = html + '<div class="">' + prop.short + ': ' + gem + '</div>'
                        break;

                    case 'waardedaling_maandcijfer': {

                        const wd = (d.waardedaling_maandcijfer > 0) ? d.waardedaling_maandcijfer : `nvt`;
                        html = html + '<div class="">' + prop.short + ': ' + wd + '</div>';
                        break;
                    }

                    case 'fysieke_schade_maandcijfer': {

                        html = html + '<div class="">' + prop.short + ': ' + d.fysieke_schade_maandcijfer + '</div>';
                        break;
                    }

                    default:

                        html = html + '<div class="">' + prop.short + ': ' + d[prop.column] + '</div>';
                }
            }

            return  html;

        }

        // What happens when the mouse move -> show the annotations at the right positions.
        function mouseover() {
            self.xLine.style("opacity", 1)
            self.popup.style("opacity", 1)
        }

        function mousemove() {

            var x0 = xScale.invert(d3.mouse(this)[0]);
            var i = bisect(data, x0, 1);
            const selectedData = data[i];
            const prevData = (i > 0) ? data[i - 1] : data[0];

            self.xLine
                .attr("x", xScale(new Date(prevData['_date'])))
                .attr("width", xScale(new Date(selectedData['_date'])) - xScale(new Date(prevData['_date'])))
                .attr("y", 0)
                .attr("height", dimensions.height);

            self.popup
                .html( popup(selectedData))
                .style("left", xScale(new Date(selectedData['_date'])) - 120 + 'px' )
                .style("bottom", self.config.margin.bottom + 30 + 'px');
        }

        function mouseout() {
            self.xLine.style("opacity", 0)
            self.popup.style("opacity", 0)
        }

        this.sensePad
            .attr('width', dimensions.width)
            .attr('height', dimensions.height)
            .on('mouseover', mouseover)
            .on('mousemove', mousemove)
            .on('mouseout', mouseout);
    }
}

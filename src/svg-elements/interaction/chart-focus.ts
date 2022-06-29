import { convertToCurrency, displayDate } from '../../d3-services/_helpers';
import * as d3 from 'd3';
import { pointer as d3Pointer } from 'd3-selection';

import { GraphData } from '../../types/data';

export class ChartFocus {

    sensePad;
    xLine;
    popup;
    data;

    constructor(
        private ctrlr : any
    ){

        const div = document.createElement('div')
        div.classList.add("focus-tooltip");
        div.style.border = "1px solid #565656"
        this.ctrlr.element.append(div);
    }

    draw() {

        this.sensePad = this.ctrlr.svg.layers.data.append('rect')
            .style("fill", "none")
            .style("pointer-events", "all")

        this.xLine = this.ctrlr.svg.layers.underData
            .append('g')
            .append('rect')
            .style("fill", "#eee")
            .style("stroke-dasharray", "2 4")
            // .style("stroke-width", 2)
            .style("opacity", 0);

        this.popup = d3.select(this.ctrlr.element).select( ' .focus-tooltip')
            .style("opacity", 0)
            .attr("text-anchor", "left");
    }

    redraw(data : GraphData) {

        const self = this;
        const bisect = d3.bisector((d : any) => {
                return new Date(d[self.ctrlr.xParameter]);
        }).left;

        function popup(d) {

            let date: string;

            if (self.ctrlr.graphObject.config.xScaleType == 'time' ) {

                date = displayDate(d[self.ctrlr.xParameter])

            } else {

                let o = data.slice.find ( (w) => w[self.ctrlr.xParameter] == d[self.ctrlr.xParameter]);

                date = 'week ' + o._week + '  ' + o._year;
            }
 


            let html = '<div class="datum"><b>' + date + '</b></div>';

            for (let prop of self.ctrlr.graphObject.mapping[0]) {

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

                    case 'fysieke_schade_week_percentage_toegewezen_besluiten': {

                        html = html + '<div class="">' + prop.short + ': ' + d[prop.column] + '%</div>';
                        break;
                    }

                    case 'fysieke_schade_gemiddeld_schadebedrag': {

                        html = html + '<div class="">' + prop.short + ': ' + convertToCurrency(d[prop.column]) + '</div>';
                        break;
                    }

                    default:

                        html = html + '<div class="">' + prop.short + ': ' + d[prop.column] + '</div>';
                }
            }

            if(self.ctrlr.graphObject.mapping[1]) {

                for (let prop of self.ctrlr.graphObject.mapping[1]) {

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

        function mousemove(event) {

            var x0 = self.ctrlr.xScale.invert(d3Pointer(event)[0]);
            // It was not working because d3's bisector function only works on data thats been sorted in ASCENDING order.
            var i = data.slice.length - d3.bisect(data.slice.map( (d) => new Date(d[self.ctrlr.xParameter])).sort( (a:any,b: any) => { return a - b}), x0);
            const selectedData = data.slice[i];
            const prevData = (i > 0) ? data.slice[i - 1] : data.slice[0];

            self.xLine
                .attr("x", 1 + self.ctrlr.xScale(new Date(selectedData[self.ctrlr.xParameter])))
                .attr("width", () => {

                    if (self.ctrlr.graphObject.config.xScaleType == 'time' ) {
                   
                       return  self.ctrlr.xScale(new Date(prevData[self.ctrlr.xParameter])) - self.ctrlr.xScale(new Date(selectedData[self.ctrlr.xParameter]))

                    } else {

                     //   return 1;
                        return  self.ctrlr.xScale(selectedData[self.ctrlr.xParameter]) - self.ctrlr.xScale(prevData[self.ctrlr.xParameter]) - 2

                    }
                    
                })
                .attr("y", 0)
                .attr("height", self.ctrlr.dimensions.height);

            self.popup
                .html( popup(selectedData))
                .style("left", self.ctrlr.xScale(new Date(selectedData[self.ctrlr.xParameter])) - 120 + 'px' )
                .style("bottom", self.ctrlr.graphObject.config.margin.bottom + 30 + 'px');
        }

        function mouseout() {
            self.xLine.style("opacity", 0)
            self.popup.style("opacity", 0)
        }

        this.sensePad
            .attr('width', this.ctrlr.dimensions.width)
            .attr('height', this.ctrlr.dimensions.height)
            .on('mouseover', mouseover)
            .on('mousemove', mousemove)
            .on('mouseout', mouseout);
    }
}

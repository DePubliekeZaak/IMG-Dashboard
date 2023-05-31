import { convertToCurrency, displayDate } from '@local/d3-services';
import * as d3 from 'd3';
import { pointer as d3Pointer } from 'd3-selection';

import { GraphData } from '@local/d3_types';

export default class ChartFocus {

    sensePad;
    xLine;
    popup;
    data;

    constructor(
        public ctrlr : any
    ){ }

    draw() {

        const div = document.createElement('div')
        div.classList.add("focus-tooltip");
        div.style.border = "1px solid #565656";
        div.style.width = "120px";
        this.ctrlr.element.append(div);

        this.sensePad = this.ctrlr.svg.layers.data.append('rect')
            .style("fill", "none")
            .style("pointer-events", "all")

        this.xLine = this.ctrlr.svg.layers.underData
            .append('g')
            .append('rect')
            .style("fill", "#eee")
            .style("stroke-dasharray", "2 4")
            .style("opacity", 0);

        this.popup = d3.select(this.ctrlr.element).select(' .focus-tooltip')
            .style("opacity", 0)
            .attr("text-anchor", "left");
    }

    bisect(data,x0) {

        let self = this;

        return data.slice.length - 1 - d3.bisect(data.slice.map( (d) => d[self.ctrlr.parameters.x]).sort( (a:any,b: any) => { return a - b}), x0);
    } 

    redraw(data : GraphData) {

        const self = this;
    
        // What happens when the mouse move -> show the annotations at the right positions.
        function mouseover() {

            self.xLine.style("opacity", 1)
            self.popup.style("opacity", 1)
        }

        function mousemove(event) {

            var x0 = self.ctrlr.scales.x.scale.invert(d3Pointer(event)[0]);
            // It was not working because d3's bisector function only works on data thats been sorted in ASCENDING order.
            var i = self.bisect(data,x0)
        
            const selectedData = data.slice[i];
            const prevData = (i > 0) ? data.slice[i - 1] : data.slice[0];

            self.xLine
                .attr("x", self.ctrlr.scales.x.scale(new Date(selectedData[self.ctrlr.parameters.x])))
                .attr("width", () => {

                    if (self.ctrlr.config.scales.find( s => s.slug == 'x').type == 'time' ) {
                   
                       return  self.ctrlr.scales.x.scale(new Date(prevData[self.ctrlr.parameters.x])) - self.ctrlr.scales.x.scale(new Date(selectedData[self.ctrlr.parameters.x])) 

                    } else {

                     //   return 1;
                        return  self.ctrlr.scales.x.scale(selectedData[self.ctrlr.parameters.x]) - self.ctrlr.scales.x.scale(prevData[self.ctrlr.parameters.x]) - 4

                    }
                    
                })
                .attr("y", 0)
                .attr("height", self.ctrlr.dimensions.height);

            self.popup
                .html( self.html(selectedData,data))
                .style("left", self.ctrlr.scales.x.scale(new Date(selectedData[self.ctrlr.parameters.x])) - 120 + 'px' )
                .style("bottom", self.ctrlr.config.margin.bottom + 30 + 'px');
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

    html(d,data) {

        let self = this;
        let date: string;

        if (self.ctrlr.config.scales.find( s => s.slug == 'x').type == 'time' ) {

            date = displayDate(d[self.ctrlr.parameters.x])

        } else {

            let o = data.slice.find ( (w) => w[self.ctrlr.parameters.x] == d[self.ctrlr.parameters.x]);

            date = 'week ' + o._week + '  ' + o._year;
        }

        let html = '<div class="datum"><b>' + date + '</b></div>';

        for (let prop of self.ctrlr.mapping.parameters[0]) {

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

        if(self.ctrlr.mapping.parameters[1]) {

            for (let prop of self.ctrlr.mapping.parameters[1]) {

                html = html + '<div class="">' + prop.short + ': ' + d[prop.column] + '</div>';
            }

        }

        return  html;

        
    }
}

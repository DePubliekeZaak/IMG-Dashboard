import { localTime } from '../d3-services/_formats';
import * as d3 from "d3";
import {getMonth, getMonthFromNumber} from "../utils/date-object.utils";
import { convertToCurrency } from '../d3-services/_helpers';
import { Dimensions } from '../types/dimensions';
import { DataPart, GraphData } from '../types/data';

export class ChartAxesV2 {

    axis;
    axisGroup;

    constructor(
        private ctrlr,
        private config
    ) {
        this.draw();
    }

    draw () {

        this.axisGroup = this.ctrlr.svg.layers.axes.append("g");

        switch (this.config.position) {

            case 'bottom' :
            case 'belowBottom':

                this.axisGroup
                    .attr('class', 'x-axis');

                this.axis = d3.axisBottom(this.ctrlr.scales[this.config.scale]);

                break;

            case 'center' :

                this.axisGroup
                    .attr('class', 'x-axis');

                this.axis = d3.axisBottom(this.ctrlr.scales[this.config.scale]);

                break;

            case 'top' :

                this.axisGroup
                    .attr('class', 'x-axis');

                this.axis =  d3.axisTop(this.ctrlr.scales[this.config.scale]);

                break;

            case 'left' :

                this.axisGroup
                    .attr('class', 'y-axis');

                this.axis = d3.axisLeft(this.ctrlr.scales[this.config.scale]);

                break;

            case 'right' :

                this.axisGroup
                    .attr('class', 'y-axis');

                this.axis = d3.axisRight(this.ctrlr.scales[this.config.scale]);

                break;

            default :

                return false;
        }
    }

    redraw(dimensions: Dimensions, scale: any, data: DataPart[]) {

           switch (this.ctrlr.scales[this.config.scale].config.type) {

               case 'band' :

                   this.axis
                       .tickFormat( (d,i) => {
                          return (this.ctrlr.config.extra.axisInMonths) ? getMonthFromNumber(d) : d;
                       })
                   break;

               case 'linear' :

                    if (this.config.format === "percentage") {

                        this.axis
                        .ticks(5)
                        .tickFormat( d => d + "%")

                    } else if (this.config.format === "currency") {

                        this.axis
                        .ticks(4)
                        .tickFormat( d => convertToCurrency(d))

                    } else if (this.config.format === 'weekLabels' && this.config.position === 'belowBottom') {

                        let starts = data.filter( (w) => [1].indexOf(w._week) > -1 ).map( (w) => w['_index']);

                        this.axis
                            .tickValues(starts)
                            .tickFormat( (d, i) => {
                                let week = data.find( (w) => w['_index'] == d);
                                return /* 'w' + week['_week'] + ' ' +  */ week['_year']
                            });
                        break;

                    } else if (this.config.format === 'weekLabels') {

                        let starts = data.filter( (w) => [1].indexOf(w._week) > -1 ).map( (w) => w['_index']);

                        this.axis
                            .tickValues(data.map( d => d['_index']))
                            .tickFormat( (d, i) => {
                                let week = data.find( (w) => w['_index'] == d);
                                return  'w' + week['_week']; // + ' ' +   week['_year']
                            });
                        break;

                    } else {

                        this.axis
                            .ticks(4);
                    }

                   break;


               case 'time' :

                   let tickOrder, tickSpread;

                //    if(this.ctrlr.config.extra.xScaleTicks === 'quarterly') {

                       tickOrder = 'timeMonth';
                       tickSpread = 3

                //    } else {

                //        tickOrder = this.ctrlr.config.extra.xScaleTicks;
                //        tickSpread = (window.innerWidth > 700) ? 1 : 3;
                //    }

                   this.axis
                       .ticks(d3[tickOrder].every(tickSpread))
                       .tickFormat( date => (d3.timeYear(date) < date) ? localTime.format('%b')(date) : localTime.format('%Y')(date));

                   break;

               case 'bandTime' :

                   this.axis
                       .ticks(d3[this.ctrlr.config.extra.xScaleTicks].every(1))
                       .tickFormat( date => localTime.format('%d %b')(new Date(date)));
                   break;

               case 'stacked' :

                   this.axis
                       .ticks(10, "%");
                   break;

               case 'stackedNormalized' :

                   this.axis
                       .ticks(10, "%");
                   break;

               default :
           }

            switch (this.config.position) {

                case 'bottom' :

                    this.axisGroup
                        .attr("transform", "translate(" + 0 + "," + (dimensions.height) + ")")
                    break;

                case 'belowBottom' :

                    this.axisGroup
                        .attr("transform", "translate(" + 0 + "," + (dimensions.height + 0) + ")")
                    break;

                case 'top' :

                    this.axisGroup
                        .attr("transform", "translate(" + 0 + "," + 0 + ")");
                    break;

                case 'left' :

                    this.axisGroup
                        .attr("transform", "translate(" + 0 + "," + 0 + ")");
                    break;


                case 'right' :

                    this.axisGroup
                        .attr("transform", "translate(" + (dimensions.width + this.ctrlr.config.padding.right) + "," + 0 + ")");
                    break;

                default :
            }

            this.axisGroup
                .transition()
                .duration(1000)
                .call(this.axis.scale(scale));

            if(this.ctrlr.mapping.args && this.ctrlr.mapping.args[0] === "alternateTicks") {

                this.ctrlr.svg.layers.axes.selectAll("g.x-axis g.tick text")
                    .attr("dy", (d,i) => {
                        return (i % 2 == 0 ) ? 16 : 32
                    } );
            }

            if(this.config.format === 'weekLabels') {

                const offset = (this.ctrlr.dimensions.width / data.length) / 2;

                this.ctrlr.svg.layers.axes.selectAll("g.x-axis g.tick text")
                    .attr("dx", offset);

                this.ctrlr.svg.layers.axes.selectAll("g.x-axis g.tick line")
                    .attr("x1", offset)
                    .attr("x2", offset)
                ;
            }
    }
}


import { localTime } from '../d3-services/_formats';
import * as d3 from "d3";
import {getMonth, getMonthFromNumber} from "../utils/date-object.utils";
import { convertToCurrency } from '../d3-services/_helpers';

export default class ChartAxes {

    axis;
    axisGroup;


    constructor(
        private config,
        private svg,
        private position,
        private scale,
    ) {

        this.draw();
    }

    draw () {

        this.axisGroup = this.svg.layers.axes.append("g");

        switch (this.position) {

            case 'bottom' :
            case 'belowBottom':

                this.axisGroup
                    .attr('class', 'x-axis');

                this.axis = d3.axisBottom(this.scale);

                break;

            case 'center' :

                this.axisGroup
                    .attr('class', 'x-axis');

                this.axis = d3.axisBottom(this.scale);

                break;

            case 'top' :

                this.axisGroup
                    .attr('class', 'x-axis');

                this.axis =  d3.axisTop(this.scale);

                break;

            case 'left' :

                this.axisGroup
                    .attr('class', 'y-axis');

                this.axis = d3.axisLeft(this.scale);

                break;


            case 'right' :

                this.axisGroup
                    .attr('class', 'y-axis');

                this.axis = d3.axisRight(this.scale);

                break;

            default :

                return false;
        }
    }

    redraw(type, dimensions, scale, data) {

        
 
           switch (type) {


               case 'band' :

                   this.axis
                       .tickFormat( (d,i) => {
                           // return (window.innerWidth < 640) ? (i + 1) : d;
                 
                          return (this.config.extra.axisInMonths) ? getMonthFromNumber(d) : d;
                       })


                   break;


               case 'linear' :

               

                    if (this.config.extra.percentage) {

                        this.axis
                        .ticks(5)
                        .tickFormat( d => d + "%")

                    } else if (this.config.extra.currencyLabels) {

                        this.axis
                        .ticks(4)
                        .tickFormat( d => convertToCurrency(d))

                    } else if (this.config == 'yearly') {

                        let starts = data.filter( (w) => [1].indexOf(w._week) > -1 ).map( (w) => w._index);

                       this.axis
                            .tickValues(starts)
                            .tickFormat( (d, i) => {
                                let week = data.find( (w) => w._index == d);
                                return /* 'w' + week['_week'] + ' ' +  */ week['_year']

                            });

                        break;

                    } else {

                        this.axis
                            .ticks(4);

                    }

                   break;


               case 'time' :

                   let tickOrder, tickSpread;

                   if(this.config.extra.xScaleTicks === 'quarterly') {

                       tickOrder = 'timeMonth';
                       tickSpread = 3

                   } else {

                       tickOrder = this.config.extra.xScaleTicks;
                       tickSpread = (window.innerWidth > 700) ? 1 : 3;
                   }



                   this.axis
                       .ticks(d3[tickOrder].every(tickSpread))
                       .tickFormat( date => (d3.timeYear(date) < date) ? localTime.format('%b')(date) : localTime.format('%Y')(date));

                   break;

               case 'bandTime' :

                   this.axis
                       .ticks(d3[this.config.extra.xScaleTicks].every(1))
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

            switch (this.position) {

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
                        .attr("transform", "translate(" + (dimensions.width + this.config.padding.right) + "," + 0 + ")");


                    break;

                default :


            }

            this.axisGroup
                .transition()
                .duration(1000)
                .call(this.axis.scale(scale));

            if(this.config.extra.alternateTicks && this.position === 'bottom') {

                this.svg.layers.axes.selectAll("g.x-axis g.tick text")
                    .attr("dy", (d,i) => {

                        return (i % 2 == 0 ) ? 16 : 32
                    } );
            }
    }

}


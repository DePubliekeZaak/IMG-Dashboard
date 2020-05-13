import { localTime } from '../helpers/_formats';
import * as d3 from "d3";

export class ChartAxes {

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

    redraw(type, dimensions, scale) {

           switch (type) {


               case 'band' :

                   this.axis
                       .tickFormat( (d,i) => {
                           return (window.innerWidth < 640) ? (i + 1) : d;
                       });

                   break;


               case 'linear' :

                   this.axis
                       .ticks(4);

                   break;


               case 'time' :

                   this.axis
                       .ticks(d3[this.config.xScaleTicks].every(1))
                       .tickFormat( date => (d3.timeYear(date) < date) ? localTime.format('%b')(date) : localTime.format('%Y')(date));

                   break;

               case 'bandTime' :

                   this.axis
                       .ticks(d3[this.config.xScaleTicks].every(1))
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
                        .attr("transform", "translate(" + 0 + "," + dimensions.width + ")");


                    break;

                default :


            }

            this.axisGroup
                .transition()
                .duration(1000)
                .call(this.axis.scale(scale));
    }

}


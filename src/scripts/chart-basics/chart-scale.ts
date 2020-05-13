import * as d3 from 'd3';

export class ChartScale {


    dataLength;

    constructor(

        private type,
        private config,
        private dimensions

    ) {

        this.dataLength = 0;
    }

    set(data, minValue) {

        this.dataLength = data.length;

        switch(this.type) {

            case 'linear':

                return d3.scaleLinear()
                    .domain([
                        minValue || 0,  //
                        d3.max(data, (v) => (v ? v : 0) as number)
                    ]);
                break;

            case 'time':

                return d3.scaleTime()
                    .domain([
                        d3.min(data, (d : any) => ( new Date(d) ? new Date(d) : 0) as Date), //
                        d3.max(data, (d : any) => ( new Date(d) ? new Date(d) : 0) as Date),
                    ]);
                break;

            case 'band':

                return d3.scaleBand()
                // what is domain when working with a stack?
                    .domain(data)
                    .paddingInner(this.config.paddingInner)
                    .paddingOuter(this.config.paddingOuter)
                    .align(0.5)

                break;


            case 'bandTime':

                console.log('bandTime');

                return d3.scaleBand()
                    .domain(data)
                    .paddingInner(.2)
                    .paddingOuter(.5)
                    .align(.5)

                break;

            case 'radius':

                return d3.scalePow()
                    .domain([
                        d3.min(data, (v) => (v ? v : 0) as number),  //
                        d3.max(data, (v) => (v ? v : 0) as number)
                    ]).nice();

                break;


        }

    }


    reset(direction,dimensions,newScale) {

        switch(direction) {


            case 'horizontal':

                return newScale
                    .range([0, dimensions.width]);

                break;

            case 'vertical-reverse':

                return newScale
                    .range([0,dimensions.height]);

                break;

            case 'vertical':

                return newScale
                    .range([dimensions.height, 0]);

                break;

            case 'radius' :

                return newScale
                    .range([this.config.minRadius, (dimensions.width / this.dataLength) * this.config.radiusFactor]);

                break;

            case 'opacity' :

                return newScale
                    .range([0.3,1]);

        }
    }
}
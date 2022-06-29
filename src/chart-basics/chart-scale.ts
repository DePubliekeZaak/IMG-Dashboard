import * as d3 from 'd3';
import {Dimensions} from "../types/dimensions";
import {GraphConfig} from "../types/graphConfig";

export class ChartScale {

    dataLength;
    scale;

    constructor(

        private type : string | boolean,
        private config : GraphConfig ,
        private dimensions : Dimensions

    ) {
        this.dataLength = 0;
    }

    set(data, minValue) {

        if(!this.type) return;

        let self = this;

        this.dataLength = data.length;

        switch(this.type) {

            case 'linear':

                this.scale = d3.scaleLinear()
                    .domain([
                        minValue || 0,  //
                        d3.max(data, (v) => (v ? v : 0) as number)
                    ]);
                break;

            case 'time':

                this.scale = d3.scaleTime()
                    .domain([
                        d3.min(data, (d : any) => ( new Date(d) ? new Date(d) : 0) as Date), //
                        d3.max(data, (d : any) => ( new Date(d) ? new Date(d) : 0) as Date),
                    ]);
                break;

            case 'band':

                this.scale = d3.scaleBand()
                    .domain(data)
                    .paddingInner(self.config.extra.paddingInner)
                    .paddingOuter(self.config.extra.paddingOuter)
                    .align(.5);

                break;


            case 'bandTime':

                this.scale = d3.scaleBand()
                    .domain(data)
                    .paddingInner(.2)
                    .paddingOuter(.5)
                    .align(.5)

                break;

            case 'radius':

                this.scale = d3.scalePow()
                    .domain([
                        d3.min(data, (v) => (v ? v : 0) as number),  //
                        d3.max(data, (v) => (v ? v : 0) as number)
                    ]).nice();

                break;

            case 'normalised':

                this.scale = d3.scaleLinear();

                break;
        }

        return this.scale;
    }


    reset(direction,dimensions,newScale) {

        if (!this.type) return;

        switch(direction) {

            case 'horizontal':

                this.scale
                    .range([0, dimensions.width]);

                break;

            case 'vertical-reverse':

                this.scale
                    .range([0,dimensions.height]);

                break;

            case 'vertical':
                this.scale
                    .range([dimensions.height, 0]);

                break;

            case 'radius':

                let langsteZijde = dimensions.width > dimensions.height ? dimensions.width : dimensions.height;

                this.scale
                    .range([this.config.extra.minRadius, (langsteZijde / this.dataLength) * this.config.extra.radiusFactor]);

                break;

            case 'opacity':

                this.scale
                    .range([0.3,1]);

                break;

            case 'flow':

                this.scale
                    .range([70,-70]);

            

        }

        return this.scale;
    }
}

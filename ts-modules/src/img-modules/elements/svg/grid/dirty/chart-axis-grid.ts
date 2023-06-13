import * as d3 from 'd3';
import {colours} from '@local/styleguide';

export class ChartAxisGrid {

    xGrid;
    yGrid;

    constructor(
        private config,
        private dataMapping,
        private svg

    ) {}

    make_x_gridlines(scale,ticksNo) {
        return d3.axisBottom(scale)
            .ticks(ticksNo)
            .tickFormat((d:any) => "");
    }

    make_y_gridlines(scale,ticksNo) {
        return d3.axisLeft(scale)
            .ticks(ticksNo)
            .tickFormat((d:any) => "");
    }

    clear() {

        this.svg.layers.underData.selectAll("g").remove();
    }

    draw() {

        this.xGrid = this.svg.layers.underData.append("g")
            .attr("class", "grid x-grid")
            .attr("fill","transparent")
            .attr("stroke",colours.lightGrey);

        this.yGrid = this.svg.layers.underData.append("g")
            .attr("class", "grid y-grid")
            .attr("fill","transparent")
            .attr("stroke",colours.lightGrey);
    }

    redraw(dimensions,xScale,yScale,direction,data) {

        let self = this;

        switch (direction) {

            case 'horizontal' :

                this.yGrid
                    .attr("transform",
                        "translate(" + 0 + "," + 0 + ")"
                    )
                    .style('opacity',1);

                this.xGrid
                    .style('opacity',0);

                break;


            case 'vertical' :

                this.yGrid
                    .style('opacity',0);

                this.svg.layers.underData.selectAll('.x-grid')
                    .attr("transform",
                        "translate(" + (0 - (xScale.bandwidth() / 2)) + "," + dimensions.height + ")"
                    )
                    .style('opacity',1);

                break;

            case 'plot' :

                this.xGrid
                    .attr("transform",
                        "translate(" + (0 - (xScale.bandwidth() / 2)) + "," + dimensions.height + ")"
                    )
                    .style('opacity',1);

                this.yGrid
                    .attr("transform",
                        "translate(" + 0 + "," + (0 - (yScale.bandwidth() / 2)) + ")"
                    )
                    .style('opacity',1);

                break;
        }

        this.xGrid
            .call(this.make_x_gridlines(xScale,data.length)
                    .tickSize(-dimensions.height)
                // .tickFormat("")
            );

        this.xGrid.selectAll(".tick line").attr("stroke", colours.lightGrey);
        this.xGrid.selectAll(".tick text").attr("fill", "black");
        this.xGrid.selectAll("path.domain").attr("opacity", 0);

        // add the Y gridlines
        this.yGrid
            .transition()
            .duration(1000)
            .call(this.make_y_gridlines(yScale,'4')
                    .tickSize(-dimensions.width)
            );

        this.yGrid.selectAll(".tick line").attr("stroke", colours.lightGrey);
        this.yGrid.selectAll("path.domain").attr("opacity", 0);
    }
}



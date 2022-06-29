export class ChartBrackets {

    constructor(

        private config,
        private svg
    ) {}

    draw(data) {

        // this.svg.totalDossiersGroup = this.svg.layers.data
        //     .append('g');

        this.svg.totalTimeGroup = this.svg.layers.data
            .append('g');

        // this.svg.totalDossiersNumber = this.svg.totalDossiersGroup
        //     .append('text')
        //     // .attr("class","small-label")
        //     .attr("class","header")
        //     .attr("text-anchor","middle")
        //     .text('In behandeling: ' + data.slice(1,data.length - 1).map( (i) => { return i.value}).reduce( (a,b) =>  a + b ) + ' dossiers')
        //     .style("font-size","1rem");

        this.svg.totalTimeLine = this.svg.totalTimeGroup
            .append('path')
            .style("stroke","black");

        this.svg.totalTimeNumber = this.svg.totalTimeGroup
            .append('text')
            // .attr("class","small-label")
            .attr("class","header")
            .attr("text-anchor","middle")
            .text('Doorlooptijd van melding tot besluit: ' + data.slice(1,data.length - 1).map( (i) => { return i.duration}).reduce( (a,b) =>  a + b ) + ' dagen')
            .style("font-size","1rem");

        // this.svg.totalDossiersLine = this.svg.totalDossiersGroup
        //     .append('path')
        //     .style("stroke","black");

    }

    redraw(data,dimensions,rScale,xScale) {

        let halfWay = xScale(data[1].duration) + ((xScale(data[data.length - 1].cumulativeDuration) - xScale(data[1].duration)) / 2); // + (dimensions.width - - xScale(data[1].duration) / 2);

        // this.svg.totalDossiersGroup
        //     .attr("transform", (d) => {
        //         return "translate(" + 0 + ",-60)"
        //     });

        this.svg.totalTimeGroup
            .attr("transform", (d) => {
                return "translate(" + 0 + "," + (dimensions.height - 80) + ")"
            });

        // this.svg.totalDossiersLine
        //     .attr("d","M" + xScale(data[1].duration) + " 20 L" + (dimensions.width - xScale(data[data.length - 1].duration) ) + " 20");

        this.svg.totalTimeLine
            .attr("d","M" + xScale(data[1].duration) + " " + 10 +  " L" + (dimensions.width - xScale(data[data.length - 1].duration) ) + " " + 10);

        this.svg.totalTimeGroup
            .append("path")
            .attr("d","M" + halfWay  + " 10 L" + halfWay + " 20")
            .style("stroke","black");

        this.svg.totalTimeGroup
            .append("path")
            .attr("d","M" + xScale(data[1].duration) + " 0 L" + xScale(data[1].duration) + " 10")
            .style("stroke","black")
        ;

        this.svg.totalTimeGroup
            .append("path")
            .attr("d","M" + (dimensions.width - xScale(data[data.length - 1].duration)) + " 0 L" + (dimensions.width - xScale(data[data.length - 1].duration)) + " 10")
            .style("stroke","black")
        ;

        this.svg.totalTimeNumber
            .attr("x", halfWay)
            .attr("y",40);


        // this.svg.totalDossiersGroup
        //     .append("path")
        //     .attr("d","M" + xScale(data[1].duration) + " 20 L" + xScale(data[1].duration) + " 30")
        //     .style("stroke","black")
        // ;
        //
        // this.svg.totalDossiersGroup
        //     .append("path")
        //     .attr("d","M" + (dimensions.width - xScale(data[data.length - 1].duration)) + " 20 L" + (dimensions.width - xScale(data[data.length - 1].duration)) + " 30")
        //     .style("stroke","black")
        // ;
        //
        //
        // this.svg.totalDossiersGroup
        //     .append("path")
        //     .attr("d","M" + halfWay  + " 10 L" + halfWay + " 20")
        //     .style("stroke","black")
        // ;
        //
        // this.svg.totalDossiersNumber
        //     .attr("x", halfWay);
    }
}
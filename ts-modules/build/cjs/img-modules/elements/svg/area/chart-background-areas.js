"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartBackgroundAreas = void 0;
const styleguide_1 = require("@local/styleguide");
const d3 = __importStar(require("d3"));
const d3_services_1 = require("@local/d3-services");
class ChartBackgroundAreas {
    constructor(ctrlr) {
        this.ctrlr = ctrlr;
    }
    draw(data) {
        console.log('area');
        this.ctrlr.svg.lineFill = this.ctrlr.svg.layers.underData.selectAll('path.line_fill.' + this.ctrlr.parameters.x)
            .data(data)
            .join("path")
            .attr("class", "line_fill " + this.ctrlr.parameters.y);
    }
    redraw(data, colour) {
        const self = this;
        let area = d3.area()
            .x(d => this.ctrlr.scales.x.scale(new Date(d[this.ctrlr.parameters.x])))
            .y0(this.ctrlr.dimensions.height)
            .y1(d => this.ctrlr.scales.y.scale(d[this.ctrlr.parameters.y]))
            .curve(d3.curveLinear);
        this.ctrlr.svg.lineFill
            .attr("d", (d, i) => {
            if (i < data.length - 1)
                return area([data[i], data[i + 1]]);
        })
            .attr("fill", () => {
            // if (this.config.extra.smartColours === 'up') {
            //     if (data[0][yParameter] > data[1][yParameter]) {
            //         return colours['moss'][1];
            //     } else {
            //         return colours['orange'][1];
            //     }
            // } else if (this.config.extra.smartColours === 'down') {
            //     if(data[0][yParameter] < data[1][yParameter]) {
            //         return colours['moss'][1];
            //     } else {
            //         return colours['orange'][1];
            //     }
            // } else {
            return styleguide_1.colours[colour][1];
            // }
        })
            .attr("stroke", "none")
            .attr("transform", function () {
            return (self.ctrlr.config.yScaleType === 'time') ? "translate(" + -(this.ctrlr.scales.x.scale(data[0][this.parameters.x]) - (this.ctrlr.dimensions.width / 2)) + ",0)" : "translate(0,0)";
        })
            .on("mouseover", function (event, d) {
            d3.select(this).attr("fill", () => {
                return styleguide_1.colours[colour][2];
            });
            let date = new Date(d[self.ctrlr.parameters.x]);
            d3.select('.tooltip')
                .html(() => {
                return 'Gerapporteerd op ' + (0, d3_services_1.displayDate)(date) + '<br/><b>'
                    + Math.round(d[self.ctrlr.parameters.y] * 10) / 10 + '</b><br/>';
            })
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY) + "px")
                // .transition()
                // .duration(250)
                .style("opacity", 1);
        })
            .on("mouseout", function (d) {
            d3.select(this).attr("fill", () => {
                return styleguide_1.colours[colour][1];
            });
            d3.select('.tooltip')
                // .transition()
                // .duration(250)
                .style("opacity", 0);
        });
        ;
        console.log('redrawn areas');
    }
}
exports.ChartBackgroundAreas = ChartBackgroundAreas;

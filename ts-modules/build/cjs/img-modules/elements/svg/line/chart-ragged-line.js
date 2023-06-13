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
exports.ChartRaggedLine = void 0;
const styleguide_1 = require("@local/styleguide");
const d3_services_1 = require("@local/d3-services");
const d3 = __importStar(require("d3"));
class ChartRaggedLine {
    constructor(ctrlr) {
        this.ctrlr = ctrlr;
    }
    draw(data) {
        if (!this.ctrlr.config.suspended) {
            this.ctrlr.svg.line = this.ctrlr.svg.layers.data.selectAll('.line')
                .data([data])
                .join("path")
                .attr("class", "line");
            this.ctrlr.svg.circles = this.ctrlr.svg.layers.data.selectAll('circle')
                .data(data)
                .join("circle");
        }
    }
    redraw(data, colour) {
        const self = this;
        let line = d3.line()
            .x(d => self.ctrlr.scales.x.scale(new Date(d[this.ctrlr.parameters.x])))
            .y(d => self.ctrlr.scales.y.scale(d[this.ctrlr.parameters.y]))
            .curve(d3.curveLinear);
        this.ctrlr.svg.line
            .transition()
            .duration(250)
            .attr("d", line)
            .attr("fill", 'transparent')
            .attr("stroke", () => {
            // if (this.ctrlr.config.extra.smartColours === 'up') {
            //     if (data[0][yParameter] > data[1][yParameter]) {
            //         return colours['moss'][0];
            //     } else {
            //         return colours['orange'][0];
            //     }
            // } else if (this.ctrlr.config.extra.smartColours === 'down') {
            //     if(data[0][yParameter] < data[1][yParameter]) {
            //         return colours['moss'][0];
            //     } else {
            //         return colours['orange'][0];
            //     }
            // } else {
            return styleguide_1.colours[colour][0];
            //  }
        })
            .attr("stroke-width", 2);
        if (this.ctrlr.svg.circles) {
            this.ctrlr.svg.circles
                .attr("cx", (d, i) => {
                return self.ctrlr.scales.x.scale(new Date(d[this.ctrlr.parameters.x]));
            })
                .attr("cy", (d) => {
                return self.ctrlr.scales.y.scale(d[this.ctrlr.parameters.y]);
            })
                .attr("r", 1)
                .attr("fill", 'white')
                .attr("stroke", () => {
                // if (this.ctrlr.config.extra.smartColours === 'up') {
                //     if (data[0][xParameter] > data[1][xParameter]) {
                //         return colours['green'][0];
                //     } else {
                //         return colours['orange'][0];
                //     }
                // } else if (this.ctrlr.config.extra.smartColours === 'down') {
                //         if(data[0][xParameter] > data[1][xParameter]) {
                //             return colours['orange'][0];
                //         } else {
                //             return colours['green'][0];
                //         }
                // } else {
                return styleguide_1.colours[colour][0];
                // }
            })
                .attr("stroke-width", 2)
                //   .transition()
                //                  .duration(250)
                .attr("r", 4);
            this.ctrlr.svg.circles
                .on("mouseover", function (event, d) {
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
                d3.select('.tooltip')
                    // .transition()
                    // .duration(250)
                    .style("opacity", 0);
            });
        }
        let av = (data.reduce((a, b) => a + parseInt(b[this.ctrlr.parameters.y]), 0)) / data.length;
    }
}
exports.ChartRaggedLine = ChartRaggedLine;

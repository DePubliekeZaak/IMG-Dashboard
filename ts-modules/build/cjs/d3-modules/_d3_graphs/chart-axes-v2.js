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
const d3_services_1 = require("@local/d3-services");
const d3 = __importStar(require("d3"));
const img_services_1 = require("@local/img-services");
const d3_services_2 = require("@local/d3-services");
const styleguide_1 = require("@local/styleguide");
class ChartAxesV2 {
    constructor(ctrlr, config) {
        this.ctrlr = ctrlr;
        this.config = config;
        this.draw();
    }
    draw() {
        this.axisGroup = this.ctrlr.svg.layers.axes.append("g");
        switch (this.config.position) {
            case 'bottom':
            case 'belowBottom':
                this.axisGroup
                    .attr('class', 'x-axis');
                this.axis = d3.axisBottom(this.ctrlr.scales[this.config.scale]);
                break;
            case 'center':
                this.axisGroup
                    .attr('class', 'x-axis');
                this.axis = d3.axisBottom(this.ctrlr.scales[this.config.scale]);
                break;
            case 'top':
                this.axisGroup
                    .attr('class', 'x-axis');
                this.axis = d3.axisTop(this.ctrlr.scales[this.config.scale]);
                break;
            case 'left':
                this.axisGroup
                    .attr('class', 'y-axis');
                this.axis = d3.axisLeft(this.ctrlr.scales[this.config.scale]);
                break;
            case 'right':
                this.axisGroup
                    .attr('class', 'y-axis');
                this.axis = d3.axisRight(this.ctrlr.scales[this.config.scale]);
                break;
            default:
                return false;
        }
    }
    redraw(dimensions, scale, data) {
        switch (this.ctrlr.scales[this.config.scale].config.type) {
            case 'band':
                this.axis
                    .tickFormat((d, i) => {
                    return (this.ctrlr.config.extra.axisInMonths) ? (0, img_services_1.getMonthFromNumber)(d) : d;
                });
                break;
            case 'linear':
                if (this.config.format === "percentage") {
                    this.axis
                        .ticks(5)
                        .tickFormat(d => d + "%");
                }
                else if (this.config.format === "currency") {
                    this.axis
                        .ticks(4)
                        .tickFormat(d => (0, d3_services_2.convertToCurrency)(d));
                    // } else if (this.config.format === 'monthly') {
                    //     let months = [];
                    //     let ticks = [];
                    //     for (let w of data) {
                    //         if (months.indexOf(w._month) < 0)  {
                    //             months.push(w._month);
                    //             ticks.push(w["_index"]);
                    //         } else {
                    //            console.log(w._date + "-" + w._month);
                    //         }
                    //     };
                    //     console.log(ticks);
                    //     this.axis
                    //         .tickValues(ticks)
                    //         .tickFormat( (d, i) => {
                    //             console.log(d);
                    //             let week = data.find( (w) => w['_index'] == d);
                    //             return week._month;
                    //         });
                    //     break;
                }
                else if (this.config.format === 'quarterly') {
                    let starts = data.filter((w) => [1, 14, , 27, 40].indexOf(w._week) > -1).map((w) => w['_index']);
                    this.axis
                        .tickValues(starts)
                        .tickFormat((d, i) => {
                        let week = data.find((w) => w['_index'] == d);
                        if (week) {
                            return /* 'w' + week['_week'] + ' ' +  */ 'w' + week['_week'] + ' - ' + week['_year'];
                        }
                    });
                    break;
                }
                else if (this.config.format === 'yearly') {
                    let starts = data.filter((w) => [1].indexOf(w._week) > -1).map((w) => w['_index']);
                    this.axis
                        .tickValues(starts)
                        .tickFormat((d, i) => {
                        let week = data.find((w) => w['_index'] == d);
                        if (week) {
                            return week['_year'];
                        }
                    });
                    break;
                }
                else if (this.config.format === 'weekly') {
                    //    let starts = data.filter( (w) => [1].indexOf(w._week) > -1 ).map( (w) => w['_index']);
                    data = data.slice(0, data.length - 2);
                    this.axis
                        .tickValues(data.filter((d, i) => i % 2).map((d) => d['_index']))
                        .tickFormat((d, i) => {
                        // if (window.innerWidth < breakpoints.sm) {
                        //     if(i % 2) {
                        //         let week = data.find( (w) => w['_index'] == d);
                        //         return  'w' + week['_week'];
                        //     }
                        // } else {
                        let week = data.find((w) => w['_index'] == d);
                        if (week) {
                            return 'w' + week['_week'];
                        }
                        // }
                    });
                    break;
                }
                else {
                    this.axis
                        .ticks(4);
                }
                break;
            case 'time':
                let tickOrder, tickSpread;
                //    if(this.ctrlr.config.extra.xScaleTicks === 'quarterly') {
                tickOrder = 'timeMonth';
                tickSpread = (window.innerWidth < styleguide_1.breakpoints.sm) ? 12 : 3;
                //    } else {
                //        tickOrder = this.ctrlr.config.extra.xScaleTicks;
                //        
                //    }
                this.axis
                    .ticks(d3[tickOrder].every(tickSpread))
                    .tickFormat(date => (d3.timeYear(date) < date) ? d3_services_1.localTime.format('%b')(date) : d3_services_1.localTime.format('%Y')(date));
                break;
            case 'bandTime':
                this.axis
                    .ticks(d3[this.ctrlr.config.extra.xScaleTicks].every(1))
                    .tickFormat(date => d3_services_1.localTime.format('%d %b')(new Date(date)));
                break;
            case 'stacked':
                this.axis
                    .ticks(10, "%");
                break;
            case 'stackedNormalized':
                this.axis
                    .ticks(10, "%");
                break;
            default:
        }
        switch (this.config.position) {
            case 'bottom':
                this.axisGroup
                    .attr("transform", "translate(" + 0 + "," + (dimensions.height) + ")");
                break;
            case 'belowBottom':
                this.axisGroup
                    .attr("transform", "translate(" + 0 + "," + (dimensions.height + 0) + ")");
                break;
            case 'top':
                this.axisGroup
                    .attr("transform", "translate(" + 0 + "," + 0 + ")");
                break;
            case 'left':
                this.axisGroup
                    .attr("transform", "translate(" + 0 + "," + 0 + ")");
                break;
            case 'right':
                this.axisGroup
                    .attr("transform", "translate(" + (dimensions.width + this.ctrlr.config.padding.right) + "," + 0 + ")");
                break;
            default:
        }
        this.axisGroup
            .transition()
            .duration(1000)
            .call(this.axis.scale(scale));
        if (this.ctrlr.mapping.args && this.ctrlr.mapping.args[0] === "alternateTicks") {
            if (window.innerWidth < styleguide_1.breakpoints.sm) {
                this.ctrlr.svg.layers.axes.selectAll("g.x-axis g.tick text")
                    .attr("text-anchor", "end")
                    .attr("transform", "translate(-10,0) rotate(-45)");
                // .attr("dy", (d,i) => {
                //     return (i % 2 == 0 ) ? 16 : 32
                // } );
            }
            else {
                this.ctrlr.svg.layers.axes.selectAll("g.x-axis g.tick text")
                    .attr("dy", (d, i) => {
                    return (i % 2 == 0) ? 16 : 32;
                });
            }
        }
        if (['weekly', 'monthly', 'quarterly', 'yearly'].indexOf(this.config.format) > -1) {
            const offset = (this.ctrlr.dimensions.width / data.length) / 2;
            this.ctrlr.svg.layers.axes.selectAll("g.x-axis g.tick text")
                .attr("dx", offset);
            this.ctrlr.svg.layers.axes.selectAll("g.x-axis g.tick line")
                .attr("x1", offset)
                .attr("x2", offset);
        }
    }
}
exports.default = ChartAxesV2;

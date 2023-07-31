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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartPieWeek = void 0;
const _colours_1 = __importDefault(require("@local/styleguide/_colours"));
const d3 = __importStar(require("d3"));
class ChartPieWeek {
    constructor(ctrlr) {
        this.ctrlr = ctrlr;
    }
    draw(data) {
        const config = this.ctrlr.config ? this.ctrlr.config : this.ctrlr.graphObject.config;
        let self = this;
        let pie = d3.pie()
            .sort(null)
            .value((d) => d['value']);
        //   console.log(data[0]);
        this.ctrlr.svg.arcs = this.ctrlr.svg.layers.data.selectAll(".arc")
            .data(pie(data), (d => d.data.label))
            .join("path")
            .attr("class", "arc")
            .attr("fill", (d) => _colours_1.default[d.data.colour][1])
            .attr("stroke", (d) => _colours_1.default[d.data.colour][0])
            .attr("stroke-width", "1px")
            .on("mouseover", function (event, d, array) {
            self.ctrlr.svg.arcs
                .attr("fill", (dd) => _colours_1.default[dd.data.colour][1]);
            d3.select(event.target)
                .attr("fill", (dd) => _colours_1.default[dd.data.colour][0]);
            d3.select('.tooltip')
                .html((dd) => {
                let value = d['value'];
                return '<b>' + d['data']['label'] + '</b><br/>' + value;
            })
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY) + "px")
                .transition()
                .duration(250)
                .style("opacity", 1);
        })
            .on("mouseout", function (event, d) {
            self.ctrlr.svg.arcs
                .attr("fill", (dd) => _colours_1.default[dd.data.colour][1]);
            d3.select('.tooltip')
                .transition()
                .duration(250)
                .style("opacity", 0);
        });
    }
    redraw(data) {
        let radius, arc, labelArc, innerRadius;
        const config = this.ctrlr.config ? this.ctrlr.config : this.ctrlr.graphObject.config;
        if (window.innerWidth < 700) {
            radius = 90;
            innerRadius = 20;
            this.ctrlr.svg.layers.data
                .attr("transform", "translate(" + (this.ctrlr.dimensions.width / 2) + "," + 100 + ")");
            labelArc = d3.arc()
                .outerRadius(radius - 0)
                .innerRadius(radius - 0);
            arc = d3.arc()
                .outerRadius(radius - 0)
                .innerRadius(innerRadius)
                .padAngle(4)
                .padRadius(4);
        }
        else {
            innerRadius = (config.extra.innerRadius !== undefined) ? config.extra.innerRadius : 30;
            let offset = (config.extra.maxRadius / 2) + (this.ctrlr.dimensions.width - config.extra.maxRadius) / 2;
            this.ctrlr.svg.layers.data
                .attr("transform", "translate(" + offset + "," + ((config.extra.maxRadius) + 20) + ")");
            radius = this.ctrlr.dimensions.svgWidth / 3;
            if (radius > (config.extra.maxRadius)) {
                radius = config.extra.maxRadius;
            }
            labelArc = d3.arc()
                .outerRadius(config.extra.maxRadius)
                .innerRadius(config.extra.maxRadius);
            arc = d3.arc()
                .outerRadius(config.extra.maxRadius)
                .innerRadius(config.extra.innerRadius)
                .padAngle(4)
                .padRadius(4);
        }
        function arcTween(a) {
            var i = d3.interpolate(this._current, a);
            this._current = i(0);
            return function (t) {
                return arc(i(t));
            };
        }
        this.ctrlr.svg.arcs
            .transition()
            .duration(500)
            .attrTween("d", arcTween);
        this.ctrlr.svg.arcs.select('.arc')
            .attr("d", arc)
            .each(function (d) { this._current = d; });
    }
}
exports.ChartPieWeek = ChartPieWeek;

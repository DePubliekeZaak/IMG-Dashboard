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
const d3 = __importStar(require("d3"));
const styleguide_1 = require("@local/styleguide");
let ChartObjects = function ChartObjects() {
    let config = function config() {
        return {
            margin: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            padding: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }
        };
    };
    let dimensions = function dimensions() {
        return {
            svgWidth: 0,
            width: 0,
            svgHeight: 0,
            height: 0, // svgHeight minus config.padding
        };
    };
    let svg = function svg() {
        let tooltip = document.createElement('span');
        tooltip.classList.add('tooltip');
        tooltip.style.display = 'block';
        tooltip.style.opacity = '0';
        tooltip.style.position = 'absolute';
        tooltip.style.zIndex = '10';
        tooltip.style.width = 'auto';
        tooltip.style.height = 'auto';
        tooltip.style.maxWidth = '220px';
        // tooltip.style.maxHeight = '180px';
        tooltip.style.padding = '.5rem';
        tooltip.style.background = 'white';
        tooltip.style.border = '1px solid ' + styleguide_1.colours.gray[0];
        tooltip.style.fontFamily = 'NotoSans Regular';
        tooltip.style.color = 'black';
        tooltip.style.pointerEvents = 'none';
        tooltip.style.fontSize = '.85rem';
        const bodyEl = document.querySelector('body');
        if (bodyEl != null) {
            return {
                body: null,
                layers: {},
                tooltip: (document.querySelector('.tooltip')) ? d3.select(".tooltip") : bodyEl.appendChild(tooltip),
                yAxis: null,
                xAxis: null
            };
        }
    };
    return {
        config: config,
        dimensions: dimensions,
        svg: svg,
    };
};
exports.default = ChartObjects;

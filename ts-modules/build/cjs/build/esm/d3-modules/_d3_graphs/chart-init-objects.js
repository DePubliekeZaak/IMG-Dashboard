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
        const bodyEl = null;
        let tooltip = null;
        if (typeof document !== 'undefined') {
            let t = document.createElement('span');
            t.classList.add('tooltip');
            t.style.display = 'block';
            t.style.opacity = '0';
            t.style.position = 'absolute';
            t.style.width = 'auto';
            t.style.height = 'auto';
            t.style.maxWidth = '220px';
            t.style.padding = '.5rem';
            t.style.background = 'white';
            t.style.border = '1px solid ' + styleguide_1.colours.gray[0];
            t.style.fontFamily = 'NotoSans Regular';
            t.style.color = 'black';
            t.style.pointerEvents = 'none';
            t.style.fontSize = '.85rem';
            tooltip = (document.querySelector('.tooltip')) ? d3.select(".tooltip") : document.querySelector('body').appendChild(t);
        }
        return {
            body: null,
            layers: {},
            tooltip,
            yAxis: null,
            xAxis: null
        };
    };
    return {
        config: config,
        dimensions: dimensions,
        svg: svg,
    };
};
exports.default = ChartObjects;

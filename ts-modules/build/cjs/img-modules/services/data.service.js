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
exports.DataService = void 0;
const d3 = __importStar(require("d3"));
const charts_1 = require("@local/charts");
class DataService {
    constructor(ctrlr) {
        this.ctrlr = ctrlr;
        this.graphMethods = {};
    }
    call(params, pageConfig, segment, update, htmlContainer) {
        const promises = this._createDashboardCalls(pageConfig, segment, false);
        Promise.all(promises).then((values) => {
            const data = this._mergeArrayObjects(values);
            for (let graphMapping of pageConfig) {
                console.log(graphMapping);
                const element = this.ctrlr.html.createGraphGroupElement(graphMapping, htmlContainer);
                this.graphMethods[graphMapping.slug] = new charts_1.graphs[graphMapping.graph](this.ctrlr, data, element, graphMapping, segment);
                this.graphMethods[graphMapping.slug].init();
            }
        });
    }
    _createDashboardCalls(pageConfig, segment, update) {
        let self = this;
        let promises = [];
        let uniqueEndpoints = [...Array.from(new Set(pageConfig.map((o) => o.endpoint)))];
        // @ts-ignore
        const domain = process.env.DOMAIN;
        // @ts-ignore
        const apibase = process.env.APIBASE;
        for (let endpoint of uniqueEndpoints) {
            if (endpoint) {
                const url = domain + apibase + endpoint;
                promises.push(new Promise((resolve, reject) => {
                    d3.json(url)
                        .then((data) => {
                        resolve(data);
                    })
                        .catch((err) => {
                        console.log('api call failed');
                        console.log(err);
                    });
                }));
            }
        }
        return promises;
    }
    _mergeArrayObjects(values) {
        return values;
    }
}
exports.DataService = DataService;

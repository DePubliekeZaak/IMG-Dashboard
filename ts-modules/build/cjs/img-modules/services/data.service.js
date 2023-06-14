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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
        return __awaiter(this, void 0, void 0, function* () {
            const promises = this._createDashboardCalls(pageConfig, segment, false);
            yield Promise.all(promises).then((values) => __awaiter(this, void 0, void 0, function* () {
                const { weekData, muniData } = this._mergeArrayObjects(values);
                const data = weekData;
                for (let graphMapping of pageConfig) {
                    const element = this.ctrlr.createGraphGroupElement(graphMapping, this.ctrlr.window, htmlContainer);
                    this.graphMethods[graphMapping.slug] = new charts_1.graphs[graphMapping.graph](this.ctrlr, data, element, graphMapping, segment);
                    yield this.graphMethods[graphMapping.slug].init();
                }
            }));
            return htmlContainer.innerHTML;
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
                const url = 'https://' + domain + apibase + endpoint + '?gemeente=eq.all';
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
    _mergeArrayObjects(arrays) {
        const eemsdelta = ['Appingedam', 'Delfzijl', 'Loppersum'];
        let weekData = [];
        let muniData = [];
        // uitzondering for Grid
        if (arrays.length > 0) {
            // hoe herken ik arrays met alle gemeentes
            const arraysWithWeeks = arrays.filter(a => a.length < 2 || a[0].gemeente === a[1].gemeente || eemsdelta.indexOf(a[0].gemeente));
            const arraysWithMunis = arrays.filter(a => a.length > 1 && a[0]._week === a[1]._week);
            // make sure data are merged into array with most weeks ..
            arraysWithWeeks.sort(function (a, b) {
                return b.length - a.length;
            });
            arraysWithWeeks[0].map((item, i) => {
                let o = {};
                if (arraysWithWeeks.length > 1) {
                    for (let i = 1; i < arraysWithWeeks.length; i++) {
                        let objectToMerge = arraysWithWeeks[i].find(object => object.gemeente === item.gemeente && object._date === item._date);
                        o = Object.assign(o, item, objectToMerge);
                    }
                }
                else {
                    o = item;
                }
                weekData.push(o);
            });
            if (arraysWithMunis && arraysWithMunis.length > 0) {
                let recentWeeksOnly = arraysWithMunis[0].filter(o => o['_week'] === arraysWithMunis[0][0]['_week']);
                if (recentWeeksOnly && recentWeeksOnly.length > 0) {
                    recentWeeksOnly.map((item, i) => {
                        let o = {};
                        if (arraysWithMunis.length > 1) {
                            for (let i = 1; i < arraysWithMunis.length; i++) {
                                let objectToMerge = arraysWithMunis[i].find(object => object._date === item._date);
                                o = Object.assign(o, item, objectToMerge);
                            }
                        }
                        else {
                            o = item;
                        }
                        muniData.push(o);
                    });
                }
            }
            // muniData = this.createMapDataForEemsdelta(muniData);
        }
        return { weekData, muniData };
    }
}
exports.DataService = DataService;

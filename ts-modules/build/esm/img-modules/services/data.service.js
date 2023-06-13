import * as d3 from "d3";
import { graphs } from "@local/charts";
export class DataService {
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
                this.graphMethods[graphMapping.slug] = new graphs[graphMapping.graph](this.ctrlr, data, element, graphMapping, segment);
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

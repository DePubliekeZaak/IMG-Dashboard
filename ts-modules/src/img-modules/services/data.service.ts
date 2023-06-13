import * as d3 from "d3";
import {IGraphMapping, ResponseData} from "@local/d3_types";
import { graphs } from "@local/charts";

export interface IDataService {

    data: any,
    ctrlr: any,
    call: (params: string, pageConfig: IGraphMapping[], segment: string, update: boolean, htmlContainer: HTMLElement) => void 
    _createDashboardCalls: (pageConfig: IGraphMapping[], segment: string, update: boolean) => any[],
    _mergeArrayObjects: (any) => any,
    graphMethods: any
}

export class DataService implements IDataService {

    data: any; 
    graphMethods = {}

    constructor(public ctrlr) {}

    call(params: string, pageConfig, segment: string, update: boolean, htmlContainer: HTMLElement) : void {

        const promises = this._createDashboardCalls(pageConfig, segment,false);
    
        Promise.all(promises).then((values) => {
    
            const data = this._mergeArrayObjects(values);
            
            for (let graphMapping of pageConfig) {

                console.log(graphMapping);

                const element = this.ctrlr.html.createGraphGroupElement(graphMapping, htmlContainer)

                this.graphMethods[graphMapping.slug] = new graphs[graphMapping.graph](this.ctrlr, data, element, graphMapping, segment);
                this.graphMethods[graphMapping.slug].init();   
            }
        });
    }

    _createDashboardCalls(pageConfig, segment, update) {

        let self = this;
        let promises: any[] = [];
        let uniqueEndpoints: any = [...Array.from(new Set(pageConfig.map((o) => o.endpoint)))];
   
        // @ts-ignore
        const domain: string = process.env.DOMAIN | DOMAIN;
        // @ts-ignore
        const apibase: string = process.env.APIBASE | APIBASE;

        for (let endpoint of uniqueEndpoints) {
    
            if(endpoint) {
                
                const url = domain + apibase + endpoint;
                promises.push(
                    new Promise((resolve, reject) => {
                        d3.json<ResponseData>(url)
                            .then((data) => {
                                resolve(data)
                            })
                            .catch((err) => {
                                console.log('api call failed');
                                console.log(err);
                            })
                    })
                )
            }
        }
        return promises;
    }

    _mergeArrayObjects(values:any) {

        return values;
    }
}

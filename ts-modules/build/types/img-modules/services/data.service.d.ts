import { IGraphMapping } from "@local/d3_types";
export interface IDataService {
    data: any;
    ctrlr: any;
    call: (params: string, pageConfig: IGraphMapping[], segment: string, update: boolean, htmlContainer: HTMLElement) => Promise<string>;
    _createDashboardCalls: (pageConfig: IGraphMapping[], segment: string, update: boolean) => any[];
    _mergeArrayObjects: (any: any) => any;
    graphMethods: any;
}
export declare class DataService implements IDataService {
    ctrlr: any;
    data: any;
    graphMethods: {};
    constructor(ctrlr: any);
    call(params: string, pageConfig: any, segment: string, update: boolean, htmlContainer: HTMLElement): Promise<string>;
    _createDashboardCalls(pageConfig: any, segment: any, update: any): any[];
    _mergeArrayObjects(arrays: any): {
        weekData: any[];
        muniData: any[];
    };
}

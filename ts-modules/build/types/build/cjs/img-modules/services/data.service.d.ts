export const __esModule: boolean;
export class DataService {
    constructor(ctrlr: any);
    ctrlr: any;
    graphMethods: {};
    call(params: any, pageConfig: any, segment: any, update: any, htmlContainer: any, size: any): any;
    _createDashboardCalls(pageConfig: any, segment: any, update: any): Promise<any>[];
    _mergeArrayObjects(arrays: any): {
        weekData: any[];
        muniData: any[];
    };
}

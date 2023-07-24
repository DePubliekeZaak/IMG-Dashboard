import { GraphObject, IGraphMapping, IMappingOption } from "@local/d3_types";
export declare function thousands(number: any): any;
export declare function convertToCurrency(number: number): string;
export declare function shortenCurrency(string: any): any;
export declare function displayDate(date: any): string;
export declare function slugify(str: any): any;
export declare function getFirstMapping(o: GraphObject): {
    column: any;
    label: any;
    colour: any;
    units: any;
    format: any;
};
export declare function getParameter(o: IGraphMapping, i: number): {
    column: any;
    label: any;
    colour: any;
    units: any;
    format: any;
};
export declare function getMappingKey(m: IMappingOption, key: string): string;
export declare function flattenColumn(column: string | string[]): string;

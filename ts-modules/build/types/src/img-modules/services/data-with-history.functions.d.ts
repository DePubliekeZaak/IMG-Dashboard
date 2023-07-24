import { DataPart, IGraphMapping } from "@local/d3_types";
export declare function getNeededColumnsForHistory(data: any, graphObject: any): string[];
export declare function getNeededColumnsForHistoryV2(data: any, mapping: IGraphMapping): string[];
export declare function isArrayOfMaps(o: any): boolean;
export declare function groupByMonths(newData: DataPart[], neededColumns: string[]): DataPart[];
export declare function filterWeeks(data: DataPart[], neededColumns: string[]): DataPart[];
export declare function filterWeeksPlusColour(data: DataPart[], neededColumns: string[]): void;
export declare function trimLatest(week: DataPart, neededColumns: string[]): DataPart;
export declare function parseHistoryForStackedArea(mapping: IGraphMapping, rawData: DataPart[]): any[];

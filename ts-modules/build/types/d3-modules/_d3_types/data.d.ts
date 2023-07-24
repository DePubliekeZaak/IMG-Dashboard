export interface ResponseData {
    features: any[];
}
export interface DataPart {
    KeyValue?: any;
    gemeente: string;
    _date: string;
    _month: number;
    _week: number;
    _year: number;
}
export interface D3Data {
    label: string;
    value: string;
    colour?: string;
}
export interface D3DataTypeLatest extends DataPart {
    label: string;
    value: string;
    colour?: string;
}
export interface D3DataTypeHistorical extends DataPart {
    colour?: string;
}
export interface IKeyValueObject {
    label: string;
    KeyValue?: any;
}
export interface ID3DataStackedItem {
    '0': number;
    '1': number;
    data: IKeyValueObject;
}
export interface ID3DataStackedSerie {
    key: string;
    index: number;
    [key: number]: ID3DataStackedItem;
}
export type LinePoint = {
    time: string | number | Date;
    value: number;
    label: string;
    colour?: string;
};
export type Line = LinePoint[];
export type Lines = Line[];
export type Bar = {
    label: string;
    value: number;
    value2?: number;
    colour: string;
    format?: string;
    type?: string;
    meta?: any;
};
export type Bars = Bar[];
export type GroupedBars = {
    label: string;
    group: Bars;
};
export type Circle = {
    label: string;
    value: number;
    delta?: string;
    unit?: string;
    colour: string;
};
export type Circles = Circle[];
export type Feature = any;
export type GraphData = (Lines | Bars | Feature[][]);
export type Sankey = {
    nodes: SankeyNode[];
    links: SankeyLink[];
};
export type SankeyNode = {
    node: number;
    name: string;
    label?: string;
    type?: string;
};
export type SankeyLink = {
    source: number;
    target: number;
    value: number;
    label?: string;
    amount?: number;
    type?: string;
    meta?: any;
};
export type PlotItem = {
    label: string;
    time: string;
    value: string;
    radius: string;
    meta?: any;
};
export type TableData = {
    headers: string[];
    rows: string[][];
};
export type IntData = {
    graph: (Circle | Bar)[] | Sankey;
    table: TableData;
};

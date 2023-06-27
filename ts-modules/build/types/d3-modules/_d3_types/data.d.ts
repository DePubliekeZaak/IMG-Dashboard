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
export interface GraphData {
    slice: DataPart[];
    history: DataPart[];
    latest: DataPart;
    flowData?: any[];
    outflowData?: any[];
    features?: any[];
    grouped?: any[];
    stacked?: ID3DataStackedSerie[];
    average?: number;
    pie?: any[];
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

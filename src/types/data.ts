export interface ResponseData {
    features: any[];
}

interface KeyValue {
    [key: string]: number | string;
 }

export interface DataPart {
    KeyValue?,
    gemeente?: string,
    complete?: boolean,
    _date:  string,
    _month? : number,
    _week? : number,
    _year? : number,
    _yearmonth? : number
}

export interface GraphData {
    slice: DataPart[],
    history: DataPart[],
    latest: DataPart,
    flowData?: any[],
    outflowData? : any[],
    features?: any[],
    grouped?: any[],
    stacked?: ID3DataStackedSerie[]
    average?: number
}

export interface D3DataTypeLatest extends DataPart { // extends mapping
    label: string,
    value: string,
    colour?: string

}

export interface D3DataTypeHistorical extends DataPart {
    colour? : string
    
}

export interface IKeyValueObject {
    label: string,
    KeyValue?
}

export interface ID3DataStackedItem {
    '0': number,
    '1': number,
    data: IKeyValueObject
}

export interface ID3DataStackedSerie {
    key: string,
    index: number,
    [key: number]: ID3DataStackedItem
}
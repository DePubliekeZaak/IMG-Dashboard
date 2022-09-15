export interface Mapping {

    label: string,
    column: string | string[],
    scale?: string,
    colour?: string,
    group?: string,
    short?: string,
    outflow?: any,
    duration?: string,
    units? : string
    format? : string
}


export interface IGraphMapping {

    slug: string,
    graph: string
    args?: string[],
    parameters: Mapping[][],
    header: string,
    description: string,
    endpoint: string | boolean,
    segment: string | boolean,
    segmentIndicator?: boolean,
    elementClasslist: string[],
    publishDate?: string,
    municipalitySelect?: boolean,
    children? : IGraphMapping[]
}

export type IMappingOption = Mapping | boolean;

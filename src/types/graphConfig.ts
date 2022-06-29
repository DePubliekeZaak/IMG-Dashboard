// aparte instance of class per axis 
// sclae slug meegeven + ctrlr 

export interface IScale {

    slug: string,
    type: string,
    direction: string,
    parameter?: string // is fit nodig? 
}

export interface IAxes {

    slug: string,
    scale: string,
    position: string,
    format?: string,
    label?: string,
    
}

export interface GraphConfig {

    multiples? : boolean,
    graphType : string,
    xScaleType : string | boolean,
    yScaleType : string | boolean,
    xParameter : string | boolean,
    yParameter : string | boolean,
    scales?: IScale[],
    axes?: IAxes[],
    padding: {
        top : number,
        bottom : number,
        left : number,
        right : number
    },
    margin: {
        top : number,
        bottom : number,
        left : number,
        right : number
    },
    paddingInner?: number,
    paddingOuter? : number,
    extra : any
}

import {Mapping} from "./mapping";
import {GraphConfig} from "./graphConfig";
import { DataPart } from "./data";
import { Dimensions } from "./dimensions"

export interface GraphObject {

    label : string,
    slug : string,
    mapping : Mapping[][],
    config : GraphConfig,
    description : string,
    endpoint : string,
    segment :  string | boolean,
    publishDate? : string | boolean,
    elementClasslist? : string[],
    children? : GraphObject[]
}

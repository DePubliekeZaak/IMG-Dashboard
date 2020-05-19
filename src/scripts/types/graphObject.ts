import {Mapping} from "./mapping";
import {Config} from "./graphConfig";


export interface GraphObject {

    label : string,
    slug : string,
    mapping : Mapping[][][] | Mapping[][] | Mapping[],
    config : Config,
    endpoint : string,
    segment :  string,
    publishDate : string | boolean
}

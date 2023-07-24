import { Mapping } from "./mapping";
import { GraphConfig } from "./graphConfig";
export interface GraphObject {
    label: string;
    slug: string;
    mapping: Mapping[][];
    config: GraphConfig;
    description: string;
    endpoint: string;
    segment: string | boolean;
    publishDate?: string | boolean;
    elementClasslist?: string[];
    children?: GraphObject[];
}

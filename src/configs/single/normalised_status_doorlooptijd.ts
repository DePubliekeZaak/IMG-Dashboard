import { GraphObject} from '@local/d3_types';

export const normalisedStatusVsDoorlooptijd : GraphObject = {
    "label" : "Genormaliseerde barren met status",
    "slug" : "normalised_status",
    "mapping": [
        [
            {
                "label": "Schade-opnames",
                "column": "schadeopnames",
                "colour": "blue"
            },
            {
                "label": "",
                "column": "nieuwe_schadeopnames",
                "colour": "blue"
            }
        ]
    ],
    "config": {
        "graphType": "NormalisedBars",
        "xScaleType": "normalised",
        "yScaleType": "band",
        "xParameter": "",
        "yParameter": "status",
        "padding": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0
        },
        "margin": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0
        },
        "extra": {
            "paddingInner" : .5,
            "paddingOuter" : .5,
            "header" : ""
        }
    },
    "description" : "",
    "endpoint": "voortgang",
    "segment": "all",
    "elementClasslist" : ["is-12"],
    "publishDate": false
}

import { GraphObject} from '../types/graphObject';

export const staafSchadeopnames : GraphObject = {
        "label" : "Staaf schade-opnames",
        "slug" : "staaf_schade-opnames",
        "mapping": [
        [
            {
                "label": "Schade-opnames",
                "column": "schade_opnames",
                "colour": "blue"
            },
            {
                "label": "",
                "column": "nieuw_schade_opnames",
                "colour": "blue"
            }
        ]
    ],
        "config": {
        "graphType": "BarProgression",
            "xScaleType": "bandTime",
            "yScaleType": "linear",
            "xParameter": "_date",
            "yParameter": "schade_opnames",
            "padding": {
            "top": 20,
                "bottom": 40,
                "left": 60,
                "right": 30
        },
        "margin": {
            "top": 0,
                "bottom": 15,
                "left": 0,
                "right": 0
        },
        "extra": {
            "xScaleTicks" : "timeMonth",
            "barWidth" : 12
        }
    },
    "description" : "",
    "endpoint": "opnames",
    "segment": "all",
    "elementClasslist" : ["is-9"],
    "publishDate": false
}

import { GraphObject} from '../types/graphObject';

export const multistaafBesluitenAfgehandeld : GraphObject = {

    "label" : "Multistaaf besluiten en afgehandeld",
    "slug" : "multistaaf_besluiten_afgehandeld",
    "mapping": [
        [
            {
                "label": "Besluiten",
                "column": "BESCHIKT",
                "colour": "blue"
            },
            {
                "label": "",
                "column": "nieuwe_BESCHIKT",
                "colour": "blue"
            }
        ],
        [
            {
                "label": "Afgehandelde schademeldingen",
                "column": "AFGEHANDELD_TOTAAL",
                "colour": "red"
            },
            {
                "label": "",
                "column": "nieuwe_AFGEHANDELD_TOTAAL",
                "colour": "red"
            }
        ]
    ],
    "config": {
        "graphType": "MultiBarProgression",
        "xScaleType": "bandTime",
        "yScaleType": "linear",
        "xParameter": "_date",
        "yParameter": "AFGEHANDELD_TOTAAL",
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
            "useLineFill": true,
            "minValue" : 0,
            "xScaleTicks" : "timeMonth",
            "barWidth" : 12
        }
    },
    "description" : "",
    "endpoint": "/api/data",
    "segment": "all",
    "publishDate": false
};
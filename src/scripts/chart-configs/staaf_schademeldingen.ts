import { GraphObject} from '../types/graphObject';

export const staafSchademeldingen : GraphObject = {

    "label": "Staaf schademeldingen",
    "slug": "staaf_schademeldingen",
    "mapping": [
    [
        {
            "label": "Schademeldingen",
            "column": "schademeldingen",
            "colour": "purple"
        },
        {
            "label": "",
            "column": "nieuwe_schademeldingen",
            "colour": "purple"
        }
    ]
],
    "config": {
        "graphType": "BarProgression",
        "xScaleType": "bandTime",
        "yScaleType": "linear",
        "xParameter": "_date",
        "yParameter": "schademeldingen",
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
        "xScaleTicks": "timeMonth",
        "barWidth": 12,
        "muniSelect": false
    }
},
    "description" : "",
    "endpoint": "/api/data",
    "segment": "all",
    "publishDate": false
};


import { GraphObject} from '../@local/d3_types';

export const trendInBehandeling : GraphObject = {

    "label": "In behandeling",
    "slug": "trend_in_behandeling",
    "mapping": [
        [
            {
                "label": "In behandeling",
                "column": "WERKVOORRAAD_IN_BEHANDELING",
                "colour": "red"
            }
        ]
    ],
    "config": {
        "graphType": "TrendLine",
        "xScaleType": "time",
        "yScaleType": "linear",
        "xParameter": "_date",
        "yParameter": "WERKVOORRAAD_IN_BEHANDELING",
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
            "useLineFill": true
        }
    },
    "description" : "",
    "endpoint": "/api/data",
    "segment": "all",
    "publishDate": false
};


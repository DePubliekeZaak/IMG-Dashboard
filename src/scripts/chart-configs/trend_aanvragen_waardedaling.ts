import { GraphObject} from '../types/graphObject';

export const trendAanvragenWaardedaling : GraphObject = {

    "label": "Trend aanvragen waardedalingsregeling",
    "slug": "trend_aanvragen_waardedaling",
    "mapping": [
        [
            {
                "label": "Aanvragen",
                "column": "nieuw_aanvragen",
                "colour": "orange"
            },
            {
                "label": "Besluiten",
                "column": "nieuw_besluiten",
                "colour": "blue"
            }
        ]
    ],
    "config": {
        "graphType": "TrendLine",
        "xScaleType": "time",
        "yScaleType": "linear",
        "xParameter": "_date",
        "yParameter": "nieuw_aanvragen",
        "padding": {
            "top": 20,
            "bottom": 40,
            "left": 40,
            "right": 0
        },
        "margin": {
            "top": 80,
            "bottom": 100,
            "left": 0,
            "right": 0
        },
        "extra": {
            "xScaleTicks": "timeMonth",
            "useLineFill": true,
            "largeHeader" : false,
            "header" : "Voortgang per week",
            "legend" : true,
        }
    },
    "description" : "",
    "endpoint": "https://img.publikaan.nl/open-data/api/waardedaling",
    "segment": "all",
    "publishDate": false
};


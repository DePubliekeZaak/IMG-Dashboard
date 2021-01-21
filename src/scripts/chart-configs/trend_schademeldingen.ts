import { GraphObject} from '../types/graphObject';

export const trendSchademeldingen : GraphObject = {

    "label": "In behandeling",
    "slug": "trend_schademeldingen",
    "mapping": [
        [
            {
                "label": "Nieuw",
                "column": "nieuw_schademeldingen",
                "colour": "orange"
            },
            {
                "label": "Afgehandeld",
                "column": "nieuw_afgehandeld",
                "colour": "blue"
            }
        ]
    ],
    "config": {
        "graphType": "TrendLine",
        "xScaleType": "time",
        "yScaleType": "linear",
        "xParameter": "_date",
        "yParameter": "nieuw_schademeldingen",
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
            "header" : "Trend nieuw en afgehandeld",
            "segmentIndicator": true,
            "legend" : true,
        }
    },
    "description" : "",
    "endpoint": "https://img.publikaan.nl/open-data/api/voortgang",
    "segment": "all",
    "publishDate": false
};


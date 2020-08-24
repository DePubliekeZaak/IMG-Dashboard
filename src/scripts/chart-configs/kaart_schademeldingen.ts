import { GraphObject} from '../types/graphObject';

export const kaartSchademeldingen : GraphObject = {
    "label" : "Kaart schademeldingen",
    "slug" : "kaart_schademeldingen",
    "mapping": [
        [
            {
                "label": "Schademeldingen",
                "column": "schademeldingen",
                "colour": "violet"
            }
        ]
    ],
    "config": {
        "graphType": "Map",
        "xScaleType" : false,
        "yScaleType" : false,
        "xParameter" : false,
        "yParameter" : false,
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
        "extra" : {
            "legendWidth" : 240,
            "currencyLabels" : false
        }
    },
    "description" : "",
    "endpoint": "https://img.publikaan.nl/open-data/api/meldingen",
    "segment": "all",
    "publishDate": false
}
import { GraphObject} from '../@local/d3_types';

export const taartSpecials : GraphObject = {
    "label" : "Taart Specials",
    "slug" : "taart_specials",
    "mapping": [
        [
            {
                "label": "Afgehandelde specials",
                "column": "SPECIALS_AFGEHANDELD_TOTAAL",
                "colour": "green"
            },
            {
                "label": "Specials in behandeling",
                "column": "SPECIALS_WERKVOORRAAD_IN_BEH",
                "colour": "yellow"
            }
        ],
        [
            {
                "label": "Totaal",
                "column": undefined,
                "colour": undefined
            }

        ]
    ],
    "config": {
        "graphType": "PieChartSum",
        "xScaleType" : false,
        "yScaleType" : false,
        "xParameter" : false,
        "yParameter" : false,
        "padding": {
            "top": 20,
            "bottom": 40,
            "left": 0,
            "right": 0
        },
        "margin": {
            "top": 0,
            "bottom": 15,
            "left": 0,
            "right": 0
        },
        "extra": {
            "currencyLabels" : false,
            "legendWidth" : 240,
            "maxHeight" : 320,
            "maxRadius" : 120,
            "innerRadius": 20
        }
    },
    "description" : "",
    "endpoint": "/api/data",
    "segment": "all",
    "publishDate": false
}
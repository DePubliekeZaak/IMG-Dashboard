import { GraphObject} from '../types/graphObject';

export const tickerWaardedaling : GraphObject[] = [
    {
        "label" : "Bol aanvragen",
        "slug" : "bol_aanvragen",
        "mapping": [
            [
                {
                    "label": "Verleend",
                    "column": "waardedalingsregeling_totaal_verleend",
                    "colour": "lightBlue",
                    "format": "currency"
                },
                {
                    "label": "Afgehandeld",
                    "column": "waardedaling_besluiten",
                    "colour": "lightBlue",
                    "format": "thousands"
                },
                {
                    "label": "Waardering",
                    "column": "waardering",
                    "colour": "lightBlue",
                    "format": "decimal"
                }
            ]
        ],
        "config": {
            "graphType": "TickerNumbers",
            "xScaleType" : "linear",
            "yScaleType" : "linear",
            "xParameter" : "_week",
            "yParameter" : "",
            "padding": {
                "top": 0,
                "bottom": 0,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 0,
                "bottom": 4,
                "left": 0,
                "right": 0
            },
            "extra": {
                "useLineFill": true,
                "noDots": true,
                "smartColours" : 'down',
                "thinLines" : true,
                "units": "aanvragen"
            }
        },
        "description" : null,
        "endpoint": "vergoedingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','column']
    },
    {
        "label" : "Bol aanvragers",
        "slug" : "bol_aanvragers",
        "mapping": [
            [
                {
                    "label": "in behandeling",
                    "column": "nieuw_aanvragen",
                    "colour": "moss"
                },
                {
                    "label": "Vorige week: nieuw",
                    "column": "nieuw_besluiten",
                    "colour": "orange"
                }
            ],
            [
                {
                    "label": "in behandeling",
                    "column": "waardedaling_in_behandeling",
                    "colour": "orange"
                }
            ]
        ],
        "config": {
            "graphType": "TickerHorizon",
            "xScaleType" : "linear",
            "yScaleType" : "linear",
            "xParameter" : "_week",
            "yParameter" : "",
            "padding": {
                "top": 0,
                "bottom": 4,
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
                "useLineFill": true,
                "noDots": true,
                "smartColours" : 'up',
                "thinLines" : true,
                "units": "besluiten",
                "link": "meldingen",
            }
        },
        "description" : null,
        "endpoint": "waardedaling",
        "segment": "all",
        "elementClasslist": ['img-graph-container','column']
    }
]

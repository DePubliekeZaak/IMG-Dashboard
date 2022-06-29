import { GraphObject} from '../types/graphObject';

export const tickerImmaterieel : GraphObject[] = [
    {
        "label" : "Bol aanvragen",
        "slug" : "bol_aanvragen",
        "mapping": [
            [
                {
                    "label": "Verleend",
                    "column": "immateriele_schade_totaal_verleend",
                    "colour": "lightBlue",
                    "format": "currency"
                },
                {
                    "label": "Afgehandeld",
                    "column": "immateriele_schade_besluiten",
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
        "endpoint": "immateriele_schade",
        "segment": "all",
        "elementClasslist": ['img-graph-container','column']
    },
    {
        "label" : "Bol aanvragers",
        "slug" : "bol_aanvragers",
        "mapping": [
            [
                {
                    "label": "Vorige week: nieuw",
                    "column": "immateriele_schade_nieuw_aanvragen",
                    "colour": "blue"
                },
                {
                    "label": "Vorige week: nieuw",
                    "column": "immateriele_schade_nieuw_besluiten",
                    "colour": "blue"
                }
            ],
            [
                {
                    "label": "in behandeling",
                    "column": "immateriele_schade_in_behandeling",
                    "colour": "blue"
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
                "smartColours" : 'up',
                "thinLines" : true,
                "units": "besluiten",
                "link": "tevredenheid",
            }
        },
        "description" : "",
        "endpoint": "immateriele_schade",
        "segment": "all",
        "elementClasslist": ['img-graph-container','column']
    }
]

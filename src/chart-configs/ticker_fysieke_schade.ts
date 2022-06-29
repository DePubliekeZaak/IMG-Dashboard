import { GraphObject} from '../types/graphObject';

export const tickerFysiekeSchade : GraphObject[] = [
    {
        "label" : "Bol afgehandelde meldingen",
        "slug" : "bol_afgehandelde_meldingen",
        "mapping": [
            [
                {
                    "label": "Verleend",
                    "column": "fysieke_schade_totaal_verleend",
                    "colour": "lightBlue",
                    "format": "currency"
                },
                {
                    "label": "Afgehandeld",
                    "column": "afgehandeld",
                    "colour": "moss",
                    "format": "thousands"
                },
                {
                    "label": "Waardering",
                    "column": "fysieke_schade_doorlopend_cijfer",
                    "colour": "moss",
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
                "units": "meldingen"

                // "units": "afgehandeld"
            }
        },
        "description" : null,
        "endpoint": "vergoedingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','column']

    },
    {
        "label" : "Bol schademeldingen",
        "slug" : "bol_schademeldingen",
        "mapping": [
            [
                {
                    "label": "Vorige week",
                    "column": "nieuw_schademeldingen",
                    "colour": "moss"
                },
                {
                    "label": "Vorige week: afgehandeld",
                    "column": "nieuw_afgehandeld",
                    "colour": "moss"
                }
            ],[
                {
                    "label": "In behandeling",
                    "column": "in_behandeling",
                    "colour": "moss"
                }
                // {
                //     "label": "Schade-meldingen",
                //     "column": "schademeldingen",
                //     "colour": "moss"
                // }
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
                "smartColours" : 'down',
                "thinLines" : true,
                "units": "dossiers"
            }
        },
        "description" : null,
        "endpoint": "tevredenheid",
        "segment": "all",
        "elementClasslist": ['img-graph-container','column']
    },
    {
        "label" : "Bol percentage binnen half jaar",
        "slug" : "bol_binnen_half_jaar",
        "mapping": [
            [
                {
                    "label": "In half jaar afgehandeld",
                    "column": "percentage_binnen_half_jaar",
                    "colour": "moss"
                }
            ]
        ],
        "config": {
            "graphType": "TickerBars",
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
                "units": "%",
                "noDots": true,
                "notNull": true,
                "smartColours" : 'up',
                "thinLines" : true,
            }
        },
        "description" : null,
        "endpoint": "voortgang",
        "segment": "all",
        "elementClasslist": ['img-graph-container','column']
    },
    {
        "label" : "Bol gerealiseerde doorlooptijd",
        "slug" : "bol_doorlooptijd",
        "mapping": [
            [
                {
                    "label": "Gem. tijd tot besluit",
                    "column": "mediaan_doorlooptijd",
                    "colour": "moss"
                }
            ]
        ],
        "config": {
            "graphType": "TickerBars",
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
                "units": "dagen",
                "noDots": true,
                "notNull": true,
                "smartColours" : 'down',
                "thinLines" : true,
            }
        },
        "description" : null,
        "endpoint": "voortgang",
        "segment": "all",
        "elementClasslist": ['img-graph-container','column']
    }
]

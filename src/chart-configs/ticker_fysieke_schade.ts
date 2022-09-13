
import { IGraphMapping } from '../types/mapping';

export const tickerFysiekeSchade : IGraphMapping[] = [
    {
        "slug" : "bol_afgehandelde_meldingen",
        "graph" : "TickerNumbers",
        "parameters": [
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
        "header": null,
        "description" : null,
        "endpoint": "vergoedingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','column']

    },
    // {
    //     "slug" : "bol_schademeldingen",
    //     "graph": "TickerHorizon",
    //     "parameters": [
    //         [
    //             {
    //                 "label": "Vorige week",
    //                 "column": "nieuw_schademeldingen",
    //                 "colour": "moss"
    //             },
    //             {
    //                 "label": "Vorige week: afgehandeld",
    //                 "column": "nieuw_afgehandeld",
    //                 "colour": "moss"
    //             }
    //         ],[
    //             {
    //                 "label": "In behandeling",
    //                 "column": "in_behandeling",
    //                 "colour": "moss",
    //                 "units": "dossiers"
    //             }
    //             // {
    //             //     "label": "Schade-meldingen",
    //             //     "column": "schademeldingen",
    //             //     "colour": "moss"
    //             // }
    //         ]
    //     ],
    //     // "config": {
    //     //     "graphType": "TickerHorizon",
    //     //     "xScaleType" : "linear",
    //     //     "yScaleType" : "linear",
    //     //     "xParameter" : "_week",
    //     //     "yParameter" : "",
    //     //     "padding": {
    //     //         "top": 0,
    //     //         "bottom": 4,
    //     //         "left": 0,
    //     //         "right": 0
    //     //     },
    //     //     "margin": {
    //     //         "top": 0,
    //     //         "bottom": 0,
    //     //         "left": 0,
    //     //         "right": 0
    //     //     },
    //     //     "extra": {
    //     //         "useLineFill": true,
    //     //         "noDots": true,
    //     //         "smartColours" : 'down',
    //     //         "thinLines" : true,
    //     //         
    //     //     }
    //     // },
    //     "header": null,
    //     "description" : null,
    //     "endpoint": "tevredenheid",
    //     "segment": "all",
    //     "elementClasslist": ['img-graph-container','column']
    // },
    {
        "slug" : "bol_binnen_half_jaar",
        "graph": "TickerBars",
        "args": ["down"],
        "parameters": [
            [
                {
                    "label": "In behandeling",
                    "column": "in_behandeling",
                    "colour": "moss",
                    "units": "dossiers"
                }
            ]
        ],
        "header": null,
        "description" : null,
        "endpoint": "voortgang",
        "segment": "all",
        "elementClasslist": ['img-graph-container','column']
    },
    {
        "slug" : "bol_binnen_half_jaar",
        "graph": "TickerBars",
        "args": ["up"],
        "parameters": [
            [
                {
                    "label": "In half jaar afgehandeld",
                    "column": "percentage_binnen_half_jaar",
                    "colour": "moss",
                    "units": "%"
                }
            ]
        ],
        "header": null,
        "description" : null,
        "endpoint": "voortgang",
        "segment": "all",
        "elementClasslist": ['img-graph-container','column']
    },
    {
        "slug" : "bol_doorlooptijd",
        "graph": "TickerBars",
        "args": ["down"],
        "parameters": [
            [
                {
                    "label": "Gem. tijd tot besluit",
                    "column": "mediaan_doorlooptijd",
                    "colour": "moss",
                    "units": "dagen"
                }
            ]
        ],
        "header": null,
        "description" : null,
        "endpoint": "voortgang",
        "segment": "all",
        "elementClasslist": ['img-graph-container','column']
    }
]

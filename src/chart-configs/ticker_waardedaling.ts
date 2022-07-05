import { GraphObject} from '../types/graphObject';
import { IGraphMapping } from '../types/mapping';

export const tickerWaardedaling : IGraphMapping[] = [
    {
        "slug" : "bol_aanvragen",
        "graph" : "TickerNumbers",
        "parameters": [
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
        // "config": {
        //     "graphType": "TickerNumbers",
        //     "xScaleType" : "linear",
        //     "yScaleType" : "linear",
        //     "xParameter" : "_week",
        //     "yParameter" : "",
        //     "padding": {
        //         "top": 0,
        //         "bottom": 0,
        //         "left": 0,
        //         "right": 0
        //     },
        //     "margin": {
        //         "top": 0,
        //         "bottom": 4,
        //         "left": 0,
        //         "right": 0
        //     },
        //     "extra": {
        //         "useLineFill": true,
        //         "noDots": true,
        //         "smartColours" : 'down',
        //         "thinLines" : true,
        //         "units": "aanvragen"
        //     }
        // },
        "header": null,
        "description" : null,
        "endpoint": "vergoedingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','column']
    },
    {
        "slug" : "bol_aanvragers",
        "graph": "TickerHorizon",
        "parameters": [
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
                    "colour": "orange",
                    "units": "besluiten"
                }
            ]
        ],
        // "config": {
        //     "graphType": "TickerHorizon",
        //     "xScaleType" : "linear",
        //     "yScaleType" : "linear",
        //     "xParameter" : "_week",
        //     "yParameter" : "",
        //     "padding": {
        //         "top": 0,
        //         "bottom": 4,
        //         "left": 0,
        //         "right": 0
        //     },
        //     "margin": {
        //         "top": 0,
        //         "bottom": 0,
        //         "left": 0,
        //         "right": 0
        //     },
        //     "extra": {
        //         "useLineFill": true,
        //         "noDots": true,
        //         "smartColours" : 'up',
        //         "thinLines" : true,
        //         
        //         "link": "meldingen",
        //     }
        // },
        "header": null,
        "description" : null,
        "endpoint": "waardedaling",
        "segment": "all",
        "elementClasslist": ['img-graph-container','column']
    }
]

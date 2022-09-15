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
        "header": null,
        "description" : null,
        "endpoint": "vergoedingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','column']
    },
    {
        "slug" : "bol_binnen_half_jaar",
        "graph": "TickerBars",
        "args": ["down"],
        "parameters": [
            [{
                    "label": "In behandeling",
                    "column": "waardedaling_in_behandeling",
                    "colour": "orange",
                    "units": "dossiers"
            }]
        ],
        "header": null,
        "description" : null,
        "endpoint": "waardedaling",
        "segment": "all",
        "elementClasslist": ['img-graph-container','column']
    }
    // {
    //     "slug" : "bol_aanvragers",
    //     "graph": "TickerHorizon",
    //     "parameters": [
    //         [
    //             {
    //                 "label": "in behandeling",
    //                 "column": "nieuw_aanvragen",
    //                 "colour": "moss"
    //             },
    //             {
    //                 "label": "Vorige week: nieuw",
    //                 "column": "nieuw_besluiten",
    //                 "colour": "orange"
    //             }
    //         ],
    //         [
    //             {
    //                 "label": "in behandeling",
    //                 "column": "waardedaling_in_behandeling",
    //                 "colour": "orange",
    //                 "units": "besluiten"
    //             }
    //         ]
    //     ],
    //     "header": null,
    //     "description" : null,
    //     "endpoint": "waardedaling",
    //     "segment": "all",
    //     "elementClasslist": ['img-graph-container','column']
    // }
]

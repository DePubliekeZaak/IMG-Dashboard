import { GraphObject} from '@local/d3_types';
import { IGraphMapping } from '@local/d3_types';

export const tickerImmaterieel : IGraphMapping[] = [
    {
        "slug" : "bol_aanvragen",
        "graph" : "TickerNumbers",
        "parameters": [
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
        "header": null,
        "description" : null,
        "endpoint": "immateriele_schade",
        "segment": "all",
        "elementClasslist": ['img-graph-container','column']
    },
    {
        "slug" : "bol_binnen_half_jaar",
        "graph": "TickerBars",
        "args": ["down"],
        "parameters": [
            [
                {
                    "label": "In behandeling",
                    "column": "immateriele_schade_in_behandeling",
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
    // {
    //     "slug" : "bol_aanvragers",
    //     "graph" : "TickerHorizon",
    //     "parameters": [
    //         [
    //             {
    //                 "label": "Vorige week: nieuw",
    //                 "column": "immateriele_schade_nieuw_aanvragen",
    //                 "colour": "blue"
    //             },
    //             {
    //                 "label": "Vorige week: nieuw",
    //                 "column": "immateriele_schade_nieuw_besluiten",
    //                 "colour": "blue"
    //             }
    //         ],
    //         [
    //             {
    //                 "label": "in behandeling",
    //                 "column": "immateriele_schade_in_behandeling",
    //                 "colour": "blue",
    //                 "units": "besluiten"
    //             } 
    //         ]
    //     ],
    //     "header": null,
    //     "description" : null,
    //     "endpoint": "immateriele_schade",
    //     "segment": "all",
    //     "elementClasslist": ['img-graph-container','column']
    // }
]

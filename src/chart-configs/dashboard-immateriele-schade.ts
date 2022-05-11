import { GraphObject} from '../types/graphObject';

const pad = 40;
const margin = 180;

export const dashboardImmaterieleSchade : GraphObject[] = [

    {
        "label" : "IMS Uitgekeerd",
        "slug" : "ims_uitgekeerd",
        "mapping": [
            [
                {
                    "label": "Totaal uitgekeerd",
                    "column": "immateriele_schade_nieuw_verleend",
                    "colour": "blue"
                },
                {
                    "label": "Totaal uitgekeerd",
                    "column": "immateriele_schade_totaal_verleend",
                    "colour": "blue"
                }
            ]
        ],
        "config": {
            "graphType": "TotalPlus",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : "",
            "padding": {
                "top": 0,
                "bottom": 20, // 120
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 200,
                "bottom": 0,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "circleLabel": "vorige week:",
                "currency": true
                //     "trendlineLabel": "afgelopen acht weken:"
            }
        },
        "description" : "",
        "endpoint": "immateriele_schade",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-graph-container-bol']
    },
    {
        "label" : "Immateriele schade",
        "slug" : "ims_ingediend",
        "mapping": [
            [
                {
                    "label": "Nieuw binnen vorige week",
                    "column": "immateriele_schade_nieuw_aanvragen",
                    "colour": "blue"
                },
                {
                    "label": "Schade-meldingen",
                    "column": "immateriele_schade_aanvragen",
                    "colour": "blue"
                }
            ]
        ],
        "config": {
            "graphType": "CijfersLine",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : false,
            "padding": {
                "top": 20,
                "bottom": pad,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 120,
                "bottom": margin,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "units": "ingediend",
                "segmentIndicator": false,
                // "link": "meldingen",
                "largeHeader": false
            }
        },
        "description" : "",
        "endpoint": "immateriele_schade",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-graph-container-bol','img-grap-container-medium']
    },
    {
        "label" : "Immateriele schade",
        "slug" : "ims_afgehandeld",
        "mapping": [
            [
                {
                    "label": "Afgehandeld vorige week",
                    "column": "immateriele_schade_nieuw_besluiten",
                    "colour": "blue"
                },
                {
                    "label": "Schade-meldingen",
                    "column": "immateriele_schade_besluiten",
                    "colour": "blue"
                }
            ]
        ],
        "config": {
            "graphType": "CijfersLine",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : false,
            "padding": {
                "top": 20,
                "bottom": pad,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 120,
                "bottom": margin,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "units": "afgehandeld",
                "segmentIndicator": false
            }
        },
        "description" : "",
        "endpoint": "immateriele_schade",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-graph-container-bol','img-grap-container-medium']
    },
    // {
    //     "label" : "Immateriele schade",
    //     "slug" : "ims_aanvragen_per_adres",
    //     "mapping": [
    //         [
    //             {
    //                 "label": "Aanvragen per adres",
    //                 "column": "immateriele_schade_gemiddeld_aantal_aanvragen_per_adres",
    //                 "colour": "blue"
    //             }
    //         ]
    //     ],
    //     "config": {
    //         "graphType": "CijfersLine",
    //         "xScaleType" : "time",
    //         "yScaleType" : "linear",
    //         "xParameter" : "_date",
    //         "yParameter" : "immateriele_schade_gemiddeld_aantal_aanvragen_per_adres",
    //         "padding": {
    //             "top": 20,
    //             "bottom": pad,
    //             "left": 0,
    //             "right": 0
    //         },
    //         "margin": {
    //             "top": 120,
    //             "bottom": margin,
    //             "left": 10,
    //             "right": 10
    //         },
    //         "extra": {
    //             "useLineFill": true,
    //             "units": "",
    //             "segmentIndicator": false,
    //             "decimal": true,
    //             "noUpdate" : true,
    //             "notNull": true
    //         }
    //     },
    //     "description" : "",
    //     "endpoint": "immateriele_schade",
    //     "segment": "all",
    //     "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol','img-grap-container-medium']
    // },
    {
        "label": "Taart Schadevergoedingen",
        "slug": "taart_schadevergoeding_totaal",
        "mapping":  [[
            [
                {
                    "label": "Toegewezen",
                    "column": "immateriele_schade_toegewezen",
                    "colour": "moss"
                },
                {
                    "label": "Afgewezen",
                    "column": "immateriele_schade_afgewezen",
                    "colour": "orange"
                },
            ],
            [
                {
                    "label": "Totaal",
                    "column": "waardedalingsregeling_totaal_verleend",
                    "colour": "gray"
                }
            ]
        ]],
        "config": {

            "graphType": "PieChartSum",
            "xScaleType" : false,
            "yScaleType" : false,
            "xParameter" : false,
            "yParameter" : false,
            "padding": {
                "top": 0,
                "bottom": 0,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 0,
                "bottom": 15,
                "left": 0,
                "right": 0
            },
            "extra" :{
                "currencyLabels" : false,
                "legendWidth" : 220,
                "maxRadius" : 100,
                "innerRadius" : 20,
                "header" : "Toegewezen / afgewezen",
                "segmentIndicator": false,
            }
        },
        "description" : "",
        "endpoint": "immateriele_schade",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol','img-graph-container-medium-high']

    },
    {   "label": "In behandeling",
        "slug": "trend_schademeldingen",
        "mapping": [
            [
                {
                    "label": "Ingediend",
                    "column": "immateriele_schade_nieuw_aanvragen",
                    "colour": "blue",
                    "short": "in."
                },
                {
                    "label": "Toegewezen",
                    "column": "immateriele_schade_nieuw_toegewezen",
                    "colour": "moss",
                    "short": "toe."
                },
                {
                    "label": "Afgewezen",
                    "column": "immateriele_schade_nieuw_afgewezen",
                    "colour": "orange",
                    "short": "af."
                }
            ]
        ],
        "config": {
            "graphType": "TrendLine",
            "xScaleType": "time",
            "yScaleType": "linear",
            "xParameter": "_date",
            "yParameter": "immateriele_schade_nieuw_aanvragen",
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
                "xScaleTicks": "quarterly",
                "useLineFill": true,
                "header" : "Trend ingediend en afgehandeld",
                "segmentIndicator": true,
                "legend" : true,
                "hasFocus": true
            }
        },
        "description" : "",
        "endpoint": "immateriele_schade",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-9','img-graph-container-trendline', 'img-graph-top-align']
    }
]

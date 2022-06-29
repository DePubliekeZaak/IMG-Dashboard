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
                "currency": true,
                "header": "Totaal toegekend"
                //     "trendlineLabel": "afgelopen acht weken:"
            }
        },
        "description" : "Het totaal uitgekeerde bedrag",
        "endpoint": "immateriele_schade",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol']
    },
    // {
    //     "label" : "Immateriele schade",
    //     "slug" : "ims_ingediend",
    //     "mapping": [
    //         [
    //             {
    //                 "label": "Nieuw binnen vorige week",
    //                 "column": "immateriele_schade_nieuw_aanvragen",
    //                 "colour": "blue"
    //             },
    //             {
    //                 "label": "Schade-meldingen",
    //                 "column": "immateriele_schade_aanvragen",
    //                 "colour": "blue"
    //             }
    //         ]
    //     ],
    //     "config": {
    //         "graphType": "CijfersLine",
    //         "xScaleType" : "time",
    //         "yScaleType" : "linear",
    //         "xParameter" : "_date",
    //         "yParameter" : false,
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
    //             "units": "ingediend",
    //             "segmentIndicator": false,
    //             "header" : "Nieuw binnen vorige week",
    //             // "link": "meldingen",
    //             "largeHeader": false
    //         }
    //     },
    //     "description" : "kip",
    //     "endpoint": "immateriele_schade",
       
    //     "segment": "all",
    //     "elementClasslist": ['img-graph-container','img-graph-container-4','img-graph-container-bol','img-grap-container-medium']
    // },
    {
        "label" : "Combi aanvragen",
        "slug" : "combi_aanvragen",
        "mapping": [
            [
                // {
                //     "label": "Aanvragen",
                //     "column": "nieuw_aanvragen",
                //     "colour": "orange"
                // },
                {
                    "label": "Totaal",
                    "column": "immateriele_schade_aanvragen",
                    "colour": "blue"
                }
            ]
        ],
        "config": {
            "graphType": "Cijfer",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : "",
            "padding": {
                "top": 0,
                "bottom": 60, // 120
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
                "header": "Aanvragen",
                "units" : "aanvragen"
            }
        },
        "description" : "Het aantal nieuwe schademeldingen dat afgelopen week is binnengekomen.",
        "endpoint": "immateriele_schade",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol']
    },
    {
        "label" : "Combi aanvragen",
        "slug" : "combi_aanvragen",
        "mapping": [
            [
                {
                    "label": "Totaal",
                    "column": "immateriele_schade_unieke_adressen",
                    "colour": "blue"
                }
            ]
        ],
        "config": {
            "graphType": "Cijfer",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : "",
            "padding": {
                "top": 0,
                "bottom": 60, // 120
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
                // "circleLabel": "vorige week:",
                "header": "Unieke adressen",
                "units" : "adressen"
           //     "trendlineLabel": "afgelopen acht weken:"
            }
        },
        "description" : "Het aantal nieuwe schademeldingen dat afgelopen week is binnengekomen.",
        "endpoint": "immateriele_schade",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol']
    },
    {
        "label" : "Combi aanvragen",
        "slug" : "combi_besluiten",
        "mapping": [
            [
                {
                    "label": "Totaal",
                    "column": "immateriele_schade_besluiten",
                    "colour": "blue"
                }
            ]
        ],
        "config": {
            "graphType": "Cijfer",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : "",
            "padding": {
                "top": 0,
                "bottom": 60, // 120
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
                "header": "Besluiten",
                "units" : "besluiten"
            }
        },
        "description" : "Het aantal nieuwe schademeldingen dat afgelopen week is binnengekomen.",
        "endpoint": "immateriele_schade",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol']
    },
   
 
    {
        "label" : "Ontwikkeling hoeveelheid aanvragen in behandeling",
        "slug" : "trend_aanvragen_en_besluiten",
        "mapping": [
            [
                {
                    "label": "Aanvragen",
                    "column": "immateriele_schade_nieuw_aanvragen",
                    "short": "aanvragen",
                    "colour": "orange"
                },
                {
                    "label": "Besluiten",
                    "column": "immateriele_schade_nieuw_besluiten",
                    "short": "besluiten",
                    "colour": "blue"
                }
            ],
            [
                {
                    "label": "aanvragen in behandeling",
                    "column": "immateriele_schade_in_behandeling",
                    "short": "in beh",
                    "colour": "black"
                } 
            ]
        ],
        "config": {
            "graphType": "Horizon",
            "xScaleType": "linear",
            "yScaleType": "linear",
            "xParameter": "_index",
            "yParameter": "immateriele_schade_nieuw_aanvragen",
            "padding": {
                "top": 0,
                "bottom": 60,
                "left": 40,
                "right": 0
            },
            "margin": {
                "top": 0,
                "bottom": 160,
                "left": 30,
                "right": 0
            },
            "extra": {
                "xScaleTicks": "timeMonth",
                "useLineFill": true,
                "largeHeader" : false,
                "header" : "Ontwikkeling hoeveelheid aanvragen in behandeling",
                "legend" : true,
                "weekLabels" : true,
                "hasFocus":  true

            }
        },
        "description" : "",
        "endpoint": "immateriele_schade",
        "segment": "all",
        "publishDate": false,
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-graph-container-trendline','img-graph-container-vertical-padding']
    },
    {
        "label": "Taart Schadevergoedingen",
        "slug": "taart_schadevergoeding_totaal",
        "mapping":  [
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
        ],
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
    {
        "label" : "Ontwikkeling hoeveelheid aanvragen in behandeling",
        "slug" : "trend_aanvragen_en_besluiten",
        "mapping": [
            [
                {
                    "label": "Afgewezen",
                    "column": "immateriele_schade_nieuw_afgewezen",
                    "short": "afgewezen",
                    "colour": "orange"
                },
                {
                    "label": "Toegewezen",
                    "column": "immateriele_schade_nieuw_toegewezen",
                    "short": "toegewezen",
                    "colour": "moss"
                }
            ],
            [
                {
                    "label": "Percentage toegewezen",
                    "column": "immateriele_schade_nieuw_besluiten",
                    "short": "%",
                    "colour": "black"
                }
            ],
            [
                {
                    "label": "Besluiten",
                    "column": "immateriele_schade_nieuw_besluiten",
                    "short": "besluiten",
                    "colour": "orange"
                }
            ]
        ],
        "config": {
            "graphType": "StackedBars",
            "xScaleType": "linear",
            "yScaleType": "linear",
            "xParameter": "_index",
            "yParameter": "immateriele_schade_nieuw_besluiten",
            "scales": [
                {
                    "slug": "x",
                    "type": "linear",
                    "direction": "horizontal",
                    "parameter": "_index"
                },
                {
                    "slug": "y",
                    "type": "linear",
                    "direction": "vertical",
                    "parameter": "immateriele_schade_nieuw_besluiten"
                },
                {
                    "slug": "y2",
                    "type": "linear",
                    "direction": "vertical",
                    "parameter": "percentage"
                }
            ],
            "axes" : [
                {
                    "slug": "x",
                    "scale": "x",
                    "position": "bottom"
                },
                {
                    "slug": "y",
                    "scale": "y",
                    "position": "left"
                },
                {
                    "slug": "y2",
                    "scale": "y2",
                    "position": "right"
                }
            ],
            "padding": {
                "top": 30,
                "bottom": 60,
                "left": 30,
                "right": 0
            },
            "margin": {
                "top": 0,
                "bottom": 160,
                "left": 0,
                "right": 30
            },
            "extra": {
                // "xScaleTicks": "timeMonth",
                // "useLineFill": true,
                // "largeHeader" : false,
                "header" : "Ontwikkeling toegewezen en afgewezen besluiten",
                "legend" : true,
                "weekLabels" : true,
                "hasFocus":  true

            }
        },
        "description" : "",
        "endpoint": "immateriele_schade",
        "segment": "all",
        "publishDate": false,
        "elementClasslist": ['img-graph-container','img-graph-container-9','img-graph-container-trendline','img-graph-top-align']
    }
]
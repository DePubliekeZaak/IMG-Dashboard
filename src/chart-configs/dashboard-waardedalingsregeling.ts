import { GraphObject} from '../types/graphObject';

export const dashboardWaardedalingsRegeling : GraphObject[] = [
    {
        "label" : "Combi toegekend",
        "slug" : "combi_toegekend",
        "mapping": [
            [
                {
                    "label": "Totaal",
                    "column": "waardedaling_totaal_verleend",
                    "colour": "orange"
                },
                {
                    "label": "Totaal",
                    "column": "waardedaling_totaal_verleend",
                    "colour": "orange"
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
                "header": "Toegekend",
                "currency" : true
           //     "trendlineLabel": "afgelopen acht weken:"
            }
        },
        "description" : "Het aantal nieuwe schademeldingen dat afgelopen week is binnengekomen.",
        "endpoint": "waardedaling",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol']
    },
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
                    "column": "aanvragen",
                    "colour": "orange"
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
                "header": "Aanvragen",
                "units" : "aanvragen"
           //     "trendlineLabel": "afgelopen acht weken:"
            }
        },
        "description" : "Het aantal nieuwe schademeldingen dat afgelopen week is binnengekomen.",
        "endpoint": "waardedaling",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol']
    },
    {
        "label" : "Combi aanvragers",
        "slug" : "combi_aanvragers",
        "mapping": [
            [
                // {
                //     "label": "Aanvragers",
                //     "column": "nieuw_aanvragers",
                //     "colour": "moss"
                // },
                {
                    "label": "Totaal",
                    "column": "aanvragers",
                    "colour": "moss"
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
                "bottom": 60, // 120,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 200, // 360
                "bottom": 0,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "header": "Aanvragers",
                "units": "aanvragers"
                // "circleLabel": "vorige week:",
        //        "trendlineLabel": "afgelopen acht weken:"
            }
        },
        "description" : "Het aantal nieuwe schademeldingen dat afgelopen week is binnengekomen.",
        "endpoint": "waardedaling",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol']
    },
    {
        "label" : "Combi besluiten",
        "slug" : "combi_besluiten",
        "mapping": [
            [
                // {
                //     "label": "Besluiten",
                //     "column": "nieuw_besluiten",
                //     "colour": "blue"
                // },
                {
                    "label": "Totaal",
                    "column": "besluiten",
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
                "bottom": 60, // 120,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 200, // 360
                "bottom": 0,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                // "circleLabel": "totaal",
                "units": "besluiten",
                "header": "Besluiten"
               // "trendlineLabel": "afgelopen acht weken:"
            }
        },
        "description" : "Het aantal nieuwe schademeldingen dat afgelopen week is binnengekomen.",
        "endpoint": "waardedaling",
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
                    "column": "nieuw_aanvragen",
                    "short": "aanvragen",
                    "colour": "orange"
                },
                {
                    "label": "Besluiten",
                    "column": "nieuw_besluiten",
                    "short": "besluiten",
                    "colour": "blue"
                }
            ],
            [
                {
                    "label": "aanvragen in behandeling",
                    "column": "waardedaling_in_behandeling",
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
            "yParameter": "nieuw_aanvragen",
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
        "endpoint": "waardedaling",
        "segment": "all",
        "publishDate": false,
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-graph-container-trendline','img-graph-container-vertical-padding']
    },
    // {
    //     "label" : "Aanvragen",
    //     "slug" : "aanvragen",
    //     "mapping": [
    //         [
    //             {
    //                 "label": "Aanvragen",
    //                 "column": "nieuw_aanvragen",
    //                 "colour": "orange"
    //             },
    //             {
    //                 "label": "Besluiten",
    //                 "column": "nieuw_besluiten",
    //                 "colour": "blue"
    //             }
    //         ]
    //     ],
    //     "config": {
    //         "graphType": "TrendLine",
    //         "xScaleType": "time",
    //         "yScaleType": "linear",
    //         "xParameter": "_date",
    //         "yParameter": "nieuw_aanvragen",
    //         "padding": {
    //             "top": 20,
    //             "bottom": 40,
    //             "left": 40,
    //             "right": 0
    //         },
    //         "margin": {
    //             "top": 80,
    //             "bottom": 100,
    //             "left": 0,
    //             "right": 0
    //         },
    //         "extra": {
    //             "xScaleTicks": "timeMonth",
    //             "useLineFill": true,
    //             "largeHeader" : false,
    //             "header" : "Voortgang per week",
    //             "legend" : true,
    //             "startDate" : "2020-09-01"

    //         }
    //     },
    //     "description" : "",
    //     "endpoint": "waardedaling",
    //     "segment": "all",
    //     "publishDate": false,
    //     "elementClasslist": ['img-graph-container','img-graph-container-12','img-graph-container-trendline']
    // },
    {
        "label": "Afgewezen",
        "slug": "vergoedingen_taart_afgewezen",
        "mapping":  [
            [
                {
                    "label": "Besluiten met toekenning",
                    "column": "vergoeding_toegekend",
                    "colour": "moss"
                },
                {
                    "label": "Besluiten met afwijzing",
                    "column": "vergoeding_afgewezen",
                    "colour": "orange"
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
                "bottom": 40,
                "left": 0,
                "right": 0
            },
            "extra" :{
                "currencyLabels" : false,
                "legendWidth" : 240,
                "maxRadius" : 100,
                "innerRadius" : 20,
                "header" : "Afwijzingen t.o.v. toekenningen",
                "segmentIndicator": true,
                "municipalitySelect": true,
            }
        },
        "description" : "",
        "endpoint": "waardedaling",
        "segment": 'all',
        "elementClasslist": ['img-graph-container','img-graph-container-4']
    },
    {
        "label" : "Gem aanvragen per adres",
        "slug" : "gem_aanvragen",
        "mapping": [
            [
                {
                    "label": "Gem. aantal aanvragen per adres",
                    "column": "gemiddeld_aantal_aanvragen_per_adres",
                    "colour": "orange"
                }
            ]
        ],
        "config": {
            "graphType": "Average",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : "",
            "padding": {
                "top": 0,
                "bottom": 0, // 120
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 80,
                "bottom": 0,
                "left": 10,
                "right": 10
            },
            "extra": {
                "header": "Gem. aantal aanvragen per adres"
            }
        },
        "description" : "",
        "endpoint": "waardedaling",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4']
    },
    {
        "label" : "Gem aanvragers per adres",
        "slug" : "gem_aanvragers",
        "mapping": [
            [
                {
                    "label": "Gem. aantal aanvragers per adres",
                    "column": "gemiddeld_aantal_aanvragers_per_adres",
                    "colour": "moss"
                }
            ]
        ],
        "config": {
            "graphType": "Average",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : "",
            "padding": {
                "top": 0,
                "bottom": 0, // 120
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 0,
                "bottom": 0,
                "left": 10,
                "right": 10
            },
            "extra": {

                "header" : "Gem. aantal aanvragers per adres"
            }
        },
        "description" : "",
        "endpoint": "waardedaling",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4']
    }
]

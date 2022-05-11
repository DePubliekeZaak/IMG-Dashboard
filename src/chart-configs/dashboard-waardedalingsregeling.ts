import { GraphObject} from '../types/graphObject';

export const dashboardWaardedalingsRegeling : GraphObject[] = [
    {
        "label" : "Combi aanvragen",
        "slug" : "combi_aanvragen",
        "mapping": [
            [
                {
                    "label": "Aanvragen",
                    "column": "nieuw_aanvragen",
                    "colour": "orange"
                },
                {
                    "label": "Totaal",
                    "column": "aanvragen",
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
           //     "trendlineLabel": "afgelopen acht weken:"
            }
        },
        "description" : "Het aantal nieuwe schademeldingen dat afgelopen week is binnengekomen.",
        "endpoint": "waardedaling",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-graph-container-bol']
    },
    {
        "label" : "Combi aanvragers",
        "slug" : "combi_aanvragers",
        "mapping": [
            [
                {
                    "label": "Aanvragers",
                    "column": "nieuw_aanvragers",
                    "colour": "moss"
                },
                {
                    "label": "Totaal",
                    "column": "aanvragers",
                    "colour": "moss"
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
                "bottom": 20, // 120,
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
                "circleLabel": "vorige week:",
        //        "trendlineLabel": "afgelopen acht weken:"
            }
        },
        "description" : "Het aantal nieuwe schademeldingen dat afgelopen week is binnengekomen.",
        "endpoint": "waardedaling",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-graph-container-bol']
    },
    {
        "label" : "Combi besluiten",
        "slug" : "combi_besluiten",
        "mapping": [
            [
                {
                    "label": "Besluiten",
                    "column": "nieuw_besluiten",
                    "colour": "blue"
                },
                {
                    "label": "Totaal",
                    "column": "besluiten",
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
                "bottom": 20, // 120,
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
                "circleLabel": "vorige week",
               // "trendlineLabel": "afgelopen acht weken:"
            }
        },
        "description" : "Het aantal nieuwe schademeldingen dat afgelopen week is binnengekomen.",
        "endpoint": "waardedaling",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-graph-container-bol']
    },
    {
        "label" : "Aanvragen",
        "slug" : "aanvragen",
        "mapping": [
            [
                {
                    "label": "Aanvragen",
                    "column": "nieuw_aanvragen",
                    "colour": "orange"
                },
                {
                    "label": "Besluiten",
                    "column": "nieuw_besluiten",
                    "colour": "blue"
                }
            ]
        ],
        "config": {
            "graphType": "TrendLine",
            "xScaleType": "time",
            "yScaleType": "linear",
            "xParameter": "_date",
            "yParameter": "nieuw_aanvragen",
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
                "xScaleTicks": "timeMonth",
                "useLineFill": true,
                "largeHeader" : false,
                "header" : "Voortgang per week",
                "legend" : true,
                "startDate" : "2020-09-01"

            }
        },
        "description" : "",
        "endpoint": "waardedaling",
        "segment": "all",
        "publishDate": false,
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-graph-container-trendline']
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
                "top": 0,
                "bottom": 0,
                "left": 10,
                "right": 10
            },
            "extra": {
            }
        },
        "description" : "Het aantal nieuwe schademeldingen dat afgelopen week is binnengekomen.",
        "endpoint": "waardedaling",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6']
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
            }
        },
        "description" : "Het aantal nieuwe schademeldingen dat afgelopen week is binnengekomen.",
        "endpoint": "waardedaling",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6']
    }
]

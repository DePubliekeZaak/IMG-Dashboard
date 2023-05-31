import { GraphObject, IGraphMapping} from '@local/d3_types';

export const dashboardWaardedalingsRegeling : (GraphObject|IGraphMapping)[] = [
    {
        "slug" : "combi_toegekend",
        "graph": "TotalPlus",
        "parameters": [
            [
                {
                    "label": "Totaal",
                    "column": "waardedaling_totaal_verleend",
                    "colour": "black"
                },
                {
                    "label": "Totaal",
                    "column": "waardedaling_totaal_verleend",
                    "colour": "black"
                }
            ]
        ],
        "header": "Toegekend",
        "description" : "Het aantal nieuwe schademeldingen dat afgelopen week is binnengekomen.",
        "endpoint": "waardedaling",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol']
    },
    {
        "slug" : "combi_aanvragen",
        "graph": "Cijfer",
        "parameters": [
            [
                {
                    "label": "Totaal",
                    "column": "aanvragen",
                    "colour": "orange",
                    "units": "aanvragen"
                }
            ]
        ],
        "header": "Aanvragen",
        "description" : "Het aantal nieuwe schademeldingen dat afgelopen week is binnengekomen.",
        "endpoint": "waardedaling",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol']
    },
    {
        "slug" : "combi_aanvragers",
        "graph": "Cijfer",
        "parameters": [
            [
                {
                    "label": "Totaal",
                    "column": "aanvragers",
                    "colour": "moss",
                    "units": "aanvragers"
                }
            ]
        ],
        "header": "Aanvragers",
        "description" : "Het aantal nieuwe schademeldingen dat afgelopen week is binnengekomen.",
        "endpoint": "waardedaling",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol']
    },
    {
        "slug" : "combi_besluiten",
        "graph": "Cijfer",
        "parameters": [
            [
                {
                    "label": "Totaal",
                    "column": "besluiten",
                    "colour": "blue",
                    "units": "besluiten",
                }
            ]
        ],
        "header": "Besluiten",
        "description" : "Het aantal nieuwe schademeldingen dat afgelopen week is binnengekomen.",
        "endpoint": "waardedaling",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol']
    },
    {
        "slug" : "trend_aanvragen_en_besluiten",
        "graph": "Horizon",
        "parameters": [
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
        "header" : "Ontwikkeling hoeveelheid aanvragen in behandeling",
        "description" : "",
        "endpoint": "waardedaling",
        "segment": "all",
        "publishDate": null,
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-graph-container-trendline','img-graph-container-vertical-padding']
    },
    {
        "slug": "vergoedingen_taart_afgewezen",
        "graph": "PieChartSumV2",
        "parameters":  [
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
        "header" : "Afwijzingen t.o.v. toekenningen",
        "description" : "",
        "endpoint": "waardedaling",
        "segment": 'all',
        "elementClasslist": ['img-graph-container','img-graph-container-4']
    },
    {
        "slug" : "gem_aanvragen",
        "graph": "Cijfer",
        "parameters": [
            [
                {
                    "label": "Gem. aantal aanvragen per adres",
                    "column": "gemiddeld_aantal_aanvragen_per_adres",
                    "colour": "orange",
                    "format": "decimal"
                }
            ]
        ],
        "header": "Gem. aantal aanvragen per adres",
        "description" : "",
        "endpoint": "waardedaling",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4']
    },
    {
        "slug" : "gem_aanvragers",
        "graph": "Cijfer",
        "parameters": [
            [
                {
                    "label": "Gem. aantal aanvragers per adres",
                    "column": "gemiddeld_aantal_aanvragers_per_adres",
                    "colour": "moss",
                    "format": "decimal"
                }
            ]
        ],
        "header" : "Gem. aantal aanvragers per adres",
        "description" : "",
        "endpoint": "waardedaling",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4']
    }
]

import { GraphObject} from '../types/graphObject';

export const taartSchadevergoedingen : GraphObject = {
        "label" : "Taart Schadevergoedingen",
        "slug" : "taart_schadevergoedingen",
        "mapping": [[
            [
                {
                    "label": "Mijnbouwschade",
                    "column": "BEDRAG_SCHADEBEDRAG",
                    "colour": "violet"
                },
                {
                    "label": "Stuwmeerregeling",
                    "column": "BEDRAG_SMR",
                    "colour": "purple"
                },
                {
                    "label": "Bijkomende kosten",
                    "column": "BEDRAG_BIJKOMENDE_KOSTEN",
                    "colour": "green"
                },
                {
                    "label": "Wettelijke rente",
                    "column": "BEDRAG_WETTELIJKE_RENTE",
                    "colour": "red"
                }
            ],
            [
                {
                    "label": "Totaal",
                    "column": "TOTAAL_VERLEEND",
                    "colour": "yellow"
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
                "top": 20,
                "bottom": 40,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 0,
                "bottom": 15,
                "left": 0,
                "right": 0
            },
            "extra": {
                "currencyLabels" : true,
                "legendWidth" : 240,
                "maxHeight" : 320,
                "maxRadius" : 120,
                "innerRadius": 20
            }
        },
        "description" : "",
        "endpoint": "/api/data",
        "segment": "all",
        "publishDate": false
    };

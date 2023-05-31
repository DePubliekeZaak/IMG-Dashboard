import { GraphObject} from '@local/d3_types';

export const taartBezwaren : GraphObject = {
    "label" : "Taart Bezwaren",
    "slug" : "taart_bezwaren",
    "mapping": [
        [
            {
                "label": "Gegrond",
                "column": "BEZWAAR_GEGROND",
                "colour": "brown"
            },
            {
                "label": "Deels gegrond",
                "column": "BEZWAAR_DEELS_GEGROND",
                "colour": "blue"
            },
            {
                "label": "Ongegrond",
                "column": "BEZWAAR_ONGEGROND",
                "colour": "violet"
            },
            {
                "label": "Niet ontvankelijk",
                "column": "BEZWAAR_NIET_ONTVANKELIJK",
                "colour": "purple"
            },
            {
                "label": "Ingetrokken",
                "column": "BEZWAAR_INGETROKKEN",
                "colour": "green"
            },
            {
                "label": "Naar schadeprocedure",
                "column": "BEZWAAR_DOORGEZET_SCHADEP",
                "colour": "red"
            }
        ],
        [
            {
                "label": "Totaal afgehandeld",
                "column": undefined,
                "colour": undefined
            }
        ],
        [
            {
                "label": "In behandeling",
                "column": "BEZWAAR_IN_BEHANDELING",
                "colour": "yellow"
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
            "currencyLabels" : false,
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
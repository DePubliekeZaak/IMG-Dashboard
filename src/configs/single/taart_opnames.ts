import { GraphObject} from '../@local/d3_types';

export const taartOpnames : GraphObject = {
    "label" : "Taart opnames",
    "slug" : "taart_opnames",
    "mapping": [
        [
            {
                'label': 'Aannemersvariant',
                'column': 'OPNAME_AANNEMERSVARIANT',
                'colour': 'green'
            },
            {
                'label': 'Schade-opnemers',
                'column': 'OPNAMES_OPNEMERSVARIANT',
                'colour': 'violet'
            },
            {
                'label': 'CVW 2000',
                'column': 'OPNAMES_CVW2000',
                'colour': 'blue'
            },
            {
                'label': 'Wooncorporaties',
                'column': 'OPNAMES_WOCO',
                'colour': 'yellow'
            },
            {
                'label': 'Regulier',
                'column': ['OPNAMES_REGULIER','OPNAMES_SMR','+'],
                'colour': 'red'
            }
        ],
        [
            {
                'label': 'Totaal',
                'column': undefined
            }
        ]
    ]   ,
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
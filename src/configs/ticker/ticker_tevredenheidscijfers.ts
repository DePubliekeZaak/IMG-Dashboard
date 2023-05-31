import { GraphObject} from '@local/d3_types';

export const tickerTevredenheid : GraphObject[] = [

    {
        "label" : "Tevredenheidscijfer algemeen",
        "slug" : "bol_tevredenheid_algemeen",
        "mapping": [
            [
                {
                    "label": "Algemeen",
                    "column": "doorlopend_cijfer",
                    "colour": "moss"
                }
            ]
        ],
        "config": {
            "graphType": "TickerBol",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : "",
            "padding": {
                "top": 0,
                "bottom": 0,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 0,
                "bottom": 0,
                "left": 0,
                "right": 0
            },
            "extra": {
                "decimal": true,
                "segmentIndicator": false,
                "noUpdate" : true,
                "circleRadius" : 4.5
            }
        },
        "description" : "",
        "endpoint": "tevredenheid",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol']
    },
    {
        "label" : "Tevredenheidscijfer algemeen",
        "slug" : "bol_tevredenheid_algemeen",
        "mapping": [
            [
                {
                    "label": "Fysieke schade",
                    "column": "fysieke_schade_doorlopend_cijfer",
                    "colour": "moss"
                }
            ]
        ],
        "config": {
            "graphType": "TickerBol",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : "",
            "padding": {
                "top": 0,
                "bottom": 0,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 0,
                "bottom": 0,
                "left": 0,
                "right": 0
            },
            "extra": {
                "decimal": true,
                "segmentIndicator": false,
                "noUpdate" : true,
                "circleRadius" : 4.5
            }
        },
        "description" : "",
        "endpoint": "tevredenheid",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol']
    },
    {
        "label" : "Tevredenheidscijfer VES",
        "slug" : "bol_tevredenheid_ves",
        "mapping": [
            [
                {
                    "label": "Vaste vergoeding",
                    "column": "ves_doorlopend_cijfer",
                    "colour": "moss"
                }
            ]
        ],
        "config": {
            "graphType": "TickerBol",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : "",
            "padding": {
                "top": 0,
                "bottom": 0,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 0,
                "bottom": 0,
                "left": 0,
                "right": 0
            },
            "extra": {
                "decimal": true,
                "segmentIndicator": false,
                "noUpdate" : true,
                "circleRadius" : 4.5
            }
        },
        "description" : "",
        "endpoint": "tevredenheid",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol']
    },
    {
        "label" : "Tevredenheidscijfer algemeen",
        "slug" : "bol_tevredenheid_algemeen",
        "mapping": [
            [
                {
                    "label": "Waardedaling",
                    "column": "waardedaling_doorlopend_cijfer",
                    "colour": "moss"
                }
            ]
        ],
        "config": {
            "graphType": "TickerBol",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : "",
            "padding": {
                "top": 0,
                "bottom": 0,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 0,
                "bottom": 0,
                "left": 0,
                "right": 0
            },
            "extra": {
                "decimal": true,
                "segmentIndicator": false,
                "noUpdate" : true,
                "circleRadius" : 4.5
            }
        },
        "description" : "",
        "endpoint": "tevredenheid",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol']
    }
]

import { GraphObject} from '@local/d3_types';

export const stackedAreaDoorlooptijden : GraphObject = {
    "label": "Doorlooptijd afhandeling schademeldingen",
    "slug": "stacked_area_doorlooptijden",
    "mapping": [
        [
            {
                "label": '2 jaar en ouder',
                "column": 'LANGER_DAN_2JAAR',
                "colour": "blue"
            },
            {
                "label": '1-2 jaar oud',
                "column": 'TUSSEN_1_EN_2_JAAR',
                "colour": "brown"
            },
            {
                "label": '0,5-1 jaar oud',
                "column": 'TUSSEN_12_EN_1_JAAR',
                "colour": "green"
            },
            {
                "label": '0,5 jaar oud',
                "column": 'MINDER_DAN_12_JAAR',
                "colour": "yellow"
            }
        ]
    ],
    "config": {
        "graphType": "StackedArea",
        "xScaleType": "time",
        "yScaleType": "linear",
        "xParameter": "_date",
        "yParameter": "TUSSEN_12_EN_1_JAAR",
        "padding": {
            "top": 20,
            "bottom": 40,
            "left": 60,
            "right": 30
        },
        "margin": {
            "top": 60,
            "bottom": 15,
            "left": 0,
            "right": 0
        },
        "extra": {
            "xScaleTicks": "timeMonth",
            "header": "Doorlooptijd afhandeling schademeldingen"
        }
    },
    "description" : "",
    "endpoint": "/api/data",
    "segment": "all",
    "publishDate": false
};
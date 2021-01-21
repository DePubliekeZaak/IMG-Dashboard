import { GraphObject} from '../types/graphObject';

export const bollenProcedureDuur: GraphObject = {

    "label" : "Bollen proceduretijd",
    "slug" : "bollen_procedureduur",
    "mapping": [
        [
            {
                "label": "Binnen 1/2 jaar afgehandeld",
                "column": "percentage_binnen_half_jaar",
                "colour": "moss",
                "units": "%"
            }
        ],
        [
            {
                "label": "Verwachte duur afhandeling",
                "column": "verwacht_aantal_dagen_tussen_melding_en_besluit",
                "colour": "brown",
                "units": "dagen"
            }
        ]
    ],
    "config": {
        "graphType": "CijfersLine",
        "xScaleType" : "time",
        "yScaleType" : "linear",
        "xParameter" : "_date",
        "yParameter" : "",
        "padding": {
            "top": 20,
            "bottom": 40,
            "left": 0,
            "right": 0
        },
        "margin": {
            "top": 120,
            "bottom": 140,
            "left": 10,
            "right": 10
        },
        "extra": {
            "useLineFill": true
        }
    },
    "description" : "",
    "endpoint": "https://img.publikaan.nl/open-data/api/voortgang",
    "segment": "all",
    "publishDate": false
}

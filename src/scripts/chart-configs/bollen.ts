import { GraphObject} from '../types/graphObject';

export const bollen: GraphObject = {

    "label" : "Bollen",
    "slug" : "bollen",
    "mapping": [[
            {
                "label": "Schade-meldingen",
                "column": "nieuwe_schademeldingen",
                "colour": "red"
            },
            {
                "label": "Schade-meldingen",
                "column": "gem_MELDING",
                "colour": "red"
            }
        ],
        [
            {
                "label": "Schade-opnames",
                "column": "nieuwe_schadeopnames",
                "colour": "blue"
            },
            {
                "label": "Schade-opnames",
                "column": "gem_OPNAMES",
                "colour": "blue"
            }
        ],
        [
            {
                "label": "Besluiten",
                "column": "nieuwe_besluiten_regulier",
                "colour": "green"
            },
            {
                "label": "Besluiten",
                "column": "gem_BESCHIKT",
                "colour": "green"
            }
        ],
        [
            {
                "label": "Afgehandelde schade-meldingen",
                "column": "nieuwe_afgehandeld",
                "colour": "purple"
            },
            {
                "label": "Afgehandelde schade-meldingen",
                "column": "gem_AFGEHANDELD_TOTAAL",
                "colour": "purple"
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
            "left": 60,
            "right": 30
        },
        "margin": {
            "top": 0,
            "bottom": 15,
            "left": 0,
            "right": 0
        },
        "extra": {
            "useLineFill": true
        }
    },
    "description" : "",
    "endpoint": "/api/data",
    "segment": "all",
    "publishDate": false
}
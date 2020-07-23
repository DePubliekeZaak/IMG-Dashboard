import { GraphObject} from '../types/graphObject';

export const dashboardReacties : GraphObject[] = [

    {

        "label": "Zienswijzen",
        "slug": "zienswijzen",
        "mapping": [
            [

                {
                    "label": "Akkoord",
                    "column": "nieuw_adviesrapport_akkoord",
                    "colour": "orange"
                },
                {
                    "label": "Zienswijze",
                    "column": "nieuw_adviesrapport_zienswijze",
                    "colour": "moss"
                },
                {
                    "label": "Geen reactie",
                    "column": "nieuw_adviesrapport_geen_reactie",
                    "colour": "lightBlue"
                }
            ]
        ],
        "config": {
            'graphType': 'StackedArea',
            'xScaleType': 'time',
            'yScaleType': 'linear',
            'xParameter': '_date',
            'yParameter': 'nieuw_adviesrapport_akkoord',
            "padding": {
                "top": 20,
                "bottom": 120,
                "left": 60,
                "right": 30
            },
            "margin": {
                "top": 60,
                "bottom": 100,
                "left": 0,
                "right": 0
            },
            "extra": {
                "xScaleTicks": "timeMonth",
                "muniSelect": false,
                "header": "Trend reacties op adviesrapporten"
            }
        },
        "description" : "Schademelders krijgen gelegenheid te reageren op een adviesrapport. Dat heet een zienswijze. Er zijn drie opties: ‘akkoord geven’, een ‘zienswijze indienen’ en ‘niet reageren’. Als iemand niet reageert, dan wordt na twee weken de procedure voortgezet. Bijgaande cijfers betreffen de ingediende zienswijzes én de adviesrapporten waar geen reactie op kwam waar de reactietermijn is verstreken. Het is ook mogelijk die reactietermijn te laten verlengen. Een dergelijke reactie maakt geen onderdeel uit van de hier gepresenteerde cijfers.",
        "endpoint": "https://img.publikaan.nl/open-data/api/reacties",
        "segment": "all",
        "elementClasslist" : ['img-graph-container','img-graph-container-12','img-grap-container-medium-high','img-graph-container-vertical-padding'],
        "publishDate": false
    }

]
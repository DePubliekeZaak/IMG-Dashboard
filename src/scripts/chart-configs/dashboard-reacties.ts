import { GraphObject} from '../types/graphObject';

const pad = 40;
const margin = 140;

export const dashboardReacties : GraphObject[] = [
    {
        "label" : "Tevredenheidscijfer algemeen",
        "slug" : "bol_tevredenheid_algemeen",
        "mapping": [
            [
                {
                    "label": "Tevredenheidscijfer",
                    "column": "doorlopend_cijfer",
                    "colour": "moss"
                },
                {
                    "label": "Tevredenheidscijfer",
                    "column": "maandcijfer",
                    "colour": "moss"
                },
                {
                    "label": "Tevredenheidscijfer",
                    "column": "aantal_respondenten",
                    "colour": "moss"
                }
            ]
        ],
        "config": {
            "graphType": "CijfersMonths",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : "maandcijfer",
            "padding": {
                "top": 20,
                "bottom": pad,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 120,
                "bottom": margin,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "decimal": true,
                "segmentIndicator": false,
                "noUpdate" : true,
                "shape": "block"
            }
        },
        "description" : "Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
        "endpoint": "https://img.publikaan.nl/open-data/api/tevredenheid",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-graph-container-bol']
    },
    {
        "label" : "Tevredenheidscijfer fysieke schade",
        "slug" : "bol_tevredenheid_fysieke_schade",
        "mapping": [
            [
                {
                    "label": "Fysieke schade",
                    "column": "fysieke_schade_doorlopend_cijfer",
                    "colour": "orange"
                },
                {
                    "label": "Tevredenheidscijfer",
                    "column": "fysieke_schade_maandcijfer",
                    "colour": "orange"
                },
                {
                    "label": "Tevredenheidscijfer",
                    "column": "fysieke_schade_aantal_respondenten_doorlopend",
                    "colour": "orange"
                }
            ]
        ],
        "config": {
            "graphType": "CijfersMonths",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : "fysieke_schade_maandcijfer",
            "padding": {
                "top": 20,
                "bottom": pad,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 120,
                "bottom": margin,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "decimal": true,
                "segmentIndicator": false,
                "noUpdate" : true,
                "shape": "block"
            }
        },
        "description" : "Het betreft hier een doorlopend gemiddelde gebaseerd op alle reacties die sinds de start van de meting is binnengekomen. Er wordt daarbij per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Onder dit gemiddelde rapportcijfer over de gehele periode, staat het doorlopend gemiddelde rapportcijfer voor die maand weergegeven. Het gemiddelde rapportcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='fysieke_schade_aantal_respondenten_doorlopend'>xxxxx</span> reacties.",
        "endpoint": "https://img.publikaan.nl/open-data/api/tevredenheid",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-graph-container-bol']
    },
    {
        "label" : "Tevredenheidscijfer waardedaling",
        "slug" : "bol_tevredenheid_waardedaling",
        "mapping": [
            [
                {
                    "label": "Waardedaling",
                    "column": "waardedaling_doorlopend_cijfer",
                    "colour": "blue"
                },
                {
                    "label": "Tevredenheidscijfer",
                    "column": "waardedaling_maandcijfer",
                    "colour": "blue"
                },
                {
                    "label": "Tevredenheidscijfer",
                    "column": "waardedaling_aantal_respondenten_doorlopend",
                    "colour": "blue"
                }
            ]
        ],
        "config": {
            "graphType": "CijfersMonths",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : "waardedaling_maandcijfer",
            "padding": {
                "top": 20,
                "bottom": pad,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 120,
                "bottom": margin,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "decimal": true,
                "segmentIndicator": false,
                "noUpdate" : true,
                "shape": "block"
            }
        },
        "description" : " Het betreft hier een doorlopend gemiddelde gebaseerd op alle reacties die sinds de start van de meting is binnengekomen. Er wordt daarbij per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)”  Onder dit gemiddelde rapportcijfer over de gehele periode, staat het doorlopend gemiddelde rapportcijfer voor die maand weergegeven. Het gemiddelde rapportcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='waardedaling_aantal_respondenten_doorlopend'>xxxxx</span> reacties.",
        "endpoint": "https://img.publikaan.nl/open-data/api/tevredenheid",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-graph-container-bol']
    },
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

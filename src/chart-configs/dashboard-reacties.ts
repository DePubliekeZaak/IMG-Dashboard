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
                    "label": "Doorlopend tevredenheidscijfer",
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
            "graphType": "Cijfer",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : "maandcijfer",
            "padding": {
                "top": 20,
                "bottom": 0,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 0,
                "bottom": margin,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "decimal": true,
                "segmentIndicator": false,
                "noUpdate" : true,
                "shape": "block",
                "noRespondents": true
            }
        },
        "description" : "Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.<div class='formula'></div></div>",
        "endpoint": "tevredenheid",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-ipad-6','img-graph-container-bol']
    },
    // {
    //     "label" : "Tevredenheidscijfer algemeen",
    //     "slug" : "bol_tevredenheid_algemeen_2",
    //     "mapping": [
    //         [
    //             {
    //                 "label": "Berekening doorlopend tevredenheidscijfer",
    //                 "column": "doorlopend_cijfer",
    //                 "colour": "moss"
    //             }
    //         ]
    //     ],
    //     "config": {
    //         "graphType": "TevredenheidFormule",
    //         "xScaleType" : "",
    //         "yScaleType" : "",
    //         "xParameter" : "",
    //         "yParameter" : "",
    //         "padding": {
    //             "top": 20,
    //             "bottom": pad,
    //             "left": 0,
    //             "right": 0
    //         },
    //         "margin": {
    //             "top": 120,
    //             "bottom": margin,
    //             "left": 10,
    //             "right": 10
    //         },
    //         "extra": {
    //             "segmentIndicator": false,
    //             "noUpdate" : true
    //         }
    //     },
    //     "description" : "Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
    //     "endpoint": "waardedaling",
    //     "segment": "all",
    //     "elementClasslist": ['img-graph-container','img-graph-container-4','img-graph-container-bol']
    // },
    {
        "label" : "Rapportcijfers per maand",
        "slug" : "bol_tevredenheid_algemeen_3",
        "mapping": [
            [
                {
                    "label": "Tevredenheidscijfer per maand",
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
            "graphType": "ShortTrend",
            "xScaleType" : "band",
            "yScaleType" : "linear",
            "xParameter" : "_month",
            "yParameter" : "maandcijfer",
            "padding": {
                "top": 20,
                "bottom": pad,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 0,
                "bottom": margin,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "decimal": true,
                "segmentIndicator": false,
                "noUpdate" : true,
                "shape": "block",
                "paddingInner" : 0,
                "paddingOuter" : 0,
                "axisInMonths" : true
            }
        },
        "description" : "Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
        "endpoint": "voortgang",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-ipad-6','img-graph-container-shorttrend']
    },
    {   "label": "Tevredenheid ratings",
        "slug": "ratings_fs_doorlopend",
        "mapping": [
            [
                [
                    {
                        "label": "Rapportcijfer waardedaling",
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
                    },
                    {
                        "label": "Tevredenheidscijfer",
                        "column": "fysieke_schade_aantal_respondenten",
                        "colour": "orange"
                    }
                ],
                [
                    {
                        "label": "1",
                        "column": "fysieke_schade_doorlopend_rapportcijfer_1",
                        "colour": "orange"
                    },
                    {
                        "label": "2",
                        "column": "fysieke_schade_doorlopend_rapportcijfer_2",
                        "colour": "orange"
                    },
                    {
                        "label": "3",
                        "column": "fysieke_schade_doorlopend_rapportcijfer_3",
                        "colour": "orange"
                    },
                    {
                        "label": "4",
                        "column": "fysieke_schade_doorlopend_rapportcijfer_4",
                        "colour": "orange"
                    },
                    {
                        "label": "5",
                        "column": "fysieke_schade_doorlopend_rapportcijfer_5",
                        "colour": "orange"
                    },
                    {
                        "label": "6",
                        "column": "fysieke_schade_doorlopend_rapportcijfer_6",
                        "colour": "lightBlue"
                    },
                    {
                        "label": "7",
                        "column": "fysieke_schade_doorlopend_rapportcijfer_7",
                        "colour": "lightBlue"
                    },
                    {
                        "label": "8",
                        "column": "fysieke_schade_doorlopend_rapportcijfer_8",
                        "colour": "moss"
                    },
                    {
                        "label": "9",
                        "column": "fysieke_schade_doorlopend_rapportcijfer_9",
                        "colour": "moss"
                    },
                    {
                        "label": "10",
                        "column": "fysieke_schade_doorlopend_rapportcijfer_10",
                        "colour": "moss"
                    }
            ],
            [
                {
                    "label": "1",
                    "column": "fysieke_schade_maand_rapportcijfer_1",
                    "colour": "orange"
                },
                {
                    "label": "2",
                    "column": "fysieke_schade_maand_rapportcijfer_2",
                    "colour": "orange"
                },
                {
                    "label": "3",
                    "column": "fysieke_schade_maand_rapportcijfer_3",
                    "colour": "orange"
                },
                {
                    "label": "4",
                    "column": "fysieke_schade_maand_rapportcijfer_4",
                    "colour": "orange"
                },
                {
                    "label": "5",
                    "column": "fysieke_schade_maand_rapportcijfer_5",
                    "colour": "orange"
                },
                {
                    "label": "6",
                    "column": "fysieke_schade_maand_rapportcijfer_6",
                    "colour": "lightBlue"
                },
                {
                    "label": "7",
                    "column": "fysieke_schade_maand_rapportcijfer_7",
                    "colour": "lightBlue"
                },
                {
                    "label": "8",
                    "column": "fysieke_schade_maand_rapportcijfer_8",
                    "colour": "moss"
                },
                {
                    "label": "9",
                    "column": "fysieke_schade_maand_rapportcijfer_9",
                    "colour": "moss"
                },
                {
                    "label": "10",
                    "column": "fysieke_schade_maand_rapportcijfer_10",
                    "colour": "moss"
                },
            ]]
        ],
        "config": {
            "graphType": "KTORatings",
            "xScaleType": "linear",
            "yScaleType": "band",
            "xParameter": "value",
            "yParameter": "label",
            "padding": {
                "top": 20,
                "bottom": 0,
                "left": 20,
                "right": 80
            },
            "margin": {
                "top": 20,
                "bottom": 40,
                "left": 0,
                "right": 0
            },
            "extra": {
                "slug": "ratings_fs_doorlopend",
                "header" : "Rapportcijfers besluiten fysieke schade",
                "legend" : true,
                "paddingInner" : .25,
                "paddingOuter" : .25,
                "columnForAverage" : "fysieke_schade_aantal_respondenten_doorlopend",
                "decimal" : true,
                "noRespondents": true
            }
        },
        "description" : "",
        "endpoint": "waardedaling",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-ipad-6','img-graph-rating','img-graph-container-vertical-padding']
    },
    {   "label": "Tevredenheid ratings",
        "slug": "ratings_w_doorlopend",
        "mapping": [
            [[
                {
                    "label": "Rapportcijfer waardedaling",
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
                },
                {
                    "label": "Tevredenheidscijfer",
                    "column": "waardedaling_aantal_respondenten",
                    "colour": "blue"
                }
            ],
            [
                {
                    "label": "1",
                    "column": "waardedaling_doorlopend_rapportcijfer_1",
                    "colour": "orange"
                },
                {
                    "label": "2",
                    "column": "waardedaling_doorlopend_rapportcijfer_2",
                    "colour": "orange"
                },
                {
                    "label": "3",
                    "column": "waardedaling_doorlopend_rapportcijfer_3",
                    "colour": "orange"
                },
                {
                    "label": "4",
                    "column": "waardedaling_doorlopend_rapportcijfer_4",
                    "colour": "orange"
                },
                {
                    "label": "5",
                    "column": "waardedaling_doorlopend_rapportcijfer_5",
                    "colour": "orange"
                },
                {
                    "label": "6",
                    "column": "waardedaling_doorlopend_rapportcijfer_6",
                    "colour": "lightBlue"
                },
                {
                    "label": "7",
                    "column": "waardedaling_doorlopend_rapportcijfer_7",
                    "colour": "lightBlue"
                },
                {
                    "label": "8",
                    "column": "waardedaling_doorlopend_rapportcijfer_8",
                    "colour": "moss"
                },
                {
                    "label": "9",
                    "column": "waardedaling_doorlopend_rapportcijfer_9",
                    "colour": "moss"
                },
                {
                    "label": "10",
                    "column": "waardedaling_doorlopend_rapportcijfer_10",
                    "colour": "moss"
                },
            ],
            [
                {
                    "label": "1",
                    "column": "waardedaling_maand_rapportcijfer_1",
                    "colour": "orange"
                },
                {
                    "label": "2",
                    "column": "waardedaling_maand_rapportcijfer_2",
                    "colour": "orange"
                },
                {
                    "label": "3",
                    "column": "waardedaling_maand_rapportcijfer_3",
                    "colour": "orange"
                },
                {
                    "label": "4",
                    "column": "waardedaling_maand_rapportcijfer_4",
                    "colour": "orange"
                },
                {
                    "label": "5",
                    "column": "waardedaling_maand_rapportcijfer_5",
                    "colour": "lightBlue"
                },
                {
                    "label": "6",
                    "column": "waardedaling_maand_rapportcijfer_6",
                    "colour": "lightBlue"
                },
                {
                    "label": "7",
                    "column": "waardedaling_maand_rapportcijfer_7",
                    "colour": "lightBlue"
                },
                {
                    "label": "8",
                    "column": "waardedaling_maand_rapportcijfer_8",
                    "colour": "moss"
                },
                {
                    "label": "9",
                    "column": "waardedaling_maand_rapportcijfer_9",
                    "colour": "moss"
                },
                {
                    "label": "10",
                    "column": "waardedaling_maand_rapportcijfer_10",
                    "colour": "moss"
                },
            ]
            ]
        ],
        "config": {
            "graphType": "KTORatings",
            "xScaleType": "linear",
            "yScaleType": "band",
            "xParameter": "value",
            "yParameter": "label",
            "padding": {
                "top": 20,
                "bottom": 0,
                "left": 20,
                "right": 80
            },
            "margin": {
                "top": 20,
                "bottom": 40,
                "left": 0,
                "right": 0
            },
            "extra": {
                "slug": "ratings_w_doorlopend",
                "header" : "Rapportcijfers besluiten waardedaling",
                "legend" : true,
                "paddingInner" : .25,
                "paddingOuter" : .25,
                "columnForAverage" : "waardedaling_aantal_respondenten_doorlopend",
                "decimal": true,
                "noRespondents": true
            }
        },
        "description" : "",
        "endpoint": "tevredenheid",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-ipad-6','img-graph-rating','img-graph-container-vertical-padding']
    },
    {   "label": "Tevredenheid ratings",
        "slug": "ratings_w_ves",
        "mapping": [
            [[
                {
                    "label": "Rapportcijfer waardedaling",
                    "column": "ves_doorlopend_cijfer",
                    "colour": "blue"
                },
                {
                    "label": "Tevredenheidscijfer",
                    "column": "ves_maandcijfer",
                    "colour": "blue"
                },
                {
                    "label": "Tevredenheidscijfer",
                    "column": "ves_aantal_respondenten_doorlopend",
                    "colour": "blue"
                },
                {
                    "label": "Tevredenheidscijfer",
                    "column": "ves_aantal_respondenten",
                    "colour": "blue"
                }
            ],
                [
                    {
                        "label": "1",
                        "column": "ves_doorlopend_rapportcijfer_1",
                        "colour": "orange"
                    },
                    {
                        "label": "2",
                        "column": "ves_doorlopend_rapportcijfer_2",
                        "colour": "orange"
                    },
                    {
                        "label": "3",
                        "column": "ves_doorlopend_rapportcijfer_3",
                        "colour": "orange"
                    },
                    {
                        "label": "4",
                        "column": "ves_doorlopend_rapportcijfer_4",
                        "colour": "orange"
                    },
                    {
                        "label": "5",
                        "column": "ves_doorlopend_rapportcijfer_5",
                        "colour": "orange"
                    },
                    {
                        "label": "6",
                        "column": "ves_doorlopend_rapportcijfer_6",
                        "colour": "lightBlue"
                    },
                    {
                        "label": "7",
                        "column": "ves_doorlopend_rapportcijfer_7",
                        "colour": "lightBlue"
                    },
                    {
                        "label": "8",
                        "column": "ves_doorlopend_rapportcijfer_8",
                        "colour": "moss"
                    },
                    {
                        "label": "9",
                        "column": "ves_doorlopend_rapportcijfer_9",
                        "colour": "moss"
                    },
                    {
                        "label": "10",
                        "column": "ves_doorlopend_rapportcijfer_10",
                        "colour": "moss"
                    },
                ],
                [
                    {
                        "label": "1",
                        "column": "ves_maand_rapportcijfer_1",
                        "colour": "orange"
                    },
                    {
                        "label": "2",
                        "column": "ves_maand_rapportcijfer_2",
                        "colour": "orange"
                    },
                    {
                        "label": "3",
                        "column": "ves_maand_rapportcijfer_3",
                        "colour": "orange"
                    },
                    {
                        "label": "4",
                        "column": "ves_maand_rapportcijfer_4",
                        "colour": "orange"
                    },
                    {
                        "label": "5",
                        "column": "ves_maand_rapportcijfer_5",
                        "colour": "lightBlue"
                    },
                    {
                        "label": "6",
                        "column": "ves_maand_rapportcijfer_6",
                        "colour": "lightBlue"
                    },
                    {
                        "label": "7",
                        "column": "ves_maand_rapportcijfer_7",
                        "colour": "lightBlue"
                    },
                    {
                        "label": "8",
                        "column": "ves_maand_rapportcijfer_8",
                        "colour": "moss"
                    },
                    {
                        "label": "9",
                        "column": "ves_maand_rapportcijfer_9",
                        "colour": "moss"
                    },
                    {
                        "label": "10",
                        "column": "ves_maand_rapportcijfer_10",
                        "colour": "moss"
                    },
                ]
            ]
        ],
        "config": {
            "graphType": "KTORatings",
            "xScaleType": "linear",
            "yScaleType": "band",
            "xParameter": "value",
            "yParameter": "label",
            "padding": {
                "top": 20,
                "bottom": 0,
                "left": 20,
                "right": 80
            },
            "margin": {
                "top": 20,
                "bottom": 40,
                "left": 0,
                "right": 0
            },
            "extra": {
                "slug": "ratings_ves_doorlopend",
                "header" : "Rapportcijfers vaste vergoeding",
                "legend" : true,
                "paddingInner" : .25,
                "paddingOuter" : .25,
                "columnForAverage" : "ves_aantal_respondenten_doorlopend",
                "decimal": true,
                "noRespondents": true
            }
        },
        "description" : "",
        "endpoint": "tevredenheid",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-ipad-6','img-graph-rating','img-graph-container-vertical-padding']
    },
    {   "label": "Tevredenheid door de tijd",
        "slug": "trend_tevredenheid",
        "mapping": [
            [
                {
                    "label": "Gewogen gemiddelde",
                    "column": "maandcijfer",
                    "colour": "moss",
                    "short": "gem"
                },
                {
                    "label": "Fysieke schade",
                    "column": "fysieke_schade_maandcijfer",
                    "colour": "orange",
                    "short": "fs"
                },
                {
                    "label": "Waardedaling",
                    "column": "waardedaling_maandcijfer",
                    "colour": "blue",
                    "short": "wd"
                }
            ]
        ],
        "config": {
            "graphType": "TrendLine",
            "xScaleType": "time",
            "yScaleType": "linear",
            "xParameter": "_date",
            "yParameter": "maandcijfer",
            "padding": {
                "top": 20,
                "bottom": 40,
                "left": 40,
                "right": 0
            },
            "margin": {
                "top": 80,
                "bottom": 100,
                "left": 0,
                "right": 0
            },
            "extra": {
                "xScaleTicks": "timeMonth",
                "useLineFill": true,
                "header" : "Trend tevredenheidscijfers",
                "segmentIndicator": false,
                "legend" : true,
                "hasFocus": true
            }
        },
        "description" : "",
        "endpoint": "tevredenheid",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-graph-container-trendline','img-graph-container-vertical-padding']
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
        "endpoint": "reacties",
        "segment": "all",
        "elementClasslist" : ['img-graph-container','img-graph-container-12','img-grap-container-medium-high','img-graph-container-vertical-padding'],
        "publishDate": false
    }

]

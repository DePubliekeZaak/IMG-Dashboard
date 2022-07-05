import { IGraphControllerV2 } from '../charts/graph-v2';
import { GraphObject} from '../types/graphObject';
import { IGraphMapping } from '../types/mapping';

const pad = 40;
const margin = 140;

export const dashboardReacties : (GraphObject|IGraphMapping)[] = [
    {
        "slug" : "bol_tevredenheid_algemeen",
        "graph": "CijferDecimalPlus",
        "parameters": [
            [
                {
                    "label": "Doorlopend tevredenheidscijfer",
                    "column": "doorlopend_cijfer",
                    "colour": "moss"
                }
            ],
            [
                {
                    "label": "Tevredenheidscijfer",
                    "column": "aantal_respondenten",
                    "colour": "moss"
                }
            ]
        ],
        "header": "Doorlopend tevredenheidscijfer",
        "description" : "Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.<div class='formula'></div></div>",
        "endpoint": "tevredenheid",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-ipad-6','img-graph-container-bol']
    },
    {
        "slug" : "bol_tevredenheid_algemeen_3",
        "graph": "ShortTrend",
        "args": ["_month"],
        "parameters": [
            [
                // {
                //     "label": "Tevredenheidscijfer per maand",
                //     "column": "doorlopend_cijfer",
                //     "colour": "moss"
                // },
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
        "header": "Tevredenheidscijfer per maand",
        "description" : "Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
        "endpoint": "voortgang",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-ipad-6','img-graph-container-shorttrend']
    },
    {   
        "slug": "ratings_fs_doorlopend",
        "graph": "KTORatings",
        "args" : ["fysieke_schade_aantal_respondenten_doorlopend","fysieke_schade_aantal_respondenten"],
        "parameters": 
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
            ]
        ],
        "header" : "Rapportcijfers besluiten fysieke schade",
        "description" : "",
        "endpoint": "waardedaling",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-ipad-6','img-graph-rating','img-graph-container-vertical-padding']
    },
    {   
        "slug": "ratings_w_doorlopend",
        "graph": "KTORatings",
        "args": ["waardedaling_aantal_respondenten_doorlopend"],
        "parameters": [
            [
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
        ],
    
        "header" : "Rapportcijfers besluiten waardedaling",
        "description" : "",
        "endpoint": "tevredenheid",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-ipad-6','img-graph-rating','img-graph-container-vertical-padding']
    },
    {   
        "slug": "ratings_w_ves",
        "graph": "KTORatings",
        "args": ["ves_aantal_respondenten_doorlopend"],
        "parameters": [
            [
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
        ],
        "header" : "Rapportcijfers vaste vergoeding",
        "description" : "",
        "endpoint": "tevredenheid",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-ipad-6','img-graph-rating','img-graph-container-vertical-padding']
    },
    // {   
    //     "slug": "ratings_w_ims",
    //     "graph": "KTORatings",
    //     "args": ["ims_aantal_respondenten_doorlopend"],
    //     "parameters": [
    //         [
    //             {
    //                 "label": "Rapportcijfer waardedaling",
    //                 "column": "ims_doorlopend_cijfer",
    //                 "colour": "blue"
    //             },
    //             {
    //                 "label": "Tevredenheidscijfer",
    //                 "column": "ims_maandcijfer",
    //                 "colour": "blue"
    //             },
    //             {
    //                 "label": "Tevredenheidscijfer",
    //                 "column": "ims_aantal_respondenten_doorlopend",
    //                 "colour": "blue"
    //             },
    //             {
    //                 "label": "Tevredenheidscijfer",
    //                 "column": "ims_aantal_respondenten",
    //                 "colour": "blue"
    //             }
    //         ],
    //             [
    //                 {
    //                     "label": "1",
    //                     "column": "ims_doorlopend_rapportcijfer_1",
    //                     "colour": "orange"
    //                 },
    //                 {
    //                     "label": "2",
    //                     "column": "ims_doorlopend_rapportcijfer_2",
    //                     "colour": "orange"
    //                 },
    //                 {
    //                     "label": "3",
    //                     "column": "ims_doorlopend_rapportcijfer_3",
    //                     "colour": "orange"
    //                 },
    //                 {
    //                     "label": "4",
    //                     "column": "ims_doorlopend_rapportcijfer_4",
    //                     "colour": "orange"
    //                 },
    //                 {
    //                     "label": "5",
    //                     "column": "ims_doorlopend_rapportcijfer_5",
    //                     "colour": "orange"
    //                 },
    //                 {
    //                     "label": "6",
    //                     "column": "ims_doorlopend_rapportcijfer_6",
    //                     "colour": "lightBlue"
    //                 },
    //                 {
    //                     "label": "7",
    //                     "column": "ims_doorlopend_rapportcijfer_7",
    //                     "colour": "lightBlue"
    //                 },
    //                 {
    //                     "label": "8",
    //                     "column": "ims_doorlopend_rapportcijfer_8",
    //                     "colour": "moss"
    //                 },
    //                 {
    //                     "label": "9",
    //                     "column": "ims_doorlopend_rapportcijfer_9",
    //                     "colour": "moss"
    //                 },
    //                 {
    //                     "label": "10",
    //                     "column": "ims_doorlopend_rapportcijfer_10",
    //                     "colour": "moss"
    //                 },
    //             ],
    //             [
    //                 {
    //                     "label": "1",
    //                     "column": "ims_maand_rapportcijfer_1",
    //                     "colour": "orange"
    //                 },
    //                 {
    //                     "label": "2",
    //                     "column": "ims_maand_rapportcijfer_2",
    //                     "colour": "orange"
    //                 },
    //                 {
    //                     "label": "3",
    //                     "column": "ims_maand_rapportcijfer_3",
    //                     "colour": "orange"
    //                 },
    //                 {
    //                     "label": "4",
    //                     "column": "ims_maand_rapportcijfer_4",
    //                     "colour": "orange"
    //                 },
    //                 {
    //                     "label": "5",
    //                     "column": "ims_maand_rapportcijfer_5",
    //                     "colour": "lightBlue"
    //                 },
    //                 {
    //                     "label": "6",
    //                     "column": "ims_maand_rapportcijfer_6",
    //                     "colour": "lightBlue"
    //                 },
    //                 {
    //                     "label": "7",
    //                     "column": "ims_maand_rapportcijfer_7",
    //                     "colour": "lightBlue"
    //                 },
    //                 {
    //                     "label": "8",
    //                     "column": "ims_maand_rapportcijfer_8",
    //                     "colour": "moss"
    //                 },
    //                 {
    //                     "label": "9",
    //                     "column": "ims_maand_rapportcijfer_9",
    //                     "colour": "moss"
    //                 },
    //                 {
    //                     "label": "10",
    //                     "column": "ims_maand_rapportcijfer_10",
    //                     "colour": "moss"
    //                 },
    //             ]
    //     ],
    //     "header" : "Rapportcijfers immateriele schade",
    //     "description" : "",
    //     "endpoint": "tevredenheid",
    //     "segment": "all",
    //     "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-ipad-6','img-graph-rating','img-graph-container-vertical-padding']
    // },
    {   
        "slug": "trend_tevredenheid",
        "graph": "TrendLine",
        "args": [],
        "parameters": [
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
        "header" : "Trend tevredenheidscijfers",
        "description" : "",
        "endpoint": "tevredenheid",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-graph-container-trendline','img-graph-container-vertical-padding']
    },
    {
        "slug": "zienswijzen",
        'graph': 'StackedArea',
        'args' : [],
        "parameters": [
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
        "header": "Trend reacties op adviesrapporten",
        "description" : "Schademelders krijgen gelegenheid te reageren op een adviesrapport. Dat heet een zienswijze. Er zijn drie opties: ‘akkoord geven’, een ‘zienswijze indienen’ en ‘niet reageren’. Als iemand niet reageert, dan wordt na twee weken de procedure voortgezet. Bijgaande cijfers betreffen de ingediende zienswijzes én de adviesrapporten waar geen reactie op kwam waar de reactietermijn is verstreken. Het is ook mogelijk die reactietermijn te laten verlengen. Een dergelijke reactie maakt geen onderdeel uit van de hier gepresenteerde cijfers.",
        "endpoint": "reacties",
        "segment": "all",
        "elementClasslist" : ['img-graph-container','img-graph-container-12','img-grap-container-medium-high','img-graph-container-vertical-padding'],
        "publishDate": null
    }

]

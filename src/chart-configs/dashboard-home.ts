import { GraphObject} from '../types/graphObject';
import { IGraphMapping } from '../types/mapping';

 const pad = 40;
 const margin = 140;

export const dashboardHome : (GraphObject|IGraphMapping)[] = [
    {
        "slug" : "alle_regelingen_header",
        "graph": "Grid",
        "parameters": [
            [
                {
                    "label": "Alle regelingen",
                    "column": "vv",
                    "colour": "blue"
                }
            ]
        ],
        "header": "Alle regelingen",
        "description" : "",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12'],
        "children": [
            {
                "slug" : "alle_regelingen_meldingen",
                "graph": "CijferV2",
                "parameters": [
                    [
                        {
                            "label": "Totaal uitgekeerd",
                            "column": "alle_regelingen_meldingen",
                            "colour": "blue",
                            "units" : "meldingen"
                        }
                    ]
                ],
                "header": "",
                "description" : "",
                "endpoint": "meldingen",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-width-6',
                    'img-graph-grid-column-start-1',
                    'img-graph-grid-width-3',
                    'img-graph-grid-row-start-1'
                ]
            },
            {
                "slug" : "ims_uitgekeerd",
                "graph": "CijferV2",
                "parameters": [
                    [
                        {
                            "label": "Totaal afgehandeld",
                            "column": "alle_regelingen_afgehandeld",
                            "colour": "moss",
                            "units" : "afgehandeld"
                        }
                    ]
                ],
                "header": "",
                "description" : "",
                "endpoint": "voortgang",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-width-6',
                    'img-graph-grid-tablet-column-start-7',
                    'img-graph-grid-column-start-4',
                    'img-graph-grid-width-3',
                    'img-graph-grid-row-start-1'
                ]
            },
            {
                "slug" : "ims_uitgekeerd",
                "graph": "CijferV2",
                "parameters": [
                    [
                        {
                            "label": "Totaal uitgekeerd",
                            "column": "alle_regelingen_totaal_verleend",
                            "colour": "lightBlue",
                            "format": "currency",
                            "units": "uitgekeerd"
                        }
                    ]
                ],
                "header": "",
                "description" : "",
                "endpoint": "vergoedingen",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-column-start-1',
                    'img-graph-grid-tablet-width-6',
                    'img-graph-grid-column-start-7',
                    'img-graph-grid-width-3',
                    'img-graph-grid-height-3'
                ]
            },
            {
                "slug" : "bol_tevredenheid_algemeen",
                "graph": "CijferV2",
                "args" : [],
                "parameters": [
                    [
                        {
                            "label": "Tevredenheidscijfer",
                            "column": "doorlopend_cijfer",
                            "colour": "orange",
                            "format": "decimal",
                            "units": "waardering"
                        }
                    ]
                ],
                "header": "",
                "description" : "", //"Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
                "endpoint": "tevredenheid",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-column-start-7',
                    'img-graph-grid-tablet-width-6',
                    'img-graph-grid-column-start-10', 
                    'img-graph-grid-width-3'
                ]
            }
        ]
    },
    {
        "slug" : "alle_regelingen_header",
        "graph": "Grid",
        "parameters": [
            [
                {
                    "label": "Alle regelingen",
                    "column": "vv",
                    "colour": "blue"
                }
            ]
        ],
        "header": "Fysieke schade",
        "description" : "",
        "linkLabel" : "Meer over fysieke schade",
        "linkTopic" : "fysieke_schade",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12'],
        "children": [

            {
                "slug" : "fs_meldingen",
                "graph": "CijferV2",
                "parameters": [
                    [
                        {
                            "label": "Totaal uitgekeerd",
                            "column": "schademeldingen",
                            "colour": "orange",
                            "units" : "meldingen"
                        } 
                    ]
                ],
                "header": "",
                "description" : "",
                "endpoint": "meldingen",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-width-4',
                    'img-graph-grid-column-start-1',
                    'img-graph-grid-width-3',
                    'img-graph-grid-row-start-1',
                    'img-graph-grid-height-2'
                ]
            },
            {
                "slug" : "fs_meldingen",
                "graph": "CijferV2",
                "parameters": [
                    [
                        {
                            "label": "Afgehandeld",
                            "column": "afgehandeld",
                            "colour": "moss",
                            "units" : "afgehandeld"
                        }
                    ]
                ],
                "header": "",
                "description" : "",
                "endpoint": "meldingen",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-width-4',
                    'img-graph-grid-column-start-1',
                    'img-graph-grid-column-end-4',
                    'img-graph-grid-row-start-3',
                    'img-graph-grid-height-2'
                ]
            },
            {
                "slug" : "fs_meldingen",
                "graph": "CijferV2",
                "parameters": [
                    [
                        {
                            "label": "In behandeling",
                            "column": "in_behandeling",
                            "colour": "blue",
                            "units" : "in behandeling"
                        }   
                    ]
                ],
                "header": "",
                "description" : "",
                "endpoint": "meldingen",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-width-4',
                    'img-graph-grid-column-start-1',
                    'img-graph-grid-width-3',
                    'img-graph-grid-row-start-5',
                    'img-graph-grid-height-2'
                ]
            },
            {   
                
                "slug": "trend_in_behandeling",
                "graph": "TrendBars",
                "parameters": [
                    [
                        {
                            "label": "Schademeldingen",
                            "column": "schademeldingen",
                            "colour": "orange",
                            "short": "meldingen"
                        },
                        {
                            "label": "In behandeling",
                            "column": "in_behandeling",
                            "colour": "blue",
                            "short": "in beh."
                        },
                    ]
                ],
                "header" : "",
                "description" : "",
                "endpoint": "voortgang",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-column-start-5',
                    'img-graph-grid-tablet-width-7',
                    'img-graph-grid-column-start-4',
                    'img-graph-grid-width-6',
                    'img-graph-grid-row-start-1',
                    'img-graph-grid-height-6',
                    'img-mobile-margin-vertical'
                ]
            },
            {
                "slug" : "bol_tevredenheid_algemeen",
                "graph": "CijferV2",
                "args" : [],
                "parameters": [
                    [
                        {
                            "label": "Uitgekeerd",
                            "column": "fysieke_schade_totaal_verleend",
                            "colour": "lightBlue",
                            "format": "currency",
                            "units" : "uitgekeerd"
                        }
                    ],
                ],
                "header": "",
                "description" : "", //"Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
                "endpoint": "vergoedingen",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-column-start-1',
                    'img-graph-grid-tablet-width-4',
                    'img-graph-grid-tablet-row-start-7',
                    'img-graph-grid-column-start-10',
                    'img-graph-grid-width-3',
                    'img-graph-grid-row-start-1',
                    'img-graph-grid-height-2'
                ]
            },
            {
                "slug" : "bol_tevredenheid_algemeen",
                "graph": "Cijfer",
                "args" : [],
                "parameters": [
                    [
                        {
                            "label": "Tevredenheidscijfer",
                            "column": "fysieke_schade_doorlopend_cijfer",
                            "colour": "orange",
                            "format": "decimal",
                            "units" : "waardering"
                        },
                        {
                            "label": "Tevredenheidscijfer",
                            "column": "fysieke_schade_maandcijfer",
                            "colour": "orange"
                        },
                        {
                            "label": "Tevredenheidscijfer",
                            "column": "fysieke_schade_aantal_respondenten",
                            "colour": "orange"
                        }
                    ]
                ],
                "header": "",
                "description" : "", //"Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
                "endpoint": "tevredenheid",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-column-start-7',
                    'img-graph-grid-tablet-width-3',
                    'img-graph-grid-tablet-row-start-7',
                    'img-graph-grid-column-start-10',
                    'img-graph-grid-width-3',
                    'img-graph-grid-row-start-3',
                    'img-graph-grid-height-4'
                ]
            },
            {
                "slug" : "fs_flow",
                "graph": "FlowFsV1",
                "parameters": [
                    [
                        {
                            "label": "Vaste vergoeding",
                            "column": "ves_aanvragen_oud",
                            "colour": "blue",
                            "units" : "aanvragen"
                        },
                        {
                            "label": "Vaste vergoeding",
                            "column": "ves_aanvragen",
                            "colour": "blue",
                            "units" : "aanvragen"
                        },
                        {
                            "label": "Daadwerkelijk herstel",
                            "column": "dh_aanvragen",
                            "colour": "green",
                            "units" : "aanvragen"
                        },
                        {
                            "label": "Causaal maatwerk",
                            "column": "cm_aanvragen",
                            "colour": "orange",
                            "units" : "aanvragen"
                        },
                        
                    ]
                ],
                "header": "",
                "description" : "",
                "endpoint": "fysieke_schade",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    // 'img-graph-grid-tablet-width-12',
                    'img-graph-grid-column-start-1',
                    'img-graph-grid-width-12',
                    'img-graph-grid-row-start-7',
                    'img-graph-grid-tablet-row-start-11',
                    'img-graph-grid-height-12',
                    'img-graph-phone-hide'
                ]
            },
            {
                "slug" : "fs_nieuw_beleid",
                "graph": "FlowNewV1",
                "parameters": [
                    [
                    ]
                ],
                "header": "Nieuw beleid",
                "description" : "",
                "endpoint": "fysieke_schade",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-width-12',
                    'img-graph-grid-column-start-1',
                    'img-graph-grid-width-12',
                    'img-graph-grid-row-start-12',
                    'img-graph-grid-tablet-row-start-16',
                    'img-graph-grid-height-1',
                    
                ]
            },
            {
                "slug" : "fs_ves_oud",
                "graph": "CijfersV1",
                "parameters": [
                    [
                        {
                            "label": "Aanvragen",
                            "column": "ves_aanvragen_oud",
                            "colour": "orange",
                            "units" : "aanvragen"
                        }, 
                        {
                            "label": "Afgehandeld",
                            "column": "ves_afgehandeld_oud",
                            "colour": "green",
                            "units" : "afgehandeld"
                        }, 
                    ]
                ],
                "header": "Vaste vergoeding",
                "description" : "",
                "endpoint": "fysieke_schade",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-width-4',
                    'img-graph-grid-column-start-9',
                    'img-graph-grid-width-4',
                    'img-graph-grid-row-start-7',
                    'img-graph-grid-tablet-row-start-11',
                    'img-graph-grid-height-4',
                    'img-graph-phone-hide'
                ]
            },
            // {
            //     "slug" : "fs_ves_oud_a",
            //     "graph": "CijferV2",
            //     "parameters": [
            //         [
            
            //             {
            //                 "label": "Afgehandeld",
            //                 "column": "ves_afgehandeld_oud",
            //                 "colour": "green",
            //                 "units" : "afgehandeld"
            //             }    
            //         ]
            //     ],
            //     "header": "",
            //     "description" : "",
            //     "endpoint": "fysieke_schade",
            //     "segment": "all",
            //     "elementClasslist": [
            //         'img-graph-container',
            //         'img-graph-grid-tablet-width-4',
            //         'img-graph-grid-column-start-9',
            //         'img-graph-grid-width-4',
            //         'img-graph-grid-row-start-9',
            //         'img-graph-grid-tablet-row-start-13',
            //         'img-graph-grid-height-2',
            //         'img-graph-phone-hide'
            //     ]
            // },
            {
                "slug" : "fs_ves_nieuw",
                "graph": "CijfersV1",
                "parameters": [
                    [
                        {
                            "label": "Aanvragen",
                            "column": "ves_aanvragen",
                            "colour": "orange",
                            "units" : "aanvragen"
                        },
                        {
                            "label": "Afgehandeld",
                            "column": "ves_afgehandeld",
                            "colour": "green",
                            "units" : "afgehandeld"
                        }    
                    ]
                ],
                "header": "Vaste vergoeding",
                "description" : "",
                "endpoint": "fysieke_schade",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-width-4',
                    'img-graph-grid-column-start-1',
                    'img-graph-grid-width-4',
                    'img-graph-grid-row-start-14',
                    'img-graph-grid-tablet-row-start-18',
                    'img-graph-grid-height-4'
                ]
            },
            // {
            //     "slug" : "fs_ves",
            //     "graph": "CijferV2",
            //     "parameters": [
            //         [
            
            //             {
            //                 "label": "Afgehandeld",
            //                 "column": "ves_afgehandeld",
            //                 "colour": "green",
            //                 "units" : "afgehandeld"
            //             }    
            //         ]
            //     ],
            //     "header": "",
            //     "description" : "",
            //     "endpoint": "fysieke_schade",
            //     "segment": "all",
            //     "elementClasslist": [
            //         'img-graph-container',
            //         'img-graph-grid-tablet-width-4',
            //         'img-graph-grid-column-start-1',
            //         'img-graph-grid-width-4',
            //         'img-graph-grid-row-start-14',
            //         'img-graph-grid-tablet-row-start-18',
            //         'img-graph-grid-height-2'
            //     ]
            // },
            {
                "slug" : "fs_daadwerkelijk_herstel",
                "graph": "CijfersV1",
                "parameters": [
                    [
                        {
                            "label": "Aanvragen",
                            "column": "dh_aanvragen",
                            "colour": "orange",
                            "units" : "aanvragen"
                        },
                        {
                            "label": "Afgehandeld",
                            "column": "dh_afgehandeld",
                            "colour": "green",
                            "units" : "afgehandeld"
                        }   
                    ]
                ],
                "header": "Daadwerkelijk herstel",
                "description" : "",
                "endpoint": "fysieke_schade",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-width-4',
                    'img-graph-grid-column-start-5',
                    'img-graph-grid-width-4',
                    'img-graph-grid-row-start-14',
                    'img-graph-grid-tablet-row-start-18',
                    'img-graph-grid-height-4'
                ]
            },
            // {
            //     "slug" : "fs_daadwerkelijk_herstel",
            //     "graph": "CijferV2",
            //     "parameters": [
            //         [
            //             {
            //                 "label": "Afgehandeld",
            //                 "column": "dh_afgehandeld",
            //                 "colour": "green",
            //                 "units" : "afgehandeld"
            //             }   
            //         ]
            //     ],
            //     "header": "",
            //     "description" : "",
            //     "endpoint": "fysieke_schade",
            //     "segment": "all",
            //     "elementClasslist": [
            //         'img-graph-container',
            //         'img-graph-grid-tablet-width-4',
            //         'img-graph-grid-column-start-5',
            //         'img-graph-grid-width-4',
            //         'img-graph-grid-row-start-14',
            //         'img-graph-grid-tablet-row-start-18',
            //         'img-graph-grid-height-2'
            //     ]
            // },
            {
                "slug" : "fs_causaal_maatwerk",
                "graph": "CijfersV1",
                "parameters": [
                    [
                        {
                            "label": "Aanvragen",
                            "column": "cm_aanvragen",
                            "colour": "orange",
                            "units" : "aanvragen"
                        } ,
                        {
                            "label": "Afgehandeld",
                            "column": "cm_afgehandeld",
                            "colour": "green",
                            "units" : "afgehandeld"
                        }   
                    ]
                ],
                "header": "Causaal maatwerk",
                "description" : "",
                "endpoint": "fysieke_schade",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-width-4',
                    'img-graph-grid-column-start-9',
                    'img-graph-grid-width-4',
                    'img-graph-grid-row-start-14',
                    'img-graph-grid-tablet-row-start-18',
                    'img-graph-grid-height-4'
                ]
            },
          
         
            // {
            //     "slug" : "fs_cm_a",
            //     "graph": "CijferV2",
            //     "parameters": [
            //         [
            //             {
            //                 "label": "Afgehandeld",
            //                 "column": "cm_afgehandeld",
            //                 "colour": "green",
            //                 "units" : "afgehandeld"
            //             }   
            //         ]
            //     ],
            //     "header": "",
            //     "description" : "",
            //     "endpoint": "fysieke_schade",
            //     "segment": "all",
            //     "elementClasslist": [
            //         'img-graph-container',
            //         'img-graph-grid-tablet-width-4',
            //         'img-graph-grid-column-start-9',
            //         'img-graph-grid-width-4',
            //         'img-graph-grid-row-start-14',
            //         'img-graph-grid-tablet-row-start-18',
            //         'img-graph-grid-height-2'
            //     ]
            // },
            

        ]
    },
    {
        "slug" : "wd_header",
        "graph": "Grid",
        "parameters": [
            [
                {
                    "label": "Alle regelingen",
                    "column": "vv",
                    "colour": "blue"
                }
            ]
        ],
        "header": "Waardedaling",
        "description" : "",
        "linkLabel" : "Meer over waardedaling",
        "linkTopic" : "waardedaling",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12'],
        "children": [

            {
                "slug" : "wd_aanvragen",
                "graph": "CijferV2",
                "parameters": [
                    [
                        {
                            "label": "Aanvragen",
                            "column": "aanvragen",
                            "colour": "orange",
                            "units" : "meldingen"
                        } 
                    ]
                ],
                "header": "",
                "description" : "",
                "endpoint": "waardedaling",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-width-4',
                    'img-graph-grid-column-start-1',
                    'img-graph-grid-width-3',
                    'img-graph-grid-row-start-1',
                    'img-graph-grid-height-2'
                ]
            },
            {
                "slug" : "wd_afgehandeld",
                "graph": "CijferV2",
                "parameters": [
                    [
                        {
                            "label": "Afgehandeld",
                            "column": "waardedaling_besluiten",
                            "colour": "moss",
                            "units" : "afgehandeld"
                        }
                    ]
                ],
                "header": "",
                "description" : "",
                "endpoint": "meldingen",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-width-4',
                    'img-graph-grid-column-start-1',
                    'img-graph-grid-column-end-4',
                    'img-graph-grid-row-start-3',
                    'img-graph-grid-row-end-5'
                ]
            },
            {
                "slug" : "fs_meldingen",
                "graph": "CijferV2",
                "parameters": [
                    [
                        {
                            "label": "In behandeling",
                            "column": "waardedaling_in_behandeling",
                            "colour": "blue",
                            "units" : "in behandeling"
                        }   
                    ]
                ],
                "header": "",
                "description" : "",
                "endpoint": "waardedaling",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-width-4',
                    'img-graph-grid-column-start-1',
                    'img-graph-grid-column-end-4',
                    'img-graph-grid-row-start-5',
                    'img-graph-grid-row-end-7'
                ]
            },
            {   
                
                "slug": "trend_in_behandeling",
                "graph": "TrendBars",
                "parameters": [
                    [
                        {
                            "label": "Aanvragen",
                            "column": "aanvragen",
                            "colour": "orange",
                            "short": "meldingen"
                        },
                        {
                            "label": "In behandeling",
                            "column": "waardedaling_in_behandeling",
                            "colour": "blue",
                            "short": "in beh."
                        },
                    ]
                ],
                "header" : "",
                "description" : "",
                "endpoint": "waardedaling",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-column-start-5',
                    'img-graph-grid-tablet-width-7',
                    'img-graph-grid-column-start-4',
                    'img-graph-grid-column-end-10',
                    'img-graph-grid-row-start-1',
                    'img-graph-grid-row-end-7',
                    'img-mobile-margin-vertical'
                ]
            },
            {
                "slug" : "bol_tevredenheid_algemeen",
                "graph": "CijferV2",
                "args" : [],
                "parameters": [
                    [
                        {
                            "label": "Uitgekeerd",
                            "column": "waardedaling_totaal_verleend",
                            "colour": "lightBlue",
                            "format": "currency",
                            "units" : "uitgekeerd"
                        }
                    ],
                ],
                "header": "",
                "description" : "", //"Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
                "endpoint": "waardedaling",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-column-start-1',
                    'img-graph-grid-tablet-width-4',
                    'img-graph-grid-tablet-row-start-7',
                    'img-graph-grid-column-start-10',
                    'img-graph-grid-width-3',
                    'img-graph-grid-row-start-1',
                    'img-graph-grid-height-2'
                ]
            },
            {
                "slug" : "bol_tevredenheid_algemeen",
                "graph": "Cijfer",
                "args" : [],
                "parameters": [
                    [
                        {
                            "label": "Tevredenheidscijfer",
                            "column": "waardedaling_doorlopend_cijfer",
                            "colour": "orange",
                            "format": "decimal",
                            "units" : "waardering"
                        },
                        {
                            "label": "Tevredenheidscijfer",
                            "column": "waardedaling_schade_maandcijfer",
                            "colour": "orange"
                        },
                        {
                            "label": "Tevredenheidscijfer",
                            "column": "waardedaling_aantal_respondenten",
                            "colour": "orange"
                        }
                    ]
                ],
                "header": "",
                "description" : "", //"Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
                "endpoint": "tevredenheid",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-row-start-7',
                    'img-graph-grid-tablet-column-start-7',
                    'img-graph-grid-tablet-width-3',
                    'img-graph-grid-column-start-10',
                    'img-graph-grid-width-3',
                    'img-graph-grid-row-start-3',
                    'img-graph-grid-height-4'
                ]
            },
        ]
    },
    {
        "slug" : "ims_header",
        "graph": "Grid",
        "parameters": [
            [
                {
                    "label": "Immateriële schade",
                    "column": "vv",
                    "colour": "blue"
                }
            ]
        ],
        "header": "Immateriële schade",
        "description" : "",
        "linkLabel" : "Meer over immateriële schade",
        "linkTopic" : "immateriële_schade",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12'],
        "children": [

            {
                "slug" : "ims_aanvragen",
                "graph": "CijferV2",
                "parameters": [
                    [
                        {
                            "label": "Aanvragen",
                            "column": "immateriele_schade_aanvragen",
                            "colour": "orange",
                            "units" : "meldingen"
                        } 
                    ]
                ],
                "header": "",
                "description" : "",
                "endpoint": "immateriele_schade",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-width-4',
                    'img-graph-grid-column-start-1',
                    'img-graph-grid-column-end-4',
                    'img-graph-grid-row-start-1',
                    'img-graph-grid-row-end-3'
                ]
            },
            {
                "slug" : "wd_afgehandeld",
                "graph": "CijferV2",
                "parameters": [
                    [
                        {
                            "label": "Afgehandeld",
                            "column": "immateriele_schade_besluiten",
                            "colour": "moss",
                            "units" : "afgehandeld"
                        }
                    ]
                ],
                "header": "",
                "description" : "",
                "endpoint": "meldingen",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-width-4',
                    'img-graph-grid-column-start-1',
                    'img-graph-grid-column-end-4',
                    'img-graph-grid-row-start-3',
                    'img-graph-grid-row-end-5'
                ]
            },
            {
                "slug" : "fs_meldingen",
                "graph": "CijferV2",
                "parameters": [
                    [
                        {
                            "label": "In behandeling",
                            "column": "immateriele_schade_in_behandeling",
                            "colour": "blue",
                            "units" : "in behandeling"
                        }   
                    ]
                ],
                "header": "",
                "description" : "",
                "endpoint": "waardedaling",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-width-4',
                    'img-graph-grid-column-start-1',
                    'img-graph-grid-column-end-4',
                    'img-graph-grid-row-start-5',
                    'img-graph-grid-row-end-7'
                ]
            },
            {   
                
                "slug": "trend_in_behandeling",
                "graph": "TrendBars",
                "parameters": [
                    [
                        {
                            "label": "Aanvragen",
                            "column": "immateriele_schade_aanvragen",
                            "colour": "orange",
                            "short": "meldingen"
                        },
                        {
                            "label": "In behandeling",
                            "column": "immateriele_schade_in_behandeling",
                            "colour": "blue",
                            "short": "in beh."
                        },
                    ]
                ],
                "header" : "",
                "description" : "",
                "endpoint": "waardedaling",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-column-start-5',
                    'img-graph-grid-tablet-width-7',
                    'img-graph-grid-column-start-4',
                    'img-graph-grid-column-end-10',
                    'img-graph-grid-row-start-1',
                    'img-graph-grid-row-end-7',
                    'img-mobile-margin-vertical'
                ]
            },
            {
                "slug" : "bol_tevredenheid_algemeen",
                "graph": "CijferV2",
                "args" : [],
                "parameters": [
                    [
                        {
                            "label": "Uitgekeerd",
                            "column": "immateriele_schade_totaal_verleend",
                            "colour": "lightBlue",
                            "format": "currency",
                            "units" : "uitgekeerd"
                        }
                    ],
                ],
                "header": "",
                "description" : "", //"Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
                "endpoint": "waardedaling",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-column-start-1',
                    'img-graph-grid-tablet-width-4',
                    'img-graph-grid-tablet-row-start-7',
                    'img-graph-grid-column-start-10',
                    'img-graph-grid-width-3',
                    'img-graph-grid-row-start-1',
                    'img-graph-grid-height-2'
                ]
            },
            {
                "slug" : "bol_tevredenheid_algemeen",
                "graph": "Cijfer",
                "args" : [],
                "parameters": [
                    [
                        {
                            "label": "Tevredenheidscijfer",
                            "column": "ims_doorlopend_cijfer",
                            "colour": "orange",
                            "format": "decimal",
                            "units" : "waardering"
                        },
                        {
                            "label": "Tevredenheidscijfer",
                            "column": "ims_maandcijfer",
                            "colour": "orange"
                        },
                        {
                            "label": "Tevredenheidscijfer",
                            "column": "ims_aantal_respondenten",
                            "colour": "orange"
                        }
                    ]
                ],
                "header": "",
                "description" : "", //"Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
                "endpoint": "tevredenheid",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-row-start-7',
                    'img-graph-grid-tablet-column-start-7',
                    'img-graph-grid-tablet-width-3',
                    'img-graph-grid-column-start-10',
                    'img-graph-grid-width-3',
                    'img-graph-grid-row-start-3',
                    'img-graph-grid-height-4'
                ]
            },
        ]
    },
    {
        "slug" : "aos_header",
        "graph": "Grid",
        "parameters": [
            [
                {
                    "label": "Acuut onveilige situaties",
                    "column": "vv",
                    "colour": "blue"
                }
            ]
        ],
        "header": "Acuut onveilige situaties",
        "description" : "",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12'],
        "children": [

            {
                "slug" : "aos_meldingen",
                "graph": "CijferV2",
                "parameters": [
                    [
                        {
                            "label": "Meldingen",
                            "column": "aos_meldingen",
                            "colour": "orange",
                            "units" : "meldingen"
                        } 
                    ]
                ],
                "header": "",
                "description" : "",
                "endpoint": "meldingen",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-width-4',
                    'img-graph-grid-column-start-1',
                    'img-graph-grid-column-end-4',
                    'img-graph-grid-row-start-1',
                    'img-graph-grid-row-end-3'
                ]
            },
            {
                "slug" : "wd_afgehandeld",
                "graph": "CijferV2",
                "parameters": [
                    [
                        {
                            "label": "Gegronde meldingen",
                            "column": "aos_meldingen_gegrond",
                            "colour": "moss",
                            "units" : "gegrond"
                        }
                    ]
                ],
                "header": "",
                "description" : "",
                "endpoint": "meldingen",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-width-4',
                    'img-graph-grid-column-start-1',
                    'img-graph-grid-column-end-4',
                    'img-graph-grid-row-start-3',
                    'img-graph-grid-row-end-5'
                ]
            },
            // {
            //     "slug" : "fs_meldingen",
            //     "graph": "CijferV2",
            //     "parameters": [
            //         [
            //             {
            //                 "label": "In behandeling",
            //                 "column": "immateriele_schade_in_behandeling",
            //                 "colour": "blue",
            //                 "units" : "in behandeling"
            //             }   
            //         ]
            //     ],
            //     "header": "",
            //     "description" : "",
            //     "endpoint": "waardedaling",
            //     "segment": "all",
            //     "elementClasslist": ['img-graph-container','img-graph-grid-column-start-1','img-graph-grid-column-end-4','img-graph-grid-row-start-5','img-graph-grid-row-end-7']
            // },
            {   
                
                "slug": "trend_in_behandeling",
                "graph": "TrendBars",
                "parameters": [
                    [
                        {
                            "label": "Meldingen",
                            "column": "nieuw_aos_meldingen",
                            "colour": "orange",
                            "short": "meldingen"
                        },
                        {
                            "label": "Gegrond",
                            "column": "nieuw_aos_meldingen_gegrond",
                            "colour": "blue",
                            "short": "gegrond"
                        },
                    ]
                ],
                "header" : "",
                "description" : "",
                "endpoint": "meldingen",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-tablet-column-start-5',
                    'img-graph-grid-tablet-width-7',
                    'img-graph-grid-column-start-4',
                    'img-graph-grid-width-9',
                    'img-graph-grid-row-start-1',
                    'img-graph-grid-height-6',
                    'img-mobile-margin-vertical'
                ]
            },
            // {
            //     "slug": "meldingen_taart_aos_meldingen",
            //     "graph": "PieChartSumV2",
            //     "parameters":  [
            //         [
            //             {
            //                 "label": "Wel",
            //                 "column": "aos_meldingen_gegrond",
            //                 "colour": "moss"
            //             },
            //             {
            //                 "label": "Niet",
            //                 "column": ['aos_meldingen','aos_meldingen_gegrond','-'],
            //                 "colour": "blue"
            //             }
            //         ]
            //     ],
            //     "header" : "", // "Wel/niet acuut onveilige situatie",
            //     "description" : "", // "Het aantal meldingen van een mogelijk acuut onveilige situatie in totaal, waarbij ook het aantal meldingen is aangeven waar na een veiligheidsinspectie een acuut onveilige situatie is vastgesteld. Na het vaststellen ervan, neemt het IMG preventieve veiligheidsmaatregelen.",
            //     "endpoint": "meldingen",
            //     "segment": "all",
            //     "elementClasslist": [
            //         'img-graph-container',
            //         'img-graph-grid-column-start-71',
            //         'img-graph-grid-width-3',
            //         'img-graph-grid-row-start-1',
            //         'img-graph-grid-height-6'
            //     ]
            // }
        ]
    }


]

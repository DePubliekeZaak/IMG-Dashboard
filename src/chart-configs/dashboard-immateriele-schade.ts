import { GraphObject} from '../types/graphObject';
import { IGraphMapping } from '../types/mapping';

const pad = 40;
const margin = 180;

export const dashboardImmaterieleSchade : (GraphObject|IGraphMapping)[] | [] = [

// Totalen 
{
    "slug" : "ims_uitgekeerd",
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
    "header": "Immateriele schade",
    "description" : "Het totaal verleende bedrag",
    "endpoint": "immateriele_schade",
    "segment": "all",
    "elementClasslist": ['img-graph-container','img-graph-container-12'],
    "children": [
    
        {   
            "slug": "trend_in_behandeling",
            "graph": "CijferV2",
            "parameters": [
                [
                    {
                        "label": "Totaal verleend bedrag",
                        "column": "ims_totaal_ingediend",
                        "colour": "moss",
                        "units" :"aanvragen"
                    }  
                ]
            ],
            "header" : "",
            "description" : "",
            "endpoint": "immateriele_schade",
            "segment": "all",
            "elementClasslist": [
                'img-graph-container',
                'img-graph-grid-column-start-5',
                'img-graph-grid-column-span-4',
                'img-graph-grid-row-start-1',
                'img-graph-grid-row-end-4',
                'img-mobile-margin-vertical'
            ]
        },
        {   
            "slug": "trend_in_behandeling",
            "graph": "CijferV2",
            "parameters": [
                [
                    {
                        "label": "Totaal verleend bedrag",
                        "column": "ims_totaal_afgehandeld",
                        "colour": "blue",
                        "units" :"afgehandeld"
                    }  
                ]
            ],
            "header" : "",
            "description" : "",
            "endpoint": "immateriele_schade",
            "segment": "all",
            "elementClasslist": [
                'img-graph-container',
                'img-graph-grid-column-start-9',
                'img-graph-grid-column-span-4',
                'img-graph-grid-row-start-1',
                'img-graph-grid-row-end-4',
                'img-mobile-margin-vertical'
            ]
        },
        {   
            "slug": "trend_in_behandeling",
            "graph": "CijferV2",
            "parameters": [
                [
                    {
                        "label": "Totaal verleend bedrag",
                        "column": "ims_totaal_verleend",
                        "colour": "lightBlue",
                        "format": "currency",
                        "units" :"verleend"
                    }  
                ]
            ],
            "header" : "",
            "description" : "",
            "endpoint": "immateriele_schade",
            "segment": "all",
            "elementClasslist": [
                'img-graph-container',
                'img-graph-grid-column-start-1',
                'img-graph-grid-column-span-4',
                'img-graph-grid-row-start-1',
                'img-graph-grid-row-end-4',
                'img-mobile-margin-vertical'
            ]
        }
    ]
},
//  Volwassenen Intro
    {
        "slug" : "ims_header_v",
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
        "header": "Volwassenen",
        "description" : "",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-graph-container-ipad-4'],
        "children": [

            {
                "slug" : "ims_aanvragen",
                "graph": "CijferV2",
                "parameters": [
                    [
                        {
                            "label": "Aanvragen",
                            "column": "immateriele_schade_aanvragen",
                            "colour": "moss",
                            "units" : "aanvragen"
                        } 
                    ]
                ],
                "header": "",
                "description" : "",
                "endpoint": "immateriele_schade",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    // 'img-graph-grid-tablet-width-4',
                    'img-graph-grid-column-start-1',
                    'img-graph-grid-column-span-12',
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
                            "column": "immateriele_schade_in_behandeling",
                            "colour": "green",
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
                    'img-graph-grid-column-start-1',
                    'img-graph-grid-column-span-12',
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
                            "label": "Uitgekeerd",
                            "column": "immateriele_schade_totaal_verleend",
                            "colour": "lightBlue",
                            "format": "currency",
                            "units" : "verleend"
                        }  
                    ]
                ],
                "header": "",
                "description" : "",
                "endpoint": "waardedaling",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-column-start-1',
                    'img-graph-grid-column-span-12',
                    'img-graph-grid-row-start-5',
                    'img-graph-grid-row-end-7'
                ]
            },
        ]
    },
// Kinderen en jongeren intro
    {
        "slug" : "ims_header_kj",
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
        "header": "Kinderen en jongeren",
        "description" : "",
        // "linkLabel" : "Meer over immateriële schade",
        // "linkTopic" : "immateriële_schade",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-graph-container-ipad-4'],
        "children": [

            {
                "slug" : "ims_aanvragen",
                "graph": "CijferV2",
                "parameters": [
                    [
                        {
                            "label": "Aanvragen",
                            "column": "ims_kj_aanvragen",
                            "colour": "moss",
                            "units" : "aanvragen"
                        } 
                    ]
                ],
                "header": "",
                "description" : "",
                "endpoint": "immateriele_schade",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-column-start-1',
                    'img-graph-grid-column-span-12',
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
                            "column": "ims_kj_voorraad",
                            "colour": "orange",
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
                    'img-graph-grid-column-start-1',
                    'img-graph-grid-column-span-12',
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
                            "label": "Uitgekeerd",
                            "column": "ims_kj_bedrag",
                            "colour": "lightBlue",
                            "format": "currency",
                            "units" : "verleend"
                        }
                    ]
                ],
                "header": "",
                "description" : "",
                "endpoint": "waardedaling",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-column-start-1',
                    'img-graph-grid-column-span-12',
                    'img-graph-grid-row-start-5',
                    'img-graph-grid-row-end-7'
                ]
            },
        ]
    },
// Herbeoordeling intro 
    {
        "slug" : "ims_header_sc",
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
        "header": "Herbeoordeling",
        "description" : "",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-graph-container-ipad-4'],
        "children": [

            {
                "slug" : "ims_aanvragen",
                "graph": "CijferV2",
                "parameters": [
                    [
                        {
                            "label": "Aanvragen",
                            "column": "ims_sc_zaken",
                            "colour": "moss",
                            "units" : "zaken"
                        } 
                    ]
                ],
                "header": "",
                "description" : "",
                "endpoint": "immateriele_schade",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-column-start-1',
                    'img-graph-grid-column-span-12',
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
                            "column": "ims_sc_voorraad",
                            "colour": "orange",
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
                    'img-graph-grid-column-start-1',
                    'img-graph-grid-column-span-12',
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
                            "label": "Uitgekeerd",
                            "column": "ims_sc_bedrag",
                            "colour": "lightBlue",
                            "format": "currency",
                            "units" : "verleend"
                        }
                    ]
                ],
                "header": "",
                "description" : "",
                "endpoint": "waardedaling",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    'img-graph-grid-column-start-1',
                    'img-graph-grid-column-span-12',
                    'img-graph-grid-row-start-5',
                    'img-graph-grid-row-end-7'
                ]
            },
        ]
    },
// Details Volwassenen
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
        "header": "Volwassenen",
        "description" : "",
        // "linkLabel" : "Meer over immateriële schade",
        // "linkTopic" : "immateriële_schade",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12'],
        "children": [
            {   
                
                "slug": "trend_in_behandeling",
                "graph": "TrendBars",
                "parameters": [
                    [
                        {
                            "label": "In behandeling",
                            "column": "immateriele_schade_in_behandeling",
                            "colour": "blue",
                            "short": "in beh."
                        },
                        {
                            "label": "Aanvragen per week",
                            "column": "immateriele_schade_nieuw_aanvragen",
                            "colour": "orange",
                            "short": "meldingen"
                        },
                        
                    ]
                ],
                "header" : "",
                "description" : "",
                "endpoint": "immateriele_schade",
                "segment": "all",
                "elementClasslist": [
                    'img-graph-container',
                    // 'img-graph-grid-tablet-column-start-1',
                    // 'img-graph-grid-tablet-span-12',
                    'img-graph-grid-column-start-1',
                    'img-graph-grid-column-span-9',
                    'img-graph-grid-row-start-1',
                    'img-graph-grid-row-end-7',
                    'img-mobile-margin-vertical'
                ]
            },
            // {
            //     "slug" : "bol_tevredenheid_algemeen",
            //     "graph": "CijferV2",
            //     "args" : [],
            //     "parameters": [
            //         [
            //             {
            //                 "label": "Totaal",
            //                 "column": "immateriele_schade_unieke_adressen",
            //                 "colour": "blue",
            //                 "units" : "unieke adressen"
            //             }
            //         ],
            //     ],
            //     "header": "",
            //     "description" : "", //"Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
            //     "endpoint": "immateriele_schade",
            //     "segment": "all",
            //     "elementClasslist": [
            //         'img-graph-container',
            //         // 'img-graph-grid-tablet-column-start-1',
            //         // 'img-graph-grid-tablet-width-4',
            //         // 'img-graph-grid-tablet-row-start-7',
            //         'img-graph-grid-column-start-10',
            //         'img-graph-grid-width-3',
            //         'img-graph-grid-row-start-1',
            //         'img-graph-grid-height-2'
            //     ]
            // },
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
                    // 'img-graph-grid-tablet-row-start-7',
                    // 'img-graph-grid-tablet-column-start-7',
                    // 'img-graph-grid-tablet-width-3',
                    'img-graph-grid-column-start-10',
                    'img-graph-grid-width-3',
                    'img-graph-grid-row-start-2',
                    'img-graph-grid-height-4'
                ]
            },
        ]
    },
    {
        "slug": "taart_schadevergoeding_totaal",
        "graph" : "PieChartSumV2",
        "parameters":  [
            [
                {
                    "label": "Toegewezen aanvragen",
                    "column": "immateriele_schade_toegewezen",
                    "colour": "moss",
                    "scale" : null
                },
                {
                    "label": "Afgewezen aanvragen",
                    "column": "immateriele_schade_afgewezen",
                    "colour": "orange",
                    "scale" : "null"
                },
            ],
            [
                {
                    "label": "Totaal",
                    "column": "waardedalingsregeling_totaal_verleend",
                    "colour": "gray",
                    "scale" : "null"
                }
            ]
        ],
        "header" : null,
        "segmentIndicator": null,
        "description" : "",
        "endpoint": "immateriele_schade",
        "publishDate": null,
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-graph-container-ipad-4']
    },
    {
        "slug": "taart_imsvolwassenen_bezwaren",
        "graph" : "PieChartSumV2",
        "parameters":  [
            [
                {
                    "label" : "Overig",
                    "column": "immateriele_schade_besluiten_zonder_bezwaar",
                    "colour": "blue",
                    "scale" : null
                },
                {
                    "label": "Ingetrokken bezwaren",
                    "column": "immateriele_schade_bezwaren_ingetrokken",
                    "colour": "moss",
                    "scale" : "null"
                },
                {
                    "label": "Bezwaren",
                    "column": "immateriele_schade_bezwaren_ingediend",
                    "colour": "orange",
                    "scale" : "null"
                },
            ],
            [
                {
                    "label": "Besluiten",
                    "column": "immateriele_schade_besluiten",
                    "colour": "gray",
                    "scale" : "null"
                }
            ]
        ],
        "header" : null,
        "segmentIndicator": null,
        "description" : "",
        "endpoint": "immateriele_schade",
        "publishDate": null,
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-graph-container-ipad-4']
    },
    {
        "slug": "taart_imsvolwassenen_bezwaren",
        "graph" : "PieChartSumV2",
        "parameters":  [
            [
                {
                    "label": "Bewaren met beschikking",
                    "column": "immateriele_schade_bezwaren_beschikt",
                    "colour": "blue",
                    "scale" : null
                },
                {
                    "label": "Ingetrokken bezwaren",
                    "column": "immateriele_schade_bezwaren_ingetrokken",
                    "colour": "moss",
                    "scale" : null
                },
                {
                    "label": "Openstaande bezwaren",
                    "column": "immateriele_schade_bezwaren_openstaand",
                    "colour": "orange",
                    "scale" : "null"
                },
            ],
            [
                {
                    "label": "Ingediende bezwaren",
                    "column": "immateriele_schade_bezwaren_ingediend",
                    "colour": "gray",
                    "scale" : "null"
                }
            ]
        ],
        "header" : null,
        "segmentIndicator": null,
        "description" : "",
        "endpoint": "immateriele_schade",
        "publishDate": null,
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-graph-container-ipad-4']
    },
// Details Kinderen en jongeren
    {
        "slug" : "ims_header_kinderen_details",
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
        "header": "Kinderen en jongeren",
        "description" : "",
        "endpoint": "immateriele_schade",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12'],
        "children": [
        
        ]
    },
    {
        "slug": "taart_kinderen_schadevergoeding",
        "graph" : "PieChartSumV2",
        "parameters":  [
            [
                {
                    "label": "Toegewezen aanvragen",
                    "column": "ims_kj_toegekend",
                    "colour": "moss",
                    "scale" : null
                },
                {
                    "label": "Afgewezen aanvragen",
                    "column": "ims_kj_afgewezen",
                    "colour": "orange",
                    "scale" : "null"
                },
            ],
            [
                {
                    "label": "Totaal",
                    "column": "ims_kj_afgehandeld",
                    "colour": "gray",
                    "scale" : "null"
                }
            ]
        ],
        "header" : null,
        "segmentIndicator": null,
        "description" : "",
        "endpoint": "immateriele_schade",
        "publishDate": null,
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-graph-container-ipad-4']
    },
    {
        "slug": "taart_ims_kinderen_bezwaren_1",
        "graph" : "PieChartSumV2",
        "parameters":  [
            [
                {
                    "label" : "Overig",
                    "column": "ims_kj_besluiten_zonder_bezwaar",
                    "colour": "blue",
                    "scale" : null
                },
                {
                    "label": "Bezwaren",
                    "column": "ims_kj_bezwaren_ingediend",
                    "colour": "orange",
                    "scale" : "null"
                },
            ],
            [
                {
                    "label": "Besluiten",
                    "column": "ims_kj_afgehandeld",
                    "colour": "gray",
                    "scale" : "null"
                }
            ]
        ],
        "header" : null,
        "segmentIndicator": null,
        "description" : "",
        "endpoint": "immateriele_schade",
        "publishDate": null,
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-graph-container-ipad-4']
    },
    {
        "slug": "taart_ims_kinderen_bezwaren_2",
        "graph" : "PieChartSumV2",
        "parameters":  [
            [
                {
                    "label": "Bewaren met beschikking",
                    "column": "ims_kj_bezwaren_ingediend",
                    "colour": "blue",
                    "scale" : null
                },
                {
                    "label": "Openstaande bezwaren",
                    "column": "ims_kj_bezwaren_openstaand",
                    "colour": "orange",
                    "scale" : "null"
                },
            ],
            [
                {
                    "label": "Ingediende bezwaren",
                    "column": "ims_kj_bezwaren_ingediend",
                    "colour": "gray",
                    "scale" : "null"
                }
            ]
        ],
        "header" : null,
        "segmentIndicator": null,
        "description" : "",
        "endpoint": "immateriele_schade",
        "publishDate": null,
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-graph-container-ipad-4']
    },
    // Details Herbeoordeling
    {
        "slug" : "ims_header_herbeoordeling_details",
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
        "header": "Herbeoordeling",
        "description" : "",
        "endpoint": "immateriele_schade",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12'],
        "children": [
        
        ]
    },
    {
        "slug": "taart_herbeoordeling_schadevergoeding",
        "graph" : "PieChartSumV2",
        "parameters":  [
            [
                {
                    "label": "Besluit verstuurd",
                    "column": "ims_sc_verstuurd_besluit",
                    "colour": "moss",
                    "scale" : null
                },
                {
                    "label": "Geannuleerd",
                    "column": "ims_sc_geannuleerd",
                    "colour": "orange",
                    "scale" : "null"
                },
            ],
            [
                {
                    "label": "Totaal afgehandeld",
                    "column": "ims_sc_afgehandeld",
                    "colour": "gray",
                    "scale" : "null"
                }
            ]
        ],
        "header" : null,
        "segmentIndicator": null,
        "description" : "",
        "endpoint": "immateriele_schade",
        "publishDate": null,
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6', 'img-graph-container-ipad-6']
    },
    {
        "slug": "taart_ims_herbeoordeling_bezwaren_2",
        "graph" : "PieChartSumV2",
        "parameters":  [
            [
                {
                    "label": "Afgeronde bezwaren",
                    "column": "ims_sc_afgeronde_bezwaren",
                    "colour": "blue",
                    "scale" : null
                },
                {
                    "label": "Openstaande bezwaren",
                    "column": "ims_sc_openstaande_bezwaren",
                    "colour": "orange",
                    "scale" : "null"
                },
            ],
            [
                {
                    "label": "Ingediende bezwaren",
                    "column": "ims_sc_ingediende_bezwaren",
                    "colour": "gray",
                    "scale" : "null"
                }
            ]
        ],
        "header" : null,
        "segmentIndicator": null,
        "description" : "",
        "endpoint": "immateriele_schade",
        "publishDate": null,
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-ipad-6']
    }
]
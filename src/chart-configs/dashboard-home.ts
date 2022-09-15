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
                            "units" : "meldingen en aanvragen"
                        }
                    ]
                ],
                "header": "",
                "description" : "",
                "endpoint": "meldingen",
                "segment": "all",
                "elementClasslist": ['img-graph-container','img-graph-grid-start-1','img-graph-grid-end-3']
            },
            // {
            //     "slug" : "ims_uitgekeerd",
            //     "graph": "CijferV2",
            //     "parameters": [
            //         [
            //             {
            //                 "label": "Totaal afgehandeld",
            //                 "column": "alle_regelingen_afgehandeld",
            //                 "colour": "moss",
            //                 "units" : "dossiers afgehandeld"
            //             }
            //         ]
            //     ],
            //     "header": "",
            //     "description" : "",
            //     "endpoint": "voortgang",
            //     "segment": "all",
            //     "elementClasslist": ['img-graph-container','img-graph-container-3']
            // },
            // {
            //     "slug" : "ims_uitgekeerd",
            //     "graph": "CijferV2",
            //     "parameters": [
            //         [
            //             {
            //                 "label": "Totaal uitgekeerd",
            //                 "column": "alle_regelingen_totaal_verleend",
            //                 "colour": "lightBlue",
            //                 "format": "currency",
            //                 "units": "uitgekeerd"
            //             }
            //         ]
            //     ],
            //     "header": "",
            //     "description" : "",
            //     "endpoint": "vergoedingen",
            //     "segment": "all",
            //     "elementClasslist": ['img-graph-container','img-graph-container-3']
            // },
            // {
            //     "slug" : "bol_tevredenheid_algemeen",
            //     "graph": "CijferV2",
            //     "args" : [],
            //     "parameters": [
            //         [
            //             {
            //                 "label": "Tevredenheidscijfer",
            //                 "column": "doorlopend_cijfer",
            //                 "colour": "orange",
            //                 "format": "decimal",
            //                 "units": "waardering"
            //             },
            //             // {
            //             //     "label": "Tevredenheidscijfer",
            //             //     "column": "maandcijfer",
            //             //     "colour": "orange"
            //             // },
            //             // {
            //             //     "label": "Tevredenheidscijfer",
            //             //     "column": "aantal_respondenten",
            //             //     "colour": "orange"
            //             // }
            //         ]
            //     ],
            //     "header": "",
            //     "description" : "", //"Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
            //     "endpoint": "tevredenheid",
            //     "segment": "all",
            //     "elementClasslist": ['img-graph-container','img-graph-container-3']
            // }
        ]
    },
    {
        "slug" : "alle_regelingen_header",
        "graph": "SectionHeader",
        "parameters": [
            [
                {
                    "label": "Fysieke schade",
                    "column": "vv",
                    "colour": "blue"
                }
            ]
        ],
        "header": "Fysieke schade",
        "description" : "",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12']
    },
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
                },
                {
                    "label": "Afgehandeld",
                    "column": "afgehandeld",
                    "colour": "moss",
                    "units" : "afgehandeld"
                },
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
        "elementClasslist": ['img-graph-container','img-graph-container-3']
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
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-vertical-padding']
    },
    // {
    //     "slug" : "bol_tevredenheid_algemeen",
    //     "graph": "Combi1",
    //     "args" : [],
    //     "parameters": [
    //         [
    //             {
    //                 "label": "Uitgekeerd",
    //                 "column": "fysieke_schade_totaal_verleend",
    //                 "colour": "lightBlue",
    //                 "format": "currency",
    //                 "units" : "uitgekeerd"
    //             }
    //         ],
    //         [
    //             {
    //                 "label": "Tevredenheidscijfer",
    //                 "column": "fysieke_schade_doorlopend_cijfer",
    //                 "colour": "orange",
    //                 "format": "decimal",
    //                 "units": "waardering"
    //             },
    //             {
    //                 "label": "Tevredenheidscijfer",
    //                 "column": "fysieke_schade_maandcijfer",
    //                 "colour": "orange"
    //             },
    //             {
    //                 "label": "Tevredenheidscijfer",
    //                 "column": "fysieke_schade_aantal_respondenten",
    //                 "colour": "orange"
    //             }
    //         ]
    //     ],
    //     "header": "",
    //     "description" : "", //"Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
    //     "endpoint": "tevredenheid",
    //     "segment": "all",
    //     "elementClasslist": ['img-graph-container','img-graph-container-3']
    // },
    // {
    //     "slug" : "alle_regelingen_header",
    //     "graph": "SectionHeader",
    //     "parameters": [
    //         [
    //             {
    //                 "label": "waardedaling",
    //                 "column": "vv",
    //                 "colour": "blue"
    //             }
    //         ]
    //     ],
    //     "header": "Waardedaling",
    //     "description" : "",
    //     "endpoint": "meldingen",
    //     "segment": "all",
    //     "elementClasslist": ['img-graph-container','img-graph-container-12']
    // },
    // {
    //     "slug" : "bol_tevredenheid_algemeen",
    //     "graph": "Cijfer",
    //     "args" : [],
    //     "parameters": [
    //         [
    //             {
    //                 "label": "Tevredenheidscijfer",
    //                 "column": "doorlopend_cijfer",
    //                 "colour": "orange",
    //                 "format": "decimal",
    //                 "units": "waardering"
    //             },
    //             {
    //                 "label": "Tevredenheidscijfer",
    //                 "column": "maandcijfer",
    //                 "colour": "orange"
    //             },
    //             {
    //                 "label": "Tevredenheidscijfer",
    //                 "column": "aantal_respondenten",
    //                 "colour": "orange"
    //             }
    //         ]
    //     ],
    //     "header": "",
    //     "description" : "", //"Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
    //     "endpoint": "tevredenheid",
    //     "segment": "all",
    //     "elementClasslist": ['img-graph-container','img-graph-container-3']
    // }

]

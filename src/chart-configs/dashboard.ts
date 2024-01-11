import { GraphObject} from '../types/graphObject';
import { IGraphMapping } from '../types/mapping';

 const pad = 40;
 const margin = 140;

export const dashboardMain : (GraphObject|IGraphMapping)[] = [
    {
        "slug" : "bol_tevredenheid_algemeen",
        "graph": "CijfersMonths",
        "args" : [],
        "parameters": [
            [
                {
                    "label": "Tevredenheidscijfer",
                    "column": "doorlopend_cijfer",
                    "colour": "orange"
                },
                {
                    "label": "Tevredenheidscijfer",
                    "column": "maandcijfer",
                    "colour": "orange"
                },
                {
                    "label": "Tevredenheidscijfer",
                    "column": "aantal_respondenten",
                    "colour": "orange"
                }
            ]
        ],
        "header": "Tevredenheidscijfer",
        "description" : "Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
        "endpoint": "tevredenheid",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4']
    },
    {
    "slug" : "bol_schademeldingen",
    "graph" : "CijfersLine",
    "args" : [],
    "parameters": [
        [
          {
            "label": "Nieuw binnen vorige week",
            "column": "nieuw_schademeldingen",
            "colour": "blue",
            "units": "meldingen"
          },
          {
            "label": "Schade-meldingen",
            "column": "schademeldingen",
            "colour": "blue"
          }
        ]
    ],
    "header": "Nieuw binnen vorige week",
    "description" : "Het aantal nieuwe schademeldingen dat afgelopen week is binnengekomen.",
    "endpoint": "meldingen",
    "segment": "all",
    "elementClasslist": ['img-graph-container','img-graph-container-4']
    },
    {
    "slug" : "bol_afgehandelde_meldingen",
    "graph": "CijfersLine",
    "parameters": [
        [
            {
                "label": "Afgehandeld in vorige week",
                "column": "nieuw_afgehandeld",
                "colour": "moss",
                "units": "meldingen"
            },
            {
                "label": "Afgehandelde schade-meldingen",
                "column": "afgehandeld",
                "colour": "moss"
            }
        ]
    ],
    "header": "Afgehandeld in vorige week",
    "description" : "Het aantal schademeldingen dat afgelopen week is afgehandeld. Op sommige adressen lopen er meerdere schademeldingen. Die worden waar mogelijk met een enkel besluit afgehandeld.",
    "endpoint": "voortgang",
    "segment": "all",
    "elementClasslist": ['img-graph-container','img-graph-container-4']

    },
    // {
    //     "slug" : "bol_doorlooptijd",
    //     "graph": "CijfersLine",
    //     "parameters": [
    //       [
    //         {
    //           "label": "Verwachte duur",
    //           "column": "verwacht_aantal_dagen_tussen_melding_en_besluit",
    //           "colour": "brown",
    //           "units": "dagen"
    //         }
    //       ]
    //     ],
    //     "header": "Verwachte duur",
    //     "description" : "Voor nieuwe, reguliere schademeldingen streeft het IMG naar een maximale doorlooptijd van indiening tot besluit van een half jaar (182 dagen). We berekenen op basis van de huidige voortgang hoeveel dagen het op dit moment bij benadering duurt om een nieuwe schademelding af te handelen. Onder meer de huidige capaciteit van bijvoorbeeld schade-opnames, het opleveren van adviesrapporten en het voorbereiden van besluiten wordt daarbij meegewogen.",
    //     "endpoint": "voortgang",
    //     "segment": "all",
    //     "elementClasslist": ['img-graph-container','img-graph-container-3']
    // },
    {   
        "slug": "trend_schademeldingen",
        "graph": "TrendBars",
        "parameters": [
            [
                {
                    "label": "Nieuw",
                    "column": "nieuw_schademeldingen",
                    "colour": "orange",
                    "short": "nieuw"
                },
                {
                    "label": "Afgehandeld",
                    "column": "nieuw_afgehandeld",
                    "colour": "blue",
                    "short": "afgeh."
                }
            ]
        ],
        "header" : "Trend nieuw en afgehandeld",
        "description" : "Het aantal nieuwe en afgehandelde schademeldingen door de tijd heen.",
        "endpoint": "voortgang",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-vertical-padding']
    },
    {   
        
        "slug": "trend_in_behandeling",
        "graph": "TrendBars",
        "parameters": [
            [
                {
                    "label": "Schade-opnames",
                    "column": "nieuw_schade_opnames",
                    "colour": "moss",
                    "short": "opname"
                },
                {
                    "label": "Adviesrapporten",
                    "column": "nieuw_adviesrapporten",
                    "colour": "purple",
                    "short": "rapport"
                },
            ]
        ],
        "header" : "Trend schade-opnames en adviesrapporten",
        "description" : "Het aantal schade-opnames en adviesrapporten door de tijd heen. De schade-opname en het adviesrapport zijn voor vrijwel alle schademeldingen nodig om te komen tot een besluit. De trend laat daarmee het potentieel van de schadeafhandeling zien.",
        "endpoint": "opnames",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-vertical-padding']
    },
    {
    "slug": "flow_doorlooptijden",
    "graph": "FlowDossierCount",
    "parameters": [[

        {
            "label" : "Nieuwe meldingen",
            "column" : "maatwerk_nieuwe_meldingen",
            "outflow" : "instroom_fase_ontvangst", // "nieuw_schademeldingen",
            "duration" : "",
            "colour": "moss"
        },
        {
            "label" : "Ontvangst & Analyse",
            "column" : "in_fase_ontvangst",
            "outflow" : "instroom_fase_planning_opname", // "instroom_fase_ontvangst_analyse",
            "duration" : "",
            "colour": "lightBlue"
        },
        {
            "label" : "Planning schade-opname",
            "column" : "in_fase_planning_opname",
            "outflow" : "instroom_fase_ingepland_voor_opname", // "instroom_fase_ingepland_voor_opname",
            "duration" : "",
            "colour": "blue"
        },
        {
            "label" : "Ingepland voor opname",
            "column" : "in_fase_ingepland_voor_opname",
            "outflow" : "instroom_fase_opleveren_schaderapport", // "instroom_fase_opleveren_rapport_bewoner",
            "duration" : "",
            "colour": "violet"
        },
        {
            "label" : "Opleveren rapport",
            "column" : "in_fase_opleveren_schaderapport",
            "outflow" : "instroom_fase_rapport_bij_bewoner",
            "duration" : "",
            "colour": "purple"
        },
        {
            "label" : "Rapport bij bewoner",
            "column" : "in_fase_rapport_bij_bewoner",
            "outflow" : "instroom_fase_voorbereiden_besluit",
            "duration" : "",
            "colour": "brown"
        },
        {
            "label" : "Voorbereiden besluit",
            "column" : "in_fase_voorbereiding_besluit",
            "outflow" : "nieuw_afgehandeld",
            "duration" : "",
            "colour": "orange"
        },
        {
            "label" : "Afgerond",
            "column" : "maatwerk_nieuw_afgehandeld",
            "outflow" : "",
            "duration" : "",
            "colour": "yellow"
        }
    ]
    ],
    "header": "Voortgang per procedurestap",
    "description" : "Een schademelding doorloopt een aantal stappen in de procedure voor afhandeling. Zolang er wekelijks ongeveer net zoveel schademeldingen naar een volgende stap in de procedure gaan als er nieuw binnenkomen, dan is de de capaciteit van de totale schadeafhandeling op niveau. De grafiek toont dus de mate waarin er voortgang is in het totaal van schademeldingen die in behandeling zijn. ",
    "endpoint": "productie",
    "segment": "all",
    "elementClasslist": ['img-graph-container','img-graph-container-12']
  },
  {
    "slug": "taart_schadevergoeding_totaal",
    "graph": "PieChartSumV2",
    "parameters":  [
        [
            {
                "label": "Mijnbouwschade",
                "column": "fysieke_schade_schadebedrag",
                "colour": "brown",
                "format" : "currency"
            },
            {
                "label": "Stuwmeerregeling",
                "column": "fysieke_schade_stuwmeerregeling_bedrag",
                "colour": "blue",
                "format" : "currency"
            },
            {
                "label": "Bijkomende kosten",
                "column": "fysieke_schade_bijkomende_kosten_bedrag",
                "colour": "moss",
                "format" : "currency"
            },
            {
                "label": "Wettelijke rente",
                "column": "fysieke_schade_wettelijke_rente_bedrag",
                "colour": "orange",
                "format" : "currency"
            }
        ],
        [
            {
                "label": "Totaal",
                "column": "fysieke_schade_totaal_verleend",
                "colour": "gray",
                "format" : "currency"
            }
        ]
    ],
    "header" : "Schadevergoedingen",
    "description" : "De diverse soorten schadevergoedingen die het IMG toekent uitgesplitst en als totaal opgeteld. De Stuwmeerregeling is afgelopen. Maar voor enkele van die dossiers worden nog vergoedingen toegekend omdat deze op basis van facturen van aannemers worden toegekend.",
    "endpoint": "vergoedingen",
    "segment": "all",
    "elementClasslist": ['img-graph-container','img-graph-container-4']
    },
//     {
//         "slug": "meldingen_taart_aos_meldingen",
//         "graph": "PieChartSumV2",
//         "parameters":  [
//             [
//                 {
//                     "label": "Wel",
//                     "column": "aos_meldingen_gegrond",
//                     "colour": "moss"
//                 },
//                 {
//                     "label": "Niet",
//                     "column": ['aos_meldingen','aos_meldingen_gegrond','-'],
//                     "colour": "blue"
//                 }
//             ],
//             [
//                 {
//                     "label": "Totaal",
//                     "column": "aos_meldingen",
//                     "colour": "gray"
//                 }
//             ]
//         ],
//         "header" : "Wel/niet acuut onveilige situatie",
//         "description" : "Het aantal meldingen van een mogelijk acuut onveilige situatie in totaal, waarbij ook het aantal meldingen is aangeven waar na een veiligheidsinspectie een acuut onveilige situatie is vastgesteld. Na het vaststellen ervan, neemt het IMG preventieve veiligheidsmaatregelen.",
//         "endpoint": "voortgang",
//         "segment": "all",
//         "elementClasslist": ['img-graph-container','img-graph-container-4']
//     },
    {
        "slug": "taart_bezwaren",
        "graph": "PieChartSumV2",
        "parameters":  [
            [
                {
                    "label": "Gegrond",
                    "column": "bezwaren_gegrond",
                    "colour": "moss"
                },
                {
                    "label": "Deels gegrond",
                    "column": "bezwaren_deels_gegrond",
                    "colour": "orange"
                },
                {
                    "label": "Ongegrond",
                    "column": "bezwaren_ongegrond",
                    "colour": "blue"
                },
                {
                    "label": "Niet ontvankelijk",
                    "column": "bezwaren_niet_ontvankelijk",
                    "colour": "purple"
                },
                {
                    "label": "Ingetrokken",
                    "column": "bezwaren_ingetrokken",
                    "colour": "brown"
                },
                {
                    "label": "Naar schadeprocedure",
                    "column": "bezwaren_doorgezet",
                    "colour": "orange"
                }
            ],
            [
                {
                    "label": "Totaal afgehandeld",
                    "column": null,
                    "colour": "black"
                }
            ],
            [
                {
                    "label": "In behandeling",
                    "column": "bezwaren_in_behandeling",
                    "colour": "yellow"
                }
            ]
        ],
        "header" : "Bezwaren",
        "description" : "De besluiten die het IMG neemt over aanvragen tot schadevergoeding staan open voor bezwaar. Het aantal bezwaren zegt iets over de mate waarin er tevredenheid is over de aanpak en handelwijze van het IMG.",
        "endpoint": "reacties",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4']
    },
    {
        "slug": "taart_specials",
        "graph": "PieChartSumV2",
        "parameters":  [
            [
                {
                    "label": "Afgehandelde specials",
                    "column": "specials_afgehandeld",
                    "colour": "moss"
                },
                {
                    "label": "Specials in behandeling",
                    "column": "specials_in_behandeling",
                    "colour": "blue"
                }
            ],
            [
                {
                    "label": "Totaal",
                    "column": undefined,
                    "colour": undefined
                }
            ]
        ],
        "header" : "Speciale dossiers",
        "description" : "Sommige schademeldingen hebben speciale aandacht nodig, zoals voor monumenten, bedrijven en agrariërs. Dit worden ook wel specials genoemd. De doorlooptijd voor de specials wijkt af van de reguliere schademeldingen voor woonhuizen zonder bijzondere omstandigheden.",
        "endpoint": "specials",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4']
    }
]

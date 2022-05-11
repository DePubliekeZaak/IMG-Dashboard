import { GraphObject} from '../types/graphObject';

 const pad = 40;
 const margin = 140;

export const dashboardMain : GraphObject[] = [
    {
        "label" : "Tevredenheidscijfer algemeen",
        "slug" : "bol_tevredenheid_algemeen",
        "mapping": [
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
        "endpoint": "tevredenheid",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol']
    },
    {
    "label" : "Algemeen",
    "slug" : "bol_schademeldingen",
    "mapping": [
        [
          {
            "label": "Nieuw binnen vorige week",
            "column": "nieuw_schademeldingen",
            "colour": "blue"
          },
          {
            "label": "Schade-meldingen",
            "column": "schademeldingen",
            "colour": "blue"
          }
        ]
    ],
    "config": {
      "graphType": "CijfersLine",
      "xScaleType" : "time",
      "yScaleType" : "linear",
      "xParameter" : "_date",
      "yParameter" : false,
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
          "units": "meldingen",
          "segmentIndicator": true,
          "link": "meldingen"
      }
    },
    "description" : "Het aantal nieuwe schademeldingen dat afgelopen week is binnengekomen.",
    "endpoint": "meldingen",
    "segment": "all",
    "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol']
  },
    {
        "label" : "Bol afgehandelde meldingen",
        "slug" : "bol_afgehandelde_meldingen",
        "mapping": [
            [
                {
                    "label": "Afgehandeld in vorige week",
                    "column": "nieuw_afgehandeld",
                    "colour": "moss"
                },
                {
                    "label": "Afgehandelde schade-meldingen",
                    "column": "afgehandeld",
                    "colour": "moss"
                }
            ]
        ],
        "config": {
            "graphType": "CijfersLine",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : false,
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
                "units": "meldingen",
                "segmentIndicator": true
            }
        },
        "description" : "Het aantal schademeldingen dat afgelopen week is afgehandeld. Op sommige adressen lopen er meerdere schademeldingen. Die worden waar mogelijk met een enkel besluit afgehandeld.",
        "endpoint": "voortgang",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol']

    },
      {
        "label" : "Bol gerealiseerde doorlooptijd",
        "slug" : "bol_doorlooptijd",
        "mapping": [
          [
            {
              "label": "Verwachte duur afhandeling",
              "column": "verwacht_aantal_dagen_tussen_melding_en_besluit",
              "colour": "brown"
            }
          ]
        ],
        "config": {
          "graphType": "CijfersLine",
          "xScaleType" : "time",
          "yScaleType" : "linear",
          "xParameter" : "_date",
          "yParameter" : false,
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
                "units": "dagen",
                "segmentIndicator": false,
                "noUpdate" : true,
                "notNull": true
        }
        },
        "description" : "Voor nieuwe, reguliere schademeldingen streeft het IMG naar een maximale doorlooptijd van indiening tot besluit van een half jaar (182 dagen). We berekenen op basis van de huidige voortgang hoeveel dagen het op dit moment bij benadering duurt om een nieuwe schademelding af te handelen. Onder meer de huidige capaciteit van bijvoorbeeld schade-opnames, het opleveren van adviesrapporten en het voorbereiden van besluiten wordt daarbij meegewogen.",
        "endpoint": "voortgang",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol']
      },
    {   "label": "In behandeling",
        "slug": "trend_schademeldingen",
        "mapping": [
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
        "config": {
            "graphType": "TrendLine",
            "xScaleType": "time",
            "yScaleType": "linear",
            "xParameter": "_date",
            "yParameter": "nieuw_schademeldingen",
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
                "xScaleTicks": "quarterly",
                "useLineFill": true,
                "header" : "Trend nieuw en afgehandeld",
                "segmentIndicator": true,
                "legend" : true,
                "hasFocus": true
            }
        },
        "description" : "Het aantal nieuwe en afgehandelde schademeldingen door de tijd heen.",
        "endpoint": "voortgang",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-trendline','img-graph-container-vertical-padding']
    },
    {   "label": "Werkvoorraad",
        "slug": "trend_in_behandeling",
        "mapping": [
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
                // {
                //     "label": "Besluiten",
                //     "column": "nieuw_besluiten",
                //     "colour": "blue"
                // }
            ]
        ],
        "config": {
            "graphType": "TrendLine",
            "xScaleType": "time",
            "yScaleType": "linear",
            "xParameter": "_date",
            "yParameter": "WERKVOORRAAD_IN_BEHANDELING",
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
                "xScaleTicks": "quarterly",
                "useLineFill": true,
                "header" : "Trend schade-opnames en adviesrapporten",
                "segmentIndicator": true,
                "legend": true,
                "hasFocus": true
            }
        },
        "description" : "Het aantal schade-opnames en adviesrapporten door de tijd heen. De schade-opname en het adviesrapport zijn voor vrijwel alle schademeldingen nodig om te komen tot een besluit. De trend laat daarmee het potentieel van de schadeafhandeling zien.",
        "endpoint": "opnames",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-trendline','img-graph-container-vertical-padding']
    },
    {
    "label": "Flow doorlooptijden",
    "slug": "flow_doorlooptijden",
    "mapping": [[

        {
            "label" : "Nieuwe meldingen",
            "column" : "nieuw_schademeldingen",
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
            "column" : "nieuw_afgehandeld",
            "outflow" : "",
            "duration" : "",
            "colour": "yellow"
        }
    ]
    ],
    "config": {
        "graphType": "FlowDossierCount",
        "xScaleType": "linear",
        "yScaleType": false,
        "xParameter": "cumulativeDuration",
        "yParameter": "label",
        "padding": {
            "top": 30,
            "bottom": 0, // = ruimte onder ballen
            "left": 0,
            "right": 0
        },
        "margin": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0
        },
        "extra": {
            'radiusFactor': .4,
            'minRadius': 20,
            "header": "Voortgang per procedurestap",
            "paddingInner" : .5,
            "paddingOuter" : .5
        }
    },
    "description" : "Een schademelding doorloopt een aantal stappen in de procedure voor afhandeling. Zolang er wekelijks ongeveer net zoveel schademeldingen naar een volgende stap in de procedure gaan als er nieuw binnenkomen, dan is de de capaciteit van de totale schadeafhandeling op niveau. De grafiek toont dus de mate waarin er voortgang is in het totaal van schademeldingen die in behandeling zijn. ",
    "endpoint": "productie",
    "segment": "all",
    "elementClasslist": ['img-graph-container','img-graph-container-12','img-graph-container-flow']
  },
  {
    "label": "Taart Schadevergoedingen",
    "slug": "taart_schadevergoeding_totaal",
    "mapping":  [[
        [
            {
                "label": "Waardedaling",
                "column": "waardedalingsregeling_totaal_verleend",
                "colour": "moss"
            },
            {
                "label": "Fysieke schade",
                "column": "fysieke_schade_totaal_verleend",
                "colour": "blue"
            },
            {
                "label": "Immateriele schade",
                "column": "immateriele_schade_totaal_verleend",
                "colour": "orange"
            }
        ],
        [
            {
                "label": "Totaal",
                "column": "waardedalingsregeling_totaal_verleend",
                "colour": "gray"
            }
        ]
    ]],
    "config": {

        "graphType": "PieChartSum",
        "xScaleType" : false,
        "yScaleType" : false,
        "xParameter" : false,
        "yParameter" : false,
        "padding": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0
        },
        "margin": {
            "top": 0,
            "bottom": 15,
            "left": 0,
            "right": 0
        },
        "extra" :{
            "currencyLabels" : true,
            "legendWidth" : 220,
            "maxRadius" : 100,
            "innerRadius" : 20,
            "header" : "Schadevergoedingen",
            "segmentIndicator": true,
        }
    },
    "description" : "De diverse soorten schadevergoedingen die het IMG toekent uitgesplitst en als totaal opgeteld. De Stuwmeerregeling is afgelopen. Maar voor enkele van die dossiers worden nog vergoedingen toegekend omdat deze op basis van facturen van aannemers worden toegekend.",
    "endpoint": "vergoedingen",
    "segment": "all",
    "elementClasslist": ['img-graph-container','img-graph-container-4']
    },
        // {
        //     "label": "Taart AOS Gegrond",
        //     "slug": "meldingen_taart_aos_meldingen",
        //     "mapping":  [[
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
        //         ],
        //         [
        //             {
        //                 "label": "Totaal",
        //                 "column": "aos_meldingen",
        //                 "colour": "gray"
        //             }
        //         ]
        //     ]],
        //     "config": {
        //
        //         "graphType": "PieChartSum",
        //         "xScaleType" : false,
        //         "yScaleType" : false,
        //         "xParameter" : false,
        //         "yParameter" : false,
        //         "padding": {
        //             "top": 0,
        //             "bottom": 0,
        //             "left": 0,
        //             "right": 0
        //         },
        //         "margin": {
        //             "top": 0,
        //             "bottom": 15,
        //             "left": 0,
        //             "right": 0
        //         },
        //         "extra" :{
        //             "currencyLabels" : false,
        //             "legendWidth" : 220,
        //             "maxRadius" : 100,
        //             "innerRadius" : 20,
        //             "tieten": false,
        //             "header" : "Wel/niet acuut onveilige situatie"
        //         }
        //     },
        //     "description" : "Het aantal meldingen van een mogelijk acuut onveilige situatie in totaal, waarbij ook het aantal meldingen is aangeven waar na een veiligheidsinspectie een acuut onveilige situatie is vastgesteld. Na het vaststellen ervan, neemt het IMG preventieve veiligheidsmaatregelen.",
        //     "endpoint": "voortgang",
        //     "segment": "all",
        //     "elementClasslist": ['img-graph-container','img-graph-container-4']
        // },
    {
        "label": "Taart Bezwaren",
        "slug": "taart_bezwaren",
        "mapping":  [[
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
                    "column": false,
                    "colour": false
                }
            ],
            [
                {
                    "label": "In behandeling",
                    "column": "bezwaren_in_behandeling",
                    "colour": "gray"
                }
            ]
        ]],
        "config": {

            "graphType": "PieChartSum",
            "xScaleType" : false,
            "yScaleType" : false,
            "xParameter" : false,
            "yParameter" : false,
            "padding": {
                "top": 0,
                "bottom": 0,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 0,
                "bottom": 15,
                "left": 0,
                "right": 0
            },
            "extra" :{
                "currencyLabels" : false,
                "legendWidth" : 220,
                "maxRadius" : 100,
                "innerRadius" : 20,
                "header" : "Bezwaren",
                "segmentIndicator": true,
            }
        },
        "description" : "De besluiten die het IMG neemt over aanvragen tot schadevergoeding staan open voor bezwaar. Het aantal bezwaren zegt iets over de mate waarin er tevredenheid is over de aanpak en handelwijze van het IMG.",
        "endpoint": "reacties",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4']
    },
    {
        "label": "Taart Specials",
        "slug": "taart_specials",
        "mapping":  [[
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
                    "column": false,
                    "colour": false
                }
            ]
        ]],
        "config": {

            "graphType": "PieChartSum",
            "xScaleType" : false,
            "yScaleType" : false,
            "xParameter" : false,
            "yParameter" : false,
            "padding": {
                "top": 0,
                "bottom": 0,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 0,
                "bottom": 15,
                "left": 0,
                "right": 0
            },
            "extra" :{
                "currencyLabels" : false,
                "legendWidth" : 220,
                "maxRadius" : 100,
                "innerRadius" : 20,
                "header" : "Speciale dossiers",
                "segmentIndicator": true,
            }
        },
        "description" : "Sommige schademeldingen hebben speciale aandacht nodig, zoals voor monumenten, bedrijven en agrariërs. Dit worden ook wel specials genoemd. De doorlooptijd voor de specials wijkt af van de reguliere schademeldingen voor woonhuizen zonder bijzondere omstandigheden.",
        "endpoint": "specials",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4']
    }
]

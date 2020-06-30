import { GraphObject} from '../types/graphObject';

export const dashboardMain : GraphObject[] = [
    {
    "label" : "Bol schademeldingen",
    "slug" : "bol_schademeldingen",
    "mapping": [
        [
          {
            "label": "Vorige week: nieuw",
            "column": "nieuw_schademeldingen",
            "colour": "orange"
          },
          {
            "label": "Schade-meldingen",
            "column": "gem_MELDING",
            "colour": "orange"
          },
          {
            "label": "Schade-meldingen",
            "column": "schademeldingen",
            "colour": "orange"
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
        "bottom": 80,
        "left": 0,
        "right": 0
      },
      "margin": {
        "top": 90,
        "bottom": 0,
        "left": 10,
        "right": 10
      },
      "extra": {
          "useLineFill": true,
          "units": "meldingen",
          "segmentIndicator": true,
          "link": "meldingen",
      }
    },
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus in ligula ac tempus. In tempor nisi quam, a volutpat arcu tincidunt nec. Fusce blandit neque vitae quam facilisis viverra. Nulla dapibus justo et pellentesque egestas. In ut justo diam. Pellentesque efficitur arcu magna, vel volutpat eros porta eget. Maecenas eu lorem in lacus congue porta. Vestibulum vel leo ut neque pellentesque posuere sed ut enim.",
    "endpoint": "https://img.publikaan.nl/open-data/api/meldingen",
    "segment": "all",
    "elementClasslist": ['img-graph-container','img-graph-container-3','img-grap-container-bol']
  },
    {
        "label" : "Bol afgehandelde meldingen",
        "slug" : "bol_afgehandelde_meldingen",
        "mapping": [
            [
                {
                    "label": "Vorige week: afgehandeld",
                    "column": "nieuw_afgehandeld",
                    "colour": "blue"
                },
                {
                    "label": "Afgehandelde schade-meldingen",
                    "column": "gem_afgehandeld",
                    "colour": "blue"
                },
                {
                    "label": "Afgehandelde schade-meldingen",
                    "column": "afgehandeld",
                    "colour": "blue"
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
                "bottom": 80,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 90,
                "bottom": 0,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "units": "meldingen",
                "segmentIndicator": true
            }
        },
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus in ligula ac tempus. In tempor nisi quam, a volutpat arcu tincidunt nec. Fusce blandit neque vitae quam facilisis viverra. Nulla dapibus justo et pellentesque egestas. In ut justo diam. Pellentesque efficitur arcu magna, vel volutpat eros porta eget. Maecenas eu lorem in lacus congue porta. Vestibulum vel leo ut neque pellentesque posuere sed ut enim.",
        "endpoint": "https://img.publikaan.nl/open-data/api/voortgang",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-grap-container-bol']

    },
  {
    "label" : "Bol percentage binnen half jaar",
    "slug" : "bol_binnen_half_jaar",
    "mapping": [
      [
        {
          "label": "In half jaar afgehandeld",
          "column": "percentage_binnen_half_jaar",
          "colour": "moss"
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
        "bottom": 80,
        "left": 0,
        "right": 0
      },
      "margin": {
        "top": 90,
        "bottom": 0,
        "left": 10,
        "right": 10
      },
      "extra": {
          "useLineFill": true,
          "units": "%",
          "segmentIndicator": false,
          "notNull": true
      }
    },
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus in ligula ac tempus. In tempor nisi quam, a volutpat arcu tincidunt nec. Fusce blandit neque vitae quam facilisis viverra. Nulla dapibus justo et pellentesque egestas. In ut justo diam. Pellentesque efficitur arcu magna, vel volutpat eros porta eget. Maecenas eu lorem in lacus congue porta. Vestibulum vel leo ut neque pellentesque posuere sed ut enim.",
    "endpoint": "https://img.publikaan.nl/open-data/api/voortgang",
    "segment": "all",
    "elementClasslist": ['img-graph-container','img-graph-container-3','img-grap-container-bol']
  },
  {
    "label" : "Bol gerealiseerde doorlooptijd",
    "slug" : "bol_doorlooptijd",
    "mapping": [
      [
        {
          "label": "Gem. tijd tot besluit",
          "column": "mediaan_doorlooptijd",
          "colour": "brown"
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
        "bottom": 80,
        "left": 0,
        "right": 0
      },
      "margin": {
        "top": 90,
        "bottom": 0,
        "left": 10,
        "right": 10
      },
        "extra": {
            "useLineFill": true,
            "units": "dagen",
            "segmentIndicator": false,
            "notNull": true
    }
    },
    "description" : "In de paarse bol is te zien hoe lang het duurt voor een schademelding voor een gewoon woonhuis (regulier dossier) is afgehandeld. Het gaat om het verschil in kalenderdagen van schademelding tot besluit. De lijngrafiek onder de bollen toont de ontwikkeling over de afgelopen acht week. Op de stippellijn is te zien wat het gemiddelde is geweest in die periode. Het gaat hier om een getal bij benadering (de mediaan), berekend over de laatste duizend besluiten. Het is daarmee ook een voortschrijdend cijfer. Het betekent dat bij de laatste duizend besluiten vijftig procent van de dossiers meer doorlooptijd in dagen hadden en 50 procent minder doorlooptijd tot het besluit. De mediaan is voor dit onderwerp een realistische getal dan het gemiddelde dat soms extreem wordt beïnvloed door slechts enkele zeer positieve of zeer negatieve dossiers waar het gaat om de doorlooptijd. ",
    "endpoint": "https://img.publikaan.nl/open-data/api/voortgang",
    "segment": "all",
    "elementClasslist": ['img-graph-container','img-graph-container-3','img-grap-container-bol']
  },
    {   "label": "In behandeling",
        "slug": "trend_schademeldingen",
        "mapping": [
            [
                {
                    "label": "Nieuw",
                    "column": "nieuw_schademeldingen",
                    "colour": "orange"
                },
                {
                    "label": "Afgehandeld",
                    "column": "nieuw_afgehandeld",
                    "colour": "blue"
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
                "xScaleTicks": "timeMonth",
                "useLineFill": true,
                "header" : "Nieuwe - t.o.v afgehandelde schademeldingen ",
                "segmentIndicator": true,
                "legend" : true,
            }
        },
        "description" : "Het percentage schademeldingen voor gewone woningen dat binnen een half jaar is afgehandeld. We noemen dit ook wel reguliere dossiers en die beslaan verreweg het merendeel van alle schademeldingen. De lijngrafiek eronder toont de ontwikkeling in de laatste acht weken. Op de stippellijn is te zien wat het gemiddelde is geweest in die periode. Het percentage wordt berekend door voor de laatste duizend besluiten te berekenen wat de doorlooptijd per dossier is geweest waarover is besloten. Als dat 182 dagen of minder is geweest (een half jaar) dan wordt dat meegenomen in het genoemde percentage. Omdat dit telkens over de laatste duizend besluiten wordt berekend, is het een voortschrijdend cijfer. Samen met de grafiek 1. 'Gerealiseerde en verwachte doorlooptijd' schets dit de voortgang van de schadeafhandeling voor reguliere dossiers in het licht van het streven om alle nieuwe reguliere schademeldingen binnen een half jaar af te handelen.",
        "endpoint": "https://img.publikaan.nl/open-data/api/voortgang",
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
                    "colour": "moss"
                },
                {
                    "label": "Adviesrapporten",
                    "column": "nieuw_adviesrapporten",
                    "colour": "purple"
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
                "xScaleTicks": "timeMonth",
                "useLineFill": true,
                "header" : "Productie IMG",
                "segmentIndicator": true,
                "link": "de voortgang",
                "legend": true,
            }
        },
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus in ligula ac tempus. In tempor nisi quam, a volutpat arcu tincidunt nec. Fusce blandit neque vitae quam facilisis viverra. Nulla dapibus justo et pellentesque egestas. In ut justo diam. Pellentesque efficitur arcu magna, vel volutpat eros porta eget. Maecenas eu lorem in lacus congue porta. Vestibulum vel leo ut neque pellentesque posuere sed ut enim.",
        "endpoint": "https://img.publikaan.nl/open-data/api/opnames",
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
            "inflow" : "nieuw_schademeldingen",
            "duration" : ""
        },
        {
            "label" : "Ontvangst & Analyse",
            "column" : "in_fase_ontvangst",
            "inflow" : "instroom_fase_ingepland_voor_opname",
            "duration" : "",
            "colour": "brown"
        },
        {
            "label" : "Planning schade-opname",
            "column" : "in_fase_planning_opname",
            "inflow" : "instroom_fase_opleveren_rapport_bewoner",
            "duration" : "",
            "colour": "yellow"
        },
        {
            "label" : "Ingepland voor opname",
            "column" : "in_fase_ingepland_voor_opname",
            "inflow" : "instroom_fase_rapport_bij_bewoner",
            "duration" : "",
            "colour": "violet"
        },
        {
            "label" : "Opleveren rapport",
            "column" : "in_fase_opleveren_rapport_bewoner",
            "inflow" : "instroom_fase_voorbereiden_besluit",
            "duration" : "",
            "colour": "purple"
        },
        {
            "label" : "Rapport bij bewoner",
            "column" : "in_fase_rapport_bij_bewoner",
            "inflow" : "PRODUCTIE_RAPPORT_BEWONER",
            "duration" : "",
            "colour": "green"
        },
        {
            "label" : "Voorbereiden besluit",
            "column" : "in_fase_voorbereiden_besluit",
            "inflow" : "",
            "duration" : "",
            "colour": "blue"
        },
        {
            "label" : "Afgerond",
            "column" : "nieuw_afgehandeld",
            "inflow" : "",
            "duration" : "",
        }
    ]
    ],
    "config": {
        "graphType": "FlowDossierCount",
        "xScaleType": "linear",
        "yScaleType": false,
        "xParameter": "cumulativeDuration",
        "yParameter": false,
        "padding": {
            "top": 0,
            "bottom": 120, // = ruimte onder ballen
            "left": 0,
            "right": 0
        },
        "margin": {
            "top": 40,
            "bottom": 0,
            "left": 0,
            "right": 0
        },
        "extra": {
            'radiusFactor': .4,
            'minRadius': 20,
            "link": "de voortgang",
            "header": "Aantal dossiers per status in procedure"
        }
    },
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus in ligula ac tempus. In tempor nisi quam, a volutpat arcu tincidunt nec. Fusce blandit neque vitae quam facilisis viverra. Nulla dapibus justo et pellentesque egestas. In ut justo diam. Pellentesque efficitur arcu magna, vel volutpat eros porta eget. Maecenas eu lorem in lacus congue porta. Vestibulum vel leo ut neque pellentesque posuere sed ut enim.",
    "endpoint": "https://img.publikaan.nl/open-data/api/productie",
    "segment": "all",
    "elementClasslist": ['img-graph-container','img-graph-container-12','img-graph-container-flow']
  },
  {
    "label": "Taart Schadevergoedingen",
    "slug": "taart_schadevergoeding_totaal",
    "mapping":  [[
        [
            {
                "label": "Mijnbouwschade",
                "column": "schadevergoeding_schadebedrag",
                "colour": "brown"
            },
            {
                "label": "Stuwmeerregeling",
                "column": "schadevergoeding_stuwmeerregeling_bedrag",
                "colour": "blue"
            },
            {
                "label": "Bijkomende kosten",
                "column": "schadevergoeding_bijkomende_kosten_bedrag",
                "colour": "moss"
            },
            {
                "label": "Wettelijke rente",
                "column": "schadevergoeding_wettelijke_rente_bedrag",
                "colour": "orange"
            }
        ],
        [
            {
                "label": "Totaal",
                "column": "TOTAAL_VERLEEND",
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
    "description" : "",
    "endpoint": "https://img.publikaan.nl/open-data/api/vergoedingen",
    "segment": "all",
    "elementClasslist": ['img-graph-container','img-graph-container-4']

  },
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
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus in ligula ac tempus. In tempor nisi quam, a volutpat arcu tincidunt nec. Fusce blandit neque vitae quam facilisis viverra. Nulla dapibus justo et pellentesque egestas. In ut justo diam. Pellentesque efficitur arcu magna, vel volutpat eros porta eget. Maecenas eu lorem in lacus congue porta. Vestibulum vel leo ut neque pellentesque posuere sed ut enim.",
        "endpoint": "https://img.publikaan.nl/open-data/api/reacties",
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
                "header" : "Specials",
                "segmentIndicator": true,
            }
        },
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus in ligula ac tempus. In tempor nisi quam, a volutpat arcu tincidunt nec. Fusce blandit neque vitae quam facilisis viverra. Nulla dapibus justo et pellentesque egestas. In ut justo diam. Pellentesque efficitur arcu magna, vel volutpat eros porta eget. Maecenas eu lorem in lacus congue porta. Vestibulum vel leo ut neque pellentesque posuere sed ut enim.",
        "endpoint": "https://img.publikaan.nl/open-data/api/specials",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4']
    }
]
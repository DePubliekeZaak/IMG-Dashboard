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
            "colour": "red"
          },
          {
            "label": "Schade-meldingen",
            "column": "gem_MELDING",
            "colour": "red"
          },
          {
            "label": "Schade-meldingen",
            "column": "schademeldingen",
            "colour": "red"
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
          "firstInLine": false,
          "units": "meldingen",
          "link": "meldingen",
      }
    },
    "description" : "",
    "endpoint": "https://img.publikaan.nl/open-data/api/meldingen",
    "segment": "all"
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
                "left": 10,
                "right": 10
            },
            "margin": {
                "top": 90,
                "bottom": 0,
                "left": 0,
                "right": 0
            },
            "extra": {
                "useLineFill": true,
                "units": "meldingen",
                "link": "besluiten",
                // "units": "afgehandeld"
            }
        },
        "description" : "",
        "endpoint": "https://img.publikaan.nl/open-data/api/voortgang",
        "segment": "all"

    },
  {
    "label" : "Bol percentage binnen half jaar",
    "slug" : "bol_binnen_half_jaar",
    "mapping": [
      [
        {
          "label": "In half jaar afgehandeld",
          "column": "percentage_binnen_half_jaar",
          "colour": "green"
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
          "link": "de voortgang"
      }
    },
    "description" : "",
    "endpoint": "https://img.publikaan.nl/open-data/api/voortgang",
    "segment": "all"
  },
  {
    "label" : "Bol gerealiseerde doorlooptijd",
    "slug" : "bol_doorlooptijd",
    "mapping": [
      [
        {
          "label": "Gem. tijd tot besluit",
          "column": "mediaan_doorlooptijd",
          "colour": "purple"
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
            "link": "de voortgang",
    }
    },
    "description" : "In de paarse bol is te zien hoe lang het duurt voor een schademelding voor een gewoon woonhuis (regulier dossier) is afgehandeld. Het gaat om het verschil in kalenderdagen van schademelding tot besluit. De lijngrafiek onder de bollen toont de ontwikkeling over de afgelopen acht week. Op de stippellijn is te zien wat het gemiddelde is geweest in die periode. Het gaat hier om een getal bij benadering (de mediaan), berekend over de laatste duizend besluiten. Het is daarmee ook een voortschrijdend cijfer. Het betekent dat bij de laatste duizend besluiten vijftig procent van de dossiers meer doorlooptijd in dagen hadden en 50 procent minder doorlooptijd tot het besluit. De mediaan is voor dit onderwerp een realistische getal dan het gemiddelde dat soms extreem wordt beïnvloed door slechts enkele zeer positieve of zeer negatieve dossiers waar het gaat om de doorlooptijd. ",
    "endpoint": "https://img.publikaan.nl/open-data/api/voortgang",
    "segment": "all",
  },
    {   "label": "In behandeling",
        "slug": "trend_schademeldingen",
        "mapping": [
            [
                {
                    "label": "Nieuw",
                    "column": "nieuw_schademeldingen",
                    "colour": "red"
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
                "link": "meldingen",
                "legend" : true,
            }
        },
        "description" : "Het percentage schademeldingen voor gewone woningen dat binnen een half jaar is afgehandeld. We noemen dit ook wel reguliere dossiers en die beslaan verreweg het merendeel van alle schademeldingen. De lijngrafiek eronder toont de ontwikkeling in de laatste acht weken. Op de stippellijn is te zien wat het gemiddelde is geweest in die periode. Het percentage wordt berekend door voor de laatste duizend besluiten te berekenen wat de doorlooptijd per dossier is geweest waarover is besloten. Als dat 182 dagen of minder is geweest (een half jaar) dan wordt dat meegenomen in het genoemde percentage. Omdat dit telkens over de laatste duizend besluiten wordt berekend, is het een voortschrijdend cijfer. Samen met de grafiek 1. 'Gerealiseerde en verwachte doorlooptijd' schets dit de voortgang van de schadeafhandeling voor reguliere dossiers in het licht van het streven om alle nieuwe reguliere schademeldingen binnen een half jaar af te handelen.",
        "endpoint": "https://img.publikaan.nl/open-data/api/voortgang",
        "segment": "all"
    },
    {   "label": "Werkvoorraad",
        "slug": "trend_in_behandeling",
        "mapping": [
            [
                {
                    "label": "Schade-opnames",
                    "column": "nieuw_schade_opnames",
                    "colour": "green"
                },
                {
                    "label": "Adviesrapporten",
                    "column": "nieuw_adviesrapporten",
                    "colour": "purple"
                },
                {
                    "label": "Besluiten",
                    "column": "nieuw_besluiten",
                    "colour": "blue"
                }
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
                "link": "de voortgang",
                "legend": true,
            }
        },
        "description" : "",
        "endpoint": "https://img.publikaan.nl/open-data/api/opnames",
        "segment": "all"
    },
    {
    "label": "Flow doorlooptijden",
    "slug": "flow_doorlooptijden",
    "mapping": [[

        {
            "label" : "Nieuwe meldingen",
            "column" : "nieuw_schademeldingen",

        },
        {
            "label" : "Ontvangst & Analyse",
            "column" : "PRODUCTIE_ONTVANGST_ANALYSE",
            "colour": "brown"
        },
        {
            "label" : "Planning schade-opname",
            "column" : "PRODUCTIE_GEREED_INPLANNING",
            "colour": "blue"
        },
        {
            "label" : "Ingepland voor opname",
            "column" : "PRODUCTIE_INGEPLAND_OPNAME",
            "colour": "violet"
        },
        {
            "label" : "Opleveren rapport",
            "column" : "PRODUCTIE_OPLEVEREN_RAPPORT",
            "colour": "purple"
        },
        {
            "label" : "Rapport bij bewoner",
            "column" : "PRODUCTIE_RAPPORT_BEWONER",
            "colour": "green"
        },
        {
            "label" : "Voorbereiden besluit",
            "column" : "PRODUCTIE_VOORBEREIDEN_BESLUIT",
            "colour": "yellow"
        },
        {
            "label" : "Afgerond",
            "column" : "nieuw_afgehandeld",
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
    "description" : "",
    "endpoint": "https://img.publikaan.nl/open-data/api/productie",
    "segment": "all"
  },
  {
    "label": "Taart Schadevergoedingen",
    "slug": "taart_schadevergoeding_totaal",
    "mapping":  [[
        [
            {
                "label": "Mijnbouwschade",
                "column": "schadevergoeding_schadebedrag",
                "colour": "yellow"
            },
            {
                "label": "Stuwmeerregeling",
                "column": "schadevergoeding_stuwmeerregeling_bedrag",
                "colour": "blue"
            },
            {
                "label": "Bijkomende kosten",
                "column": "schadevergoeding_bijkomende_kosten_bedrag",
                "colour": "green"
            },
            {
                "label": "Wettelijke rente",
                "column": "schadevergoeding_wettelijke_rente_bedrag",
                "colour": "red"
            }
        ],
        [
            {
                "label": "Totaal",
                "column": "TOTAAL_VERLEEND",
                "colour": "yellow"
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
            "header" : "Schadevergoedingen"
        }
    },
    "description" : "",
    "endpoint": "https://img.publikaan.nl/open-data/api/vergoedingen",
    "segment": "all"
  },
    {
        "label": "Taart Bezwaren",
        "slug": "taart_bezwaren",
        "mapping":  [[
            [
                {
                    "label": "Gegrond",
                    "column": "bezwaren_gegrond",
                    "colour": "brown"
                },
                {
                    "label": "Deels gegrond",
                    "column": "bezwaren_deels_gegrond",
                    "colour": "blue"
                },
                {
                    "label": "Ongegrond",
                    "column": "bezwaren_ongegrond",
                    "colour": "violet"
                },
                {
                    "label": "Niet ontvankelijk",
                    "column": "bezwaren_niet_ontvankelijk",
                    "colour": "purple"
                },
                {
                    "label": "Ingetrokken",
                    "column": "bezwaren_ingetrokken",
                    "colour": "green"
                },
                {
                    "label": "Naar schadeprocedure",
                    "column": "bezwaren_doorgezet",
                    "colour": "red"
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
                    "colour": "yellow"
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
                "header" : "Bezwaren"
            }
        },
        "description" : "",
        "endpoint": "https://img.publikaan.nl/open-data/api/reacties",
        "segment": "all"
    },
    {
        "label": "Taart Specials",
        "slug": "taart_specials",
        "mapping":  [[
            [
                {
                    "label": "Afgehandelde specials",
                    "column": "specials_afgehandeld",
                    "colour": "green"
                },
                {
                    "label": "Specials in behandeling",
                    "column": "specials_in_behandeling",
                    "colour": "yellow"
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
                "header" : "Specials"
            }
        },
        "description" : "",
        "endpoint": "https://img.publikaan.nl/open-data/api/specials",
        "segment": "all"
    }

]
import { GraphObject} from '../types/graphObject';

export const dashboardArray : GraphObject[] = [
    {
    "label" : "Bol schademeldingen",
    "slug" : "bol_schademeldingen",
    "mapping": [
        [
          {
            "label": "Schade-meldingen",
            "column": "nieuwe_schademeldingen",
            "colour": "red"
          },
          {
            "label": "Schade-meldingen",
            "column": "gem_MELDING",
            "colour": "red"
          },
          {
            "label": "Schade-meldingen",
            "column": "MELDING",
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
          "firstInLine": true,
          // "units": "schademeldingen"
      }
    },
    "endpoint": "/api/data",
    "segment": "all",
    "publishDate": false
  },
  {
    "label" : "Bol schadeopnames",
    "slug" : "bol_schadeopnames",
    "mapping": [
      [
        {
          "label": "Schade-opnames",
          "column": "nieuwe_schadeopnames",
          "colour": "blue"
        },
        {
          "label": "Schade-opnames",
          "column": "gem_OPNAMES",
          "colour": "blue"
        },
        {
          "label": "Schade-opnames",
          "column": "OPNAMES",
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
          // "units": "schade-opnames"
      }
    },
    "endpoint": "/api/data",
    "segment": "all",
    "publishDate": false
  },
  {
    "label" : "Bol besluiten",
    "slug" : "bol_besluiten",
    "mapping": [
      [
        {
          "label": "Besluiten",
          "column": "nieuwe_besluiten_regulier",
          "colour": "green"
        },
        {
          "label": "Schade-meldingen",
          "column": "gem_BESCHIKT",
          "colour": "green"
        },

        {
          "label": "Schade-opnames",
          "column": "BESCHIKT",
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
            // "units": "besluiten"
    }
    },
    "endpoint": "/api/data",
    "segment": "all",
    "publishDate": false
  },
  {
    "label" : "Bol afgehandelde meldingen",
    "slug" : "bol_afgehandelde_meldingen",
    "mapping": [
      [
        {
          "label": "Afgehandelde meldingen",
          "column": "nieuwe_afgehandeld",
          "colour": "purple"
        },
        {
          "label": "Afgehandelde schade-meldingen",
          "column": "gem_AFGEHANDELD_TOTAAL",
          "colour": "purple"
        },
        {
          "label": "Afgehandelde schade-meldingen",
          "column": "AFGEHANDELD_TOTAAL",
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
            // "units": "afgehandeld"
      }
    },
    "endpoint": "/api/data",
    "segment": "all",
    "publishDate": false
    },
    {   "label": "In behandeling",
        "slug": "trend_schademeldingen",
        "mapping": [
            [
                {
                    "label": "meldingen",
                    "column": "nieuwe_schademeldingen",
                    "colour": "red"
                },
                {
                    "label": "Besluiten",
                    "column": "nieuwe_besluiten_regulier",
                    "colour": "green"
                }
            ]
        ],
        "config": {
            "graphType": "TrendLine",
            "xScaleType": "time",
            "yScaleType": "linear",
            "xParameter": "_date",
            "yParameter": "nieuwe_schademeldingen",
            "padding": {
                "top": 40,
                "bottom": 0,
                "left": 40,
                "right": 40
            },
            "margin": {
                "top": 80,
                "bottom": 45,
                "left": 0,
                "right": 0
            },
            "extra": {
                "xScaleTicks": "timeMonth",
                "useLineFill": true,
                "header" : "Besluiten t.o.v. nieuwe schademeldingen",
                "link": "de voortgang",
                "label": "label"
            }
        },
        "endpoint": "/api/data",
        "segment": "all",
        "publishDate": false
    },
    {   "label": "Werkvoorraad",
        "slug": "trend_in_behandeling",
        "mapping": [
            [
                {
                    "label": "In behandeling",
                    "column": "WERKVOORRAAD_IN_BEHANDELING",
                    "colour": "yellow"
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
                "top": 40,
                "bottom": 0,
                "left": 40,
                "right": 40
            },
            "margin": {
                "top": 80,
                "bottom": 45,
                "left": 0,
                "right": 0
            },
            "extra": {
                "xScaleTicks": "timeMonth",
                "useLineFill": true,
                "header" : "Dossiers in behandeling",
                "link": "de voortgang",
                "label": "value"
            }
        },
        "endpoint": "/api/data",
        "segment": "all",
        "publishDate": false
    },
    {
    "label": "Flow doorlooptijden",
    "slug": "flow_doorlooptijden",
    "mapping": [],
    "config": {
        "graphType": "Flow",
        "xScaleType": "linear",
        "yScaleType": false,
        "xParameter": "cumulativeDuration",
        "yParameter": false,
        "padding": {
            "top": 60,
            "bottom": 0, // = ruimte onder ballen
            "left": 0,
            "right": 360
        },
        "margin": {
            "top": 160,
            "bottom": 0,
            "left": 0,
            "right": 0
        },
        "extra": {
            'radiusFactor': .5,
            'minRadius': 20,
        }
    },
    "endpoint": "/api/data",
    "segment": "all",
    "publishDate": false
  },
  {
    "label": "Taart Schadevergoedingen",
    "slug": "taart_schadevergoeding_totaal",
    "mapping":  [[
        [
            {
                "label": "Mijnbouwschade",
                "column": "BEDRAG_SCHADEBEDRAG",
                "colour": "yellow"
            },
            {
                "label": "Stuwmeerregeling",
                "column": "BEDRAG_SMR",
                "colour": "blue"
            },
            {
                "label": "Bijkomende kosten",
                "column": "BEDRAG_BIJKOMENDE_KOSTEN",
                "colour": "green"
            },
            {
                "label": "Wettelijke rente",
                "column": "BEDRAG_WETTELIJKE_RENTE",
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
    "endpoint": "/api/data",
    "segment": "all",
    "publishDate": false
  },
    {
        "label": "Taart Bezwaren",
        "slug": "taart_bezwaren",
        "mapping":  [[
            [
                {
                    "label": "Gegrond",
                    "column": "BEZWAAR_GEGROND",
                    "colour": "brown"
                },
                {
                    "label": "Deels gegrond",
                    "column": "BEZWAAR_DEELS_GEGROND",
                    "colour": "blue"
                },
                {
                    "label": "Ongegrond",
                    "column": "BEZWAAR_ONGEGROND",
                    "colour": "violet"
                },
                {
                    "label": "Niet ontvankelijk",
                    "column": "BEZWAAR_NIET_ONTVANKELIJK",
                    "colour": "purple"
                },
                {
                    "label": "Ingetrokken",
                    "column": "BEZWAAR_INGETROKKEN",
                    "colour": "green"
                },
                {
                    "label": "Naar schadeprocedure",
                    "column": "BEZWAAR_DOORGEZET_SCHADEP",
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
                    "column": "BEZWAAR_IN_BEHANDELING",
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
        "endpoint": "/api/data",
        "segment": "all",
        "publishDate": false
    },
    {
        "label": "Taart Specials",
        "slug": "taart_specials",
        "mapping":  [[
            [
                {
                    "label": "Afgehandelde specials",
                    "column": "SPECIALS_AFGEHANDELD_TOTAAL",
                    "colour": "green"
                },
                {
                    "label": "Specials in behandeling",
                    "column": "SPECIALS_WERKVOORRAAD_IN_BEH",
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
        "endpoint": "/api/data",
        "segment": "all",
        "publishDate": false
    }

]
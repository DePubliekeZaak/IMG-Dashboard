import { GraphObject} from '../types/graphObject';

export const dashboardOpnames : GraphObject[] = [
    {   "label": "Schademeldingen",
        "slug": "meldingen_trend_schademeldingen",
        "mapping": [
            [
                {
                    "label": "Nieuw",
                    "column": "nieuw_schademeldingen",
                    "colour": "red"
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
                "header" : "Schademeldingen per week",
                "link": "meldingen",
                "legend" : true,
            }
        },
        "description" : "Het percentage schademeldingen voor gewone woningen dat binnen een half jaar is afgehandeld. We noemen dit ook wel reguliere dossiers en die beslaan verreweg het merendeel van alle schademeldingen. De lijngrafiek eronder toont de ontwikkeling in de laatste acht weken. Op de stippellijn is te zien wat het gemiddelde is geweest in die periode. Het percentage wordt berekend door voor de laatste duizend besluiten te berekenen wat de doorlooptijd per dossier is geweest waarover is besloten. Als dat 182 dagen of minder is geweest (een half jaar) dan wordt dat meegenomen in het genoemde percentage. Omdat dit telkens over de laatste duizend besluiten wordt berekend, is het een voortschrijdend cijfer. Samen met de grafiek 1. 'Gerealiseerde en verwachte doorlooptijd' schets dit de voortgang van de schadeafhandeling voor reguliere dossiers in het licht van het streven om alle nieuwe reguliere schademeldingen binnen een half jaar af te handelen.",
        "endpoint": "http://img.publikaan.nl/open-data/api/meldingen",
        "segment": "all"
    },
    {
        "label" : "Kaart schademeldingen",
        "slug" : "meldingen_kaart_schademeldingen",
        "mapping": [
            [
                {
                    "label": "Schademeldingen",
                    "column": "schademeldingen",
                    "colour": "red"
                }
            ]
        ],
        "config": {
            "graphType": "Map",
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
                "bottom":0,
                "left": 0,
                "right": 0
            },
            "extra" : {
                "legendWidth" : 240,
                "currencyLabels" : false,
                "header" : "Spreiding van schademeldingen"
            }
        },
        "description" : "",
        "endpoint": "http://img.publikaan.nl/open-data/api/meldingen?limit=60",
        "segment": false,
        "publishDate": false
    },
    {   "label": "AOS meldingen",
        "slug": "meldingen_trend_aos_meldingen",
        "mapping": [
            [
                {
                    "label": "AOS meldingen",
                    "column": "nieuw_aos_meldingen",
                    "colour": "green"
                },
                {
                    "label": "Gegronde AOS meldingen",
                    "column": "nieuw_aos_meldingen_gegrond",
                    "colour": "purple"
                }
            ]
        ],
        "config": {
            "graphType": "TrendLine",
            "xScaleType": "time",
            "yScaleType": "linear",
            "xParameter": "_date",
            "yParameter": "nieuw_aos_meldingen",
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
                "header" : "AOS meldingen",
                "link": "de voortgang",
                "legend": true,
            }
        },
        "description" : "",
        "endpoint": "http://img.publikaan.nl/open-data/api/meldingen",
        "segment": "all"
    },
    // {
    //     "label" : "Kaart AOS meldingen",
    //     "slug" : "meldingen_kaart_aosmeldingen",
    //     "mapping": [
    //         [
    //             {
    //                 "label": "AOS meldingen",
    //                 "column": "aos_meldingen_met_historie",
    //                 "colour": "green"
    //             }
    //         ]
    //     ],
    //     "config": {
    //         "graphType": "Map",
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
    //             "bottom":0,
    //             "left": 0,
    //             "right": 0
    //         },
    //         "extra" : {
    //             "legendWidth" : 240,
    //             "currencyLabels" : false,
    //             "header" : "Spreiding van AOS-meldingen"
    //         }
    //     },
    //     "description" : "",
    //     "endpoint": "http://img.publikaan.nl/open-data/api/meldingen?limit=60",
    //     "segment": false,
    //     "publishDate": false
    // },
    {
        "label": "Taart AOS Gegrond",
        "slug": "meldingen_taart_aos_meldingen",
        "mapping":  [[
            [
                {
                    "label": "Gegrond",
                    "column": "aos_meldingen_gegrond",
                    "colour": "yellow"
                },
                {
                    "label": "Niet gegrond",
                    "column": ['aos_meldingen','aos_meldingen_gegrond','-'],
                    "colour": "green"
                }
            ],
            [
                {
                    "label": "Totaal",
                    "column": "aos_meldingen",
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
                "header" : "Gegronde AOS meldingen"
            }
        },
        "description" : "",
        "endpoint": "http://img.publikaan.nl/open-data/api/voortgang",
        "segment": "all"
    },
  //   {
  //   "label": "Taart openstaande schademeldingen",
  //   "slug": "meldingen_taart_openstaande_schademeldingen",
  //   "mapping":  [[
  //       [
  //           {
  //               "label": "Gemeld bij CVW",
  //               "column": "schademeldingen_cvw",
  //               "colour": "yellow"
  //           },
  //           {
  //               "label": "Voor Westerwijtwerd",
  //               "column": "schademeldingen_voor_westerwijtwerd",
  //               "colour": "green"
  //           },
  //           {
  //               "label": "Na Westerwijtwerd",
  //               "column": "schademeldingen_na_westerwijtwerd",
  //               "colour": "blue"
  //           }
  //       ],
  //       [
  //           {
  //               "label": "Totaal",
  //               "column": "in_behandeling",
  //               "colour": "yellow"
  //           }
  //       ]
  //   ]],
  //   "config": {
  //
  //       "graphType": "PieChartSum",
  //       "xScaleType" : false,
  //       "yScaleType" : false,
  //       "xParameter" : false,
  //       "yParameter" : false,
  //       "padding": {
  //           "top": 0,
  //           "bottom": 0,
  //           "left": 0,
  //           "right": 0
  //       },
  //       "margin": {
  //           "top": 0,
  //           "bottom": 15,
  //           "left": 0,
  //           "right": 0
  //       },
  //       "extra" :{
  //           "currencyLabels" : false,
  //           "legendWidth" : 220,
  //           "maxRadius" : 100,
  //           "innerRadius" : 20,
  //           "header" : "Openstaande schademeldingen"
  //       }
  //   },
  //   "description" : "",
  //   "endpoint": "http://img.publikaan.nl/open-data/api/voortgang",
  //   "segment": "all"
  // }

]
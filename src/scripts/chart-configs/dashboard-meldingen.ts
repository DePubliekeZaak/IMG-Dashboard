import { GraphObject} from '../types/graphObject';

export const dashboardMeldingen : GraphObject[] = [
    {   "label": "Schademeldingen",
        "slug": "meldingen_trend_schademeldingen",
        "mapping": [
            [
                {
                    "label": "Nieuw",
                    "column": "nieuw_schademeldingen",
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
                "largeHeader" : false,
                "header" : "Schademeldingen per week",
                "link": "meldingen",
                "legend" : true,
            }
        },
        "description" : "Het aantal nieuwe schademeldingen per week door de tijd heen. De grote piek komt overeen met de beving van Westerwijtwerd in mei 2019.",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-trendline','img-graph-container-vertical-padding']
    },
    {
        "label" : "Kaart schademeldingen",
        "slug" : "meldingen_kaart_schademeldingen",
        "mapping": [
            [
                {
                    "label": "Schademeldingen",
                    "column": "schademeldingen",
                    "colour": "lightBlue"
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
                "header" : "Spreiding schademeldingen totaal"
            }
        },
        "description" : "Het totaal aantal schademeldingen dat per gemeente is binnengekomen sinds 19 maart 2018, de start van de TCMG. Het IMG zet het werk van de TCMG (die tijdelijk was) structureel voort sinds 1 juli 2020.",
        "endpoint": "meldingen?limit=60",
        "segment": false,
        "publishDate": false,
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-map','img-graph-container-vertical-padding']
    },
    {   "label": "Acuut onveilige situaties",
        "slug": "meldingen_trend_aos_meldingen",
        "mapping": [
            [
                {
                    "label": "AOS Meldingen",
                    "column": "nieuw_aos_meldingen",
                    "colour": "moss"
                },
                {
                    "label": "Acuut onveilige situaties",
                    "column": "nieuw_aos_meldingen_gegrond",
                    "colour": "orange"
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
                "largeHeader" : true,
                "header" : "Trend AOS-meldingen",
                "legend": true,
            }
        },
        "description" : "Het aantal meldingen van een mogelijk acuut onveilige situatie door de tijd heen, waarbij ook het aantal meldingen is aangeven waar na een veiligheidsinspectie een acuut onveilige situatie is vastgesteld. Na het vaststellen ervan, neemt het IMG preventieve veiligheidsmaatregelen.",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-trendline','img-graph-container-vertical-padding']

    },
    {
        "label": "Taart AOS Gegrond",
        "slug": "meldingen_taart_aos_meldingen",
        "mapping":  [[
            [
                {
                    "label": "Wel",
                    "column": "aos_meldingen_gegrond",
                    "colour": "moss"
                },
                {
                    "label": "Niet",
                    "column": ['aos_meldingen','aos_meldingen_gegrond','-'],
                    "colour": "blue"
                }
            ],
            [
                {
                    "label": "Totaal",
                    "column": "aos_meldingen",
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
                "header" : "Wel/niet acuut onveilige situatie"
            }
        },
        "description" : "Het aantal meldingen van een mogelijk acuut onveilige situatie in totaal, waarbij ook het aantal meldingen is aangeven waar na een veiligheidsinspectie een acuut onveilige situatie is vastgesteld. Na het vaststellen ervan, neemt het IMG preventieve veiligheidsmaatregelen.",
        "endpoint": "voortgang",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-vertical-padding']
    }
]

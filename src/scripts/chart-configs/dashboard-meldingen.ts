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
        "endpoint": "https://img.publikaan.nl/open-data/api/meldingen",
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
        "endpoint": "https://img.publikaan.nl/open-data/api/meldingen?limit=60",
        "segment": false,
        "publishDate": false,
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-map','img-graph-container-vertical-padding']
    },
    {   "label": "Voortgang",
        'slug': 'stacked_area_in_behandeling',
        'mapping': [
            [
                {
                    'label': 'Open meldingen CVW',
                    'column': 'schademeldingen_cvw',
                    'colour': 'lightBlue'
                },
                {
                    'label': 'Open meldingen voor Westerwijtwerd',
                    'column': 'schademeldingen_voor_westerwijtwerd',
                    'colour': 'moss'
                },
                {
                    'label': 'Open meldingen na Westerwijtwerd',
                    'column': 'schademeldingen_na_westerwijtwerd',
                    'colour': 'orange'
                }
            ]
        ],
        'config': {
            'graphType': 'StackedArea',
            'xScaleType': 'time',
            'yScaleType': 'linear',
            'xParameter': '_date',
            'yParameter': 'MELDING_NA_WESTERWIJTWERD',
            'padding': {
                'top': 20,
                'bottom': 120,
                'left': 60,
                'right': 30
            },
            'margin': {
                'top': 60,
                'bottom': 100,
                'left': 0,
                'right': 0
            },
            'extra': {
                'xScaleTicks': 'timeMonth',
                'header': 'Openstaande schademeldingen Westerwijtwerd'
            }
        },
        "description" : "Het aantal schademeldingen dat nog in behandeling is voor de beving van Westerwijtwerd van mei 2019 en van na die beving. Bij de start van de TCMG op 19 maart 2018 kwamen ook ruim 13.000 openstaande schademeldingen binnen van het Centrum Veilig Wonen (CVW) dat voor de NAM de schadeafhandeling verzorgde. De schademeldingen die daarvan nog openstaan, worden hier ook getoond.",
        'endpoint': 'https://img.publikaan.nl/open-data/api/meldingen',
        'segment': 'all',
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-grap-container-medium-high','img-graph-container-vertical-padding']
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
        "endpoint": "https://img.publikaan.nl/open-data/api/meldingen",
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
        "endpoint": "https://img.publikaan.nl/open-data/api/voortgang",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-vertical-padding']
    }
]

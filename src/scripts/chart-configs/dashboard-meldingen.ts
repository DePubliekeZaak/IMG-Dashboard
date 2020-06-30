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
                "largeHeader" : true,
                "header" : "Schademeldingen per week",
                "link": "meldingen",
                "legend" : true,
            }
        },
        "description" : "Het percentage schademeldingen voor gewone woningen dat binnen een half jaar is afgehandeld. We noemen dit ook wel reguliere dossiers en die beslaan verreweg het merendeel van alle schademeldingen. De lijngrafiek eronder toont de ontwikkeling in de laatste acht weken. Op de stippellijn is te zien wat het gemiddelde is geweest in die periode. Het percentage wordt berekend door voor de laatste duizend besluiten te berekenen wat de doorlooptijd per dossier is geweest waarover is besloten. Als dat 182 dagen of minder is geweest (een half jaar) dan wordt dat meegenomen in het genoemde percentage. Omdat dit telkens over de laatste duizend besluiten wordt berekend, is het een voortschrijdend cijfer. Samen met de grafiek 1. 'Gerealiseerde en verwachte doorlooptijd' schets dit de voortgang van de schadeafhandeling voor reguliere dossiers in het licht van het streven om alle nieuwe reguliere schademeldingen binnen een half jaar af te handelen.",
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
                "header" : "Spreiding van schademeldingen"
            }
        },
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus in ligula ac tempus. In tempor nisi quam, a volutpat arcu tincidunt nec. Fusce blandit neque vitae quam facilisis viverra. Nulla dapibus justo et pellentesque egestas. In ut justo diam. Pellentesque efficitur arcu magna, vel volutpat eros porta eget. Maecenas eu lorem in lacus congue porta. Vestibulum vel leo ut neque pellentesque posuere sed ut enim.",
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
                'bottom': 100,
                'left': 60,
                'right': 30
            },
            'margin': {
                'top': 60,
                'bottom': 45,
                'left': 0,
                'right': 0
            },
            'extra': {
                'xScaleTicks': 'timeMonth',
                'header': 'Voortgang afhandeling schademeldingen'
            }
        },
        "description" : "",
        'endpoint': 'https://img.publikaan.nl/open-data/api/meldingen',
        'segment': 'all',
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-graph-container-trendline','img-graph-container-vertical-padding']
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
                "header" : "AOS meldingen",
                "link": "de voortgang",
                "legend": true,
            }
        },
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus in ligula ac tempus. In tempor nisi quam, a volutpat arcu tincidunt nec. Fusce blandit neque vitae quam facilisis viverra. Nulla dapibus justo et pellentesque egestas. In ut justo diam. Pellentesque efficitur arcu magna, vel volutpat eros porta eget. Maecenas eu lorem in lacus congue porta. Vestibulum vel leo ut neque pellentesque posuere sed ut enim.",
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
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus in ligula ac tempus. In tempor nisi quam, a volutpat arcu tincidunt nec. Fusce blandit neque vitae quam facilisis viverra. Nulla dapibus justo et pellentesque egestas. In ut justo diam. Pellentesque efficitur arcu magna, vel volutpat eros porta eget. Maecenas eu lorem in lacus congue porta. Vestibulum vel leo ut neque pellentesque posuere sed ut enim.",
        "endpoint": "https://img.publikaan.nl/open-data/api/voortgang",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-vertical-padding']
    },
    {   "label": "Schade opnames",
        "slug": "meldingen_trend_aos_meldingen",
        "mapping": [
            [
                {
                    "label": "Schade opnames",
                    "column": "nieuw_schade_opnames",
                    "colour": "blue"
                },
                {
                    "label": "Nulmetingen",
                    "column": "nieuw_nulmetingen",
                    "colour": "orange"
                }
            ]
        ],
        "config": {
            "graphType": "TrendLine",
            "xScaleType": "time",
            "yScaleType": "linear",
            "xParameter": "_date",
            "yParameter": "nieuw_schade_opnames",
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
                "header" : "AOS meldingen",
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
        "label": "Taart opnames",
        "slug": "meldingen_taart_opnames",
        "mapping":  [[
            [
                {
                    "label": "Aannemersvariant",
                    "column": "schadeopnames_via_aannemersvariant",
                    "colour": "orange"
                },
                {
                    "label": "Schade-opnemers",
                    "column": "schadeopnames_via_opnemersvariant",
                    "colour": "moss"
                },
                {
                    "label": "CVW 2000",
                    "column": "schadeopnames_door_cvw2000",
                    "colour": "brown"
                },
                {
                    "label": "Wooncorporaties",
                    "column": "schadeopnames_door_wooncorporaties",
                    "colour": "blue"
                },
                {
                    "label": "Regulier",
                    "column": "schadeopnames_regulier",
                    "colour": "gray"
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
                "header" : "Opname varianten"
            }
        },
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus in ligula ac tempus. In tempor nisi quam, a volutpat arcu tincidunt nec. Fusce blandit neque vitae quam facilisis viverra. Nulla dapibus justo et pellentesque egestas. In ut justo diam. Pellentesque efficitur arcu magna, vel volutpat eros porta eget. Maecenas eu lorem in lacus congue porta. Vestibulum vel leo ut neque pellentesque posuere sed ut enim.",
        "endpoint": "https://img.publikaan.nl/open-data/api/opnames",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-vertical-padding']
    }
]
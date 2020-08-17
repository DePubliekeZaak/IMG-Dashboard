import { GraphObject} from '../types/graphObject';

export const dashboardVergoedingen : GraphObject[] = [
    {
        "label" : "Schadevergoedingen",
        "slug" : "specials_bandbars_statussen",
        "mapping": [
            [
                {
                    label: "< €1K",
                    column: "schadevergoedingen_lager_dan_1000",
                    colour: 'lightBlue'
                },
                {
                    label : "€1K t/m €4K",
                    column : "schadevergoedingen_tussen_1000_en_4000",
                    colour :'orange'
                },
                {
                    label : "€4K t/m €10K",
                    column : "schadevergoedingen_tussen_4000_en_10000",
                    colour: 'moss'
                },
                {
                    label : "> €10K",
                    column : "schadevergoedingen_hoger_dan_10000",
                    colour: 'brown'
                }
            ]
        ],
        "config": {
            "graphType": "BandBars",
            "xScaleType" : 'band',
            "yScaleType" : 'linear',
            "xParameter" : 'label',
            "yParameter" : "value",
            "padding": {
                "top": 20,
                "bottom": 120,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 0,
                "bottom": 120,
                "left": 0,
                "right": 0
            },
            "extra" : {
                "currencyLabels" : false,
                "privacySensitive" : true,
                "paddingInner" : .1,
                "paddingOuter" : .1,
                "municipalitySelect": true,
                "alternateTicks" : false,
                "header" : "Ordegrootte van schadevergoedingen",
                "largeHeader" : false,
            }
        },
        "description" : "Het aantal besluiten onderverdeeld naar omvang van de toegekende schadevergoeding in het besluit.",
        "endpoint": "https://img.publikaan.nl/open-data/api/vergoedingen?limit=60",  // ivm in-graph gemeentekiezer
        "segment": false,
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-vertical-padding','img-grap-container-medium-high']
    },
    {
        "label" : "Kaart totaal verleend",
        "slug" : "vergoedingen_kaart_totaal_verleend",
        "mapping": [
            [
                {
                    "label": "Specials",
                    "column": "schadevergoeding_totaal_verleend",
                    "colour": "moss"
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
                "currencyLabels" : true,
                "header" : "Totaal schadevergoedingen per gemeente"
            }
        },
        "description" : "De totale schadevergoeding die voor alle afgehandelde schademeldingen in een gemeente is toegekend.",
        "endpoint": "https://img.publikaan.nl/open-data/api/vergoedingen?limit=60",
        "segment": false,
        "publishDate": false,
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-map','img-graph-container-vertical-padding']
    },
    {   "label": "Gemiddeld schadebedrag",
        "slug": "meldingen_trend_schademeldingen",
        "mapping": [
            [
                {
                    "label": "Gemiddeld schadebedrag",
                    "column": "schadevergoedingen_gemiddeld_schadebedrag",
                    "colour": "moss"
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
                "bottom": 60,
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
                "startDate" : '2019-10-01',
                "xScaleTicks": "timeMonth",
                "useLineFill": true,
                "header" : "Trend gemiddeld schadebedrag",
                "legend" : true,

            }
        },
        "description" : "De ontwikkeling van het gemiddelde bedrag aan schadevergoeding per besluit door de tijd heen.",
        "endpoint": "https://img.publikaan.nl/open-data/api/vergoedingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-graph-container-trendline','img-graph-container-vertical-padding']
    },
    {
        "label": "Afgewezen",
        "slug": "vergoedingen_taart_afgewezen",
        "mapping":  [[
            [
                {
                    "label": "Afgewezen schademeldingen",
                    "column": "afgewezen_schademeldingen",
                    "colour": "orange"
                },
                {
                    "label": "Toegewezen besluiten",
                    "column": "toegewezen_besluiten",
                    "colour": "lightBlue"
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
                "header" : "Afwijzingen t.o.v. toegekende besluiten",
                "segmentIndicator": true,
                "municipalitySelect": true,
            }
        },
        "description" : "",
        "endpoint": "https://img.publikaan.nl/open-data/api/vergoedingen?limit=60",
        "segment": false,
        "elementClasslist": ['img-graph-container','img-graph-container-6']
    },
    {
        "label" : "Spreiding percentage toegewezen besluiten",
        "slug" : "vergoedingen_kaart_percentage_afwijzingen",
        "mapping": [
            [
                {
                    "label": "Percentage afwijzingen",
                    "column": "percentage_toegewezen_besluiten",
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
                "percentage": true,
                "header" : "Spreiding van het percentage toegewezen besluiten "
            }
        },
        "description" : "",
        "endpoint": "https://img.publikaan.nl/open-data/api/vergoedingen?limit=60",
        "segment": false,
        "publishDate": false,
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-map']
    }
]
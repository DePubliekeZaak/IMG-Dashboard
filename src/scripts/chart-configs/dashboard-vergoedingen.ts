import { GraphObject} from '../types/graphObject';

export const dashboardVergoedingen : GraphObject[] = [
    {
        "label" : "Statussen met gemeenteselectie",
        "slug" : "specials_bandbars_statussen",
        "mapping": [
            [
                {
                    label: "< €1K",
                    column: "schadevergoedingen_lager_dan_1000",
                    colour: 'lightBlue'
                },
                {   label : "€1K t/m €4K",
                    column : "schadevergoedingen_tussen_1000_en_4000",
                    colour :'orange'
                },
                {   label : "€4K t/m €10K",
                    column : "schadevergoedingen_tussen_4000_en_10000",
                    colour: 'moss'
                },
                {   label : "> €10K",
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
                "bottom": 60,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 0,
                "bottom":90,
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
                "header" : "Ordegrootte van schadevergoedingen"
            }
        },
        "description" : "Lorem flipsum",
        "endpoint": "https://img.publikaan.nl/open-data/api/vergoedingen?limit=60",  // ivm in-graph gemeentekiezer
        "segment": false,
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-vertical-padding','img-grap-container-medium']
    },
    {
        "label" : "Kaart specials",
        "slug" : "specials_kaart_schademeldingen",
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
                "header" : "Totaal uitgekeerde schadebedragen per gemeente"
            }
        },
        "description" : "Kip",
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
                "startDate" : '10-01-2019',
                "xScaleTicks": "timeMonth",
                "useLineFill": true,
                "header" : "Ontwikkeling gemiddeld schadebedrag",
                "legend" : true,

            }
        },
        "description" : "Het percentage schademeldingen voor gewone woningen dat binnen een half jaar is afgehandeld. We noemen dit ook wel reguliere dossiers en die beslaan verreweg het merendeel van alle schademeldingen. De lijngrafiek eronder toont de ontwikkeling in de laatste acht weken. Op de stippellijn is te zien wat het gemiddelde is geweest in die periode. Het percentage wordt berekend door voor de laatste duizend besluiten te berekenen wat de doorlooptijd per dossier is geweest waarover is besloten. Als dat 182 dagen of minder is geweest (een half jaar) dan wordt dat meegenomen in het genoemde percentage. Omdat dit telkens over de laatste duizend besluiten wordt berekend, is het een voortschrijdend cijfer. Samen met de grafiek 1. 'Gerealiseerde en verwachte doorlooptijd' schets dit de voortgang van de schadeafhandeling voor reguliere dossiers in het licht van het streven om alle nieuwe reguliere schademeldingen binnen een half jaar af te handelen.",
        "endpoint": "https://img.publikaan.nl/open-data/api/vergoedingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-graph-container-trendline','img-graph-container-vertical-padding']
    }
]
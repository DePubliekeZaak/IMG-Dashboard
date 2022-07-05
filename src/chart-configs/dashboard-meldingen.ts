import { GraphObject} from '../types/graphObject';
import { IGraphMapping } from '../types/mapping';

export const dashboardMeldingen : (GraphObject|IGraphMapping)[] = [
    {   
        "graph": "TrendLine",
        "slug": "meldingen_trend_schademeldingen",
        "parameters": [
            [
                {
                    "label": "Nieuw",
                    "column": "nieuw_schademeldingen",
                    "colour": "blue",
                    "short": "nieuw"
                }
            ]
        ],
        "header" : "Schademeldingen per week",
        "description" : "Het aantal nieuwe schademeldingen per week door de tijd heen. De eerste grote piek komt overeen met de beving van Westerwijtwerd in mei 2019. De tweede piek komt overeen met de start van de vaste vergoeding en de beving van Garrelsweer in november 2021.",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-trendline','img-graph-container-vertical-padding']
    },
    {
        "slug" : "meldingen_kaart_schademeldingen",
        "graph": "Map",
        "parameters": [
            [
                {
                    "label": "Schademeldingen",
                    "column": "schademeldingen",
                    "colour": "lightBlue"
                }
            ]
        ],
        "header" : "Spreiding schademeldingen totaal",
        "description" : "Het totaal aantal schademeldingen dat per gemeente is binnengekomen sinds 19 maart 2018, de start van de TCMG. Het IMG zet het werk van de TCMG (die tijdelijk was) structureel voort sinds 1 juli 2020.",
        "endpoint": "meldingen?limit=61",
        "segment": null,
        "publishDate": null,
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-map','img-graph-container-vertical-padding']
    },
    {   
        "slug": "meldingen_trend_aos_meldingen",
        "graph": "TrendLine",
        "parameters": [
            [
                {
                    "label": "AOS Meldingen",
                    "column": "nieuw_aos_meldingen",
                    "colour": "moss",
                    "short": "melding"
                },
                {
                    "label": "Acuut onveilige situaties",
                    "column": "nieuw_aos_meldingen_gegrond",
                    "colour": "orange",
                    "short": "gegrond"
                }
            ]
        ],
        // "config": {
            
        //     "xScaleType": "time",
        //     "yScaleType": "linear",
        //     "xParameter": "_date",
        //     "yParameter": "nieuw_aos_meldingen",
        //     "padding": {
        //         "top": 20,
        //         "bottom": 40,
        //         "left": 40,
        //         "right": 0
        //     },
        //     "margin": {
        //         "top": 80,
        //         "bottom": 100,
        //         "left": 0,
        //         "right": 0
        //     },
        //     "extra": {
        //         "xScaleTicks": "quarterly",
        //         "useLineFill": true,
        //         "largeHeader" : true,
                
        //         "legend": true,
        //         "hasFocus" : true
        //     }
        // },
        "header" : "Trend AOS-meldingen",
        "description" : "Het aantal meldingen van een mogelijk acuut onveilige situatie door de tijd heen, waarbij ook het aantal meldingen is aangeven waar na een veiligheidsinspectie een acuut onveilige situatie is vastgesteld. Na het vaststellen ervan, neemt het IMG preventieve veiligheidsmaatregelen.",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-trendline','img-graph-container-vertical-padding']

    },
    {
        "slug": "meldingen_taart_aos_meldingen",
        "graph": "PieChartSumV2",
        "parameters":  [
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
        ],
        // "config": {

        //     "graphType": "PieChartSum",
        //     "xScaleType" : false,
        //     "yScaleType" : false,
        //     "xParameter" : false,
        //     "yParameter" : false,
        //     "padding": {
        //         "top": 0,
        //         "bottom": 0,
        //         "left": 0,
        //         "right": 0
        //     },
        //     "margin": {
        //         "top": 0,
        //         "bottom": 15,
        //         "left": 0,
        //         "right": 0
        //     },
        //     "extra" :{
        //         "currencyLabels" : false,
        //         "legendWidth" : 220,
        //         "maxRadius" : 100,
        //         "innerRadius" : 20,
        //         "tieten": false,
                
        //     }
        // },
        "header" : "Wel/niet acuut onveilige situatie",
        "description" : "Het aantal meldingen van een mogelijk acuut onveilige situatie in totaal, waarbij ook het aantal meldingen is aangeven waar na een veiligheidsinspectie een acuut onveilige situatie is vastgesteld. Na het vaststellen ervan, neemt het IMG preventieve veiligheidsmaatregelen.",
        "endpoint": "voortgang",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-vertical-padding']
    }
]

import { GraphObject,IGraphMapping} from '../../d3-modules/_d3_types';

export const dashboardMeldingen : (GraphObject|IGraphMapping)[] = [
    {   
        "graph": "TrendBars",
        "slug": "meldingen_trend_schademeldingen",
        "parameters": [
            [
                {
                    "label": "Nieuwe schademeldingen",
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
        "elementClasslist": ['img-graph-container','img-graph-container-6']
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
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-map']
    },
    {   
        "slug": "meldingen_trend_aos_meldingen",
        "graph": "TrendBars",
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
        "header" : "Trend AOS-meldingen",
        "description" : "Het aantal meldingen van een mogelijk acuut onveilige situatie door de tijd heen, waarbij ook het aantal meldingen is aangeven waar na een veiligheidsinspectie een acuut onveilige situatie is vastgesteld. Na het vaststellen ervan, neemt het IMG preventieve veiligheidsmaatregelen.",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6']

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
        "header" : "Wel/niet acuut onveilige situatie",
        "description" : "Het aantal meldingen van een mogelijk acuut onveilige situatie in totaal, waarbij ook het aantal meldingen is aangeven waar na een veiligheidsinspectie een acuut onveilige situatie is vastgesteld. Na het vaststellen ervan, neemt het IMG preventieve veiligheidsmaatregelen.",
        "endpoint": "voortgang",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6']
    }
]

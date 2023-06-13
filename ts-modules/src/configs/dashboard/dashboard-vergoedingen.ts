import { GraphObject, IGraphMapping } from '@local/d3_types';

export const dashboardVergoedingen : (GraphObject|IGraphMapping)[] = [
    {
        "slug": "taart_schadevergoeding_totaal",
        "graph": "PieChartSumV2",
        "parameters":  [
            [
                {
                    "label": "Mijnbouwschade",
                    "column": "fysieke_schade_schadebedrag",
                    "colour": "brown",
                    "format" : "currency"
                },
                {
                    "label": "Stuwmeerregeling",
                    "column": "fysieke_schade_stuwmeerregeling_bedrag",
                    "colour": "blue",
                    "format" : "currency"
                },
                {
                    "label": "Bijkomende kosten",
                    "column": "fysieke_schade_bijkomende_kosten_bedrag",
                    "colour": "moss",
                    "format" : "currency"
                },
                {
                    "label": "Wettelijke rente",
                    "column": "fysieke_schade_wettelijke_rente_bedrag",
                    "colour": "orange",
                    "format" : "currency"
                }
            ],
            [
                {
                    "label": "Totaal",
                    "column": "fysieke_schade_totaal_verleend",
                    "colour": "gray",
                    "format" : "currency"
                }
            ]
        ],
        "header" : "Vergoedingen fysieke schade",
        "description" : "De diverse soorten schadevergoedingen die het IMG toekent uitgesplitst en als totaal opgeteld. De Stuwmeerregeling is afgelopen. Maar voor enkele van die dossiers worden nog vergoedingen toegekend omdat deze op basis van facturen van aannemers worden     kend.",
        "endpoint": "vergoedingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-ipad-6']

    },
    {
        "slug": "vergoedingen_taart_afgewezen",
        "graph": "PieChartSumV2",
        "parameters":  [
            [
                {
                    "label": "Besluiten met afwijzing",
                    "column": "fysieke_schade_afgewezen_meldingen",
                    "colour": "orange"
                },
                {
                    "label": "Besluiten met toekenning",
                    "column": "fysieke_schade_toegewezen_besluiten",
                    "colour": "blue"
                }
            ]
        ],
        "header" : "Afwijzingen t.o.v. toegekende besluiten",
        "description" : "De verhouding tussen besluiten met toekenning en besluiten met een afwijzing",
        "endpoint": "vergoedingen?limit=61",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-ipad-6']
    },

  
    {  
    "slug": "meldingen_trend_schademeldingen",
    "graph": "TrendBars",
    "args": ['2019-10-01'],
    "parameters": [
        [
            {
                "label": "Percentage toegewezen",
                "column": "fysieke_schade_week_percentage_toegewezen_besluiten",
                "colour": "blue",
                "short": "toegewezen",
                "format": "percentage"
            }
        ]
    ],
    "header" : "Trend percentage toegewezen besluiten",
    "description" : "De ontwikkeling van het gemiddelde bedrag aan schadevergoeding per besluit door de tijd heen.",
    "endpoint": "vergoedingen",
    "segment": "all",
    "elementClasslist": ['img-graph-container','img-graph-container-6']
},
{   
    "slug": "meldingen_trend_schademeldingen",
    "graph": "TrendBars",
    "parameters": [
        [
            {
                "label": "Gemiddeld schadebedrag",
                "column": "fysieke_schade_gemiddeld_schadebedrag",
                "colour": "orange",
                "short": "gem",
                "format": "currency"
            }
        ]
    ],
    "header" : "Trend gemiddeld schadebedrag",
    "description" : "De ontwikkeling van het gemiddelde bedrag aan schadevergoeding per besluit door de tijd heen.",
    "endpoint": "vergoedingen",
    "segment": "all",
    "elementClasslist": ['img-graph-container','img-graph-container-6']
},
    {
        "graph": "BandBars",
        "slug" : "specials_bandbars_statussen",
        "parameters": [
            [
                {
                    label: "< €1K",
                    column: "fysieke_schade_vergoedingen_lager_dan_1000",
                    colour: 'lightBlue'
                },
                {
                    label : "€1K t/m €4K",
                    column : "fysieke_schade_vergoedingen_tussen_1000_en_4000",
                    colour :'orange'
                },
                {
                    label : "€4K t/m €10K",
                    column : "fysieke_schade_vergoedingen_tussen_4000_en_10000",
                    colour: 'moss'
                },
                {
                    label : "> €10K",
                    column : "fysieke_schade_vergoedingen_hoger_dan_10000",
                    colour: 'brown'
                }
            ]
        ],
        "header" : "Ordegrootte van schadevergoedingen",
        "description" : "Het aantal besluiten onderverdeeld naar omvang van de toegekende schadevergoeding in het besluit.",
        "endpoint": "vergoedingen?limit=61",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6']
    },
    {     
        "slug" : "vergoedingen_kaart_totaal_verleend",
        "graph": "Map",
        "parameters": [
            [
                {
                    "label": "Specials",
                    "column": "fysieke_schade_totaal_verleend",
                    "colour": "moss",
                    "format": "currency"
                }
            ]
        ],
        "header" : "Totaal schadevergoedingen per gemeente",
        "description" : "De totale schadevergoeding die voor alle afgehandelde schademeldingen in een gemeente is toegekend.",
        "endpoint": "vergoedingen?limit=61",
        "segment": null,
        "publishDate": null,
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-map']
    },
    
   
    {  
        "slug" : "vergoedingen_kaart_percentage_afwijzingen",
        "graph": "Map",
        "parameters": [
            [
                {
                    "label": "Percentage toewijzingen",
                    "column": "fysieke_schade_percentage_toegewezen_besluiten",
                    "colour": "lightBlue",
                    "format": "percentage"
                }
            ]
        ],
        "header" : "Spreiding van het percentage toegewezen besluiten",
        "description" : "",
        "endpoint": "vergoedingen?limit=61",
        "segment": null,
        "publishDate": null,
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-map']
    },
    {
        "slug": "vergoedingen_kaart_gemiddeld_uitbetaald",
        "graph": "Map",
        "parameters": [
            [
                {
                    "label": "Percentage afwijzingen",
                    "column": "fysieke_schade_gemiddeld_schadebedrag_sinds_start",
                    "colour": "orange",
                    "format": "currency"
                }
            ]
        ],
        "header" : "Spreiding van het gemiddeld uitgekeerd schadebedrag",
        "description": "",
        "endpoint": "vergoedingen?limit=61",
        "segment": null,
        "publishDate": null,
        "elementClasslist": ['img-graph-container', 'img-graph-container-6', 'img-graph-container-map']
    }
]

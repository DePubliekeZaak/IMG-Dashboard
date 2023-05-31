import { GraphObject, IGraphMapping} from '@local/d3_types';

export const dashboardGemeente : IGraphMapping[] = [

    {
        "slug": "muni_selector",
        "graph": "MuniSelector",
        "args": [],
        "parameters": [[]],
        "header": "Kies een gemeente",
        "description": "",
        "endpoint": false,
        "segment": false,
        "elementClasslist": ['img-graph-container','img-graph-container-3']
    },
        {
            "slug" : "cijfer_schademeldingen_totaal",
            "graph" : "Cijfer",
            "parameters": [
                [
                    {
                        "label": "Totaal openstaande aanvragen",
                        "column": "in_behandeling",
                        "colour": "blue",
                        "units": "meldingen"
                    }
                ]
            ],
            "header": "Totaal openstaand",
            "description" : "",
            "endpoint": "meldingen",
            "segment": 'all',
            "elementClasslist": ['img-graph-container','img-graph-container-3','img-grap-container-bol']
        },
        {
            "slug" : "cijfer_schademedlingen_totaal",
            "graph" : "Cijfer",
            "parameters": [
                [
                    {
                        "label": "Schademeldingen totaal",
                        "column": "schademeldingen",
                        "colour": "orange",
                        "units": "meldingen"
                    }
                ]
            ],
            "header": "Totaal gemeld",
            "description" : "",
            "endpoint": "meldingen",
            "segment": 'all',
            "elementClasslist": ['img-graph-container','img-graph-container-3','img-grap-container-bol']
        },
        {
            "slug" : "cijfer_schademeldingen_totaal",
            "graph": "Cijfer",
            "parameters": [
                [
                    {
                        "label": "Afgehandeld totaal",
                        "column": "afgehandeld",
                        "colour": "moss",
                        "units": "meldingen"
                    }
                ]
            ],
            "header": "Totaal afgehandeld",
            "description" : "",
            "endpoint": "voortgang",
            "segment": 'all',
            "elementClasslist": ['img-graph-container','img-graph-container-3','img-grap-container-bol']
        },
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
            "segment": 'all',
            "elementClasslist": ['img-graph-container','img-graph-container-4']
    
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
            "header" : "Afwijzingen t.o.v. toekenningen",
            "description" : "De verhouding tussen besluiten met toekenning en besluiten met een afwijzing",
            "endpoint": "vergoedingen?limit=61",
            "segment": 'all',
            "elementClasslist": ['img-graph-container','img-graph-container-4']
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
            "segment": 'all',
            "elementClasslist": ['img-graph-container','img-graph-container-4']
        },
        {   
            "slug": "trend_schademeldingen",
            "graph": "TrendLine",
            "parameters": [
                [
                    {
                        "label": "Nieuw",
                        "column": "nieuw_schademeldingen",
                        "colour": "orange",
                        "short": "nieuw"
                    },
                    {
                        "label": "Afgehandeld",
                        "column": "nieuw_afgehandeld",
                        "colour": "blue",
                        "short": "afgeh."
                    }
                ]
            ],
            "header" : "Trend nieuw en afgehandeld",
            "description" : "Het aantal nieuwe en afgehandelde schademeldingen door de tijd heen.",
            "endpoint": "voortgang",
            "segment": 'all',
            "elementClasslist": ['img-graph-container','img-graph-container-12','img-graph-container-trendline']
        },
        {
   
            "slug": "taart_opnamevarianten",
            "graph": "PieChartSumV2",
            "parameters":  [
                [
                    {
                        "label": "Regulier",
                        "column": "schadeopnames_regulier",
                        "colour": "gray"
                    },
                    {
                        "label": "Aannemersvariant",
                        "column": "schadeopnames_via_aannemersvariant",
                        "colour": "orange"
                    },
                    {
                        "label": "Wooncorporaties",
                        "column": "schadeopnames_door_wooncorporaties",
                        "colour": "blue"
                    },
                    {
                        "label": "Digitaal",
                        "column": "schadeopnames_digitaal",
                        "colour": "brown"
                    },
                    {
                        "label": "Schade-opnemers",
                        "column": "schadeopnames_via_opnemersvariant",
                        "colour": "moss"
                    }
                ],
                [
                    {
                        "label": "Totaal",
                        "column": null,
                        "colour": null
                    }
            
                ]
            ],
            "header" : "Opnamevarianten totaal",
            "description" : "De schade-opname is een belangrijk onderdeel van de procedure van schade aan gebouwen en objecten. Er volgt daarna een advies van een onafhankelijke deskundige. Omdat deskundigen schaars zijn, worden ook anderen ingezet om de schade-opname te doen, op basis waarvan een deskundige daarna een advies uitbrengt. De deskundige gaat dan niet zelf ter plekke, wat tijd bespaart.",
            "endpoint": "opnames",
            "segment": "all",
            "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-vertical-padding']
            }
];
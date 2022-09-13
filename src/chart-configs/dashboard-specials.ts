import { GraphObject} from '../types/graphObject';
import { IGraphMapping } from '../types/mapping';

export const dashboardSpecials : (GraphObject|IGraphMapping)[] = [
    {
    "slug": "specials_taart_schademeldingen_agro",
    "graph": "PieChartSumV2",
    "parameters":  [
        [
            {
                "label": "Afgehandeld",
                "column": 'agro_afgehandeld',
                "colour": "gray"
            },
            {
                "label": "In behandeling",
                "column": "agro_in_behandeling",
                "colour": "moss"
            }
        ],
        [
            {
                "label": "Totaal",
                "column": "agro_schademeldingen",
                "colour": "yellow"
            }
        ]
    ],
    "header" : "Meldingen met agro kenmerk",
    "description" : "Het totaal aantal schademeldingen met speciale kenmerken dat sinds 19 maart 2018 is binnengekomen. Eerst bij de TCMG (dat tijdelijk was) en sinds 1 juli 2020 bij het IMG, dat het werk van de TCMG structureel voortzet.",
    "endpoint": "meldingen",
    "segment": "all",
    "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-vertical-padding','img-grap-container-medium-high']
    },
    {
        "slug": "specials_taart_schademeldingen_erfgoed",
        "graph": "PieChartSumV2",
        "parameters":  [
            [
                {
                    "label": "Afgehandeld",
                    "column": 'erfgoed_afgehandeld',
                    "colour": "gray"
                },
                {
                    "label": "In behandeling",
                    "column": "erfgoed_in_behandeling",
                    "colour": "brown"
                }
            ],
            [
                {
                    "label": "Totaal",
                    "column": "erfgoed_schademeldingen",
                    "colour": "yellow"
                }
            ]
        ],
        "header" : "Meldingen met erfgoed kenmerk",
        "description" : "Het totaal aantal schademeldingen met speciale kenmerken dat sinds 19 maart 2018 is binnengekomen. Eerst bij de TCMG (dat tijdelijk was) en sinds 1 juli 2020 bij het IMG, dat het werk van de TCMG structureel voortzet.",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-vertical-padding','img-grap-container-medium-high']
    },
    {
        "slug": "specials_taart_schademeldingen_mkb",
        "graph": "PieChartSumV2",
        "parameters":  [
            [
                {
                    "label": "Afgehandeld",
                    "column": 'mkb_afgehandeld',
                    "colour": "gray"
                },
                {
                    "label": "In behandeling",
                    "column": "mkb_in_behandeling",
                    "colour": "lightBlue"
                }
            ],
            [
                {
                    "label": "Totaal",
                    "column": "mkb_schademeldingen",
                    "colour": "yellow"
                }
            ]
        ],
        "header" : "Meldingen met MKB kenmerk",
        "description" : "Het totaal aantal schademeldingen met speciale kenmerken dat sinds 19 maart 2018 is binnengekomen. Eerst bij de TCMG (dat tijdelijk was) en sinds 1 juli 2020 bij het IMG, dat het werk van de TCMG structureel voortzet.",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-vertical-padding','img-grap-container-medium-high']
    },
    {
        "slug": "specials_taart_schademeldingen_overig",
        "graph": "PieChartSumV2",
        "parameters":  [
            [
                {
                    "label": "Afgehandeld",
                    "column": 'aos_overig_afgehandeld',
                    "colour": "gray"
                },
                {
                    "label": "In behandeling",
                    "column": "aos_overig_in_behandeling",
                    "colour": "orange"
                }
            ],
            [
                {
                    "label": "Totaal",
                    "column": "aos_overig_schademeldingen",
                    "colour": "yellow"
                }
            ]
        ],
        "header" : "Meldingen met overig kenmerk",
        "description" : "Het totaal aantal schademeldingen met speciale kenmerken dat sinds 19 maart 2018 is binnengekomen. Eerst bij de TCMG (dat tijdelijk was) en sinds 1 juli 2020 bij het IMG, dat het werk van de TCMG structureel voortzet.",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-vertical-padding','img-grap-container-medium-high']
    },
    {
        "slug": "specials_ballenbak_status",
        "graph": "Ballenbak",
        "parameters": [[

            {
                "label": 'Agro',
                "column" : 'agro_in_fase_ontvangst',
                "colour" : "moss",
                "group" : 'Ontvangst en analyse'
            },
            {
                "label": 'Erfgoed',
                "column" : 'erfgoed_in_fase_ontvangst',
                "colour" : "brown",
                "group" : 'Ontvangst en analyse'
            },
            {
                "label": 'MKB',
                "column" : 'mkb_in_fase_ontvangst',
                "colour" : "lightBlue",
                "group" : 'Ontvangst en analyse'
            },
            {
                "label": 'Overig en AOS',
                "column" : 'aos_overig_in_fase_ontvangst',
                "colour" : "orange",
                "group" : 'Ontvangst en analyse'
            },
            {
                "label": 'Agro',
                "column" : 'agro_in_fase_planning_opname',
                "colour" : "moss",
                "group" : 'Schade-opname wordt ingepland'
            },
            {
                "label": 'Erfgoed',
                "column" : 'erfgoed_in_fase_planning_opname',
                "colour" : "brown",
                "group" : 'Schade-opname wordt ingepland'
            },
            {
                "label": 'MKB',
                "column" : 'mkb_in_fase_planning_opname',
                "colour" : "lightBlue",
                "group" : 'Schade-opname wordt ingepland'
            },
            {
                "label": 'Overig en AOS',
                "column" : 'aos_overig_in_fase_planning_opname',
                "colour" : "orange",
                "group" : 'Schade-opname wordt ingepland'
            },
            {
                "label": 'Agro',
                "column" : 'agro_in_fase_oplevering_schaderapport',
                "colour" : "moss",
                "group" : 'Schade-opname uitgevoerd, adviesrapport opleveren'
            },
            {
                "label": 'Erfgoed',
                "column" : 'erfgoed_in_fase_oplevering_schaderapport',
                "colour" : "brown",
                "group" : 'Schade-opname uitgevoerd, adviesrapport opleveren'
            },
            {
                "label": 'MKB',
                "column" : 'mkb_in_fase_oplevering_schaderapport',
                "colour" : "lightBlue",
                "group" : 'Schade-opname uitgevoerd, adviesrapport opleveren'
            },
            {
                "label": 'Overig en AOS',
                "column" : 'aos_overig_in_fase_oplevering_schaderapport',
                "colour" : "orange",
                "group" : 'Schade-opname uitgevoerd, adviesrapport opleveren'
            },
            {
                "label": 'Agro',
                "column" : 'agro_in_fase_voorbereiding_besluit',
                "colour" : "moss",
                "group" : 'Adviesrapport opgeleverd, besluit voorbereiden'
            },
            {
                "label": 'Erfgoed',
                "column" : 'erfgoed_in_fase_voorbereiding_besluit',
                "colour" : "brown",
                "group" : 'Adviesrapport opgeleverd, besluit voorbereiden'
            },
            {
                "label": 'MKB',
                "column" : 'mkb_in_fase_voorbereiding_besluit',
                "colour" : "lightBlue",
                "group" : 'Adviesrapport opgeleverd, besluit voorbereiden'
            },
            {
                "label": 'Overig en AOS',
                "column" : 'aos_overig_in_fase_voorbereiding_besluit',
                "colour" : "orange",
                "group" : 'Adviesrapport opgeleverd, besluit voorbereiden'
            }
        ]
        ],
        "header" : "Status openstaande speciale dossiers",
        "description" : "Het totaal aantal openstaande schademeldingen met speciale kenmerken naar status in de schadeprocedure, onderverdeeld naar type speciaal dossier.",
        "endpoint": "specials",
        "segment": "all",
        "publishDate": null,
        "elementClasslist": ['img-graph-container','img-graph-container-12']
    },
    {
        "slug" : "specials_bandbars_statussen",
        "args" : ["alternateTicks"],
        "graph": "BandBars",
        "parameters": [
            [
                {
                    "label": "Ontvangst en analyse",
                    "column": "specials_in_fase_ontvangst",
                    "colour": "lightBlue"
                },
                {
                    "label": "Schade-opname wordt ingepland",
                    "column": "specials_in_fase_planning_opname",
                    "colour": "orange"
                },
                {
                    "label": "Schade-opname uitgevoerd, adviesrapport opleveren",
                    "column": "specials_in_fase_oplevering_schaderapport",
                    "colour": "moss"
                },
                {
                    "label": "Adviesrapport opgeleverd, besluit voorbereiden",
                    "column": "specials_in_fase_voorbereiding_besluit",
                    "colour": "brown"
                }
            ]
        ],
        "header" : "Specials per status",
        "description" : "Het totaal aantal openstaande schademeldingen met speciale kenmerken naar status in de schadeprocedure, onderverdeeld naar type speciaal dossier.",
        "endpoint": "specials?limit=61",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-vertical-padding','img-grap-container-medium-high']
    },
    {
        "slug" : "specials_kaart_schademeldingen",
        "graph": "Map",
        "parameters": [
            [
                {
                    "label": "Specials",
                    "column": "specials_schademeldingen",
                    "colour": "lightBlue"
                }
            ]
        ],
        "header" : "Spreiding speciale dossiers",
        "description" : "Het aantal binnengekomen schademelding met speciale kenmerken dat per gemeente sinds 19 maart 2018 is binnengekomen. Eerst bij de TCMG (dat tijdelijk was) en sinds 1 juli 2020 bij het IMG, dat het werk van de TCMG structureel voortzet. ",
        "endpoint": "specials?limit=61",
        "segment": null,
        "publishDate": null,
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-map','img-graph-container-vertical-padding']
    }
]

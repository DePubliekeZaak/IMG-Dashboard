import { GraphObject} from '../types/graphObject';

export const dashboardSpecials : GraphObject[] = [
    {   "label": "Speciale dossiers",
        "slug": "specials_stacked_schademeldingen",
        "mapping": [
            [

                {
                    "label": "Agro",
                    "column": "nieuw_agro_schademeldingen",
                    "colour": "moss"
                },
                {
                    "label": "Erfgoed",
                    "column": "nieuw_erfgoed_schademeldingen",
                    "colour": "lightBlue"
                },
                {
                    "label": "MKB",
                    "column": "nieuw_mkb_schademeldingen",
                    "colour": "blue"
                },
                {
                    "label": "Overig en AOS",
                    "column": "nieuw_aos_overig_schademeldingen",
                    "colour": "orange"
                }
            ]
        ],
        "config": {
            "graphType": "StackedArea",
            "xScaleType": "time",
            "yScaleType": "linear",
            "xParameter": "_date",
            "yParameter": "nieuw_specials_schademeldingen",
            "padding": {
                "top": 20,
                "bottom": 100,
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
                "header" : "Trend nieuwe speciale dossiers",
                "largeHeader" : false,
            }
        },
        "description" : "Het aantal schademeldingen met speciale kenmerken per week, door de tijd heen. De schademeldingen zijn onderverdeeld naar het type speciale dossier.",
        "endpoint": "https://img.publikaan.nl/open-data/api/specials",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-graph-container-vertical-padding','img-grap-container-medium-high']
    },
    {
        "label": "Taart Schademeldingen",
        "slug": "specials_taart_schademeldingen",
        "mapping":  [[
            [
                {
                    "label": "Regulier",
                    "column": "schademeldingen",
                    "colour": "gray"
                },
                {
                    "label": "Agro",
                    "column": "agro_schademeldingen",
                    "colour": "moss"
                },
                {
                    "label": "Erfgoed",
                    "column": "erfgoed_schademeldingen",
                    "colour": "brown"
                },
                {
                    "label": "MKB",
                    "column": "mkb_schademeldingen",
                    "colour": "lightBlue"
                },
                {
                    "label": "Overig en AOS",
                    "column": "aos_overig_schademeldingen",
                    "colour": "orange"
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
                "header" : "Type speciale dossiers totaal"
            }
        },
        "description" : "Het totaal aantal schademeldingen met speciale kenmerken dat sinds 19 maart 2018 is binnengekomen. Eerst bij de TCMG (dat tijdelijk was) en sinds 1 juli 2020 bij het IMG, dat het werk van de TCMG structureel voortzet.",
        "endpoint": "https://img.publikaan.nl/open-data/api/meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-vertical-padding','img-grap-container-medium-high']
    },
    {
        "label": "Taart In behandeling",
        "slug": "specials_taart_in_behandeling",
        "mapping":  [[
            [
                {
                    "label": "Regulier",
                    "column": "in_behandeling",
                    "colour": "gray"
                },
                {
                    "label": "Agro",
                    "column": "agro_in_behandeling",
                    "colour": "moss"
                },
                {
                    "label": "Erfgoed",
                    "column": "erfgoed_in_behandeling",
                    "colour": "brown"
                },
                {
                    "label": "MKB",
                    "column": "mkb_in_behandeling",
                    "colour": "lightBlue"
                },
                {
                    "label": "Overig en AOS",
                    "column": "aos_in_behandeling",
                    "colour": "orange"
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
                "header" : "Type speciale dossiers openstaand"
            }
        },
        "description" : "Het totaal aantal openstaande schademeldingen met speciale kenmerken dat sinds 19 maart 2018 is binnengekomen. Eerst bij de TCMG (dat tijdelijk was) en sinds 1 juli 2020 bij het IMG, dat het werk van de TCMG structureel voortzet. ",
        "endpoint": "https://img.publikaan.nl/open-data/api/voortgang",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-vertical-padding','img-grap-container-medium-high']
    },
    {

        "label": "Status naar doorlooptijd",
        "slug": "specials_ballenbak_status",
        "mapping": [[

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
                "column" : 'overig_aos_in_fase_ontvangst',
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
        "config": {
            "graphType": "Ballenbak",
            "xScaleType": "band",
            "yScaleType": "linear",
            "xParameter": "label",
            "yParameter": "value",
            "padding": {
                "top": 0,
                "bottom": 120,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 0,
                "bottom": 40,
                "left": 0,
                "right": 0
            },
            "extra": {
                "header" : "Status openstaande speciale dossiers",
                "paddingInner" : 1,
                "paddingOuter" : 1,
                "minRadius" : 4,
                "radiusOffset" : 1.8,
                "radiusFactor": 1
            }
        },
        "description" : "Het totaal aantal openstaande schademeldingen met speciale kenmerken naar status in de schadeprocedure, onderverdeeld naar type speciaal dossier.",
        "endpoint": "https://img.publikaan.nl/open-data/api/specials",
        "segment": "all",
        "publishDate": false,
        "elementClasslist": ['img-graph-container','img-graph-container-12']
    },
    {
        "label" : "Statussen met gemeenteselectie",
        "slug" : "specials_bandbars_statussen",
        "mapping": [
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
                "paddingInner" : .1,
                "paddingOuter" : .1,
                "municipalitySelect": true,
                "alternateTicks" : true,
                "header" : "Specials per status naar gemeente"
            }
        },
        "description" : "Het totaal aantal openstaande schademeldingen met speciale kenmerken naar status in de schadeprocedure, onderverdeeld naar type speciaal dossier.",
        "endpoint": "https://img.publikaan.nl/open-data/api/specials?limit=60",  // ivm in-graph gemeentekiezer
        "segment": false,
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-vertical-padding','img-grap-container-medium-high']
    },
    {
        "label" : "Kaart specials",
        "slug" : "specials_kaart_schademeldingen",
        "mapping": [
            [
                {
                    "label": "Specials",
                    "column": "specials_schademeldingen",
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
                "header" : "Spreiding speciale dossiers"
            }
        },
        "description" : "Het aantal binnengekomen schademelding met speciale kenmerken dat per gemeente sinds 19 maart 2018 is binnengekomen. Eerst bij de TCMG (dat tijdelijk was) en sinds 1 juli 2020 bij het IMG, dat het werk van de TCMG structureel voortzet. ",
        "endpoint": "https://img.publikaan.nl/open-data/api/specials?limit=60",
        "segment": false,
        "publishDate": false,
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-map','img-graph-container-vertical-padding']
    }
]
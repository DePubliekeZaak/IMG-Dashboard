import { GraphObject} from '../types/graphObject';

export const dashboardSpecials : GraphObject[] = [
    {   "label": "Schademeldingen",
        "slug": "specials_stacked_schademeldingen",
        "mapping": [
            [

                {
                    "label": "Agro",
                    "column": "nieuw_agro_schademeldingen",
                    "colour": "green"
                },
                {
                    "label": "Erfgoed",
                    "column": "nieuw_erfgoed_schademeldingen",
                    "colour": "yellow"
                },
                {
                    "label": "MKB",
                    "column": "nieuw_mkb_schademeldingen",
                    "colour": "blue"
                },
                {
                    "label": "Overig en AOS",
                    "column": "nieuw_aos_overig_schademeldingen",
                    "colour": "red"
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
                "header" : "Schademeldingen per week"
            }
        },
        "description" : "",
        "endpoint": "https://img.publikaan.nl/open-data/api/specials",
        "segment": "all"
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
                    "colour": "green"
                },
                {
                    "label": "Erfgoed",
                    "column": "erfgoed_schademeldingen",
                    "colour": "yellow"
                },
                {
                    "label": "MKB",
                    "column": "mkb_schademeldingen",
                    "colour": "blue"
                },
                {
                    "label": "Overig en AOS",
                    "column": "aos_overig_schademeldingen",
                    "colour": "red"
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
                "header" : "Schademeldingen"
            }
        },
        "description" : "",
        "endpoint": "https://img.publikaan.nl/open-data/api/meldingen",
        "segment": "all"
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
                    "colour": "green"
                },
                {
                    "label": "Erfgoed",
                    "column": "erfgoed_in_behandeling",
                    "colour": "yellow"
                },
                {
                    "label": "MKB",
                    "column": "mkb_in_behandeling",
                    "colour": "blue"
                },
                {
                    "label": "Overig en AOS",
                    "column": "aos_in_behandeling",
                    "colour": "red"
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
                "header" : "In behandeling"
            }
        },
        "description" : "",
        "endpoint": "https://img.publikaan.nl/open-data/api/voortgang",
        "segment": "all"
    },
    {

        "label": "Status naar doorlooptijd",
        "slug": "specials_ballenbak_status",
        "mapping": [[

            {
                "label": 'Agro',
                "column" : 'agro_in_fase_ontvangst',
                "colour" : "green",
                "group" : 'Ontvangst en analyse'
            },
            {
                "label": 'Erfgoed',
                "column" : 'erfgoed_in_fase_ontvangst',
                "colour" : "yellow",
                "group" : 'Ontvangst en analyse'
            },
            {
                "label": 'MKB',
                "column" : 'mkb_in_fase_ontvangst',
                "colour" : "blue",
                "group" : 'Ontvangst en analyse'
            },
            {
                "label": 'Overig en AOS',
                "column" : 'overig_aos_in_fase_ontvangst',
                "colour" : "red",
                "group" : 'Ontvangst en analyse'
            },
            {
                "label": 'Agro',
                "column" : 'agro_in_fase_planning_opname',
                "colour" : "green",
                "group" : 'Schade-opname wordt ingepland'
            },
            {
                "label": 'Erfgoed',
                "column" : 'erfgoed_in_fase_planning_opname',
                "colour" : "yellow",
                "group" : 'Schade-opname wordt ingepland'
            },
            {
                "label": 'MKB',
                "column" : 'mkb_in_fase_planning_opname',
                "colour" : "blue",
                "group" : 'Schade-opname wordt ingepland'
            },
            {
                "label": 'Overig en AOS',
                "column" : 'aos_overig_in_fase_planning_opname',
                "colour" : "red",
                "group" : 'Schade-opname wordt ingepland'
            },
            {
                "label": 'Agro',
                "column" : 'agro_in_fase_oplevering_schaderapport',
                "colour" : "green",
                "group" : 'Schade-opname uitgevoerd, adviesrapport opleveren'
            },
            {
                "label": 'Erfgoed',
                "column" : 'erfgoed_in_fase_oplevering_schaderapport',
                "colour" : "yellow",
                "group" : 'Schade-opname uitgevoerd, adviesrapport opleveren'
            },
            {
                "label": 'MKB',
                "column" : 'mkb_in_fase_oplevering_schaderapport',
                "colour" : "blue",
                "group" : 'Schade-opname uitgevoerd, adviesrapport opleveren'
            },
            {
                "label": 'Overig en AOS',
                "column" : 'aos_overig_in_fase_oplevering_schaderapport',
                "colour" : "red",
                "group" : 'Schade-opname uitgevoerd, adviesrapport opleveren'
            },
            {
                "label": 'Agro',
                "column" : 'agro_in_fase_voorbereiding_besluit',
                "colour" : "green",
                "group" : 'Adviesrapport opgeleverd, besluit voorbereiden'
            },
            {
                "label": 'Erfgoed',
                "column" : 'erfgoed_in_fase_voorbereiding_besluit',
                "colour" : "yellow",
                "group" : 'Adviesrapport opgeleverd, besluit voorbereiden'
            },
            {
                "label": 'MKB',
                "column" : 'mkb_in_fase_voorbereiding_besluit',
                "colour" : "blue",
                "group" : 'Adviesrapport opgeleverd, besluit voorbereiden'
            },
            {
                "label": 'Overig en AOS',
                "column" : 'aos_overig_in_fase_voorbereiding_besluit',
                "colour" : "red",
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
                "bottom": 80,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 0,
                "bottom": 15,
                "left": 0,
                "right": 0
            },
            "extra": {
                "header" : "Status van specials in procedure",
                "paddingInner" : 1,
                "paddingOuter" : 1,
                "minRadius" : 4,
                "radiusOffset" : 1.8,
                "radiusFactor": 1
            }
        },
        "description" : "",
        "endpoint": "https://img.publikaan.nl/open-data/api/specials",
        "segment": "all",
        "publishDate": false
    },
    {
        "label" : "Statussen met gemeenteselectie",
        "slug" : "specials_bandbars_statussen",
        "mapping": [
            [
                {
                    "label": "Ontvangst en analyse",
                    "column": "specials_in_fase_ontvangst",
                    "colour": "blue"
                },
                {
                    "label": "Schade-opname wordt ingepland",
                    "column": "specials_in_fase_planning_opname",
                    "colour": "red"
                },
                {
                    "label": "Schade-opname uitgevoerd, adviesrapport opleveren",
                    "column": "specials_in_fase_oplevering_schaderapport",
                    "colour": "green"
                },
                {
                    "label": "Adviesrapport opgeleverd, besluit voorbereiden",
                    "column": "specials_in_fase_voorbereiding_besluit",
                    "colour": "purple"
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
                    "bottom":0,
                    "left": 0,
                    "right": 0
            },
            "extra" : {
                "currencyLabels" : false,
                "paddingInner" : .1,
                "paddingOuter" : .1,
                "alternateTicks" : true,
                "header" : "Specials per status naar gemeente"
            }
        },
        "description" : "",
        "endpoint": "https://img.publikaan.nl/open-data/api/specials",
        "segment": "all"
    },
    {
        "label" : "Kaart specials",
        "slug" : "specials_kaart_schademeldingen",
        "mapping": [
            [
                {
                    "label": "Specials",
                    "column": "specials_schademeldingen",
                    "colour": "yellow"
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
                "header" : "Geografische spreiding van specials"
            }
        },
        "description" : "",
        "endpoint": "https://img.publikaan.nl/open-data/api/specials?limit=60",
        "segment": false,
        "publishDate": false
    }
]
import { GraphObject} from '../types/graphObject';

const custom_pad = 20;

export const dashboardTrillingssnelheden : GraphObject[] = [

    {
        "label" : "Aantal schademeldingen per trillingssnelheid",
        "slug" : "mms_meldingen",
        "mapping": [
            [
                {
                    "label": "onbekend",
                    "column": "schademeldingen_mms_onbekend",
                    "colour": "gray"
                },
                {
                    "label": "2 mms",
                    "column": "schademeldingen_2mms",
                    "colour": "lightBlue"
                },
                {
                    "label": "5 mms",
                    "column": "schademeldingen_5mms",
                    "colour": "moss"
                },
                {
                    "label": "8.5 mms",
                    "column": "schademeldingen_8_5mms",
                    "colour": "brown"
                },
                {
                    "label": "16 mms",
                    "column": "schademeldingen_16mms",
                    "colour": "orange"
                },
                {
                    "label": "20 mms",
                    "column": "schademeldingen_20mms",
                    "colour": "red"
                },
                {
                    "label": "40 mms",
                    "column": "schademeldingen_40mms",
                    "colour": "violet"
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
                "bottom": 40,
                "left": 40,
                "right": 0
            },
            "margin": {
                "top": 32,
                "bottom": 68,
                "left": 0,
                "right": 0
            },
            "extra" : {
                "currencyLabels" : false,
                "privacySensitive" : true,
                "paddingInner" : .1,
                "paddingOuter" : .1,
                "municipalitySelect": false,
                "alternateTicks" : false,
                "header" : "Schademeldingen per trillingsgebied",
                "largeHeader" : false,
                "removeFirstColumn" : true
            }
        },
        "description" : "Een overzicht van het aantal schademeldingen sinds 2018, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans).<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. Het aantal meldingen in deze categorie was sinds 2018: <span data-slug='first_column'></span> ",
        "endpoint": "trillingssnelheden",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-grap-container-medium-small']
    },
    {
        "label" : "Gemiddeld schadebedrag",
        "slug" : "mms_gem_schadebedrag",
        "mapping": [
            [
                {
                    "label": "onbekend",
                    "column": "gemiddeld_schadebedrag_mms_onbekend",
                    "colour": "gray"
                },
                {
                    "label": "2 mms",
                    "column": "gemiddeld_schadebedrag_2mms",
                    "colour": "lightBlue"
                },
                {
                    "label": "5 mms",
                    "column": "gemiddeld_schadebedrag_5mms",
                    "colour": "moss"
                },
                {
                    "label": "8.5 mms",
                    "column": "gemiddeld_schadebedrag_8_5mms",
                    "colour": "brown"
                },
                {
                    "label": "16 mms",
                    "column": "gemiddeld_schadebedrag_16mms",
                    "colour": "orange"
                },
                {
                    "label": "20 mms",
                    "column": "gemiddeld_schadebedrag_20mms",
                    "colour": "red"
                },
                {
                    "label": "40 mms",
                    "column": "gemiddeld_schadebedrag_40mms",
                    "colour": "violet"
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
                "bottom": 40,
                "left": 40,
                "right": 0
            },
            "margin": {
                "top": 32,
                "bottom": 68,
                "left": 0,
                "right": 0
            },
            "extra" : {
                "currencyLabels" : true,
                "privacySensitive" : true,
                "paddingInner" : .1,
                "paddingOuter" : .1,
                "municipalitySelect": false,
                "alternateTicks" : false,
                "header" : "Gemiddelde schadevergoeding per trillingsgebied",
                "largeHeader" : false,
                "removeFirstColumn" : true
            }
        },
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen sinds 2018, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans).<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was sinds 2018: <span data-slug='first_column'></span>",
        "endpoint": "trillingssnelheden?limit=60",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-grap-container-medium-small']
    },
    {
        "label" : "Schademeldingen per trillingsgebied afgelopen week",
        "slug" : "mms_meldingen_nieuw",
        "mapping": [
            [
                {
                    "label": "onbekend",
                    "column": "nieuw_schademeldingen_mms_onbekend",
                    "colour": "gray"
                },
                {
                    "label": "2 mms",
                    "column": "nieuw_schademeldingen_2mms",
                    "colour": "lightBlue"
                },
                {
                    "label": "5 mms",
                    "column": "nieuw_schademeldingen_5mms",
                    "colour": "moss"
                },
                {
                    "label": "8.5 mms",
                    "column": "nieuw_schademeldingen_8_5mms",
                    "colour": "brown"
                },
                {
                    "label": "16 mms",
                    "column": "nieuw_schademeldingen_16mms",
                    "colour": "orange"
                },
                {
                    "label": "20 mms",
                    "column": "nieuw_schademeldingen_20mms",
                    "colour": "red"
                },
                {
                    "label": "40 mms",
                    "column": "nieuw_schademeldingen_40mms",
                    "colour": "violet"
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
                "bottom": 40,
                "left": 40,
                "right": 0
            },
            "margin": {
                "top": 32,
                "bottom": 68,
                "left": 0,
                "right": 0
            },
            "extra" : {
                "currencyLabels" : false,
                "privacySensitive" : false,
                "paddingInner" : .1,
                "paddingOuter" : .1,
                "municipalitySelect": false,
                "alternateTicks" : false,
                "header" : "Schademeldingen per trillingsgebied afgelopen week",
                "largeHeader" : false,
                "removeFirstColumn" : true
            }
        },
        "description" : "Een overzicht van het aantal schademeldingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. Het aantal meldingen in deze categorie was afgelopen week:<span data-slug='first_column'></span>",
        "endpoint": "trillingssnelheden",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-grap-container-medium-small']
    },
    {
        "label" : "Gemiddelde schadevergoeding afgelopen week",
        "slug" : "mms_gem_schadebedrag_nieuw",
        "mapping": [
            [
                {
                    "label": "onbekend",
                    "column": "nieuw_gemiddeld_schadebedrag_mms_onbekend",
                    "colour": "gray"
                },
                {
                    "label": "2 mms",
                    "column": "nieuw_gemiddeld_schadebedrag_2mms",
                    "colour": "lightBlue"
                },
                {
                    "label": "5 mms",
                    "column": "nieuw_gemiddeld_schadebedrag_5mms",
                    "colour": "moss"
                },
                {
                    "label": "8.5 mms",
                    "column": "nieuw_gemiddeld_schadebedrag_8_5mms",
                    "colour": "brown"
                },
                {
                    "label": "16 mms",
                    "column": "nieuw_gemiddeld_schadebedrag_16mms",
                    "colour": "orange"
                },
                {
                    "label": "20 mms",
                    "column": "nieuw_gemiddeld_schadebedrag_20mms",
                    "colour": "red"
                },
                {
                    "label": "40 mms",
                    "column": "nieuw_gemiddeld_schadebedrag_40mms",
                    "colour": "violet"
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
                "bottom": 40,
                "left": 40,
                "right": 0
            },
            "margin": {
                "top": 32,
                "bottom": 68,
                "left": 0,
                "right": 0
            },
            "extra" : {
                "currencyLabels" : true,
                "privacySensitive" : true,
                "paddingInner" : .1,
                "paddingOuter" : .1,
                "municipalitySelect": false,
                "alternateTicks" : false,
                "header" : "Gemiddelde schadevergoeding afgelopen week",
                "largeHeader" : false,
                "removeFirstColumn" : true
            }
        },
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:<span data-slug='first_column'></span>",
        "endpoint": "trillingssnelheden?limit=60",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-grap-container-medium-small']
    },
    {
        "label" : "Percentage toegekend per trillingsgebied",
        "slug" : "mms_percentage_toegekend",
        "mapping": [
            [
                {
                    "label": "onbekend",
                    "column": "percentage_toegewezen_besluiten_mms_onbekend",
                    "colour": "gray"
                },
                {
                    "label": "2 mms",
                    "column": "percentage_toegewezen_besluiten_2mms",
                    "colour": "lightBlue"
                },
                {
                    "label": "5 mms",
                    "column": "percentage_toegewezen_besluiten_5mms",
                    "colour": "moss"
                },
                {
                    "label": "8.5 mms",
                    "column": "percentage_toegewezen_besluiten_8_5mms",
                    "colour": "brown"
                },
                {
                    "label": "16 mms",
                    "column": "percentage_toegewezen_besluiten_16mms",
                    "colour": "orange"
                },
                {
                    "label": "20 mms",
                    "column": "percentage_toegewezen_besluiten_20mms",
                    "colour": "red"
                },
                {
                    "label": "40 mms",
                    "column": "percentage_toegewezen_besluiten_40mms",
                    "colour": "violet"
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
                "bottom": 40,
                "left": 40,
                "right": 0
            },
            "margin": {
                "top": 32,
                "bottom": 68,
                "left": 0,
                "right": 0
            },
            "extra" : {
                "currencyLabels" : false,
                "privacySensitive" : true,
                "paddingInner" : .1,
                "paddingOuter" : .1,
                "municipalitySelect": false,
                "alternateTicks" : false,
                "header" : "Percentage toegekend per trillingsgebied",
                "largeHeader" : false,
                "removeFirstColumn" : true,
                "percentage" : true
            }
        },
        "description" : "Een overzicht van het percentage van de besluiten sinds 2018 waarbij een vergoeding is toegekend.<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. Het percentage van de besluiten sinds 2018 waarbij een vergoeding is toegekend in deze categorie was:<span data-slug='first_column'",
        "endpoint": "trillingssnelheden?limit=60",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-grap-container-medium-small']
    },
    {
        "label" : "Percentage afgehandeld per trillingsgebied",
        "slug" : "mms_percentage_afgehandeld",
        "mapping": [
            [
                {
                    "label": "onbekend",
                    "column": "percentage_afgehandeld_mms_onbekend",
                    "colour": "gray"
                },
                {
                    "label": "2 mms",
                    "column": "percentage_afgehandeld_2mms",
                    "colour": "lightBlue"
                },
                {
                    "label": "5 mms",
                    "column": "percentage_afgehandeld_5mms",
                    "colour": "moss"
                },
                {
                    "label": "8.5 mms",
                    "column": "percentage_afgehandeld_8_5mms",
                    "colour": "brown"
                },
                {
                    "label": "16 mms",
                    "column": "percentage_afgehandeld_16mms",
                    "colour": "orange"
                },
                {
                    "label": "20 mms",
                    "column": "percentage_afgehandeld_20mms",
                    "colour": "red"
                },
                {
                    "label": "40 mms",
                    "column": "percentage_afgehandeld_40mms",
                    "colour": "violet"
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
                "bottom": 40,
                "left": 40,
                "right": 0
            },
            "margin": {
                "top": 32,
                "bottom": 68,
                "left": 0,
                "right": 0
            },
            "extra" : {
                "currencyLabels" : false,
                "privacySensitive" : true,
                "paddingInner" : .1,
                "paddingOuter" : .1,
                "municipalitySelect": false,
                "alternateTicks" : false,
                "header" : "Percentage afgehandeld per trillingsgebied",
                "largeHeader" : false,
                "removeFirstColumn" : true,
                "percentage" : true
            }
        },
        "description" : "Een overzicht van het percentage van de schademeldingen sinds 2018 die zijn afgehandeld.<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. Het percentage van de schademeldingen sinds 2018 die zijn afgehandeld in deze categorie was:<span data-slug='first_column'></span>",
        "endpoint": "trillingssnelheden?limit=60",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-grap-container-medium-small']
    },
    {
        "label" : "Percentage toegekend per trillingsgebied afgelopen week",
        "slug" : "mms_percentage_toegekend_nieuw",
        "mapping": [
            [
                {
                    "label": "onbekend",
                    "column": "nieuw_percentage_toegewezen_besluiten_mms_onbekend",
                    "colour": "gray"
                },
                {
                    "label": "2 mms",
                    "column": "nieuw_percentage_toegewezen_besluiten_2mms",
                    "colour": "lightBlue"
                },
                {
                    "label": "5 mms",
                    "column": "nieuw_percentage_toegewezen_besluiten_5mms",
                    "colour": "moss"
                },
                {
                    "label": "8.5 mms",
                    "column": "nieuw_percentage_toegewezen_besluiten_8_5mms",
                    "colour": "brown"
                },
                {
                    "label": "16 mms",
                    "column": "nieuw_percentage_toegewezen_besluiten_16mms",
                    "colour": "orange"
                },
                {
                    "label": "20 mms",
                    "column": "nieuw_percentage_toegewezen_besluiten_20mms",
                    "colour": "red"
                },
                {
                    "label": "40 mms",
                    "column": "nieuw_percentage_toegewezen_besluiten_40mms",
                    "colour": "violet"
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
                "bottom": 40,
                "left": 40,
                "right": 0
            },
            "margin": {
                "top": 32,
                "bottom": 68,
                "left": 0,
                "right": 0
            },
            "extra" : {
                "currencyLabels" : false,
                "privacySensitive" : true,
                "paddingInner" : .1,
                "paddingOuter" : .1,
                "municipalitySelect": false,
                "alternateTicks" : false,
                "header" : "Percentage toegekend per trillingsgebied afgelopen week",
                "largeHeader" : false,
                "removeFirstColumn" : true,
                "percentage" : true
            }
        },
        "description" : "Een overzicht van het percentage van de besluiten waarbij afgelopen week een vergoeding is toegekend.<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. Het percentage van de besluiten waarbij afgelopen week een schade is toegekend in deze categorie was: <span data-slug='first_column'></span>",
        "endpoint": "trillingssnelheden?limit=60",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-grap-container-medium-small']
    }
]

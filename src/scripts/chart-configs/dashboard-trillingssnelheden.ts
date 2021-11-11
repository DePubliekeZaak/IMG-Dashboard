import { GraphObject} from '../types/graphObject';

export const dashboardTrillingssnelheden : GraphObject[] = [

   /* {
        "label": "Meldingen",
        "slug": "taart_mms_meldingen",
        "mapping":  [[
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
            ],
            [
                {
                    "label": "Totaal",
                    "column": false,
                    "colour": false
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
                "header" : "Schademeldingen per trillingssnelheid",
                "segmentIndicator": true,
            }
        },
        "description" : "",
        "endpoint": "trillingssnelheden",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6']
    }, */
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
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 0,
                "bottom": 0,
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
                "header" : "Aantal schademeldingen",
                "largeHeader" : false,
            }
        },
        "description" : "",
        "endpoint": "trillingssnelheden",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6']
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
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 0,
                "bottom": 0,
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
                "header" : "Gemiddeld schadebedrag",
                "largeHeader" : false,
            }
        },
        "description" : "",
        "endpoint": "trillingssnelheden?limit=60",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6']
    },
    {
        "label" : "Percentage toegekend",
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
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 0,
                "bottom": 0,
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
                "header" : "Percentage toegekend",
                "largeHeader" : false,
            }
        },
        "description" : "",
        "endpoint": "trillingssnelheden?limit=60",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6']
    },
    {
        "label" : "Percentage afgehandeld",
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
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 0,
                "bottom": 0,
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
                "header" : "Percentage afgehandeld",
                "largeHeader" : false,
            }
        },
        "description" : "",
        "endpoint": "trillingssnelheden?limit=60",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6']
    }


]

import { GraphObject} from '../types/graphObject';

export const dashboardMultiplesVergoedingen : GraphObject[] = [

    {
        "label" : "Aantal gemiddeld_schadebedrag per trillingssnelheid",
        "slug" : "mms_vergoedingenn",
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
            "multiples": true,
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
                "bottom": 160,
                "left": 0,
                "right": 0
            },
            "extra" : {
                "yMax" : 17500,
                "currencyLabels" : true,
                "privacySensitive" : false,
                "filter_small_sample" : true,
                "paddingInner" : .1,
                "paddingOuter" : .1,
                "municipalitySelect": false,
                "alternateTicks" : false,
                "header" : "Aantal gemiddeld_schadebedrag",
                "largeHeader" : false,

            }
        },
        "description" : "",
        "endpoint": "trillingssnelheden?limit=60",  // ivm in-graph gemeentekiezer
        "segment": false,
        "elementClasslist": ['img-graph-container','img-graph-container-4', "img-graph-container-vertical-padding"]
    }

]

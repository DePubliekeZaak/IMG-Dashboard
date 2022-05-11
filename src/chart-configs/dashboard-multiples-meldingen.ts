import { GraphObject} from '../types/graphObject';

export const dashboardMultiplesMeldingen : GraphObject[] = [

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
                "yMax" : 32000,
                "currencyLabels" : false,
                "privacySensitive" : false,
                "paddingInner" : .1,
                "paddingOuter" : .1,
                "municipalitySelect": false,
                "alternateTicks" : false,
                "header" : "Aantal schademeldingen",
                "largeHeader" : false,
            }
        },
        "description" : "",
        "endpoint": "trillingssnelheden?limit=60",  // ivm in-graph gemeentekiezer
        "segment": false,
        "elementClasslist": ['img-graph-container','img-graph-container-4', "img-graph-container-vertical-padding"]
    }

]

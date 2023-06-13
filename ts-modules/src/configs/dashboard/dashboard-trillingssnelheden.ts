import { GraphObject, IGraphMapping} from '@local/d3_types';

const custom_pad = 20;

export const dashboardTrillingssnelheden :  (GraphObject|IGraphMapping)[] = [


    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "TrendLineSmooth",
        "args": ["2022-05-16","15000"],
        "parameters": [
            [
                // {
                //     "label": "onbekend",
                //     "column": "nieuw_gemiddeld_schadebedrag_mms_onbekend",
                //     "colour": "gray"
                // },
                {
                    "label": "2 mms",
                    "column": "nieuw_gemiddeld_schadebedrag_2mms",
                    "colour": "lightBlue",
                    "short" : "2mms",
                    "format" : "currency"
                },
                {
                    "label": "5 mms",
                    "column": "nieuw_gemiddeld_schadebedrag_5mms",
                    "colour": "moss",
                    "short" : "5mms",
                    "format" : "currency"
                },
                {
                    "label": "8.5 mms",
                    "column": "nieuw_gemiddeld_schadebedrag_8_5mms",
                    "colour": "brown",
                    "short" : "8.5mms",
                    "format" : "currency"
                },
                {
                    "label": "16 mms",
                    "column": "nieuw_gemiddeld_schadebedrag_16mms",
                    "colour": "orange",
                    "short" : "16mms",
                    "format" : "currency"

                },
                {
                    "label": "20 mms",
                    "column": "nieuw_gemiddeld_schadebedrag_20mms",
                    "colour": "red",
                    "short" : "20mms",
                    "format" : "currency"
                },
                {
                    "label": "40 mms",
                    "column": "nieuw_gemiddeld_schadebedrag_40mms",
                    "colour": "violet",
                    "short" : "40mms",
                    "format" : "currency"
                }
            ]
        ],
        "header" : "Gemiddelde schadevergoeding per trillingsgebebied",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "trillingssnelheden",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "TrendLineSmooth",
        "args": ["2022-05-16","500"],
        "parameters": [
            [
                // {
                //     "label": "onbekend",
                //     "column": "nieuw_gemiddeld_schadebedrag_mms_onbekend",
                //     "colour": "gray"
                // },
                {
                    "label": "2 mms",
                    "column": "nieuw_schademeldingen_2mms",
                    "colour": "lightBlue",
                    "short" : "2mms",
                },
                {
                    "label": "5 mms",
                    "column": "nieuw_schademeldingen_5mms",
                    "colour": "moss",
                    "short" : "5mms",
                },
                {
                    "label": "8.5 mms",
                    "column": "nieuw_schademeldingen_8_5mms",
                    "colour": "brown",
                    "short" : "8.5mms",
                    
                },
                {
                    "label": "16 mms",
                    "column": "nieuw_schademeldingen_16mms",
                    "colour": "orange",
                    "short" : "16mms",
                   

                },
                {
                    "label": "20 mms",
                    "column": "nieuw_schademeldingen_20mms",
                    "colour": "red",
                    "short" : "20mms",
                    
                },
                {
                    "label": "40 mms",
                    "column": "nieuw_schademeldingen_40mms",
                    "colour": "violet",
                    "short" : "40mms",
                    
                }
            ]
        ],
        "header" : "Nieuwe meldingen per trillingssnelheid ",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "trillingssnelheden",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "TrendLineSmooth",
        "args": ["2022-05-16","100"],
        "parameters": [
            [
                // {
                //     "label": "onbekend",
                //     "column": "nieuw_gemiddeld_schadebedrag_mms_onbekend",
                //     "colour": "gray"
                // },
                {
                    "label": "2 mms",
                    "column": "nieuw_percentage_toegewezen_besluiten_2mms",
                    "colour": "lightBlue",
                    "short" : "2mms",
                    "format" : "percentage"
                },
                {
                    "label": "5 mms",
                    "column": "nieuw_percentage_toegewezen_besluiten_5mms",
                    "colour": "moss",
                    "short" : "5mms",
                },
                {
                    "label": "8.5 mms",
                    "column": "nieuw_percentage_toegewezen_besluiten_8_5mms",
                    "colour": "brown",
                    "short" : "8.5mms",
                    
                },
                {
                    "label": "16 mms",
                    "column": "nieuw_percentage_toegewezen_besluiten_16mms",
                    "colour": "orange",
                    "short" : "16mms",
                   

                },
                {
                    "label": "20 mms",
                    "column": "nieuw_percentage_toegewezen_besluiten_20mms",
                    "colour": "red",
                    "short" : "20mms",
                    
                },
                {
                    "label": "40 mms",
                    "column": "nieuw_percentage_toegewezen_besluiten_40mms",
                    "colour": "violet",
                    "short" : "40mms",
                    
                }
            ]
        ],
        "header" : "Percentage toegewezen besluiten per trillingssnelheid ",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "trillingssnelheden",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-grap-container-medium-small']
    },
    {
        "slug" : "trend_mms_gem_schadebedrag_nieuw",
        "graph": "TrendLineSmooth",
        "args": ["2022-05-16","100"],
        "parameters": [
            [
                // {
                //     "label": "onbekend",
                //     "column": "nieuw_gemiddeld_schadebedrag_mms_onbekend",
                //     "colour": "gray"
                // },
                {
                    "label": "2 mms",
                    "column": "percentage_afgehandeld_2mms",
                    "colour": "lightBlue",
                    "short" : "2mms",
                    "format" : "percentage"
                },
                {
                    "label": "5 mms",
                    "column": "percentage_afgehandeld_5mms",
                    "colour": "moss",
                    "short" : "5mms",
                },
                {
                    "label": "8.5 mms",
                    "column": "percentage_afgehandeld_8_5mms",
                    "colour": "brown",
                    "short" : "8.5mms",
                    
                },
                {
                    "label": "16 mms",
                    "column": "percentage_afgehandeld_16mms",
                    "colour": "orange",
                    "short" : "16mms",
                   

                },
                {
                    "label": "20 mms",
                    "column": "percentage_afgehandeld_20mms",
                    "colour": "red",
                    "short" : "20mms",
                    
                },
                {
                    "label": "40 mms",
                    "column": "percentage_afgehandeld_40mms",
                    "colour": "violet",
                    "short" : "40mms",
                    
                }
            ]
        ],
        "header" : "Percentage afgehandeld per trillingssnelheid ",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:", // <span data-slug='first_column'></span>",
        "endpoint": "trillingssnelheden",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-grap-container-medium-small']
    },

    {
    
        "slug" : "mms_meldingen",
        "graph" : "BandBars",
        "parameters": [
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
        "header" : "Schademeldingen per trillingsgebied",
        "description" : "Een overzicht van het aantal schademeldingen sinds 2018, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans).<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. Het aantal meldingen in deze categorie was sinds 2018: <span data-slug='first_column'></span> ",
        "endpoint": "trillingssnelheden",
        "segment": "all",
        "elementClasslist": [
            'img-graph-container',
            'img-graph-container-6',
            'img-grap-container-medium-small'
        ]
    },
    {
        "slug" : "mms_gem_schadebedrag",
        "graph" : "BandBars",
        "parameters": [
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
        // "config": {
        //     "graphType": "BandBars",
        //     "xScaleType" : 'band',
        //     "yScaleType" : 'linear',
        //     "xParameter" : 'label',
        //     "yParameter" : "value",
        //     "padding": {
        //         "top": 20,
        //         "bottom": 40,
        //         "left": 40,
        //         "right": 0
        //     },
        //     "margin": {
        //         "top": 32,
        //         "bottom": 68,
        //         "left": 0,
        //         "right": 0
        //     },
        //     "extra" : {
        //         "currencyLabels" : true,
        //         "privacySensitive" : true,
        //         "paddingInner" : .1,
        //         "paddingOuter" : .1,
        //         "municipalitySelect": false,
        //         "alternateTicks" : false,
                
        //         "largeHeader" : false,
        //         "removeFirstColumn" : true
        //     }
        // },
        "header" : "Gemiddelde schadevergoeding per trillingsgebied",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen sinds 2018, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans).<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was sinds 2018: <span data-slug='first_column'></span>",
        "endpoint": "trillingssnelheden?limit=60",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-grap-container-medium-small']
    },
    {
        "slug" : "mms_meldingen_nieuw",
        "graph": "BandBars",
        "parameters": [
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
        // "config": {
            
        //     "xScaleType" : 'band',
        //     "yScaleType" : 'linear',
        //     "xParameter" : 'label',
        //     "yParameter" : "value",
        //     "padding": {
        //         "top": 20,
        //         "bottom": 40,
        //         "left": 40,
        //         "right": 0
        //     },
        //     "margin": {
        //         "top": 32,
        //         "bottom": 68,
        //         "left": 0,
        //         "right": 0
        //     },
        //     "extra" : {
        //         "currencyLabels" : false,
        //         "privacySensitive" : false,
        //         "paddingInner" : .1,
        //         "paddingOuter" : .1,
        //         "municipalitySelect": false,
        //         "alternateTicks" : false,
                
        //         "largeHeader" : false,
        //         "removeFirstColumn" : true
        //     }
        // },
        "header" : "Schademeldingen per trillingsgebied afgelopen week",
        "description" : "Een overzicht van het aantal schademeldingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. Het aantal meldingen in deze categorie was afgelopen week:<span data-slug='first_column'></span>",
        "endpoint": "trillingssnelheden",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-grap-container-medium-small']
    },
    {
        "slug" : "mms_gem_schadebedrag_nieuw",
        "graph": "BandBars",
        "parameters": [
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
        // "config": {
        //     "graphType": "BandBars",
        //     "xScaleType" : 'band',
        //     "yScaleType" : 'linear',
        //     "xParameter" : 'label',
        //     "yParameter" : "value",
        //     "padding": {
        //         "top": 20,
        //         "bottom": 40,
        //         "left": 40,
        //         "right": 0
        //     },
        //     "margin": {
        //         "top": 32,
        //         "bottom": 68,
        //         "left": 0,
        //         "right": 0
        //     },
        //     "extra" : {
        //         "currencyLabels" : true,
        //         "privacySensitive" : true,
        //         "paddingInner" : .1,
        //         "paddingOuter" : .1,
        //         "municipalitySelect": false,
        //         "alternateTicks" : false,
                
        //         "largeHeader" : false,
        //         "removeFirstColumn" : true
        //     }
        // },
        "header" : "Gemiddelde schadevergoeding afgelopen week",
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen in de afgelopen week, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans)<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was afgelopen week:<span data-slug='first_column'></span>",
        "endpoint": "trillingssnelheden?limit=60",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-grap-container-medium-small']
    },
    {
        "slug" : "mms_percentage_toegekend",
        "graph": "BandBars",
        "parameters": [
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
        // "config": {
        //     "graphType": "BandBars",
        //     "xScaleType" : 'band',
        //     "yScaleType" : 'linear',
        //     "xParameter" : 'label',
        //     "yParameter" : "value",
        //     "padding": {
        //         "top": 20,
        //         "bottom": 40,
        //         "left": 40,
        //         "right": 0
        //     },
        //     "margin": {
        //         "top": 32,
        //         "bottom": 68,
        //         "left": 0,
        //         "right": 0
        //     },
        //     "extra" : {
        //         "currencyLabels" : false,
        //         "privacySensitive" : true,
        //         "paddingInner" : .1,
        //         "paddingOuter" : .1,
        //         "municipalitySelect": false,
        //         "alternateTicks" : false,
                
        //         "largeHeader" : false,
        //         "removeFirstColumn" : true,
        //         "percentage" : true
        //     }
        // },
        "header" : "Percentage toegekend per trillingsgebied",
        "description" : "Een overzicht van het percentage van de besluiten sinds 2018 waarbij een vergoeding is toegekend.<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. Het percentage van de besluiten sinds 2018 waarbij een vergoeding is toegekend in deze categorie was:<span data-slug='first_column'",
        "endpoint": "trillingssnelheden?limit=60",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-grap-container-medium-small']
    },
    {

        "slug" : "mms_percentage_afgehandeld",
        "graph": "BandBars",
        "parameters": [
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
        // "config": {
            
        //     "xScaleType" : 'band',
        //     "yScaleType" : 'linear',
        //     "xParameter" : 'label',
        //     "yParameter" : "value",
        //     "padding": {
        //         "top": 20,
        //         "bottom": 40,
        //         "left": 40,
        //         "right": 0
        //     },
        //     "margin": {
        //         "top": 32,
        //         "bottom": 68,
        //         "left": 0,
        //         "right": 0
        //     },
        //     "extra" : {
        //         "currencyLabels" : false,
        //         "privacySensitive" : true,
        //         "paddingInner" : .1,
        //         "paddingOuter" : .1,
        //         "municipalitySelect": false,
        //         "alternateTicks" : false,
                
        //         "largeHeader" : false,
        //         "removeFirstColumn" : true,
        //         "percentage" : true
        //     }
        // },
        "header" : "Percentage afgehandeld per trillingsgebied",
        "description" : "Een overzicht van het percentage van de schademeldingen sinds 2018 die zijn afgehandeld.<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. Het percentage van de schademeldingen sinds 2018 die zijn afgehandeld in deze categorie was:<span data-slug='first_column'></span>",
        "endpoint": "trillingssnelheden?limit=60",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-grap-container-medium-small']
    },
    {
        "slug" : "mms_percentage_toegekend_nieuw",
        "graph": "BandBars",
        "parameters": [
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
        // "config": {
            
        //     "xScaleType" : 'band',
        //     "yScaleType" : 'linear',
        //     "xParameter" : 'label',
        //     "yParameter" : "value",
        //     "padding": {
        //         "top": 20,
        //         "bottom": 40,
        //         "left": 40,
        //         "right": 0
        //     },
        //     "margin": {
        //         "top": 32,
        //         "bottom": 68,
        //         "left": 0,
        //         "right": 0
        //     },
        //     "extra" : {
        //         "currencyLabels" : false,
        //         "privacySensitive" : true,
        //         "paddingInner" : .1,
        //         "paddingOuter" : .1,
        //         "municipalitySelect": false,
        //         "alternateTicks" : false,
                
        //         "largeHeader" : false,
        //         "removeFirstColumn" : true,
        //         "percentage" : true
        //     }
        // },
        "header" : "Percentage toegekend per trillingsgebied afgelopen week",
        "description" : "Een overzicht van het percentage van de besluiten waarbij afgelopen week een vergoeding is toegekend.<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. Het percentage van de besluiten waarbij afgelopen week een schade is toegekend in deze categorie was: <span data-slug='first_column'></span>",
        "endpoint": "trillingssnelheden?limit=60",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-grap-container-medium-small']
    }
]

import { GraphObject} from '../../d3-modules/_d3_types';

const pad = 40;
const margin = 180;

export const dashboardOverzicht : GraphObject[] = [
    {
        "label": "Taart Schadevergoedingen",
        "slug": "taart_schadevergoeding_totaal",
        "mapping":  [
            [
                {
                    "label": "Gebouwen",
                    "column": "fysieke_schade_totaal_verleend",
                    "colour": "orange"
                },
                {
                    "label": "Waardedaling",
                    "column": "waardedalingsregeling_totaal_verleend",
                    "colour": "moss"
                },
                {
                    "label": "Immaterieel",
                    "column": "immateriele_schade_totaal_verleend",
                    "colour": "blue"
                },
            ],
            [
                {
                    "label": "Totaal",
                    "column": "waardedalingsregeling_totaal_verleend",
                    "colour": "gray"
                }
            ]
        ],
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
                "currencyLabels" : true,
                "legendWidth" : 220,
                "maxRadius" : 100,
                "innerRadius" : 20,
                "header" : "Uitgekeerde vergoedingen",
                "segmentIndicator": true,
            }
        },
        "description" : "De diverse soorten schadevergoedingen die het IMG toekent uitgesplitst en als totaal opgeteld. De Stuwmeerregeling is afgelopen. Maar voor enkele van die dossiers worden nog vergoedingen toegekend omdat deze op basis van facturen van aannemers worden toegekend.",
        "endpoint": "vergoedingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol','img-graph-container-medium-high']

    },
    {
        "label" : "Afgehandelde dossiers",
        "slug" : "overzicht_meldingen",
        "mapping": [
            [
                {
                    "label": "Gebouwen",
                    "column": "afgehandeld",
                    "colour": "orange"
                },
                {
                    "label": "Waardedaling",
                    "column": "waardedaling_besluiten",
                    "colour": "moss"
                },
                {
                    "label": "Immaterieel",
                    "column": "immateriele_schade_besluiten",
                    "colour": "blue"
                },
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
                "yMax" : 120000,
                "currencyLabels" : false,
                "privacySensitive" : true,
                "paddingInner" : .1,
                "paddingOuter" : .1,
                "municipalitySelect": false,
                "alternateTicks" : false,
                "header" : "Afgehandelde dossiers",
                "largeHeader" : false,
            }
        },
        "description" : "Een overzicht van het aantal schademeldingen sinds 2018, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans).<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. Het aantal meldingen in deze categorie was sinds 2018: <span data-slug='first_column'></span> ",
        "endpoint": "voortgang",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-grap-container-medium']
    },
    {
        "label" : "In behandeling",
        "slug" : "overzicht_meldingen",
        "mapping": [
            [
                {
                    "label": "Gebouwen",
                    "column": "in_behandeling",
                    "colour": "orange"
                },
                {
                    "label": "Waardedaling",
                    "column": "waardedaling_in_behandeling",
                    "colour": "moss"
                },
                {
                    "label": "Immaterieel",
                    "column": "immateriele_schade_in_behandeling",
                    "colour": "blue"
                },
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
                "yMax" : 120000,
                "currencyLabels" : false,
                "privacySensitive" : true,
                "paddingInner" : .1,
                "paddingOuter" : .1,
                "municipalitySelect": false,
                "alternateTicks" : false,
                "header" : "In behandeling",
                "largeHeader" : false,
            }
        },
        "description" : "Een overzicht van het aantal schademeldingen sinds 2018, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans).<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. Het aantal meldingen in deze categorie was sinds 2018: <span data-slug='first_column'></span> ",
        "endpoint": "voortgang",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-grap-container-medium']
    },
    // {
    //     "label": "Totalen",
    //     "slug": "totalen",
    //     "mapping":  [[
    //         [
    //             {
    //                 "group": "Schade aan gebouwen",
    //                 "label": "afgehandeld",
    //                 "column": "afgehandeld",
    //                 "colour": "orange"
    //             },
    //             {
    //                 "group": "Schade aan gebouwen",
    //                 "label": "in_behandeling",
    //                 "column": "in_behandeling",
    //                 "colour": "orange"
    //             },
    //         ],
    //         [
    //             {
    //                 "group" : "Waardedaling",
    //                 "label": "afgehandeld",
    //                 "column": "waardedaling_besluiten",
    //                 "colour": "moss"
    //             },
    //             {
    //                 "group" : "Waardedaling",
    //                 "label": "in_behandeling",
    //                 "column": "waardedaling_in_behandeling",
    //                 "colour": "moss"
    //             },
    //         ],
    //         [
    //             {
    //                 "group" : "Immateriele schade",
    //                 "label": "afgehandeld",
    //                 "column": "immateriele_schade_besluiten",
    //                 "colour": "blue"
    //             },
    //             {
    //                 "group" : "Immateriele schade",
    //                 "label": "in_behandeling",
    //                 "column": "immateriele_schade_in_behandeling",
    //                 "colour": "blue"
    //             },
    //         ]
    //     ]],
    //     "config": {
    //
    //         "graphType": "Results",
    //         "xScaleType" : "linear",
    //         "yScaleType" : "band",
    //         "xParameter" : "schademeldingen",
    //         "yParameter" : "group",
    //         "padding": {
    //             "top": 0,
    //             "bottom": 40,
    //             "left": 0,
    //             "right": 0
    //         },
    //         "margin": {
    //             "top": 0,
    //             "bottom": 15,
    //             "left": 0,
    //             "right": 0
    //         },
    //         "extra" :{
    //             "currencyLabels" : false,
    //             "header" : "De regelingen",
    //             "segmentIndicator": true,
    //             "paddingInner" : .33,
    //             "paddingOuter" : .33
    //         }
    //     },
    //     "description" : "",
    //     "endpoint": "meldingen",
    //     "segment": "all",
    //     "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-medium-small']
    //
    // },

    {
        "label" : "Tevredenheidscijfer algemeen",
        "slug" : "bol_tevredenheid_algemeen",
        "mapping": [
            [
                {
                    "label": "Tevredenheidscijfer",
                    "column": "doorlopend_cijfer",
                    "colour": "brown"
                },
                {
                    "label": "Tevredenheidscijfer",
                    "column": "maandcijfer",
                    "colour": "brown"
                },
                {
                    "label": "Tevredenheidscijfer",
                    "column": "aantal_respondenten",
                    "colour": "brown"
                }
            ]
        ],
        "config": {
            "graphType": "CijfersMonths",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : "maandcijfer",
            "padding": {
                "top": 20,
                "bottom": pad,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 120,
                "bottom": margin,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "decimal": true,
                "segmentIndicator": false,
                "noUpdate" : true,
                "shape": "block"
            }
        },
        "description" : "Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
        "endpoint": "tevredenheid",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol']
    },
    {   "label": "Gebruik",
        "slug": "trend_gebruik_regelingen",
        "mapping": [
            [
                {
                    "label": "Schade gebouwen",
                    "column": "nieuw_schademeldingen",
                    "colour": "orange",
                    "short": "fysieke schade"
                },
                {
                    "label": "Waardedalingsregeling",
                    "column": "nieuw_aanvragen",
                    "colour": "moss",
                    "short": "waardedaling"
                },
                // {
                //     "label": "Besluiten",
                //     "column": "nieuw_besluiten",
                //     "colour": "blue"
                // }
            ]
        ],
        "config": {
            "graphType": "TrendLine",
            "xScaleType": "time",
            "yScaleType": "linear",
            "xParameter": "_date",
            "yParameter": "nieuw_schademeldingen",
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
                "xScaleTicks": "quarterly",
                "useLineFill": true,
                "header" : "Gebruik regelingen in de tijd",
                "segmentIndicator": true,
                "legend": true,
                "hasFocus": true
            }
        },
        "description" : "Het aantal schade-opnames en adviesrapporten door de tijd heen. De schade-opname en het adviesrapport zijn voor vrijwel alle schademeldingen nodig om te komen tot een besluit. De trend laat daarmee het potentieel van de schadeafhandeling zien.",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-trendline']
    },
    {   "label": "Werkvoorraad",
        "slug": "werkvoorraad_regelingen",
        "mapping": [
            [
                {
                    "label": "Schade gebouwen",
                    "column": "in_behandeling",
                    "colour": "orange",
                    "short": "fysieke schade"
                },
                {
                    "label": "Waardedalingsregeling",
                    "column": "waardedaling_in_behandeling",
                    "colour": "moss",
                    "short": "waardedaling"
                },
                // {
                //     "label": "Immaterieel",
                //     "column": "immateriele_schade_in_behandeling",
                //     "colour": "blue",
                //     "short": "immaterieel"
                // }

            ]
        ],
        "config": {
            "graphType": "TrendLine",
            "xScaleType": "time",
            "yScaleType": "linear",
            "xParameter": "_date",
            "yParameter": "nieuw_schademeldingen",
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
                "xScaleTicks": "quarterly",
                "useLineFill": true,
                "header" : "Aantal dossiers in behandeling",
                "segmentIndicator": true,
                "legend": true,
                "hasFocus": true
            }
        },
        "description" : "Het aantal schade-opnames en adviesrapporten door de tijd heen. De schade-opname en het adviesrapport zijn voor vrijwel alle schademeldingen nodig om te komen tot een besluit. De trend laat daarmee het potentieel van de schadeafhandeling zien.",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-trendline']
    },

    /// SCHADE GEBOUWEN
    {
        "label" : "Schade aan gebouwen en objecten",
        "slug" : "bol_schademeldingen",
        "mapping": [
            [
                {
                    "label": "Nieuw binnen vorige week",
                    "column": "nieuw_schademeldingen",
                    "colour": "orange"
                },
                {
                    "label": "Schade-meldingen",
                    "column": "schademeldingen",
                    "colour": "orange"
                }
            ]
        ],
        "config": {
            "graphType": "CijfersLine",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : false,
            "padding": {
                "top": 20,
                "bottom": pad,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 120,
                "bottom": margin,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "units": "meldingen",
                "segmentIndicator": true,
                "link": "meldingen",
                "largeHeader": true
            }
        },
        "description" : "Het aantal nieuwe schademeldingen dat afgelopen week is binnengekomen.",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol']
    },
    {
        "label" : "Bol afgehandelde meldingen",
        "slug" : "bol_afgehandelde_meldingen",
        "mapping": [
            [
                {
                    "label": "Afgehandeld vorige week",
                    "column": "nieuw_afgehandeld",
                    "colour": "orange"
                },
                {
                    "label": "Afgehandelde schade-meldingen",
                    "column": "afgehandeld",
                    "colour": "orange"
                }
            ]
        ],
        "config": {
            "graphType": "CijfersLine",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : false,
            "padding": {
                "top": 20,
                "bottom": pad,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 120,
                "bottom": margin,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "units": "meldingen",
                "segmentIndicator": true
            }
        },
        "description" : "Het aantal schademeldingen dat afgelopen week is afgehandeld. Op sommige adressen lopen er meerdere schademeldingen. Die worden waar mogelijk met een enkel besluit afgehandeld.",
        "endpoint": "voortgang",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol']

    },


    {
        "label" : "Bol gerealiseerde doorlooptijd",
        "slug" : "bol_doorlooptijd",
        "mapping": [
            [
                {
                    "label": "Verwachte duur",
                    "column": "verwacht_aantal_dagen_tussen_melding_en_besluit",
                    "colour": "orange"
                }
            ]
        ],
        "config": {
            "graphType": "CijfersLine",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : false,
            "padding": {
                "top": 20,
                "bottom": pad,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 120,
                "bottom": margin,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "units": "dagen",
                "segmentIndicator": false,
                "noUpdate" : true,
                "notNull": true
            }
        },
        "description" : "Voor nieuwe, reguliere schademeldingen streeft het IMG naar een maximale doorlooptijd van indiening tot besluit van een half jaar (182 dagen). We berekenen op basis van de huidige voortgang hoeveel dagen het op dit moment bij benadering duurt om een nieuwe schademelding af te handelen. Onder meer de huidige capaciteit van bijvoorbeeld schade-opnames, het opleveren van adviesrapporten en het voorbereiden van besluiten wordt daarbij meegewogen.",
        "endpoint": "voortgang",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol']
    },
    {
        "label" : "Tevredenheidscijfer algemeen",
        "slug" : "bol_tevredenheid_algemeen",
        "mapping": [
            [
                {
                    "label": "Tevredenheidscijfer",
                    "column": "fysieke_schade_doorlopend_cijfer",
                    "colour": "orange"
                },
                {
                    "label": "Tevredenheidscijfer",
                    "column": "fysieke_schade_maandcijfer",
                    "colour": "orange"
                },
                {
                    "label": "Tevredenheidscijfer",
                    "column": "fysieke_schade_aantal_respondenten_doorlopend",
                    "colour": "orange"
                }
            ]
        ],
        "config": {
            "graphType": "CijfersMonths",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : "fysieke_schade_maandcijfer",
            "padding": {
                "top": 20,
                "bottom": pad,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 120,
                "bottom": margin,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "decimal": true,
                "segmentIndicator": false,
                "noUpdate" : true,
                "shape": "block"
            }
        },
        "description" : "Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
        "endpoint": "tevredenheid",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol']
    },

    // FYSIEKE SCHADE RIJ 2

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
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-top-padding','img-grap-container-medium-small']
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
                "header" : "Gemiddeld schadebedrag per trillingsgebied",
                "largeHeader" : false,
                "removeFirstColumn" : true
            }
        },
        "description" : "Een overzicht van de gemiddeld toegekende schadevergoedingen sinds 2018, onderverdeeld naar de zones met een specifieke minimale trillingssterkte (1% overschrijdingskans).<br/><br/>Aanvullend: Bij een klein deel van de adressen is geen trillingsgebied geautomatiseerd te achterhalen. De gemiddelde schadevergoeding in deze categorie was sinds 2018: <span data-slug='first_column'></span>",
        "endpoint": "trillingssnelheden?limit=60",  // ivm in-graph gemeentekiezer
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-top-padding','img-grap-container-medium-small']
    },




    /// WAARDEDALING

    {
        "label" : "Waardedaling",
        "slug" : "bol_schademeldingen",
        "mapping": [
            [
                {
                    "label": "Nieuw binnen vorige week",
                    "column": "nieuw_aanvragen",
                    "colour": "moss"
                },
                {
                    "label": "Schade-meldingen",
                    "column": "aanvragen",
                    "colour": "moss"
                }
            ]
        ],
        "config": {
            "graphType": "CijfersLine",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : false,
            "padding": {
                "top": 20,
                "bottom": pad,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 120,
                "bottom": margin,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "units": "aanvragen",
                "segmentIndicator": true,
                "link": "meldingen",
                "largeHeader": true
            }
        },
        "description" : "Het aantal nieuwe schademeldingen dat afgelopen week is binnengekomen.",
        "endpoint": "waardedaling",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol','img-grap-container-medium']
    },
    {
        "label" : "Bol afgehandelde meldingen",
        "slug" : "bol_afgehandelde_meldingen",
        "mapping": [
            [
                {
                    "label": "Afgehandeld vorige week",
                    "column": "nieuw_besluiten",
                    "colour": "moss"
                },
                {
                    "label": "Afgehandelde schade-meldingen",
                    "column": "besluiten",
                    "colour": "moss"
                }
            ]
        ],
        "config": {
            "graphType": "CijfersLine",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : false,
            "padding": {
                "top": 20,
                "bottom": pad,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 120,
                "bottom": margin,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "units": "aanvragen",
                "segmentIndicator": true
            }
        },
        "description" : "Het aantal schademeldingen dat afgelopen week is afgehandeld. Op sommige adressen lopen er meerdere schademeldingen. Die worden waar mogelijk met een enkel besluit afgehandeld.",
        "endpoint": "waardedaling",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol','img-grap-container-medium']

    },
    {
        "label" : "Gem aanvragen per adres",
        "slug" : "bol_doorlooptijd",
        "mapping": [
            [
                {
                    "label": "Aanvragen per adres",
                    "column": "gemiddeld_aantal_aanvragen_per_adres",
                    "colour": "moss"
                }
            ]
        ],
        "config": {
            "graphType": "CijfersLine",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : false,
            "padding": {
                "top": 20,
                "bottom": pad,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 120,
                "bottom": margin,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "units": "",
                "segmentIndicator": false,
                "decimal": true,
                "noUpdate" : true,
                "notNull": true
            }
        },
        "description" : "Voor nieuwe, reguliere schademeldingen streeft het IMG naar een maximale doorlooptijd van indiening tot besluit van een half jaar (182 dagen). We berekenen op basis van de huidige voortgang hoeveel dagen het op dit moment bij benadering duurt om een nieuwe schademelding af te handelen. Onder meer de huidige capaciteit van bijvoorbeeld schade-opnames, het opleveren van adviesrapporten en het voorbereiden van besluiten wordt daarbij meegewogen.",
        "endpoint": "waardedaling",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol','img-grap-container-medium']
    },
    {
        "label" : "Tevredenheidscijfer algemeen",
        "slug" : "bol_tevredenheid_algemeen",
        "mapping": [
            [
                {
                    "label": "Tevredenheidscijfer",
                    "column": "waardedaling_doorlopend_cijfer",
                    "colour": "moss"
                },
                {
                    "label": "Tevredenheidscijfer",
                    "column": "waardedaling_maandcijfer",
                    "colour": "moss"
                },
                {
                    "label": "Tevredenheidscijfer",
                    "column": "waardedaling_aantal_respondenten_doorlopend",
                    "colour": "moss"
                }
            ]
        ],
        "config": {
            "graphType": "CijfersMonths",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : "waardedaling_maandcijfer",
            "padding": {
                "top": 20,
                "bottom": pad,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 120,
                "bottom": margin,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "decimal": true,
                "segmentIndicator": false,
                "noUpdate" : true,
                "shape": "block"
            }
        },
        "description" : "Het betreft hier een gemiddelde gebaseerd op alle reacties die sinds de start van diverse metingen zijn binnengekomen. Er wordt daarbij voor verschillende regelingen per e-mail om een reactie gevraagd kort nadat het besluit is bekend gemaakt bij de aanvrager. Na een besluit over de aanvraag tot vergoeding van fysieke schade wordt gevraagd: “Welk rapportcijfer geeft u het besluit dat u ontvangen heeft? (1-10)” Na een besluit over de aanvraag tot vergoeding van waardedaling wordt gevraagd: “Hoe tevreden bent u over het indienen en afhandelen van uw aanvraag?(1-10)” Hoe meer besluiten er zijn genomen bij die specifieke regeling, hoe zwaarder dat gemiddelde vervolgens meetelt bij het tevredenheidscijfer voor het IMG als geheel. Onder het totaalcijfer over de gehele periode, staat het doorlopend gemiddelde totaalcijfer voor die maand weergegeven. Het totaalcijfer wordt wekelijks geüpdatet en is tot op heden gebaseerd op <span data-slug='aantal_respondenten'>xxxxx</span> reacties.",
        "endpoint": "tevredenheid",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol','img-grap-container-medium']
    },

    // IMMATERIELE SCHADE

    {
        "label" : "Immateriele schade",
        "slug" : "ims_ingediend",
        "mapping": [
            [
                {
                    "label": "Nieuw binnen vorige week",
                    "column": "immateriele_schade_nieuw_aanvragen",
                    "colour": "blue"
                },
                {
                    "label": "Schade-meldingen",
                    "column": "immateriele_schade_aanvragen",
                    "colour": "blue"
                }
            ]
        ],
        "config": {
            "graphType": "CijfersLine",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : false,
            "padding": {
                "top": 20,
                "bottom": pad,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 120,
                "bottom": margin,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "units": "ingediend",
                "segmentIndicator": false,
                // "link": "meldingen",
                "largeHeader": true
            }
        },
        "description" : "",
        "endpoint": "immateriele_schade",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol','img-grap-container-medium']
    },
    {
        "label" : "Immateriele schade",
        "slug" : "ims_afgehandeld",
        "mapping": [
            [
                {
                    "label": "Afgehandeld vorige week",
                    "column": "immateriele_schade_nieuw_besluiten",
                    "colour": "blue"
                },
                {
                    "label": "Schade-meldingen",
                    "column": "immateriele_schade_besluiten",
                    "colour": "blue"
                }
            ]
        ],
        "config": {
            "graphType": "CijfersLine",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : false,
            "padding": {
                "top": 20,
                "bottom": pad,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 120,
                "bottom": margin,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "units": "afgehandeld",
                "segmentIndicator": false
            }
        },
        "description" : "",
        "endpoint": "immateriele_schade",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol','img-grap-container-medium']
    },
    {
        "label" : "Immateriele schade",
        "slug" : "ims_aanvragen_per_adres",
        "mapping": [
            [
                {
                    "label": "Aanvragen per adres",
                    "column": "immateriele_schade_gemiddeld_aantal_aanvragen_per_adres",
                    "colour": "blue"
                }
            ]
        ],
        "config": {
            "graphType": "CijfersLine",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : "immateriele_schade_gemiddeld_aantal_aanvragen_per_adres",
            "padding": {
                "top": 20,
                "bottom": pad,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 120,
                "bottom": margin,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "units": "",
                "segmentIndicator": false,
                "decimal": true,
                "noUpdate" : true,
                "notNull": true
            }
        },
        "description" : "",
        "endpoint": "immateriele_schade",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol','img-grap-container-medium']
    },
    {
        "label": "Taart Schadevergoedingen",
        "slug": "taart_schadevergoeding_totaal",
        "mapping":  [
            [
                {
                    "label": "Toegewezen",
                    "column": "immateriele_schade_toegewezen",
                    "colour": "moss"
                },
                {
                    "label": "Afgewezen",
                    "column": "immateriele_schade_afgewezen",
                    "colour": "lightBlue"
                },
            ],
            [
                {
                    "label": "Totaal",
                    "column": "waardedalingsregeling_totaal_verleend",
                    "colour": "gray"
                }
            ]
        ],
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
                "header" : "Toegewezen / afgewezen",
                "segmentIndicator": false,
            }
        },
        "description" : "De diverse soorten schadevergoedingen die het IMG toekent uitgesplitst en als totaal opgeteld. De Stuwmeerregeling is afgelopen. Maar voor enkele van die dossiers worden nog vergoedingen toegekend omdat deze op basis van facturen van aannemers worden toegekend.",
        "endpoint": "immateriele_schade",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3','img-graph-container-bol','img-graph-container-medium-high']

    }
]

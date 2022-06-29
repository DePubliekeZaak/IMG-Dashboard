import { GraphObject} from '../types/graphObject';

export const dashboardVoortgang : GraphObject[] = [

    {
        "label" : "Schademeldingen totaal",
        "slug" : "cijfer_schademedlingen_totaal",
        "mapping": [
            [
                {
                    "label": "Schademeldingen totaal",
                    "column": "schademeldingen",
                    "colour": "orange"
                }
            ]
        ],
        "config": {
            "graphType": "Cijfer",
            "xScaleType" : "",
            "yScaleType" : "",
            "xParameter" : "",
            "yParameter" : "",
            "padding": {
                "top": 20,
                "bottom": 80,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 90,
                "bottom": 80,
                "left": 10,
                "right": 10
            },
            "extra": {
                "units": "meldingen",
                "header": "Schademeldingen totaal"
            }
        },
        "description" : "",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-grap-container-bol']
    },
    {
        "label" : "Schademeldingen totaal",
        "slug" : "cijfer_schademeldingen_totaal",
        "mapping": [
            [
                {
                    "label": "Totaal openstaande aanvragen",
                    "column": "in_behandeling",
                    "colour": "blue"
                }
            ]
        ],
        "config": {
            "graphType": "Cijfer",
            "xScaleType" : "",
            "yScaleType" : "",
            "xParameter" : "",
            "yParameter" : "",
            "padding": {
                "top": 20,
                "bottom": 80,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 90,
                "bottom": 80,
                "left": 10,
                "right": 10
            },
            "extra": {
                "units": "meldingen",
                "header": "Totaal openstaande aanvragen"
            }
        },
        "description" : "",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-grap-container-bol']
    },
    {
        "label" : "Schademeldingen totaal",
        "slug" : "cijfer_schademeldingen_totaal",
        "mapping": [
            [
                {
                    "label": "Afgehandeld totaal",
                    "column": "afgehandeld",
                    "colour": "moss"
                }
            ]
        ],
        "config": {
            "graphType": "Cijfer",
            "xScaleType" : "",
            "yScaleType" : "",
            "xParameter" : "",
            "yParameter" : "",
            "padding": {
                "top": 20,
                "bottom": 80,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 90,
                "bottom": 80,
                "left": 10,
                "right": 10
            },
            "extra": {
                "units": "meldingen",
                "header": "Afgehandeld totaal"
            }
        },
        "description" : "",
        "endpoint": "voortgang",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-grap-container-bol']
    },
    {
        "label": "Voortgang afhandeling",
        "slug": "stacked_area_doorlooptijden",
        "mapping": [
            [
                {
                    "label": '2 jaar en ouder',
                    "column": 'langer_dan_twee_jaar_in_procedure',
                    "colour": "blue"
                },
                {
                    "label": '1-2 jaar oud',
                    "column": 'tussen_jaar_en_twee_jaar_in_procedure',
                    "colour": "orange"
                },
                {
                    "label": '0,5-1 jaar oud',
                    "column": 'tussen_half_jaar_en_jaar_in_procedure',
                    "colour": "moss"
                },
                {
                    "label": '0,5 jaar oud',
                    "column": 'minder_dan_half_jaar_in_procedure',
                    "colour": "lightBlue"
                }
            ]
        ],
        "config": {
            "graphType": "StackedArea",
            "xScaleType": "time",
            "yScaleType": "linear",
            "xParameter": "_date",
            "yParameter": "TUSSEN_12_EN_1_JAAR",
            "padding": {
                "top": 20,
                "bottom": 80,
                "left": 60,
                "right": 30
            },
            "margin": {
                "top": 60,
                "bottom": 150,
                "left": 0,
                "right": 0
            },
            "extra": {
                "xScaleTicks": "timeMonth",
                "header": "Aantal openstaand sinds indiening",
                "largeHeader" : false,
            }
        },
        "description" : "Het aantal openstaande schademeldingen onderverdeeld in de leeftijd van die melding sinds de indiening ervan. De grafiek toont de ontwikkeling door de tijd heen. Aangezien het IMG ernaar streeft dat reguliere schademeldingen binnen een half jaar zijn afgehandeld, zou dit verreweg de grootste groep moeten zijn van het totaal aantal openstaande schademeldingen op dit moment.",
        "endpoint": "voortgang",
        "segment": "all",
        "publishDate": false,
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-graph-container-medium-high','img-graph-container-vertical-padding']
    },
    {
        "label" : "Bol percentage binnen half jaar",
        "slug" : "bol_binnen_half_jaar",
        "mapping": [
            [
                {
                    "label": "In half jaar afgehandeld",
                    "column": "percentage_binnen_half_jaar",
                    "colour": "moss"
                }
            ]
        ],
        "config": {
            "graphType": "CijfersLine",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : "",
            "padding": {
                "top": 20,
                "bottom": 40,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 90,
                "bottom": 160,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "units": "%",
                "header": "In half jaar afgehandeld"
            }
        },
        "description" : "Het percentage schademeldingen dat in minder dan een half jaar tijd sinds de binnenkomst van een schademelding is afgehandeld. Het IMG streeft ernaar alle reguliere schademeldingen binnen een half jaar (182 dagen) af te handelen. Het percentage wordt berekend over de laatste 2.500 besluiten over schademeldingen. Het vertoont daarmee een voortschrijdend gemiddelde. Gem. tijd tot besluit: Doorlooptijd afgehandeld dossiers",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-graph-container-bol']
    },
    {
        "label" : "Bol percentage binnen half jaar",
        "slug" : "bol_binnen_half_jaar",
        "mapping": [
            [
                {
                    "label": "Doorlooptijd afgehandeld dossiers",
                    "column": "mediaan_doorlooptijd",
                    "colour": "orange"
                }
            ]
        ],
        "config": {
            "graphType": "CijfersLine",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : "",
            "padding": {
                "top": 20,
                "bottom": 40,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 90,
                "bottom": 160,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "units": "dagen",
                "header": "Doorlooptijd afgehandeld dossiers"
            }
        },
        "description" : "Dit is bij benadering het aantal dagen waarin de schademelding is afgehandeld sinds de schademelding is binnengekomen. Het gaat daarbij om de mediaan. Vijftig procent van de schademeldingen is daarmee in minder dan het genoemde aantal dagen afgehandeld en vijftig procent in meer dagen. De mediaan wordt berekend over de laatset 2.500 besluiten over schademeldingen.",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-graph-container-bol']
    },
    {
        "label" : "Bol percentage binnen half jaar",
        "slug" : "bol_binnen_half_jaar",
        "mapping": [
            [
                {
                    "label": "Verwachte doorlooptijd nieuw dossier",
                    "column": "verwacht_aantal_dagen_tussen_melding_en_besluit",
                    "colour": "blue"
                }
            ]
        ],
        "config": {
            "graphType": "CijfersLine",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : "",
            "padding": {
                "top": 20,
                "bottom": 40,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 90,
                "bottom": 160,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "units": "dagen",
                "header": "Verwachte doorlooptijd nieuw dossier"
            }
        },
        "description" : "Voor nieuwe, reguliere schademeldingen streeft het IMG naar een maximale doorlooptijd van indiening tot besluit van een half jaar (182 dagen). We berekenen op basis van de huidige voortgang hoeveel dagen het op dit moment bij benadering duurt om een nieuwe schademelding af te handelen. Onder meer de huidige capaciteit van bijvoorbeeld schade-opnames, het opleveren van adviesrapporten en het voorbereiden van besluiten wordt daarbij meegewogen.",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-graph-container-bol']
    },
    {   "label": "Voortgang",
        'slug': 'stacked_area_in_behandeling',
        'mapping': [
            [
                {
                    'label': 'Open meldingen CVW',
                    'column': 'schademeldingen_cvw',
                    'colour': 'lightBlue'
                },
                {
                    'label': 'Open meldingen voor Westerwijtwerd',
                    'column': 'schademeldingen_voor_westerwijtwerd',
                    'colour': 'moss'
                },
                {
                    'label': 'Open meldingen na Westerwijtwerd',
                    'column': 'schademeldingen_na_westerwijtwerd',
                    'colour': 'orange'
                }
            ]
        ],
        'config': {
            'graphType': 'StackedArea',
            'xScaleType': 'time',
            'yScaleType': 'linear',
            'xParameter': '_date',
            'yParameter': 'MELDING_NA_WESTERWIJTWERD',
            'padding': {
                'top': 20,
                'bottom': 80,
                'left': 60,
                'right': 30
            },
            'margin': {
                'top': 60,
                'bottom': 150,
                'left': 0,
                'right': 0
            },
            'extra': {
                'xScaleTicks': 'timeMonth',
                'header': 'Openstaande schademeldingen Westerwijtwerd'
            }
        },
        "description" : "Het aantal schademeldingen dat nog in behandeling is voor de beving van Westerwijtwerd van mei 2019 en van na die beving. Bij de start van de TCMG op 19 maart 2018 kwamen ook ruim 13.000 openstaande schademeldingen binnen van het Centrum Veilig Wonen (CVW) dat voor de NAM de schadeafhandeling verzorgde. De schademeldingen die daarvan nog openstaan, worden hier ook getoond.",
        'endpoint': 'meldingen',
        'segment': 'all',
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-grap-container-medium-high','img-graph-container-vertical-padding']
    },
    {

        "label": "Status naar doorlooptijd",
        "slug": "ballenbak_status",
        "mapping": [[

            {
                "label": 'Minder dan een half jaar',
                "column" : 'minder_dan_half_jaar_in_fase_ontvangst',
                "colour" : "lightBlue",
                "group" : 'Ontvangst en analyse'
            },
            {
                "label": 'Tussen een half jaar en jaar',
                "column" : 'tussen_half_jaar_en_jaar_in_fase_ontvangst',
                "colour" : "orange",
                "group" : 'Ontvangst en analyse'
            },
            {
                "label": 'Tussen een jaar en twee jaar',
                "column" : 'tussen_jaar_en_twee_jaar_in_fase_ontvangst',
                "colour" : "moss",
                "group" : 'Ontvangst en analyse'
            },
            {
                "label": 'Langer dan twee jaar',
                "column" : 'langer_dan_twee_jaar_in_fase_ontvangst',
                "colour" : "brown",
                "group" : 'Ontvangst en analyse'
            },
            {
                "label": 'Minder dan een half jaar',
                "column" : 'minder_dan_half_jaar_in_fase_planning_opname',
                "colour" : "lightBlue",
                "group" : 'Schade-opname wordt ingepland'
            },
            {
                "label": 'Tussen een half jaar en jaar',
                "column" : 'tussen_half_jaar_in_fase_planning_opname',
                "colour" : "orange",
                "group" : 'Schade-opname wordt ingepland'
            },
            {
                "label": 'Tussen een jaar en twee jaar',
                "column" : 'tussen_jaar_en_twee_jaar_in_fase_planning_opname',
                "colour" : "moss",
                "group" : 'Schade-opname wordt ingepland'
            },
            {
                "label": 'Langer dan twee jaar',
                "column" : 'langer_dan_twee_jaar_in_fase_planning_opname',
                "colour" : "brown",
                "group" : 'Schade-opname wordt ingepland'
            },
            {
                "label": 'Minder dan een half jaar',
                "column" : 'minder_dan_half_jaar_in_fase_opleveren_schaderapport',
                "colour" : "lightBlue",
                "group" : 'Schade-opname uitgevoerd, adviesrapport opleveren'
            },
            {
                "label": 'Tussen een half jaar en jaar',
                "column" : 'tussen_half_jaar_in_fase_opleveren_schaderapport',
                "colour" : "orange",
                "group" : 'Schade-opname uitgevoerd, adviesrapport opleveren'
            },
            {
                "label": 'Tussen een jaar en twee jaar',
                "column" : 'tussen_jaar_en_twee_jaar_in_fase_opleveren_schaderapport',
                "colour" : "moss",
                "group" : 'Schade-opname uitgevoerd, adviesrapport opleveren'
            },
            {
                "label": 'Langer dan twee jaar',
                "column" : 'langer_dan_twee_jaar_in_fase_opleveren_schaderapport',
                "colour" : "brown",
                "group" : 'Schade-opname uitgevoerd, adviesrapport opleveren'
            },
            {
                "label": 'Minder dan een half jaar',
                "column" : 'minder_dan_half_jaar_in_fase_voorbereiding_besluit',
                "colour" : "lightBlue",
                "group" : 'Adviesrapport opgeleverd, besluit voorbereiden'
            },
            {
                "label": 'Tussen een half jaar en jaar',
                "column" : 'tussen_half_jaar_in_fase_voorbereiding_besluit',
                "colour" : "orange",
                "group" : 'Adviesrapport opgeleverd, besluit voorbereiden'
            },
            {
                "label": 'Tussen een jaar en twee jaar',
                "column" : 'tussen_jaar_en_twee_jaar_in_fase_voorbereiding_besluit',
                "colour" : "moss",
                "group" : 'Adviesrapport opgeleverd, besluit voorbereiden'
            },
            {
                "label": 'Langer dan twee jaar',
                "column" : 'langer_dan_twee_jaar_in_fase_voorbereiding_besluit',
                "colour" : "brown",
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
                "top": 20,
                "bottom": 0,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 0,
                "bottom": 160,
                "left": 0,
                "right": 0
            },
            "extra": {
                "header" : "Status en doorlooptijd",
                "paddingInner" : 1,
                "paddingOuter" : 1,
                "minRadius" : 4,
                "radiusOffset" : 1.8,
                "radiusFactor": 1.25
            }
        },
        "description" : "Het aantal openstaande schademeldingen is hier onderverdeeld naar vier leeftijdscategorieën, gerekend vanaf de datum van indiening. Per leeftijdscategorie zijn deze openstaande schademeldingen weer onderverdeeld naar waar ze op dit moment in de procedure zijn. De aantallen worden in absolute getallen weergegeven en in percentage van het totaal binnen de leeftijdscategorie.",
        "endpoint": "voortgang",
        "segment": "all",
        "publishDate": false,
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-graph-ballenbak']
    },
    {
        "label" : "Genormaliseerde barren met status",
        "slug" : "normalised_status",
        "mapping": [
            [
                {
                    "label": 'Ontvangst',
                    "column" : 'langer_dan_twee_jaar_in_fase_ontvangst',
                    "colour" : "moss",
                    "group" : 'Langer dan twee jaar'
                },
                {
                    "label": 'Planning opname',
                    "column" : 'langer_dan_twee_jaar_in_fase_planning_opname',
                    "colour" : "lightBlue",
                    "group" : 'Langer dan twee jaar'
                },
                {
                    "label": 'Opleveren schaderapport',
                    "column" : 'langer_dan_twee_jaar_in_fase_opleveren_schaderapport',
                    "colour" : "blue",
                    "group" : 'Langer dan twee jaar'
                },
                {
                    "label": 'Voorbereiden commissie',
                    "column" : 'langer_dan_twee_jaar_in_fase_voorbereiding_besluit',
                    "colour" : "purple",
                    "group" : 'Langer dan twee jaar'
                }
            ],
            [
                {
                    "label": 'Ontvangst',
                    "column" : 'tussen_jaar_en_twee_jaar_in_fase_ontvangst',
                    "colour" : "moss",
                    "group" : 'Tussen een en twee jaar'
                },
                {
                    "label": 'Planning opname',
                    "column" : 'tussen_jaar_en_twee_jaar_in_fase_planning_opname',
                    "colour" : "lightBlue",
                    "group" : 'Tussen een en twee jaar'
                },
                {
                    "label": 'Opleveren schaderapport',
                    "column" : 'tussen_jaar_en_twee_jaar_in_fase_opleveren_schaderapport',
                    "colour" : "blue",
                    "group" : 'Tussen een en twee jaar'
                },
                {
                    "label": 'Voorbereiden commissie',
                    "column" : 'tussen_jaar_en_twee_jaar_in_fase_voorbereiding_besluit',
                    "colour" : "purple",
                    "group" : 'Tussen een en twee jaar'
                }
            ],
            [
                {
                    "label": 'Ontvangst',
                    "column" : 'tussen_half_jaar_en_jaar_in_fase_ontvangst',
                    "colour" : "moss",
                    "group" : 'Tussen half jaar en een jaar'
                },
                {
                    "label": 'Planning opname',
                    "column" : 'tussen_half_jaar_in_fase_planning_opname',
                    "colour" : "LightBlue",
                    "group" : 'Tussen half jaar en een jaar'
                },
                {
                    "label": 'Opleveren schaderapport',
                    "column" : 'tussen_half_jaar_in_fase_opleveren_schaderapport',
                    "colour" : "blue",
                    "group" : 'Tussen half jaar en een jaar'
                },
                {
                    "label": 'Voorbereiden commissie',
                    "column" : 'tussen_half_jaar_in_fase_voorbereiding_besluit',
                    "colour" : "purple",
                    "group" : 'Tussen half jaar en een jaar'
                }
            ],
            [
                {
                    "label": 'Ontvangst',
                    "column" : 'minder_dan_half_jaar_in_fase_ontvangst',
                    "colour" : "moss",
                    "group" : 'Minder dan een half jaar'
                },
                {
                    "label": 'Planning opname',
                    "column" : 'minder_dan_half_jaar_in_fase_planning_opname',
                    "colour" : "lightBlue",
                    "group" : 'Minder dan een half jaar'
                },
                {
                    "label": 'Opleveren schaderapport',
                    "column" : 'minder_dan_half_jaar_in_fase_opleveren_schaderapport',
                    "colour" : "blue",
                    "group" : 'Minder dan een half jaar'
                },
                {
                    "label": 'Voorbereiden commissie',
                    "column" : 'minder_dan_half_jaar_in_fase_voorbereiding_besluit',
                    "colour" : "purple",
                    "group" : 'Minder dan een half jaar'
                }
            ]

                
            
        ],
        "config": {
            "graphType": "NormalisedBars",
            "xScaleType": "normalised",
            "yScaleType": "band",
            "xParameter": "",
            "yParameter": "status",
            "padding": {
                "top": 0,
                "bottom": 60,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 0,
                "bottom": 160,
                "left": 0,
                "right": 0
            },
            "extra": {
                "paddingInner" : .5,
                "paddingOuter" : .5,
                "header" : "Status per doorlooptijd",
                "legend" : true
            }
        },
        "description" : "Het aantal openstaande schademeldingen is hier onderverdeeld naar vier leeftijdscategorieën, gerekend vanaf de datum van indiening. Per leeftijdscategorie zijn deze openstaande schademeldingen weer onderverdeeld naar waar ze op dit moment in de procedure zijn. De aantallen worden in absolute getallen weergegeven en in percentage van het totaal binnen de leeftijdscategorie.",
        "endpoint": "voortgang",
        "segment": "all",
        "elementClasslist" : ['img-graph-container','img-graph-container-12'],
        "publishDate": false
    },
    {   
        "label": "Schade opnames",
    "slug": "meldingen_trend_aos_meldingen",
    "mapping": [
        [
            {
                "label": "Schade opnames",
                "column": "nieuw_schade_opnames",
                "colour": "blue"
            }
        ]
    ],
        "config": {
        "graphType": "TrendLine",
            "xScaleType": "time",
            "yScaleType": "linear",
            "xParameter": "_date",
            "yParameter": "nieuw_schade_opnames",
            "padding": {
            "top": 20,
                "bottom": 40,
                "left": 40,
                "right": 0
        },
        "margin": {
            "top": 120,
                "bottom": 40,
                "left": 0,
                "right": 0
        },
        "extra": {
            "xScaleTicks": "quarterly",
                "useLineFill": true,
                "largeHeader" : false,
                "header" : "Trend schade-opnames",
                "link": "de voortgang",
                "legend": true,
        }
    },
        "description" : "Het aantal schade-opnames dat voor de gewone schadeprocedure is uitgevoerd vergeleken met het aantal nulmetingen die in het kader van de Stuwmeerregeling zijn uitgevoerd. Bij een schade-opname wordt ook een schadecalculatie gemaakt. Bij de nulmeting wordt alleen de schade vastgelegd en in het kader van de Stuwmeerregeling met een vooraf vastgestelde schadevergoeding afgehandeld. In een klein aantal gevallen gebeurt dat op basis van facturen van een aannemer.",
        "endpoint": "opnames",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-trendline','img-graph-container-vertical-padding']
    }

]

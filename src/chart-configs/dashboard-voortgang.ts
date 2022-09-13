import { GraphObject} from '../types/graphObject';
import { IGraphMapping } from '../types/mapping';

export const dashboardVoortgang : (GraphObject|IGraphMapping)[] = [

    {
        "slug" : "cijfer_schademedlingen_totaal",
        "graph" : "Cijfer",
        "parameters": [
            [
                {
                    "label": "Schademeldingen totaal",
                    "column": "schademeldingen",
                    "colour": "orange",
                    "units": "meldingen"
                }
            ]
        ],
        "header": "Schademeldingen totaal",
        "description" : "",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4']
    },
    {
        "slug" : "cijfer_schademeldingen_totaal",
        "graph" : "Cijfer",
        "parameters": [
            [
                {
                    "label": "Totaal openstaande aanvragen",
                    "column": "in_behandeling",
                    "colour": "blue",
                    "units": "meldingen"
                }
            ]
        ],
        "header": "Totaal openstaande aanvragen",
        "description" : "",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4']
    },
    {
        "slug" : "cijfer_schademeldingen_totaal",
        "graph": "Cijfer",
        "parameters": [
            [
                {
                    "label": "Afgehandeld totaal",
                    "column": "afgehandeld",
                    "colour": "moss",
                    "units": "meldingen"
                }
            ]
        ],
        "header": "Afgehandeld totaal",
        "description" : "",
        "endpoint": "voortgang",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4']
    },
    {
        "slug" : "trend_aanvragen_en_besluiten",
        "graph": "Horizon2Y",
        "parameters": [
            [
                {
                    "label": "Schademeldingen",
                    "column": "nieuw_schademeldingen",
                    "short": "aanvragen",
                    "colour": "yellow"
                },
                {
                    "label": "Afgehandeld",
                    "column": "nieuw_afgehandeld",
                    "short": "besluiten",
                    "colour": "lightBlue"
                },
                {
                    "label": "Vaste vergoeding aanvragen",
                    "column": "vaste_vergoeding_nieuwe_meldingen",
                    "short": "ves aanvragen",
                    "colour": "orange"
                },
                {
                    "label": "Vaste vergoeding besluiten",
                    "column": "vaste_vergoeding_nieuw_afgehandeld",
                    "short": "ves besluiten",
                    "colour": "blue"
                },

            ],
            [
                {
                    "label": "Totaal in behandeling",
                    "column": "in_behandeling",
                    "short": "in beh",
                    "colour": "black"
                } 
            ]
        ],
        "header" : "Ontwikkeling hoeveelheid aanvragen in behandeling",
        "description" : "",
        "endpoint": "voortgang",
        "segment": "all",
        "publishDate": null,
        "elementClasslist": ['img-graph-container','img-graph-container-12']
    },
    {
        "slug": "stacked_area_doorlooptijden",
        "graph": "TrendBarsStacked",
        "parameters": [
            [
                {
                    "label": '2 jaar en ouder',
                    "column": 'langer_dan_twee_jaar_in_procedure',
                    "colour": "blue",
                    "short": "> 2 jaar"
                },
                {
                    "label": '1-2 jaar oud',
                    "column": 'tussen_jaar_en_twee_jaar_in_procedure',
                    "colour": "orange",
                    "short": "1 t/m 2 jaar"
                },
                {
                    "label": '0,5-1 jaar oud',
                    "column": 'tussen_half_jaar_en_jaar_in_procedure',
                    "colour": "moss",
                    "short": "1/2 t/m 1 jaar"
                },
                {
                    "label": '0,5 jaar oud',
                    "column": 'minder_dan_half_jaar_in_procedure',
                    "colour": "lightBlue",
                    "short": "< 1/2 jaar"
                }
            ]
        ],
        "header": "Aantal openstaand sinds indiening",
        "description" : "Het aantal openstaande schademeldingen onderverdeeld in de leeftijd van die melding sinds de indiening ervan. De grafiek toont de ontwikkeling door de tijd heen. Aangezien het IMG ernaar streeft dat reguliere schademeldingen binnen een half jaar zijn afgehandeld, zou dit verreweg de grootste groep moeten zijn van het totaal aantal openstaande schademeldingen op dit moment.",
        "endpoint": "voortgang",
        "segment": "all",
        "publishDate": null,
        "elementClasslist": ['img-graph-container','img-graph-container-12']
    },
    {
        "slug" : "bol_binnen_half_jaar",
        "graph" : "CijfersLine",
        "parameters": [
            [
                {
                    "label": "In half jaar afgehandeld",
                    "column": "percentage_binnen_half_jaar",
                    "colour": "moss"
                }
            ]
        ],
        "header": "In half jaar afgehandeld",
        "description" : "Het percentage schademeldingen dat in minder dan een half jaar tijd sinds de binnenkomst van een schademelding is afgehandeld. Het IMG streeft ernaar alle reguliere schademeldingen binnen een half jaar (182 dagen) af te handelen. Het percentage wordt berekend over de laatste 2.500 besluiten over schademeldingen. Het vertoont daarmee een voortschrijdend gemiddelde. Gem. tijd tot besluit: Doorlooptijd afgehandeld dossiers",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4']
    },
    {
        "slug" : "bol_binnen_half_jaar",
        "graph": "CijfersLine",
        "parameters": [
            [
                {
                    "label": "Doorlooptijd afgehandeld dossiers",
                    "column": "mediaan_doorlooptijd",
                    "colour": "orange"
                }
            ]
        ],
        "header": "Doorlooptijd afgehandeld dossiers",
        "description" : "Dit is bij benadering het aantal dagen waarin de schademelding is afgehandeld sinds de schademelding is binnengekomen. Het gaat daarbij om de mediaan. Vijftig procent van de schademeldingen is daarmee in minder dan het genoemde aantal dagen afgehandeld en vijftig procent in meer dagen. De mediaan wordt berekend over de laatset 2.500 besluiten over schademeldingen.",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4']
    },
    {
        "slug" : "bol_binnen_half_jaar",
        "graph": "CijfersLine",
        "parameters": [
            [
                {
                    "label": "Verwachte doorlooptijd nieuw dossier",
                    "column": "verwacht_aantal_dagen_tussen_melding_en_besluit",
                    "colour": "blue",
                    "units": "dagen"
                }
            ]
        ],
        "header": "Verwachte doorlooptijd nieuw dossier",
        "description" : "Voor nieuwe, reguliere schademeldingen streeft het IMG naar een maximale doorlooptijd van indiening tot besluit van een half jaar (182 dagen). We berekenen op basis van de huidige voortgang hoeveel dagen het op dit moment bij benadering duurt om een nieuwe schademelding af te handelen. Onder meer de huidige capaciteit van bijvoorbeeld schade-opnames, het opleveren van adviesrapporten en het voorbereiden van besluiten wordt daarbij meegewogen.",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4']
    },
    {   
        'slug': 'stacked_area_in_behandeling',
        'graph': 'TrendBarsStacked',
        'parameters': [
            [
                {
                    'label': 'Open meldingen CVW',
                    'column': 'schademeldingen_cvw',
                    'colour': 'lightBlue',
                    "short" : "CVW"
                },
                {
                    'label': 'Open meldingen voor Westerwijtwerd',
                    'column': 'schademeldingen_voor_westerwijtwerd',
                    'colour': 'moss',
                    "short" : "voor WWW"
                },
                {
                    'label': 'Open meldingen na Westerwijtwerd',
                    'column': 'schademeldingen_na_westerwijtwerd',
                    'colour': 'orange',
                    "short" : "na WWW"
                }
            ]
        ],
        'header': 'Openstaande schademeldingen Westerwijtwerd',
        "description" : "Het aantal schademeldingen dat nog in behandeling is voor de beving van Westerwijtwerd van mei 2019 en van na die beving. Bij de start van de TCMG op 19 maart 2018 kwamen ook ruim 13.000 openstaande schademeldingen binnen van het Centrum Veilig Wonen (CVW) dat voor de NAM de schadeafhandeling verzorgde. De schademeldingen die daarvan nog openstaan, worden hier ook getoond.",
        'endpoint': 'meldingen',
        'segment': 'all',
        "elementClasslist": ['img-graph-container','img-graph-container-12']
    },
    {
        "slug": "ballenbak_status",
        "graph": "Ballenbak",
        "parameters": [[

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
        "header" : "Status en doorlooptijd",
        "description" : "Het aantal openstaande schademeldingen is hier onderverdeeld naar vier leeftijdscategorieën, gerekend vanaf de datum van indiening. Per leeftijdscategorie zijn deze openstaande schademeldingen weer onderverdeeld naar waar ze op dit moment in de procedure zijn. De aantallen worden in absolute getallen weergegeven en in percentage van het totaal binnen de leeftijdscategorie.",
        "endpoint": "voortgang",
        "segment": "all",
        "publishDate": null,
        "elementClasslist": ['img-graph-container','img-graph-container-12']
    },
    {
        "slug" : "normalised_status",
        "graph": "NormalisedBars",
        "parameters": [
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
        "header" : "Status per doorlooptijd",
        "description" : "Het aantal openstaande schademeldingen is hier onderverdeeld naar vier leeftijdscategorieën, gerekend vanaf de datum van indiening. Per leeftijdscategorie zijn deze openstaande schademeldingen weer onderverdeeld naar waar ze op dit moment in de procedure zijn. De aantallen worden in absolute getallen weergegeven en in percentage van het totaal binnen de leeftijdscategorie.",
        "endpoint": "voortgang",
        "segment": "all",
        "elementClasslist" : ['img-graph-container','img-graph-container-12'],
        "publishDate": null
    },
    {   

        "slug": "meldingen_trend_aos_meldingen",
        "graph": "TrendBars",
        "parameters": [
            [
                {
                    "label": "Schade opnames",
                    "column": "nieuw_schade_opnames",
                    "colour": "blue",
                    "short": "opnames"
                }
            ]
        ],
    "header" : "Trend schade-opnames",
    "description" : "Het aantal schade-opnames dat voor de gewone schadeprocedure is uitgevoerd vergeleken met het aantal nulmetingen die in het kader van de Stuwmeerregeling zijn uitgevoerd. Bij een schade-opname wordt ook een schadecalculatie gemaakt. Bij de nulmeting wordt alleen de schade vastgelegd en in het kader van de Stuwmeerregeling met een vooraf vastgestelde schadevergoeding afgehandeld. In een klein aantal gevallen gebeurt dat op basis van facturen van een aannemer.",
    "endpoint": "opnames",
    "segment": "all",
    "elementClasslist": ['img-graph-container','img-graph-container-6']
}

]

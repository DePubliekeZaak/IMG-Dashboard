import { GraphObject} from '../@local/d3_types';

export const doorlooptijden : GraphObject = {

    "label": "Flow doorlooptijden",
    "slug": "flow_doorlooptijden",
    "mapping": [[

    {
        "label" : "Nieuwe meldingen",
        "column" : "nieuw_schademeldingen",
        "outflow" : 959, // "nieuw_schademeldingen",
        "duration" : "",
        "colour": "moss"
    },
    {
        "label" : "Ontvangst & Analyse",
        "column" : "in_fase_ontvangst",
        "outflow" : 831, // "instroom_fase_ontvangst_analyse",
        "duration" : "",
        "colour": "lightBlue"
    },
    {
        "label" : "Planning schade-opname",
        "column" : "in_fase_planning_opname",
        "outflow" : 714, // "instroom_fase_ingepland_voor_opname",
        "duration" : "",
        "colour": "blue"
    },
    {
        "label" : "Ingepland voor opname",
        "column" : "in_fase_ingepland_voor_opname",
        "outflow" : 739, // "instroom_fase_opleveren_rapport_bewoner",
        "duration" : "",
        "colour": "violet"
    },
    {
        "label" : "Opleveren rapport",
        "column" : "in_fase_opleveren_rapport_bewoner",
        "outflow" : 669, // "instroom_fase_rapport_bij_bewoner",
        "duration" : "",
        "colour": "purple"
    },
    {
        "label" : "Rapport bij bewoner",
        "column" : "in_fase_rapport_bij_bewoner",
        "outflow" : 440, // "instroom_fase_voorbereiden_besluit",
        "duration" : "",
        "colour": "brown"
    },
    {
        "label" : "Voorbereiden besluit",
        "column" : "in_fase_voorbereiden_besluit",
        "outflow" : 265, // "uitstroom_fase_voorbereiden_besluit",
        "duration" : "",
        "colour": "orange"
    },
    {
        "label" : "Afgerond",
        "column" : "nieuw_afgehandeld",
        "outflow" : "",
        "duration" : "",
        "colour": "yellow"
    }
]
],
    "config": {
    "graphType": "FlowDossierCount",
        "xScaleType": "linear",
        "yScaleType": false,
        "xParameter": "cumulativeDuration",
        "yParameter": "label",
        "padding": {
        "top": 30,
            "bottom": 0, // = ruimte onder ballen
            "left": 0,
            "right": 0
    },
    "margin": {
        "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0
    },
    "extra": {
        'radiusFactor': .4,
            'minRadius': 20,
            "header": "Voortgang per procedurestap",
            "paddingInner" : .5,
            "paddingOuter" : .5
    }
},
    "description" : "Een schademelding doorloopt een aantal stappen in de procedure voor afhandeling. Zolang er wekelijks ongeveer net zoveel schademeldingen naar een volgende stap in de procedure gaan als er nieuw binnenkomen, dan is de de capaciteit van de totale schadeafhandeling op niveau. De grafiek toont dus de mate waarin er voortgang is in het totaal van schademeldingen die in behandeling zijn. ",
    "endpoint": "productie",
    "segment": "all",
    "elementClasslist": ['img-graph-container','img-graph-container-12','img-graph-container-flow']
}

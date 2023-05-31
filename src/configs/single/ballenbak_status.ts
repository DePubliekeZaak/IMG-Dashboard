import { GraphObject} from '@local/d3_types';

export const ballenbakStatus : GraphObject = {

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
            "column" : 'tussen_half_jaar_en_jaar_in_fase_opleveren_schaderapport',
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
            "column" : 'tussen_half_jaar_en_jaar_in_fase_voorbereiding_besluit',
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
            "bottom": 40,
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
            "header" : "Status naar doorlooptijd",
            "paddingInner" : 1,
            "paddingOuter" : 1,
            "minRadius" : 4,
            "radiusOffset" : 1.8,
            "radiusFactor": 1.25
        }
    },
    "description" : "",
    "endpoint": "voortgang",
    "segment": "all",
    "publishDate": false
};

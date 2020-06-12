import { GraphObject} from '../types/graphObject';

export const ballenbakStatus : GraphObject = {

    "label": "Status naar doorlooptijd",
    "slug": "ballenbak_status",
    "mapping": [[

            {
                "label": 'Minder dan een half jaar',
                "column" : 'MNDER_HALF_JAAR_ONTVANGST',
                "colour" : "yellow",
                "group" : 'Ontvangst en analyse'
            },
            {
                "label": 'Tussen een half jaar en jaar',
                "column" : 'HALF_JAAR_1JAAR_ONTVANGST',
                "colour" : "green",
                "group" : 'Ontvangst en analyse'
            },
            {
                "label": 'Tussen een jaar en twee jaar',
                "column" : 'TUSSEN_1_2_JAAR_ONTVANGST',
                "colour" : "brown",
                "group" : 'Ontvangst en analyse'
            },
            {
                "label": 'Langer dan twee jaar',
                "column" : 'LANGER_2_JAAR_ONTVANGST',
                "colour" : "blue",
                "group" : 'Ontvangst en analyse'
            },
            {
                "label": 'Minder dan een half jaar',
                "column" : 'MINDER_HALF_JAAR_PLANNING',
                "colour" : "yellow",
                "group" : 'Schade-opname wordt ingepland'
            },
            {
                "label": 'Tussen een half jaar en jaar',
                "column" : 'HALF_JAAR_1JAAR_PLANNING_OPNAME',
                "colour" : "green",
                "group" : 'Schade-opname wordt ingepland'
            },
            {
                "label": 'Tussen een jaar en twee jaar',
                "column" : 'TUSSEN_1_2_JAAR_PLANNING_OPNAME',
                "colour" : "brown",
                "group" : 'Schade-opname wordt ingepland'
            },
            {
                "label": 'Langer dan twee jaar',
                "column" : 'LANGER_2_JAAR_PLANNING_OPNAME',
                "colour" : "blue",
                "group" : 'Schade-opname wordt ingepland'
            },
            {
                "label": 'Minder dan een half jaar',
                "column" : 'MINDER_HALF_JAAR_OPLEV_SCHRAP',
                "colour" : "yellow",
                "group" : 'Schade-opname uitgevoerd, adviesrapport opleveren'
            },
            {
                "label": 'Tussen een half jaar en jaar',
                "column" : 'HALF_JAAR_1JAAR_OPLEV_SCHRAP',
                "colour" : "green",
                "group" : 'Schade-opname uitgevoerd, adviesrapport opleveren'
            },
            {
                "label": 'Tussen een jaar en twee jaar',
                "column" : 'TUSSEN_1_2_JAAR_OPLEV_SCHRAP',
                "colour" : "brown",
                "group" : 'Schade-opname uitgevoerd, adviesrapport opleveren'
            },
            {
                "label": 'Langer dan twee jaar',
                "column" : 'LANGER_2_JAAR_OPLEV_SCHRAP',
                "colour" : "blue",
                "group" : 'Schade-opname uitgevoerd, adviesrapport opleveren'
            },
            {
                "label": 'Minder dan een half jaar',
                "column" : 'MINDER_HALF_JAAR_VOORBER_',
                "colour" : "yellow",
                "group" : 'Adviesrapport opgeleverd, besluit voorbereiden'
            },
            {
                "label": 'Tussen een half jaar en jaar',
                "column" : 'HALF_JAAR_1JAAR_VOORBER_CIE',
                "colour" : "green",
                "group" : 'Adviesrapport opgeleverd, besluit voorbereiden'
            },
            {
                "label": 'Tussen een jaar en twee jaar',
                "column" : 'TUSSEN_1_2_JAAR_VOORBER_CIE',
                "colour" : "brown",
                "group" : 'Adviesrapport opgeleverd, besluit voorbereiden'
            },
            {
                "label": 'Langer dan twee jaar',
                "column" : 'LANGER_2_JAAR_VOORBER_CIE',
                "colour" : "blue",
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
    "endpoint": "/api/data",
    "segment": "all",
    "publishDate": false
};

/*

,
            {
                "label": 'Minder dan een half jaar',
                "column" : 'MINDER_HALF_JAAR_STATUS_STUW',
                "colour" : "red",
                "group" : 'Stuwmeerregeling'
            },
            {
                "label": 'Tussen een half jaar en jaar',
                "column" : 'HALF_JAAR_1JAAR_STATUS_STUW',
                "colour" : "green",
                "group" : 'Stuwmeerregeling'
            },
            {
                "label": 'Tussen een jaar en twee jaar',
                "column" : 'TUSSEN_1_2_JAAR_STATUS_STUW',
                "colour" : "blue",
                "group" : 'Stuwmeerregeling'
            },
            {
                "label": 'Langer dan twee jaar',
                "column" : 'LANGER_2_JAAR_STATUS_STUW',
                "colour" : "purple",
                "group" : 'Stuwmeerregeling'
            }
 */
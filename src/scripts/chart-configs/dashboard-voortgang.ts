import { GraphObject} from '../types/graphObject';

export const dashboardVoortgang : GraphObject[] = [

    {
        "label": "Doorlooptijd afhandeling schademeldingen",
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
                "bottom": 100,
                "left": 60,
                "right": 30
            },
            "margin": {
                "top": 60,
                "bottom": 45,
                "left": 0,
                "right": 0
            },
            "extra": {
                "xScaleTicks": "timeMonth",
                "header": "Doorlooptijd afhandeling schademeldingen"
            }
        },
        "description" : "",
        "endpoint": "https://img.publikaan.nl/open-data/api/voortgang",
        "segment": "all",
        "publishDate": false,
        "elementClasslist": ['img-graph-container','img-graph-container-12','img-graph-container-trendline','img-graph-container-vertical-padding']
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
                "bottom": 80,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 90,
                "bottom": 120,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "units": "%"
            }
        },
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus in ligula ac tempus. In tempor nisi quam, a volutpat arcu tincidunt nec. Fusce blandit neque vitae quam facilisis viverra. Nulla dapibus justo et pellentesque egestas. In ut justo diam. Pellentesque efficitur arcu magna, vel volutpat eros porta eget. Maecenas eu lorem in lacus congue porta. Vestibulum vel leo ut neque pellentesque posuere sed ut enim.",
        "endpoint": "https://img.publikaan.nl/open-data/api/meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-grap-container-bol']
    },
    {
        "label" : "Bol percentage binnen half jaar",
        "slug" : "bol_binnen_half_jaar",
        "mapping": [
            [
                {
                    "label": "Gem. tijd tot besluit",
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
                "bottom": 80,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 90,
                "bottom": 120,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "units": "%"
            }
        },
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus in ligula ac tempus. In tempor nisi quam, a volutpat arcu tincidunt nec. Fusce blandit neque vitae quam facilisis viverra. Nulla dapibus justo et pellentesque egestas. In ut justo diam. Pellentesque efficitur arcu magna, vel volutpat eros porta eget. Maecenas eu lorem in lacus congue porta. Vestibulum vel leo ut neque pellentesque posuere sed ut enim.",
        "endpoint": "https://img.publikaan.nl/open-data/api/meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-grap-container-bol']
    },
    {
        "label" : "Bol percentage binnen half jaar",
        "slug" : "bol_binnen_half_jaar",
        "mapping": [
            [
                {
                    "label": "Verwachte tijd melding tot besluit",
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
                "bottom": 80,
                "left": 0,
                "right": 0
            },
            "margin": {
                "top": 90,
                "bottom": 120,
                "left": 10,
                "right": 10
            },
            "extra": {
                "useLineFill": true,
                "units": "dagen"
            }
        },
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus in ligula ac tempus. In tempor nisi quam, a volutpat arcu tincidunt nec. Fusce blandit neque vitae quam facilisis viverra. Nulla dapibus justo et pellentesque egestas. In ut justo diam. Pellentesque efficitur arcu magna, vel volutpat eros porta eget. Maecenas eu lorem in lacus congue porta. Vestibulum vel leo ut neque pellentesque posuere sed ut enim.",
        "endpoint": "https://img.publikaan.nl/open-data/api/meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4','img-grap-container-bol']
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
        "endpoint": "https://img.publikaan.nl/open-data/api/voortgang",
        "segment": "all",
        "publishDate": false,
        "elementClasslist": ['img-graph-container','img-graph-container-12']
    }

]
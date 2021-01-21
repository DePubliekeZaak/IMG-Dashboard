import { GraphObject} from '../types/graphObject';

export const dashboardOpnames : GraphObject[] = [
    {   "label": "Schade opnames",
    "slug": "meldingen_trend_aos_meldingen",
    "mapping": [
        [
            {
                "label": "Schade opnames",
                "column": "nieuw_schade_opnames",
                "colour": "blue"
            },
            {
                "label": "Nulmetingen",
                "column": "nieuw_nulmetingen",
                "colour": "orange"
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
            "xScaleTicks": "timeMonth",
                "useLineFill": true,
                "largeHeader" : false,
                "header" : "Trend schade-opnames vs. nulmetingen",
                "link": "de voortgang",
                "legend": true,
        }
    },
        "description" : "Het aantal schade-opnames dat voor de gewone schadeprocedure is uitgevoerd vergeleken met het aantal nulmetingen die in het kader van de Stuwmeerregeling zijn uitgevoerd. Bij een schade-opname wordt ook een schadecalculatie gemaakt. Bij de nulmeting wordt alleen de schade vastgelegd en in het kader van de Stuwmeerregeling met een vooraf vastgestelde schadevergoeding afgehandeld. In een klein aantal gevallen gebeurt dat op basis van facturen van een aannemer.",
        "endpoint": "https://img.publikaan.nl/open-data/api/opnames",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-trendline','img-graph-container-vertical-padding']
    },
    {
    "label": "Taart opnames",
    "slug": "meldingen_taart_opnames",
    "mapping":  [[
        [
            {
                "label": "Regulier",
                "column": "schadeopnames_regulier",
                "colour": "gray"
            },
            {
                "label": "Aannemersvariant",
                "column": "schadeopnames_via_aannemersvariant",
                "colour": "orange"
            },
            {
                "label": "Wooncorporaties",
                "column": "schadeopnames_door_wooncorporaties",
                "colour": "blue"
            },
            {
                "label": "Digitaal",
                "column": "schadeopnames_digitaal",
                "colour": "brown"
            },
            {
                "label": "Schade-opnemers",
                "column": "schadeopnames_via_opnemersvariant",
                "colour": "moss"
            }
        ],
        [
            {
                "label": "Totaal",
                "column": false,
                "colour": false
            }

        ]
    ]],
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
            "header" : "Opnamevarianten totaal"
    }
    },
        "description" : "De schade-opname is een belangrijk onderdeel van de procedure van schade aan gebouwen en objecten. Er volgt daarna een advies van een onafhankelijke deskundige. Omdat deskundigen schaars zijn, worden ook anderen ingezet om de schade-opname te doen, op basis waarvan een deskundige daarna een advies uitbrengt. De deskundige gaat dan niet zelf ter plekke, wat tijd bespaart.",
        "endpoint": "https://img.publikaan.nl/open-data/api/opnames",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-6','img-graph-container-vertical-padding']
    }
]

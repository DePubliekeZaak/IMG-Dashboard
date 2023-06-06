import { GraphObject} from '../types/graphObject';
import { IGraphMapping } from '../types/mapping';

const pad = 40;
const margin = 180;

export const dashboardImmaterieleSchade : (GraphObject|IGraphMapping)[] | [] = [

    {
        "slug" : "ims_uitgekeerd",
        "graph": "TotalPlus",
        "parameters": [
            [
                {
                    "label": "Totaal uitgekeerd",
                    "column": "immateriele_schade_totaal_verleend",
                    "colour": "black"
                }
            ]
        ],
        "header": "Totaal toegekend",
        "description" : "Het totaal uitgekeerde bedrag",
        "endpoint": "immateriele_schade",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3']
    },
    {

        "slug" : "combi_aanvragen",
        "graph": "Cijfer",
        "parameters": [
            [
                {
                    "label": "Totaal",
                    "column": "immateriele_schade_aanvragen",
                    "colour": "orange"
                }
            ]
        ],
        "header": "Aanvragen",
        "description" : "Het aantal nieuwe schademeldingen dat afgelopen week is binnengekomen.",
        "endpoint": "immateriele_schade",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3']
    },
    {
        "slug" : "combi_adressen",
        "graph": "Cijfer",
        "parameters": [
            [
                {
                    "label": "Totaal",
                    "column": "immateriele_schade_unieke_adressen",
                    "colour": "blue"
                }
            ]
        ],
        "header": "Unieke adressen",
        "description" : "Het aantal nieuwe schademeldingen dat afgelopen week is binnengekomen.",
        "endpoint": "immateriele_schade",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-3']
    },
    {
        "slug" : "combi_besluiten",
        "graph": "Cijfer",
        "parameters": [
            [
                {
                    "label": "Totaal",
                    "column": "immateriele_schade_besluiten",
                    "colour": "moss"
                }
            ]
        ],
        "header": "Besluiten",
        "description" : "Het aantal nieuwe schademeldingen dat afgelopen week is binnengekomen.",
        "endpoint": "immateriele_schade",
        "segment": "all",
        "segmentIndicator": null,
        "publishDate": null,
        "elementClasslist": ['img-graph-container','img-graph-container-3']
    },
    {
        "slug" : "trend_aanvragen_en_besluiten",
        "parameters": [
            [
                {
                    "label": "Aanvragen",
                    "column": "immateriele_schade_nieuw_aanvragen",
                    "short": "aanvragen",
                    "colour": "orange"
                },
                {
                    "label": "Besluiten",
                    "column": "immateriele_schade_nieuw_besluiten",
                    "short": "besluiten",
                    "colour": "blue"
                }
            ],
            [
                {
                    "label": "aanvragen in behandeling",
                    "column": "immateriele_schade_in_behandeling",
                    "short": "in beh",
                    "colour": "black"
                } 
            ]
        ],
        "graph": "Horizon",
        "header" : "Ontwikkeling hoeveelheid aanvragen in behandeling",
        "description" : "",
        "endpoint": "immateriele_schade",
        "segment": "all",
        "segmentIndicator": null,
        "publishDate": null,
        "elementClasslist": ['img-graph-container','img-graph-container-12']
    },
    {
        "slug" : "trend_aanvragen_en_besluiten",
        "graph" : "StackedBars",
        "parameters": [
            [
                {
                    "label": "Afgewezen",
                    "column": "immateriele_schade_nieuw_afgewezen",
                    "short": "afgewezen",
                    "colour": "orange",
                    "scale" : null
                },
                {
                    "label": "Toegewezen",
                    "column": "immateriele_schade_nieuw_toegewezen",
                    "short": "toegewezen",
                    "colour": "moss",
                    "scale" : null
                }
            ],
            [
                {
                    "label": "Cummulatief percentage toegewezen",
                    "column": "immateriele_schade_besluiten",
                    "short": "%",
                    "colour": "black",
                    "scale" : null
                }
            ],
            [
                {
                    "label": "Besluiten",
                    "column": "immateriele_schade_nieuw_besluiten",
                    "short": "besluiten",
                    "colour": "orange",
                    "scale": "y"
                }
            ]
        ],
        "header": "Trend in de verhouding toegewezen en afgewezen besluiten",    
        "description" : "",
        "endpoint": "immateriele_schade",
        "segment": "all",
        "publishDate": null,
        "elementClasslist": ['img-graph-container','img-graph-container-12']
    },
    {
        "slug": "taart_schadevergoeding_totaal",
        "graph" : "PieChartSumV2",
        "parameters":  [
            [
                {
                    "label": "Toegewezen",
                    "column": "immateriele_schade_toegewezen",
                    "colour": "moss",
                    "scale" : null
                },
                {
                    "label": "Afgewezen",
                    "column": "immateriele_schade_afgewezen",
                    "colour": "orange",
                    "scale" : "null"
                },
            ],
            [
                {
                    "label": "Totaal",
                    "column": "waardedalingsregeling_totaal_verleend",
                    "colour": "gray",
                    "scale" : "null"
                }
            ]
        ],
        "header" : "Besluiten",
        "segmentIndicator": null,
        "description" : "",
        "endpoint": "immateriele_schade",
        "publishDate": null,
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4']
    },
    {
        "slug": "immateriele_schade_bezwaren",
        "graph": "PieChartSumV2",
        "parameters":  [
            [
                {
                    "label": "Beschikte bezwaren",
                    "column": "immateriele_schade_bezwaren_beschikt",
                    "colour": "moss"
                },
                {
                    "label": "Ingetrokken bezwaren",
                    "column": "immateriele_schade_bezwaren_ingetrokken",
                    "colour": "blue"
                },
                {
                    "label": "Openstaande bezwaren",
                    "column": "immateriele_schade_bezwaren_openstaand",
                    "colour": "orange"
                }
            ],
            [     
                {
                    "label": "Ingediende bezwaren",
                    "column": "immateriele_schade_bezwaren_ingediend",
                    "colour": "orange"
                }
            ]
        ],
        "header" : "Bezwaren",
        "description" : "",
        "endpoint": "waardedaling",
        "segment": 'all',
        "elementClasslist": ['img-graph-container','img-graph-container-4']
    },
    {

        "slug" : "ims_bezwaarpercentage",
        "graph": "Cijfer",
        "parameters": [
            [
                {
                    "label": "Totaal",
                    "column": "immateriele_schade_bezwaarpercentage",
                    "colour": "orange",
                    "format": "decimal",
                    "units": "%"

                }
            ]
        ],
        "header": "Bezwaarpercentage",
        "description" : "Het percentage aanvragen waarbij een bezwaar is ingediend",
        "endpoint": "immateriele_schade",
        "segment": "all",
        "elementClasslist": ['img-graph-container','img-graph-container-4']
    }
]
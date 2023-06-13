"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weekFs = void 0;
exports.weekFs = [
    {
        "slug": "bol_schademeldingen",
        "graph": "CijfersLine",
        "args": [],
        "parameters": [
            [
                {
                    "label": "Nieuw binnen vorige week",
                    "column": "nieuw_schademeldingen",
                    "colour": "blue",
                    "units": "meldingen"
                },
                {
                    "label": "Schade-meldingen",
                    "column": "schademeldingen",
                    "colour": "blue"
                }
            ]
        ],
        "header": "Nieuw binnen vorige week",
        "description": "Het aantal nieuwe schademeldingen dat afgelopen week is binnengekomen.",
        "endpoint": "meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container', 'img-graph-container-4']
    },
];

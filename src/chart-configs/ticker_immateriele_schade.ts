import { GraphObject} from '../types/graphObject';

export const tickerImmaterieel : GraphObject[] = [
    {
        "label" : "Bol aanvragen",
        "slug" : "bol_aanvragen",
        "mapping": [
            [
                {
                    "label": "Vorige week: nieuw",
                    "column": "immateriele_schade_nieuw_aanvragen",
                    "colour": "blue"
                }
            ]
        ],
        "config": {
            "graphType": "Ticker",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : "",
            "padding": {
                "top": 0,
                "bottom": 0,
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
                "useLineFill": true,
                "noDots": true,
                "smartColours" : 'down',
                "thinLines" : true,
                "units": "aanvragen"
            }
        },
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus in ligula ac tempus. In tempor nisi quam, a volutpat arcu tincidunt nec. Fusce blandit neque vitae quam facilisis viverra. Nulla dapibus justo et pellentesque egestas. In ut justo diam. Pellentesque efficitur arcu magna, vel volutpat eros porta eget. Maecenas eu lorem in lacus congue porta. Vestibulum vel leo ut neque pellentesque posuere sed ut enim.",
        "endpoint": "immateriele_schade",
        "segment": "all",
        "elementClasslist": ['img-graph-container','column']
    },
    {
        "label" : "Bol aanvragers",
        "slug" : "bol_aanvragers",
        "mapping": [
            [
                {
                    "label": "Vorige week: nieuw",
                    "column": "immateriele_schade_nieuw_besluiten",
                    "colour": "blue"
                }
            ]
        ],
        "config": {
            "graphType": "Ticker",
            "xScaleType" : "time",
            "yScaleType" : "linear",
            "xParameter" : "_date",
            "yParameter" : "",
            "padding": {
                "top": 0,
                "bottom": 0,
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
                "useLineFill": true,
                "noDots": true,
                "smartColours" : 'down',
                "thinLines" : true,
                "units": "besluiten",
                "link": "meldingen",
            }
        },
        "description" : "",
        "endpoint": "immateriele_schade",
        "segment": "all",
        "elementClasslist": ['img-graph-container','column']
    }
]

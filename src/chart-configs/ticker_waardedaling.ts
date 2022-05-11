import { GraphObject} from '../types/graphObject';

export const tickerWaardedaling : GraphObject[] = [
    {
        "label" : "Bol aanvragen",
        "slug" : "bol_aanvragen",
        "mapping": [
            [
                {
                    "label": "Vorige week: nieuw",
                    "column": "nieuw_aanvragen",
                    "colour": "moss"
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
        "endpoint": "waardedaling",
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
                    "column": "nieuw_besluiten",
                    "colour": "orange"
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
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus in ligula ac tempus. In tempor nisi quam, a volutpat arcu tincidunt nec. Fusce blandit neque vitae quam facilisis viverra. Nulla dapibus justo et pellentesque egestas. In ut justo diam. Pellentesque efficitur arcu magna, vel volutpat eros porta eget. Maecenas eu lorem in lacus congue porta. Vestibulum vel leo ut neque pellentesque posuere sed ut enim.",
        "endpoint": "waardedaling",
        "segment": "all",
        "elementClasslist": ['img-graph-container','column']
    }
]

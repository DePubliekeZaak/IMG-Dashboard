import { GraphObject} from '../types/graphObject';

export const ticker : GraphObject[] = [
    {
        "label" : "Bol schademeldingen",
        "slug" : "bol_schademeldingen",
        "mapping": [
            [
                {
                    "label": "Vorige week: nieuw",
                    "column": "nieuw_schademeldingen",
                    "colour": "red"
                },
                {
                    "label": "Schade-meldingen",
                    "column": "gem_MELDING",
                    "colour": "red"
                },
                {
                    "label": "Schade-meldingen",
                    "column": "schademeldingen",
                    "colour": "red"
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
                "units": "meldingen",
                "link": "meldingen",
            }
        },
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus in ligula ac tempus. In tempor nisi quam, a volutpat arcu tincidunt nec. Fusce blandit neque vitae quam facilisis viverra. Nulla dapibus justo et pellentesque egestas. In ut justo diam. Pellentesque efficitur arcu magna, vel volutpat eros porta eget. Maecenas eu lorem in lacus congue porta. Vestibulum vel leo ut neque pellentesque posuere sed ut enim.",
        "endpoint": "https://img.publikaan.nl/open-data/api/meldingen",
        "segment": "all",
        "elementClasslist": ['img-graph-container','column','is-3']
    },
    {
        "label" : "Bol afgehandelde meldingen",
        "slug" : "bol_afgehandelde_meldingen",
        "mapping": [
            [
                {
                    "label": "Vorige week: afgehandeld",
                    "column": "nieuw_afgehandeld",
                    "colour": "blue"
                },
                {
                    "label": "Afgehandelde schade-meldingen",
                    "column": "gem_afgehandeld",
                    "colour": "blue"
                },
                {
                    "label": "Afgehandelde schade-meldingen",
                    "column": "afgehandeld",
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
                "units": "meldingen"
                // "units": "afgehandeld"
            }
        },
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus in ligula ac tempus. In tempor nisi quam, a volutpat arcu tincidunt nec. Fusce blandit neque vitae quam facilisis viverra. Nulla dapibus justo et pellentesque egestas. In ut justo diam. Pellentesque efficitur arcu magna, vel volutpat eros porta eget. Maecenas eu lorem in lacus congue porta. Vestibulum vel leo ut neque pellentesque posuere sed ut enim.",
        "endpoint": "https://img.publikaan.nl/open-data/api/voortgang",
        "segment": "all",
        "elementClasslist": ['img-graph-container','column','is-3']

    },
    {
        "label" : "Bol percentage binnen half jaar",
        "slug" : "bol_binnen_half_jaar",
        "mapping": [
            [
                {
                    "label": "In half jaar afgehandeld",
                    "column": "percentage_binnen_half_jaar",
                    "colour": "green"
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
                "units": "%",
                "noDots": true,
                "notNull": true
            }
        },
        "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus in ligula ac tempus. In tempor nisi quam, a volutpat arcu tincidunt nec. Fusce blandit neque vitae quam facilisis viverra. Nulla dapibus justo et pellentesque egestas. In ut justo diam. Pellentesque efficitur arcu magna, vel volutpat eros porta eget. Maecenas eu lorem in lacus congue porta. Vestibulum vel leo ut neque pellentesque posuere sed ut enim.",
        "endpoint": "https://img.publikaan.nl/open-data/api/voortgang",
        "segment": "all",
        "elementClasslist": ['img-graph-container','column','is-3']
    },
    {
        "label" : "Bol gerealiseerde doorlooptijd",
        "slug" : "bol_doorlooptijd",
        "mapping": [
            [
                {
                    "label": "Gem. tijd tot besluit",
                    "column": "mediaan_doorlooptijd",
                    "colour": "purple"
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
                "units": "dagen",
                "noDots": true,
                "notNull": true
            }
        },
        "description" : "In de paarse bol is te zien hoe lang het duurt voor een schademelding voor een gewoon woonhuis (regulier dossier) is afgehandeld. Het gaat om het verschil in kalenderdagen van schademelding tot besluit. De lijngrafiek onder de bollen toont de ontwikkeling over de afgelopen acht week. Op de stippellijn is te zien wat het gemiddelde is geweest in die periode. Het gaat hier om een getal bij benadering (de mediaan), berekend over de laatste duizend besluiten. Het is daarmee ook een voortschrijdend cijfer. Het betekent dat bij de laatste duizend besluiten vijftig procent van de dossiers meer doorlooptijd in dagen hadden en 50 procent minder doorlooptijd tot het besluit. De mediaan is voor dit onderwerp een realistische getal dan het gemiddelde dat soms extreem wordt beïnvloed door slechts enkele zeer positieve of zeer negatieve dossiers waar het gaat om de doorlooptijd. ",
        "endpoint": "https://img.publikaan.nl/open-data/api/voortgang",
        "segment": "all",
        "elementClasslist": ['img-graph-container','column','is-3']
    }
]
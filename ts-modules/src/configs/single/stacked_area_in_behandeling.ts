import { GraphObject} from '@local/d3_types';

export const stackedAreaInBehandeling : GraphObject = {
    'label': 'Historie van schademeldingen in behandeling',
    'slug': 'stacked_area_in_behandeling',
    'mapping': [
        [
            {
                'label': 'Open meldingen CVW',
                'column': 'MELDING_CVW',
                'colour': 'blue'
            },
            {
                'label': 'Open meldingen voor Westerwijtwerd',
                'column': 'MELDING_VOOR_WESTERWIJTWE',
                'colour': 'green'
            },
            {
                'label': 'Open meldingen na Westerwijtwerd',
                'column': 'MELDING_NA_WESTERWIJTWERD',
                'colour': 'yellow'
            }
        ]
    ],
    'config': {
        'graphType': 'StackedArea',
        'xScaleType': 'time',
        'yScaleType': 'linear',
        'xParameter': '_date',
        'yParameter': 'MELDING_NA_WESTERWIJTWERD',
        'padding': {
            'top': 20,
            'bottom': 40,
            'left': 60,
            'right': 30
        },
        'margin': {
            'top': 60,
            'bottom': 15,
            'left': 0,
            'right': 0
        },
        'extra': {
            'xScaleTicks': 'timeMonth',
            'header': 'Voortgang afhandeling schademeldingen'
        }
    },
    "description" : "",
    'endpoint': '/api/data',
    'segment': 'all',
    'publishDate': false
};

// {
//     label: 'Afgehandeld totaal',
//     column: 'AFGEHANDELD_TOTAAL',
//     colour: green
// },
// {
//     label: 'In behandeling (totaal)',
//     column: 'WERKVOORRAAD_IN_BEHANDELING',
//     colour: orange
// },
const dataMapping = {


    'cijfer-nieuwe-meldingen': [

        {
            label: 'Schade-meldingen',
            column: 'nieuwe_schademeldingen',
            colour: red
        },
        {
            label: 'Schade-meldingen',
            column: 'gem_MELDING',
            colour: red
        }
    ],

    'cijfer-nieuwe-opnames': [

        {
            label: 'Schade-opnames',
            column: 'nieuwe_schadeopnames',
            colour: blue
        },
        {
            label: 'Schade-opnames',
            column: 'gem_OPNAMES',
            colour: blue
        }
    ],

    'cijfer-nieuwe-besluiten': [

        {
            label: 'Besluiten',
            column: 'nieuwe_besluiten_regulier',
            colour: green
        },
        {
            label: 'Besluiten',
            column: 'gem_BESCHIKT',
            colour: green
        }
    ],

    'cijfer-nieuwe-afgehandeld': [

        {
            label: 'Afgehandelde schade-meldingen',
            column: 'nieuwe_afgehandeld',
            colour: purple
        },
        {
            label: 'Afgehandelde schade-meldingen',
            column: 'gem_AFGEHANDELD_TOTAAL',
            colour: purple
        }
    ]
};

const config = {

    xScaleType : 'linear',
    yScaleType : 'time',
    xParameter : '',
    yParameter : '_date',
    useLineFill : true,
    showValues : true
};

let endpoint = '/api/data';
let newSegment = 'all';

let url = 'https://tcmg-hub.publikaan.nl' + endpoint + '?gemeente=' + newSegment;

d3.json(url, function(error, data) {

    if (error) {
        console.log(error);
        throw error;
    }

    for (var i = 0; i < Object.values(dataMapping).length; i++) {

        let map = {};
        map[Object.entries(dataMapping)[i][0]] = Object.entries(dataMapping)[i][1];

        let cijfersLine = new CijfersLineWithoutData(data, '.graph_container:nth-of-type(' + (i + 1) + ')', config, Object.values(map)[0], 'all')
        cijfersLine.init();
    }
});
const dataMapping = [

        {
            label: 'Schade-meldingen',
            column: 'nieuwe_schademeldingen',
            colour: green
        }
    ];

const config = {

    xScaleType : 'time',
    yScaleType : 'linear',
    xParameter : '_date',
    yParameter : 'nieuwe_schademeldingen',
    unites : 'weken'

};

let cijfersLine = new CijfersLine('/api/data','.graph_container', config, dataMapping, 'all', false)
cijfersLine.init();
/* kip */

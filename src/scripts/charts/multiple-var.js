

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
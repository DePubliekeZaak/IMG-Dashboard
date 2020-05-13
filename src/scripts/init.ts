
import { imgGraph } from './data-call';

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == 200) {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}


function selector(graphs) {

    let mainElement = document.querySelector('main');
    let dropdown = document.createElement('select');
    dropdown.classList.add('graph_select');


    for ( let graph of graphs) {

        let option = document.createElement('option');
        option.label = graph.label;
        option.value = graph.value;
        dropdown.appendChild(option);
    }

    mainElement.appendChild(dropdown);


    dropdown.addEventListener("change", function () {
        initGraph(dropdown.options[dropdown.selectedIndex].value, graphs);
    });

}

function initGraph(graphSlug,graphs) {

    let graphOptionObject = graphs.find( g => g.value === graphSlug)['data'];

    document.querySelector('.graph_row').innerHTML = '';

    for (let graph of graphOptionObject.mapping) {
        let container = document.createElement('div');
        container.classList.add('graph_container');
        document.querySelector('.graph_row').appendChild(container);
    }

    new imgGraph(graphOptionObject);
}

readTextFile("https://graphs.publikaan.nl/graph-selector/json/img_single_graphs.json", function(config){

    selector(JSON.parse(config));
});










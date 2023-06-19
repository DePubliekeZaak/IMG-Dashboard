import '../../ts-modules/styling/main.scss'

import 'babel-polyfill';
import 'isomorphic-fetch';

import { InitWeek } from "./week/week.controller";
// import { InitTicker } from "./ticker.controller";
// import { InitSingle} from "./single.controller";
// import DataStore  from "../data.store"

export class InitGraph {

    constructor(){
        this.init(); 
    }

    init() {

        // @ts-ignore
        if (ENV == "prod") {
            this.addStylesheets();
        }

        const graphElements = [].slice.call(document.querySelectorAll("[data-img-graph-preset]"));

        for (let el of graphElements) {

            const graph = el.getAttribute('data-img-graph-preset');

            switch (graph) {

                case 'week' :

                    this.week();

                    break;

                case 'dashboard' :

                    this.dashboard();

                    break;

                // case 'ticker' :

                //     this.ticker();

                //     break;

                // default :

                //     this.single();

            }
        }
    }

    // single() {
    //     const single = new InitSingle();
    //     single.init();
    // }

    dashboard() {
        // const dashboard = new InitDashboard();
        // dashboard.init();
    }

    week() {
        const week = new InitWeek();
        week.init();
    }

    // ticker() {

    //     const ticker = new InitTicker();
    //     ticker.init();
    // }

    addStylesheets() {

        const head  = document.getElementsByTagName('head')[0];
        const link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        // @ts-ignore
        link.href = DOMAIN + '/graphs/styles/main.css'; //; //  ; //  graphObject
        link.media = 'all';
        head.appendChild(link);
    }
}

new InitGraph();


window.addEventListener('graph_ready', function (e) {
    new InitGraph();
}, false);


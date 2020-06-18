import { InitDashboard } from "./dashboard";
import { InitSingle} from "./single";
import {configs} from "./chart-configs/module";

export class InitGraph {

    constructor(){

        document.querySelector("[data-img-graph-preset='dashboard']") ? this.dashboard() : this.single();

        this.addStylesheets()
    }

    single() {

        const single = new InitSingle();
        single.init();
    }

    dashboard() {
        const dashboard = new InitDashboard();
        dashboard.init();
    }

    addStylesheets() {

        const head  = document.getElementsByTagName('head')[0];
        const link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://graphs.publikaan.nl/graph-selector/main.css';
        link.media = 'all';
        head.appendChild(link);
    }
}

new InitGraph();
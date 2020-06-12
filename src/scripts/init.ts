import { InitDashboard } from "./dashboard";
import { InitSingle} from "./single";

export class InitGraph {

    constructor(){

        (document.getElementsByTagName('main')[0].id === 'dashboard') ? this.dashboard() : this.single();
    }

    single() {

        const single = new InitSingle();
        single.init();
    }

    dashboard() {

        const dashboard = new InitDashboard();
        dashboard.init();
    }
}

new InitGraph();
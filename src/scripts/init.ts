import { InitDashboard } from "./dashboard";
import { InitSingle} from "./single";

export class InitGraph {

    constructor(){

        document.getElementById('img-dashboard') ? this.dashboard() : this.single();

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
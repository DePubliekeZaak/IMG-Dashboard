import {dashboardMeldingen} from "../chart-configs/dashboard-meldingen";
import {dashboardVoortgang} from "../chart-configs/dashboard-voortgang";
import {dashboardVergoedingen} from "../chart-configs/dashboard-vergoedingen";
import {dashboardSpecials} from "../chart-configs/dashboard-specials";
import {dashboardReacties} from "../chart-configs/dashboard-reacties";
import {dashboardOpnames} from "../chart-configs/dashboard-opnames";
import {dashboardWaardedalingsRegeling} from "../chart-configs/dashboard-waardedalingsregeling";
import {dashboardImmaterieleSchade} from "../chart-configs/dashboard-immateriele-schade";
import {dashboardTrillingssnelheden} from "../chart-configs/dashboard-trillingssnelheden";
import {dashboardOverzicht} from "../chart-configs/dashboard-overzicht";
import {dashboardMain} from "../chart-configs/dashboard";
import {dashboardHome} from "../chart-configs/module";
import {munis} from "../d3-services/municipalities";
import { dashboardGemeente } from "../chart-configs/dashboard-gemeente";

export default class DashboardParams {

    constructor() {

    }

    matchConfig(topic) {

        switch (topic) {

            case 'meldingen' :

                return dashboardMeldingen;

            case 'voortgang' :

                return dashboardVoortgang;

            case 'vergoedingen' :

                return dashboardVergoedingen;

            case 'specials' :

                return dashboardSpecials;

            case 'reacties' :

                return dashboardReacties;

            case 'opnames' :

                return dashboardOpnames;

            case 'waardedaling' :

                return dashboardWaardedalingsRegeling;

            case 'trillingssnelheden' :

                return dashboardTrillingssnelheden;

            case 'overzicht' :

                return dashboardOverzicht;

            case 'immateriele_schade' :

                return dashboardImmaterieleSchade;

            case 'gemeente' :

                return dashboardGemeente;

            case 'home' :

                return dashboardHome;

            default :

                return dashboardMain;
        }
    }

    read() {

        const params : any = this._getParams(window.location.href);
        let segment = 'all';
        // segment
        if (params.gemeente && params.gemeente !== undefined) {
            // check if is known gemeente

            if ( munis.map ( m => m.value ).indexOf(params.gemeente) > -1 ) {
                segment = params.gemeente;
            } else {
                console.log('gemeente onbekend');
            }
        }

        return { params, segment };
    }

    _getParams(url) {
        let params = {};
        const parser = document.createElement('a');
        parser.href = url;
        const query = parser.search.substring(1);
        const vars = query.split('&');
        for (let i = 0; i < vars.length; i++) {
            const pair = vars[i].split('=');
            params[pair[0]] = decodeURIComponent(pair[1]);
        }
        return params;
    };




}

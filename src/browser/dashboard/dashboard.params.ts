import {
    dashboardMeldingen,
    dashboardVoortgang,
    dashboardVergoedingen,
    dashboardSpecials,
    dashboardReacties,
    dashboardOpnames,
    dashboardWaardedalingsRegeling,
    dashboardImmaterieleSchade,
    dashboardTrillingssnelheden,
    dashboardMms,
    dashboardOverzicht,
    dashboardMain,
    dashboardHome,
    dashboardGemeente
} from "@local/configs";

import {munis} from "../../d3-services/municipalities";

export default class DashboardParams {

    constructor() {

    }

    matchConfig(topic) {

        switch (topic) {

            case 'fysieke_schade' :

                return dashboardMain;

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

            case 'mms' :

                return dashboardMms;

            case 'overzicht' :

                return dashboardOverzicht;

            case 'immateriele_schade' :

                return dashboardImmaterieleSchade;

            case 'gemeente' :

                return dashboardGemeente;

            case 'home' :

                return dashboardHome;

            default :

                return dashboardHome;
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

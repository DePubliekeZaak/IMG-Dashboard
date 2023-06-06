
export { tickerFysiekeSchade } from './ticker/ticker_fysieke_schade';
export { tickerWaardedaling } from './ticker/ticker_waardedaling';
export { tickerTevredenheid } from './ticker/ticker_tevredenheidscijfers';
export { tickerImmaterieel } from "./ticker/ticker_immateriele_schade";


export { dashboardHome } from './dashboard/dashboard-home';
export { dashboardMain } from './dashboard/dashboard';
export { dashboardMeldingen } from './dashboard/dashboard-meldingen';
export { dashboardMms } from './dashboard/dashboard-mms';
export { dashboardVergoedingen } from './dashboard/dashboard-vergoedingen';
export { dashboardVoortgang } from './dashboard/dashboard-voortgang';
export { dashboardSpecials} from './dashboard/dashboard-specials';
export { dashboardReacties } from './dashboard/dashboard-reacties';
export { dashboardOpnames } from './dashboard/dashboard-opnames';
export { dashboardWaardedalingsRegeling} from "./dashboard/dashboard-waardedalingsregeling";
export { dashboardImmaterieleSchade} from "./dashboard/dashboard-immateriele-schade";
export { dashboardTrillingssnelheden} from "./dashboard/dashboard-trillingssnelheden";
export { dashboardOverzicht } from "./dashboard/dashboard-overzicht";
export { dashboardGemeente} from "./dashboard/dashboard-gemeente";

export { weekFs } from "./week/fs"

import { staafSchademeldingen } from './single/staaf_schademeldingen';
import { staafSchadeopnames } from './single/staaf_schade-opnames';
import { multistaafBesluitenAfgehandeld } from './single/multistaaf_besluiten_afgehandeld';

import { taartBezwaren } from './single/taart_bezwaren';
import { taartSchadevergoedingen } from './single/taart_schadevergoedingen';
import { taartSpecials } from './single/taart_specials';
import { taartOpnames } from './single/taart_opnames';

import { kaartSchademeldingen } from './single/kaart_schademeldingen';
import { bollen } from './single/bollen';
import { trendInBehandeling } from './single/trend_inbehandeling';
import { ballenbakStatus } from './single/ballenbak_status';
import { stackedAreaDoorlooptijden } from './single/stacked_area_doorlooptijden';
import { stackedAreaInBehandeling } from './single/stacked_area_in_behandeling';
import { doorlooptijden } from './single/doorlooptijden';
import { normalisedStatusVsDoorlooptijd } from './single/normalised_status_doorlooptijd';

import { bollenProcedureDuur } from './single/procedureduur';
import { trendSchademeldingen } from './single/trend_schademeldingen';
import { trendAanvragenWaardedaling } from './single/trend_aanvragen_waardedaling';



export const configs = [

    staafSchademeldingen,
    staafSchadeopnames,
    multistaafBesluitenAfgehandeld,
    taartBezwaren,
    taartSchadevergoedingen,
    taartSpecials,
    taartOpnames,
    kaartSchademeldingen,
    bollen,
    trendInBehandeling,
    ballenbakStatus,
    stackedAreaDoorlooptijden,
    stackedAreaInBehandeling,
    normalisedStatusVsDoorlooptijd,
    doorlooptijden,
    bollenProcedureDuur,
    trendSchademeldingen,
    trendAanvragenWaardedaling

]
import { staafSchademeldingen } from './staaf_schademeldingen';
import { staafSchadeopnames } from './staaf_schade-opnames';
import { multistaafBesluitenAfgehandeld } from './multistaaf_besluiten_afgehandeld';

import { taartBezwaren } from './taart_bezwaren';
import { taartSchadevergoedingen } from './taart_schadevergoedingen';
import { taartSpecials } from './taart_specials';
import { taartOpnames } from './taart_opnames';

import { kaartSchademeldingen } from './kaart_schademeldingen';
import { bollen } from './bollen';
import { trendInBehandeling } from './trend_inbehandeling';
import { ballenbakStatus } from './ballenbak_status';
import { stackedAreaDoorlooptijden } from './stacked_area_doorlooptijden';
import { stackedAreaInBehandeling } from './stacked_area_in_behandeling';
import { doorlooptijden } from './doorlooptijden';
import { normalisedStatusVsDoorlooptijd } from './normalised_status_doorlooptijd';

import { bollenProcedureDuur } from './procedureduur';
import { trendSchademeldingen } from './trend_schademeldingen';
import { trendAanvragenWaardedaling } from './trend_aanvragen_waardedaling';

import { tickerFysiekeSchade } from './ticker_fysieke_schade';
import { tickerWaardedaling } from './ticker_waardedaling';
import { tickerTevredenheid } from './ticker_tevredenheidscijfers';

import { dashboardMain } from './dashboard';
import { dashboardMeldingen } from './dashboard-meldingen';
import { dashboardVergoedingen } from './dashboard-vergoedingen';
import { dashboardVoortgang } from './dashboard-voortgang';
import { dashboardSpecials} from './dashboard-specials';
import { dashboardReacties } from './dashboard-reacties';
import { dashboardOpnames } from './dashboard-opnames';
import { dashboardWaardedalingsRegeling} from "./dashboard-waardedalingsregeling";


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

export { dashboardMain }
export { dashboardMeldingen }
export { dashboardVergoedingen }
export { dashboardVoortgang }
export { dashboardSpecials }
export { dashboardReacties }
export { dashboardOpnames }
export { dashboardWaardedalingsRegeling }

export { tickerFysiekeSchade }
export { tickerWaardedaling }
export { tickerTevredenheid }



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

import { ticker } from './ticker';

import { dashboardMain } from './dashboard';
import { dashboardMeldingen } from './dashboard-meldingen';
import { dashboardOpnames } from './dashboard-opnames';
import { dashboardSpecials} from './dashboard-specials';

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
    stackedAreaInBehandeling

]

export { dashboardMain }
export { dashboardMeldingen }
export { dashboardOpnames }
export { dashboardSpecials }

export { ticker}



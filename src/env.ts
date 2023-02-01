export const ENV = "dev"; // dev or prod
export const DOMAIN = "img.de-publieke-zaak.nl"; // "img.publikaan.nl"
// @ts-ignore
export const API_BASE = (ENV === "prod") ? 'https://' + DOMAIN + '/open-data/api/' : 'https://' + DOMAIN + '/open-data/staging/api/' ;

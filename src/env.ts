export const ENV = "dev"; // dev or prod
// @ts-ignore
export const API_BASE = (ENV === "prod") ? 'https://img.publikaan.nl/open-data/api/' : 'https://img.publikaan.nl/open-data/staging/api/' ;

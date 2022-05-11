
export const ENV = "dev"; // dev or prod
// @ts-ignore
export const API_BASE = (ENV === "dev") ? 'https://img.publikaan.nl/open-data/staging/api/' : 'https://img.publikaan.nl/open-data/api/' ;

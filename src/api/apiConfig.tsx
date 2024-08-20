export const API_BASE_URL = "https://api.getharvest.app/"
export const getApiURL = (endpoint: string) => API_BASE_URL + endpoint

//HOME PAGE APIS
export const GET_FUNDS_HISTORY = getApiURL('funds/all');
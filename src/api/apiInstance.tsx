import axios from "axios";
import { API_BASE_URL } from "./apiConfig";
import { store } from "../store/store";
import { decryptVale, encryptVal } from "../constants/encryption";

const apiInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*",
    },
});

apiInstance.interceptors.request.use(
    async (config) => {
        const state = store.getState();
        if (state?.userReducer?.userDetails) {
            const userToken = decryptVale(state?.userReducer?.userDetails);
            config.headers.Authorization = `${JSON.parse(userToken)?.access_token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiInstance
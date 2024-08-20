import axios from "axios";
import { API_BASE_URL } from "./apiConfig";

const apiInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*",
    },
});


export default apiInstance
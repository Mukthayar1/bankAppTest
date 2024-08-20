import apiInstance from "../apiInstance";

export const loginApi = async (body = {}) => {
    console.log('body===>', body);
    return await apiInstance.post("auth/login", body)
}


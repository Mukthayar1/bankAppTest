import apiInstance from "../apiInstance";

export const loginApi = async (body = {}) =>  await apiInstance.post("auth/login", body)


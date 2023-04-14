import { $api } from "./httpConnect";

export const login = async (email, password) => {

    try {
        const res = await $api.post("/authorization/login", { email, password });
        const data = await res.data;
        return data;
    } catch (error) {
        return error.message;
    }

}
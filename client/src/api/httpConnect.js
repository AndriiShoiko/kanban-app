import axios from "axios";
import { AuthService } from "../services/authService";
import { getTokenFromLocalStorage } from "../utils/workWithLocalStogage";

const API_URL = "http://localhost:5050/api/v1";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  validateStatus: (status) => {
    return (status >= 200 && status < 300) || status === 401;
  },
});

$api.interceptors.request.use((config) => {
  const token = getTokenFromLocalStorage();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

$api.interceptors.response.use(async (responseConfig) => {
  if (responseConfig.status === 401 && !responseConfig._isRetry) {
    responseConfig._isRetry = true;

    try {
      await AuthService.refresh();
      $api.request(responseConfig.config);
    } catch (error) {
      throw error;
    }
  } else if (responseConfig.status === 401 && responseConfig._isRetry) {
    throw new Error("401");
  }
  return responseConfig;
});

export { $api };

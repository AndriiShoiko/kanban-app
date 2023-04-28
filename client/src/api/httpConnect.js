import axios from "axios";
import { AuthService } from "../services/authService";
import { getTokenFromLocalStorage } from "../utils/workWithLocalStogage";

const API_URL = "http://localhost:5050/api/v1";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  const token = getTokenFromLocalStorage();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export { $api };

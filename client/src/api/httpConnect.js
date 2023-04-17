import axios from "axios";
import { useToken } from "../hooks/useToken";

export const API_URL = "http://localhost:5050/api/v1";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  const token = useToken();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export { $api };

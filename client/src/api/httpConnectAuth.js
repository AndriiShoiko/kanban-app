import axios from "axios";

const API_URL = "http://localhost:5050/api/v1";

export const $apiAuth = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

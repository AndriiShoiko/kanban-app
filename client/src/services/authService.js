import { $api } from "../api/httpConnect";
import { $apiAuth } from "../api/httpConnectAuth";
import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
} from "../utils/workWithLocalStogage";

export class AuthService {
  static async login(email, password) {
    const res = await $apiAuth.post("/auth/login", { email, password });
    const data = await res.data;

    return data;
  }

  static async registration(email, password) {
    const res = await $apiAuth.post("/auth/registration", {
      email,
      password,
    });
    const data = await res.data;

    return data;
  }

  static async logout() {
    const res = await $apiAuth.post("/auth/logout");
    const data = await res.data;

    return data;
  }

  static async refresh() {
    const res = await $apiAuth.get("/auth/refresh");
    const data = await res.data;
    setTokenToLocalStorage(data.accessToken);

    return data;
  }

  static async isAuth() {
    let accessToken = getTokenFromLocalStorage();
    if (!accessToken) {
      const res = await $apiAuth.get("/auth/refresh");
      const data = await res.data;
      setTokenToLocalStorage(data.accessToken);
    }

    accessToken = getTokenFromLocalStorage();

    const res = await $api.get(`/auth/isAuth/${accessToken}`);
    const data = await res.data;
    console.log(data);

    return data;
  }
}

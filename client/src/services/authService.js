import { $api } from "../api/httpConnect";

export class AuthService {
  static async login(email, password) {
    try {
      const res = await $api.post("/auth/login", { email, password });
      const data = await res.data;

      return data;
    } catch (error) {
      return error.message;
    }
  }

  static async registration(email, password) {
    try {
      const res = await $api.post("/auth/registration", { email, password });
      const data = await res.data;

      return data;
    } catch (error) {
      return error.message;
    }
  }

  static async logout() {
    try {
      const res = await $api.post("/auth/logout");
      const data = await res.data;

      return data;
    } catch (error) {
      return error.message;
    }
  }

  static async refresh() {
    try {
      const res = await $api.get("/auth/refresh");
      const data = await res.data;

      return data;
    } catch (error) {
      return error.message;
    }
  }
}

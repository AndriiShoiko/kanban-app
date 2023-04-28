import { $api } from "../api/httpConnect";
import { AuthService } from "./authService";

export class BoardsService {
  static async getBoards() {
    try {
      const res = await $api.get("/boards");
      return await res.data;
    } catch (error) {
      await AuthService.refresh();
      const res = await $api.get("/boards");
      return await res.data;
    }
  }
}

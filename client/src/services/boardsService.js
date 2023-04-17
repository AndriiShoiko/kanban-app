import { $api } from "../api/httpConnect";

export class BoardsService {
  static async getBoards() {
    try {
      const res = await $api.get("/boards");
      const data = await res.data;

      return data;
    } catch (error) {
      return error.message;
    }
  }
}

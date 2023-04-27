import { $api } from "../api/httpConnect";

export class BoardsService {
  static async getBoards() {
    const res = await $api.get("/boards");
    return await res.data;
  }
}

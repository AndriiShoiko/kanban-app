import { $api } from "../api/httpConnect";
import { AuthService } from "./authService";

export class BoardService {
  static async getBoard(ref) {
    try {
      const res = await $api.get(`/boards${ref}`);
      return await res.data;
    } catch (error) {
      await AuthService.refresh();
      const res = await $api.get(`/boards${ref}`);
      return await res.data;
    }
  }
  static async getBoardAndColumns(ref) {
    try {
      const res = await $api.get(`/boards/${ref}/columns`);
      return await res.data;
    } catch (error) {
      await AuthService.refresh();
      const res = await $api.get(`/boards/${ref}/columns`);
      return await res.data;
    }
  }
  static async getBoardColumnsAndTasks(ref) {
    try {
      const res = await $api.get(`/boards/${ref}/columns/tasks`);
      return await res.data;
    } catch (error) {
      await AuthService.refresh();
      const res = await $api.get(`/boards/${ref}/columns/tasks`);
      return await res.data;
    }
  }
}

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BoardService } from "../../services/boardService";

export const STATUS_LOADING = "loading";
export const STATUS_IDLE = "idle";

export const getBoardData = createAsyncThunk(
  "@@boardService/getBoardData",
  async (ref) => {
    const data = await BoardService.getBoardColumnsAndTasks(ref);
    return await data;
  }
);

const boardSlice = createSlice({
  name: "@@boardService",
  initialState: {
    entities: {},
    loading: STATUS_IDLE,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBoardData.fulfilled, (state, action) => {
        state.entities = action.payload?.data || {};
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = STATUS_LOADING;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state) => {
          state.entities = {};
          state.loading = STATUS_IDLE;
          state.error = "Error in board services";
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state) => {
          state.loading = STATUS_IDLE;
          state.error = null;
        }
      );
  },
});

export const getBoardSelector = (state) => {
  return state.board;
};

export const boardReducer = boardSlice.reducer;

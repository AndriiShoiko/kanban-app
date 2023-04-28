import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BoardsService } from "../../services/boardsService";

export const STATUS_LOADING = "loading";
export const STATUS_IDLE = "idle";

export const getBoards = createAsyncThunk(
  "@@boardsService/getBoards",
  async () => {
    const data = await BoardsService.getBoards();
    return await data;
  }
);

const authUserSlice = createSlice({
  name: "@@boardsService",
  initialState: {
    entities: [],
    loading: STATUS_IDLE,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBoards.fulfilled, (state, action) => {
        state.entities = action.payload?.data || [];
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
          state.entities = [];
          state.loading = STATUS_IDLE;
          state.error = "Error in boards services";
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

export const getBoardsSelector = (state) => {
  return state.boards;
};

export const boardsReducer = authUserSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../../services/authService";

export const STATUS_LOADING = "loading";
export const STATUS_IDLE = "idle";

export const login = createAsyncThunk(
  "@@authUser/login",
  async (email, password) => {
    return AuthService.login(email, password);
  }
);

export const registration = createAsyncThunk(
  "@@authUser/registration",
  async (email, password) => {
    return AuthService.registration(email, password);
  }
);

export const refresh = createAsyncThunk("@@authUser/refresh", async () => {
  return AuthService.refresh();
});

export const logout = createAsyncThunk("@@authUser/logout", async () => {
  return AuthService.logout();
});

const authUserSlice = createSlice({
  name: "@@authUser",
  initialState: {
    user: {
      userData: {},
      isAuth: false,
      token: "",
    },
    loading: STATUS_IDLE,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user.userData = action.payload.user;
        state.user.token = action.payload.accessToken;
        state.user.isAuth = true;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.user.userData = action.payload.user;
        state.user.token = action.payload.accessToken;
        state.user.isAuth = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.user.userData = action.payload.user;
        state.user.token = action.payload.accessToken;
        state.user.isAuth = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user.userData = {};
        state.user.token = "";
        state.user.isAuth = false;
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
          state.user.userData = {};
          state.user.token = "";
          state.user.isAuth = false;

          state.loading = STATUS_IDLE;
          state.error = "Error in auth services";
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

export const userIsAuthSelector = (state) => {
  return state.user?.isAuth || false;
};

export const tokenSelector = (state) => {
  return state.user?.token || "";
};

export const userSelector = (state) => {
  return state.user?.userData;
};

export const authUserReducer = authUserSlice.reducer;

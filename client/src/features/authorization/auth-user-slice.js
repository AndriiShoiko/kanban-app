import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../../services/authService";
import {
  deleteTokenToLocalStorage,
  setTokenToLocalStorage,
} from "../../utils/workWithLocalStogage";

export const STATUS_LOADING = "loading";
export const STATUS_IDLE = "idle";

export const login = createAsyncThunk("@@authUser/login", async (props) => {
  return AuthService.login(props.email, props.password);
});

export const registration = createAsyncThunk(
  "@@authUser/registration",
  async (props) => {
    return AuthService.registration(props.email, props.password);
  }
);

export const refresh = createAsyncThunk("@@authUser/refresh", async () => {
  return AuthService.refresh();
});

export const logout = createAsyncThunk("@@authUser/logout", async () => {
  return AuthService.logout();
});

export const isAuth = createAsyncThunk("@@authUser/isAuth", async () => {
  return AuthService.isAuth();
});

const authUserSlice = createSlice({
  name: "@@authUser",
  initialState: {
    user: {
      userData: {},
      isAuth: false,
    },
    loading: STATUS_IDLE,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user.userData = action.payload.user;
        state.user.isAuth = true;
        setTokenToLocalStorage(action.payload.accessToken);
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.user.userData = action.payload.user;
        state.user.isAuth = true;
        setTokenToLocalStorage(action.payload.accessToken);
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.user.userData = action.payload.user;
        state.user.isAuth = true;
        setTokenToLocalStorage(action.payload.accessToken);
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user.userData = {};
        state.user.isAuth = false;
        deleteTokenToLocalStorage();
      })
      .addCase(isAuth.fulfilled, (state, action) => {
        state.user.userData = { ...action.payload };
        state.user.isAuth = true;
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
          state.user.isAuth = false;
          deleteTokenToLocalStorage();

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
  return state?.authUser?.user?.isAuth || false;
};

export const userSelector = (state) => {
  return state.user?.userData;
};

export const authUserReducer = authUserSlice.reducer;

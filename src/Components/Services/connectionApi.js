import { createSlice } from "@reduxjs/toolkit";
import {
  registerThunk,
  loginThunk,
  currentUserThunk,
  logoutThunk,
} from "../../Redux/thunk";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  error: null,
  isLoading: false,
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  // reducers: {
  //   renameProp: (state, action) => {
  //     return {
  //       ...state,
  //       myProp: action.payload,
  //     };
  //   },
  // },

  extraReducers: {
    [registerThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [registerThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    },
    [registerThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [loginThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [loginThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    },
    [loginThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [currentUserThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [currentUserThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        user: action.payload,
      };
    },
    [currentUserThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isAuth: false,
      };
    },
    [logoutThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [logoutThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: { name: null, email: null },
        token: "",
        isAuth: false,
      };
    },
    [logoutThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        // isAuth: false,
      };
    },
  },
});
// export const { renameProp } = authSlice.actions;
export default authSlice.reducer;

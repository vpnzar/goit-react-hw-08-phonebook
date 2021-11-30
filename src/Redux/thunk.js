import { createAsyncThunk } from "@reduxjs/toolkit";
const BASE_USER_URL = `https://connections-api.herokuapp.com`;
const userRegister = "/users/signup";
const userLogin = "/users/login";
const userLogout = "/users/logout";
const userCurrent = "/users/current";

export const registerThunk = createAsyncThunk(
  "users/register",
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_USER_URL + userRegister, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(response);
      const data = await response.json();
      return data;
    } catch (err) {
      rejectWithValue({ error: err.message });
    }
  }
);
export const loginThunk = createAsyncThunk(
  "users/login",
  async (user, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_USER_URL + userLogin, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(response);
      const data = await response.json();
      return data;
    } catch (err) {
      rejectWithValue({ error: err.message });
    }
  }
);
export const currentUserThunk = createAsyncThunk(
  "users/current",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.token;
    if (!token) return;
    try {
      const response = await fetch(BASE_USER_URL + userCurrent, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        // body: JSON.stringify(user),
      });

      const data = await response.json();
      return data;
    } catch (err) {
      rejectWithValue({ error: err.message });
    }
  }
);
export const logoutThunk = createAsyncThunk(
  "users/logout",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.token;
    if (!token) return;
    try {
      const response = await fetch(BASE_USER_URL + userLogout, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        // body: JSON.stringify(user),
      });
      console.log(response);
      //   const data = await response.json();
      //   return data;
    } catch (err) {
      rejectWithValue({ error: err.message });
    }
  }
);

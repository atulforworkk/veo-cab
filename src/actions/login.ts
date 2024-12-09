import axios from "@/services/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "auth/home",
  async (
    { username, password }: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(`/login`, {
        username,
        password,
      });
      await localStorage.setItem("token", response.data.accessToken);
      console.log("🚀 ~ response:", response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

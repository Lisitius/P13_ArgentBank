import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  currentUser:
    JSON.parse(localStorage.getItem("currentUser")) ||
    JSON.parse(sessionStorage.getItem("currentUser")) ||
    null,
  status: "idle",
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password, rememberMe }) => {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("Échec de la connexion");
    }

    const data = await response.json();

    if (rememberMe) {
      localStorage.setItem("currentUser", JSON.stringify(data));
    } else {
      sessionStorage.setItem("currentUser", JSON.stringify(data));
    }

    return data;
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("currentUser");
  sessionStorage.removeItem("currentUser");
  return null;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentUser = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(logout.fulfilled, (state) => {
        state.currentUser = null;
      });
  },
});

export default authSlice.reducer;

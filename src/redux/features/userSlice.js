import { logout } from "./authSlice";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  profile: JSON.parse(localStorage.getItem("userProfile")) || null,
};

export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (token) => {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Échec du chargement du profil utilisateur");
    }

    const data = await response.json();
    return data;
  }
);

export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async ({ token, firstName, lastName }) => {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ firstName, lastName }),
    });

    if (!response.ok) {
      throw new Error("Échec de la mise à jour du profil utilisateur");
    }

    const data = await response.json();
    return data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.profile = action.payload.body;
      localStorage.setItem("userProfile", JSON.stringify(action.payload.body));
    });
    builder.addCase(updateUserProfile.fulfilled, (state, action) => {
      state.profile = action.payload.body;
      localStorage.setItem("userProfile", JSON.stringify(action.payload.body));
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.profile = null;
    });
  },
});

export default userSlice.reducer;

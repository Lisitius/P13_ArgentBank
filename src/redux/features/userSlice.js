import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
    console.log("Données de profil de l'utilisateur : ", data);
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
  initialState: { profile: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      console.log(action.payload.body);
      state.profile = action.payload.body;
    });
    builder.addCase(updateUserProfile.fulfilled, (state, action) => {
      state.profile = action.payload.body;
    });
  },
});

export default userSlice.reducer;

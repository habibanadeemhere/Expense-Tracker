import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../supabase";

// ----------signup----------------
export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ email, password }) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    return data;
  }
);

// ----------login----------------
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  }
);

// ----------google login----------------
export const googleLogin = createAsyncThunk(
  "auth/googleLogin",
  async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({ provider: "google", 
        options: {
            redirectTo: "https://expense-tracker-seven-xi-66.vercel.app",
            flow: "popup",
        },
    });
    if (error) throw error;
    console.log("Google login data:", data);
    return data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
logout: (state) => {
  state.user = null;
  state.error = null;
  state.loading = false;
}


  },
  extraReducers: (builder) => {
    builder
     // ----------login----------------
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("Login pending...");
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload?.user || null;
        console.log("Login successful:", state.user);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.error("Login failed:", state.error);
      })

     // ----------signup----------------
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("Signup pending...");
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload?.user || null;
        console.log("Signup successful:", state.user);
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.error("Signup failed:", state.error);
      })

      // ----------google login----------------
      .addCase(googleLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("Google login pending...");
      })
      .addCase(googleLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload?.user || null;
        console.log("Google login successful:", state.user);
      })
      .addCase(googleLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.error("Google login failed:", state.error);
      });
  },
});

export default authSlice.reducer;
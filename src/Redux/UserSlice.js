import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: null,
  loading: false,
  error: false,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuscess: (state, action) => {
      state.loading = false;
      state.current = action.payload;
    },
    loginFailure: (state) => {
      state.loading = false;
    },
    logout: (state) => {
      state.current = null;
      state.loading = false;
      state.error = false;
    },
    suscribPtion: (state, action) => {
      if (state.current.suscribedUsers?.includes(action.payload)) {
        state.current.suscribedUsers.splice(
          state.current.suscribedUsers.findIndex(
            (channelId) => channelId === action.payload
          ),
          1
        );
      } else {
        state.current.suscribedUsers?.push(action.payload);
      }
    },
  },
});

export const { loginStart, loginSuscess, loginFailure, logout, suscribPtion } =
  UserSlice.actions;
export default UserSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentVideo: null,
  loading: false,
  error: false,
};

export const VideoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuscess: (state, action) => {
      state.loading = false;
      state.currentVideo = action.payload;
    },
    fetchFailure: (state) => {
      state.loading = false;
    },
    like: (state, action) => {
      if (!state.currentVideo.likes.includes(action.payload)) {
        state.currentVideo.likes.push(action.payload);
        state.currentVideo.dislike.splice(
          state.currentVideo.dislike.findIndex(
            (userId) => userId === action.payload
          ),
          1
        );
      }
    },

    dislike: (state, action) => {
      if (!state.currentVideo.dislike.includes(action.payload)) {
        state.currentVideo.dislike.push(action.payload);
        state.currentVideo.likes.splice(
          state.currentVideo.likes.findIndex(
            (userId) => userId === action.payload
          ),
          1
        );
      }
    },
  },
});

export const { fetchStart, fetchSuscess, fetchFailure, like, dislike } =
  VideoSlice.actions;
export default VideoSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const counterLogic = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },

    restart: (state) => {
      state.count = 0;
    },

    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { increment, decrement, restart } = counterLogic.actions;
export default counterLogic.reducer;

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    count: 0
  },

  reducers: {
    increase(state) {
      state.count++;
    },

    decrease(state) {
      state.count--;
    }
  },
});

export const { increase } = counterSlice.actions;
export const { decrease } = counterSlice.actions;

export default counterSlice.reducer;
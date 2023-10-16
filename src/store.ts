import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export type RootState = {
  counter: ReturnType<typeof counterReducer>;
};
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

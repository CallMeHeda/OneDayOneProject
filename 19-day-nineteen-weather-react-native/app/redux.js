import { configureStore, createSlice } from "@reduxjs/toolkit";

const daySlice = createSlice({
  name: "day",
  initialState: {
    isDay: true,
  },
  reducers: {
    setIsDay: (state, action) => {
      state.isDay = action.payload;
      return state;
    },
  },
});

export const { setIsDay } = daySlice.actions;
export const store = configureStore({
  reducer: {
    day: daySlice.reducer,
  },
});

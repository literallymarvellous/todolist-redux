import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/user";
import themeReducer from "../features/user/theme";

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";

import sidebarReducer from "./sidebarSlice";
import authReducer from './authSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        sidebar: sidebarReducer,
      },
});

export default store;
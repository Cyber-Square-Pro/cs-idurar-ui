
import { configureStore } from "@reduxjs/toolkit";
import { baseSliceAPI } from "../services/baseSlice";

const store = configureStore({
  reducer: {
    [baseSliceAPI.reducerPath]: baseSliceAPI.reducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseSliceAPI.middleware,
    ),
});

export default store;

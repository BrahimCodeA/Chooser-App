import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import orderReducer from "./slices/orderSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

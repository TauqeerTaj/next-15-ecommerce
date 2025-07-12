import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "@/reduxToolkit/selectedMenuSlice";
import wishListReducder from "@/reduxToolkit/wishListSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      headerMenu: menuReducer,
      wishList: wishListReducder,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Interface
export interface PayLoadType {
  colour: string;
  count: number;
  productId: string;
  productSize: string;
  userId: string;
  _id: string;
  productPrice: string;
  productHeading: string;
  image: string;
  discount?: string;
  priceOff?: string;
}
export interface WishListState {
  wishListProducts: PayLoadType[];
}

const initialState: WishListState = {
  wishListProducts: [],
};

export const wishListSlice = createSlice({
  name: "WishList",
  initialState,
  reducers: {
    wishListProductHandler: (state, action: PayloadAction<PayLoadType[]>) => {
      action?.payload?.forEach((newProduct) => {
        if (
          !state.wishListProducts.some(
            (product) => product._id === newProduct._id
          )
        ) {
          state.wishListProducts.push(newProduct);
        }
      });
    },
  },
});

export const { wishListProductHandler } = wishListSlice.actions;
export default wishListSlice.reducer;

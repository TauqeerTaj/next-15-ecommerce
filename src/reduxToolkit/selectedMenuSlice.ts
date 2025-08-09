import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectedMenu } from "@/constant/selectedMenuInterface";

const initialState: SelectedMenu = {
  menuItem: "",
};

export const selectedMenuSlice = createSlice({
  name: "Selected_Menu",
  initialState,
  reducers: {
    selectMenu: (state, action: PayloadAction<string>) => {
      state.menuItem = action.payload;
    },
  },
});

export const { selectMenu } = selectedMenuSlice.actions;
export default selectedMenuSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface props {
  showInstallbanner: boolean;
}
const initialState: props = {
  showInstallbanner: false,
};
export const pwaSlice = createSlice({
  name: "pwa",
  initialState,
  reducers: {
    setShowInstallBanner(state, action: PayloadAction<boolean>) {
      state.showInstallbanner = action.payload;
    },
  },
});
export const pwaAction = pwaSlice.actions;
export default pwaSlice.reducer;

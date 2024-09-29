import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface theme {
  theme: boolean;
}

const initialState: theme = {
  theme: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<boolean>) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
interface JwtPayload {
  user_email: string;
  user_role: string;
  iat: number;
  exp: number;
}
type tokenT = {
  email: string;
  role: string;
};

const initialState: tokenT = {
  email: "",
  role: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<string>) => {
      const token = action.payload;
      const decodedToken = jwtDecode(token) as JwtPayload;
      state.email = decodedToken.user_email;
      state.role = decodedToken.user_role;
    },
    removeUser: (state) => {
      state.email = "";
      state.role = "";
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

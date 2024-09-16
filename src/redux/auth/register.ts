import { baseApi } from "../api/baseApi";

const register = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (registerInfo) => ({
        url: "/auth/signup",
        method: "POST",
        body: registerInfo,
      }),
    }),
  }),
});

export const { useUserRegisterMutation } = register;

export default register;

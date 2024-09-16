import { baseApi } from "../api/baseApi";

const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: loginInfo,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;

export default loginApi;

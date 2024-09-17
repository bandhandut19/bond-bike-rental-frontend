import Cookies from "js-cookie";
import { baseApi } from "../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: () => {
        const token = Cookies.get("authToken");
        return {
          url: "/users/me",
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
    }),
    updateProfile: builder.mutation({
      query: ({ updatedInfo, payload }) => {
        const token = Cookies.get("authToken");
        return {
          url: "/users/me",
          method: "PUT",
          body: updatedInfo,
          user: payload,
          credentials: "include",
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
    }),
  }),
});

export const { useGetUserDetailsQuery, useUpdateProfileMutation } = userApi;
export default userApi;

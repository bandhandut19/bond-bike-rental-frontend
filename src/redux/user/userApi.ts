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
      providesTags: (result) =>
        result
          ? [{ type: "UserInfo" as const, id: "DETAILS" }]
          : [{ type: "UserInfo" as const, id: "DETAILS" }],
    }),
    getAllUsers: builder.query({
      query: () => {
        const token = Cookies.get("authToken");
        return {
          url: "/users/allusers",
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
      providesTags: (result) =>
        result
          ? [{ type: "UserInfo" as const, id: "DETAILS" }]
          : [{ type: "UserInfo" as const, id: "DETAILS" }],
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
      invalidatesTags: [{ type: "UserInfo" as const, id: "DETAILS" }],
    }),
    promoteUserToAdmin: builder.mutation({
      query: ({ id, payload }) => {
        const token = Cookies.get("authToken");
        return {
          url: `/users/user/${id}`,
          method: "PUT",
          user: payload,
          credentials: "include",
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
      invalidatesTags: [{ type: "UserInfo" as const, id: "DETAILS" }],
    }),
    deleteUser: builder.mutation({
      query: ({ id, payload }) => {
        const token = Cookies.get("authToken");
        return {
          url: `/users/${id}`,
          method: "DELETE",
          user: payload,
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
      invalidatesTags: [{ type: "UserInfo" as const, id: "DETAILS" }],
    }),
    refreshToken: builder.query({
      query: () => {
        const token = Cookies.get("refreshToken");
        return {
          url: `/auth/refresh-token`,
          method: "GET",
          Cookies: token,
        };
      },
    }),
  }),
});

export const {
  useGetUserDetailsQuery,
  useUpdateProfileMutation,
  useGetAllUsersQuery,
  useDeleteUserMutation,
  usePromoteUserToAdminMutation,
  useRefreshTokenQuery,
} = userApi;
export default userApi;

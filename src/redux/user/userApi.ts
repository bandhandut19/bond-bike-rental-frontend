import Cookies from "js-cookie"; // Import js-cookie
import { baseApi } from "../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: () => {
        // Get the token from cookies using js-cookie
        const token = Cookies.get("authToken"); // Replace "authToken" with your cookie's name

        return {
          url: "/users/me",
          method: "GET",
          credentials: "include", // Include cookies if needed
          headers: {
            // Add the Bearer prefix if the token exists
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
    }),
  }),
});

export const { useGetUserDetailsQuery } = userApi;
export default userApi;

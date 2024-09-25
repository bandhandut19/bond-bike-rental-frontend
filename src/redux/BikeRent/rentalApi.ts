import Cookies from "js-cookie";
import { baseApi } from "../api/baseApi";

const rentalApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBikeBooking: builder.mutation({
      query: ({ advanceBooking, payload }) => {
        const token = Cookies.get("authToken");
        return {
          url: "/rentals",
          method: "POST",
          body: advanceBooking,
          user: payload,
          credentials: "include",
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
      invalidatesTags: [
        { type: "BikeInfo" as const, id: "DETAILS" },
        { type: "UserInfo" as const, id: "DETAILS" },
      ],
    }),
  }),
});
export const { useCreateBikeBookingMutation } = rentalApi;

export default rentalApi;

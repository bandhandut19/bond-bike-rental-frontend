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
        { type: "BikeInfo", id: "DETAILS" },
        { type: "UserInfo", id: "DETAILS" },
      ],
    }),
    calculateCost: builder.mutation({
      query: (payload) => {
        const token = Cookies.get("authToken");
        return {
          url: "/rentals/calculate",
          method: "PATCH",
          body: payload,
          credentials: "include",
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
      invalidatesTags: [
        { type: "BikeInfo" as const, id: "DETAILS" },
        { type: "UserInfo" as const, id: "DETAILS" },
        { type: "BookingInfo" as const, id: "DETAILS" },
      ],
    }),
    getUserSpecificRentals: builder.query({
      query: () => {
        const token = Cookies.get("authToken");
        return {
          url: "/rentals",
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
      providesTags: [
        { type: "BikeInfo" as const, id: "DETAILS" },
        { type: "UserInfo" as const, id: "DETAILS" },
        { type: "BookingInfo" as const, id: "DETAILS" },
      ],
    }),
    getAllUsersRentals: builder.query({
      query: () => {
        const token = Cookies.get("authToken");
        return {
          url: "/rentals/all",
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
      providesTags: [
        { type: "BikeInfo" as const, id: "DETAILS" },
        { type: "UserInfo" as const, id: "DETAILS" },
        { type: "BookingInfo" as const, id: "DETAILS" },
      ],
    }),
  }),
});
export const {
  useCreateBikeBookingMutation,
  useGetUserSpecificRentalsQuery,
  useGetAllUsersRentalsQuery,
  useCalculateCostMutation,
} = rentalApi;

export default rentalApi;

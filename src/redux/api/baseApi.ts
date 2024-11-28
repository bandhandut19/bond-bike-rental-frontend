import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    // baseUrl: "https://bond-bike-rental.vercel.app/api",
    credentials: "include",
  }),
  tagTypes: ["BookingInfo", "UserInfo", "BikeInfo"],
  endpoints: () => ({}),
});

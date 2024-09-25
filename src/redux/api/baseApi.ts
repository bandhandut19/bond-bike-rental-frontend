import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001/api",
    // baseUrl: "https://bond-bike-rental-backend.vercel.app/api",
    credentials: "include",
  }),
  tagTypes: ["UserInfo", "BikeInfo"],
  endpoints: () => ({}),
});

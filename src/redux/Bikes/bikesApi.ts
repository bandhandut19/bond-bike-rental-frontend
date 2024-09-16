import { baseApi } from "../api/baseApi";

const bikesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: (params) => ({
        url: "/bikes",
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetAllBikesQuery } = bikesApi;

export default bikesApi;

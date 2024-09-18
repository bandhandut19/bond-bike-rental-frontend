import Cookies from "js-cookie";
import { baseApi } from "../api/baseApi";
import { TBike } from "@/types";

const bikesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: (params) => ({
        url: "/bikes",
        method: "GET",
        params,
      }),
      providesTags: [{ type: "BikeInfo", id: "DETAILS" }],
    }),
    createBike: builder.mutation({
      query: (bikeInfo: TBike) => {
        const token = Cookies.get("authToken");
        return {
          url: "/bikes",
          method: "POST",
          body: bikeInfo,
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
      invalidatesTags: [{ type: "BikeInfo", id: "DETAILS" }],
    }),
    deleteBike: builder.mutation({
      query: (id: string) => {
        const token = Cookies.get("authToken");
        return {
          url: `/bikes/${id}`,
          method: "DELETE",
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
      invalidatesTags: [{ type: "BikeInfo", id: "DETAILS" }],
    }),
  }),
});

export const {
  useGetAllBikesQuery,
  useCreateBikeMutation,
  useDeleteBikeMutation,
} = bikesApi; // Export the mutation hook

export default bikesApi;

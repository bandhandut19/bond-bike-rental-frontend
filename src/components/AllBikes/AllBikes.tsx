import { useGetAllBikesQuery } from "@/redux/Bikes/bikesApi";

const AllBikes = () => {
  const { data, isLoading } = useGetAllBikesQuery({});
  const bikes = data?.data;
  console.log(data);
  return (
    <div>
      This is all bikes page
      {bikes?.length}
    </div>
  );
};

export default AllBikes;

import { useGetAllBikesQuery } from "@/redux/Bikes/bikesApi";
import { TBike } from "@/types";
import BikeCard from "../ui/BikeCard";

const AllBikes = () => {
  const { data, isLoading } = useGetAllBikesQuery({});
  const bikes = data?.data;
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mx-auto w-4/5">
      <div className="pt-10 mb-20 text-center text-4xl font-extrabold text-[#D7DFA3]">
        <h1>All Bikes</h1>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 mb-20 gap-y-8 gap-x-5">
        {bikes?.map((bike: TBike) => (
          <BikeCard bike={bike}></BikeCard>
        ))}
      </div>
    </div>
  );
};

export default AllBikes;

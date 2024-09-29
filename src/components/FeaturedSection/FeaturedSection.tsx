import { useGetAllBikesQuery } from "@/redux/Bikes/bikesApi";
import { TBike } from "@/types";
import BikeCard from "../ui/BikeCard";

const FeaturedSection = () => {
  const { data, isLoading } = useGetAllBikesQuery({});
  const bikes = data?.data;
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold lg:text-[#1A4862] text-[#D7DFA3] mb-16 mt-3 text-center">
        Featured Bikes
      </h1>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
        {/* only latest added available bikes will be featured*/}
        {bikes?.length === 0
          ? "Bikes Will be Added Soon"
          : bikes
              .slice(bikes.length - 3, bikes.length)
              .map((bike: TBike) =>
                bike.isAvailable ? (
                  <BikeCard key={bike?._id} bike={bike}></BikeCard>
                ) : (
                  ""
                )
              )}
      </div>
    </div>
  );
};

export default FeaturedSection;

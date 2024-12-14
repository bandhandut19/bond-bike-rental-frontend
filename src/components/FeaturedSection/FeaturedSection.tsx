import { useGetAllBikesQuery } from "@/redux/Bikes/bikesApi";
import { TBike } from "@/types";
import BikeCard from "../ui/BikeCard";
import LoadingAlterAnimation from "../ui/LoadingAlterAnimation";

const FeaturedSection = () => {
  const { data, isLoading } = useGetAllBikesQuery({});
  const bikes = data?.data;
  if (isLoading) {
    return <LoadingAlterAnimation></LoadingAlterAnimation>;
  }
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold text-white bg-[#1A4862] py-2 lg:font-extrabold  mb-16 mt-3 text-center">
        Featured Bikes
      </h1>

      <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">
        {/* only latest added available bikes will be featured*/}
        {bikes?.length === 0
          ? "Bikes Will be Added Soon"
          : bikes
              ?.slice(bikes.length - 5, bikes.length)
              ?.map((bike: TBike) =>
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

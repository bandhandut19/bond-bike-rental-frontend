import { useGetSingleBikeQuery } from "@/redux/Bikes/bikesApi";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { TBike } from "@/types";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const SingleBikePage = () => {
  const { id } = useParams();
  const email = useAppSelector((state: RootState) => state.user.email);
  const { data, isLoading } = useGetSingleBikeQuery(id);

  if (isLoading) {
    return <div>Loading...</div>; // Show loading message while fetching
  }

  console.log(data?.data);
  const bike = data?.data as TBike;

  const handleBookNow = () => {
    console.log("booking process started");
  };
  const handleBookNowNoUser = () => {
    toast("Login To Start Booking Process of the Bike");
  };

  return (
    <div className="mt-10 mb-20  mx-auto w-4/5 flex flex-col items-center justify-center rounded-none  bg-[#D7DFA3] border-2 text-[#1A4862]  shadow-lg shadow-[#D7DFA3]">
      <div className="lg:w-4/5">
        <img src={bike.image} alt="" />
      </div>
      <div className="bg-[#1A4862] lg:w-4/5 md:w-full p-2 lg:p-0 lg:pb-28 pb-12 text-center lg:pt-5 bg-opacity-90">
        <div className="pb-10">
          <h1 className="text-2xl">
            <span className="font-extrabold text-[#D7DFA3]">
              {" "}
              {bike.description}
            </span>
          </h1>
        </div>
        <div>
          <h1 className="lg:text-2xl">
            <span className="font-extrabold text-white">Name:</span>{" "}
            <span className="font-bold text-[#D7DFA3]"> {bike.name}</span>
          </h1>
        </div>
        <div>
          <h1 className="lg:text-2xl">
            <span className="font-extrabold text-white">Model:</span>{" "}
            <span className="font-bold text-[#D7DFA3]"> {bike.model}</span>
          </h1>
        </div>
        <div>
          <h1 className="lg:text-2xl">
            <span className="font-extrabold text-white">CC:</span>{" "}
            <span className="font-bold text-[#D7DFA3]"> {bike.cc}</span>
          </h1>
        </div>
        <div>
          <h1 className="lg:text-2xl">
            <span className="font-extrabold text-white">Brand:</span>{" "}
            <span className="font-bold text-[#D7DFA3]"> {bike.brand}</span>
          </h1>
        </div>
        <div>
          <h1 className="lg:text-2xl">
            <span className="font-extrabold text-white">Price (Hour):</span>{" "}
            <span className="font-bold text-[#30DB3C]">
              {" "}
              {bike.pricePerHour} BDT ONLY
            </span>
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col mt-10 gap-5 items-center justify-center">
          <div>
            {bike?.isAvailable ? (
              <button
                disabled
                className="bg-white border-[#30DB3C] py-2 px-5 font-bold border-2"
              >
                Available For Booking
              </button>
            ) : (
              <button
                disabled
                className="bg-[#db3c30] border-white py-2 px-5 font-bold border-2"
              >
                Not Available For Booking
              </button>
            )}
          </div>
          <div>
            {bike?.isAvailable ? (
              email ? (
                <button
                  onClick={handleBookNow}
                  className="bg-[#30DB3C] py-2 px-5 font-bold border-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#28b531] hover:text-white"
                >
                  Book Now !
                </button>
              ) : (
                <button
                  onClick={handleBookNowNoUser}
                  className=" cursor-pointer bg-[#30DB3C] py-2 px-5 font-bold border-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#28b531] hover:text-white"
                >
                  Book Now !
                </button>
              )
            ) : (
              <button
                disabled
                onClick={handleBookNowNoUser}
                className=" hidden bg-[#30DB3C] py-2 px-5 font-bold border-2  "
              >
                Book Now !
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBikePage;

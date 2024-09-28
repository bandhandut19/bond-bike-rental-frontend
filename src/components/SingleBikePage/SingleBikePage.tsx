import { useGetSingleBikeQuery } from "@/redux/Bikes/bikesApi";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { TBike, TStartTime } from "@/types";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

import "react-datetime/css/react-datetime.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { useCreateBikeBookingMutation } from "@/redux/BikeRent/rentalApi";
import { useGetUserDetailsQuery } from "@/redux/user/userApi";
const SingleBikePage = () => {
  const { id } = useParams();
  const email = useAppSelector((state: RootState) => state.user.email);
  const { data, isLoading } = useGetSingleBikeQuery(id);
  const { data: userData } = useGetUserDetailsQuery({});
  const payload = { user_email: userData?.email, user_role: userData?.role };
  const [createBikeBooking] = useCreateBikeBookingMutation();
  const { register, handleSubmit } = useForm<TStartTime>({
    defaultValues: {
      advancePayment: "100 BDT Only",
    },
  });
  if (isLoading) {
    return <div>Loading...</div>; // Show loading message while fetching
  }

  const bike = data?.data as TBike;

  const handleBookNowNoUser = () => {
    toast("Login To Start Booking Process of the Bike");
  };
  const handleBookNow = (data: TStartTime) => {
    const modifiedDate = {
      ...data,
      startTime: `${data.startTime}:00Z`,
      advancePayment: data.advancePayment.slice(0, 3),
    };
    toast(`${modifiedDate.advancePayment} || ${modifiedDate.startTime}`);

    // this route will take only payload to be redirected to payment url
    const advanceBooking = {
      bikeId: bike?._id,
      startTime: modifiedDate.startTime,
    };
    createBikeBooking({ advanceBooking, payload })
      .then((response) => {
        window.location.href = response?.data?.data?.booking?.payment_url;
      })
      .catch((error) => {
        console.log(error);
        // toast("Error creating booking:", error);
      });
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
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="bg-[#30DB3C] py-2 px-5 font-bold border-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#28b531] hover:text-white">
                      Book Now !
                    </button>
                  </DialogTrigger>
                  <DialogContent className="w-full sm:min-w-[420px] bg-[#1A4862]  text-white">
                    <DialogHeader>
                      <DialogTitle>Rent this bike now</DialogTitle>
                      <DialogDescription className="text-[#D7DFA3] font-bold text-2xl text-opacity-70">
                        Advance Payment of 100tk is required For Booking a Bike
                      </DialogDescription>
                    </DialogHeader>
                    <form
                      onSubmit={handleSubmit(handleBookNow)}
                      className="grid gap-4 py-4"
                    >
                      <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="startTime" className="text-right">
                          Start TIme
                        </label>
                        <Input
                          id="startTime"
                          step={60}
                          type="datetime-local"
                          required
                          {...register("startTime")}
                          className="col-span-3 bg-[#D7DFA3]  text-[#1A4862] font-bold rounded-none"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="advancePayment" className="text-right">
                          Advance Payment
                        </label>
                        <Input
                          id="advancePayment"
                          disabled
                          {...register("advancePayment")}
                          className="col-span-3 bg-[#D7DFA3] text-[#1A4862] font-bold rounded-none"
                        />
                      </div>

                      <DialogFooter>
                        <Button
                          type="submit"
                          className="bg-[#D7DFA3] text-[#1A4862] font-bold rounded-none hover:font-extrabold hover:text-white border-2 hover:bg-[#D7DFA3] hover:bg-opacity-40"
                        >
                          Pay Now
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
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

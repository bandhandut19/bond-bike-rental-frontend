import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useCalculateCostMutation,
  useGetAllUsersRentalsQuery,
} from "@/redux/BikeRent/rentalApi";
import { TBooking, TCalculate } from "@/types";
import { formatDate } from "@/utils/dateFormat";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogOverlay,
  DialogClose,
} from "@radix-ui/react-dialog";
import { DialogFooter, DialogHeader } from "./dialog";
import { Input } from "./input";
import { useForm } from "react-hook-form";
import { Button } from "./button";
import { toast } from "sonner";

const ReturnBike = () => {
  const { data, isLoading } = useGetAllUsersRentalsQuery({});
  const { register, handleSubmit, reset } = useForm<TCalculate>();
  const userRentals = data?.data;
  const [calculateCost] = useCalculateCostMutation();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleCalculateNow = async (data: TCalculate, id: string) => {
    console.log(data, id);
    toast("Calculating Total Cost...");
    const payload: TCalculate = {
      bookingId: id,
      bikeReturnTime: data.bikeReturnTime,
    };
    const res = await calculateCost(payload);
    console.log(res);

    reset();
  };

  return (
    <>
      <h1 className="text-center text-2xl lg:text-4xl mt-5 font-extrabold">
        Return Bike
      </h1>
      <div className="mx-auto lg:w-4/5 mb-5 w-full flex flex-col lg:gap-5 gap-1 bg-gradient-to-tr border-2 to-[#D7DFA3] from-[#1A4862] py-5 px-2 mt-5">
        <Table>
          <TableCaption className="text-white text-left py-2 px-1 md:hidden lg:hidden font-extrabold text-sm border-2">
            <span className="text-[#D7DFA3]">Tips: </span>Scroll Left To View
            More Details
          </TableCaption>
          <TableHeader className="bg-white bg-opacity-50">
            <TableRow>
              <TableHead className="text-[#1A4862] text-opacity-100 font-extrabold lg:text-lg">
                Customer
              </TableHead>
              <TableHead className="text-[#1A4862] lg:px-0 px-2 text-opacity-100 font-extrabold lg:text-lg">
                Selected Bike
              </TableHead>
              <TableHead className="text-[#1A4862] text-opacity-100 font-extrabold lg:text-lg">
                Status
              </TableHead>
              <TableHead className="text-[#1A4862] text-opacity-100 font-extrabold lg:text-lg">
                Total Cost
              </TableHead>
              <TableHead className="text-[#1A4862] text-opacity-100 px-2 font-extrabold lg:text-lg">
                Start-Time
              </TableHead>
              <TableHead className="text-[#1A4862] text-opacity-100 px-5 font-extrabold lg:text-lg text-center">
                <h1 className="text-center">Return Bike</h1>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userRentals?.map((booking: TBooking) => (
              <TableRow
                key={booking._id}
                className="hover:bg-[#1A4862] bg-[#D7DFA3] bg-opacity-35 font-bold"
              >
                <TableCell className="font-medium">{booking.userId}</TableCell>
                <TableCell>{booking.bikeId}</TableCell>
                <TableCell>{booking.isReturned ? "Paid" : "Unpaid"}</TableCell>
                <TableCell className="text-center">
                  {booking.totalCost} BDT
                </TableCell>
                <TableCell>{formatDate(booking.startTime)}</TableCell>
                <TableCell className="text-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="bg-[#30DB3C] text-white border-2 py-2 px-4 hover:text-[#1A4862] hover:bg-[#D7DFA3] hover:font-extrabold font-semibold">
                        Calculate
                      </button>
                    </DialogTrigger>
                    <DialogOverlay className="fixed inset-0 bg-black opacity-50" />
                    <DialogContent className="fixed inset-0 flex items-center justify-center p-4">
                      <div className="bg-[#1A4862] text-white p-6 rounded-md shadow-lg max-w-md w-full">
                        <DialogHeader>
                          <DialogTitle className="text-xl">
                            Calculate Total Cost Now !
                          </DialogTitle>
                          <DialogDescription className="text-[#D7DFA3] font-bold  text-opacity-70">
                            Calculate Total cost of the rental so that user can
                            pay after this.
                          </DialogDescription>
                        </DialogHeader>
                        <form
                          onSubmit={handleSubmit((data) =>
                            handleCalculateNow(data, booking._id as string)
                          )}
                          className="grid gap-4 py-4"
                        >
                          <div className="grid grid-cols-4 items-center gap-4">
                            <label
                              htmlFor="bikeReturnTime"
                              className="text-right"
                            >
                              Return Time
                            </label>
                            <Input
                              id="bikeReturnTime"
                              step={60}
                              type="datetime-local"
                              required
                              {...register("bikeReturnTime")}
                              className="col-span-3 bg-[#D7DFA3] text-[#1A4862] font-bold rounded-none"
                            />
                          </div>
                          <DialogFooter className="gap-3 lg:flex-row flex-col">
                            <Button
                              type="submit"
                              className="bg-[#D7DFA3] text-[#1A4862] font-bold rounded-none hover:font-extrabold hover:text-white border-2 hover:bg-[#D7DFA3] hover:bg-opacity-40"
                            >
                              Calculate Now
                            </Button>

                            <DialogClose asChild>
                              <Button className="bg-red-500 text-[#1A4862] font-bold rounded-none hover:font-extrabold hover:text-white border-2 hover:bg-[#D7DFA3] hover:bg-opacity-40">
                                Close
                              </Button>
                            </DialogClose>
                          </DialogFooter>
                        </form>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default ReturnBike;

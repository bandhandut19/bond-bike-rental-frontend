import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useGetUserSpecificRentalsQuery,
  usePayRentalMutation,
} from "@/redux/BikeRent/rentalApi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { TBike, TBooking, TPayDetails } from "@/types";
import { formatDate } from "../../utils/dateFormat";
import { toast } from "sonner";
import { useGetUserDetailsQuery } from "@/redux/user/userApi";
import { useGetAllBikesQuery } from "@/redux/Bikes/bikesApi";

const MyRentals = () => {
  const { data, isLoading } = useGetUserSpecificRentalsQuery({
    pollingInterval: 5000, // Auto refetch every 5 seconds
  });
  const { data: userData } = useGetUserDetailsQuery({
    pollingInterval: 5000, // Auto refetch every 5 seconds
  });
  const payload = { user_email: userData?.email, user_role: userData?.role };
  const [payRental] = usePayRentalMutation();
  const { data: bikeData } = useGetAllBikesQuery({});
  if (isLoading) {
    <div>Loading.....</div>;
  }
  const myRentals: TBooking[] = data?.data || [];
  const handlePayNow = (amount: number, bookingId: string) => {
    const payDetails: TPayDetails = {
      amount,
      bookingId,
    };
    payRental({ payDetails, payload })
      .then((response) => {
        window.location.href = response?.data?.data?.payment_url;
      })
      .catch((error) => {
        console.log(error);
        // toast("Error creating booking:", error);
      });
    toast("Payment Processing...");
  };
  const unpaidRentals = myRentals.filter((rental) => !rental?.payment);
  const paidRentals = myRentals.filter((rental) => rental?.payment);
  return (
    <>
      <h1 className="text-center text-2xl  lg:text-4xl mt-5 font-extrabold">
        My Rentals
      </h1>
      <div className="mx-auto lg:w-4/5 mb-5 w-full md:items-center flex flex-col lg:gap-5 gap-1 bg-gradient-to-tr border-2 to-[#D7DFA3] from-[#1A4862] py-5 px-2 mt-5">
        <Tabs defaultValue="unpaid" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-[#1A4862] dark:bg-slate-600 gap-2">
            <TabsTrigger value="unpaid" className=" text-white ">
              Unpaid
            </TabsTrigger>
            <TabsTrigger value="paid" className="text-white">
              Paid
            </TabsTrigger>
          </TabsList>
          <TabsContent value="unpaid">
            <Card className="bg-opacity-70 text-white bg-[#db3c30]">
              <CardHeader>
                <CardDescription className="text-white text-lg font-bold">
                  Here are the rentals you have not paid nor returned yet
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {/* Unpaid table */}
                <Table>
                  <TableCaption className="text-white text-left py-2 px-1 md:hidden lg:hidden font-extrabold text-sm border-2">
                    <span className="text-[#D7DFA3]">Tips: </span>Scroll Left To
                    View More Details
                  </TableCaption>
                  <TableHeader className="bg-white bg-opacity-50">
                    <TableRow>
                      <TableHead className="text-[#1A4862] text-opacity-100 font-extrabold lg:text-lg">
                        Bike
                      </TableHead>
                      <TableHead className="text-[#1A4862] lg:px-0 px-2 text-opacity-100 font-extrabold lg:text-lg">
                        Start Time
                      </TableHead>
                      <TableHead className="text-[#1A4862] text-opacity-100 font-extrabold lg:text-lg">
                        Return Time
                      </TableHead>
                      <TableHead className="text-[#1A4862] text-opacity-100 px-2 font-extrabold lg:text-lg">
                        Total Cost
                      </TableHead>

                      <TableHead className="text-[#1A4862]  text-opacity-100 px-5 font-extrabold lg:text-lg text-center">
                        <h1 className="text-center">Pay</h1>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {unpaidRentals.length === 0 ? (
                      <TableRow>
                        <TableCell
                          colSpan={5}
                          className="text-center font-bold lg:text-xl"
                        >
                          No unpaid data to show
                        </TableCell>
                      </TableRow>
                    ) : (
                      myRentals?.map((rental: TBooking) =>
                        rental?.payment ? (
                          ""
                        ) : (
                          <TableRow
                            key={rental?._id}
                            className="hover:bg-[#1A4862] hover:text-white bg-[#D7DFA3] bg-opacity-35 font-bold"
                          >
                            <TableCell className="font-medium">
                              {bikeData?.data
                                ? bikeData?.data.map((bike: TBike) =>
                                    bike?._id === rental?.bikeId
                                      ? bike.name
                                      : ""
                                  )
                                : ""}
                            </TableCell>
                            <TableCell>
                              {formatDate(rental.startTime)}
                            </TableCell>
                            <TableCell>
                              {rental.returnTime
                                ? formatDate(rental.returnTime)
                                : "N/A"}
                            </TableCell>
                            <TableCell>
                              {rental.totalCost > 0
                                ? ` ${rental.totalCost} BDT`
                                : `${Math.abs(rental.totalCost)} BDT`}
                              {rental.totalCost < 0 && (
                                <span>
                                  {" "}
                                  <br /> Will be returned
                                </span>
                              )}
                            </TableCell>

                            <TableCell className="text-right">
                              {rental?.totalCost <= 0 ? (
                                <button
                                  disabled
                                  className="bg-[grey] border-2 text-white py-2 px-4 hover:text-white  font-extrabold"
                                >
                                  {rental.totalCost < 0
                                    ? "Money will be returned"
                                    : "Pay Now"}
                                </button>
                              ) : (
                                <button
                                  onClick={() =>
                                    handlePayNow(rental.totalCost, rental._id)
                                  }
                                  className="bg-[#428c34] border-2 text-white py-2 px-4 hover:text-white hover:bg-[#30DB3C]  font-extrabold"
                                >
                                  Pay Now
                                </button>
                              )}
                            </TableCell>
                          </TableRow>
                        )
                      )
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="paid">
            <Card className="bg-opacity-40 text-black bg-[#30DB3C]">
              <CardHeader>
                <CardDescription className="text-white text-lg font-bold">
                  Here are the rentals you have paid and returned bikes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {/* Paid table */}
                <Table>
                  <TableCaption className="text-white text-left py-2 px-1 md:hidden lg:hidden font-extrabold text-sm border-2">
                    <span className="text-[#D7DFA3]">Tips: </span>Scroll Left To
                    View More Details
                  </TableCaption>
                  <TableHeader className="bg-white bg-opacity-50">
                    <TableRow>
                      <TableHead className="text-[#1A4862] text-opacity-100 font-extrabold lg:text-lg">
                        Bike
                      </TableHead>
                      <TableHead className="text-[#1A4862] lg:px-0 px-2 text-opacity-100 font-extrabold lg:text-lg">
                        Start Time
                      </TableHead>
                      <TableHead className="text-[#1A4862] text-opacity-100 font-extrabold lg:text-lg">
                        Return Time
                      </TableHead>
                      <TableHead className="text-[#1A4862] text-opacity-100 px-2 font-extrabold lg:text-lg">
                        Total Cost
                      </TableHead>
                      <TableHead className="text-[#1A4862] text-opacity-100 px-2 font-extrabold lg:text-lg">
                        Status
                      </TableHead>
                      <TableHead className="text-[#1A4862] text-opacity-100 px-2 font-extrabold lg:text-lg">
                        Advance Payment
                      </TableHead>
                      <TableHead className="text-[#1A4862]  text-opacity-100 px-5 font-extrabold lg:text-lg text-center">
                        <h1 className="text-center">Payment Status</h1>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paidRentals.length === 0 ? (
                      <TableRow>
                        <TableCell
                          colSpan={7}
                          className="text-center text-white  font-bold lg:text-xl"
                        >
                          No paid data to show
                        </TableCell>
                      </TableRow>
                    ) : (
                      myRentals?.map((rental: TBooking) =>
                        rental?.payment ? (
                          <TableRow
                            key={rental?._id}
                            className="hover:bg-[#1A4862] hover:text-white bg-[#D7DFA3] bg-opacity-35 font-bold"
                          >
                            <TableCell className="font-medium">
                              {bikeData?.data
                                ? bikeData?.data.map((bike: TBike) =>
                                    bike?._id === rental?.bikeId
                                      ? bike.name
                                      : ""
                                  )
                                : ""}
                            </TableCell>
                            <TableCell>
                              {formatDate(rental.startTime)}
                            </TableCell>
                            <TableCell>
                              {rental.returnTime
                                ? formatDate(rental.returnTime)
                                : "N/A"}
                            </TableCell>
                            <TableCell>
                              {rental.totalCost !== 0
                                ? `${rental.totalCost} BDT`
                                : "N/A"}
                            </TableCell>
                            <TableCell>
                              {rental.isReturned ? "Returned" : "Not Returned"}
                            </TableCell>
                            <TableCell className="text-center">
                              {rental.advancePayment ? "Paid" : "Not Yet"}
                            </TableCell>
                            <TableCell className="text-center">
                              {rental.payment === true ? "Paid" : "Not Yet"}
                            </TableCell>
                          </TableRow>
                        ) : (
                          ""
                        )
                      )
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default MyRentals;

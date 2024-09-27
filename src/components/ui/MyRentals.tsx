import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetUserSpecificRentalsQuery } from "@/redux/BikeRent/rentalApi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { TBooking } from "@/types";
import { formatDate } from "../../utils/dateFormat";

const MyRentals = () => {
  const { data, isLoading } = useGetUserSpecificRentalsQuery({});
  if (isLoading) {
    <div>Loading.....</div>;
  }
  const myRentals = data?.data;

  return (
    <>
      <h1 className="text-center text-2xl  lg:text-4xl mt-5 font-extrabold">
        My Rentals
      </h1>
      <div className="mx-auto lg:w-4/5 mb-5 w-full md:items-center flex flex-col lg:gap-5 gap-1 bg-gradient-to-tr border-2 to-[#D7DFA3] from-[#1A4862] py-5 px-2 mt-5">
        <Tabs defaultValue="unpaid" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-[#1A4862] gap-2">
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
                        Returned Time
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
                    {myRentals?.map((rental: TBooking) =>
                      rental?.isReturned ? (
                        ""
                      ) : (
                        <TableRow
                          key={rental?._id}
                          className="hover:bg-[#1A4862] hover:text-white bg-[#D7DFA3] bg-opacity-35 font-bold"
                        >
                          <TableCell className="font-medium">
                            {rental.bikeId as string}
                          </TableCell>
                          <TableCell>{formatDate(rental.startTime)}</TableCell>
                          <TableCell>
                            {rental.returnTime ? rental.returnTime : "N/A"}
                          </TableCell>
                          <TableCell>
                            {rental.totalCost === 0 ? "N/A" : rental.totalCost}
                          </TableCell>

                          <TableCell className="text-right">
                            {rental.totalCost === 0 ? (
                              <button
                                disabled
                                className="bg-[grey] border-2 text-white py-2 px-4 hover:text-white  font-extrabold"
                              >
                                Pay Now
                              </button>
                            ) : (
                              <button className="bg-[#428c34] border-2 text-white py-2 px-4 hover:text-white hover:bg-[#30DB3C]  font-extrabold">
                                Pay Now {rental.isReturned}
                              </button>
                            )}
                          </TableCell>
                        </TableRow>
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
                        Returned Time
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
                        <h1 className="text-center">Pay</h1>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {myRentals?.map((rental: TBooking) =>
                      rental?.isReturned ? (
                        <TableRow
                          key={rental?._id}
                          className="hover:bg-[#1A4862] hover:text-white bg-[#D7DFA3] bg-opacity-35 font-bold"
                        >
                          <TableCell className="font-medium">
                            {rental.bikeId}
                          </TableCell>
                          <TableCell>{formatDate(rental.startTime)}</TableCell>
                          <TableCell>
                            {rental.returnTime ? rental.returnTime : "N/A"}
                          </TableCell>
                          <TableCell>
                            {rental.totalCost === 0 ? "N/A" : rental.totalCost}
                          </TableCell>
                          <TableCell>
                            {rental.isReturned ? "Returned" : "Not Returned"}
                          </TableCell>
                          <TableCell>
                            {rental.advancePayment ? "Done" : "Not Yet"}
                          </TableCell>
                          <TableCell className="text-right">
                            {rental.totalCost === 0 ? (
                              <button
                                disabled
                                className="bg-[grey] border-2 text-white py-2 px-4 hover:text-white  font-extrabold"
                              >
                                Pay Now
                              </button>
                            ) : (
                              <button className="bg-[#428c34] border-2 text-white py-2 px-4 hover:text-white hover:bg-[#30DB3C]  font-extrabold">
                                Pay Now {rental.isReturned}
                              </button>
                            )}
                          </TableCell>
                        </TableRow>
                      ) : (
                        ""
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

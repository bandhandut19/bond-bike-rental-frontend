import {
  Table,
  TableBody,
  TableCaption,
  // TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ReturnBike = () => {
  return (
    <>
      <h1 className="text-center text-2xl  lg:text-4xl mt-5 font-extrabold">
        Return Bike
      </h1>
      <div className="mx-auto lg:w-4/5 mb-5 w-full md:items-center flex flex-col lg:gap-5 gap-1 bg-gradient-to-tr border-2 to-[#D7DFA3] from-[#1A4862] py-5 px-2 mt-5">
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
              <TableHead className="text-[#1A4862] text-opacity-100 px-2 font-extrabold lg:text-lg">
                Start-Time
              </TableHead>
              <TableHead className="text-[#1A4862]  text-opacity-100 px-5 font-extrabold lg:text-lg text-center">
                <h1 className="text-center">Manage Return Bike</h1>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* {usersData?.map((user: TUser) => (
              <TableRow
                key={user._id}
                className="hover:bg-[#1A4862] bg-[#D7DFA3] bg-opacity-35 font-bold"
              >
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-2 items-center justify-center"></div>
                </TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default ReturnBike;

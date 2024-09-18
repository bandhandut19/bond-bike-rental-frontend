import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllBikesQuery } from "@/redux/Bikes/bikesApi";
import { TBike } from "@/types";
import BikeSearchAdminDashboard from "./BikeSearchAdminDashboard";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "./input";
import { useForm } from "react-hook-form";

const BikeManagement = () => {
  const { data } = useGetAllBikesQuery({});
  const bikeData = data?.data;
  const { register, handleSubmit } = useForm<TBike>();
  const handleDeleteBike = (id: string) => {
    console.log(id);
  };
  const handleUpdateBike = (data: TBike, id: string) => {
    console.log(data, id);
  };

  return (
    <div className="mx-auto lg:w-4/5 mb-5 w-full md:items-center flex flex-col lg:gap-5 gap-1 bg-gradient-to-tr border-2 to-[#D7DFA3] from-[#1A4862] py-5 px-2 mt-5">
      <div className="w-full">
        <BikeSearchAdminDashboard></BikeSearchAdminDashboard>
      </div>
      <Table>
        <TableCaption className="text-white text-left py-2 px-1 md:hidden lg:hidden font-extrabold text-sm border-2">
          <span className="text-[#D7DFA3]">Tips: </span>Scroll Left To View More
          Details
        </TableCaption>
        <TableHeader className="bg-white bg-opacity-50">
          <TableRow>
            <TableHead className="text-[#1A4862] text-opacity-100 font-extrabold lg:text-lg">
              Name
            </TableHead>
            <TableHead className="text-[#1A4862] lg:px-0 px-2 text-opacity-100 font-extrabold lg:text-lg">
              Model
            </TableHead>
            <TableHead className="text-[#1A4862] text-opacity-100 font-extrabold lg:text-lg">
              Brand
            </TableHead>
            <TableHead className="text-[#1A4862] text-opacity-100 px-2 font-extrabold lg:text-lg">
              Price (Hourly)
            </TableHead>
            <TableHead className="text-[#1A4862]  text-opacity-100 px-5 font-extrabold lg:text-lg text-center">
              <h1 className="text-center">Manage</h1>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bikeData?.map((bike: TBike) => (
            <TableRow
              key={bike._id}
              className="hover:bg-[#1A4862] bg-[#D7DFA3] bg-opacity-35 font-bold"
            >
              <TableCell className="font-medium">{bike.name}</TableCell>
              <TableCell>{bike.model}</TableCell>
              <TableCell>{bike.brand}</TableCell>
              <TableCell>{bike.pricePerHour} BDT</TableCell>
              <TableCell className="text-right">
                <div className="flex gap-4 items-center justify-center">
                  {/* Update Dialog */}

                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="py-2 px-5 bg-[#428c34] text-white border-2 hover:bg-[#D7DFA3] hover:text-[#1A4862]">
                        Update
                      </button>
                    </DialogTrigger>
                    <DialogContent className="w-full sm:min-w-[420px] bg-[#1A4862] bg-opacity-75 text-white">
                      <DialogHeader>
                        <DialogTitle>Update Bike</DialogTitle>
                        <DialogDescription className="text-[#D7DFA3] font-bold text-opacity-70">
                          Update Bike Informations
                        </DialogDescription>
                      </DialogHeader>
                      <form
                        onSubmit={handleSubmit((data) =>
                          handleUpdateBike(data, bike._id as string)
                        )}
                        className="grid gap-4 py-4"
                      >
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Name
                          </Label>
                          <Input
                            id="name"
                            defaultValue={bike.name}
                            {...register("name")}
                            className="col-span-3 bg-[#D7DFA3] opacity-80 text-[#1A4862] font-bold rounded-none"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="brand" className="text-right">
                            Brand
                          </Label>
                          <Input
                            id="brand"
                            defaultValue={bike.brand}
                            {...register("brand")}
                            className="col-span-3 bg-[#D7DFA3] opacity-80 text-[#1A4862] font-bold rounded-none"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="model" className="text-right">
                            Model
                          </Label>
                          <Input
                            id="model"
                            defaultValue={bike.model}
                            {...register("model")}
                            className="col-span-3 bg-[#D7DFA3] opacity-80 text-[#1A4862] font-bold rounded-none"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="year" className="text-right">
                            Year
                          </Label>
                          <Input
                            id="year"
                            defaultValue={bike.year}
                            {...register("year")}
                            className="col-span-3 bg-[#D7DFA3] opacity-80 text-[#1A4862] font-bold rounded-none"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="image" className="text-right">
                            Image (URL)
                          </Label>
                          <Input
                            id="image"
                            defaultValue={bike.image}
                            {...register("image")}
                            className="col-span-3 bg-[#D7DFA3] opacity-80 text-[#1A4862] font-bold rounded-none"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="pricePerHour" className="text-right">
                            Price (Hour)
                          </Label>
                          <Input
                            id="pricePerHour"
                            defaultValue={bike.pricePerHour}
                            {...register("pricePerHour")}
                            className="col-span-3 bg-[#D7DFA3] opacity-80 text-[#1A4862] font-bold rounded-none"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="description" className="text-right">
                            Description
                          </Label>
                          <textarea
                            id="description"
                            defaultValue={bike.description}
                            {...register("description")}
                            className="col-span-3 pl-2 bg-[#D7DFA3] opacity-80 text-[#1A4862] font-bold rounded-none"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="cc" className="text-right">
                            CC
                          </Label>
                          <Input
                            id="cc"
                            defaultValue={bike.cc}
                            {...register("cc")}
                            className="col-span-3 bg-[#D7DFA3] opacity-80 text-[#1A4862] font-bold rounded-none"
                          />
                        </div>
                        <DialogFooter>
                          <Button
                            type="submit"
                            className="bg-[#D7DFA3] text-[#1A4862] font-bold rounded-none hover:font-extrabold hover:text-white border-2 hover:bg-[#D7DFA3] hover:bg-opacity-40"
                          >
                            Update Bike
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>

                  {/* Delete Dialog */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="py-2 px-5 bg-[#db3c30] font-extrabold text-white border-2 hover:text-[#D7DFA3]">
                        Delete
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-[#db3c30] bg-opacity-80">
                      <DialogHeader>
                        <DialogTitle className="text-white">
                          Delete Bike
                        </DialogTitle>
                        <DialogDescription className="text-white">
                          Delete{" "}
                          <span className="font-extrabold text-[#D7DFA3]">
                            {" "}
                            {bike.name}{" "}
                          </span>{" "}
                          from Bond Bike Rental
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <h1 className="text-center text-3xl font-bold text-[#D7DFA3]">
                          ARE YOU SURE ?{" "}
                        </h1>
                      </div>
                      <DialogFooter>
                        <Button
                          type="submit"
                          onClick={() => handleDeleteBike(bike?._id as string)}
                          className="bg-[#D7DFA3] text-[#1A4862] font-bold border-[#1A4862] rounded-none hover:font-extrabold hover:text-white border-2 hover:bg-[#D7DFA3] hover:bg-opacity-40"
                        >
                          Delete Bike
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BikeManagement;

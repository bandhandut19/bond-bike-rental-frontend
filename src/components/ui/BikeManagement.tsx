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
  useDeleteBikeMutation,
  useGetAllBikesQuery,
  useUpdateBikeMutation,
} from "@/redux/Bikes/bikesApi";
import { TBike } from "@/types";
import { Button } from "@/components/ui/button";
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
import { toast } from "sonner";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectLabel } from "@radix-ui/react-select";
const BikeManagement = () => {
  // const { data } = useGetAllBikesQuery({});
  const [deleteBike] = useDeleteBikeMutation();
  const [updateBike] = useUpdateBikeMutation();
  const [selectedBike, setSelectedBike] = useState<TBike | null>(null);
  // const bikeData = data?.data;
  const { register, handleSubmit, reset } = useForm<TBike>();
  const handleDeleteBike = async (id: string) => {
    const res = await deleteBike(id);
    const message = res?.data?.message;
    toast(message);
  };
  const openUpdateModal = (bike: TBike) => {
    setSelectedBike(bike);
    reset(bike); // resetting with current bike data
  };
  const handleUpdateBike = async (data: TBike, id: string) => {
    console.log(id);
    const modifiedData = {
      ...data,
      pricePerHour: parseInt(data?.pricePerHour as unknown as string, 10),
      year: parseInt(data?.year as unknown as string, 10),
      cc: parseInt(data?.cc as unknown as string, 10),
    };
    const res = await updateBike({ updatedBike: modifiedData, id });
    const message = res?.data?.message;
    toast(message);
  };

  // search functinalities
  const [searchByBrand, setBrandName] = useState("");
  const [searchByModel, setModelName] = useState("");
  const [searchByAvailability, setAvailability] = useState("");
  const { data, isLoading } = useGetAllBikesQuery({
    searchByBrand,
    searchByModel,
    searchByAvailability,
  });
  const { data: allBikeData } = useGetAllBikesQuery({});
  const exactData = allBikeData?.data || [];
  const bikeData: TBike[] = data?.data;
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const handleBrand = (value: string) => {
    setBrandName(value);
  };
  const handleModel = (value: string) => {
    setModelName(value);
  };
  const handleAvailability = (value: string) => {
    setAvailability(value);
  };
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBrandName("");
    setModelName("");
    setAvailability("");
  };
  const uniqueBrands = Array.from(
    new Set(exactData?.map((bike: TBike) => bike.brand))
  );
  const uniqueModels = Array.from(
    new Set(bikeData?.map((bike: TBike) => bike.model))
  );
  const filteredData = exactData.filter((bike: TBike) => {
    const matchesBrand = searchByBrand ? bike.brand === searchByBrand : true;
    const matchesModel = searchByModel ? bike.model === searchByModel : true;
    const matchesAvailability =
      searchByAvailability === "Available"
        ? bike.isAvailable
        : searchByAvailability === "Not Available"
        ? !bike.isAvailable
        : true;

    return matchesBrand && matchesModel && matchesAvailability;
  });
  return (
    <>
      <h1 className="text-center text-2xl  lg:text-4xl mt-5 font-extrabold">
        Bike Management
      </h1>
      <div className="mx-auto lg:w-4/5 mb-5 w-full md:items-center flex flex-col lg:gap-5 gap-1 bg-gradient-to-tr border-2 to-[#D7DFA3] from-[#1A4862] py-5 px-2 mt-5">
        <div className="w-full">
          <h1 className="text-4xl font-bold lg:text-[#1A4862] text-[#D7DFA3] mb-5 mt-3 text-center">
            Search Bikes
          </h1>
          <form
            onSubmit={handleFormSubmit}
            className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-5 text-center lg:text-left items-center justify-center py-2 px-2"
          >
            <div>
              <Select value={searchByBrand} onValueChange={handleBrand}>
                <SelectTrigger className="w-full bg-[#1A4862] text-[#D7DFA3]">
                  <SelectValue placeholder="Filter By Brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Brands</SelectLabel>
                    {/* only unique bike brands will be added dynamically*/}
                    {uniqueBrands && uniqueBrands.length > 0 ? (
                      uniqueBrands.map((brand, index) => (
                        <SelectItem key={index} value={brand as string}>
                          {brand as string}
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem key="no-brands" value="no-brands" disabled>
                        No Brands Available
                      </SelectItem>
                    )}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={searchByModel} onValueChange={handleModel}>
                <SelectTrigger className="w-full bg-[#1A4862] text-[#D7DFA3]">
                  <SelectValue placeholder="Filter By Model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Models</SelectLabel>
                    {/* only unique bike brands will be added dynamically*/}
                    {uniqueModels && uniqueModels.length > 0 ? (
                      uniqueModels.map((model) => (
                        <SelectItem
                          key={model as string}
                          value={model as string}
                        >
                          {model as string}
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem key="no-models" value="no-models" disabled>
                        No Models Available
                      </SelectItem>
                    )}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select
                value={searchByAvailability}
                onValueChange={handleAvailability}
              >
                <SelectTrigger className="w-full bg-[#1A4862] text-[#D7DFA3]">
                  <SelectValue placeholder="Filter By Availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Availability</SelectLabel>
                    <SelectItem value="Available">Available</SelectItem>
                    <SelectItem value="Not Available">Not Available</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="lg:col-span-2">
              <button
                type="submit"
                className="bg-[#1A4862] text-[#D7DFA3] w-full py-2 px-4 hover:text-[#1A4862] hover:bg-[#D7DFA3] hover:font-extrabold font-semibold"
              >
                Clear Filters
              </button>
            </div>
          </form>
        </div>
        <Table>
          <TableCaption className="text-white text-left py-2 px-1 md:hidden lg:hidden font-extrabold text-sm border-2">
            <span className="text-[#D7DFA3]">Tips: </span>Scroll Left To View
            More Details
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
            {filteredData && filteredData.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center font-bold lg:text-xl"
                >
                  No data found..Try filtering anything else
                </TableCell>
              </TableRow>
            ) : (
              filteredData?.map((bike: TBike) => (
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

                      <Dialog
                        onOpenChange={(open) =>
                          open ? setSelectedBike(bike) : reset()
                        }
                      >
                        <DialogTrigger asChild>
                          <button
                            className="py-2 px-5 bg-[#428c34] text-white border-2 hover:bg-[#D7DFA3] hover:text-[#1A4862]"
                            onClick={() => openUpdateModal(bike)} // Updating modal with bike data
                          >
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
                              handleUpdateBike(
                                data,
                                selectedBike?._id as string
                              )
                            )}
                            className="grid gap-4 py-4"
                          >
                            <div className="grid grid-cols-4 items-center gap-4">
                              <label htmlFor="name" className="text-right">
                                Name
                              </label>
                              <Input
                                id="name"
                                defaultValue={selectedBike?.name}
                                {...register("name")}
                                className="col-span-3 bg-[#D7DFA3] opacity-80 text-[#1A4862] font-bold rounded-none"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <label htmlFor="brand" className="text-right">
                                Brand
                              </label>
                              <Input
                                id="brand"
                                defaultValue={selectedBike?.brand}
                                {...register("brand")}
                                className="col-span-3 bg-[#D7DFA3] opacity-80 text-[#1A4862] font-bold rounded-none"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <label htmlFor="model" className="text-right">
                                Model
                              </label>
                              <Input
                                id="model"
                                defaultValue={selectedBike?.model}
                                {...register("model")}
                                className="col-span-3 bg-[#D7DFA3] opacity-80 text-[#1A4862] font-bold rounded-none"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <label htmlFor="year" className="text-right">
                                Year
                              </label>
                              <Input
                                id="year"
                                defaultValue={selectedBike?.year}
                                {...register("year")}
                                className="col-span-3 bg-[#D7DFA3] opacity-80 text-[#1A4862] font-bold rounded-none"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <label htmlFor="image" className="text-right">
                                Image (URL)
                              </label>
                              <Input
                                id="image"
                                defaultValue={selectedBike?.image}
                                {...register("image")}
                                className="col-span-3 bg-[#D7DFA3] opacity-80 text-[#1A4862] font-bold rounded-none"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <label
                                htmlFor="pricePerHour"
                                className="text-right"
                              >
                                Price (Hour)
                              </label>
                              <Input
                                id="pricePerHour"
                                defaultValue={selectedBike?.pricePerHour}
                                {...register("pricePerHour")}
                                className="col-span-3 bg-[#D7DFA3] opacity-80 text-[#1A4862] font-bold rounded-none"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <label
                                htmlFor="description"
                                className="text-right"
                              >
                                Description
                              </label>
                              <textarea
                                id="description"
                                defaultValue={selectedBike?.description}
                                {...register("description")}
                                className="col-span-3 pl-2 bg-[#D7DFA3] opacity-80 text-[#1A4862] font-bold rounded-none"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <label htmlFor="cc" className="text-right">
                                CC
                              </label>
                              <Input
                                id="cc"
                                defaultValue={selectedBike?.cc}
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
                              onClick={() =>
                                handleDeleteBike(bike?._id as string)
                              }
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
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default BikeManagement;

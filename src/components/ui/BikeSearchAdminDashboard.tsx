import { useState } from "react";
import ButtonDefault from "./buttonDefault";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TBike } from "@/types";
import { useForm } from "react-hook-form";
import { useCreateBikeMutation } from "@/redux/Bikes/bikesApi";
import { toast } from "sonner";

const BikeSearchAdminDashboard = () => {
  const [searchName, setSearchName] = useState("");
  const { register, handleSubmit, reset } = useForm<TBike>();
  const [createBike] = useCreateBikeMutation();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
  };
  const handleCreateBike = async (data: TBike) => {
    const modifiedData = {
      ...data, // Keeping other data fields unchanged
      pricePerHour: parseInt(data.pricePerHour as unknown as string, 10),
      year: parseInt(data.year as unknown as string, 10),
      cc: parseInt(data.cc as unknown as string, 10),
    };
    const res = await createBike(modifiedData);
    const message = res?.data?.message as string;
    toast(message);
    reset();
    console.log(res);
  };
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchName("");
  };
  return (
    <div>
      <h1 className="text-4xl font-bold lg:text-[#1A4862] mb-5 mt-3 text-center">
        All Bikes List
      </h1>
      <form
        onSubmit={handleSearchSubmit}
        className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-5 text-center lg:text-left items-center justify-center py-2 px-2"
      >
        <div>
          <Input
            className="bg-[#1A4862] bg-opacity-80 text-opacity-100 font-semibold text-[#D7DFA3] placeholder:text-opacity-80 placeholder:text-[#D7DFA3] placeholder:font-bold"
            placeholder="Search by name"
            onChange={handleChange}
            value={searchName}
          ></Input>
        </div>
        <div>
          <Input></Input>
        </div>
        <div>
          <Input></Input>
        </div>
        <div>
          <button type="submit">
            <ButtonDefault buttontext="Clear Filters"></ButtonDefault>
          </button>
        </div>
        <div className="text-center py-2">
          <Dialog>
            <DialogTrigger asChild>
              <button className=" w-full bg-[#1A4862] border-2 text-center py-2 hover:font-extrabold hover:bg-[#D7DFA3] hover:border-[#1A4862] hover:text-[#1A4862]">
                Create Bike
              </button>
            </DialogTrigger>
            <DialogContent className="w-full sm:min-w-[420px] bg-[#1A4862] bg-opacity-75 text-white">
              <DialogHeader>
                <DialogTitle>Create Bike</DialogTitle>
                <DialogDescription className="text-[#D7DFA3] font-bold text-opacity-70">
                  Add more bikes for customers to have their dream ride
                </DialogDescription>
              </DialogHeader>
              <form
                onSubmit={handleSubmit(handleCreateBike)}
                className="grid gap-4 py-4"
              >
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    required
                    placeholder="Enter the name of the Bike"
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
                    required
                    placeholder="Enter the Brand Name"
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
                    required
                    placeholder="Enter the Model Name"
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
                    required
                    type="number"
                    placeholder="Enter the Year"
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
                    required
                    placeholder="Enter the Image URL"
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
                    required
                    type="number"
                    placeholder="Enter the Price Per Hour"
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
                    required
                    placeholder="Enter the Description"
                    {...register("description")}
                    className="col-span-3 bg-[#D7DFA3] opacity-80 text-[#1A4862] font-bold rounded-none"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="cc" className="text-right">
                    CC
                  </Label>
                  <Input
                    id="cc"
                    required
                    type="number"
                    placeholder="Enter the the CC of the Bike"
                    {...register("cc")}
                    className="col-span-3 bg-[#D7DFA3] opacity-80 text-[#1A4862] font-bold rounded-none"
                  />
                </div>
                <DialogFooter>
                  <Button
                    type="submit"
                    className="bg-[#D7DFA3] text-[#1A4862] font-bold rounded-none hover:font-extrabold hover:text-white border-2 hover:bg-[#D7DFA3] hover:bg-opacity-40"
                  >
                    Create Bike
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </form>
    </div>
  );
};

export default BikeSearchAdminDashboard;

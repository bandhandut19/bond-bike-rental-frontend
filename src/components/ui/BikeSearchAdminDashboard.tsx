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

const BikeSearchAdminDashboard = () => {
  const [searchName, setSearchName] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchName("");
  };
  return (
    <div>
      <h1 className="text-4xl font-bold lg:text-[#1A4862] mb-5 mt-3 text-center">
        All Bikes List
      </h1>
      <form
        onSubmit={handleSubmit}
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
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter the name of the Bike"
                    className="col-span-3 bg-[#D7DFA3] opacity-80 text-[#1A4862] font-bold rounded-none"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="brand" className="text-right">
                    Brand
                  </Label>
                  <Input
                    id="brand"
                    placeholder="Enter the Brand Name"
                    className="col-span-3 bg-[#D7DFA3] opacity-80 text-[#1A4862] font-bold rounded-none"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="model" className="text-right">
                    Model
                  </Label>
                  <Input
                    id="model"
                    placeholder="Enter the Model Name"
                    className="col-span-3 bg-[#D7DFA3] opacity-80 text-[#1A4862] font-bold rounded-none"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="year" className="text-right">
                    Year
                  </Label>
                  <Input
                    id="year"
                    placeholder="Enter the Year"
                    className="col-span-3 bg-[#D7DFA3] opacity-80 text-[#1A4862] font-bold rounded-none"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="image" className="text-right">
                    Image (URL)
                  </Label>
                  <Input
                    id="image"
                    placeholder="Enter the Image URL"
                    className="col-span-3 bg-[#D7DFA3] opacity-80 text-[#1A4862] font-bold rounded-none"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="pricePerHour" className="text-right">
                    Price (Hour)
                  </Label>
                  <Input
                    id="pricePerHour"
                    placeholder="Enter the Price Per Hour"
                    className="col-span-3 bg-[#D7DFA3] opacity-80 text-[#1A4862] font-bold rounded-none"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Input
                    id="description"
                    placeholder="Enter the Description"
                    className="col-span-3 bg-[#D7DFA3] opacity-80 text-[#1A4862] font-bold rounded-none"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="cc" className="text-right">
                    CC
                  </Label>
                  <Input
                    id="cc"
                    placeholder="Enter the the CC of the Bike"
                    className="col-span-3 bg-[#D7DFA3] opacity-80 text-[#1A4862] font-bold rounded-none"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  className="bg-[#D7DFA3] text-[#1A4862] font-bold rounded-none hover:font-extrabold hover:text-white border-2 hover:bg-[#D7DFA3] hover:bg-opacity-40"
                >
                  Create Bike
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </form>
    </div>
  );
};

export default BikeSearchAdminDashboard;

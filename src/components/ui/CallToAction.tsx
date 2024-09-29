import { useState } from "react";

import { Input } from "./input";
import { useGetAllBikesQuery } from "@/redux/Bikes/bikesApi";
import { TBike } from "@/types";
import BikeCard from "./BikeCard";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectLabel } from "@radix-ui/react-select";
const CallToAction = () => {
  const [searchByName, setSearchName] = useState("");
  const [searchByBrand, setBrandName] = useState("");
  console.log(searchByName);
  const { data, isLoading } = useGetAllBikesQuery({
    searchByName,
    searchByBrand,
  });
  const bikeData = data?.data;
  if (isLoading) {
    <div>Loading...</div>;
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
  };
  const handleBrand = (value: string) => {
    setBrandName(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchName("");
    setBrandName("");
  };
  const uniqueBrands = Array.from(
    new Set(bikeData?.map((bike: TBike) => bike.brand))
  );
  return (
    <div>
      <h1 className="text-4xl font-bold lg:text-[#1A4862] text-[#D7DFA3] mb-5 mt-3 text-center">
        Search Your Aqauinted Bike
      </h1>
      <form
        onSubmit={handleSubmit}
        className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-5 text-center lg:text-left items-center justify-center py-2 px-2"
      >
        <div>
          <Input
            className="bg-[#1A4862] bg-opacity-80 text-opacity-100 font-semibold text-[#D7DFA3] placeholder:text-opacity-80 placeholder:text-[#D7DFA3] placeholder:font-bold"
            placeholder="Search by name"
            // onChange={handleChange}
            onChange={handleChange}
            value={searchByName}
          ></Input>
        </div>
        <div>
          <Select value={searchByBrand} onValueChange={handleBrand}>
            <SelectTrigger className="w-full bg-[#1A4862] text-[#D7DFA3]">
              <SelectValue placeholder="Select Your Desired Brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Brands</SelectLabel>
                {/* only unique bike brands will be added dynamically*/}
                {uniqueBrands && uniqueBrands.length > 0 ? (
                  uniqueBrands.map((brand) => (
                    <SelectItem key={brand as string} value={brand as string}>
                      {brand as string}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="">No Brands Available</SelectItem>
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Input></Input>
        </div>
        <div>
          <button
            type="submit"
            className="bg-[#1A4862] text-[#D7DFA3] py-2 px-4 hover:text-[#1A4862] hover:bg-[#D7DFA3] hover:font-extrabold font-semibold"
          >
            Clear Filters
          </button>
        </div>
      </form>
      <div className="grid grid-cols-3 gap-5 mt-10">
        {searchByName === ""
          ? ""
          : bikeData?.map((bike: TBike) => (
              <BikeCard key={bike?._id} bike={bike}></BikeCard>
            ))}
        {searchByBrand === ""
          ? ""
          : bikeData?.map((bike: TBike) => (
              <BikeCard key={bike?._id} bike={bike}></BikeCard>
            ))}
      </div>
    </div>
  );
};

export default CallToAction;

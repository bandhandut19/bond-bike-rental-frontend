import { useState } from "react";

import { useGetAllBikesQuery } from "@/redux/Bikes/bikesApi";
import { TBike } from "@/types";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectLabel } from "@radix-ui/react-select";
import { Input } from "../ui/input";
import BikeCard from "../ui/BikeCard";
const AllBikes = () => {
  const [searchByName, setSearchName] = useState("");
  const [searchByBrand, setBrandName] = useState("");
  const [searchByModel, setModelName] = useState("");
  const [searchByAvailability, setAvailability] = useState("");
  const { data, isLoading } = useGetAllBikesQuery({
    searchByName,
    searchByBrand,
    searchByModel,
    searchByAvailability,
  });
  const { data: brandName } = useGetAllBikesQuery({});
  const brandData = brandName?.data;
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
  const handleModel = (value: string) => {
    setModelName(value);
  };
  const handleAvailability = (value: string) => {
    setAvailability(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchName("");
    setBrandName("");
    setModelName("");
    setAvailability("");
  };
  const uniqueBrands = Array.from(
    new Set(brandData?.map((bike: TBike) => bike.brand))
  );
  const uniqueModels = Array.from(
    new Set(bikeData?.map((bike: TBike) => bike.model))
  );
  const filteredBikes = bikeData?.filter((bike: TBike) => {
    const matchesName =
      searchByName === "" ||
      bike.name.toLowerCase().includes(searchByName.toLowerCase());
    const matchesBrand =
      searchByBrand === "" ||
      bike.brand.toLowerCase() === searchByBrand.toLowerCase();
    const matchesModel =
      searchByModel === "" ||
      bike.model.toLowerCase().includes(searchByModel.toLowerCase());

    return matchesName && matchesBrand && matchesModel;
  });
  return (
    <>
      <div className="pt-5 mb-10 text-center text-4xl font-extrabold text-[#1A4862] bg-[#D7DFA3] pb-5">
        <h1>All Bikes</h1>
      </div>
      <div className="w-4/5 mx-auto mb-10">
        <h1 className="text-4xl font-bold lg:text-[#D7DFA3] text-[#D7DFA3] mb-5 mt-3 text-center">
          Search Your Desired Bikes
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
                <SelectValue placeholder="Search By Your Desired Brand" />
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
                <SelectValue placeholder="Search By Your Desired Model" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Models</SelectLabel>
                  {/* only unique bike brands will be added dynamically*/}
                  {uniqueModels && uniqueModels.length > 0 ? (
                    uniqueModels.map((model) => (
                      <SelectItem key={model as string} value={model as string}>
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
                <SelectValue placeholder="Search Availability" />
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
              className="bg-[#1A4862] w-full text-[#D7DFA3] py-2 px-4 hover:text-[#1A4862] hover:bg-[#D7DFA3] hover:font-extrabold font-semibold"
            >
              Clear Filters
            </button>
          </div>
        </form>
        <div className="grid lg:grid-cols-3 grid-cols-1  gap-5 mt-10">
          {filteredBikes?.length > 0 ? (
            filteredBikes.map((bike: TBike) => (
              <BikeCard key={bike?._id} bike={bike} />
            ))
          ) : (
            <div>No bikes found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default AllBikes;

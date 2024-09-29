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
  const [searchByModel, setModelName] = useState("");
  const { data, isLoading } = useGetAllBikesQuery({
    searchByName,
    searchByBrand,
    searchByModel,
  });
  const { data: brandName } = useGetAllBikesQuery({});
  const brandData = brandName?.data;
  const bikeData = data?.data;
  if (isLoading) {
    <div>Loading...</div>;
  }
  const hasSearchValues =
    searchByName !== "" || searchByBrand !== "" || searchByModel !== "";
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
  };
  const handleBrand = (value: string) => {
    setBrandName(value);
  };
  const handleModel = (value: string) => {
    setModelName(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchName("");
    setBrandName("");
    setModelName("");
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
              <SelectValue placeholder="Search By Your Desired Brand" />
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
                  <SelectItem value="">No Models Available</SelectItem>
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
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
        {hasSearchValues ? (
          filteredBikes?.length > 0 ? (
            filteredBikes.map((bike: TBike) => (
              <BikeCard key={bike?._id} bike={bike} />
            ))
          ) : (
            <div>No bikes found</div>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CallToAction;

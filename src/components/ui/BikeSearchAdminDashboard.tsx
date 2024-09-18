import { useState } from "react";
import ButtonDefault from "./buttonDefault";

import { Input } from "./input";

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
          <button className=" w-full bg-[#1A4862] border-2 text-center py-2 hover:font-extrabold hover:bg-[#D7DFA3] hover:border-[#1A4862] hover:text-[#1A4862]">
            Create Bike
          </button>
        </div>
      </form>
    </div>
  );
};

export default BikeSearchAdminDashboard;

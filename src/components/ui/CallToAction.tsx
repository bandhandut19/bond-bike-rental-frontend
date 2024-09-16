import { useState } from "react";
import ButtonDefault from "./buttonDefault";

import { Input } from "./input";

const CallToAction = () => {
  const [searchName, setSearchName] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold lg:text-[#1A4862] text-[#D7DFA3] mb-5 mt-3 text-center">
        Search Your Aqauinted Bike
      </h1>
      <form className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-5 text-center lg:text-left items-center justify-center py-2 px-2">
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
          <ButtonDefault buttontext="Clear Filters"></ButtonDefault>
        </div>
      </form>
    </div>
  );
};

export default CallToAction;

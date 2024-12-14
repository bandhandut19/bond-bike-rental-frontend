import { TOffer } from "@/types";
import offers from "../../../public/offers.json";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <div>
      <div className="pb-10">
        <h1 className="text-4xl py-2 font-bold bg-[#1A4862] text-white lg:font-extrabold mb-5 mt-3 text-center">
          Offers To Grab Right Now !
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 lg:gap-10 items-center">
        {offers.slice(0, 4).map((offer: TOffer) => (
          <div
            key={offer.id}
            className="card bg-[#1A4862] border-2 border-white hover:border-[#1A4862] mb-2 rounded shadow-md text-center cursor-pointer  hover:scale-105 hover:duration-600"
          >
            <div className="">
              <img src={offer.image} alt="offers" />
            </div>
            <div className="card-body flex text-white items-center justify-center">
              <h2 className="card-title -mt-5 flex-1">{offer.title}</h2>
              <p className="flex-2">{offer.description}</p>
            </div>
            <div className="flex items-center justify-center mb-5">
              <Button className="hover:scale-125 hover:bg-[#D7DFA3] bg-[#D7DFA3] -mt-5 text-black animate-pulse">
                <Link to={"/allbikes"}>Hurry Up ! Take A Rent Now..</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;

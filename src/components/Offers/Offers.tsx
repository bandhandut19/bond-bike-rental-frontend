import { TOffer } from "@/types";
import offers from "../../../public/offers.json";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <div>
      <div className="pb-10">
        <h1 className="text-4xl py-2 font-bold text-white lg:font-extrabold mb-5 mt-3 text-center">
          Offers To Grab Right Now !
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 lg:gap-10 items-center">
        {offers.slice(0, 4).map((offer: TOffer) => (
          <div
            key={offer.id}
            className="card bg-slate-400 border-2 border-white mb-4 rounded shadow-md text-center cursor-pointer  hover:scale-110 duration-300"
          >
            <div className="">
              <img src={offer.image} alt="Shoes" />
            </div>
            <div className="card-body flex">
              <h2 className="card-title flex-1">{offer.title}</h2>
              <p className="flex-2">{offer.description}</p>
            </div>
            <div className="flex items-center justify-center mb-5">
              <Button className="hover:bg-[#1A4862] hover:text-white bg-[#D7DFA3] text-black animate-pulse">
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

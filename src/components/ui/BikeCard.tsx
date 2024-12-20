import { TBike } from "@/types";
import ButtonCard from "./buttonCard";

const BikeCard = ({ bike }: { bike: TBike }) => {
  const { name, image, brand, isAvailable, pricePerHour } = bike;

  return (
    <div className="card rounded-none card-compact bg-[#D7DFA3] hover:scale-105  border-2  hover:border-[#1A4862] text-[#1A4862] hover:duration-400  shadow-lg shadow-[#D7DFA3]">
      <figure className="flex justify-center">
        <img src={image} alt="Bike Image" className="max-w-full h-auto" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title ">{name}</h2>
        <div>
          <div>
            {/* <p>{description}</p> */}
            <span className="text-lg font-semibold">Brand: </span>{" "}
            <span className="text-xl font-bold"> {brand}</span>
          </div>
          <div>
            <span className="text-lg font-semibold ">
              Price <span className="text-sm ">(Per Hour)</span>:{" "}
            </span>{" "}
            <span className="text-xl font-bold text-[#428c34]">
              {" "}
              {pricePerHour} BDT
            </span>
          </div>
        </div>
        <div className=" justify-center flex flex-col">
          <ButtonCard
            buttontext={"View Details"}
            id={bike._id as string}
          ></ButtonCard>

          {/* is bike available or not, display button */}
          {isAvailable ? (
            <button className="bg-[#428c34] border-2 text-white hover:text-[#1A4862] py-2 px-4  hover:bg-[#6eea57] hover:bg-opacity-85  hover:border-[#1A4862] hover:font-extrabold hover:border-2 font-semibold">
              Available For Booking
            </button>
          ) : (
            <button
              disabled
              className="bg-[#db3c30] border-2 text-white  hover:font-extrabold py-2 px-4  font-semibold"
            >
              Not Available For Booking
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BikeCard;

import { TWhyChooseUs } from "@/types";

const WhyChooseUsCard = ({ objective }: { objective: TWhyChooseUs }) => {
  const { title, description } = objective;
  return (
    <div className="card hover:scale-105 hover:duration-300 rounded-none card-compact hover:border-4 hover:border-[#30DB3C] bg-[#1A4862] border-2 text-[#D7DFA3]  shadow-md  shadow-white ">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;

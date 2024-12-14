import { TWhyChooseUs } from "@/types";

const WhyChooseUsCard = ({ objective }: { objective: TWhyChooseUs }) => {
  const { title, description } = objective;
  return (
    <div className="card hover:-translate-y-4 hover:duration-400 rounded-none card-compact  hover:border-2 hover:border-[#1A4862] bg-[#D7DFA3] border-2 text-[#1A4862]  shadow-md  shadow-white ">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;

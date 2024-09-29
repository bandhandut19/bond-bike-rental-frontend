import { TWhyChooseUs } from "@/types";

const WhyChooseUsCard = ({ objective }: { objective: TWhyChooseUs }) => {
  const { title, description } = objective;
  return (
    <div className="card hover:-translate-y-5 rounded-none card-compact hover:bg-[#D7DFA3] hover:text-[#1A4862] bg-[#1A4862] border-2 text-[#D7DFA3]  shadow-md  shadow-white ">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;

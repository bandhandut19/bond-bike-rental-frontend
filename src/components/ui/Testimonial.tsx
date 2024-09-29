import { TTestimonials } from "../../types/index";
const Testimonial = ({ testimonial }: { testimonial: TTestimonials }) => {
  const { name, quote } = testimonial;
  return (
    <div className="card hover:-translate-y-3 rounded-none card-compact bg-[#D7DFA3] border-2 text-[#1A4862]  shadow-lg shadow-[#D7DFA3]">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{quote}</p>
      </div>
    </div>
  );
};

export default Testimonial;

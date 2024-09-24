import customerQuotes from "../../../public/satisfiedCustomers.json";
import Testimonial from "../ui/Testimonial";
const Testimonials = () => {
  return (
    <>
      <h1 className="text-4xl font-bold lg:text-[#1A4862] text-[#D7DFA3] mb-5 mt-3 text-center">
        Customer Testimonials
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-10 mb-10">
        {customerQuotes.map((quote) => (
          <Testimonial testimonial={quote}></Testimonial>
        ))}
      </div>
    </>
  );
};

export default Testimonials;

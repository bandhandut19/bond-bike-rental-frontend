import objectives from "../../../public/whyChooseUs.json";
import WhyChooseUsCard from "../ui/WhyChooseUsCard";

const WhyChooseUs = () => {
  return (
    <>
      <h1 className="text-4xl font-bold bg-[#1A4862] py-2 text-white lg:font-extrabold mb-5 mt-3 text-center">
        Why Choose Us
      </h1>
      <div className="mt-10 mb-10 grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {objectives.map((objective) => (
          <WhyChooseUsCard
            key={objective?.id}
            objective={objective}
          ></WhyChooseUsCard>
        ))}
      </div>
    </>
  );
};

export default WhyChooseUs;

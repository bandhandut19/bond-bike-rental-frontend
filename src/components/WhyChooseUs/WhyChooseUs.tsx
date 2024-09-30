import objectives from "../../../public/whyChooseUs.json";
import WhyChooseUsCard from "../ui/WhyChooseUsCard";

const WhyChooseUs = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-white lg:font-extrabold mb-5 mt-3 text-center">
        Why Choose Us
      </h1>
      <div className="mt-10 mb-10 flex flex-col gap-8">
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

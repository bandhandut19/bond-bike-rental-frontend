// import OfferSection from "../OfferSection/OfferSection";

import ContactUs from "../ContactUs/ContactUs";
import FeaturedSection from "../FeaturedSection/FeaturedSection";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "../ui/Banner";
import CallToAction from "../ui/CallToAction";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div className="">
      {/* <OfferSection></OfferSection> */}
      <div className="mb-10">
        <Banner></Banner>
      </div>

      <div className="mx-auto  w-4/5 border-4 border-l-0 border-[#1A4862] border-r-0 border-b-0 rounded-md">
        <div className="">
          <CallToAction></CallToAction>
        </div>
        <div className="mt-20 border-4 border-l-0 border-[#1A4862] border-r-0 border-b-0 rounded-md">
          <FeaturedSection></FeaturedSection>
        </div>
        <div className="mt-20 border-4 border-l-0 border-[#1A4862] border-r-0 border-b-0 rounded-md">
          <Testimonials></Testimonials>
        </div>
        <div className="mt-20 border-4 border-l-0 border-[#1A4862] border-r-0 border-b-0 rounded-md">
          <WhyChooseUs></WhyChooseUs>
        </div>
        <div className="mt-20 border-4 border-l-0 border-[#1A4862] border-r-0 border-b-0 rounded-md">
          <ContactUs></ContactUs>
        </div>
      </div>
    </div>
  );
};

export default Home;

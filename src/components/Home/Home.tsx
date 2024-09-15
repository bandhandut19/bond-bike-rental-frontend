// import OfferSection from "../OfferSection/OfferSection";

import Banner from "../ui/Banner";
import CallToAction from "../ui/CallToAction";

const Home = () => {
  return (
    <div className="">
      {/* <OfferSection></OfferSection> */}
      <div className="mb-10">
        <Banner></Banner>
      </div>

      <div className="mx-auto w-4/5 border-4 border-l-0 border-[#1A4862] border-r-0 border-b-0 rounded-md">
        <CallToAction></CallToAction>
      </div>
    </div>
  );
};

export default Home;

import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
// import bannerVideo from "../../../public/coverr-bikers-driving-away-down-a-path-9981-1080p.mp4";
const bannerVideo = "/coverr-bikers-driving-away-down-a-path-9981-1080p.mp4";

const Banner = () => {
  return (
    <div className="">
      <div className="overflow-hidden z-1 h-auto">
        <ReactPlayer
          url={bannerVideo}
          playing
          loop
          muted
          width="auto"
          height="auto"
          controls={false}
        />
      </div>

      <div className=" bg-black z-2 top-[4rem] lg:top-[4.7rem] w-full absolute py-8 bg-opacity-40 lg:bg-opacity-15">
        <h1 className="text-center">
          <Link
            to={"/allbikes"}
            className="bg-[#D7DFA3] duration-400 bg-opacity-90 lg:text-xl text-sm animate-pulse hover:bg-[#1A4862] hover:text-[#D7DFA3] text-[#1A4862] font-extrabold py-4 px-4 lg:py-4 lg:px-10"
          >
            Rent a Bike Now !
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Banner;

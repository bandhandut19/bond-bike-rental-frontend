import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
//
const About = () => {
  //* Our Store Location Information

  // MISSION & VISION
  const missionStatement =
    "Our mission is to provide high-quality sporting goods that inspire and enable people to lead active and healthy lifestyles.";
  const visionStatement =
    "Our vision is to be the leading global retailer of sporting goods, known for our commitment to customer satisfaction, innovation, and community involvement.";
  //
  //CONTACT INFORMATION
  const contacts = {
    phone: "+880183383343",
    tollFree: "001 - 001 - 0001",
    fax: "010 - 101 - 1000",
  };
  const locations = {
    primaryOutletPart_1: "1234 Ojana Road, ",
    primaryOutletPart_2: "Merul Badda , Dhaka ",
  };
  const openHours = {
    days: "Saturday - Thursday",
    hours: "10am - 8pm",
  };

  //OUR TEAM
  const team = [
    {
      image: "https://i.postimg.cc/J4ZbsMdc/1684299110270.jpg",
      name: "Bondon Datta",
      designation: "Founder & CEO",
    },
    {
      image:
        "https://i.postimg.cc/QM2f20Bj/girl-with-long-hair-being-happy.jpg",
      name: "Maria Ray",
      designation: "Head of Rental Sales",
    },
    {
      image:
        "https://i.postimg.cc/8cVn6tDZ/portrait-young-african-american-man.jpg",
      name: "Jane Smith",
      designation: "Chief Marketing Officer",
    },
    {
      image:
        "https://i.postimg.cc/SsXprZBq/front-view-smiley-girl-looking-away.jpg",
      name: "Emily Davis",
      designation: "Bike Manager",
    },
  ];

  return (
    <div className="flex flex-col gap-16 mx-auto w-4/5 mt-10 mb-10">
      <section className="bg-[#D7DFA3] bg-opacity-20 p-10 text-white border-2">
        <h1 className="text-center text-4xl font-bold border-4 rounded-lg py-3 border-b-0 border-l-4 border-t-4 border-r-4 border-[#1A4862]">
          Bond Bike Rental
        </h1>
        <div className="mt-10 border-2 border-t-0 border-l-4 border-b-4 border-r-4  px-2 py-1 border-[#D7DFA3] border-opacity-70 rounded-md">
          <p className=" p-5 text-center font-bold text-xl">
            <span className="text-center">
              Welcome to Bond Bike Rental, your premier destination for
              high-quality bike rentals since September 2024.
            </span>
            <br />
            Our mission is to inspire active, healthy lifestyles by offering a
            diverse range of top-notch sports equipment and apparel. Founded
            with a passion for sports and a commitment to customer satisfaction,
            our expert team brings you the latest innovations and best products.
            Whether you’re a professional athlete or just starting your fitness
            journey, Bond Sports is here to support you. Experience our
            exceptional service and discover why Bond Sports is the trusted name
            in sporting goods.
          </p>
        </div>
      </section>

      <section className="bg-[#D7DFA3] bg-opacity-20 p-10 border-2">
        <h1 className="text-center lg:hidden text-white text-4xl font-bold border-4 py-3 border-b-0 border-l-4 rounded-lg border-t-4 border-r-4 border-[#1A4862]">
          Our Mission <br /> & <br /> Vision
        </h1>
        <h1 className="text-center hidden lg:block text-white text-4xl font-bold border-4 py-3 border-b-0 border-l-4 rounded-lg border-t-4 border-r-4 border-[#1A4862]">
          Our Mission & Vision
        </h1>
        <div className="mt-10 border-2 border-t-0 border-l-4 border-b-0 border-r-4  px-2 py-1 border-[#D7DFA3] border-opacity-70 rounded-md">
          <h1 className="text-center text-2xl font-bold text-[#D7DFA3]">
            -- Mission --
          </h1>
          <p className="p-5  text-center font-bold text-xl">
            {missionStatement}
          </p>
        </div>
        <div className="mt-10 border-2 border-t-0 border-l-4 border-b-4 border-r-4  px-2 py-1 border-[#D7DFA3] border-opacity-70 rounded-md">
          <h1 className="text-center text-2xl font-bold text-[#D7DFA3]">
            -- Vision --
          </h1>
          <p className="p-5 text-center font-semibold text-xl">
            {visionStatement}
          </p>
        </div>
      </section>

      <section className="bg-[#D7DFA3] bg-opacity-20 p-10 border-2 ">
        <h1 className="text-center text-white text-4xl font-bold border-4 py-4 border-b-0 border-l-4 rounded-lg border-t-4 border-r-4 border-[#1A4862]">
          Our Contact Information
        </h1>
        <div className="mt-10 border-2 border-t-0 border-l-4 border-b-4 border-r-4  px-2 py-1 border-[#D7DFA3] border-opacity-70 rounded-md">
          <div className="grid lg:grid-cols-2 gap-2 grid-cols-1 mt-10 py-2">
            <div className="flex flex-col gap-3 items-center justify-center">
              <FaPhoneAlt className="text-4xl text-green-600" />
              <h1 className="text-xl font-semibold flex-2">
                Let's Have a Chat On Sports!
              </h1>
              <ul className="flex-1 text-center">
                <li>
                  <span className=" font-semibold">Phone: </span>
                  {contacts.phone}
                </li>
                <li>
                  <span className="font-semibold">Toll-Free: </span>
                  {contacts.tollFree}
                </li>
                <li>
                  <span className=" font-semibold">Fax: </span>
                  {contacts.fax}
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3 items-center justify-center">
              <FaClock className="text-4xl text-[#D7DFA3]" />
              <h1 className="text-xl font-semibold flex-1">Open Hours!</h1>
              <ul className="text-center flex-1">
                <li>{openHours.days}</li>
                <li>{openHours.hours}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#D7DFA3] bg-opacity-20 p-10  border-2">
        <h1 className="text-center text-white text-4xl font-bold border-4 py-3 border-b-0 border-l-4 rounded-lg border-t-4 border-r-4 border-[#1A4862]">
          Our Team
        </h1>
        <div className="mt-10 border-2 border-t-0 border-l-4 border-b-4 border-r-4  px-2 py-3 border-[#D7DFA3] border-opacity-70 rounded-md">
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 mt-10 py-2">
            {team.map((member) => (
              <div className="text-center flex flex-col justify-center items-center rounded-full border-4 border-t-0 border-l-0 border-b-4 border-r-0  px-5 py-2 border-white">
                <div className="border-2 border-b-0 border-l-4 border-t-4 border-r-4 border-white rounded-full px-4 py-3 flex-2">
                  <img
                    className="rounded-full"
                    src={member.image}
                    width={"150rem"}
                    height={"50rem"}
                  ></img>
                </div>
                <div className="mt-3 px-16 flex-1 py-2">
                  <h1 className="font-bold">{member.name}</h1>
                  <h1>{member.designation}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#D7DFA3] bg-opacity-20 border-2 p-10">
        <h1 className="text-center text-white text-4xl font-bold border-4 py-3 border-b-0 border-l-4 rounded-lg border-t-4 border-r-4 border-[#1A4862]">
          Our Store Location
        </h1>
        <div className="mt-10 border-2 border-t-0 border-l-4 border-b-4 border-r-4  px-2 py-1 border-[#D7DFA3] border-opacity-70 rounded-md">
          <div className="grid   grid-cols-1 mt-10 py-2">
            <div className="flex flex-col gap-3 items-center justify-center">
              <FaLocationDot className="text-4xl text-red-600" />
              <h1 className="text-xl font-semibold flex-2">
                Visit Our Location!
              </h1>
              <ul className="text-center flex-1">
                <li>
                  <span>{locations.primaryOutletPart_1}</span>
                  <br />
                  <span>{locations.primaryOutletPart_2}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

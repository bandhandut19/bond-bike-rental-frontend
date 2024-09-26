import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
//
const About = () => {
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
      id: "1",
      image: "https://i.postimg.cc/J4ZbsMdc/1684299110270.jpg",
      name: "Bondon Datta",
      designation: "Founder & CEO",
    },
    {
      id: "2",
      image:
        "https://i.postimg.cc/QM2f20Bj/girl-with-long-hair-being-happy.jpg",
      name: "Maria Ray",
      designation: "Head of Rental Sales",
    },
    {
      id: "3",
      image:
        "https://i.postimg.cc/8cVn6tDZ/portrait-young-african-american-man.jpg",
      name: "Jane Smith",
      designation: "Chief Marketing Officer",
    },
    {
      id: "4",
      image:
        "https://i.postimg.cc/SsXprZBq/front-view-smiley-girl-looking-away.jpg",
      name: "Emily Davis",
      designation: "Bike Manager",
    },
  ];
  return (
    <div className="flex flex-col gap-16 mx-auto w-4/5 mt-10 mb-10">
      <section
        id="tag-lines"
        className="bg-[#D7DFA3] bg-opacity-20 p-10 text-white border-2"
      >
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
            At Bond Bike Rental, we aim to inspire active, healthy lifestyles by
            providing a diverse range of high-quality bikes and accessories for
            every rider. Founded with a passion for biking and a commitment to
            customer satisfaction, our knowledgeable team is dedicated to
            offering the latest models and top-notch gear. Whether you're a
            seasoned rider or just starting your biking journey, Bond Bike
            Rental is here to support you. Experience our exceptional service
            and discover why we are the trusted choice for bike rentals in the
            community.
          </p>
        </div>
      </section>

      <section
        id="mission"
        className="bg-[#D7DFA3] bg-opacity-20 p-10 border-2"
      >
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
          <p className="p-5  text-center font-semibold text-xl">
            Our mission is to provide high-quality bikes and accessories that
            inspire and enable people to lead active and healthy lifestyles
          </p>
        </div>
        <div className="mt-10 border-2 border-t-0 border-l-4 border-b-4 border-r-4  px-2 py-1 border-[#D7DFA3] border-opacity-70 rounded-md">
          <h1 className="text-center text-2xl font-bold text-[#D7DFA3]">
            -- Vision --
          </h1>
          <p className="p-5 text-center font-semibold text-xl">
            Our vision is to be the leading bike rental shop, known for our
            commitment to customer satisfaction, innovation, and community
            involvement
          </p>
        </div>
      </section>

      <section id="team" className="bg-[#D7DFA3] bg-opacity-20 p-10  border-2">
        <h1 className="text-center text-white text-4xl font-bold border-4 py-3 border-b-0 border-l-4 rounded-lg border-t-4 border-r-4 border-[#1A4862]">
          Our Team
        </h1>
        <div className="mt-10 border-2 border-t-0 border-l-4 border-b-4 border-r-4  px-2 py-3 border-[#D7DFA3] border-opacity-70 rounded-md">
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 mt-10 py-2">
            {team.map((member) => (
              <div
                key={member.id}
                className="text-center flex flex-col justify-center items-center rounded-full border-4 border-t-0 border-l-0 border-b-4 border-r-0  px-5 py-2 border-white"
              >
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

      <section
        id="mission"
        className="bg-[#D7DFA3] bg-opacity-20 p-10 border-2"
      >
        <h1 className="text-center lg:hidden text-white text-4xl font-bold border-4 py-3 border-b-0 border-l-4 rounded-lg border-t-4 border-r-4 border-[#1A4862]">
          Our History <br /> & <br /> Milestones
        </h1>
        <h1 className="text-center hidden lg:block text-white text-4xl font-bold border-4 py-3 border-b-0 border-l-4 rounded-lg border-t-4 border-r-4 border-[#1A4862]">
          Our History & Milestones
        </h1>
        <div className="mt-10 border-2 border-t-0 border-l-4 border-b-0 border-r-4  px-2 py-1 border-[#D7DFA3] border-opacity-70 rounded-md">
          <h1 className="text-center text-2xl font-bold text-[#D7DFA3]">
            -- History --
          </h1>
          <p className="p-5  text-center font-semibold text-xl">
            Founded in September'2024, Bond Bike Rental began with a simple
            goal: to make biking accessible to everyone. What started as a small
            shop in Dhaka has grown into a community hub for bike enthusiasts of
            all levels. With a passion for promoting active lifestyles, we
            carefully curate a selection of high-quality bikes and accessories
            to meet the needs of our customers. Over the years, we have built
            strong relationships with local biking organizations and have hosted
            numerous community events to encourage a love for biking
          </p>
        </div>
        <div className="mt-10 border-2 border-t-0 border-l-4 border-b-4 border-r-4  px-2 py-1 border-[#D7DFA3] border-opacity-70 rounded-md">
          <h1 className="text-center text-2xl font-bold text-[#D7DFA3]">
            -- Milestones --
          </h1>
          <p className="p-5 text-center font-semibold text-xl">
            <span className="text-lg text-[#1A4862] font-bold">
              {" "}
              March,2024:{" "}
            </span>{" "}
            Launched our first bike rental service, offering a variety of bikes
            for all ages and skill levels. <br />
            <span className="text-lg text-[#1A4862] font-bold">
              {" "}
              April,2024:{" "}
            </span>{" "}
            Expanded our fleet to include specialty bikes, such as mountain and
            electric bikes, to cater to a wider audience.
            <br />
            <span className="text-lg text-[#1A4862] font-bold">
              {" "}
              June,2024:{" "}
            </span>{" "}
            Initiated our community outreach program, partnering with local
            schools and organizations to promote biking and outdoor activities.
            <br />{" "}
            <span className="text-lg text-[#1A4862] font-bold">
              {" "}
              August,2024:{" "}
            </span>{" "}
            Recognized as the best bike rental shop in [Location] by [Local
            Award/Publication].
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="bg-[#D7DFA3] bg-opacity-20 p-10 border-2 "
      >
        <h1 className="text-center text-white text-4xl font-bold border-4 py-4 border-b-0 border-l-4 rounded-lg border-t-4 border-r-4 border-[#1A4862]">
          Our Contact Information
        </h1>
        <div className="mt-10 border-2 border-t-0 border-l-4 border-b-4 border-r-4  px-2 py-1 border-[#D7DFA3] border-opacity-70 rounded-md">
          <div className="grid lg:grid-cols-2 gap-2 grid-cols-1 mt-10 py-2">
            <div className="flex flex-col gap-3 items-center justify-center">
              <FaPhoneAlt className="text-4xl text-green-600" />
              <h1 className="text-xl font-semibold flex-2">
                Let's Have a Chat !
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

      <section
        id="location"
        className="bg-[#D7DFA3] bg-opacity-20 border-2 p-10"
      >
        <h1 className="text-center text-white text-4xl font-bold border-4 py-3 border-b-0 border-l-4 rounded-lg border-t-4 border-r-4 border-[#1A4862]">
          Our Shop Location
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

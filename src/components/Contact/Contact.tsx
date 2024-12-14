import ContactUs from "../ContactUs/ContactUs";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
//
//CONTACT INFORMATION
const contacts = {
  phone: "+880183383343",
  tollFree: "001 - 001 - 0001",
  address: "Merul Badda, Dhaka , Bangladesh",
};
const openHours = {
  days: "Saturday - Thursday",
  hours: "10am - 8pm",
};
const Contact = () => {
  return (
    <div className="mx-auto w-4/5 pb-10">
      <ContactUs></ContactUs>
      <section
        id="contact"
        className="bg-[#D7DFA3] shadow-md shadow-[white] bg-opacity-100 lg:p-10 py-5 px-1 border-2 hover:scale-105 duration-300 "
      >
        <h1 className="text-center dark:text-black   font-bold text-white lg:text-4xl text-2xl lg:font-bold lg:border-4 lg:py-4 lg:border-b-0 lg:border-l-4 rounded-lg lg:border-t-4 lg:border-r-4 lg:border-[#1A4862]">
          Our Contact Information
        </h1>
        <div className="lg:mt-10 lg:border-2 lg:border-t-0 lg:border-l-4 lg:border-b-4 lg:border-r-4  px-2 py-1 lg:border-[#D7DFA3] lg:border-opacity-70 rounded-md">
          <div className="grid lg:grid-cols-2 gap-2 grid-cols-1 mt-10 py-2">
            <div className="flex flex-col gap-3 items-center justify-center">
              <FaPhoneAlt className="text-4xl text-green-600" />
              <h1 className="text-xl font-semibold flex-2">
                Let's Have a Chat !
              </h1>
              <ul className="flex-1 text-center">
                <li>
                  <span className=" font-semibold">Address: </span>
                  {contacts.address}
                </li>
                <li>
                  <span className=" font-semibold">Phone: </span>
                  {contacts.phone}
                </li>
                <li>
                  <span className="font-semibold">Toll-Free: </span>
                  {contacts.tollFree}
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
    </div>
  );
};

export default Contact;

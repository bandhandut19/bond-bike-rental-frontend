import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { TContactUs } from "@/types";
import { toast } from "sonner";

const ContactUs = () => {
  const { register, handleSubmit, reset } = useForm<TContactUs>();
  const handleSubmitEmailFromContactUs = (data: TContactUs) => {
    toast(`Your Message :  ${data?.message} . Has been sent successfully`);
    reset();
    //will use emailjs later on to send the email to bond-rentals
  };
  return (
    <div className="pt-10 pb-10 ">
      <form
        onSubmit={handleSubmit(handleSubmitEmailFromContactUs)}
        className=" bg-[#D7DFA3] dark:bg-slate-600 px-5 bg-opacity-20 dark:bg-opacity-70 shadow-md shadow-white  border-2 lg:w-full lg:mx-auto grid gap-5 grid-cols-1 pt-10 pb-20 items-center justify-center"
      >
        <h1 className="mb-10 text-popover text-center lg:text-5xl text-3xl font-extrabold text-[#1A4862]">
          Contact Us
        </h1>
        <div className="">
          <Input
            className="bg-[#1A4862] w-full bg-opacity-80 text-opacity-100 font-semibold text-[#D7DFA3] placeholder:text-opacity-80 placeholder:text-[#D7DFA3] placeholder:font-bold"
            placeholder="Enter Your Name"
            type="text"
            {...register("name")}
            required
          ></Input>
        </div>
        <div className="">
          <Input
            className="bg-[#1A4862] w-full bg-opacity-80 text-opacity-100 font-semibold text-[#D7DFA3] placeholder:text-opacity-80 placeholder:text-[#D7DFA3] placeholder:font-bold"
            placeholder="Enter Your Email"
            type="email"
            required
            {...register("email")}
          ></Input>
        </div>
        <div className="">
          <textarea
            className="bg-[#1A4862]  pl-2 w-full bg-opacity-80 text-opacity-100 font-semibold text-[#D7DFA3] placeholder:text-opacity-80 placeholder:text-[#D7DFA3] placeholder:font-bold"
            placeholder="Write Your Message Here"
            required
            {...register("message")}
          ></textarea>
        </div>
        <div className="mx-auto items-center text-center lg:flex-col flex-row">
          <button
            className="bg-[#1A4862] text-[#D7DFA3] py-2 px-4 hover:border-black border-2 hover:text-[#1A4862] hover:bg-[#D7DFA3] hover:font-extrabold font-semibold"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;

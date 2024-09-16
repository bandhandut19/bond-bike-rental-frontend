import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import ButtonDefault from "../ui/buttonDefault";
import { Link } from "react-router-dom";

interface FormValues {
  username: string;
  useremail: string;
  password: string;
  phone: string;
  address: string;
  role: "user"; //will not define role here in future.. will handle in backend
}

const Register = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const handleLogin = (data: FormValues) => {
    // e.preventDefault();
    const modifiedData = { ...data, role: "user" }; // Ensure 'role' is added
    console.log(modifiedData);
  };

  return (
    <div className="mx-auto mt-20 w-4/5">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className=" bg-[#D7DFA3] border-2 lg:w-4/5 lg:mx-auto bg-opacity-40 grid gap-5 grid-cols-1 pt-10 pb-20 items-center justify-center"
      >
        <h1 className="mb-10 text-popover text-center lg:text-5xl text-3xl font-extrabold text-[#1A4862]">
          Register Now!
        </h1>
        <div className="">
          <Input
            className="bg-[#1A4862] w-4/5 lg:w-1/2 mx-auto bg-opacity-80 text-opacity-100 font-semibold text-[#D7DFA3] placeholder:text-opacity-80 placeholder:text-[#D7DFA3] placeholder:font-bold"
            placeholder="Enter Your Email"
            type="email"
            required
            {...register("useremail")}
          ></Input>
        </div>
        <div className="">
          <Input
            className="bg-[#1A4862] w-4/5 lg:w-1/2 mx-auto bg-opacity-80 text-opacity-100 font-semibold text-[#D7DFA3] placeholder:text-opacity-80 placeholder:text-[#D7DFA3] placeholder:font-bold"
            placeholder="Enter Your Phone No"
            required
            {...register("phone")}
          ></Input>
        </div>
        <div className="">
          <Input
            className="bg-[#1A4862] w-4/5 lg:w-1/2 mx-auto bg-opacity-80 text-opacity-100 font-semibold text-[#D7DFA3] placeholder:text-opacity-80 placeholder:text-[#D7DFA3] placeholder:font-bold"
            placeholder="Enter Your Address"
            required
            {...register("address")}
          ></Input>
        </div>
        <div className="">
          <Input
            className="bg-[#1A4862] w-4/5 lg:w-1/2 mx-auto bg-opacity-80 text-opacity-100 font-semibold text-[#D7DFA3] placeholder:text-opacity-80 placeholder:text-[#D7DFA3] placeholder:font-bold"
            placeholder="Enter Your Password"
            type="password"
            required
            {...register("password")}
          ></Input>
        </div>
        <div className="mx-auto items-center text-center lg:flex-col flex-row">
          <button type="submit">
            <ButtonDefault buttontext="Register"></ButtonDefault>
          </button>
          <div className="mt-8">
            <span className="font-bold text-white">
              <span className="mr-2">Already an user ?</span>
              <Link to={"/login"}>
                <span className="bg-[#D7DFA3] px-4 border-2 text-[#1A4862] font-extrabold hover:bg-[#1A4862] hover:text-[#D7DFA3]">
                  Login Now !
                </span>
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;

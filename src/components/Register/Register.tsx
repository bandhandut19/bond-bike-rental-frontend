import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import ButtonDefault from "../ui/buttonDefault";
import { Link, useNavigate } from "react-router-dom";
import { useUserRegisterMutation } from "@/redux/auth/register";
import { toast } from "sonner";
interface FormValues {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: "user"; //will not define role here in future.. will handle in backend
}

interface FetchBaseQueryError {
  status: number;
  data: any;
}

const Register = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [userRegister] = useUserRegisterMutation();
  const navigate = useNavigate();
  const handleLogin = async (data: FormValues) => {
    // e.preventDefault()
    const modifiedData = { ...data, role: "user" }; // Ensure 'role' is added
    const res = await userRegister(modifiedData);
    if (res?.error) {
      const error = res?.error as FetchBaseQueryError;
      toast(error.data.errorMessage[0].message);
    } else {
      if (res?.data?.success) {
        reset();
        toast(res?.data?.message);
        navigate("/login");
      }
    }
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
            placeholder="Enter Your Name"
            type="text"
            required
            {...register("name")}
          ></Input>
        </div>
        <div className="">
          <Input
            className="bg-[#1A4862] w-4/5 lg:w-1/2 mx-auto bg-opacity-80 text-opacity-100 font-semibold text-[#D7DFA3] placeholder:text-opacity-80 placeholder:text-[#D7DFA3] placeholder:font-bold"
            placeholder="Enter Your Email"
            type="email"
            required
            {...register("email")}
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

import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import ButtonDefault from "../ui/buttonDefault";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/redux/auth/loginApi";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hooks";
import { addUser } from "@/redux/user/useSlice";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useState } from "react";
interface FetchBaseQueryError {
  status: number;
  data: any;
}

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const handleLogin = async (data: FormValues) => {
    // e.preventDefault();

    const res = await login(data);
    if (res?.error) {
      const error = res?.error as FetchBaseQueryError;
      setPasswordError(error.data.errorMessage[0].message);
      toast(error.data.errorMessage[0].message);
    } else {
      if (res?.data?.success) {
        toast(res?.data?.message);
        const token = res?.data?.token;
        dispatch(addUser(token));
        console.log(token);
        const decodedToken: any = jwtDecode(token);
        const userRole = decodedToken?.user_role;
        if (userRole) {
          Cookies.set("authToken", token, { expires: 7 });
          navigate("/dashboard");
        }
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
          Login Now!
        </h1>
        <div className="">
          <Input
            className="bg-[#1A4862] w-4/5 lg:w-1/2 mx-auto bg-opacity-80 text-opacity-100 font-semibold text-[#D7DFA3] placeholder:text-opacity-80 placeholder:text-[#D7DFA3] placeholder:font-bold"
            placeholder="Enter Your Email"
            type="email"
            required
            {...register("email")}
          ></Input>
        </div>
        <div className="text-center">
          <Input
            className="bg-[#1A4862] w-4/5 lg:w-1/2 mx-auto bg-opacity-80 text-opacity-100 font-semibold text-[#D7DFA3] placeholder:text-opacity-80 placeholder:text-[#D7DFA3] placeholder:font-bold"
            placeholder="Enter Your Password"
            type="password"
            required
            {...register("password")}
          ></Input>
          <span className="text-[#db3c30] lg:text-lg text-[.8rem] font-bold">
            {passwordError ? passwordError : ""}
          </span>
        </div>
        <div className="mx-auto items-center text-center lg:flex-col flex-row">
          <button
            type="submit"
            className="bg-[#1A4862] text-[#D7DFA3] py-2 px-4 hover:text-[#1A4862] hover:bg-[#D7DFA3] hover:font-extrabold font-semibold"
          >
            Login
          </button>
          <div className="mt-8">
            <span className="font-bold text-white">
              <span className="mr-2">Not an user ?</span>
              <Link to={"/register"}>
                <span className="bg-[#D7DFA3] px-4 border-2 text-[#1A4862] font-extrabold hover:bg-[#1A4862] hover:text-[#D7DFA3]">
                  Register Now !
                </span>
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

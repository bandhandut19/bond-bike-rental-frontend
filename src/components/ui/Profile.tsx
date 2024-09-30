import {
  useGetUserDetailsQuery,
  useUpdateProfileMutation,
} from "@/redux/user/userApi";
import { Input } from "./input";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { TUser } from "@/types";

const Profile = () => {
  const { data: userData } = useGetUserDetailsQuery({});
  const payload = { user_email: userData?.email, user_role: userData?.role };
  const { register, handleSubmit } = useForm<TUser>();
  const [updateProfile] = useUpdateProfileMutation();
  const handleUpdateProfile = (updatedInfo: TUser) => {
    updateProfile({ updatedInfo, payload })
      .then((response) => {
        toast(response?.data?.message);
      })
      .catch((error) => {
        toast("Error updating profile:", error);
      });
  };
  const userInfo = userData?.data;
  return (
    <>
      <h1 className="text-center text-2xl  lg:text-4xl mt-5 font-extrabold">
        Profile
      </h1>
      <form
        onSubmit={handleSubmit(handleUpdateProfile)}
        className="mx-auto shadow-md shadow-[white] overflow-auto lg:w-1/2 flex flex-col lg:gap-5 gap-1 bg-gradient-to-bl border-2 to-[#D7DFA3] from-[#1A4862] py-5 px-2 mt-5 "
      >
        <div>
          <label htmlFor="name" className="text-white font-bold">
            Name
          </label>
          <Input
            id="name"
            className="bg-[#1A4862] placeholder:opacity-100 placeholder:font-extrabold placeholder:text-[#D7DFA3]"
            defaultValue={userInfo?.name}
            {...register("name")}
          ></Input>
        </div>
        <div>
          <label htmlFor="email" className="text-white font-bold">
            Email
          </label>
          <Input
            id="email"
            disabled
            className="bg-[#1A4862] placeholder:opacity-100 placeholder:font-extrabold placeholder:text-[#D7DFA3]"
            defaultValue={userInfo?.email}
          ></Input>
        </div>
        <div>
          <label htmlFor="phone" className="text-white font-bold">
            Phone
          </label>
          <Input
            id="phone"
            className="bg-[#1A4862] placeholder:opacity-100 placeholder:font-extrabold placeholder:text-[#D7DFA3]"
            defaultValue={userInfo?.phone}
            {...register("phone")}
          ></Input>
        </div>
        <div>
          <label htmlFor="address" className="text-white font-bold">
            Address
          </label>
          <Input
            id="address"
            className="bg-[#1A4862] placeholder:opacity-100 placeholder:font-extrabold placeholder:text-[#D7DFA3]"
            defaultValue={userInfo?.address}
            {...register("address")}
          ></Input>
        </div>
        <div className="text-center">
          <button
            className="bg-[#1A4862] text-[#D7DFA3] py-2 px-4 hover:text-[#1A4862] hover:bg-[#D7DFA3] hover:font-extrabold font-semibold"
            type="submit"
          >
            Update Profile
          </button>
        </div>
      </form>
    </>
  );
};

export default Profile;

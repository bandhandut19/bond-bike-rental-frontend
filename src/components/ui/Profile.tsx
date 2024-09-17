import {
  useGetUserDetailsQuery,
  useUpdateProfileMutation,
} from "@/redux/user/userApi";
import { Input } from "./input";
import ButtonDefault from "./buttonDefault";
import { useForm } from "react-hook-form";

interface TUser {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
}

const Profile = () => {
  const { data: userData } = useGetUserDetailsQuery({});
  const payload = { user_email: userData?.email, user_role: userData?.role };
  const { register, handleSubmit } = useForm<TUser>();
  const [updateProfile, { data }] = useUpdateProfileMutation();
  const handleUpdateProfile = (updatedInfo: TUser) => {
    console.log(updatedInfo);
    updateProfile({ updatedInfo, payload })
      .then((response) => {
        console.log("Profile updated successfully:", response);
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };
  const userInfo = userData?.data;
  return (
    <form
      onSubmit={handleSubmit(handleUpdateProfile)}
      className="mx-auto lg:w-1/2 flex flex-col gap-5 bg-gradient-to-bl border-2 to-[#D7DFA3] from-[#1A4862] py-5 px-2 mt-5 h-1/2"
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
        <button type="submit">
          <ButtonDefault buttontext={"Update Profile"}></ButtonDefault>
        </button>
      </div>
    </form>
  );
};

export default Profile;

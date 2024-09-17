import { useGetUserDetailsQuery } from "@/redux/user/userApi";
import { Input } from "./input";
import ButtonDefault from "./buttonDefault";

const Profile = () => {
  const { data } = useGetUserDetailsQuery({});
  const userInfo = data?.data;
  return (
    <div className="mx-auto w-1/2 flex flex-col gap-5 bg-gradient-to-bl border-2 to-[#D7DFA3] from-[#1A4862] py-5 px-2 mt-5 h-1/2">
      <div>
        <label htmlFor="name" className="text-white font-bold">
          Name
        </label>
        <Input
          id="name"
          className="bg-[#1A4862] placeholder:opacity-100 placeholder:font-extrabold placeholder:text-[#D7DFA3]"
          placeholder={userInfo?.name}
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
          placeholder={userInfo?.email}
        ></Input>
      </div>
      <div>
        <label htmlFor="phone" className="text-white font-bold">
          Phone
        </label>
        <Input
          id="phone"
          className="bg-[#1A4862] placeholder:opacity-100 placeholder:font-extrabold placeholder:text-[#D7DFA3]"
          placeholder={userInfo?.phone}
        ></Input>
      </div>
      <div>
        <label htmlFor="address" className="text-white font-bold">
          Address
        </label>
        <Input
          id="address"
          className="bg-[#1A4862] placeholder:opacity-100 placeholder:font-extrabold placeholder:text-[#D7DFA3]"
          placeholder={userInfo?.address}
        ></Input>
      </div>
      <div className="text-center">
        <ButtonDefault buttontext={"Update Profile"}></ButtonDefault>
      </div>
    </div>
  );
};

export default Profile;

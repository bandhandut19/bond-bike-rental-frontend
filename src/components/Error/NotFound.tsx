import { Link } from "react-router-dom";
import ButtonDefault from "../ui/buttonDefault";

const NotFound = () => {
  return (
    <div className="mx-auto w-full min-h-screen bg-[#D7DFA3]">
      <div className="text-center pt-20 flex flex-col gap-5">
        <h1 className="text-4xl font-extrabold text-red-600">404 Not Found</h1>
        <Link to={"/"}>
          <ButtonDefault buttontext="Go Back To Home"></ButtonDefault>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

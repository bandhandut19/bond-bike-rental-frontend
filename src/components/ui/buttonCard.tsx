import { useNavigate } from "react-router-dom";

interface ButtonCardProps {
  buttontext: string;
  id: string;
}

const ButtonCard: React.FC<ButtonCardProps> = ({ buttontext, id }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`/allbikes/${id}`)}
      className="bg-[#1A4862] border-2 text-[#D7DFA3] py-2 px-4  hover:bg-[#1A4862] hover:bg-opacity-90 hover:text-white hover:border-white hover:font-extrabold hover:border-2 font-semibold"
    >
      {buttontext}
    </button>
  );
};

export default ButtonCard;

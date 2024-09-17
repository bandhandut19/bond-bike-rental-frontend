interface ButtonCardProps {
  buttontext: string;
}

const ButtonCard: React.FC<ButtonCardProps> = ({ buttontext }) => {
  return (
    <button className="bg-[#1A4862] border-2 text-[#D7DFA3] py-2 px-4  hover:bg-[#1A4862] hover:bg-opacity-90 hover:text-white hover:border-white hover:font-extrabold hover:border-2 font-semibold">
      {buttontext}
    </button>
  );
};

export default ButtonCard;

interface ButtonDefaultProps {
  buttontext: string;
}

const ButtonDefault: React.FC<ButtonDefaultProps> = ({ buttontext }) => {
  return (
    <button className="bg-[#1A4862] text-[#D7DFA3] py-2 px-4 hover:text-[#1A4862] hover:bg-[#D7DFA3] hover:font-extrabold font-semibold">
      {buttontext}
    </button>
  );
};

export default ButtonDefault;

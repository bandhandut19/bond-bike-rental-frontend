const Welcome = ({ name }: { name: string }) => {
  return (
    <div>
      <div className="text-center pt-20 text-[#D7DFA3] font-extrabold">
        <h1 className="lg:text-5xl text-2xl">Welcome to Bond Bike Rental</h1>{" "}
        <br /> <span className="text-white lg:text-4xl text-xl">{name}</span>
      </div>
    </div>
  );
};

export default Welcome;

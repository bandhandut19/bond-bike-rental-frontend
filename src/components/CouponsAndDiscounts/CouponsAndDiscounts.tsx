import coupons from "../../../public/couponsAndDiscounts.json";
const CouponsAndDiscounts = () => {
  return (
    <div>
      <h1 className="text-4xl py-2 font-bold text-white lg:font-extrabold mb-5 mt-3 text-center">
        Coupons & Discounts
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 lg:gap-10 items-center">
        {coupons?.map((coupon) => (
          <div
            key={coupon.code}
            className="bg-[#D7DFA3] hover:scale-110 duration-300  shadow-white border-2 border-white p-4 mb-4 rounded shadow-md text-center"
          >
            <h2 className="lg:text-2xl font-semibold">{coupon.code}</h2>
            <p className="lg:text-lg text-[#1A4862] font-extrabold">
              Discount: {coupon.discount}%
            </p>
            <p className="text-gray-600">Use this code at checkout!</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouponsAndDiscounts;

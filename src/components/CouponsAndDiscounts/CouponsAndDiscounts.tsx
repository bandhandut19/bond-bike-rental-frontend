import { TCoupon } from "@/types";
import coupons from "../../../public/couponsAndDiscounts.json";
import { toast } from "sonner";
const CouponsAndDiscounts = () => {
  const handleCoupon = (status: boolean) => {
    if (!status) {
      toast("This Coupon is Expired");
    }
    if (status) {
      toast("Coupons & Discounts will be available soon");
    }
  };
  return (
    <div>
      <div className="pb-10">
        <h1 className="text-4xl py-2 font-bold bg-[#1A4862] text-white lg:font-extrabold mb-5 mt-3 text-center">
          Coupons & Discounts
        </h1>
        <p className="text-center text-lg font-bold text-[#1A4862] bg-white rounded-md py-2 animate-pulse duration-500">
          Click on coupons to get details on which bikes you can use them to get
          discounts on your ride. <br />
          Each Coupon Code have specific polices for applying. <br />
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 lg:gap-10 items-center">
        {coupons?.map((coupon: TCoupon) => (
          <div
            key={coupon.code}
            onClick={() => handleCoupon(coupon.status)}
            className={` ${coupon?.status ? "bg-[#D7DFA3]" : "bg-slate-400"} ${
              coupon?.status ? " hover:scale-110 duration-300" : ""
            }  ${
              coupon?.status ? "shadow-white" : "shadow-none"
            } border-2 border-white p-4 mb-4 rounded shadow-md text-center cursor-pointer`}
          >
            <h2 className="lg:text-2xl font-semibold">{coupon.code}</h2>
            <p className="lg:text-lg text-[#1A4862] font-extrabold">
              Discount: {coupon.discount}%
            </p>
            <p className="text-gray-600">{coupon.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouponsAndDiscounts;

import OrderInfo from "@/components/orderInfo/OrderInfo";
import PostAuthHeader from "@/components/postAuthHeader/PostAuthHeader";
import images from "images/images";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const Credits = (props: Props) => {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate("/my-wallet")
    }
  const orderDetails = [
    { label: "Order Id", value: "#HJDVUY2387JHWE" },
    { label: "Credits", value: "#HJDVUY2387JHWE" },
    { label: "Paid Via", value: "Phone Pay UPI" },
    { label: "Amount", value: "₹14,500" },
    { label: "Convenience fees", value: "$0" },
  ];
  return (
    <div>
      <PostAuthHeader heading="" />
      <div className="flex flex-col items-center justify-center w-screen pt-10">
        <div className="w-20 h-20 bg-main-color rounded-full flex items-center justify-center">
          <img src={images.tickIcon} alt="" />
        </div>
        <h1 className="m-4 font-semibold text-2xl">Available Credits</h1>
      </div>

      <div className="  gap-2 ">
        <h1 className="m-4 font-semibold">Details</h1>
        <div className="border m-4 rounded-2xl gap-4">
          {orderDetails.map((detail, index) => (
            <OrderInfo info={detail.label} data={detail.value} key={index} />
          ))}
          <div className="bg-light-purple flex justify-between p-2 rounded-b-xl">
            <h1 className=" font-semibold text-xl">Paid Amount </h1>
            <h1 className=" font-semibold text-xl">₹14,500 </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-main-color text-white p-2 w-11/12 rounded-full my-14 font-medium md:w-3/12" onClick={handleClick}>
            View Updated Balance
          </button>
        </div>
      </div>
    </div>
  );
};

export default Credits;

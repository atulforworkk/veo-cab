import AvailableCredits from "@/components/availableCredits/AvailableCredits";
import Card from "@/components/card/Card";
// import Card from "@/components/card/Card";
import PostAuthHeader from "@/components/postAuthHeader/PostAuthHeader";
import TransactionView from "@/composites/transaction/TransactionView";
import UserCard from "@/composites/userCard/UserCard";
import React from "react";

const MyWallet = () => {
  return (
    <div>
      <PostAuthHeader heading="My Wallet" />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-2">
        <UserCard />
        <AvailableCredits/>
            <Card />
      </div>
      <div>
        <TransactionView />
      </div>
    </div>
  );
};

export default MyWallet;

// const Card = () => {
//   const navigate = useNavigate();
//   const handleClick = () => {
//     navigate("/payment");
//   };
//   return (
//     <div className="border rounded-2xl bg-light-gray  min-w-[350px]">
//       <div className="flex justify-between items-center m-3 ">
//         <h1 className="font-bold">All credits to your wallet</h1>
//         <div className=" px-3  py-0.5 rounded-full bg-light-purple justify-around">
//           1 Credit = 1
//         </div>
//       </div>
//       <p className="text-sm m-3 font-light">
//         Choose from our most purchased options.
//       </p>
//       {/* money component */}
//       <div className="border border-main-color rounded-2xl flex flex-col w-11/12 ">
//       <div className="flex items-center">
//         <Radio />
//         <img src={images.brandlogo} alt="" className="w-4 h-4 m-1 " />
//         <h1 className="font-semibold text-xl m-1">15000</h1>
//         <p className="text-sm font-light m-1">Credits</p>
//         <p className="mx-auto">30% off</p>
//       </div>
//       <p className="text-sm font-light m-1 px-5">with</p>
//       <div className="flex items-center px-5">
//       <h1 className="font-semibold text-xl m-1 line-through text-[#00083046]">15000</h1>
//         <h1 className="font-semibold text-xl m-1">14500</h1>
//         <p className="text-sm font-light m-1">Credits</p>
//       </div>
//       </div>
//       <p className="text-sm font-light m-1">or</p>
//       <h1 className="font-semibold text-xl m-1">Enter Amount Manually </h1>
//       <input
//         className="rounded-full w-full p-2 my-3"
//         placeholder="Enter here"
//       />
//       <button
//         className="bg-main-color text-white p-2 w-full rounded-full my-3"
//         onClick={handleClick}
//       >
//         Proceed to pay
//       </button>
//     </div>
//   );
// };

import images from "images/images";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate =useNavigate();
  return (
    <>
      <img src={images.mainLogo} alt="" className="pt-16 pl-10" />
      <div>
        <div className="flex justify-between">
          <div className="flex flex-col items-center justify-center ml-10">
            <button className="bg-main-color text-white w-[352px] h-[60px] text-lg font-medium mb-12" 
            onClick={()=>{
              navigate("/admin-login")
            }}
            >
              Admin Login
            </button>
            <button className=" border border-main-color  text-main-color w-[352px] h-[60px]  font-medium" 
            onClick={()=>{
              navigate("/subadmin-login")
            }}
            >
              Sub Admin Login
            </button>
 
          <h1 className=" text-3xl font-bold text-[#121744]">
            Move with <br />
            <span className="text-main-color">Safety </span>
            to your destination.
          </h1>
          </div>
          <div>
            <img
              src={images.homePageImg}
              alt="home Page image "
              className="w-[889.66px] h-[719.99px] px-14"
            />
          </div>


        </div>
      </div>
    </>
  );
};

export default Home;

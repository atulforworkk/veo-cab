import images from "images/images";
import React from "react";


const Home = () => {
  return (
    <div>
      <img src={images.mainLogo} alt="" className="pt-16 pl-10" />
      <div>
        <div className="flex justify-between">
          <div className="flex flex-col items-center  ml-10">
            <div className="flex justify-center flex-col">
            <button className="bg-main-color text-white w-[352px] h-[60px] text-lg font-medium mb-12">
              Admin Login
            </button>
            <button className=" border border-main-color  text-main-color w-[352px] h-[60px]">
              Sub Admin Login
            </button>
            </div>
            <h1 className=" text-3xl font-bold ">
            Move with <br />
            <span>Safety </span>
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
    </div>
  );
};

export default Home;

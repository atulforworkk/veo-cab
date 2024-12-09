import images from "images/images";
import React from "react";


const AvailableCredits = () => {
  return (
      <div className="rounded-md  col-span-6 bg-light-gray border">
        <h1 className="m-4 font-bold">Available Credits</h1>
        <div className="flex items-center m-4">
          <img src={images.brandlogo} alt="brand Logo " className="w-8 h-8" />
          <h1 className="font-bold text-3xl mx-2">0</h1>
        </div>
        <p className="text-sm m-4 font-light">
          Credits can be used for all bookings, food orders, events.
        </p>
        <hr className=" border-t-2 border-gray-300" />
        <button className="bg-main-color text-white text-xs p-1.5 rounded-full m-3">
          What are Credits?
        </button>
      </div>
  );
};

export default AvailableCredits;

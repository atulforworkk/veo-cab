import images from "images/images";
import React from "react";

type Props = {};

const Invite = (props: Props) => {
  const handleClick = () => {};
  return (
    <div>
      {/* header */}
      <div className="p-2 flex items-center shadow-xl bg-main-color">
        <button className="bg-white p-2 w-8 h-8 rounded-full text-main-color font-bold m-auto flex items-center justify-center ">
          &lt;
        </button>
        <h1 className="text-center flex-grow font-semibold text-white">
          Refer a Friend{" "}
        </h1>
        <button
          className="bg-main-color p-2 w-20 h-8 rounded-full text-white flex items-center justify-center hover:bg-custom-Purple"
          onClick={handleClick}
        >
          Logout
        </button>
      </div>
      {/* main */}
      <div className="bg-main-color text-white ">
        <h1 className="text-2xl font-semibold">
          Invite a friend and get credit for your next booking!
        </h1>
        <div className="bg-white inline-block rounded-full p-3 ">
          <img
            src={images.moneyIcon}
            alt="Money Icon"
            className="w-18 h-18 "
          />
        </div>
      </div>
    </div>
  );
};

export default Invite;

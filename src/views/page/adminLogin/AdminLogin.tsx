import images from "images/images";
import React from "react";
import Login from "@/composites/login/Login";

type Props = {};

const AdminLogin = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 ">
      <div className=" bg-gradient-to-b from-start to-end h-screen col-span-6 flex items-center justify-center">
        <Login/>
      </div>
    <SideImage/>

    </div>
  );
};

export default AdminLogin;

export const SideImage = () => {
  return (
    <div className=" col-span-6  flex flex-col items-center h-screen justify-center">
      <img src={images.mainLogo} alt="Company's Logo" className="py-20" />
      <img src={images.groupImg} alt="" />
    </div>
  );
};

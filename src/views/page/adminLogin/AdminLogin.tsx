import images from "images/images";
import React from "react";
import Login from "@/composites/login/Login";
import SideImage from "@/components/sideImage/SideImage";

type Props = {};

const AdminLogin = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 ">
        <Login heading="Login"/>
    <SideImage/>

    </div>
  );
};

export default AdminLogin;


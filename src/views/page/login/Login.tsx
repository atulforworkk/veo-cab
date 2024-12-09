import LoginForm from "@/composites/loginForm/LoginForm";
import images from "images/images";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "store";
type Props = {};

const Login = (props: Props) => {
  const { isAuthentiacted, isLoading } = useSelector(
    (state:RootState) => state.auth
  );

  if (isLoading) return <p>Loading...</p>;

  if (isAuthentiacted) return <Navigate to="/my-wallet" />;

  return (
    <div>
      {/* preauth header  */}
      {/* <div className="h-12 p-2 flex items-center">
      <img src={images.brandlogo} alt="" className="w-12 h-12" />
      </div> */}
      <LoginForm />
    </div>
  );
};

export default Login;

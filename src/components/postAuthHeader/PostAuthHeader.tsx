import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "@/store/authSlice";
type Props = {
  heading: string | null;
};

const PostAuthHeader = ({ heading }: Props) => {
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const handleClick = async () => {
    await dispatch(logOut());
    navigate("/home");
  };
  
  return (
    <div className="p-2 flex items-center shadow-xl">
      <button className="bg-main-color p-2 w-8 h-8 rounded-full text-white flex items-center justify-center ">
        &lt;
      </button>
      <h1 className="text-center flex-grow font-bold">{heading}</h1>
      <button className="bg-main-color p-2 w-20 h-8 rounded-full text-white flex items-center justify-center hover:bg-custom-Purple" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};

export default PostAuthHeader;

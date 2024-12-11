import { Link, useNavigate } from "react-router-dom";
import { menuData } from "./constants";
import { Button } from "@mantine/core";
import { useDispatch } from "react-redux";
import { logOut } from "@/store/authSlice";

type Props = {};

console.log(menuData);
const { menu } = menuData;
console.log("🚀 ~ menu:", menu);

const Sidebar = ({}: Props) => {
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const handleLogout=async()=>{
    await dispatch(logOut());
    navigate("/");
    console.log("navigated to login page");
  }
  return (
    <div className="">
      <ul className="py-6">
        {menu.map((data, index) => {
          return (
            <Link to={data.route}>
            <li key={index} className="flex py-5 text-sm">
              <img src={data.imagesrc} alt="" />
              {data.name}
            </li>
            </Link>
          );
        })}
        <button onClick={handleLogout}>
      <li className="flex py-10 text-sm">
      <img src="src/images/sideBarIcon/All bookings.png" alt="" />
          Logout
        </li>
        </button>
      </ul>
    </div>
  );
};

export default Sidebar;

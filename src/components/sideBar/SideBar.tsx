import { Link } from "react-router-dom";
import { menuData } from "./constants";

type Props = {};

console.log(menuData);
const { menu } = menuData;
console.log("🚀 ~ menu:", menu);

const Sidebar = ({}: Props) => {
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
      <li className="flex py-10 text-sm">
      <img src="src/images/sideBarIcon/All bookings.png" alt="" />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

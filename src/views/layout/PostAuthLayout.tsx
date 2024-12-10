import DashboardCard from "@/components/dashboardCard/DashboardCard";
import Sidebar from "@/components/sideBar/SideBar";
import DashboardTable from "@/composites/dashboard/dashboardTable/DashboardTable";
import MainFrame from "@/composites/dashboard/mainFrame/MainFrame";
import { Avatar, Input, Menu } from "@mantine/core";
import images from "images/images";
import React from "react";

type Props = {};

const PostAuthLayout = (props: Props) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-[18%]  h-screen  ">
        <div className="p-6">
          <img src={images.postLoginLogo} alt="" className="w-37 h-7  "/>
          <Sidebar/>
        </div>
        <div>

        </div>
      </div>

      {/* header */}
      <div className="flex-1 ">
        <div className="h-[8vh]  flex  items-center justify-between  shadow-md px-12">
          <Input placeholder="Search Here" className="w-72" />
          <div className="flex gap-4">
            <img src={images.settingIcon} alt="" className="w-8 h-8" />
            <img src={images.notificationIIcon} alt="" className="w-8 h-8" />
            <UserMenu />
          </div>
        </div>
        {/* Main Body */}
        <div className="p-4">
          <div>
            <h1 className="font-medium text-xl">Dashboard</h1>
            <p>Welcome!!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 ">
            <DashboardCard
              heading="Total User"
              imageSrc="src/images/Group 494.png"
              number="12,750"
            />
            <DashboardCard
              heading="Total Driver"
              imageSrc="src\images\Group 401.png"
              number="7,920"
            />
            <DashboardCard
              heading="Total Hosts"
              imageSrc="src\images\Group 402.png"
              number="3,460"
            />
            <DashboardCard
              heading="Total Booking"
              imageSrc="src/images/Group 400.png"
              number="3,460"
            />
      
          </div>
          <MainFrame/>
          <DashboardTable/>
        </div>
      </div>
    </div>
  );
};

export default PostAuthLayout;

export const UserMenu = () => {
  return (
    <>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Avatar src={images.avatarImage} alt="it's me" />
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Menu</Menu.Label>
          <Menu.Item>Settings</Menu.Item>
          <Menu.Item>Messages</Menu.Item>
          <Menu.Item color="red">Logout</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};

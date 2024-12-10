import DashboardCard from "@/components/dashboardCard/DashboardCard";
import Sidebar from "@/components/sideBar/SideBar";
import DashboardTable from "@/composites/dashboard/dashboardTable/DashboardTable";
import MainFrame from "@/composites/dashboard/mainFrame/MainFrame";
import { Avatar, Input, Menu } from "@mantine/core";
import images from "images/images";
import React from "react";
import { Outlet } from "react-router-dom";

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
        <div className="w-11/12 mx-auto py-4">
        <Outlet/>
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

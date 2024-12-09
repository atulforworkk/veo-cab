import images from "images/images";
import React from "react";
import { Tabs, rem } from "@mantine/core";
import { useNavigate } from "react-router-dom";

type Props = {};

const TransactionView = (props: Props) => {
  const navigate =useNavigate();

  return (
    <div>
      <div className="flex items-center justify-between m-4">
        <h1 className=" font-bold">Transaction</h1>
        {/* fix  */}
        <div className="flex items-center border-main-color border text-main-color bg-light-gray px-3 py-0.5 justify-around rounded-full">
          <p className="text-sm">Select Month</p>
          <img src={images.downArrowIcon} alt="" />
        </div>
      </div>
      {/* tabs */}
      <Tabs defaultValue="all" color="gray">
        <Tabs.List>
          <Tabs.Tab value="all">All</Tabs.Tab>
          <Tabs.Tab value="Addition">Addition</Tabs.Tab>
          <Tabs.Tab value="Dedection">Dedection</Tabs.Tab>
          <Tabs.Tab value="refund">refund</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="all">
        <div className="bg-[#F1F0F2] grid grid-cols-1  gap-4 p-2 m-2 rounded-t-2xl">
          <div>
            <div className="flex  items-center justify-between">
      
              <div className="flex">
                <img src={images.brandlogo} alt="" className="px-2"/>
                <h1 className="font-semibold">Added Credit</h1>
              </div>
              <div className="flex items-center">
                <img src={images.brandlogo} alt=""  className="w-4 h-4"/>
                <h1 className="font-semibold">₹100</h1>
                <img src={images.downArrowIcon} alt=""  className="p-2"/>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="mx-11 font-light text-sm" >
              28 Sep 2024
              </span>
              <span className=" font-light text-sm" >
              12:32 PM
              </span>
            </div>
            </div>
          </div>
        </Tabs.Panel>
        <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>
        <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default TransactionView;

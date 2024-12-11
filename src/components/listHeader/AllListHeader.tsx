import React from 'react'
import { Button, Input } from "@mantine/core";

type Props = {
    heading: string;
    subHeading:string;
  };


const AllListHeader =  ({ heading,subHeading}: Props) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-xl font-semibold">{heading}</h1>
        <p>{subHeading}</p>
      </div>
      <div className="flex gap-4">
        <Input />

        <Button className="bg-[#F5F6F8] text-black border ">Filter</Button>
        <Button className="bg-main-color">Export</Button>
      </div>
    </div>
  );
};

export default AllListHeader
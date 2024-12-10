import { Divider } from "@mantine/core";
import images from "images/images";
import { useUserQuery } from "query/useUserQuery";
import React from "react";



const DriverTableList = () => {
  const{data }= useUserQuery();
  return (
    <div className="">
      <TableHeader />
      <div className="py-3"></div>
      <div className="border p-4">
      {(data?.data || [])
  .filter(item => item.user.userType === "DRIVER")
  .map((item) => {
    const user = item.user;
    return (
      <TableRow
        key={item._id}
        userID={user.userId}
        userName={`${user.firstName} ${user.lastName}`}
        number={user.mobileNumber}
        email={user.email}
        registerationDate={item.memberSince}
        kycInfo={user.documentVerification === "APPROVED" ? "verified" : "pending"}
      />
    );
  })}
        <TableFooter />
      </div>
    </div>
  );
};

export default DriverTableList;

export const TableHeader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2   py-3 bg-[#E5F2FF] text-[#121744] font-semibold">
      <div className="col-span-1 text-center">User ID</div>
      <div className="col-span-2 ">Name</div>
      <div className="col-span-2">Phone No.</div>
      <div className="col-span-2">Email ID:</div>
      <div className="col-span-2">Registeration Date</div>
      <div className="col-span-2">KYC</div>
      <div className="col-span-1">Action</div>
    </div>
  );
};

type Props = {
  userID:string|undefined;
  userName:string|undefined;
  number:string|undefined;
  email:string|undefined;
  registerationDate:string|undefined;
  kycInfo:string|undefined;
};
export const TableRow = ({userID,userName,number,email,registerationDate,kycInfo}: Props) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 ">
        <div className="col-span-1 text-center">{userID}</div>
        <div className="col-span-2">{userName}</div>
        <div className="col-span-2">{number}</div>
        <div className="col-span-2">{email}</div>
        <div className="col-span-2">{registerationDate}</div>
        <div className="col-span-2 text-green-400">{kycInfo}</div>
        <div className="col-span-1"> <img src={images.actionIcon} alt="" /></div>
      </div>
      <Divider my="xs" />
    </div>
  );
};

export const TableFooter = () => {
  const pages = [1, 2, 4, 5, 6, 7, 8, 9];
  return (
    <div className="flex justify-between">
      <div>Showing 1-10  from 100</div>
      <div>
        <ul className="flex gap-4">
          <li className="text-xl">{"<"}</li>
          {pages.map((page, index) => {
            return <li key={index}>{page}</li>;
          })}
          <li className="text-xl">{">"}</li>
        </ul>
      </div>
    </div>
  );
};

import { Divider } from "@mantine/core";
import images from "images/images";
import { useUserQuery } from "query/useUserQuery";
import React, { useState } from "react";

const HostTableList = () => {
  const { data } = useUserQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const totalPages = Math.ceil((data?.data?.filter(item => item.user.userType === "HOST")?.length || 0) / pageSize);
  
  const onPrevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const onNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const currentData = data?.data
    .filter(item => item.user.userType === "DRIVER")
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="">
      <TableHeader />
      <div className="py-3"></div>
      <div className="border p-4">
        {currentData?.map(item => {
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
        <TableFooter
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevPage={onPrevPage}
          onNextPage={onNextPage}
        />
      </div>
    </div>
  );
};

export default HostTableList;

export const TableHeader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 py-3 bg-[#E5F2FF] text-[#121744] font-semibold">
      <div className="col-span-1 text-center">User ID</div>
      <div className="col-span-2">Name</div>
      <div className="col-span-2">Phone No.</div>
      <div className="col-span-2">Email ID:</div>
      <div className="col-span-2">Registeration Date</div>
      <div className="col-span-2">KYC</div>
      <div className="col-span-1">Action</div>
    </div>
  );
};

type Props = {
  userID: string | undefined;
  userName: string | undefined;
  number: string | undefined;
  email: string | undefined;
  registerationDate: string | undefined;
  kycInfo: string | undefined;
};

export const TableRow = ({ userID, userName, number, email, registerationDate, kycInfo }: Props) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
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

export const TableFooter = ({
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage,
}: {
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
}) => {
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  return (
    <div className="flex justify-between">
      <div>Showing {(currentPage - 1) * 10 + 1}-{Math.min(currentPage * 10, totalPages * 10)} from {totalPages * 10}</div>
      <div>
        <ul className="flex gap-4">
          {/* Previous Page Button */}
          <li
            className={`text-xl cursor-pointer ${isPrevDisabled ? "text-gray-400" : ""}`}
            onClick={!isPrevDisabled ? onPrevPage : undefined}
          >
            {"<"}
          </li>
          {/* Current Page Number */}
          <li className="text-xl">{currentPage}</li>
          {/* Next Page Button */}
          <li
            className={`text-xl cursor-pointer ${isNextDisabled ? "text-gray-400" : ""}`}
            onClick={!isNextDisabled ? onNextPage : undefined}
          >
            {">"}
          </li>
        </ul>
      </div>
    </div>
  );
};

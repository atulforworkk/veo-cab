import { Divider, LoadingOverlay } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import images from "images/images";
import { useUserQuery } from "query/useUserQuery";
import React, { useEffect, useState } from "react";


const UserListTable = () => {
  const { data, isLoading } = useUserQuery();
  const [visible, { toggle }] = useDisclosure(true);
  const itemsPerPage = 10; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for slicing the data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const currentPageData = (data?.data || []).slice(startIndex, endIndex);
  const totalPages = Math.ceil((data?.data.length || 0) / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="">
      {isLoading ? (
        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
          loaderProps={{ color: "pink", type: "bars" }}
        />
      ) : null}

      <TableHeader />
      <div className="py-3"></div>
      <div className="border p-4">
        {/* Render Table Rows */}
        {currentPageData.map((item) => {
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

        {/* Pagination Controls */}
        <TableFooter
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevPage={handlePrevPage}
          onNextPage={handleNextPage}
        />
      </div>
    </div>
  );
};

export default UserListTable;

export const TableHeader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 py-3 bg-[#E5F2FF] text-[#121744] font-semibold">
      <div className="col-span-1 text-center">User ID</div>
      <div className="col-span-2">Name</div>
      <div className="col-span-2">Phone No.</div>
      <div className="col-span-2">Email ID:</div>
      <div className="col-span-2">Registration Date</div>
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

export const TableRow = ({
  userID,
  userName,
  number,
  email,
  registerationDate,
  kycInfo,
}: Props) => {
  const [verified, setVerified] = useState(true);

  useEffect(() => {
    if (kycInfo === "pending") {
      setVerified(false);
    } else {
      setVerified(true);
    }
  }, [kycInfo]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
        <div className="col-span-1 text-center">{userID}</div>
        <div className="col-span-2">{userName}</div>
        <div className="col-span-2">{number}</div>
        <div className="col-span-2">{email}</div>
        <div className="col-span-2">{registerationDate}</div>
        {verified ? (
          <div className="col-span-2 text-green-400">{kycInfo}</div>
        ) : (
          <div className="col-span-2 ">{kycInfo}</div>
        )}

        <div className="col-span-1">
          <img src={images.actionIcon} alt="" />
        </div>
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
      <div>Showing {((currentPage - 1) * 10) + 1}-{Math.min(currentPage * 10, totalPages * 10)} from {totalPages * 10}</div>
      <div>
        <ul className="flex gap-4">

          <li
            className={`text-xl cursor-pointer ${isPrevDisabled ? "text-gray-400" : ""}`}
            onClick={!isPrevDisabled ? onPrevPage : undefined}
          >
            {"<"}
          </li>
          <li className="text-xl">{currentPage}</li>
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

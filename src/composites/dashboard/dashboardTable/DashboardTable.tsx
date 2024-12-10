import { Divider } from "@mantine/core";
import React from "react";

type Props = {};

const DashboardTable = (props: Props) => {
  return (
    <div className="">
      <TableHeader />
      <div className="border p-4">
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableFooter />
      </div>
    </div>
  );
};

export default DashboardTable;

export const TableHeader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2   py-3 bg-[#E5F2FF] text-[#121744] font-semibold">
      <div className="col-span-1 text-center">Name</div>
      <div className="col-span-2">Phone No.</div>
      <div className="col-span-2">Email ID:</div>
      <div className="col-span-3">Registeration Date</div>
      <div className="col-span-2">KYC</div>
      <div className="col-span-2">Action</div>
    </div>
  );
};

export const TableRow = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2   ">
        <div className="col-span-1 text-center">Peter Thiel</div>
        <div className="col-span-2">+1 3245 455 890</div>
        <div className="col-span-2">Peter@mail.com</div>
        <div className="col-span-3">12 Aug 2023, 09:3 PM</div>
        <div className="col-span-2 text-green-400">Verified</div>
        <div className="col-span-2">Approve Rejected X</div>
      </div>
      <Divider my="xs" />
    </div>
  );
};

export const TableFooter = () => {
  const pages = [1, 2, 4, 5, 6, 7, 8, 9, ];
  return (
    <div className="flex justify-between">
      <div>Showing 1-5 from 100</div>
      <div>
        <ul className="flex gap-4">
          <li className="text-xl">{"<"}</li>
          {pages.map((page, index) => {
            return <li key={index}>{page}</li>;
          })}
        <li  className="text-xl">{">"}</li>
        </ul>
      </div>
    </div>
  );
};

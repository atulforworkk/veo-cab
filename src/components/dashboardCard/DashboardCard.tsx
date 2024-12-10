import images from 'images/images'
import React from 'react'

type Props = {
    heading:string;
    imageSrc:string;
    number:string;
}

const DashboardCard = ({heading="Users", imageSrc = "src/images/Group 494.png",number}: Props) => {
  return (
    <div className=" col-span-2 border rounded-3xl p-2">
    <div className="flex items-center gap-2 ">
    <img src={imageSrc} alt="" className="w-22 h-22" />
    <div className="">
      <h1 className="text-[#718EBF] text-lg">
      {heading}
      </h1>
      <h1 className="font-semibold text-2xl">
      {number}
      </h1>
    </div>
  </div>
  </div>
  )
}

export default DashboardCard
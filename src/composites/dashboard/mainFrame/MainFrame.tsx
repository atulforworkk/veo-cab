import images from "images/images";
import React from "react";
import { BarChart, DonutChart } from '@mantine/charts';
import { data,donoutChartData } from "./data";
type Props = {};

const MainFrame = (props: Props) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className=" col-span-9  shadow-lg rounded-3xl p-4">
        <div className="p-4">
        <h1 className="font-semibold text-2xl">OverView</h1>
        <p className="text-[#ACACAC]">Monthly Earning</p>
        </div>
        {/* <img src={images.OverViewGraph} alt="" /> */}
        <BarChart
      h={300}
      data={data}
      dataKey="month"
      series={[{ name: 'Smartphones', color: 'blue' }]}
    />
      </div>


{/* mobile App chart */}
      <div className=" col-span-3  shadow-lg rounded-3xl p-2 ">
      <div className="p-4">
        <h1 className="font-semibold text-2xl">Mobile App</h1>
        <p className="text-[#ACACAC]">Downloads this month</p>
        </div>
        <div className="flex items-center justify-center">
        <DonutChart size={266}  thickness={30} data={donoutChartData} />
        </div>
      </div>

    </div>
  );
};

export default MainFrame;

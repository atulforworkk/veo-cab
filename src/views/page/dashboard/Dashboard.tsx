import DashboardCard from '@/components/dashboardCard/DashboardCard'
import DashboardTable from '@/composites/dashboard/dashboardTable/DashboardTable'
import MainFrame from '@/composites/dashboard/mainFrame/MainFrame'
import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
  return (
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
    <div className="pt-12">
    <DashboardTable/>
    </div>
    <div className="py-12 px-4">
      <h1>Most Popular Rental Cars</h1>
    <DashboardTable/>
    </div>
  </div>
  )
}

export default Dashboard
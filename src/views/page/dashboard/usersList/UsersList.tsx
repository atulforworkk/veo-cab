import DashboardTable from '@/composites/dashboard/dashboardTable/DashboardTable'
import React from 'react'

type Props = {}

const UsersList = (props: Props) => {
  return (
    <div>
      <h1>
        Users List 
      </h1>
      <DashboardTable/>
    </div>
  )
}

export default UsersList
import DriverTableList from '@/components/driverTableList/DriverTableList'
import AllListHeader from '@/components/listHeader/AllListHeader'
import React from 'react'

type Props = {}

const DriverList = (props: Props) => {
  return (
    <div>
        <AllListHeader heading="Drivers List" subHeading="Here is the information about all the hosts."/>
        <DriverTableList/>
    </div>
  )
}

export default DriverList
import DriverTableList from '@/components/driverTableList/DriverTableList'
import ListHeader from '@/components/listHeader/listHeader'
import React from 'react'

type Props = {}

const DriverList = (props: Props) => {
  return (
    <div>
        <ListHeader heading="Drivers List" subHeading="Here is the information about all the hosts."/>
        <DriverTableList/>
    </div>
  )
}

export default DriverList
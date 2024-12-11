import HostTableList from '@/components/hostTableList/HostTableList'
import AllListHeader from '@/components/listHeader/AllListHeader'
import React from 'react'

type Props = {}

const HostList = (props: Props) => {
  return (
    <div>
              <AllListHeader heading="Hosts List" subHeading="Here is the information about all the hosts."/>
              <HostTableList/>
    </div>
  )
}

export default HostList
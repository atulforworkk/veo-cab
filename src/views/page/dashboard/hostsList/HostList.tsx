import ListHeader from '@/components/listHeader/listHeader'
import React from 'react'

type Props = {}

const HostList = (props: Props) => {
  return (
    <div>
              <ListHeader heading="Hosts List" subHeading="Here is the information about all the hosts."/>
    </div>
  )
}

export default HostList
import AllListHeader from '@/components/listHeader/AllListHeader'
import React from 'react'

type Props = {}

const AllCarList = (props: Props) => {
  return (
    <div>
           <AllListHeader heading="Hosts List" subHeading="Here is the information about all the cars."/>
    </div>
  )
}

export default AllCarList
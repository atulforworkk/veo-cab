import React from 'react'
import SideImage from '@/components/sideImage/SideImage'
import Login from '@/composites/login/Login'

type Props = {}

const SubAdminLogin = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 ">
        <Login heading="Sub Admin Login"/>
    <SideImage/>
    </div>
  )
}

export default SubAdminLogin
import React from 'react'
import UserListTable from '@/components/userListTable/UserListTable'
import AllListHeader from '@/components/listHeader/AllListHeader'
type Props = {}

const UsersList = (props: Props) => {
  return (
    <div className=''>
      <AllListHeader heading="Users List" subHeading="Here is the information about all the users."/>
      <UserListTable/>
    </div>
  )
}

export default UsersList



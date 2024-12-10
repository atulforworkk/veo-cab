import React from 'react'
import UserListTable from '@/components/userListTable/UserListTable'
import ListHeader from '@/components/listHeader/listHeader'
type Props = {}

const UsersList = (props: Props) => {
  return (
    <div className=''>
      <ListHeader heading="Users List" subHeading="Here is the information about all the users."/>
      <UserListTable/>
    </div>
  )
}

export default UsersList



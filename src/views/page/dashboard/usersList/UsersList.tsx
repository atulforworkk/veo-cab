import { Button, Input } from '@mantine/core'
import React from 'react'
import UserListTable from '@/components/userListTable/UserListTable'
import { useUserQuery } from 'query/useUserQuery'
type Props = {}

const UsersList = (props: Props) => {
  const{data }= useUserQuery();
  console.log("🚀 ~ UsersList ~ data:", data)
  return (
    <div className='w-11/12 mx-auto'>
      <UsersListHeader/>
      <UserListTable/>
    </div>
  )
}

export default UsersList


export const UsersListHeader = () => {
  return (
    <div className='flex justify-between items-center'>
        <div>
          <h1 className='text-xl font-semibold'>
          Users List 
          </h1>
          <p>
          Here is the information about all the users.
          </p>
        </div>
        <div className='flex gap-4'>
          <Input/>

          <Button className='bg-[#F5F6F8] text-black border '>
            Filter
          </Button>
          <Button className='bg-main-color'>
          Export
          </Button>

        </div>
    </div>
  )
}

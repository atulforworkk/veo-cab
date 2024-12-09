import images from 'images/images'
import React from 'react'


const UserCard = () => {
  return (
    <div className="border rounded-2xl col-span-6 flex p-2 ">
    <div>
      <img
        src={images.userImage}
        alt="userImage"
        className="w-[46px] h-[46px] p-[8px] pt-2 rounded-full "
      />
    </div>
    <div className="w-10/12">
      <div className="flex justify-between">
        <h1 className="font-bold">Alex Smith </h1>
        <div className="flex px-3 py-0.5 rounded-full bg-light-purple justify-around">
          <img src={images.verfiedBadge} alt="" className="" />
          <p className="mx-1 font-medium">Verfied</p>
        </div>
      </div>
      <div>
        <p>+91 8930-188-923</p>
      </div>
    </div>
  </div>
  )
}

export default UserCard
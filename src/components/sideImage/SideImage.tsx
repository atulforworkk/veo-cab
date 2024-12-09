import images from 'images/images'
import React from 'react'


const SideImage = () => {
  return (
    <div className=" col-span-6  flex flex-col items-center h-screen justify-center">
    <img src={images.mainLogo} alt="Company's Logo" className="py-20" />
    <img src={images.groupImg} alt="" />
  </div>
  )
}

export default SideImage


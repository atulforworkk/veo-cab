import images from 'images/images'
import React from 'react'

type Props = {}

const ForgotPassword = (props: Props) => {
  return (
    <div className='flex'>
        <div className='p-10'>
        <img src={images.postLoginLogo} alt="logo" className="h-8 w-44 " />
        </div>
        <div className='flex-1'>

        </div>
        <div className ="flex-1"> 

        </div>
    </div>
  )
}

export default ForgotPassword
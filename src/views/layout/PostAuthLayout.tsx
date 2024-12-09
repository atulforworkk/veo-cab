import images from 'images/images'
import React from 'react'

type Props = {}

const PostAuthLayout = (props: Props) => {
  return (
<div className="flex">
  {/* Sidebar */}
  <div className="w-[18%]  h-screen bg-slate-200 ">
    <div className='p-6'>
    <img src={images.postLoginLogo} alt=""  className='w-37 h-7  '/>
    </div>
  </div>

{/* header */}
  <div className="flex-1">
    <div className="h-[8vh] bg-purple-400">
    </div>
  </div>
</div>
  )
}

export default PostAuthLayout
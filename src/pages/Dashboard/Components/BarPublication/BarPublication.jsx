import React from 'react'
import {BsFillCameraVideoFill , BsEmojiLaughingFill} from "react-icons/bs"
import {FaPhotoVideo} from "react-icons/fa"

function BarPublication() {
  return (
    <div className='flex justify-center shadow-xl '>
        <div className='flex flex-row p-2 '>
            
           <div className='bg-six rounded-full w-10 h-10'>
<img src="" alt="" className='' />
           </div>
            <div className='ml-6 py-1 '>
            <BsFillCameraVideoFill className='text-3xl text-nine'></BsFillCameraVideoFill>
            </div>
            <div className='ml-6 py-1'>
            <FaPhotoVideo className='text-3xl text-height'></FaPhotoVideo>
            </div>
            <div className='ml-6 py-1'>
            <BsEmojiLaughingFill className='text-3xl text-seven'></BsEmojiLaughingFill>
            </div>
        </div>
    </div>
  )
}

export default BarPublication
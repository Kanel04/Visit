import React from 'react'
import {AiOutlineHeart} from "react-icons/ai"
import Mahajanga from "../../../Home/assets/Mahajanga.png"
function PublicationPage() {
  return (
    <div className='flex justify-center w-full py-10 bg-six '>
<div className='overflow-y-auto h-[500px]  w-[500px] bg-primary rounded-xl'>
<div className='flex flex-col   rounded-xl p-4'>
    <div className='w-10 h-10 rounded-full bg-six'>
        <img src="" alt="" />
    </div>
<div className='text-justify mt-2'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium exercitationem commodi, animi delectus et provident in doloribus, debitis repellat fugit neque placeat dicta nam accusamus numquam nulla sit distinctio facere!
</div>
    <div className='mt-2'>
    <img src={Mahajanga} alt="publicationPhoto" />
    </div>
    <div className='flex justify-center py-4'>
    <AiOutlineHeart className='text-3xl '></AiOutlineHeart>
    </div>
</div>
</div>
    </div>
  )
}

export default PublicationPage
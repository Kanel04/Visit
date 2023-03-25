import React from 'react'
import ReactPlayer from 'react-player'
function InformationPage() {
  return (
    <div id='Information' className='h-screen bg-six flex justify-center py-40'>
 <div className=' flex flex-row'>
 <ReactPlayer url='https://www.youtube.com/watch?v=4s05YmQ6jrk' />
 <div className='bg-primary ml-2 p-6 w-96 h-[360px]'>
  <h1 className='text-3xl font-bold'>Voyage à Madagascar</h1>
  <p className='text-five py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati ipsa corrupti, officia nisi accusantium dolores adipisci illum quisquam molestiae a commodi, expedita, quam repellat sapiente dolorum qui. Velit, ullam repellat.</p>
  <p className='text-five'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati ipsa corrupti,</p>
 </div>
</div>  

    </div>
  )
}

export default InformationPage
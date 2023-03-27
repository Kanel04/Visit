import React from 'react'

function FooterPage() {
  return (
    <div className='bg-three h-[250px] flex flex-row'>
      <div className='px-12 py-8'>
      <h2 className='flex flex-row text-3xl font-bold mt-2 ml-4 text-primary'><p className='text-6xl text-primary font-bold '>V</p>isit.</h2>
      </div>
      <div className='flex flex-col ml-80 py-8  '>
<a href='#About' className="text-primary py-2 font-bold hover:underline cursor-pointer">A propos</a>
<a href='#Contact' className="text-primary py-2 font-bold hover:underline cursor-pointer">Contact</a>
<a href='#Service' className="text-primary py-2 font-bold hover:underline cursor-pointer">Services</a>
<a href='#Information' className="text-primary py-2 font-bold hover:underline cursor-pointer">information</a>
        </div>
      <div className='py-20 px-[150px]'>
        <p className='text-primary '>© Copyright 2023 , notre site de voyage Visit. </p>
      </div>
    </div>
  )
}

export default FooterPage
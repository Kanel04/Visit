import React from 'react'
import { LinkButton } from '../../../../components/Buttons'
import Mahajanga from "../../assets/Mahajanga.png"
function AboutPage() {
  return (
    <div id='About' className='h-screen bg-six'>

<div className='flex justify-center flex-row py-20 '>
    <div className=''>
        <img src={Mahajanga} alt="Mahajanga carte"  className='w-[500px] h-[500px]'/>
    </div>
    <div className='bg-primary w-[500px] h-[500px] '>
<h1 className='font-bold mt-5 text-3xl ml-4'>A Madagascar , il y a des lieux touristiques</h1>
<p className='p-4 font-bold text-five'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis facere quasi dolore nobis nulla at ipsa molestiae tenetur, ducimus sequi! Dolorum harum quam cum explicabo rerum debitis, quo consequatur veritatis.</p>
 <p className='p-4 font-bold text-five'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempora libero unde numquam. Quia sit, saepe reprehenderit nemo velit beatae corrupti repellendus ipsa aperiam quaerat, praesentium animi, a non earum.</p>  
    <LinkButton page="/" className="bg-three px-7 py-3 text-primary ml-4 mt-12 ">Commencer à visiter</LinkButton>
    </div>
</div>
    </div>
  )
}

export default AboutPage
import React from 'react'
import {AiOutlineMail , AiOutlinePhone} from "react-icons/ai"
import {ImLocation } from "react-icons/im"
import {MdFax} from "react-icons/md"
import { Button } from '../../../../components/Buttons'
import { Input } from '../../../../components/Input'
function ContactPage() {
  return (
    <div id='Contact' className='h-screen flex justify-center py-12 bg-six '>
<div className='flex flex-col'>
<div className='flex flex-row'>
<div className='bg-three w-40 h-40 ml-40 flex justify-center z-40 '>
<AiOutlineMail className='text-primary text-8xl mt-6  '></AiOutlineMail>
</div>
<div className='bg-three w-40 h-40 ml-6 flex justify-center z-40'>
<AiOutlinePhone  className='text-primary text-8xl mt-6  ' ></AiOutlinePhone>
</div>
<div className='bg-three w-40 h-40 ml-6 flex justify-center z-40'>
<ImLocation  className='text-primary text-8xl mt-7 '></ImLocation>
</div>
<div className='bg-three w-40 h-40 ml-6 flex justify-center z-40'>
<MdFax className='text-primary text-8xl mt-7 '></MdFax>
</div>

</div>
<div className='flex flex-row bg-primary w-[1000px] h-[460px] z-30 '>
<div>
<div className='flex flex-row mt-10 ml-8'>
<AiOutlineMail className='text-2xl '></AiOutlineMail>
<p className='ml-4'>thelegendanelka@gmail.com</p>
</div>
<div className='flex flex-row mt-4 ml-8'>
<AiOutlinePhone className='text-2xl'></AiOutlinePhone>
<p className='ml-4'>+261 32 57 390 58</p>
</div>
<div className='flex flex-row mt-4 ml-8'>
<ImLocation className='text-2xl'></ImLocation>
<a
className='ml-4 hover:underline ' 
href="https://www.google.com/maps/place/Ambohimandamina/@-15.7165647,46.3427353,17z/data=!3m1!4b1!4m6!3m5!1s0x2203fbc7d5078047:0xd2cab551c012a77b!8m2!3d-15.7165647!4d46.344924!16s%2Fg%2F11jsghnl3k">
    Ambohimandamina, Mahajanga
</a>
</div>
<div className='flex flex-row mt-4 ml-8'>
<MdFax className='text-2xl'></MdFax>
<p className='ml-4'>401</p>
</div>
</div>
<div className='flex flex-col ml-40 p-5 '>
    <Input type="text" placeholder="Votre nom" className="mt-10 "></Input>
    <Input type="email" placeholder="Votre email" className="mt-6 "></Input>
    <Input type="text" placeholder="Votre message" className="mt-6 h-40 "></Input>
    <Button className="mt-6 py-3">Envoyer</Button>
</div>

</div>
</div>
    </div>
  )
}

export default ContactPage
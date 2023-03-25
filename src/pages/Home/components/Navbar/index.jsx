import React from 'react'
import { LinkButton } from '../../../../components/Buttons'

function Navbar() {
  return (
    <div>
      <nav className='bg-image bg-cover h-[350px] flex flex-row '>
        <div className='flex flex-row py-4 ml-4'>
          <div className='text-5xl font-bold text-three'>V</div>
          <div className='text-primary font-bold text-3xl'>isit.</div>
        </div>
        <div className='flex flex-row ml-80 py-4  '>
<a href='#About' className="text-primary px-4 font-bold hover:underline cursor-pointer">A propos</a>
<a href='#Contact' className="text-primary px-4 font-bold hover:underline cursor-pointer">Contact</a>
<a href='#Service' className="text-primary px-4 font-bold hover:underline cursor-pointer">Services</a>
<a href='#Information' className="text-primary px-4 font-bold hover:underline cursor-pointer">information</a>
        </div>
        <div className='flex flex-row ml-80 '>
<LinkButton page="/" className="text-primary hover:underline py-4">Connexion</LinkButton>
 <LinkButton page="/" className="text-primary bg-three px-7 py-4 rounded-sm mt-2 hover:bg-primary hover:text-three">S'inscrire</LinkButton>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

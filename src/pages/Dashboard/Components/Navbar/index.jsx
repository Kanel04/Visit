import React , {useState} from 'react'
import { LinkButton } from '../../../../components/Buttons'
import {RxAvatar} from "react-icons/rx";
import Sidebar from './Sidebar';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className='bg-tsingy bg-cover h-[350px] flex flex-row z-10 w-screen '>
        <div className='flex flex-row py-4 ml-4'>
          <div className='text-5xl font-bold text-primary'>V</div>
          <div className='text-primary font-bold text-3xl'>isit.</div>
        </div>
        <div className='flex flex-row ml-40   '>
        <LinkButton page="/" className="text-primary hover:underline py-4">Restaurant</LinkButton>
        <LinkButton page="/" className="text-primary hover:underline py-4">Hôtel</LinkButton>
        <LinkButton page="/" className="text-primary hover:underline py-4">Agence de voyage</LinkButton>
        <LinkButton page="/" className="text-primary hover:underline py-4">Transport</LinkButton>
        <LinkButton page="/lieu" className="text-primary hover:underline py-4">Lieux</LinkButton>
        </div>
        <div className='flex flex-row ml-60'>
        <LinkButton page="/" className="text-primary hover:underline py-4">Deconnexion</LinkButton>
        <button 
             type='button'
             onClick={() => setIsOpen(!isOpen)}
            className="flex flex-row"
             >
               {isOpen ? ( <Sidebar></Sidebar> ) : (
        <RxAvatar className='text-primary text-3xl mt-4'></RxAvatar>
        )}
        </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

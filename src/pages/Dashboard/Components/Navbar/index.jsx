import React , {useState} from 'react'
import { LinkButton } from '../../../../components/Buttons'
import {RxAvatar} from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function Navbar() {
   
  let navigate = useNavigate();
  return (
    <div>
      <nav className='bg-tsingy bg-cover h-[350px] flex flex-row z-10 w-screen '>
        <div className='flex flex-row py-4 ml-4'>
          <div className='text-5xl font-bold text-primary'>V</div>
          <div className='text-primary font-bold text-3xl'>isit.</div>
        </div>
        <div className='flex flex-row ml-40   '>
        <LinkButton page="/restaurant" className="text-primary hover:underline py-4">Restaurant</LinkButton>
        <LinkButton page="/hotel" className="text-primary hover:underline py-4">Hôtel</LinkButton>
        <LinkButton page="/agence" className="text-primary hover:underline py-4">Agence de voyage</LinkButton>
        <LinkButton page="/transport" className="text-primary hover:underline py-4">Transport</LinkButton>
        <LinkButton page="/lieu" className="text-primary hover:underline py-4">Lieux</LinkButton>
        </div>
        <div className='flex flex-row ml-60'>
        <div className='py-4'>
        <button className='text-primary hover:underline  font-bold' onClick={()=>{localStorage.removeItem("userId"); navigate("/")}}>se deconnecter</button> 
        </div>
      <LinkButton page="/profil" className="py-4"><RxAvatar className='text-primary text-3xl'></RxAvatar></LinkButton>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

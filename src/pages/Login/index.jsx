import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Buttons'
import { Input } from '../../components/Input'

function LoginPage() {
  return (
    <div className='bg-six h-screen flex justify-center py-20'>
<div className='bg-primary w-96 h-[500px] py-12'>
  <h1 className='font-bold text-3xl text-center '>Connexion</h1>
  <div className='flex justify-center py-10'>
   <div className='flex flex-col'>
   <Input type="email" placeholder="Votre email " ></Input>
    <Input type="password" placeholder="Votre mot de passe  " className="mt-6" ></Input>
    <p className='flex flex-row font-bold mt-4'>Créer un compte. <Link to="/register" className='ml-2 hover:bg-five hover:text-primary font-bold hover:underline'> Cliquer ici !</Link></p>
    <Button className="py-3 mt-6">Se connecter</Button>
   </div>
  </div>
</div>
    </div>
  )
}

export default LoginPage
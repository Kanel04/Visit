import React,  {useState} from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Buttons'
import { Input } from '../../components/Input'
import toast from 'react-hot-toast'
import { BASE_URL } from '../../constant'
import axios from 'axios'

function RegisterPage({history}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const registerHandler = async (e) => {
      e.preventDefault();

      const config = {
          header: {
              "Content-Type": "application/json",
          },
      };

      if (password !== confirmpassword) {
          setPassword("");
          setConfirmPassword("");
          setTimeout(() => {
              setError("");
          }, 5000);
          return alert("votre mot de passe doit être la même que celle de votre confirmation de mot de passe  ");
      }

      try {
          const { data } = await axios.post(
              `${BASE_URL}/api/v1/auth/register`,
              {
                  name,
                  phone,
                  email,
                  password,
              },
              config
          );

          localStorage.setItem("authToken", data.token);

          if (localStorage.getItem("authToken")){
              setName("");
              setPhone("");
              setEmail("");
              setPassword("");
              setConfirmPassword("");
              alert(`${name}  vous êtes inscrit`)
              
          }

          history.push("/");
      } catch (error) {
          setError(error.response.data.error);
          setTimeout(() => {
              setError("");
             alert(`il y a une erreur`)
          }, 5000);
      }
  };

  return (
    <div className='bg-six h-screen flex justify-center py-5'>
    <div className='bg-primary w-96 h-[590px] py-12'>
    <form onSubmit={registerHandler} >
      <h1 className='font-bold text-3xl text-center '>Formulaire</h1>
      <div className='flex justify-center py-10'>
       <div className='flex flex-col'>
       <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Votre nom complet" ></Input>
       <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Votre email " className="mt-6" ></Input>
       <Input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Votre numéro téléphone " className="mt-6" ></Input>
        <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Votre mot de passe " className="mt-6" ></Input>
        <Input value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirmation mot de passe " className="mt-6" ></Input>
        <p className='flex flex-row font-bold mt-4'>retour à l'acceuil. <Link to="/" className='ml-2 hover:bg-five hover:text-primary font-bold hover:underline'> Cliquer ici !</Link></p>
        <Button type="submit" className="py-3 mt-6">Se connecter</Button>
       </div>
      </div>
      </form>
    </div>
        </div>
  )
}

export default RegisterPage
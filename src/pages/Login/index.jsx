import React ,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Buttons'
import { Input } from '../../components/Input'
import axios from 'axios'
import {useNavigate} from "react-router-dom";
import { BASE_URL } from '../../constant/index'

function LoginPage({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  let navigate = useNavigate();
  
 

  useEffect(() => {
      if (localStorage.getItem("authToken")) { 
          setEmail("");
          setPassword("");
      }
  }, [history]);

  const loginHandler = async (e) => {
      e.preventDefault();

      const config = {
          header: {
              "Content-Type": "application/json",
          },
      };

      try {
          const { data } = await axios.post(
              `${BASE_URL}/api/v1/auth/login`,
              { 
                  email, 
                  password 
              },
              config
          );

          localStorage.setItem("authToken", data.token);
          console.log(data.data.user["_id"]);
          localStorage.setItem("userId", data.data.user["_id"]);
          navigate("/dashboard");
      } catch (error) {
          console.log(error.message);
          setError(error.message);
          setTimeout(() => {
              alert("Mot de Passe Incorrect ou Email Incorrect ");
          }, 5000);
      }
  };
  return (
    <div className='bg-six h-screen flex justify-center py-20'>
<div className='bg-primary w-96 h-[500px] py-12'>
<form onSubmit={loginHandler}>
  <h1 className='font-bold text-3xl text-center '>Connexion</h1>
  <div className='flex justify-center py-10'>
   <div className='flex flex-col'>
   <Input type="email" placeholder="Votre email "  onChange={(e) => setEmail(e.target.value)} value={email} ></Input>
    <Input type="password" placeholder="Votre mot de passe  "  onChange={(e) => setPassword(e.target.value)} value={password} className="mt-6" ></Input>
    <p className='flex flex-row font-bold mt-4'>Créer un compte. <Link to="/register" className='ml-2 hover:bg-five hover:text-primary font-bold hover:underline'> Cliquer ici !</Link></p>
    <Button type="submit" className="py-3 mt-6">Se connecter</Button>
   </div>
  </div>
  </form>
</div>
    </div>
  )
}

export default LoginPage
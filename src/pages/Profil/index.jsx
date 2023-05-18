import axios from 'axios';
import React , {useEffect, useState} from 'react'
import { BASE_URL } from '../../constant';
import Modal from "./Modal";

function ProfilPage() {
  //modal modification
    const [modalOn, setModalOn] = useState(false);
    const [choice, setChoice] = useState(false)
  
    const clicked = () => {
      setModalOn(true)
    }
  // get the iformation user from backend
//get the user in data base
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const [userProfile, setUserProfile] = useState({});

useEffect(async() =>{
  const config = {
    header: {
        "Content-Type": "application/json",
    },
};
const idUser = localStorage.getItem("userId");
const { data } = await axios.get(
  `${BASE_URL}/api/user/getUser/${idUser}`, config
  
);

setName(data.data.name);
setPhone(data.data.phone);
setEmail(data.data.email);


}, []); 


  return (
    <div className='bg-six flex justify-center py-20 h-screen'>
        <div className='flex justify-center bg-primary w-96 h-[500px] rounded-xl shadow-xl p-4 '>
<div className='flex flex-col py-6'>
<div className='bg-six w-32 h-32 rounded-full'>
    <img src="" alt="" />
</div>
<div className='mt-5'>
    <p className='font-bold mt-4'>{name}</p>
    <p className='font-bold mt-4'>{phone}</p>
    <p className='font-bold mt-4'>{email}</p>

</div>
<div className='mt-12'>
<button 
 type="button"
 
 onClick={clicked}
className='bg-three font-bold text-primary px-7 py-3 rounded-xl '>Modifier</button>
</div>
</div>
        </div>
        {modalOn && < Modal setModalOn={setModalOn} setChoice={setChoice} />}
    </div>
  )
}

export default ProfilPage
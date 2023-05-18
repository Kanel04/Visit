import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import { BASE_URL } from '../../constant/index'
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';

function RestaurantPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [table, setTable] = useState("");
  const [adresse, setAdresse] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const restaurantHandler = async (e) => {
      e.preventDefault();

      const config = {
          header: {
              "Content-Type": "application/json",
          },
      };

      try {
          const { data } = await axios.post(
              `${BASE_URL}/api/restaurant/createRestaurant`,
              {
                  name,
                  image,
                  table,
                  adresse,
                  phone,
                  email,
                                },
              config
          );

          localStorage.setItem("authToken", data.token);

          if (localStorage.getItem("authToken")){
              setName("");
              setPhone("");
              setEmail("");
              setTable("");
              setImage("");
              setAdresse("");
              alert(`le restaurant ${name} est inscrit`)
              
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


  const [images , setImages]= useState([]);
  const [imageURLs , setImageURLs] = useState([]);
  useEffect (()=>{
    if (images.length < 1)return;
    const newImageUrls = [];
    images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);
  function onImageChange (e){
    setImages ([...e.target.files]);
  
  }

  // get data from backend 
  const { id } = useParams();
  
  const fetchRestaurantData = () => {

    fetch(`${BASE_URL}/api/restaurant/getAllRestaurant`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setNameRestaurant(data);
        setPhoneRestaurant(data);
        setAdresseRestaurant(data);
        setEmailRestaurant(data);
        setTableRestaurant(data);
        setImageRestaurant(data);
        
      })
  }

  useEffect(() => {
    fetchRestaurantData()
  }, [])

// Loading session 
  const [loading, setLoading] = useState(true);

 


// other from webgenerator

//get the user in data base
  const [nameRestaurant, setNameRestaurant] = useState([]);
  const [phoneRestaurant , setPhoneRestaurant] = useState([]);
  const [adresseRestaurant , setAdresseRestaurant] = useState([]);
  const [emailRestaurant , setEmailRestaurant] = useState([]);
  const [tableRestaurant , setTableRestaurant] = useState([]);
  const [imageRestaurant , setImageRestaurant] = useState([]);
  
useEffect(async() =>{
  const config = {
    header: {
        "Content-Type": "application/json",
    },
};
const idUser = localStorage.getItem("userId");
const { data } = await axios.get(
  `${BASE_URL}/api/restaurant/getAllRestaurant`, config
  
);

setNameRestaurant(data.data.name);
setPhoneRestaurant(data.data.phone);
setAdresseRestaurant(data.data.adresse);
setEmailRestaurant(data.data.email);
setTableRestaurant(data.data.table);


}, []); 


  return (
    <div className='flex flex-row bg-six h-screen w-screen '>
        <form onSubmit={restaurantHandler}>
<div className='bg-primary w-96 h-screen rounded-r-xl shadow-xl flex justify-center  '>
<div className='flex flex-col py-10'> 
<h1 className='font-bold text-xl '>Ajouter votre restaurant</h1>
<div className='mt-6'>

</div>
<div className='w-40 h-40 bg-six circle'>
<input type="file"  id='fileInputFile' multiple accept='image/*' onChange={onImageChange} value={image}  />
{imageURLs.map(imageSrc => <img
src={imageSrc} alt="" className='Image'  id='image'
value={image}
onChange={(e) => setImage(e.target.value)}
/>)}
</div>
<input type="text" className='border-b-2 py-3 px-6 mt-4' value={name} onChange={(e) => setName(e.target.value)} placeholder='le nom de votre restaurant'  />
<input type="number" className='border-b-2 py-3 px-6 mt-4'value={table} onChange={(e) => setTable(e.target.value)} placeholder='nombre de table' />
<input type="text" className='border-b-2 py-3 px-6 mt-4' value={adresse} onChange={(e) => setAdresse(e.target.value)} placeholder='Adresse'  />
<input type="text" className='border-b-2 py-3 px-6 mt-4' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Numéro téléphone'  />
<input type="text" className='border-b-2 py-3 px-6 mt-4' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Adresse email'  />
<button type='submit' className='bg-three font-bold text-primary py-3 px-6 mt-4'>Ajouter</button>
</div>
</div>
</form>
<div className='p-5'>
{loading ? (
        <Loader></Loader>
      ) : (
        <Card nameRestaurant={nameRestaurant}></Card>
      )}
</div>
    </div>
  )
}

export default RestaurantPage
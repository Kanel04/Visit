import React from 'react'
import Card from './Card'

function RestaurantPage() {
  return (
    <div className='flex flex-row bg-six h-screen w-screen '>
<div className='bg-primary w-96 h-screen rounded-r-xl shadow-xl flex justify-center  '>
<div className='flex flex-col py-10'> 
<h1 className='font-bold text-xl '>Ajouter votre hôtel</h1>
<div className='mt-6'>

</div>
<div className='w-40 h-40 bg-six'>
<input type="file" className='hidden' />
<img src="" alt="" />
</div>
<input type="text" className='border-b-2 py-3 px-6 mt-4' placeholder='le nom de votre hôtel'  />
<input type="number" className='border-b-2 py-3 px-6 mt-4' placeholder='nombre de chambre' />
<input type="text" className='border-b-2 py-3 px-6 mt-4' placeholder='Adresse'  />
<input type="text" className='border-b-2 py-3 px-6 mt-4' placeholder='Numéro téléphone'  />
<input type="text" className='border-b-2 py-3 px-6 mt-4' placeholder='Adresse email'  />
<button type='submit' className='bg-three font-bold text-primary py-3 px-6 mt-4'>Ajouter</button>
</div>
</div>
<div className='p-5'>
  <Card></Card>
</div>
    </div>
  )
}

export default RestaurantPage
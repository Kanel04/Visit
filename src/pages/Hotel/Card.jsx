import React from 'react'

function Card() {
  return (
    <div className='flex justify-center p-5 w-96 h-[450px] bg-primary'>
<div className='flex flex-col'>
<div className='w-80 h-40 bg-six'>
<img src="" alt="" />
</div>
<p className='mt-4 text-center '>Nom du hôtel</p>
<p className='mt-6 '>Nombre de chambre </p>
<p className='mt-2 '>Adresse</p>
<p className='mt-2 '>Numéro téléphone</p>
<p className='mt-2 '>Email</p>

<div className='flex justify-between'>
    <button type='submit' className='mt-2 bg-three text-primary font-bold px-6 py-3' >Modifier</button>
    <button type='submit' className='mt-2 bg-nine text-primary font-bold px-6 py-3' >Suprimer</button>
</div>
</div>
    </div>
  )
}

export default Card
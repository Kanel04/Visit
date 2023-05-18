import React from 'react'

function Card (props) {


  return (
    <div className='flex justify-center p-5 w-96 h-[450px] bg-primary'>
<div className='flex flex-col'>
<div className='w-80 h-40 bg-six'>
<img src={props.image} alt="photo" />
</div>
<p className='mt-4 text-center '>{props.nameRestaurant}</p>
<p className='mt-6 '>{props.numberTable}</p>
<p className='mt-2 '>{props.adresse}</p>
<p className='mt-2 '>{props.numberPhone}</p>
<p className='mt-2 '>{props.email}</p>

<div className='flex justify-between'>
    <button type='submit' className='mt-2 bg-three text-primary font-bold px-6 py-3' >Modifier</button>
    <button type='submit' className='mt-2 bg-nine text-primary font-bold px-6 py-3' >Suprimer</button>
</div>
</div>
    </div>
  )
}

export default Card
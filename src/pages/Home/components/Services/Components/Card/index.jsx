import React from 'react'

function Card(props) {
  return (
    <div>
        <div className='bg-primary w-96 h-[500px] ml-6'>
            <img src={props.image} alt="image" className={`w-96 h-[250px] bg-cover ${props.className}`} />
<h1 className='font-bold text-3xl ml-6 py-2'>{props.title}</h1>
<p className=' text-five p-6 '>{props.text}</p>

        </div>
    </div>
  )
}

export default Card
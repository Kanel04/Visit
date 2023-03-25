import React from 'react'
import Card from './Components/Card'
import image from "./Components/assets/Madagascar.jpeg"
import reservation from "./Components/assets/Resevation.jpg"
import transport from "./Components/assets/Transport.jpg"
function ServicePage() {
  
  return (
    <div id='Service' className='h-screen bg-six flex justify-center py-20'>
      <Card
      image={image}
      title="Trouver des lieux"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi saepe pariatur dolorum vitae dolorem voluptatibus qui optio, ducimus suscipit obcaecati et vero tempore provident aperiam tenetur inventore! Dicta, atque illum."

      ></Card>
      <Card
      image={reservation}
      title="Reservation "
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi saepe pariatur dolorum vitae dolorem voluptatibus qui optio, ducimus suscipit obcaecati et vero tempore provident aperiam tenetur inventore! Dicta, atque illum."
      ></Card>
       <Card
      image={transport}
      title="Transport"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi saepe pariatur dolorum vitae dolorem voluptatibus qui optio, ducimus suscipit obcaecati et vero tempore provident aperiam tenetur inventore! Dicta, atque illum."
      ></Card>
      
    </div>
  )
}

export default ServicePage
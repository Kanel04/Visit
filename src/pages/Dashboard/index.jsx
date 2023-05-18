import React from 'react'
import BarPublication from './Components/BarPublication/BarPublication'
import Navbar from './Components/Navbar'
import PublicationPage from './Components/Publication/Publication'

function DashboardPage() {
  return (
    <div className='flex flex-col '>
        <Navbar></Navbar>
<BarPublication></BarPublication>
<PublicationPage></PublicationPage>
    </div>
  )
}

export default DashboardPage
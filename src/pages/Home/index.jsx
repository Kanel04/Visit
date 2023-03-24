import React from 'react'
import AboutPage from './components/About'
import ContactPage from './components/Contacts'
import Header from './components/Header'
import Navbar from './components/Navbar'

function HomePage() {
  return (
    <div className='bg-primary'>
<Navbar></Navbar>
<Header></Header>
<AboutPage></AboutPage>
<ContactPage></ContactPage>
    </div>
  )
}

export default HomePage
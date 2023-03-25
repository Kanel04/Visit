import React from 'react'
import AboutPage from './components/About'
import ContactPage from './components/Contacts'
import FooterPage from './components/Footer'
import Header from './components/Header'
import InformationPage from './components/Information'
import Navbar from './components/Navbar'
import ServicePage from './components/Services'

function HomePage() {
  return (
    <div className='bg-primary'>
<Navbar></Navbar>
<Header></Header>
<AboutPage></AboutPage>
<ContactPage></ContactPage>
<ServicePage></ServicePage>
<InformationPage></InformationPage>
<FooterPage></FooterPage>
    </div>
  )
}

export default HomePage
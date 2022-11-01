import React from 'react'

import NavBar from '../components/NavBar'
import HeroImg2 from '../components/HeroImg2'
import Footer from '../components/Footer'
import Whatsapp from '../components/Whatsapp'

const Contact = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 
      heading="Contáctanos"
      text="Hablemos sobre lo que necesitas"/>
      <Whatsapp/>
      <Footer/>
    </div>
  )
}

export default Contact
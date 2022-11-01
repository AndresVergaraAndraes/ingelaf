import React from 'react'
import NavBar from '../components/NavBar'

import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'
import Footer from '../components/Footer'
import Whatsapp from '../components/Whatsapp'
const About = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 
      heading="Acerca de nosotros"
      text="Nos dedicamos a la automatización
      y control industrial. Nuestro sello de calidad
      está en el armado de tableros eléctricos,metalurgia y electricidad.
      La base de nuestro éxito son los trabajores que dan el máximo de sus
      capacidades a la hora de realizar el trabajo."
      owner='Benjamín Gonzalez Laferte'
      profession='Ingeniero Eléctrico y Técnico en Automatización y Control Industrial.
      Con mas de 10 años de experiencias como electricista. Actualmente es jefe en ABB.' />
      <AboutContent/>
      <Whatsapp/>
      <Footer/>
     
    </div>
  )
}

export default About
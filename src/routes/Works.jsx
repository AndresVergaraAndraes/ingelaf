import React from 'react'
import Footer from '../components/Footer'

import HeroImg2 from '../components/HeroImg2'
import NavBar from '../components/NavBar'
import ProductCard from '../components/ProductCard'
import Whatsapp from '../components/Whatsapp'

const Works = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 
      heading="Ofrecemos soluciones en cada una de estas áreas"/>
    <ProductCard/>
    <Whatsapp/>
    <Footer/>
 
    </div>
  )
}

export default Works
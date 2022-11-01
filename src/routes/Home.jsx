import React from 'react'
import Footer from '../components/Footer'

import HeroImg from '../components/HeroImg'
import NavBar from '../components/NavBar'
import Whatsapp from '../components/Whatsapp'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <HeroImg/>
        <Whatsapp/>
        <Footer/>
    </div>
  )
}

export default Home
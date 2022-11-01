import React from 'react'
import '../styles/HeroImg.css'
import IntroImg from "../assets/electrician.jpg"
import { Link } from 'react-router-dom'
const HeroImg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img 
        src={IntroImg}
        alt="electrician" className='into-img' />
      </div>
      <div className='content'>
      <p>Servicios Eléctricos y mucho más</p>
        <h1>A la medida de nuestros clientes</h1>
        <div>
        <Link 
        to='/servicios'
        className='btn'>Servicios</Link>
        <Link 
        to='/contactenos'
        className='btn btn-light'>Contáctenos</Link>
      </div>
      </div>
      
    </div>
  )
}

export default HeroImg

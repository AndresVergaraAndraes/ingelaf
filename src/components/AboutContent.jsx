import React from 'react'
import '../styles/AboutContent.css'
import foto_1 from '../assets/benjamin1.jpeg'
import foto_2 from '../assets/benjamin2.jpeg'
const AboutContent = () => {
  return (
    <div className='about'>
     <div className='benjamin'>
        <h1>Benjamín González</h1>
        <h4>Fundador</h4>
        <img src={foto_1} alt="" />
        <p>Estudió Ingeniería Eléctrica en IP Chile y Técnico
            en Automatización y Control Industrial en IP Ciisa.
            Posee mas de 10 años de experiencia en
            trabajos relacionados con electricidad
            y metalurgía.
        </p>
     </div>
    </div>
  )
}

export default AboutContent

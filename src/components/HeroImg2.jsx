import React from 'react'
import '../styles/HeroImg2.css'
const HeroImg2 = ({heading,text,owner,profession}) => {
  return (
    <div className='hero-img'>
      <div className='heading'>
        <h1>{heading} </h1>
        <p className='about-description'>{text} </p>
      </div>
      {
        /*
          <div className='worker'>
        <h2>{owner} </h2>
        <p className='profession'>{profession}</p>
      </div>
        */
      }
    
    </div>
  )
}

export default HeroImg2

import React from 'react'
import CV from '../../assets/CV_Rudy_TOUITOU_Developpeur_Web.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn btn-primary'>Mon CV</a>
        <a href="#contact" className='btn'>Discutons</a>
    </div>
  )
}

export default CTA
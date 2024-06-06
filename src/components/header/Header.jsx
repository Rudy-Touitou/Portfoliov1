import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/RudyCvPNG.png'
import HeaderSocials from './HeaderSocials'
import { Typewriter } from 'react-simple-typewriter'



const Header = () => {
  return (
    <header>
        <div className="container header_container">
          <h2 id='home'>Rudy Touitou</h2>
          <h1 className='typewriter'><Typewriter 
            words={['Développeur Fullstack','Content Creator','Intégrateur Web',]}
            loop={true}
            cursor
            cursorStyle='/>'
            cursorBlinking={true}
            cursorColor='#4db5fe'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            />
          </h1>
          {/* <h5 className="text-ligh">Rudy Touitou</h5> */}
          <CTA />
          <HeaderSocials />
          <div className="me">
            <img src={ME} alt="me" />
          </div>
          <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header
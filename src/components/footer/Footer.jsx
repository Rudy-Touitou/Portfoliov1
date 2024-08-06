import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
// import {BsWhatsapp} from 'react-icons/bs'
// import {AiOutlineHome} from 'react-icons/ai'



const Footer = () => {
  return (
    <footer>
      {/* <a href="#home" className='footer_logo'> Rudy TOUITOU </a> */}

      <ul className='permalinks'>
        <li><a href="#home">Haut de page</a></li>
        <li><a href="#about">À Propos de moi</a></li>
        <li><a href="#experience">Expérience</a></li>
        <li><a href="#services">Mes Services</a></li>
        <li><a href="#portfolio">Mes Projets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
      <a href="https://www.linkedin.com/in/rudy-touitou-289732243/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
      {/* <a href="https://wa.me/+33650521529" target='_blank' rel="noreferrer"><BsWhatsapp /></a> */}
      <a href="https://github.com/Rudy-Touitou" target='_blank' rel="noreferrer"><FaGithub/> </a>

      </div>

      <div className="footer_copyright">
        <small>&copy; Rudy TOUITOU Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
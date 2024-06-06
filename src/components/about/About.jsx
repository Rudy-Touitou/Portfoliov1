import React from 'react'
import './about.css'
import ME from '../../assets/photoportfolio1.png'

import {FaAward} from 'react-icons/fa'
import { MdMenuBook } from "react-icons/md";
import { MdScreenSearchDesktop } from "react-icons/md";

const About = () => {
  return (
    <section id='about'>
      <h5 className='overlined'>Faissons connaissance</h5>
      <h2>Quelques Infos</h2>
      <div className='container about_container'>
          <div className="about_me">
            <div className='about_me-img'>
                <img src={ME} alt="About Pic"/>
            </div>
          </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Expérience</h5>
              <small>~ 1 an </small>
            </article>
            <article className='about_card'>
              <MdScreenSearchDesktop className='about_icon'/>
              <h5>Connecté</h5>
              <small>Veille Technologique</small>
            </article>
            <article className='about_card'>
              <MdMenuBook className='about_icon'/>
              <h5>Curiosité </h5>
              <small>Soif d'Apprendre</small>
            </article>
          </div>
          <p>
          " Ayant grandi avec la passion de l'informatique et d'internet, cela m'a naturellement conduit à explorer le monde fascinant du développement web.
          </p>
          <p> En tant que Développeur Web Fullstack  junior, je développe activement mes compétences dans des langages clés tels que <span className='overlined'>React, Vite, NodeJS, MySQL </span>tout en consolidant mes bases en <span className='overlined'>HTML, CSS et JavaScript.</span><br />Concernant la stylisation j'ai pu utiliser des outils comme le <span className='overlined'>Sass et SCSS</span> ou encore <span className='overlined'>Tailwind.</span> J'ai également acquis une expérience significative dans l'utilisation de CMS populaires tel que <span className='overlined'>WordPress.</span>
          </p>
          <p>
          Mon diplôme obtenu il y a un an marque le début d'une carrière prometteuse dans laquelle je m'engage pleinement. En constante quête de perfectionnement, je nourris la détermination d'exceler dans le domaine toujours innovant et en constante évolution du développement web."
          </p>
          <a href="#contact" className='btn btn-primary'>Me Contacter</a>
        </div>
      </div>
    </section>
  )
}

export default About
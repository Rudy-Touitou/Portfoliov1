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
              <small>~ 2 ans </small>
            </article>
            <article className='about_card'>
              <MdScreenSearchDesktop className='about_icon'/>
              <h5>Dev Web Fullstack</h5>
              <small>React, Node.js ...</small>
            </article>
            <article className='about_card'>
              <MdMenuBook className='about_icon'/>
              <h5>Design</h5>
              <small>UX/UI, Suite Adobe, Figma...</small>
            </article>
          </div>
          <p>
          Je suis un développeur web fullstack passionné, animé par une profonde fascination pour l'Asie et la culture web. Toujours motivé et désireux d'apprendre, j'aime explorer de nouvelles technologies et repousser les limites de mes compétences.
          </p>
          <p>
          Je me spécialise principalement en <span className='overlined'>React et Node.js</span>, des technologies avec lesquelles je crée des applications <span className='overlined'>web performantes et modernes</span>. 
           Mon appétence pour le design me pousse à m'investir dans chaque détail esthétique de mes projets. <br></br>J'utilise la suite <span className='overlined'>Adobe</span> pour concevoir des interfaces élégantes et intuitives, alliant créativité et fonctionnalité. Mon objectif est de fusionner la technologie et le design pour offrir des expériences utilisateur uniques et immersives.
          J'ai également acquis une expérience significative dans l'utilisation de CMS populaires tel que <span className='overlined'>WordPress.</span>
          </p>
          <p>
          Rejoignez-moi dans cette aventure où l'innovation technologique rencontre la richesse culturelle et artistique. Ensemble, nous pouvons transformer vos idées en réalité numérique et créer des projets web qui vous ressemblent.
          </p>
          <a href="#contact" className='btn btn-primary'>Me Contacter</a>
        </div>
      </div>
    </section>
  )
}

export default About
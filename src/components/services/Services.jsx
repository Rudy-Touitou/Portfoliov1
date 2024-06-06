import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5 className='overlined'>Ce Que Je Propose</h5>
      <h2>Mes Services</h2>
      <div className='container services_container'>
        <article className='service'>
          <div className="service_head">
            <h3>Intégration Web</h3>
          </div>
          <ul className='service_list'>
          <li>
              <BiCheck className='service_list-icon'/>
              <p>Intégration <strong>HTML/CSS Responsive</strong>.</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Adaptation de sites pour la <strong>Navigation Tactile</strong>.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Adaptation de <strong>Maquettes</strong> pour plusieurs navigateurs.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'/>
              <p>Personnalisation de <strong>Thèmes CMS</strong>.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p><strong>Référencement On-Page</strong> basique.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p><strong>Création de Prototypes</strong> d'interface utilisateur.</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB INTEGRATION */}

        <article className='service'>
          <div className="service_head">
            <h3>Développement Web</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Développement <strong>from Scratch </strong>.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Frontend <strong>Fluide</strong> & Backend <strong>Sécurisé</strong>.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Mise en place de Sites Web <strong>Responsives</strong>.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Développement de <strong>composants UI réutilisables</strong>.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p><strong>Optimisation</strong> des performances de base.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p><strong>Création</strong> de Base de Données.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Configuration de <strong>CMS</strong> existants.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Référencement de base <strong>(SEO)</strong>.</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}

        <article className='service'>
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p><strong>Création de Visuels</strong> pour le Web.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p><strong>Édition de Contenu</strong> pour le Web.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Édition de vidéos de <strong>démonstration produit</strong>, pour les <strong>plateformes de streaming</strong> etc.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Production de <strong>Vidéos Éducatives</strong>.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Animation de <strong>logos </strong>pour les sites Web.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Conception de visuels pour les<strong> Jeux Vidéo</strong>.</p>
            </li>
          </ul>
        </article>

        {/* END OF CONTENT CREATION */}

      </div>
    </section>
  )
}

export default Services
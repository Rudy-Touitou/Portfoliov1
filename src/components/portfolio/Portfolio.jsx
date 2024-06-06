import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/photoportfolio.jpg'
import IMG2 from '../../assets/lachaise-porfolio2.png'
import IMG3 from '../../assets/workinprogress.jpg'
import IMG4 from '../../assets/archidesign.jpg'
import IMG5 from '../../assets/streetartblog.jpg'
import IMG6 from '../../assets/freshlyrestaurant.jpg'


const data = [
  {
    id: 1,
    img: IMG1,
    title: '🧑 Mon Portfolio ',
    github: 'https://github.com/Rudy-Touitou/Portfolio',
    demo: 'https://dribbble.com/shots/23114459-PortFolio'
  },
  {
    id: 2,
    img: IMG2,
    title: '🪑 Blog LaChaise (Fullstack) ',
    github: 'https://github.com/Rudy-Touitou/LaChaise_Blog_Projet3WA',
    demo: 'https://dribbble.com/shots/23114260-LaChaise-Blog'
  },
  {
    id: 3,
    img: IMG3,
    title: '🚧 Work In Progress ',
    // github: 'https://github.com/Kikay-0',
    // demo: 'https://dribbble.com/shots/16673715-Cypto-currency-dashboard-and-financial-data-visualization'
  },
  {
    id: 4,
    img: IMG4,
    title: '🏠 ArchiDesign ',
    github: 'https://github.com/Rudy-Touitou/ArchiDesign',
    demo: 'https://dribbble.com/shots/23114357-ArchiDesign'
  },
  {
    id: 5,
    img: IMG5,
    title: '🎨 StreetArt Blog ',
    github: 'https://github.com/Rudy-Touitou/StreetArtBlog',
    demo: 'https://dribbble.com/shots/23114373-Street-Art-Blog'
  },
  {
    id: 6,
    img: IMG6,
    title: '🍔 Freshly Restaurant ',
    github: 'https://github.com/Rudy-Touitou/Freshly_Restaurant',
    demo: 'https://dribbble.com/shots/23114409-Freshly-Restaurant'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5 className='overlined'>Mes Projets Récents</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {
          data.map(({id, img, title, github, demo}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={img} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  <a href={github} className='btn btn-primary' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    img: IMG1,
    title: 'This is a portfolio item title',
    github: 'https://github.com/Kikay-0',
    demo: 'https://dribbble.com/shots/16673715-Cypto-currency-dashboard-and-financial-data-visualization'
  },
  {
    id: 2,
    img: IMG2,
    title: 'This is a portfolio item title',
    github: 'https://github.com/Kikay-0',
    demo: 'https://dribbble.com/shots/16673715-Cypto-currency-dashboard-and-financial-data-visualization'
  },
  {
    id: 3,
    img: IMG3,
    title: 'This is a portfolio item title',
    github: 'https://github.com/Kikay-0',
    demo: 'https://dribbble.com/shots/16673715-Cypto-currency-dashboard-and-financial-data-visualization'
  },
  {
    id: 4,
    img: IMG4,
    title: 'This is a portfolio item title',
    github: 'https://github.com/Kikay-0',
    demo: 'https://dribbble.com/shots/16673715-Cypto-currency-dashboard-and-financial-data-visualization'
  },
  {
    id: 5,
    img: IMG5,
    title: 'This is a portfolio item title',
    github: 'https://github.com/Kikay-0',
    demo: 'https://dribbble.com/shots/16673715-Cypto-currency-dashboard-and-financial-data-visualization'
  },
  {
    id: 6,
    img: IMG6,
    title: 'This is a portfolio item title',
    github: 'https://github.com/Kikay-0',
    demo: 'https://dribbble.com/shots/16673715-Cypto-currency-dashboard-and-financial-data-visualization'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
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
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
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
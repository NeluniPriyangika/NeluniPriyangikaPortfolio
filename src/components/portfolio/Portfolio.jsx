import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.jpg';


const data = [
  {
    id: 1,
    image: IMG1,
    title: '"Millions Gallery" Blogs WebSite',
    github: 'https://github.com/NeluniPriyangika',
    demo: 'https://dribbble.com/Padnp123?onboarding=true',
  },
  {
    id: 2,
    image: IMG2,
    title: '"CamWorld" Photography Website',
    github: 'https://github.com/NeluniPriyangika',
    demo: 'https://dribbble.com/Padnp123?onboarding=true',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Medical Center Management System',
    github: 'https://github.com/NeluniPriyangika',
    demo: 'https://dribbble.com/Padnp123?onboarding=true',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Car Rental System',
    github: 'https://github.com/NeluniPriyangika',
    demo: 'https://dribbble.com/Padnp123?onboarding=true',
  },
  {
    id: 5,
    image: IMG5,
    title: '"DevOps World" Website ',
    github: 'https://github.com/NeluniPriyangika',
    demo: 'https://dribbble.com/Padnp123?onboarding=true',
  },
  {
    id: 6,
    image: IMG6,
    title: '"HappyWed" Wedding Planing MobileApp',
    github: 'https://github.com/NeluniPriyangika',
    demo: 'https://dribbble.com/Padnp123?onboarding=true',
  },

]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  <a className='btn' target= '_blank' rel="noreferrer" href= {github}>Github</a>
                  <a className='btn btn-primary' target='_blank' rel="noreferrer" href= {demo} >Live Demo</a>
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


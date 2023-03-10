import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Kasun Gayantha',
    review: 'she is very hard working girl.and aslo sheis very talant.i have been working with her sicince 4years. at that time i see her works. she has very good atitude.and she is a very smart girl and responsibale person.', 
  },
  {
    avatar: AVTR2,
    name: 'Maheesha Dashantha',
    review: 'she is very hard working girl.and aslo sheis very talant.i have been working with her sicince 4years. at that time i see her works. she has very good atitude.and she is a very smart girl and responsibale person.', 
  },
  {
    avatar: AVTR3,
    name: 'Damitha De Alwis',
    review: 'she is very hard working girl.and aslo sheis very talant.i have been working with her sicince 4years. at that time i see her works. she has very good atitude.and she is a very smart girl and responsibale person.', 
  },
  {
    avatar: AVTR4,
    name: 'Samitha Nanayakkara',
    review: 'she is very hard working girl.and aslo sheis very talant.i have been working with her sicince 4years. at that time i see her works. she has very good atitude.and she is a very smart girl and responsibale person.', 
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Revire from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container'
        // install Swiper modules
        modules={[Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
       {
        data.map(({avatar,name,review}, index) =>{
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div  className='reviewer_avatar'>
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='reviwer_name'>{name}</h5>
                <small className='reviwer_review'>{review}</small>
              </SwiperSlide>  
            )
        })
       }
      </Swiper>
    </section>
  )
}

export default Testimonials
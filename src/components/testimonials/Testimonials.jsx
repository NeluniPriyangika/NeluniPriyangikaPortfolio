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
    review: 'I wholeheartedly recommend Miss. Neluni Priyangika for any future endeavors she may pursue. She is a standout student with exceptional qualities that will undoubtedly contribute to her success. I have no doubt that she will make a positive impact wherever she goes.', 
  },
  {
    avatar: AVTR2,
    name: 'Maheesha Dashantha',
    review: 'I highly recommend Neluni Priyangika for any endeavor she chooses to pursue. She is a remarkable student who will undoubtedly make valuable contributions wherever she goes.', 
  },
  {
    avatar: AVTR3,
    name: 'Damitha De Alwis',
    review: ' I wholeheartedly recommend Miss. Neluni Priyangika without hesitation. Her dedication, intelligence, responsibility, and positive attitude make her an exceptional student and a true asset. I have no doubt that she will continue to achieve great success in her future endeavors.', 
  },
  {
    avatar: AVTR4,
    name: 'Samitha Nanayakkara',
    review: 'Neluni Priyangika is an exceptional individual who embodies the qualities of a true scholar. Her hard work, talent, positive attitude, intelligence, and sense of responsibility make her an outstanding student and an asset to any academic institution. I have no doubt that she will continue to excel and make significant contributions in any endeavor she pursues.', 
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
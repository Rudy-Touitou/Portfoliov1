import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVATAR1,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In earum voluptatem doloremque cupiditate maxime, fuga iste ut omnis possimus. Porro corporis consectetur ratione tempore quisquam culpa ad cumque velit nostrum!'
  },
  {
    avatar: AVATAR2,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In earum voluptatem doloremque cupiditate maxime, fuga iste ut omnis possimus. Porro corporis consectetur ratione tempore quisquam culpa ad cumque velit nostrum!'
  },
  {
    avatar: AVATAR3,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In earum voluptatem doloremque cupiditate maxime, fuga iste ut omnis possimus. Porro corporis consectetur ratione tempore quisquam culpa ad cumque velit nostrum!'
  },
  {
    avatar: AVATAR4,
    name: 'Ernest Achiever',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In earum voluptatem doloremque cupiditate maxime, fuga iste ut omnis possimus. Porro corporis consectetur ratione tempore quisquam culpa ad cumque velit nostrum!'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
        //Install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
            <SwiperSlide key={index}  className='testimonial'>
          <div className='client_avatar'>
            <img src={avatar} alt="Avatar One" />
          </div>
          <h5 className='client_name'>{name}</h5>
            <small className='client_review'>{review}</small>
        </SwiperSlide>
          )
        })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
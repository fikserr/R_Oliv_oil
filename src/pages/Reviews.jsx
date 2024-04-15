import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import imageOne from "../img/imageone.png"
import imageTwo from "../img/imagetwo.png"
import imageThree from "../img/imagethree.png"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function Reviews() {
  return (
    <div className='reviews container'>
      <h1 className="reviews__title">Отзывы</h1>

      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img src={imageOne} alt="image" className='reviews__img'/> <img src={imageTwo} alt="image" className='reviews__img'/> <img src={imageThree} alt="image" className='reviews__img'/></SwiperSlide>
        <SwiperSlide><img src={imageTwo} alt="image" className='reviews__img'/> <img src={imageThree} alt="image" className='reviews__img'/> <img src={imageOne} alt="image" className='reviews__img'/></SwiperSlide>
        <SwiperSlide><img src={imageThree} alt="image" className='reviews__img'/> <img src={imageOne} alt="image" className='reviews__img'/> <img src={imageTwo} alt="image" className='reviews__img'/></SwiperSlide>

      </Swiper>

      
    </div>
  )
}

export default Reviews
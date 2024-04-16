import imageOne from "../img/imageone.png"
import imageTwo from "../img/imagetwo.png"
import imageThree from "../img/imagethree.png"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



function Reviews() {
  return (
    <div className='reviews container'>
      <h1 className="reviews__title">Отзывы</h1>

      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={imageOne} alt=""  className="reviews__img"/></SwiperSlide>
      <SwiperSlide><img src={imageTwo} alt="" className="reviews__img"/></SwiperSlide>
      <SwiperSlide><img src={imageThree} alt="" className="reviews__img"/></SwiperSlide>
      


    </Swiper>

      
    </div>
  )
}

export default Reviews
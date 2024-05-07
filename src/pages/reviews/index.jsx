import imageOne from "../../img/imageone.png"
import imageTwo from "../../img/imagetwo.png"
import imageThree from "../../img/imagethree.png"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Context } from "../../context/Context";
import { useContext } from "react";
import styles from './review.module.scss'



function Reviews() {
  const {active} = useContext(Context)

  return (
    <div className={`${styles.reviews} ${active ? "active" : ""}`}>
      <h1 className={styles.reviews__title}>Отзывы</h1>

      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}

    >
      <SwiperSlide><img src={imageOne} alt=""  className={styles.reviews__img}/></SwiperSlide>
      <SwiperSlide><img src={imageTwo} alt="" className={styles.reviews__img}/></SwiperSlide>
      <SwiperSlide><img src={imageThree} alt="" className={styles.reviews__img}/></SwiperSlide>
      


    </Swiper>

      
    </div>
  )
}

export default Reviews
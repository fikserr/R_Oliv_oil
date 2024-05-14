import imageOne from "../../img/imageone.png"
import imageTwo from "../../img/imagetwo.png"
import imageThree from "../../img/imagethree.png"
import { Pagination,Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Context } from "../../context/Context";
import { useContext } from "react";
import styles from './review.module.scss'
import Container from "../../container";




function Reviews() {
  const {active} = useContext(Context)

  return (
    <div className={`${styles.reviews} ${active ? styles.active : ""}`}>
      <h1 className={styles.reviews__title}>Отзывы</h1>

     <Container>
        <Swiper
           slidesPerView={3}
           spaceBetween={30}
           pagination={{
             clickable: true,
  
           }}
           navigation={true}
           modules={[Pagination,Navigation]}
           className="mySwiper"

        >

              <SwiperSlide><img src={imageOne} alt=""  className={styles.reviews__img}/></SwiperSlide>
              <SwiperSlide><img src={imageTwo} alt="" className={styles.reviews__img}/></SwiperSlide>
              <SwiperSlide><img src={imageThree} alt="" className={styles.reviews__img}/></SwiperSlide>
              <SwiperSlide><img src={imageOne} alt=""  className={styles.reviews__img}/></SwiperSlide>
              <SwiperSlide><img src={imageTwo} alt="" className={styles.reviews__img}/></SwiperSlide>
              <SwiperSlide><img src={imageThree} alt="" className={styles.reviews__img}/></SwiperSlide>


        </Swiper>
     </Container>

      
    </div>
  )
}

export default Reviews
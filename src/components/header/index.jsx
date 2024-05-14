import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useContext } from "react";
import { Context } from "../../context/Context";
import styles from './header.module.scss'
import Container from '../../container';
import './styles.css';




function Header() {
  
  const {totalCount,basket,SetColor,color} = useContext(Context)

     function handler(swiper) {
      const activeItem = basket[swiper.activeIndex];
      SetColor(activeItem.id); 
  }


  if (color === 1) {
    document.documentElement.dataset.theme = "idone"
  }else if (color === 2) {
    document.documentElement.dataset.theme = "idtwo"
  }else if (color === 3) {
    document.documentElement.dataset.theme = "idthree"
  }else if (color === 4) {
    document.documentElement.dataset.theme = "idfour"
  }
  

  
  
  return (
    <header className={styles.head}>
        <Container>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper" onSlideChange={handler}>
              {basket.map(item => (
                <SwiperSlide className={styles.header} key={item.id} >
                  

                 
                

                            <div className={styles.header__content} >
                                
                                  <div className={styles.header__imgs_left}>
                                    <div className={styles.oil__circle} ><img src={item.oilImg} alt="" className={styles.header__img_oil}/></div>
                                    
                                    <img src={item.fruit} alt="" className={styles.header__img_fruit }/>
                                  </div>

 
                                  <div className={styles.header__info_right}>
                                    <h2 className={styles.product__title}>{item.productTitle}</h2>
                                      <div className={styles.header__btn}>
                                          <button className={`${styles.header__btn_txt} ${item.id == 1 ? styles.active : ""}`}>Для салата</button>
                                          <button className={`${styles.header__btn_txt} ${item.id == 2 ? styles.active : ""}`}>Итальянское</button>
                                          <button className={`${styles.header__btn_txt} ${item.id == 3 ? styles.active : ""}`}>Для мяса</button>
                                          <button className={`${styles.header__btn_txt} ${item.id == 4 ? styles.active : ""}`}>Восточное</button>
                                      </div>
                                    <h1 className={styles.header__title}>{item.title}</h1>
                                    <p className={styles.header__text}>{item.text}</p>
                                    
                                          <div className={styles.header__num}>
                                            <button className={styles.minus} onClick={() => totalCount("-", item.id)}>-</button>
                                              <div className={styles.num}>{item.count}</div>
                                            <button className={styles.plus} onClick={() => totalCount("+", item.id)}>+</button>
                                          </div>

                                    <div className={styles.header__links_bottom}>
                                      <button className={styles.header__link}>ПОДРОБНЕ</button>
                                      <button className={styles.header__link}>В КОРЗИНУ</button>
                                    </div>
                                  </div>
                                  
                            </div>



                            
                            
                           
                </SwiperSlide>

      

              ))}
            </Swiper>
        </Container>

              
               




        </header>
        
  )
}

export default Header
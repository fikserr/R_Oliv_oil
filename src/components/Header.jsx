
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// import Context from "../context/Context";
import { useContext } from "react";
import { Context } from "../context/Context";




function Header() {
  
  const {totalCount,basket} = useContext(Context)
  
  return (
    <header>
            <div className="container">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
              {basket.map(item => (
                <SwiperSlide className="header__content-all" key={item.id}>

                            <div className="header__content">
                                
                                  <div className="header__imgs-left">
                                    <div className={`oil__circle  ${ item.id == 1 ? "idone" : item.id == 2 ? "idtwo" : item.id == 3 ? "idthree" : item.id == 4 ? "idfour" : ""} `}></div>
                                    <img src={item.oilImg} alt="" className="header__img-oil"/>
                                    <img src={item.fruit} alt="" className="header__img-fruit"/>
                                  </div>

 
                                  <div className="header__info-right">
                                    <h2 className="product__title">{item.productTitle}</h2>
                                      <div className="header__btn">
                                          <button className={`header__btn-txt ${item.id == 1 ? "actived" : ""}`}>Для салата</button>
                                          <button className={`header__btn-txt ${item.id == 2 ? "actived" : ""}`}>Итальянское</button>
                                          <button className={`header__btn-txt ${item.id == 3 ? "actived" : ""}`}>Для мяса</button>
                                          <button className={`header__btn-txt ${item.id == 4 ? "actived" : ""}`}>Восточное</button>
                                      </div>
                                    <h1 className="header__title">{item.title}</h1>
                                    <p className="header__text">{item.text}</p>
                                    
                                          <div className="head__num">
                                            <button className="minus" onClick={() => totalCount("-", item.id,item.count)}>-</button>
                                              <div className="num">{item.count}</div>
                                            <button className="plus" onClick={() => totalCount("+", item.id,item.count)}>+</button>
                                          </div>

                                    <div className="header__links-bottom">
                                      <button className="header__link">ПОДРОБНЕ</button>
                                      <button className="header__link">В КОРЗИНУ</button>
                                    </div>
                                  </div>
                                  
                            </div>

                </SwiperSlide>
              ))}
            </Swiper>
        






            </div>






        </header>
  )
}

export default Header
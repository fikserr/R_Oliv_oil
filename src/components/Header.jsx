import salat from "../img/dlia_salata.png";
import italianskoe from "../img/italianskoe.png";
import forMeat from "../img/dlia_myasa.png";
import Eastern from "../img/vostochnoe.png";
import Potato from "../img/image_12.png";
import lagmon from "../img/image_16.png";
import meat from "../img/image_14.png";
import plov from "../img/image_15.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// import Context from "../context/Context";
import { useState,  } from "react";


const data = [
  {
    id:1,
    oilImg: salat,
    fruit: Potato,
    productTitle: "Наши продукты",
    title: `Масло “Для салата”`,
    text: "Название говорит само за себя. Это идеальная заправка, которая даже скучной и привычной капусте придаст неповторимый вкус и аромат. ",

  },
  {
    id:2,
    oilImg: italianskoe,
    fruit: lagmon,
    productTitle: "Наши продукты",
    title: `Масло “Итальянское”`,
    text: "Идеальное решение для легкого и быстрого маринада мяса, можно добавить капельку масла и после приготовления. ",

  },
  {
    id:3,
    oilImg: forMeat,
    fruit: meat,
    productTitle: "Наши продукты",
    title: `Масло “Для мяса”`,
    text: "Идеальное решение для легкого и быстрого маринада мяса, можно добавить капельку масла и после приготовления. ",

  },
  {
    id:4,
    oilImg: Eastern,
    fruit: plov,
    productTitle: "Наши продукты",
    title: `Масло “Восточное”`,
    text: "Идеальное решение для легкого и быстрого маринада мяса, можно добавить капельку масла и после приготовления. ",

  }
]

function Header() {
  
  const [basket,setBakset] = useState(0)
  
  return (
    <header>
            <div className="container">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
              {data.map(item => (
                <SwiperSlide className="header__content-all" key={item.id}>

                            <div className="header__content">
                                
                                  <div className="header__imgs-left">
                                    <div className={`oil__circle `}></div>
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
                                            <button className="minus" onClick={()=>setBasket() }>-</button>
                                              <div className="num">{basket}</div>
                                            <button className="plus" onClick={()=>setBasket() }>+</button>
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
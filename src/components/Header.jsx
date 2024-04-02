
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useContext } from "react";
import { Context } from "../context/Context";
import { IoIosCloseCircleOutline } from "react-icons/io";





function Header() {
  
  const {totalCount,basket,SetColor} = useContext(Context)

     function handler(swiper) {
      const activeItem = basket[swiper.activeIndex];
      SetColor(activeItem.id); 
      
  }


  
  
  return (
    <header>
            <div className="container">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper" onSlideChange={handler}>
              {basket.map(item => (
                <SwiperSlide className="header active" key={item.id} >
                  

                 
                

                            <div className="header__content" >
                                
                                  <div className="header__imgs-left">
                                    <div className="oil__circle" ><img src={item.oilImg} alt="" className="header__img-oil"/></div>
                                    
                                    <img src={item.fruit} alt="" className="header__img-fruit "/>
                                  </div>

 
                                  <div className="header__info-right">
                                    <h2 className="product__title">{item.productTitle}</h2>
                                      <div className="header__btn">
                                          <button className={`header__btn-txt ${item.id == 1 ? "active " : ""}`}>Для салата</button>
                                          <button className={`header__btn-txt ${item.id == 2 ? "active" : ""}`}>Итальянское</button>
                                          <button className={`header__btn-txt ${item.id == 3 ? "active" : ""}`}>Для мяса</button>
                                          <button className={`header__btn-txt ${item.id == 4 ? "active" : ""}`}>Восточное</button>
                                      </div>
                                    <h1 className="header__title">{item.title}</h1>
                                    <p className="header__text">{item.text}</p>
                                    
                                          <div className="header__num">
                                            <button className="minus" onClick={() => totalCount("-", item.id)}>-</button>
                                              <div className="num">{item.count}</div>
                                            <button className="plus" onClick={() => totalCount("+", item.id)}>+</button>
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
              
            <div className="basket container">
                  <div className="basket__top">
                    <h3 className='basket__title'>КОРЗИНА</h3>
                    <p className='basket__close'><IoIosCloseCircleOutline /></p>
                  </div>

                  
                    {basket.map( item => (
                      <div className="basket__products" key={item.id}>
                        <div className={`products__name-liter ${item.count > 0 ? "active" : ""}`}>
                          <h5 className="products__name">{item.title}</h5>
                          <p className="products__liter">{item.liter}</p>
                        </div>
                        <div className={`product container ${item.count > 0 ? "active" : ""}`}>
                            <img src={item.oilImg} alt="" className="product__img "/>
                            <div className="header__num">
                                            <button className="minus" onClick={() => totalCount("-", item.id)}>-</button>
                                              <div className="num">{item.count}</div>
                                            <button className="plus" onClick={() => totalCount("+", item.id)}>+</button>
                            </div>

                            <div className="product__price">
                              <h4 className="product__price-total"> {"so'm"}</h4>
                              <p className='product__close'><IoIosCloseCircleOutline /></p>

                            </div>

                        </div>

                      </div>
                    ))}



                  



              </div>

            
            

           

        






            </div>

              
               




        </header>
        
  )
}

export default Header
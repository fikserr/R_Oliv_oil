import salat from "../img/dlia_salata.png";
import italianskoe from "../img/italianskoe.png";
import forMeat from "../img/dlia_myasa.png";
import Eastern from "../img/vostochnoe.png";
import Potato from "../img/image_12.png";
import lagmon from "../img/image_16.png";
import meat from "../img/image_14.png";
import plov from "../img/image_15.png";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";


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
  return (
    <header>
            <div className="container">

            
              {
                data.map((item)=>{
                  return <div className="header__content-all" key={item.id}>
                        <button className="next"><MdNavigateBefore/></button>
                            <div className="header__content">
                                
                                  <div className="header__imgs-left">
                                    <div className="oil__circle"></div>
                                    <img src={item.oilImg} alt="" className="header__img-oil"/>
                                    <img src={item.fruit} alt="" className="header__img-fruit"/>
                                  </div>


                                  <div className="header__info-right">
                                    <h2 className="product__title">{item.productTitle}</h2>
                                      <div className="header__btn">
                                          <button className="header__btn-txt actived">Для салата</button>
                                          <button className="header__btn-txt ">Итальянское</button>
                                          <button className="header__btn-txt ">Для мяса</button>
                                          <button className="header__btn-txt ">Восточное</button>
                                      </div>
                                    <h1 className="header__title">{item.title}</h1>
                                    <p className="header__text">{item.text}</p>
                                    
                                          <div className="head__num">
                                            <button className="minus">-</button>
                                              <div className="num">0</div>
                                            <button className="plus">+</button>
                                          </div>

                                    <div className="header__links-bottom">
                                      <button className="header__link"><a href="">ПОДРОБНЕЕ</a></button>
                                      <button className="header__link"><a href="">В КОРЗИНУ</a></button>
                                    </div>
                                  </div>
                                  
                            </div>
                        <button className="back"><MdNavigateNext/></button>

                          </div>
  
                })
              }






            </div>






        </header>
  )
}

export default Header
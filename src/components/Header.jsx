import Italianskoe from "../img/dlia_salata.png";
import Potato from "../img/image_12.png";


function Header() {
  return (
    <header>
            <div className="container">

            <div className="header__content">
                                <div className="header__imgs-left">
                                    <div className="oil__circle"></div>
                                    <img src={Italianskoe} alt="" className="dlia_salata"/>
                                    <img src={Potato} alt="" className="potato"/>
                                </div>


                              <div className="header__info-right">
                                <h2>Наши продукты</h2>
                                  <div className="head__btn">
                                      <button className="actived">Для салата</button>
                                      <button>Итальянское</button>
                                      <button>Для мяса</button>
                                      <button>Восточное</button>
                                  </div>
                                <h1>Масло “Для салата”</h1>
                                <p>Название говорит само за себя. Это идеальная заправка, которая даже скучной и привычной капусте придаст неповторимый вкус и аромат. 
                                </p>
                                
                                .head__

                                <div className="see">
                                  <button><a href="">ПОДРОБНЕЕ</a></button>
                                  <button><a href="">В КОРЗИНУ</a></button>
                                </div>
                              </div>


                        </div>
                







            </div>






        </header>
  )
}

export default Header
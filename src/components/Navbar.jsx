import { useContext } from "react";
import Logo from "../img/logo.png"
import { BsBasket } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { Context } from "../context/Context";


function Navbar() {
    const {sonlar} = useContext(Context)
  return (
            <nav className="navbar">
                <div className="container">

                    

                        <div className="nav__content">
                            <div className="circle"><img src={Logo} alt="image" className="circle__logo"/></div>
                            
                                <ul className="nav__links">
                                    <li className="nav__link"><a href="sec__oil">Масло</a></li>
                                    <li className="nav__link"><a href="about">О нас</a></li>
                                    <li className="nav__link"><a href="">Отзывы</a></li>
                                    <li className="nav__link"><a href="">Оплата и доставка</a></li>
                                    <li className="nav__link"><a href="">Контакты</a></li>
                                        
                                </ul>   
                                        

                                        <div className="nav__basket">
                                                <div className="menu">
                                                    <div><IoMenu /></div>
                                                </div>
                                            <div>
                                                <div className="basket"><BsBasket/></div>
                                                <div className={`nav__basket-number ${sonlar > 0 ? "actived" : ""}`}>{sonlar}</div>
                                                </div>
                                        </div>

                        </div>

                </div>

            </nav>

  )
}

export default Navbar
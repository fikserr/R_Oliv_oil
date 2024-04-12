import { useContext } from "react";
import Logo from "../img/logo.png"
import { BsBasket } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { Context } from "../context/Context";
import {  NavLink } from "react-router-dom"


function Navbar() {
    const {sonlar,setActive} = useContext(Context)
  return (
            <nav className="navbar">
                <div className="container">

                    

                        <div className="nav">
                            <NavLink to="/" className="nav__circle"><img src={Logo} alt="image" className="nav__circle-logo"/></NavLink>
                            
                                <div className="nav__links">

                                    <NavLink to="/oilcard" className="nav__link">Масло</NavLink>
                                    <NavLink to="/about" className="nav__link">О нас</NavLink>
                                    <NavLink to="/reviews" className="nav__link">Отзывы</NavLink>
                                    <NavLink to="/paymentDelivery" className="nav__link">Оплата и доставка</NavLink>
                                    <NavLink to="/contact" className="nav__link">Контакты</NavLink>
                                </div>
                                        

                                        <div className="nav__basket" onClick={()=>setActive(true) }>
                                                <div className="menu">
                                                    <div><IoMenu /></div>
                                                </div>
                                            <div>
                                                <p className="basket__right"><BsBasket/></p>
                                                <div className={`basket__number ${sonlar > 0 ? "active" : ""}`}>{sonlar}</div>
                                                </div>
                                            </div>

                        </div>

                </div>

            </nav>

  )
}

export default Navbar
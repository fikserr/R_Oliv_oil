import { useContext } from "react";
import Logo from "../../img/logo.png"
import { BsBasket } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { Context } from "../../context/Context";
import {  NavLink } from "react-router-dom"
import styles from './navbar.module.scss'
import Container from "../../container";


function Navbar() {
    const {sonlar,setActive} = useContext(Context)
  return (
            <nav className={styles.navbar}>
               <Container>
                <div className={styles.nav}>
                                <NavLink to="/" className={styles.nav__circle}><img src={Logo} alt="image" className="nav__circle-logo"/></NavLink>
                                
                                    <div className={styles.nav__links}>

                                        <NavLink to="/oilcard" className={styles.nav__link}>Масло</NavLink>
                                        <NavLink to="/about" className={styles.nav__link}>О нас</NavLink>
                                        <NavLink to="/reviews" className={styles.nav__link}>Отзывы</NavLink>
                                        <NavLink to="/paymentDelivery" className={styles.nav__link}>Оплата и доставка</NavLink>
                                        <NavLink to="/contact" className={styles.nav__link}>Контакты</NavLink>
                                    </div>
                                            

                                            <div className={styles.nav__basket} onClick={()=>setActive(true) }>
                                                    <div className={styles.menu}>
                                                        <div><IoMenu /></div>
                                                    </div>
                                                <div>
                                                    <p className={styles.basket__right}><BsBasket/></p>
                                                    <div className={`${styles.basket__number} ${sonlar > 0 ? "active" : ""}`}>{sonlar}</div>

                                                    </div>
                                                </div>

                            </div>

               </Container>

            </nav>

  )
}

export default Navbar
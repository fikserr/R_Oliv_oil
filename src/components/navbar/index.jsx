import Logo from "../../img/logo.png"
import { BsBasket } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import {  NavLink } from "react-router-dom"
import { useContext } from "react";
import { Context } from "../../context/Context";
import styles from './navbar.module.scss'
import Container from "../../container";


function Navbar() {
    const {sonlar,setActive} = useContext(Context)
  return (
            <nav className={styles.navbar}>
               <Container>
                <div className={styles.nav}>
                                <NavLink to="/" className={styles.nav__circle}><img src={Logo} alt="image" className={styles.nav__circle_logo}/></NavLink>
                                
                                    <div className={styles.nav__links}>

                                        <NavLink to="/oilcard" className={styles.nav__link}>Масло</NavLink>
                                        <NavLink to="/about" className={styles.nav__link}>О нас</NavLink>
                                        <NavLink to="/reviews" className={styles.nav__link}>Отзывы</NavLink>
                                        <NavLink to="/paymentDelivery" className={styles.nav__link}>Оплата и доставка</NavLink>
                                        <NavLink to="/contact" className={styles.nav__link}>Контакты</NavLink>
                                    </div>
                                            

                                            <div className={styles.nav__basket} >
                                                    <div className={styles.menu}>
                                                        <div><IoMenu /></div>
                                                    </div>
                                                <div>
                                                    <button className={styles.basket__right} onClick={()=>setActive(true) }><BsBasket/></button>
                                                    <div className={`${styles.basket__number} ${sonlar > 0 ? styles.active : ""}`}>{sonlar}</div>

                                                    </div>
                                                </div>

                            </div>

               </Container>

            </nav>

  )
}

export default Navbar
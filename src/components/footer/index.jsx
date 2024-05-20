import Container from "../../container";
import styles from "./footer.module.scss";
import Logo from "../../img/logo.png";
import { NavLink } from "react-router-dom";
import whiteFacebook from '../../img/whitefacebook.svg'
import whiteInstagram from '../../img/whiteinstagram.svg'
import whiteTelegram from '../../img/whitetelegram.svg'
import whiteViber from '../../img/whiteviber.svg'
import { useContext } from "react";
import { Context } from "../../context/Context";
function Footer() {
  const {active} = useContext(Context)
  return (
    <div className={`${styles.footer} ${active ? styles.active : ""}`}>
      <Container>
        <div className={styles.footer__content}>
          <img src={Logo} alt="logo"  className={styles.footer__content_img}/>
          <div className={styles.footer__content_links}>
            <NavLink to="/oilcard" className={styles.nav__link}>
              Масло
            </NavLink>
            <NavLink to="/about" className={styles.nav__link}>
              О нас
            </NavLink>
            <NavLink to="/reviews" className={styles.nav__link}>
              Отзывы
            </NavLink>
            <NavLink to="/paymentDelivery" className={styles.nav__link}>
              Оплата и доставка
            </NavLink>
            <NavLink to="/contact" className={styles.nav__link}>
              Контакты
            </NavLink>
          </div>
          <div className={styles.footer__content_social}>
            <a href="https://www.facebook.com/r.olio8/"><img src={whiteFacebook} alt="facebook" /></a>
            <a href="https://www.instagram.com/r.olio_/"><img src={whiteInstagram} alt="Instagram" /></a>
            <a href="https://t.me/r_olio"><img src={whiteTelegram} alt="Telegram" /></a>
            <a href="+38 (066) 11-43-558"><img src={whiteViber} alt="Viber" /></a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;

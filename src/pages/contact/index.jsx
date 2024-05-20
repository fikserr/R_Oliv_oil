import Container from '../../container'
import styles from './contact.module.scss'
import contactImg from '../../img/contactImg.jpg'
import phone from '../../img/phones.svg'
import facebook from '../../img/facebook.svg'
import instagram from '../../img/instagram.svg'
import telegram from '../../img/telegram.svg'
import viber from '../../img/viber.svg'
import { Context } from '../../context/Context'
import { useContext } from 'react'
function Contacts() {
  const {active} = useContext(Context)
  return (
    <div className={`${styles.contacts} ${active ? styles.active : ""}`}>
      <Container>
           <h1 className={styles.contacts__title}>Контакты</h1>

            <div className={styles.contacts__box}>
              <div className={styles.contacts__box_card}></div>
              <img src={contactImg} alt="image" className={styles.contacts__box_img} />
                <div className={styles.contacts__card}>
                      <div className={styles.contacts__card_text}>
                        <img src={phone} alt="image" />
                        <p>+38 (066) 11-43-558</p>
                      </div>
                      <div className={styles.contacts__card_text}>
                        <img src={facebook} alt="image" />
                        <a href="https://www.facebook.com/r.olio8/">https://www.facebook.com/r.olio8/</a>
                      </div>
                      <div className={styles.contacts__card_text}>
                        <img src={instagram} alt="image" />
                        <a href="https://www.instagram.com/r.olio_/">https://www.instagram.com/r.olio_/</a>
                      </div>
                      <div className={styles.contacts__card_text}>
                        <img src={telegram} alt="image" />
                        <a href="https://t.me/r_olio">https://t.me/r_olio</a>
                      </div>
                      <div className={styles.contacts__card_text}>
                        <img src={viber} alt="image" />
                        <p>+38 (066) 11-43-558</p>
                      </div>
                      <button>НАПИСАТЬ НАМ</button>
  
                </div>
            </div>



      </Container>
    </div>
  )
}

export default Contacts
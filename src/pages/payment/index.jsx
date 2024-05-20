import truck from '../../img/truck.svg'
import shop from '../../img/shop.svg'
import box from '../../img/box.svg'
import leaf from '../../img/leaf.png'
import brokly from '../../img/brokly.png'
import cash from '../../img/cash.svg'
import credit from '../../img/credit.svg'
import coins from '../../img/coins.svg'
import Container from '../../container'
import styles from './pament.module.scss'
import { useContext } from 'react'
import { Context } from '../../context/Context'

function PaymentDelivery() {
  const {active} = useContext(Context)
  return (
    
    <div className={`${styles.paymentdelivery} ${active ? styles.active : ""}`}>
        <div className={styles.delivery__position}>
                <div className={styles.delivery}>
                        <Container>
                        <img src={leaf} alt="" className={styles.delivery__img}/>
                      <div className={styles.delivery__box}>
                          <div className={styles.box}>
                            <img src={truck} alt="" className={styles.box__img}/>
                            <p className={styles.box__text}>Новая почта</p>
                          </div>
                          <div className={styles.box}>
                            <img src={box} alt="" className={styles.box__img}/>
                            <p className={styles.box__text}>Укрпочта</p>
                          </div>
                          <div className={styles.box}>
                            <img src={shop} alt="" className={styles.box__img}/>
                            <p className={styles.box__text}>Самовывоз</p>
                          </div>

                      </div>
                        </Container>
                </div>
                <h3 className={styles.delivery__title}>- Доставка</h3>
            
        </div>
        <div className={styles.payment__position}>
        <h3 className={styles.payment__title}>Оплата -</h3>
                <div className={styles.payment}>
                      <Container>
                          <div className={styles.payment__box}>
                              <div className={styles.box}>
                                <img src={coins} alt="" className={styles.box__img}/>
                                <p className={styles.box__text}>Наложенный платёж</p>
                              </div>
                              <div className={styles.box}>
                                <img src={credit} alt="" className={styles.box__img}/>
                                <p className={styles.box__text}>Приват24</p>
                              </div>
                              <div className={styles.box}>
                                <img src={cash} alt="" className={styles.box__img}/>
                                <p className={styles.box__text}>Самовывоз</p>
                              </div>

                          </div>
                          <img src={brokly} alt="" className={styles.payment__img}/>
                    
                      </Container>
                </div>
                
            
        </div>
    </div>
  )
}

export default PaymentDelivery
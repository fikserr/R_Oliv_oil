import { useState } from 'react';
import 'react-phone-number-input/style.css'
import styles from './order.module.scss'
import PhoneInput from 'react-phone-number-input';
import { FaCcVisa,FaCcMastercard } from "react-icons/fa6";

function Order() {
  const [phone, setPhone] = useState('');
  const [payment, setPayment] = useState('')
  return (
    <div className={styles.order}>
        <form action="#" className={styles.order__form}>
                 <div className={styles.order__left}>

                      <div className={styles.order__left_info}>
                        <span>Имя получателя</span>
                        <input type="text" placeholder='Фамилия Имя Отчество'/>
                      </div>
                      <div className={styles.order__left_info}>
                        <span>Контактный номер телефона</span>
                        <PhoneInput
                        defaultCountry="UZ"
                        value={phone}
                        onChange={(phone)=>setPhone(phone)}
                        />
                      </div> 
                      <div className={styles.order__left_deliver}>
                        <h3 className={styles.order__left_deliver_title}>Способы доставки</h3>
                         <div>
                         <div className={styles.order__left_deliver_radio}>
                            <label>Cамовывоз:</label>
                            <input type="radio" id='mail' value="option1" name="myRadio"/>
                          </div>
                          <div className={styles.order__left_deliver_radio}>
                            <label>Новая почта:</label>
                            <input type="radio" id='mail' value="option2" name="myRadio"/>
                          </div>
                          <div className={styles.order__left_deliver_radio}>
                            <label>Укрпочта:</label>
                            <input type="radio" id='mail' value="option3" name="myRadio"/>
                          </div>
                         </div>
                      </div>

                      <div className={styles.order__left_newMail}>
                        <p className={styles.order__left_newMail_text}>Новая почта:</p>
                        <input type="text"  placeholder='Город' className={styles.order__left_newMail_input}/>
                        <input type="text"  placeholder='Отделение №' className={styles.order__left_newMail_input}/>
                        <input type="text"  placeholder='Ваш комментарий к заказу' className={styles.order__left_newMail_comment}/>
                      </div>



                 </div>

                 <div className={styles.order__right}>

                        <div className={styles.order__right_payment}>
                          <h3 className={styles.order__right_payment_title}>
                          Способ оплаты
                          </h3>
                          <div className={styles.order__right_payment_label}>
                          <label>на карту <input type="radio" name='card' value={payment} onChange={()=>setPayment("card")}/></label>
                          <label>наличным <input type="radio" name='card' value={payment} onChange={()=>setPayment("cash")}/></label><br />
                          </div>
                            
                          <div className={` ${styles.order__right_payment_active} ${payment == "card" ? styles.active : ""}`}>
                          <label ><FaCcVisa /> <input type="radio" name='payment'/></label>
                          <label ><FaCcMastercard/> <input type="radio" name='payment'/></label>
                          </div>

                        </div>


                        <div className={styles.order__right_mail}>

                          <h3 className={styles.order__right_mail_title}>Укрпочта</h3>

                            <div className={styles.order__right_mail_inputs}>
                              <input type="text" placeholder='49000' className={styles.order__right_mail_input_width}/>
                              <input type="text" placeholder='Город' className={styles.order__right_mail_input}/>
                              <input type="text" placeholder='Улица' className={styles.order__right_mail_input}/>
                              <input type="text" placeholder='Дом' className={styles.order__right_mail_input_width}/>
                              <input type="text" placeholder='Дополнительно (подъезд, квартира и т.п.)' className={styles.order__right_mail_input_bottom}/>
                            </div>

                            <button className={styles.order__right_mail_btn}>ОТПРАВИТЬ ЗАКАЗ</button>
                            <button className={styles.order__right_mail_btn}>СБРОСИТЬ</button>
                        </div>

                 </div>
        </form>
    </div>
  )
}

export default Order
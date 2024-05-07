import { Context } from '../../context/Context'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useContext } from 'react'
import styles from './basket.module.scss'
import Container from '../../container';

function Basket() {
    const {totalCount,basket,active,setActive,clearNumber} = useContext(Context)
    
  return (
    <div>
                <div className={`${styles.basket__hover} ${active == true ? "active" : ""}`}> 
                        <Container>
                        <div className={styles.basket__top}>
                          <h3 className={styles.basket__title}>КОРЗИНА</h3>
                          <button className={styles.basket__close} onClick={()=> setActive(false)}><IoIosCloseCircleOutline /></button>
                        </div>

                        
                          {basket.map( item => (
                            <div className={styles.basket__products} key={item.id}>
                              <div className={`${styles.products__name_liter} ${item.count > 0 ? "active" : ""}`}>
                                <h5 className={styles.products__name}>{item.title}</h5>
                                <p className={styles.products__liter}>{item.liter}</p>
                              </div>
                              <div className={`${styles.product} ${ item.count > 0 ? "active" : ""}`}>
                                  <img src={item.oilImg} alt="" className={styles.product__img}/>
                                  <div className={styles.basket__num}>
                                                  <button className={styles.minus} onClick={() => totalCount("-", item.id)}>-</button>
                                                    <div className={styles.num}>{item.count}</div>
                                                  <button className={styles.plus} onClick={() => totalCount("+", item.id)}>+</button>
                                  </div>

                                  <div className={styles.product__price}>
                                    <h4 className={styles.product__price_total}> {item.totalCurrency = item.count * item.currency} so`m</h4>
                                    <button className={styles.product__close} onClick={()=> clearNumber(item.id)}><IoIosCloseCircleOutline /></button>

                                  </div>

                              </div>

                            </div>
                          ))}



                          <div className={styles.basket__info}>
                                  <div className={styles.basket__left}>
                                      <div className={styles.basket__left_box}>
                                        <span>Имя получателя</span>
                                        <input 
                                        type="text"  
                                        placeholder='Фамилия Имя Отчество'
                                        className={styles.basket__left_input}/>
                                      </div>
                                      <div className={styles.basket__left_box}>
                                        <span>Контактный номер телефона</span>
                                        <input 
                                        type="text"  
                                        placeholder='+998 '
                                        className={styles.basket__left_input}/>
                                      </div>
                                  </div>
                                  <div className={styles.basket__right}>

                                  </div>
                          </div>




                        </Container>


                </div>
                      
                 
    </div>
  )
}

export default Basket
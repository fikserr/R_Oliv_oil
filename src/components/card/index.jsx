import { useContext} from "react"
import { Context } from "../../context/Context"
import styles from './card.module.scss'


function Card({data}) {
    const {totalCount,setActive,active} = useContext(Context)
    if (data.id === 1) {
      document.documentElement.dataset.card = "idone"
    }else if (data.id === 2) {
      document.documentElement.dataset.card = "idtwo"
    }else if (data.id === 3) {
      document.documentElement.dataset.card = "idthree"
    }else if (data.id) {
      document.documentElement.dataset.card = "idfour"
    }

  return (
    <div className={`${styles.card} ${active ? styles.active : ""}`}  >
            <div className={styles.card__img_box}>
                <img src={data.littleImg} alt="image" />
            </div>
            <h5 className={styles.card__title}>{data.title}</h5>
            <p className={styles.card__text_one}>{data.text}</p>
            <p className={styles.card__text}>{data.compound}</p>


            <div className={styles.card__info}>
                                        <div className={styles.card__info_num}>
                                            <button className={styles.minus} onClick={() => totalCount("-", data.id)}>-</button>
                                              <div className={styles.num}>{data.count}</div>
                                            <button className={styles.plus} onClick={() => totalCount("+", data.id)}>+</button>
                                          </div>

                                          <div className={styles.card__liter_price}>
                                            <p className={styles.card__liter}>{data.liter}</p>
                                            <p className={styles.card__price}>{data.currency} so`m</p>
                                          </div>


            </div>

            <div className={styles.card__button}>
                <button onClick={()=>setActive(true)}>В КОРЗИНУ</button>
                <button>ЗАКАЗАТЬ В ТГ</button>
            </div>

    </div>
  )
}

export default Card
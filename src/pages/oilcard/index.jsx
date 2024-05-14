import { useContext, } from "react"
import { Context } from "../../context/Context"
import Card from "../../components/card"
import styles from './oilcard.module.scss'
import Container from "../../container"

function OilCard() {
  const {basket,active} = useContext(Context)


  return (
    <div className={`${styles.oil} ${active ? styles.active : ""}`}>
         <Container>
          <h1 className={styles.oil__title}>Масло</h1>
            <div className={styles.oil__cards}>
              {
                basket.map(item=> (
                  <Card key={item.id} data={item} />
                ))
              }
            </div>
         </Container>
    </div>
  )
}

export default OilCard
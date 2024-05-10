import { useContext } from "react"
import { Context } from "../../context/Context"
import family from "../../img/family.jpg"
import oils from "../../img/oils.jpg"
import styles from './about.module.scss'
import Container from "../../container"


function About() {
  const {active} = useContext(Context)

  return (
    <div className={`${styles.about} ${active ? styles.active : ""}`}>

          <Container>
                    <h1 className={styles.about__title}>О нас</h1>

                      <div className={styles.about__content}>
                        <div className={styles.about__square}></div>
                        <img src={family} alt="image" className={styles.about__img}/>
                        <div className={styles.about__txt}>
                          <h3 className={styles.about__txt_title}>Кто мы</h3>
                          <p className={styles.about__txt_text}>Мы пара: Таня и Рома и мы создатели пряного оливкового масла R.olio. 
                            Предыстория:
                            Так сложилось в нашей паре, что готовит у нас Рома, он очень увлечен кулинарией и каждый раз придумывает что-то новенькое.
                            Накануне прошлого Нового года, мы готовили подарки нашим друзьям и родственникам. Нам захотелось к подаркам добавить что-то необычное, от себя.
                            И к нам пришла идея, Рома готовил вкуснейшее пряное оливковое масло для своих рецептов, добавлял розмарин, тимьян, чеснок, разные виды перцев...каждый раз получался новый неповторимый вкус.</p>
                        </div>
                      </div>



                      <div className={styles.about__content }>
                        <div className={styles.about__square_right}></div>
                        <img src={oils} alt="image" className={styles.about__img_right }/>
                        <div className={styles.about__txt_right}>
                          <h3 className={styles.about__txt_title}>Что мы делаем</h3>
                          <p className={styles.about__txt_text}>И мы решили сделать такое масло, как добавление к подарку. Надо сказать, что наши близкие оценили презент и просили снова и снова сделать им такое масло.
                      И появилась идея: почему бы не попробовать запустить такое масло в продажу?Рома долго выверял рецепты, я разрабатывала дизайн этикеток и искала поставщиков. 
                      И вот мы готовы представить его вам!
                      Мы старались сделать наше масло максимально доступным, при этом не потеряв в качестве. Стоимость бутылки(250мл) - всего 115грн.</p>
                        </div>
                      </div>




          </Container>




    </div>
  )
}

export default About
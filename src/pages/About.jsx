import family from "../img/family.jpg"
import oils from "../img/oils.jpg"

function About() {
  return (
    <div className="about">

      <div className="container">
            <h1 className="about__title">О нас</h1>

            <div className="about__content">
              <div className="about__square"></div>
              <img src={family} alt="image" className="about__img"/>
              <div className="about__txt">
                <h3 className="about__txt-title">Кто мы</h3>
                <p className="about__txt-text">Мы пара: Таня и Рома и мы создатели пряного оливкового масла R.olio. 
                  Предыстория:
                  Так сложилось в нашей паре, что готовит у нас Рома, он очень увлечен кулинарией и каждый раз придумывает что-то новенькое.
                  Накануне прошлого Нового года, мы готовили подарки нашим друзьям и родственникам. Нам захотелось к подаркам добавить что-то необычное, от себя.
                  И к нам пришла идея, Рома готовил вкуснейшее пряное оливковое масло для своих рецептов, добавлял розмарин, тимьян, чеснок, разные виды перцев...каждый раз получался новый неповторимый вкус.</p>
              </div>
            </div>



            <div className="about__content ">
              <div className="about__square active"></div>
              <img src={oils} alt="image" className="about__img active"/>
              <div className="about__txt active">
                <h3 className="about__txt-title">Что мы делаем</h3>
                <p className="about__txt-text">И мы решили сделать такое масло, как добавление к подарку. Надо сказать, что наши близкие оценили презент и просили снова и снова сделать им такое масло.
И появилась идея: почему бы не попробовать запустить такое масло в продажу?Рома долго выверял рецепты, я разрабатывала дизайн этикеток и искала поставщиков. 
И вот мы готовы представить его вам!
Мы старались сделать наше масло максимально доступным, при этом не потеряв в качестве. Стоимость бутылки(250мл) - всего 115грн.</p>
              </div>
            </div>





      </div>




    </div>
  )
}

export default About